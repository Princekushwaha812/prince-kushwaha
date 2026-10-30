import React, { useState } from 'react';
import { Bookmark, User } from 'lucide-react';
import { QuestionData, UserResponse, QuestionStatus, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';

interface CatPaletteProps {
  currentSection: SectionId;
  currentQuestionId: number;
  sectionQuestions: QuestionData[];
  responses: Record<number, UserResponse>;
  onSelectQuestion: (questionId: number) => void;
  onOpenQuestionPaper: () => void;
}

export const CatPalette: React.FC<CatPaletteProps> = ({
  currentSection,
  currentQuestionId,
  sectionQuestions,
  responses,
  onSelectQuestion,
  onOpenQuestionPaper,
}) => {
  const [filter, setFilter] = useState<'ALL' | 'ANSWERED' | 'UNANSWERED' | 'MARKED'>('ALL');

  // Count states for section questions
  let answeredCount = 0;
  let notAnsweredCount = 0;
  let notVisitedCount = 0;
  let markedCount = 0;
  let answeredMarkedCount = 0;

  sectionQuestions.forEach((q) => {
    const resp = responses[q.id];
    const status: QuestionStatus = resp ? resp.status : 'not_visited';

    if (status === 'answered') answeredCount++;
    else if (status === 'not_answered') notAnsweredCount++;
    else if (status === 'marked_for_review') markedCount++;
    else if (status === 'answered_marked_for_review') answeredMarkedCount++;
    else notVisitedCount++;
  });

  const getButtonClass = (q: QuestionData) => {
    const resp = responses[q.id];
    const status: QuestionStatus = resp ? resp.status : 'not_visited';
    const isCurrent = q.id === currentQuestionId;

    let base = 'relative flex items-center justify-center font-bold text-xs rounded transition transform active:scale-95 ';
    if (isCurrent) {
      base += 'ring-2 ring-blue-500 ring-offset-2 scale-105 z-10 ';
    }

    switch (status) {
      case 'answered':
        return base + 'bg-[#22c55e] text-white hover:bg-emerald-600 shadow-xs';
      case 'not_answered':
        return base + 'bg-[#ef4444] text-white hover:bg-red-600 shadow-xs';
      case 'marked_for_review':
        return base + 'bg-[#7e22ce] text-white hover:bg-purple-800 shadow-xs';
      case 'answered_marked_for_review':
        return base + 'bg-[#7e22ce] text-white hover:bg-purple-800 shadow-xs';
      case 'not_visited':
      default:
        return base + 'bg-[#f1f5f9] text-gray-700 hover:bg-gray-200 border border-gray-300';
    }
  };

  const filteredQuestions = sectionQuestions.filter((q) => {
    const resp = responses[q.id];
    const status: QuestionStatus = resp ? resp.status : 'not_visited';
    if (filter === 'ANSWERED') {
      return status === 'answered' || status === 'answered_marked_for_review';
    }
    if (filter === 'UNANSWERED') {
      return status === 'not_answered' || status === 'not_visited';
    }
    if (filter === 'MARKED') {
      return status === 'marked_for_review' || status === 'answered_marked_for_review';
    }
    return true;
  });

  return (
    <aside className="w-full lg:w-80 bg-[#f8fafc] border-l border-gray-300 flex flex-col h-full select-none text-gray-800">
      {/* Candidate Profile Box */}
      <div className="p-3 bg-white border-b border-gray-200 flex items-center space-x-3">
        <div className="w-12 h-12 rounded bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-inner">
          <User className="w-7 h-7" />
        </div>
        <div className="text-xs leading-snug">
          <div className="font-bold text-gray-900">Aspirant Kumar</div>
          <div className="text-gray-500 font-mono text-[11px]">Roll: 2019CAT01</div>
          <div className="text-emerald-700 font-semibold text-[11px]">System: C001 (Online)</div>
        </div>
      </div>

      {/* Legend Grid */}
      <div className="p-3 bg-white border-b border-gray-200">
        <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
          Palette Legend ({SECTION_METADATA[currentSection].shortName})
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-[#22c55e] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
              {answeredCount}
            </span>
            <span className="text-gray-700 text-[11px]">Answered</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-[#ef4444] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
              {notAnsweredCount}
            </span>
            <span className="text-gray-700 text-[11px]">Not Answered</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-[#f1f5f9] text-gray-700 border border-gray-300 flex items-center justify-center font-bold text-[11px]">
              {notVisitedCount}
            </span>
            <span className="text-gray-700 text-[11px]">Not Visited</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 rounded bg-[#7e22ce] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
              {markedCount}
            </span>
            <span className="text-gray-700 text-[11px]">Marked Review</span>
          </div>

          <div className="flex items-center space-x-2 col-span-2 pt-1 border-t border-gray-100">
            <span className="relative w-6 h-6 rounded bg-[#7e22ce] text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
              {answeredMarkedCount}
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-white"></span>
            </span>
            <span className="text-gray-600 text-[10px] leading-tight">
              Answered & Marked for Review (Evaluated)
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-3 pt-2 pb-1 flex items-center justify-between text-[11px] border-b border-gray-200 bg-gray-50">
        <span className="font-bold text-gray-700">Questions:</span>
        <div className="flex space-x-1">
          {(['ALL', 'ANSWERED', 'UNANSWERED', 'MARKED'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilter(mode)}
              className={`px-2 py-0.5 rounded text-[10px] font-semibold transition ${
                filter === mode ? 'bg-[#1b3a5c] text-white' : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode === 'ALL' ? 'All' : mode.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Questions Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-5 gap-2">
          {filteredQuestions.map((q) => {
            const resp = responses[q.id];
            const isAnsweredMarked = resp?.status === 'answered_marked_for_review';
            const isBookmarked = resp?.isBookmarked;

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className={`h-9 ${getButtonClass(q)}`}
                title={`Question ${q.id} (${q.type})`}
              >
                <span>{q.id}</span>
                {isAnsweredMarked && (
                  <span className="absolute bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-emerald-400 border border-white"></span>
                )}
                {isBookmarked && (
                  <span className="absolute top-0.5 right-0.5">
                    <Bookmark className="w-2.5 h-2.5 fill-amber-300 text-amber-400" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Palette Actions */}
      <div className="p-3 bg-white border-t border-gray-200 flex flex-col gap-2">
        <button
          onClick={onOpenQuestionPaper}
          className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-[#1b3a5c] border border-blue-200 rounded font-semibold text-xs transition"
        >
          View Question Paper
        </button>
      </div>
    </aside>
  );
};
