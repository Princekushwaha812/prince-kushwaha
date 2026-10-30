import React from 'react';
import { AlertTriangle, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { QuestionData, UserResponse, QuestionStatus, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSubmit: () => void;
  questions: QuestionData[];
  responses: Record<number, UserResponse>;
  currentSection: SectionId;
  isFinalSubmit: boolean;
  nextSection?: SectionId;
}

export const CatSubmitModal: React.FC<SubmitModalProps> = ({
  isOpen,
  onClose,
  onConfirmSubmit,
  questions,
  responses,
  currentSection,
  isFinalSubmit,
  nextSection,
}) => {
  if (!isOpen) return null;

  const sections: SectionId[] = ['VARC', 'LRDI', 'QA'];

  const getSectionCounts = (secId: SectionId) => {
    const secQuestions = questions.filter((q) => q.section === secId);
    let answered = 0;
    let notAnswered = 0;
    let marked = 0;
    let notVisited = 0;

    secQuestions.forEach((q) => {
      const resp = responses[q.id];
      const status: QuestionStatus = resp ? resp.status : 'not_visited';
      if (status === 'answered' || status === 'answered_marked_for_review') {
        answered++;
      } else if (status === 'marked_for_review') {
        marked++;
      } else if (status === 'not_answered') {
        notAnswered++;
      } else {
        notVisited++;
      }
    });

    return { total: secQuestions.length, answered, notAnswered, marked, notVisited };
  };

  const currentCounts = getSectionCounts(currentSection);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-300 w-full max-w-2xl overflow-hidden animate-in fade-in select-none">
        <div className="bg-[#1b3a5c] text-white px-6 py-4 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <h3 className="text-base font-bold">
              {isFinalSubmit
                ? 'Final Exam Submission Confirmation'
                : `Complete ${SECTION_METADATA[currentSection].shortName} & Proceed?`}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4 text-sm text-gray-700">
          <p className="text-sm">
            {isFinalSubmit
              ? 'Please review your attempt summary across all sections before final exam submission:'
              : `Review your attempt summary for ${SECTION_METADATA[currentSection].name}:`}
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-[#244b7a] text-white">
                <tr>
                  <th className="p-2.5">Section Name</th>
                  <th className="p-2.5 text-center">No. of Questions</th>
                  <th className="p-2.5 text-center text-emerald-300">Answered</th>
                  <th className="p-2.5 text-center text-rose-300">Not Answered</th>
                  <th className="p-2.5 text-center text-purple-300">Marked for Review</th>
                  <th className="p-2.5 text-center">Not Visited</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-medium">
                {(isFinalSubmit ? sections : [currentSection]).map((secId) => {
                  const counts = getSectionCounts(secId);
                  return (
                    <tr key={secId} className="hover:bg-gray-50">
                      <td className="p-2.5 font-bold text-gray-900">{SECTION_METADATA[secId].shortName}</td>
                      <td className="p-2.5 text-center">{counts.total}</td>
                      <td className="p-2.5 text-center text-emerald-700 font-bold">{counts.answered}</td>
                      <td className="p-2.5 text-center text-red-600 font-bold">{counts.notAnswered}</td>
                      <td className="p-2.5 text-center text-purple-700 font-bold">{counts.marked}</td>
                      <td className="p-2.5 text-center text-gray-500">{counts.notVisited}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-lg text-xs text-amber-900 leading-relaxed space-y-1">
            <p className="font-bold text-amber-950">Important CAT Examination Rule:</p>
            {isFinalSubmit ? (
              <p>
                Once you click <strong>"Yes, Submit Final Exam"</strong>, your test will end. Your scorecard, percentile projection, accuracy, and detailed solutions with option analysis will be displayed.
              </p>
            ) : (
              <p>
                In accordance with CAT guidelines, once you finish <strong>{SECTION_METADATA[currentSection].shortName}</strong>, this section will be permanently locked. You will <strong>NOT</strong> be allowed to return to this section. Any unused time will not carry over to {nextSection ? SECTION_METADATA[nextSection].shortName : 'subsequent sections'}.
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 px-6 py-3.5 border-t border-gray-200 flex items-center justify-end space-x-3">
          <button
            onClick={onClose}
            className="flex items-center space-x-1 px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 rounded text-xs font-bold border border-gray-300 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Test</span>
          </button>

          <button
            onClick={onConfirmSubmit}
            className="flex items-center space-x-1.5 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition shadow-sm"
          >
            {isFinalSubmit ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Yes, Submit Final Exam</span>
              </>
            ) : (
              <>
                <span>Proceed to {nextSection ? SECTION_METADATA[nextSection].shortName : 'Next Section'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
