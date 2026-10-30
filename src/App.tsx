import React, { useState, useEffect, useMemo } from 'react';
import { SectionId, UserResponse, ExamResult, MockTestPaper } from './types/cat.ts';
import {
  getAllAvailablePapers,
  getPaperById,
  saveCustomPaper,
  deleteCustomPaper,
  getSectionMetadataForQuestions,
} from './data/mockRegistry.ts';
import { evaluateTest } from './utils/scoring.ts';
import { CatHeader } from './components/CatHeader.tsx';
import { CatPalette } from './components/CatPalette.tsx';
import { CatQuestionArea } from './components/CatQuestionArea.tsx';
import { CatCalculator } from './components/CatCalculator.tsx';
import { CatQuestionPaperModal } from './components/CatQuestionPaperModal.tsx';
import { CatInstructionsModal } from './components/CatInstructionsModal.tsx';
import { CatSubmitModal } from './components/CatSubmitModal.tsx';
import { CatScorecard } from './components/CatScorecard.tsx';
import { CatSolutionsReview } from './components/CatSolutionsReview.tsx';
import { CatPrintablePaper } from './components/CatPrintablePaper.tsx';
import { CatPaperManagerModal } from './components/CatPaperManagerModal.tsx';

const SECTIONS_ORDER: SectionId[] = ['VARC', 'LRDI', 'QA'];
const SECTION_DURATION_SECONDS = 40 * 60; // 2400 seconds (40 mins)

const STORAGE_ACTIVE_PAPER = 'cat_active_paper_id';

