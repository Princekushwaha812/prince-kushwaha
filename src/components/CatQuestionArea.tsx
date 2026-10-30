import React, { useState } from 'react';
import { Bookmark, Delete, Check, ArrowLeft, ArrowRight, CornerDownLeft } from 'lucide-react';
import { QuestionData, UserResponse, QuestionStatus } from '../types/cat.ts';
import { CatDiagram } from './CatDiagrams.tsx';

interface CatQuestionAreaProps {
  question: QuestionData;
  response?: UserResponse;
  onAnswerChange: (newAnswer: string) => void;
  onSaveAndNext: () => void;
  onMarkForReviewAndNext: () => void;
  onClearResponse: () => void;
  onPreviousQuestion: () => void;
  onNextQuestion: () => void;
  onToggleBookmark: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export const CatQuestionArea: React.FC<CatQuestionAreaProps> = ({
  question,
  response,
  onAnswerChange,
  onSaveAndNext,
  onMarkForReviewAndNext,
  onClearResponse,
  onPreviousQuestion,
  onNextQuestion,
  onToggleBookmark,
  isFirstQuestion,
  isLastQuestion,
}) => {
  const currentAnswer = response?.answer || '';
  const isBookmarked = response?.isBookmarked || false;

  const handleTitaKey = (char: string) => {
    if (char === 'CLEAR') {
      onAnswerChange('');
    } else if (char === 'BACK') {
      onAnswerChange(currentAnswer.slice(0, -1));
    } else {
      onAnswerChange(currentAnswer + char);
    }
  };

  const hasContext = !!(question.passageText || question.tableData || question.contextHeader);

  return (
    <div className="flex-1 flex flex-col h-full bg-white overflow-hidden select-none">
      {/* Top Question Info Bar */}
      <div className="px-5 py-2.5 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center space-x-3">
          <span className="font-extrabold text-sm text-[#1b3a5c]">
            Question No. {question.id}
          </span>
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold text-[11px]">
            {question.type === 'MCQ' ? 'Multiple Choice' : 'Non-MCQ (TITA)'}
          </span>
          <span className="text-gray-500 font-medium hidden sm:inline">
            Section: {question.section}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Marking scheme */}
          <div className="flex items-center space-x-1.5 font-semibold text-[11px]">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Marks: +3
            </span>
            <span
              className={`px-2 py-0.5 rounded border ${
                question.type === 'MCQ'
                  ? 'text-red-700 bg-red-50 border-red-200'
                  : 'text-gray-600 bg-gray-100 border-gray-200'
              }`}
            >
              Negative: {question.type === 'MCQ' ? '-1' : '0'}
            </span>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={onToggleBookmark}
            className={`flex items-center space-x-1 px-2.5 py-1 rounded border text-xs font-semibold transition ${
              isBookmarked
                ? 'bg-amber-100 text-amber-900 border-amber-300'
                : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'
            }`}
            title="Bookmark this question"
          >
            <Bookmark
              className={`w-3.5 h-3.5 ${
                isBookmarked ? 'fill-amber-500 text-amber-500' : 'text-gray-400'
              }`}
            />
            <span className="hidden sm:inline">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* Main Question Body (Split-pane when passage / data set exists) */}
      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Passage or Dataset (if present) */}
        {hasContext && (
          <div className="md:w-1/2 p-5 overflow-y-auto border-b md:border-b-0 md:border-r border-gray-200 bg-[#fdfdfd] text-gray-800 text-sm leading-relaxed max-h-[45vh] md:max-h-none">
            {question.contextHeader && (
              <div className="text-xs font-bold text-amber-900 bg-amber-50 border-l-4 border-amber-500 p-2.5 mb-3 rounded-r">
                {question.contextHeader}
              </div>
            )}

            {question.passageText && (
              <div className="prose prose-sm max-w-none text-gray-800 space-y-3 leading-relaxed whitespace-pre-line text-[13.5px]">
                {question.passageText}
              </div>
            )}

            {question.tableData && (
              <div className="my-4 overflow-x-auto border border-gray-200 rounded-md shadow-xs bg-white">
                <table className="w-full text-xs text-left border-collapse">
                  <thead className="bg-[#244b7a] text-white">
                    <tr>
                      {question.tableData.headers.map((h, idx) => (
                        <th key={idx} className="p-2.5 border-r border-blue-900/60 font-semibold last:border-r-0">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {question.tableData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 border-r border-gray-200 font-medium text-gray-800 last:border-r-0">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {question.diagramType && (
              <div className="my-4">
                <CatDiagram type={question.diagramType} />
              </div>
            )}
          </div>
        )}

        {/* Right Side: The Question & Options / TITA Input */}
        <div
          className={`${
            hasContext ? 'md:w-1/2' : 'w-full'
          } p-5 overflow-y-auto flex flex-col justify-between space-y-5 bg-white`}
        >
          <div>
            {!hasContext && question.contextHeader && (
              <div className="text-xs font-bold text-amber-900 bg-amber-50 border-l-4 border-amber-500 p-2.5 mb-4 rounded-r">
                {question.contextHeader}
              </div>
            )}

            {/* Question Text */}
            <div className="text-sm sm:text-base font-semibold text-gray-900 whitespace-pre-line leading-relaxed mb-4">
              {question.questionText}
            </div>

            {/* Inline diagram if no context pane */}
            {!hasContext && question.diagramType && (
              <div className="my-4">
                <CatDiagram type={question.diagramType} />
              </div>
            )}

            {/* Answer Mode: MCQ Options */}
            {question.type === 'MCQ' && question.options && (
              <div className="space-y-3 mt-4">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Select your answer:
                </div>
                {question.options.map((opt) => {
                  const isSelected = currentAnswer === String(opt.id);
                  return (
                    <label
                      key={opt.id}
                      onClick={() => onAnswerChange(String(opt.id))}
                      className={`flex items-start space-x-3 p-3.5 rounded-lg border cursor-pointer transition select-none ${
                        isSelected
                          ? 'bg-blue-50/80 border-blue-600 ring-2 ring-blue-500/30 text-gray-950 font-medium'
                          : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={opt.id}
                        checked={isSelected}
                        onChange={() => onAnswerChange(String(opt.id))}
                        className="mt-1 w-4 h-4 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="flex-1 text-sm leading-relaxed">
                        <span className="font-bold mr-2 text-blue-900">{opt.id}.</span>
                        <span>{opt.text}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}

            {/* Answer Mode: TITA (Type In The Answer) */}
            {question.type === 'TITA' && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-xs font-bold text-gray-600 mb-2">
                  Type In The Answer (TITA) using on-screen virtual keypad:
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <input
                    type="text"
                    value={currentAnswer}
                    readOnly
                    placeholder="Enter answer here..."
                    className="flex-1 px-4 py-2 bg-white border-2 border-blue-600 rounded text-base font-mono font-bold text-gray-900 tracking-wider shadow-inner"
                  />
                  <button
                    onClick={() => handleTitaKey('CLEAR')}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-bold rounded"
                  >
                    Clear
                  </button>
                  <button
                    onClick={() => handleTitaKey('BACK')}
                    className="p-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
                    title="Backspace"
                  >
                    <Delete className="w-4 h-4" />
                  </button>
                </div>

                {/* Virtual Numeric Keypad */}
                <div className="grid grid-cols-4 gap-2 max-w-xs">
                  {['7', '8', '9', 'BACK', '4', '5', '6', 'CLEAR', '1', '2', '3', '-', '0', '.'].map((key) => {
                    if (key === 'BACK') {
                      return (
                        <button
                          key={key}
                          onClick={() => handleTitaKey('BACK')}
                          className="p-2.5 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold rounded text-xs flex items-center justify-center"
                        >
                          ⌫
                        </button>
                      );
                    }
                    if (key === 'CLEAR') {
                      return (
                        <button
                          key={key}
                          onClick={() => handleTitaKey('CLEAR')}
                          className="p-2.5 bg-red-100 hover:bg-red-200 text-red-800 font-bold rounded text-xs flex items-center justify-center"
                        >
                          C
                        </button>
                      );
                    }
                    return (
                      <button
                        key={key}
                        onClick={() => handleTitaKey(key)}
                        className="p-2.5 bg-white hover:bg-blue-50 border border-gray-300 rounded font-bold text-sm text-gray-800 shadow-xs active:bg-blue-100 transition"
                      >
                        {key}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Response Status Indicator */}
          <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 flex items-center justify-between">
            <div>
              Status:{' '}
              <span className="font-bold text-gray-800 capitalize">
                {(response?.status || 'not_visited').replace(/_/g, ' ')}
              </span>
            </div>
            {currentAnswer && (
              <div className="text-emerald-700 font-bold flex items-center space-x-1">
                <Check className="w-3.5 h-3.5" />
                <span>Selected: {currentAnswer}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Action Footer (Save & Next, Clear, Mark for Review) */}
      <div className="px-5 py-3 bg-[#e2e8f0] border-t border-gray-300 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Left Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onMarkForReviewAndNext}
            className="px-4 py-2 rounded bg-[#7e22ce] hover:bg-purple-800 text-white font-bold transition shadow-xs flex items-center space-x-1"
          >
            <span>Mark for Review & Next</span>
          </button>

          <button
            onClick={onClearResponse}
            className="px-4 py-2 rounded bg-white hover:bg-gray-100 text-gray-700 font-bold border border-gray-300 transition shadow-xs"
          >
            Clear Response
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreviousQuestion}
            disabled={isFirstQuestion}
            className={`px-3 py-2 rounded font-bold border transition flex items-center space-x-1 ${
              isFirstQuestion
                ? 'bg-gray-200 text-gray-400 border-gray-300 cursor-not-allowed'
                : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300 shadow-xs'
            }`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            onClick={onSaveAndNext}
            className="px-5 py-2 rounded bg-[#22c55e] hover:bg-emerald-600 text-white font-bold transition shadow-xs flex items-center space-x-1.5"
          >
            <span>Save & Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
