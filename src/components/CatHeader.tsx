import React, { useState } from 'react';
import {
  Clock,
  Calculator as CalcIcon,
  FileText,
  HelpCircle,
  Play,
  Pause,
  Award,
  BookOpen,
  Printer,
  ChevronRight,
  Lock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';

interface CatHeaderProps {
  currentSection: SectionId;
  completedSections: SectionId[];
  onSelectSection: (section: SectionId) => void;
  sectionSecondsRemaining: number;
  isTimerPaused: boolean;
  onTogglePauseTimer: () => void;
  onOpenCalculator: () => void;
  onOpenQuestionPaper: () => void;
  onOpenInstructions: () => void;
  onSubmitSectionOrExam: () => void;
  activeTab: 'exam' | 'solutions' | 'scorecard' | 'paper';
  onSelectTab: (tab: 'exam' | 'solutions' | 'scorecard' | 'paper') => void;
  isSubmitted: boolean;
  strictMode: boolean;
  onToggleStrictMode: () => void;
  switchWarning: string | null;
}

export const CatHeader: React.FC<CatHeaderProps> = ({
  currentSection,
  completedSections,
  onSelectSection,
  sectionSecondsRemaining,
  isTimerPaused,
  onTogglePauseTimer,
  onOpenCalculator,
  onOpenQuestionPaper,
  onOpenInstructions,
  onSubmitSectionOrExam,
  activeTab,
  onSelectTab,
  isSubmitted,
  strictMode,
  onToggleStrictMode,
  switchWarning,
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const isLowTime = sectionSecondsRemaining < 300 && sectionSecondsRemaining > 0;
  const sectionsOrder: SectionId[] = ['VARC', 'LRDI', 'QA'];
  const currentIndex = sectionsOrder.indexOf(currentSection);
  const isFinalSection = currentIndex === sectionsOrder.length - 1;

  return (
    <header className="bg-[#1b3a5c] text-white select-none border-b border-[#0f233a] shadow-md sticky top-0 z-40">
      {/* Top Bar: Brand, Exam Info, Candidate Info */}
      <div className="px-4 py-2 border-b border-blue-900/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-3">
          <div className="bg-amber-400 text-blue-950 font-black px-2 py-0.5 rounded text-sm tracking-wider shadow-xs">
            CAT
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wide flex items-center gap-1.5">
              <span>All India Open Mock CAT - 1</span>
              <span className="text-[11px] font-normal text-blue-200 hidden sm:inline">(Career Launcher / aspiration.ai)</span>
            </h1>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-[#132840] p-1 rounded-md text-xs font-medium space-x-1 border border-blue-900">
          <button
            onClick={() => onSelectTab('exam')}
            className={`px-3 py-1 rounded transition flex items-center space-x-1.5 ${
              activeTab === 'exam'
                ? 'bg-blue-600 text-white font-bold shadow-xs'
                : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Mock Exam</span>
          </button>

          <button
            onClick={() => onSelectTab('scorecard')}
            className={`px-3 py-1 rounded transition flex items-center space-x-1.5 ${
              activeTab === 'scorecard'
                ? 'bg-amber-500 text-blue-950 font-bold shadow-xs'
                : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Scorecard</span>
          </button>

          <button
            onClick={() => onSelectTab('solutions')}
            className={`px-3 py-1 rounded transition flex items-center space-x-1.5 ${
              activeTab === 'solutions'
                ? 'bg-emerald-600 text-white font-bold shadow-xs'
                : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Solutions</span>
          </button>

          <button
            onClick={() => onSelectTab('paper')}
            className={`px-3 py-1 rounded transition flex items-center space-x-1.5 ${
              activeTab === 'paper'
                ? 'bg-purple-600 text-white font-bold shadow-xs'
                : 'text-blue-200 hover:text-white hover:bg-blue-800/50'
            }`}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Paper View</span>
          </button>
        </div>

        {/* Section Timer & Candidate Info */}
        <div className="flex items-center space-x-4">
          {activeTab === 'exam' && !isSubmitted && (
            <div className="flex items-center space-x-2">
              <div
                className={`px-3 py-1 rounded flex items-center space-x-1.5 font-mono text-xs sm:text-sm font-bold border transition ${
                  isLowTime
                    ? 'bg-red-600 text-white animate-pulse border-red-400'
                    : 'bg-[#0f233a] text-emerald-300 border-blue-900'
                }`}
              >
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>
                  {SECTION_METADATA[currentSection].shortName}: {formatTime(sectionSecondsRemaining)}
                </span>
              </div>
              <button
                onClick={onTogglePauseTimer}
                title={isTimerPaused ? 'Resume Section Timer' : 'Pause Section Timer (Practice Mode)'}
                className="p-1.5 rounded bg-blue-900/60 hover:bg-blue-800 text-blue-200 hover:text-white transition"
                aria-label={isTimerPaused ? 'Resume Timer' : 'Pause Timer'}
              >
                {isTimerPaused ? <Play className="w-3.5 h-3.5 text-amber-300" /> : <Pause className="w-3.5 h-3.5" />}
              </button>
            </div>
          )}

          <div className="hidden lg:flex items-center space-x-2 text-xs border-l border-blue-800 pl-4">
            <div className="w-7 h-7 rounded-full bg-blue-700 border border-blue-400 flex items-center justify-center font-bold text-white text-[11px]">
              CA
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-white">CAT Aspirant</div>
              <div className="text-[10px] text-blue-300 font-mono">Roll: 2019CAT01 | Lab: C001</div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Bar: Sequential Section Tabs with CAT Locking Enforcement */}
      <div className="px-4 py-1.5 bg-[#244b7a] flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Sections */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-0.5">
          <span className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mr-1 hidden sm:inline">
            Sections (40 min each):
          </span>
          {sectionsOrder.map((secId, idx) => {
            const sec = SECTION_METADATA[secId];
            const isActive = currentSection === secId;
            const isCompleted = completedSections.includes(secId);
            const isLocked = strictMode && !isActive && !isCompleted && idx > currentIndex;

            return (
              <button
                key={secId}
                onClick={() => onSelectSection(secId)}
                className={`px-3 py-1 rounded font-semibold transition flex items-center space-x-1.5 whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-[#1b3a5c] shadow-xs'
                    : isCompleted
                    ? 'bg-emerald-900/60 text-emerald-200 border border-emerald-500/40'
                    : isLocked
                    ? 'bg-blue-950/70 text-blue-300 border border-blue-800 cursor-not-allowed opacity-80'
                    : 'bg-blue-900/40 text-blue-100 hover:bg-blue-800/80'
                }`}
                title={
                  isCompleted
                    ? `${sec.shortName} (Completed - Locked in CAT)`
                    : isLocked
                    ? `${sec.shortName} (Locked - Complete earlier sections first)`
                    : `${sec.shortName} (Active)`
                }
              >
                {isCompleted ? (
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                ) : isLocked ? (
                  <Lock className="w-3 h-3 text-amber-300" />
                ) : null}
                <span>{sec.shortName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-blue-100 text-blue-900 font-bold'
                      : isCompleted
                      ? 'bg-emerald-800 text-emerald-100'
                      : 'bg-blue-950/60 text-blue-200'
                  }`}
                >
                  {sec.totalQuestions}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                )}
              </button>
            );
          })}

          {/* Strict CAT Mode Toggle */}
          <button
            onClick={onToggleStrictMode}
            className={`ml-2 px-2 py-0.5 rounded text-[10px] font-bold transition border ${
              strictMode
                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                : 'bg-blue-900/50 text-blue-300 border-blue-700'
            }`}
            title="Toggle CAT Strict Mode (No section switching, 40m per section)"
          >
            {strictMode ? 'CAT Strict Rule: Active' : 'Practice Mode (Unlocked)'}
          </button>
        </div>

        {/* Action Tools: Calculator, Question Paper, Instructions, Submit Section/Exam */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenCalculator}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#1b3a5c] hover:bg-blue-900 text-white font-medium border border-blue-400/30 transition shadow-xs"
            title="Open On-Screen Calculator"
          >
            <CalcIcon className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Calculator</span>
          </button>

          <button
            onClick={onOpenQuestionPaper}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#1b3a5c] hover:bg-blue-900 text-white font-medium border border-blue-400/30 transition shadow-xs"
            title="View All Questions in Question Paper"
          >
            <FileText className="w-3.5 h-3.5 text-blue-300" />
            <span className="hidden sm:inline">Question Paper</span>
          </button>

          <button
            onClick={onOpenInstructions}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#1b3a5c] hover:bg-blue-900 text-white font-medium border border-blue-400/30 transition shadow-xs"
            title="Read Exam Instructions"
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-300" />
            <span className="hidden sm:inline">Instructions</span>
          </button>

          {activeTab === 'exam' && !isSubmitted && (
            <button
              onClick={onSubmitSectionOrExam}
              className={`flex items-center space-x-1 px-3 py-1 rounded font-bold transition shadow-xs ml-1 ${
                isFinalSection
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white ring-1 ring-emerald-300'
                  : 'bg-amber-500 hover:bg-amber-400 text-blue-950 ring-1 ring-amber-300'
              }`}
            >
              <span>{isFinalSection ? 'Submit Test' : `Finish ${SECTION_METADATA[currentSection].shortName}`}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Warning banner when candidate attempts section switching */}
      {switchWarning && (
        <div className="bg-amber-500 text-blue-950 px-4 py-1.5 text-xs font-bold flex items-center justify-between border-b border-amber-600 animate-in slide-in-from-top-1">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{switchWarning}</span>
          </div>
        </div>
      )}
    </header>
  );
};
