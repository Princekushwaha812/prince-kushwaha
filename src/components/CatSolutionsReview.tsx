import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Filter,
  Check,
  X
} from 'lucide-react';
import { QuestionData, UserResponse, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';
import { CatDiagram } from './CatDiagrams.tsx';

interface SolutionsReviewProps {
  questions: QuestionData[];
  responses: Record<number, UserResponse>;
  onToggleBookmark: (questionId: number) => void;
}

export const CatSolutionsReview: React.FC<SolutionsReviewProps> = ({
  questions,
  responses,
  onToggleBookmark,
}) => {
  const [selectedSection, setSelectedSection] = useState<SectionId | 'ALL'>('ALL');
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'UNATTEMPTED' | 'BOOKMARKED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const getQuestionStatus = (q: QuestionData) => {
    const resp = responses[q.id];
    if (!resp || !resp.answer || resp.answer.trim() === '') {
      return 'UNATTEMPTED';
    }
    return resp.answer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()
      ? 'CORRECT'
      : 'INCORRECT';
  };

  const filteredQuestions = questions.filter((q) => {
    // Section filter
    if (selectedSection !== 'ALL' && q.section !== selectedSection) {
      return false;
    }

    // Status filter
    const status = getQuestionStatus(q);
    const resp = responses[q.id];

    if (selectedFilter === 'CORRECT' && status !== 'CORRECT') return false;
    if (selectedFilter === 'INCORRECT' && status !== 'INCORRECT') return false;
    if (selectedFilter === 'UNATTEMPTED' && status !== 'UNATTEMPTED') return false;
    if (selectedFilter === 'BOOKMARKED' && !resp?.isBookmarked) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const qNumMatch = searchQuery.match(/\d+/);
      if (qNumMatch && q.id === parseInt(qNumMatch[0], 10)) {
        return true;
      }
      const textMatch =
        q.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.passageText && q.passageText.toLowerCase().includes(searchQuery.toLowerCase())) ||
        q.solution.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (q.solution.genre && q.solution.genre.toLowerCase().includes(searchQuery.toLowerCase()));
      if (!textMatch) return false;
    }

    return true;
  });

  return (
    <div className="flex-1 bg-slate-100 overflow-y-auto p-4 sm:p-6 select-none">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* Solutions Header */}
        <div className="bg-white p-5 rounded-xl shadow-xs border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-black text-[#1b3a5c]">
                Solutions & Explanations Browser
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                All India Open Mock CAT - 1 • Official answer keys, detailed derivations, and option elimination
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by Q No. or concept..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-xs focus:bg-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="mt-4 pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            {/* Sections */}
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-gray-600">Section:</span>
              {(['ALL', 'VARC', 'LRDI', 'QA'] as const).map((sec) => (
                <button
                  key={sec}
                  onClick={() => setSelectedSection(sec)}
                  className={`px-2.5 py-1 rounded font-semibold transition ${
                    selectedSection === sec
                      ? 'bg-[#1b3a5c] text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {sec === 'ALL' ? 'All (100)' : sec}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex items-center space-x-1">
              <span className="font-bold text-gray-600 mr-1">Status:</span>
              {[
                { id: 'ALL', label: 'All' },
                { id: 'CORRECT', label: 'Correct' },
                { id: 'INCORRECT', label: 'Incorrect' },
                { id: 'UNATTEMPTED', label: 'Unattempted' },
                { id: 'BOOKMARKED', label: 'Bookmarked' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedFilter(item.id as any)}
                  className={`px-2.5 py-1 rounded font-semibold transition ${
                    selectedFilter === item.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Counter */}
        <div className="text-xs font-semibold text-gray-600 flex justify-between items-center px-1">
          <span>Showing {filteredQuestions.length} Questions</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-blue-600 hover:underline"
            >
              Clear Search
            </button>
          )}
        </div>

        {/* Questions Cards */}
        <div className="space-y-4">
          {filteredQuestions.map((q) => {
            const resp = responses[q.id];
            const status = getQuestionStatus(q);
            const isBookmarked = resp?.isBookmarked || false;
            const isExpanded = expandedId === q.id;

            return (
              <div
                key={q.id}
                className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 rounded-md bg-[#1b3a5c] text-white font-black text-xs">
                      Q.{q.id}
                    </span>
                    <span className="text-xs font-bold text-gray-700">
                      [{q.section} • {q.type}]
                    </span>
                    {q.solution.genre && (
                      <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-200 hidden sm:inline">
                        Genre: {q.solution.genre}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* Status Badge */}
                    {status === 'CORRECT' && (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Correct (+3)</span>
                      </span>
                    )}
                    {status === 'INCORRECT' && (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                        <XCircle className="w-3.5 h-3.5 text-red-600" />
                        <span>Incorrect ({q.type === 'MCQ' ? '-1' : '0'})</span>
                      </span>
                    )}
                    {status === 'UNATTEMPTED' && (
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-700 text-xs font-semibold">
                        <HelpCircle className="w-3.5 h-3.5 text-gray-500" />
                        <span>Unattempted (0)</span>
                      </span>
                    )}

                    {/* Bookmark Toggle */}
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className={`p-1.5 rounded hover:bg-gray-200 transition ${
                        isBookmarked ? 'text-amber-500' : 'text-gray-400'
                      }`}
                      title="Bookmark Question"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-4 text-sm">
                  {q.contextHeader && (
                    <div className="text-xs font-bold text-amber-900 bg-amber-50/80 border-l-4 border-amber-500 p-2.5 rounded-r">
                      {q.contextHeader}
                    </div>
                  )}

                  {/* Passage Toggle if long passage exists */}
                  {q.passageText && (
                    <div className="border border-blue-100 rounded-lg p-3 bg-blue-50/30">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-1">
                        <span>Associated Reading Passage / Set Context</span>
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : q.id)}
                          className="flex items-center space-x-1 text-blue-700 hover:underline"
                        >
                          <span>{isExpanded ? 'Hide Passage' : 'Show Full Passage'}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      {isExpanded && (
                        <div className="mt-2 text-xs text-gray-700 leading-relaxed max-h-60 overflow-y-auto whitespace-pre-line border-t border-blue-100 pt-2">
                          {q.passageText}
                        </div>
                      )}
                    </div>
                  )}

                  {q.tableData && (
                    <div className="overflow-x-auto border border-gray-200 rounded shadow-xs bg-white my-2">
                      <table className="w-full text-xs text-left border-collapse">
                        <thead className="bg-[#244b7a] text-white">
                          <tr>
                            {q.tableData.headers.map((h, idx) => (
                              <th key={idx} className="p-2 border-r border-blue-900/60 font-semibold last:border-r-0">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {q.tableData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-2 border-r border-gray-200 font-medium text-gray-800 last:border-r-0">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {q.diagramType && (
                    <div className="my-2">
                      <CatDiagram type={q.diagramType} />
                    </div>
                  )}

                  {/* Question Text */}
                  <div className="font-semibold text-gray-900 leading-relaxed whitespace-pre-line">
                    {q.questionText}
                  </div>

                  {/* Options with correctness highlight */}
                  {q.type === 'MCQ' && q.options && (
                    <div className="space-y-2 pt-1">
                      {q.options.map((opt) => {
                        const isCorrectOpt = String(opt.id) === q.correctAnswer;
                        const isUserChoice = resp?.answer === String(opt.id);

                        let optClass = 'bg-gray-50 border-gray-200 text-gray-800';
                        if (isCorrectOpt) {
                          optClass = 'bg-emerald-50 border-emerald-500 ring-1 ring-emerald-500 text-emerald-950 font-semibold';
                        } else if (isUserChoice && !isCorrectOpt) {
                          optClass = 'bg-red-50 border-red-500 text-red-950 font-semibold';
                        }

                        return (
                          <div
                            key={opt.id}
                            className={`flex items-start justify-between p-3 rounded-lg border text-xs sm:text-sm ${optClass}`}
                          >
                            <div className="flex items-start space-x-2.5">
                              <span className="font-bold">{opt.id}.</span>
                              <span>{opt.text}</span>
                            </div>
                            <div className="flex items-center space-x-1.5 ml-2 shrink-0">
                              {isCorrectOpt && (
                                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                                  <Check className="w-3 h-3" /> Correct Answer
                                </span>
                              )}
                              {isUserChoice && !isCorrectOpt && (
                                <span className="text-[11px] font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded flex items-center gap-1">
                                  <X className="w-3 h-3" /> Your Choice
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* TITA Answer Comparison */}
                  {q.type === 'TITA' && (
                    <div className="flex flex-wrap items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                      <div>
                        <span className="text-gray-500">Your Answer: </span>
                        <span className="font-mono font-bold text-gray-900">
                          {resp?.answer || 'None (Unattempted)'}
                        </span>
                      </div>
                      <div className="text-gray-300">|</div>
                      <div>
                        <span className="text-emerald-700 font-bold">Official Correct Answer: </span>
                        <span className="font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                          {q.correctAnswer}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Detailed Solution Box (Authentic Aspiration.ai style) */}
                  <div className="mt-4 p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-xs space-y-3">
                    <div className="flex items-center justify-between border-b border-amber-200 pb-2">
                      <span className="font-bold text-amber-950 text-sm">
                        Official Solution & Explanation:
                      </span>
                      <span className="font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded text-[11px]">
                        Correct Answer : {q.correctAnswer}
                      </span>
                    </div>

                    <div className="text-gray-800 whitespace-pre-line leading-relaxed font-normal">
                      {q.solution.explanation}
                    </div>

                    {q.solution.optionElimination && q.solution.optionElimination.length > 0 && (
                      <div className="pt-2 border-t border-amber-200/60 space-y-1.5">
                        <div className="font-bold text-amber-900 text-[11px] uppercase tracking-wider">
                          Option Elimination Analysis:
                        </div>
                        {q.solution.optionElimination.map((item, idx) => (
                          <div key={idx} className="text-gray-700 pl-2 border-l-2 border-amber-400">
                            <span className="font-bold text-gray-900">Option {item.option}: </span>
                            <span>{item.reason}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
