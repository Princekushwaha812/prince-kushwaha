import React, { useState } from 'react';
import { X, Printer, CheckCircle } from 'lucide-react';
import { QuestionData, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';

interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: QuestionData[];
  currentSection: SectionId;
  onSelectQuestion: (questionId: number) => void;
  paperTitle?: string;
}

export const CatQuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  currentSection,
  onSelectQuestion,
  paperTitle,
}) => {
  const [filterSection, setFilterSection] = useState<SectionId | 'ALL'>(currentSection);

  if (!isOpen) return null;

  const displayQuestions =
    filterSection === 'ALL' ? questions : questions.filter((q) => q.section === filterSection);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in">
        {/* Header */}
        <div className="bg-[#244b7a] text-white px-5 py-3 flex items-center justify-between border-b border-blue-900">
          <div>
            <h2 className="text-base font-bold tracking-wide">Question Paper Overview</h2>
            <p className="text-xs text-blue-200">{paperTitle || 'All India Open Mock CAT - 1'}</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-700 hover:bg-blue-600 rounded text-xs font-medium text-white transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="text-blue-200 hover:text-white p-1 rounded-sm hover:bg-blue-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Filter Pills */}
        <div className="bg-gray-100 px-5 py-2.5 border-b border-gray-200 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-600">Filter Section:</span>
            {(['ALL', 'VARC', 'LRDI', 'QA'] as const).map((sec) => (
              <button
                key={sec}
                onClick={() => setFilterSection(sec)}
                className={`px-3 py-1 rounded text-xs font-semibold transition ${
                  filterSection === sec
                    ? 'bg-[#244b7a] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-300'
                }`}
              >
                {sec === 'ALL'
                  ? `All Sections (${questions.length} Qs)`
                  : `${sec} (${questions.filter((q) => q.section === sec).length} Qs)`}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500 whitespace-nowrap">
            Showing {displayQuestions.length} Questions
          </div>
        </div>

        {/* Scrollable Question List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm divide-y divide-gray-200">
          {displayQuestions.map((q) => (
            <div key={q.id} className="pt-5 first:pt-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-bold">
                    Question {q.id}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    [{q.section} | {q.type}]
                  </span>
                </div>
                <button
                  onClick={() => {
                    onSelectQuestion(q.id);
                    onClose();
                  }}
                  className="text-xs text-blue-700 hover:underline font-semibold"
                >
                  Jump to Question →
                </button>
              </div>

              {q.contextHeader && (
                <div className="text-xs font-semibold text-gray-600 bg-amber-50 border-l-4 border-amber-400 p-2 mb-2">
                  {q.contextHeader}
                </div>
              )}

              <div className="text-gray-900 font-medium whitespace-pre-line mb-3">
                {q.questionText}
              </div>

              {q.type === 'MCQ' && q.options && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                  {q.options.map((opt) => (
                    <div
                      key={opt.id}
                      className="text-xs text-gray-700 bg-gray-50 p-2 rounded border border-gray-200"
                    >
                      <span className="font-bold mr-1.5">{opt.id}.</span>
                      {opt.text}
                    </div>
                  ))}
                </div>
              )}

              {q.type === 'TITA' && (
                <div className="text-xs text-gray-500 italic bg-gray-50 p-2 rounded border border-dashed border-gray-300">
                  [Type In The Answer / Non-MCQ question. Candidate enters numeric value]
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-[#244b7a] hover:bg-[#1a385c] text-white rounded text-xs font-bold transition"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
