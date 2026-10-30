import React, { useState } from 'react';
import { Printer, Eye, EyeOff, BookOpen, Check } from 'lucide-react';
import { QuestionData, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';
import { CatDiagram } from './CatDiagrams.tsx';

interface PrintablePaperProps {
  questions: QuestionData[];
}

export const CatPrintablePaper: React.FC<PrintablePaperProps> = ({ questions }) => {
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionId | 'ALL'>('ALL');

  const displayQuestions =
    selectedSection === 'ALL' ? questions : questions.filter((q) => q.section === selectedSection);

  const sectionsList: (SectionId | 'ALL')[] = ['ALL', 'VARC', 'LRDI', 'QA'];

  return (
    <div className="flex-1 bg-white overflow-y-auto print:overflow-visible p-4 sm:p-8 select-text">
      {/* Top Floating Action Toolbar (Hidden in print) */}
      <div className="max-w-4xl mx-auto mb-6 p-4 bg-slate-900 text-white rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div>
          <h2 className="text-base font-bold flex items-center space-x-2">
            <span>CAT Mock Test Paper View</span>
          </h2>
          <p className="text-xs text-slate-300">
            Official test paper format • Ready to print or view with interactive solutions
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Section Filter */}
          <div className="flex items-center bg-slate-800 rounded p-1 text-xs">
            {sectionsList.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSection(sec)}
                className={`px-2.5 py-1 rounded font-semibold transition ${
                  selectedSection === sec
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Toggle Answer Key */}
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded text-xs font-bold transition ${
              showAnswers
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
            }`}
          >
            {showAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showAnswers ? 'Hide Solutions' : 'Show Solutions'}</span>
          </button>

          {/* Print Button */}
          <button
            onClick={() => window.print()}
            className="flex items-center space-x-1.5 px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs font-bold transition shadow-xs"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Paper</span>
          </button>
        </div>
      </div>

      {/* Actual Paper Document Container */}
      <div className="max-w-4xl mx-auto border border-gray-300 print:border-none p-6 sm:p-10 bg-white shadow-md print:shadow-none text-gray-900 font-serif">
        {/* Paper Header */}
        <div className="border-b-2 border-black pb-4 mb-6 text-center space-y-1">
          <div className="text-xs font-sans font-bold tracking-widest uppercase text-gray-500">
            INDIAN INSTITUTES OF MANAGEMENT (IIMs)
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase">
            Common Admission Test (CAT)
          </h1>
          <h2 className="text-sm font-sans font-semibold text-gray-700 uppercase tracking-wide">
            All India Open Mock CAT - 1
          </h2>
          <div className="flex flex-wrap justify-between pt-3 text-xs font-sans text-gray-600 border-t border-gray-200 mt-3">
            <span><strong>Total Time:</strong> 120 Minutes (40 mins / section)</span>
            <span><strong>Total Questions:</strong> 100</span>
            <span><strong>Maximum Marks:</strong> 300</span>
          </div>
        </div>

        {/* Paper Rules / Instructions Banner */}
        <div className="text-xs font-sans bg-gray-50 border border-gray-200 p-3 rounded mb-8 space-y-1 text-gray-700">
          <p><strong>Instructions to Candidates:</strong></p>
          <p>1. This question paper consists of three sections: Section I (VARC), Section II (DILR), and Section III (QA).</p>
          <p>2. For Multiple Choice Questions (MCQ): Each correct answer carries +3 marks, and each wrong answer carries -1 mark.</p>
          <p>3. For Non-MCQ (Type In The Answer / TITA): Each correct answer carries +3 marks. There is no negative marking for incorrect TITA answers.</p>
        </div>

        {/* Questions grouped by section */}
        {(['VARC', 'LRDI', 'QA'] as SectionId[])
          .filter((sec) => selectedSection === 'ALL' || selectedSection === sec)
          .map((secId) => {
            const secInfo = SECTION_METADATA[secId];
            const secQuestions = displayQuestions.filter((q) => q.section === secId);

            if (secQuestions.length === 0) return null;

            return (
              <section key={secId} className="mb-10 page-break-after">
                {/* Section Header */}
                <div className="bg-gray-100 border-y-2 border-gray-800 py-2 px-3 mb-6 font-sans flex justify-between items-center">
                  <span className="font-bold text-sm tracking-wide uppercase">
                    Section {secId === 'VARC' ? 'I' : secId === 'LRDI' ? 'II' : 'III'}: {secInfo.name}
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    {secInfo.rangeText} • {secQuestions.length} Questions
                  </span>
                </div>

                {/* Section Questions */}
                <div className="space-y-8 divide-y divide-gray-200">
                  {secQuestions.map((q) => (
                    <article key={q.id} className="pt-6 first:pt-0">
                      {/* Context / Passage if starting a new set */}
                      {q.contextHeader && (
                        <div className="font-sans text-xs font-bold text-amber-900 bg-amber-50/80 border-l-4 border-amber-600 p-2.5 mb-3 rounded-r">
                          {q.contextHeader}
                        </div>
                      )}

                      {q.passageText && (
                        <div className="text-xs leading-relaxed text-gray-800 bg-gray-50 p-4 rounded border border-gray-200 mb-4 whitespace-pre-line font-sans">
                          {q.passageText}
                        </div>
                      )}

                      {q.tableData && (
                        <div className="overflow-x-auto border border-gray-300 rounded bg-white my-3 font-sans">
                          <table className="w-full text-xs text-left border-collapse">
                            <thead className="bg-gray-200 text-gray-900">
                              <tr>
                                {q.tableData.headers.map((h, idx) => (
                                  <th key={idx} className="p-2 border border-gray-300 font-bold">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {q.tableData.rows.map((row, rIdx) => (
                                <tr key={rIdx}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-2 border border-gray-300 text-gray-800 font-medium">
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
                        <div className="my-3 font-sans">
                          <CatDiagram type={q.diagramType} />
                        </div>
                      )}

                      {/* Question Header & Prompt */}
                      <div className="flex items-start space-x-2 text-sm">
                        <span className="font-bold text-gray-900 font-sans">
                          Q.{q.id}
                        </span>
                        <div className="flex-1 font-sans">
                          <div className="font-medium text-gray-900 leading-relaxed whitespace-pre-line mb-3">
                            {q.questionText}
                          </div>

                          {/* Options */}
                          {q.type === 'MCQ' && q.options && (
                            <div className="space-y-1.5 pl-2 text-xs sm:text-sm">
                              {q.options.map((opt) => (
                                <div key={opt.id} className="flex items-start space-x-2">
                                  <span className="font-bold text-gray-700 min-w-[20px]">{opt.id}.</span>
                                  <span className="text-gray-800">{opt.text}</span>
                                </div>
                              ))}
                            </div>
                          )}

                          {q.type === 'TITA' && (
                            <div className="text-xs text-gray-500 italic mt-1">
                              [Type In The Answer / Non-MCQ question]
                            </div>
                          )}

                          {/* Show Solutions if toggled */}
                          {showAnswers && (
                            <div className="mt-3 p-3 bg-emerald-50/60 border border-emerald-300 rounded text-xs space-y-1.5">
                              <div className="font-bold text-emerald-900 flex items-center space-x-1">
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Correct Answer: {q.correctAnswer}</span>
                              </div>
                              <div className="text-gray-800 leading-relaxed whitespace-pre-line font-sans">
                                {q.solution.explanation}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
      </div>
    </div>
  );
};
