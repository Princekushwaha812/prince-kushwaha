import React from 'react';
import { X, Info, CheckCircle2 } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CatInstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs">
      <div className="bg-white rounded-lg shadow-2xl border border-gray-300 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in">
        <div className="bg-[#244b7a] text-white px-5 py-3 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center space-x-2">
            <Info className="w-5 h-5 text-blue-300" />
            <h2 className="text-base font-bold tracking-wide">Common Admission Test (CAT) - Instructions</h2>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1 rounded-sm hover:bg-blue-800 transition"
            aria-label="Close Instructions"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5 text-sm text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-bold text-gray-900 text-base mb-2 border-b pb-1">General Instructions</h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Total test duration is <strong>120 minutes</strong> (40 minutes each for VARC, DILR, and QA).</li>
              <li>The clock has been set at the server and the countdown timer at the top displays remaining time.</li>
              <li>You can view questions by navigating using the Question Palette on the right.</li>
              <li>An official on-screen calculator is provided in the top bar for calculations.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-base mb-2 border-b pb-1">Question Palette Color Scheme</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200">
                <div className="w-7 h-7 rounded bg-gray-200 border border-gray-400 flex items-center justify-center font-bold text-gray-700">1</div>
                <div>You have not visited the question yet.</div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200">
                <div className="w-7 h-7 rounded bg-red-600 text-white flex items-center justify-center font-bold">2</div>
                <div>You have not answered the question.</div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200">
                <div className="w-7 h-7 rounded bg-emerald-600 text-white flex items-center justify-center font-bold">3</div>
                <div>You have answered the question.</div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200">
                <div className="w-7 h-7 rounded bg-purple-700 text-white flex items-center justify-center font-bold">4</div>
                <div>You have marked the question for review (not answered).</div>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-50 rounded border border-gray-200 sm:col-span-2">
                <div className="w-7 h-7 rounded bg-purple-700 text-white flex items-center justify-center font-bold relative">
                  5
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-white"></span>
                </div>
                <div>The question is answered AND marked for review (will be evaluated).</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-base mb-2 border-b pb-1">Marking Scheme</h3>
            <div className="bg-blue-50/70 p-3 rounded border border-blue-200 space-y-1.5 text-xs sm:text-sm">
              <p>• <strong>Multiple Choice Questions (MCQ):</strong> +3 marks for correct answer, <strong>-1 mark</strong> for wrong answer.</p>
              <p>• <strong>Non-MCQ (Type In The Answer / TITA):</strong> +3 marks for correct answer, <strong>0 negative marks</strong> for wrong answer.</p>
              <p>• <strong>Unattempted Questions:</strong> 0 marks.</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 text-base mb-2 border-b pb-1">Navigating to a Question</h3>
            <p className="text-xs sm:text-sm">
              Click on <strong>Save & Next</strong> to save your answer for the current question and go to the next question.
              Click on <strong>Mark for Review & Next</strong> to save your answer for the current question and mark it for review.
              Click on <strong>Clear Response</strong> to deselect your chosen answer.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#244b7a] hover:bg-[#1a385c] text-white rounded text-xs font-bold transition flex items-center space-x-1.5"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>I have read the instructions</span>
          </button>
        </div>
      </div>
    </div>
  );
};
