import React, { useState, useEffect } from 'react';
import { SectionId, UserResponse, ExamResult } from './types/cat.ts';
import { ALL_MOCK_QUESTIONS, SECTION_METADATA } from './data/mockQuestions.ts';
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

const SECTIONS_ORDER: SectionId[] = ['VARC', 'LRDI', 'QA'];
const SECTION_DURATION_SECONDS = 40 * 60; // 2400 seconds (40 mins)

const STORAGE_KEY_RESPONSES = 'cat_mock_1_responses';
const STORAGE_KEY_SUBMITTED = 'cat_mock_1_submitted';
const STORAGE_KEY_SECTION = 'cat_mock_1_current_section';
const STORAGE_KEY_COMPLETED_SECTIONS = 'cat_mock_1_completed_sections';
const STORAGE_KEY_TIME_REMAINING = 'cat_mock_1_time_remaining';
const STORAGE_KEY_TIME_SPENT = 'cat_mock_1_time_spent';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SECTION) as SectionId;
      return SECTIONS_ORDER.includes(saved) ? saved : 'VARC';
    } catch {
      return 'VARC';
    }
  });

  const [completedSections, setCompletedSections] = useState<SectionId[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_COMPLETED_SECTIONS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currentQuestionId, setCurrentQuestionId] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_SUBMITTED) === 'true';
    } catch {
      return false;
    }
  });

  const [activeTab, setActiveTab] = useState<'exam' | 'solutions' | 'scorecard' | 'paper'>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_SUBMITTED) === 'true' ? 'scorecard' : 'exam';
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
      const saved = localStorage.getItem(STORAGE_KEY_TIME_REMAINING);
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

  // Track time spent per section (for Recharts visual chart in scorecard!)
  const [sectionTimeSpent, setSectionTimeSpent] = useState<Record<SectionId, number>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TIME_SPENT);
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
      const saved = localStorage.getItem(STORAGE_KEY_RESPONSES);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Load submission status
  useEffect(() => {
    try {
      const submitted = localStorage.getItem(STORAGE_KEY_SUBMITTED);
      if (submitted === 'true') {
        setIsSubmitted(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESPONSES, JSON.stringify(responses));
    } catch {
      // Ignore
    }
  }, [responses]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SUBMITTED, String(isSubmitted));
    } catch {
      // Ignore
    }
  }, [isSubmitted]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SECTION, currentSection);
      localStorage.setItem(STORAGE_KEY_COMPLETED_SECTIONS, JSON.stringify(completedSections));
      localStorage.setItem(STORAGE_KEY_TIME_REMAINING, JSON.stringify(sectionTimeRemaining));
      localStorage.setItem(STORAGE_KEY_TIME_SPENT, JSON.stringify(sectionTimeSpent));
    } catch {
      // Ignore
    }
  }, [currentSection, completedSections, sectionTimeRemaining, sectionTimeSpent]);

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
  }, [isSubmitted, isTimerPaused, activeTab, currentSection]);

  // Clear warning after 4 seconds
  useEffect(() => {
    if (switchWarning) {
      const timeout = setTimeout(() => setSwitchWarning(null), 4000);
      return () => clearTimeout(timeout);
    }
  }, [switchWarning]);

  // Current question data
  const currentQuestion =
    ALL_MOCK_QUESTIONS.find((q) => q.id === currentQuestionId) || ALL_MOCK_QUESTIONS[0];

  // Section questions
  const sectionQuestions = ALL_MOCK_QUESTIONS.filter((q) => q.section === currentSection);

  // Mark newly visited question as 'not_answered' if it was 'not_visited'
  useEffect(() => {
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
  }, [currentQuestionId]);

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
          `Section switching is not allowed. ${SECTION_METADATA[targetSection].shortName} has already been completed and locked.`
        );
      } else {
        setSwitchWarning(
          `Section switching is not allowed in CAT. You must finish ${SECTION_METADATA[currentSection].shortName} (40 min timer) before unlocking ${SECTION_METADATA[targetSection].shortName}.`
        );
      }
      return;
    }

    // In unlocked practice mode
    setCurrentSection(targetSection);
    const firstOfSection = ALL_MOCK_QUESTIONS.find((q) => q.section === targetSection);
    if (firstOfSection) {
      setCurrentQuestionId(firstOfSection.id);
    }
  };

  const handleSelectQuestion = (questionId: number) => {
    const targetQ = ALL_MOCK_QUESTIONS.find((q) => q.id === questionId);
    if (!targetQ) return;

    // In CAT, candidate cannot jump to a question outside active section!
    if (strictMode && targetQ.section !== currentSection) {
      setSwitchWarning(
        `In CAT, you can only attempt questions in the active section (${SECTION_METADATA[currentSection].shortName}).`
      );
      return;
    }

    if (targetQ.section !== currentSection) {
      setCurrentSection(targetQ.section);
    }
    setCurrentQuestionId(targetQ.id);
    setMobileExamView('question');
  };

  const handleAnswerChange = (newAnswer: string) => {
    setResponses((prev) => ({
      ...prev,
      [currentQuestionId]: {
        ...(prev[currentQuestionId] || { timeSpentSeconds: 0, isBookmarked: false }),
        answer: newAnswer,
        status: newAnswer.trim() !== '' ? 'answered' : 'not_answered',
      },
    }));
  };

  const moveToNextQuestion = () => {
    const currentIdxInSection = sectionQuestions.findIndex((q) => q.id === currentQuestionId);

    if (currentIdxInSection < sectionQuestions.length - 1) {
      // Move to next question in same section
      setCurrentQuestionId(sectionQuestions[currentIdxInSection + 1].id);
    } else {
      // Reached end of current section
      if (isFinalSection) {
        setIsSubmitModalOpen(true);
      } else {
        setSwitchWarning(
          `You have reached the last question of ${SECTION_METADATA[currentSection].shortName}. Review questions or click "Finish ${SECTION_METADATA[currentSection].shortName}" when ready.`
        );
      }
    }
  };

  const handleSaveAndNext = () => {
    const currentResp = responses[currentQuestionId];
    const hasAnswer = currentResp && currentResp.answer.trim() !== '';

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
    const currentResp = responses[currentQuestionId];
    const hasAnswer = currentResp && currentResp.answer.trim() !== '';

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
      const firstQ = ALL_MOCK_QUESTIONS.find((q) => q.section === nextSectionId);
      if (firstQ) setCurrentQuestionId(firstQ.id);
      setSwitchWarning(
        `Time up for ${SECTION_METADATA[currentSection].shortName}! Automatically switched to ${SECTION_METADATA[nextSectionId].shortName} with a fresh 40-minute timer.`
      );
    }
  };

  const handleConfirmSectionOrExamSubmit = () => {
    if (isFinalSection) {
      handleFinalSubmit();
    } else if (nextSectionId) {
      setCompletedSections((prev) => [...prev, currentSection]);
      setCurrentSection(nextSectionId);
      const firstQ = ALL_MOCK_QUESTIONS.find((q) => q.section === nextSectionId);
      if (firstQ) setCurrentQuestionId(firstQ.id);
      setIsSubmitModalOpen(false);
      setSwitchWarning(
        `Section ${SECTION_METADATA[currentSection].shortName} submitted and locked. Welcome to ${SECTION_METADATA[nextSectionId].shortName} (40:00).`
      );
    }
  };

  const handleFinalSubmit = () => {
    setIsSubmitted(true);
    setIsSubmitModalOpen(false);
    setActiveTab('scorecard');
  };

  const handleRetakeExam = () => {
    if (window.confirm('Are you sure you want to restart the exam? Your current responses and time will be cleared.')) {
      setResponses({});
      setIsSubmitted(false);
      setCompletedSections([]);
      setCurrentSection('VARC');
      setCurrentQuestionId(1);
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
        localStorage.removeItem(STORAGE_KEY_RESPONSES);
        localStorage.removeItem(STORAGE_KEY_SUBMITTED);
        localStorage.removeItem(STORAGE_KEY_SECTION);
        localStorage.removeItem(STORAGE_KEY_COMPLETED_SECTIONS);
        localStorage.removeItem(STORAGE_KEY_TIME_REMAINING);
        localStorage.removeItem(STORAGE_KEY_TIME_SPENT);
      } catch {
        // Ignore
      }
    }
  };

  // Evaluate test with exact time spent per section for Recharts
  const examResult: ExamResult = evaluateTest(ALL_MOCK_QUESTIONS, responses, sectionTimeSpent);

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
      />

      {/* Main Body depending on Active Tab */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {activeTab === 'exam' && (
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
            {/* Mobile Sub-bar to toggle between Question and Palette */}
            <div className="lg:hidden bg-slate-200 border-b border-gray-300 px-3 py-1.5 flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-700">
                {mobileExamView === 'question' ? `Q.${currentQuestionId} (${currentQuestion.type})` : `Palette (${currentSection})`}
              </span>
              <div className="flex bg-white rounded-md p-0.5 border border-gray-300 shadow-xs">
                <button
                  onClick={() => setMobileExamView('question')}
                  className={`px-3 py-1 rounded text-xs transition ${
                    mobileExamView === 'question'
                      ? 'bg-[#1b3a5c] text-white font-bold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Question
                </button>
                <button
                  onClick={() => setMobileExamView('palette')}
                  className={`px-3 py-1 rounded text-xs transition ${
                    mobileExamView === 'palette'
                      ? 'bg-[#1b3a5c] text-white font-bold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Palette ({sectionQuestions.length})
                </button>
              </div>
            </div>

            {/* Question Screen */}
            <div className={`flex-1 flex-col overflow-hidden ${mobileExamView === 'question' ? 'flex' : 'hidden lg:flex'}`}>
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
          />
        )}

        {activeTab === 'solutions' && (
          <CatSolutionsReview
            questions={ALL_MOCK_QUESTIONS}
            responses={responses}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {activeTab === 'paper' && <CatPrintablePaper questions={ALL_MOCK_QUESTIONS} />}
      </main>

      {/* Calculator Modal */}
      <CatCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

      {/* Question Paper Overview Modal */}
      <CatQuestionPaperModal
        isOpen={isQuestionPaperOpen}
        onClose={() => setIsQuestionPaperOpen(false)}
        questions={ALL_MOCK_QUESTIONS}
        currentSection={currentSection}
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
        questions={ALL_MOCK_QUESTIONS}
        responses={responses}
        currentSection={currentSection}
        isFinalSubmit={isFinalSection}
        nextSection={nextSectionId}
      />
    </div>
  );
}