export default function App() {
  // Papers state
  const [availablePapers, setAvailablePapers] = useState<MockTestPaper[]>(() => getAllAvailablePapers());
  const [currentPaperId, setCurrentPaperId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_ACTIVE_PAPER);
      return saved || 'cat-mock-1';
    } catch {
      return 'cat-mock-1';
    }
  });

  const [isPaperManagerOpen, setIsPaperManagerOpen] = useState(false);

  // Active paper object & its questions
  const currentPaper = useMemo(() => {
    return availablePapers.find((p) => p.id === currentPaperId) || availablePapers[0] || getPaperById(currentPaperId);
  }, [availablePapers, currentPaperId]);

  const currentQuestions = useMemo(() => currentPaper.questions, [currentPaper]);

  // Dynamic section metadata for active test paper
  const sectionMetadata = useMemo(() => {
    return {
      VARC: getSectionMetadataForQuestions(currentQuestions, 'VARC'),
      LRDI: getSectionMetadataForQuestions(currentQuestions, 'LRDI'),
      QA: getSectionMetadataForQuestions(currentQuestions, 'QA'),
    };
  }, [currentQuestions]);

  // Keys namespaced per paper
  const getStorageKey = (suffix: string) => {
    if (currentPaperId === 'cat-mock-1') {
      return `cat_mock_1_${suffix}`;
    }
    return `cat_paper_${currentPaperId}_${suffix}`;
  };

  // State hooks
  const [currentSection, setCurrentSection] = useState<SectionId>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_current_section' : `cat_paper_${currentPaperId}_current_section`;
      const saved = localStorage.getItem(key) as SectionId;
      return SECTIONS_ORDER.includes(saved) ? saved : 'VARC';
    } catch {
      return 'VARC';
    }
  });

  const [completedSections, setCompletedSections] = useState<SectionId[]>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_completed_sections' : `cat_paper_${currentPaperId}_completed_sections`;
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentQuestionId, setCurrentQuestionId] = useState<number>(() => {
    return currentQuestions[0]?.id || 1;
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_submitted' : `cat_paper_${currentPaperId}_submitted`;
      return localStorage.getItem(key) === 'true';
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState<'exam' | 'solutions' | 'scorecard' | 'paper'>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_submitted' : `cat_paper_${currentPaperId}_submitted`;
      return localStorage.getItem(key) === 'true' ? 'scorecard' : 'exam';
    } catch {
      return 'exam';
    }
  });

  const [mobileExamView, setMobileExamView] = useState<'question' | 'palette'>('question');
  const [strictMode, setStrictMode] = useState<boolean>(true); // CAT Rule: strict mode on by default
  const [switchWarning, setSwitchWarning] = useState<string | null>(null);

  // Modals
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isQuestionPaperOpen, setIsQuestionPaperOpen] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  // Section-specific timers (40 mins = 2400 seconds each)
  const [sectionTimeRemaining, setSectionTimeRemaining] = useState<Record<SectionId, number>>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_time_remaining' : `cat_paper_${currentPaperId}_time_remaining`;
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return {
      VARC: SECTION_DURATION_SECONDS,
      LRDI: SECTION_DURATION_SECONDS,
      QA: SECTION_DURATION_SECONDS,
    };
  });

  // Track time spent per section
  const [sectionTimeSpent, setSectionTimeSpent] = useState<Record<SectionId, number>>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_time_spent' : `cat_paper_${currentPaperId}_time_spent`;
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore
    }
    return {
      VARC: 0,
      LRDI: 0,
      QA: 0,
    };
  });

  const [isTimerPaused, setIsTimerPaused] = useState<boolean>(false);

  // Responses dictionary
  const [responses, setResponses] = useState<Record<number, UserResponse>>(() => {
    try {
      const key = currentPaperId === 'cat-mock-1' ? 'cat_mock_1_responses' : `cat_paper_${currentPaperId}_responses`;
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Switch Paper handler
  const handleSelectPaper = (paperId: string) => {
    if (paperId === currentPaperId) return;

    // Save current paper selection
    try {
      localStorage.setItem(STORAGE_ACTIVE_PAPER, paperId);
    } catch {
      // Ignore
    }

    setCurrentPaperId(paperId);

    // Retrieve target paper's questions
    const targetPaper = availablePapers.find((p) => p.id === paperId) || getPaperById(paperId);
    const newQuestions = targetPaper.questions;

    // Load target paper states
    const responsesKey = paperId === 'cat-mock-1' ? 'cat_mock_1_responses' : `cat_paper_${paperId}_responses`;
    const submittedKey = paperId === 'cat-mock-1' ? 'cat_mock_1_submitted' : `cat_paper_${paperId}_submitted`;
    const sectionKey = paperId === 'cat-mock-1' ? 'cat_mock_1_current_section' : `cat_paper_${paperId}_current_section`;
    const completedKey = paperId === 'cat-mock-1' ? 'cat_mock_1_completed_sections' : `cat_paper_${paperId}_completed_sections`;
    const timeRemainingKey = paperId === 'cat-mock-1' ? 'cat_mock_1_time_remaining' : `cat_paper_${paperId}_time_remaining`;
    const timeSpentKey = paperId === 'cat-mock-1' ? 'cat_mock_1_time_spent' : `cat_paper_${paperId}_time_spent`;

    try {
      const savedResponses = localStorage.getItem(responsesKey);
      setResponses(savedResponses ? JSON.parse(savedResponses) : {});

      const savedSubmitted = localStorage.getItem(submittedKey) === 'true';
      setIsSubmitted(savedSubmitted);
      setActiveTab(savedSubmitted ? 'scorecard' : 'exam');

      const savedSection = localStorage.getItem(sectionKey) as SectionId;
      const validSec = SECTIONS_ORDER.includes(savedSection) ? savedSection : 'VARC';
      setCurrentSection(validSec);

      const savedCompleted = localStorage.getItem(completedKey);
      setCompletedSections(savedCompleted ? JSON.parse(savedCompleted) : []);

      const savedRemaining = localStorage.getItem(timeRemainingKey);
      setSectionTimeRemaining(
        savedRemaining
          ? JSON.parse(savedRemaining)
          : {
              VARC: SECTION_DURATION_SECONDS,
              LRDI: SECTION_DURATION_SECONDS,
              QA: SECTION_DURATION_SECONDS,
            }
      );

      const savedSpent = localStorage.getItem(timeSpentKey);
      setSectionTimeSpent(
        savedSpent
          ? JSON.parse(savedSpent)
          : {
              VARC: 0,
              LRDI: 0,
              QA: 0,
            }
      );

      // Set first question of active section
      const firstQ = newQuestions.find((q) => q.section === validSec) || newQuestions[0];
      if (firstQ) {
        setCurrentQuestionId(firstQ.id);
      }
    } catch {
      // Fallback
      setResponses({});
      setIsSubmitted(false);
      setActiveTab('exam');
      setCurrentSection('VARC');
      if (newQuestions[0]) {
        setCurrentQuestionId(newQuestions[0].id);
      }
    }

    setSwitchWarning(`Loaded test paper: "${targetPaper.title}"`);
  };

  // Import custom paper handler
  const handleImportNewPaper = (newPaper: MockTestPaper) => {
    saveCustomPaper(newPaper);
    setAvailablePapers(getAllAvailablePapers());
  };

  // Delete custom paper handler
  const handleDeleteCustomPaper = (paperId: string) => {
    deleteCustomPaper(paperId);
    setAvailablePapers(getAllAvailablePapers());
    if (currentPaperId === paperId) {
      handleSelectPaper('cat-mock-1');
    }
  };

  // Save state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(getStorageKey('responses'), JSON.stringify(responses));
    } catch {
      // Ignore
    }
  }, [responses, currentPaperId]);

  useEffect(() => {
    try {
      localStorage.setItem(getStorageKey('submitted'), String(isSubmitted));
    } catch {
      // Ignore
    }
  }, [isSubmitted, currentPaperId]);

  useEffect(() => {
    try {
      localStorage.setItem(getStorageKey('current_section'), currentSection);
      localStorage.setItem(getStorageKey('completed_sections'), JSON.stringify(completedSections));
      localStorage.setItem(getStorageKey('time_remaining'), JSON.stringify(sectionTimeRemaining));
      localStorage.setItem(getStorageKey('time_spent'), JSON.stringify(sectionTimeSpent));
    } catch {
      // Ignore
    }
  }, [currentSection, completedSections, sectionTimeRemaining, sectionTimeSpent, currentPaperId]);

  // Section Timer countdown (40 mins for current section)
  useEffect(() => {
    if (isSubmitted || isTimerPaused || activeTab !== 'exam') return;

    const interval = setInterval(() => {
      setSectionTimeRemaining((prevRemaining) => {
        const currentSecTime = prevRemaining[currentSection];

        // If time ran out for this section (0 seconds left)
        if (currentSecTime <= 1) {
          clearInterval(interval);
          handleAutoSectionTransition();
          return {
            ...prevRemaining,
            [currentSection]: 0,
          };
        }

        return {
          ...prevRemaining,
          [currentSection]: currentSecTime - 1,
        };
      });

      // Increment time spent on active section
      setSectionTimeSpent((prevSpent) => ({
        ...prevSpent,
        [currentSection]: (prevSpent[currentSection] || 0) + 1,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [isSubmitted, isTimerPaused, activeTab, currentSection, currentPaperId]);

  // Clear warning after 4 seconds
  useEffect(() => {
    if (switchWarning) {
      const timeout = setTimeout(() => setSwitchWarning(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [switchWarning]);

  // Current question data
  const currentQuestion =
    currentQuestions.find((q) => q.id === currentQuestionId) || currentQuestions[0];

  // Section questions
  const sectionQuestions = currentQuestions.filter((q) => q.section === currentSection);

  // Mark newly visited question as 'not_answered' if it was 'not_visited'
  useEffect(() => {
    if (!currentQuestion) return;
    setResponses((prev) => {
      const existing = prev[currentQuestionId];
      if (!existing || existing.status === 'not_visited') {
        return {
          ...prev,
          [currentQuestionId]: {
            answer: existing?.answer || '',
            status: existing?.answer ? 'answered' : 'not_answered',
            timeSpentSeconds: existing?.timeSpentSeconds || 0,
            isBookmarked: existing?.isBookmarked || false,
          },
        };
      }
      return prev;
    });
  }, [currentQuestionId, currentPaperId]);

  // Check if current section is last section in order
  const currentSecIndex = SECTIONS_ORDER.indexOf(currentSection);
  const isFinalSection = currentSecIndex === SECTIONS_ORDER.length - 1;
  const nextSectionId = !isFinalSection ? SECTIONS_ORDER[currentSecIndex + 1] : undefined;

  // Enforce CAT Rule: Section switching not allowed!
  const handleSelectSection = (targetSection: SectionId) => {
    if (targetSection === currentSection) return;

    if (strictMode) {
      if (completedSections.includes(targetSection)) {
        setSwitchWarning(
          `Section switching is not allowed. ${sectionMetadata[targetSection]?.shortName || targetSection} has already been completed and locked.`
        );
      } else {
        setSwitchWarning(
          `Section switching is not allowed in CAT. You must finish ${sectionMetadata[currentSection]?.shortName || currentSection} (40 min timer) before unlocking ${sectionMetadata[targetSection]?.shortName || targetSection}.`
        );
      }
      return;
    }

    // In unlocked practice mode
    setCurrentSection(targetSection);
    const firstOfSection = currentQuestions.find((q) => q.section === targetSection);
    if (firstOfSection) {
      setCurrentQuestionId(firstOfSection.id);
    }
  };

  const handleSelectQuestion = (questionId: number) => {
    const targetQ = currentQuestions.find((q) => q.id === questionId);
    if (!targetQ) return;

    // In CAT, candidate cannot jump to a question outside active section!
    if (strictMode && targetQ.section !== currentSection) {
      setSwitchWarning(
        `In CAT, you can only attempt questions in the active section (${sectionMetadata[currentSection]?.shortName || currentSection}).`
      );
      return;
    }

    setCurrentQuestionId(questionId);
    setMobileExamView('question');
  };

  // Answer modification handlers
  const handleAnswerChange = (newAnswer: string) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: {
        ...(prev[currentQuestionId] || { timeSpentSeconds: 0, isBookmarked: false }),
        answer: newAnswer,
        status: newAnswer ? 'answered' : 'not_answered',
      },
    }));
  };

  const moveToNextQuestion = () => {
    const currentIdxInSection = sectionQuestions.findIndex((q) => q.id === currentQuestionId);
    if (currentIdxInSection >= 0 && currentIdxInSection < sectionQuestions.length - 1) {
      setCurrentQuestionId(sectionQuestions[currentIdxInSection + 1].id);
    } else {
      setSwitchWarning(
        `You have reached the last question of ${sectionMetadata[currentSection]?.shortName || currentSection}. Review questions or click "Finish ${sectionMetadata[currentSection]?.shortName || currentSection}" when ready.`
      );
    }
  };

  const handleSaveAndNext = () => {
    const resp = responses[currentQuestionId];
    const hasAnswer = resp && resp.answer && resp.answer.trim().length > 0;

    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: {
        ...(prev[currentQuestionId] || { timeSpentSeconds: 0, isBookmarked: false }),
        answer: prev[currentQuestionId]?.answer || '',
        status: hasAnswer ? 'answered' : 'not_answered',
      },
    }));

    moveToNextQuestion();
  };

  const handleMarkForReviewAndNext = () => {
    const resp = responses[currentQuestionId];
    const hasAnswer = resp && resp.answer && resp.answer.trim().length > 0;

    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: {
        ...(prev[currentQuestionId] || { timeSpentSeconds: 0, isBookmarked: false }),
        answer: prev[currentQuestionId]?.answer || '',
        status: hasAnswer ? 'answered_marked_for_review' : 'marked_for_review',
      },
    }));

    moveToNextQuestion();
  };

  const handleClearResponse = () => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: {
        ...(prev[currentQuestionId] || { timeSpentSeconds: 0, isBookmarked: false }),
        answer: '',
        status: 'not_answered',
      },
    }));
  };

  const handlePreviousQuestion = () => {
    const currentIdxInSection = sectionQuestions.findIndex((q) => q.id === currentQuestionId);
    if (currentIdxInSection > 0) {
      setCurrentQuestionId(sectionQuestions[currentIdxInSection - 1].id);
    }
  };

  const handleNextQuestion = () => {
    moveToNextQuestion();
  };

  const handleToggleBookmark = (id?: number) => {
    const targetId = id !== undefined ? id : currentQuestionId;
    setResponses((prev) => {
      const current = prev[targetId] || {
        answer: '',
        status: 'not_visited',
        timeSpentSeconds: 0,
        isBookmarked: false,
      };
      return {
        ...prev,
        [targetId]: {
          ...current,
          isBookmarked: !current.isBookmarked,
        },
      };
    });
  };

  // Section completion & progression
  const handleAutoSectionTransition = () => {
    if (isFinalSection) {
      // Entire test time finished!
      handleFinalSubmit();
    } else if (nextSectionId) {
      setCompletedSections((prev) => [...prev, currentSection]);
      setCurrentSection(nextSectionId);
      const firstQ = currentQuestions.find((q) => q.section === nextSectionId);
      if (firstQ) setCurrentQuestionId(firstQ.id);
      setSwitchWarning(
        `Time up for ${sectionMetadata[currentSection]?.shortName || currentSection}! Automatically switched to ${sectionMetadata[nextSectionId]?.shortName || nextSectionId} with a fresh 40-minute timer.`
      );
    }
  };

  const handleConfirmSectionOrExamSubmit = () => {
    if (isFinalSection) {
      handleFinalSubmit();
    } else if (nextSectionId) {
      setCompletedSections((prev) => [...prev, currentSection]);
      setCurrentSection(nextSectionId);
      const firstQ = currentQuestions.find((q) => q.section === nextSectionId);
      if (firstQ) setCurrentQuestionId(firstQ.id);
      setIsSubmitModalOpen(false);
      setSwitchWarning(
        `Section ${sectionMetadata[currentSection]?.shortName || currentSection} submitted and locked. Welcome to ${sectionMetadata[nextSectionId]?.shortName || nextSectionId} (40:00).`
      );
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitted(true);
    setIsSubmitModalOpen(false);
    setActiveTab('scorecard');
  };

  const handleRetakeExam = () => {
    if (window.confirm(`Are you sure you want to restart "${currentPaper.title}"? Your responses and timer for this paper will be cleared.`)) {
      setResponses({});
      setIsSubmitted(false);
      setCompletedSections([]);
      setCurrentSection('VARC');
      if (currentQuestions[0]) {
        setCurrentQuestionId(currentQuestions[0].id);
      }
      setSectionTimeRemaining({
        VARC: SECTION_DURATION_SECONDS,
        LRDI: SECTION_DURATION_SECONDS,
        QA: SECTION_DURATION_SECONDS,
      });
      setSectionTimeSpent({
        VARC: 0,
        LRDI: 0,
        QA: 0,
      });
      setActiveTab('exam');
      try {
        localStorage.removeItem(getStorageKey('responses'));
        localStorage.removeItem(getStorageKey('submitted'));
        localStorage.removeItem(getStorageKey('current_section'));
        localStorage.removeItem(getStorageKey('completed_sections'));
        localStorage.removeItem(getStorageKey('time_remaining'));
        localStorage.removeItem(getStorageKey('time_spent'));
      } catch {
        // Ignore
      }
    }
  };

  // Evaluate test with exact time spent per section for Recharts
  const examResult: ExamResult = useMemo(() => {
    return evaluateTest(currentQuestions, responses, sectionTimeSpent);
  }, [currentQuestions, responses, sectionTimeSpent]);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#f1f5f9] overflow-hidden font-sans">
      {/* Top Header */}
      <CatHeader
        currentSection={currentSection}
        completedSections={completedSections}
        onSelectSection={handleSelectSection}
        sectionSecondsRemaining={sectionTimeRemaining[currentSection]}
        isTimerPaused={isTimerPaused}
        onTogglePauseTimer={() => setIsTimerPaused(!isTimerPaused)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenQuestionPaper={() => setIsQuestionPaperOpen(true)}
        onOpenInstructions={() => setIsInstructionsOpen(true)}
        onSubmitSectionOrExam={() => setIsSubmitModalOpen(true)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isSubmitted={isSubmitted}
        strictMode={strictMode}
        onToggleStrictMode={() => setStrictMode(!strictMode)}
        switchWarning={switchWarning}
        activePaperTitle={currentPaper.title}
        activePaperSubtitle={currentPaper.subtitle}
        onOpenPaperManager={() => setIsPaperManagerOpen(true)}
        sectionMetadata={sectionMetadata}
      />

      {/* Main Container */}
      <main className="flex-1 flex overflow-hidden relative">
        {activeTab === 'exam' && (
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
            {/* Mobile View Toggle Buttons */}
            <div className="lg:hidden flex border-b border-gray-300 bg-white text-xs font-semibold">
              <button
                onClick={() => setMobileExamView('question')}
                className={`flex-1 py-2 text-center transition ${
                  mobileExamView === 'question'
                    ? 'border-b-2 border-blue-600 text-blue-700 bg-blue-50/50'
                    : 'text-gray-600'
                }`}
              >
                Question View
              </button>
              <button
                onClick={() => setMobileExamView('palette')}
                className={`flex-1 py-2 text-center transition ${
                  mobileExamView === 'palette'
                    ? 'border-b-2 border-blue-600 text-blue-700 bg-blue-50/50'
                    : 'text-gray-600'
                }`}
              >
                Question Palette ({sectionQuestions.length})
              </button>
            </div>

            {/* Left Question Area */}
            <div
              className={`flex-1 flex flex-col bg-white overflow-hidden ${
                mobileExamView === 'palette' ? 'hidden lg:flex' : 'flex'
              }`}
            >
              {currentQuestion ? (
                <CatQuestionArea
                  question={currentQuestion}
                  response={responses[currentQuestion.id]}
                  onAnswerChange={handleAnswerChange}
                  onSaveAndNext={handleSaveAndNext}
                  onMarkForReviewAndNext={handleMarkForReviewAndNext}
                  onClearResponse={handleClearResponse}
                  onPreviousQuestion={handlePreviousQuestion}
                  onNextQuestion={handleNextQuestion}
                  onToggleBookmark={() => handleToggleBookmark(currentQuestion.id)}
                  isFirstQuestion={sectionQuestions[0]?.id === currentQuestionId}
                  isLastQuestion={sectionQuestions[sectionQuestions.length - 1]?.id === currentQuestionId}
                />
              ) : (
                <div className="flex-1 flex items-center justify-center p-8 text-center text-gray-500">
                  <div>
                    <p className="text-base font-semibold">No questions found in this section.</p>
                    <button
                      onClick={() => setIsPaperManagerOpen(true)}
                      className="mt-3 px-4 py-2 bg-blue-600 text-white rounded text-xs font-bold"
                    >
                      Open Question Paper Manager
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Question Palette */}
            <div className={`${mobileExamView === 'palette' ? 'flex flex-1' : 'hidden lg:flex'} overflow-hidden`}>
              <CatPalette
                currentSection={currentSection}
                currentQuestionId={currentQuestionId}
                sectionQuestions={sectionQuestions}
                responses={responses}
                onSelectQuestion={handleSelectQuestion}
                onOpenQuestionPaper={() => setIsQuestionPaperOpen(true)}
              />
            </div>
          </div>
        )}

        {activeTab === 'scorecard' && (
          <CatScorecard
            examResult={examResult}
            onViewSolutions={() => setActiveTab('solutions')}
            onViewPaper={() => setActiveTab('paper')}
            onRetakeExam={handleRetakeExam}
            paperTitle={currentPaper.title}
            totalQuestions={currentQuestions.length}
          />
        )}

        {activeTab === 'solutions' && (
          <CatSolutionsReview
            questions={currentQuestions}
            responses={responses}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'paper' && (
          <CatPrintablePaper questions={currentQuestions} paperTitle={currentPaper.title} />
        )}
      </main>

      {/* Calculator Modal */}
      <CatCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

      {/* Question Paper Overview Modal */}
      <CatQuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        questions={currentQuestions}
        currentSection={currentSection}
        paperTitle={currentPaper.title}
        onSelectQuestion={(qId) => {
          handleSelectQuestion(qId);
          setActiveTab('exam');
        }}
      />

      {/* Instructions Modal */}
      <CatInstructionsModal
        isOpen={isInstructionsOpen}
        onClose={() => setIsInstructionsOpen(false)}
      />

      {/* Final / Section Submit Confirmation Modal */}
      <CatSubmitModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onConfirmSubmit={handleConfirmSectionOrExamSubmit}
        questions={currentQuestions}
        responses={responses}
        currentSection={currentSection}
        isFinalSubmit={isFinalSection}
        nextSection={nextSectionId}
      />

      {/* Paper Switcher & Question Set Importer Modal */}
      <CatPaperManagerModal
        isOpen={isPaperManagerOpen}
        onClose={() => setIsPaperManagerOpen(false)}
        availablePapers={availablePapers}
        activePaperId={currentPaperId}
        onSelectPaper={handleSelectPaper}
        onImportNewPaper={handleImportNewPaper}
        onDeleteCustomPaper={handleDeleteCustomPaper}
      />
    </div>
  );
}
