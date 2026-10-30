import React, { useState, useMemo } from 'react';
import {
  X,
  FileText,
  UploadCloud,
  CheckCircle2,
  AlertTriangle,
  Play,
  Trash2,
  Copy,
  Check,
  PlusCircle,
  BookOpen,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { MockTestPaper } from '../types/cat.ts';
import {
  parseQuestionsFromText,
  parseQuestionsFromJson,
  SAMPLE_TEXT_TEMPLATE,
  SAMPLE_JSON_TEMPLATE,
} from '../utils/questionParser.ts';

interface CatPaperManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  availablePapers: MockTestPaper[];
  activePaperId: string;
  onSelectPaper: (paperId: string) => void;
  onImportNewPaper: (newPaper: MockTestPaper) => void;
  onDeleteCustomPaper: (paperId: string) => void;
}

export const CatPaperManagerModal: React.FC<CatPaperManagerModalProps> = ({
  isOpen,
  onClose,
  availablePapers,
  activePaperId,
  onSelectPaper,
  onImportNewPaper,
  onDeleteCustomPaper,
}) => {
  const [activeTab, setActiveTab] = useState<'select' | 'import'>('select');

  // Import form state
  const [paperTitle, setPaperTitle] = useState('');
  const [paperSubtitle, setPaperSubtitle] = useState('');
  const [importFormat, setImportFormat] = useState<'text' | 'json'>('text');
  const [inputText, setInputText] = useState('');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Live parse result
  const parseResult = useMemo(() => {
    if (!inputText.trim()) return null;
    return importFormat === 'text'
      ? parseQuestionsFromText(inputText)
      : parseQuestionsFromJson(inputText);
  }, [inputText, importFormat]);

  if (!isOpen) return null;

  const handleLoadSample = () => {
    if (importFormat === 'text') {
      setInputText(SAMPLE_TEXT_TEMPLATE);
      setPaperTitle('Sample Custom Mock Test (CAT Standard)');
      setPaperSubtitle('Parsed from formatted Question & Answer text');
    } else {
      setInputText(SAMPLE_JSON_TEMPLATE);
      setPaperTitle('Sample JSON CAT Paper');
      setPaperSubtitle('Imported via structured JSON schema');
    }
  };

  const handleCopyTemplate = () => {
    const content = importFormat === 'text' ? SAMPLE_TEXT_TEMPLATE : SAMPLE_JSON_TEMPLATE;
    navigator.clipboard.writeText(content);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  const handleSaveAndStart = () => {
    if (!parseResult || !parseResult.success || parseResult.questions.length === 0) return;

    const newPaperId = `custom-mock-${Date.now()}`;
    const newPaper: MockTestPaper = {
      id: newPaperId,
      title: paperTitle.trim() || `Custom Mock Test (${parseResult.questions.length} Questions)`,
      subtitle: paperSubtitle.trim() || `User imported set with ${parseResult.counts.VARC} VARC, ${parseResult.counts.LRDI} LRDI, ${parseResult.counts.QA} QA`,
      description: `Custom question paper containing ${parseResult.questions.length} questions.`,
      totalQuestions: parseResult.questions.length,
      sections: {
        VARC: parseResult.counts.VARC,
        LRDI: parseResult.counts.LRDI,
        QA: parseResult.counts.QA,
      },
      durationMinutesPerSection: 40,
      questions: parseResult.questions,
      isCustom: true,
      createdAt: new Date().toISOString(),
    };

    onImportNewPaper(newPaper);
    onSelectPaper(newPaperId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-300 w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden animate-in fade-in">
        {/* Modal Header */}
        <div className="bg-[#1b3a5c] text-white px-6 py-4 flex items-center justify-between border-b border-blue-900">
          <div className="flex items-center space-x-3">
            <div className="bg-amber-400 text-blue-950 p-2 rounded-lg font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold tracking-wide">
                CAT Question Papers & Mock Test Manager
              </h2>
              <p className="text-xs text-blue-200">
                Switch test papers, take practice sets, or paste your new Question & Answer set
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-blue-200 hover:text-white p-1.5 rounded-lg hover:bg-blue-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 pt-3 flex space-x-4">
          <button
            onClick={() => setActiveTab('select')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition flex items-center space-x-2 ${
              activeTab === 'select'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Available Test Papers ({availablePapers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('import')}
            className={`pb-3 px-3 text-sm font-semibold border-b-2 transition flex items-center space-x-2 ${
              activeTab === 'import'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>Import / Paste New Question Set</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'select' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Select a test paper to load into the TCS iON exam simulator. Your progress for each test paper is safely preserved.
                </p>
                <button
                  onClick={() => setActiveTab('import')}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-xs transition"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add New Question Set</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availablePapers.map((paper) => {
                  const isActive = paper.id === activePaperId;
                  return (
                    <div
                      key={paper.id}
                      className={`rounded-xl border p-5 transition flex flex-col justify-between ${
                        isActive
                          ? 'border-blue-600 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20'
                          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xs'
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-bold text-gray-900 text-sm leading-snug">
                            {paper.title}
                          </h3>
                          {isActive ? (
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600 text-white shrink-0">
                              Active
                            </span>
                          ) : paper.isCustom ? (
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                              Custom Set
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                              Official Mock
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-gray-500 mb-3">{paper.subtitle}</p>

                        {/* Section Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-4 text-[11px]">
                          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded font-medium border border-indigo-100">
                            Total: {paper.totalQuestions} Qs
                          </span>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded font-medium border border-emerald-100">
                            VARC: {paper.sections.VARC}
                          </span>
                          <span className="px-2 py-0.5 bg-amber-50 text-amber-700 rounded font-medium border border-amber-100">
                            DILR: {paper.sections.LRDI}
                          </span>
                          <span className="px-2 py-0.5 bg-rose-50 text-rose-700 rounded font-medium border border-rose-100">
                            QA: {paper.sections.QA}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        {paper.isCustom && (
                          <button
                            onClick={() => onDeleteCustomPaper(paper.id)}
                            className="text-xs text-red-500 hover:text-red-700 flex items-center space-x-1 p-1 hover:bg-red-50 rounded transition"
                            title="Delete custom paper"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                          </button>
                        )}
                        {!paper.isCustom && <div />}

                        {isActive ? (
                          <button
                            onClick={onClose}
                            className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-xs"
                          >
                            <span>Currently Loaded</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              onSelectPaper(paper.id);
                              onClose();
                            }}
                            className="px-4 py-1.5 bg-white border border-gray-300 hover:border-blue-600 hover:text-blue-600 text-gray-700 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition shadow-xs"
                          >
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Switch to This Paper</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Form Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Test Paper Name
                  </label>
                  <input
                    type="text"
                    value={paperTitle}
                    onChange={(e) => setPaperTitle(e.target.value)}
                    placeholder="e.g. My Custom CAT Mock 2024"
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Subtitle / Source (Optional)
                  </label>
                  <input
                    type="text"
                    value={paperSubtitle}
                    onChange={(e) => setPaperSubtitle(e.target.value)}
                    placeholder="e.g. Sectional Practice / Open Mock"
                    className="w-full text-xs px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Format & Quick Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-gray-700">Input Format:</span>
                  <div className="flex bg-white rounded-md border border-gray-300 p-0.5 text-xs font-semibold">
                    <button
                      onClick={() => setImportFormat('text')}
                      className={`px-3 py-1 rounded transition ${
                        importFormat === 'text'
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Plain Text (Q1, Options, Ans, Sol)
                    </button>
                    <button
                      onClick={() => setImportFormat('json')}
                      className={`px-3 py-1 rounded transition ${
                        importFormat === 'json'
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      JSON Schema
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleLoadSample}
                    className="px-2.5 py-1 text-xs bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded font-medium flex items-center space-x-1 shadow-xs transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Load Sample Template</span>
                  </button>
                  <button
                    onClick={handleCopyTemplate}
                    className="px-2.5 py-1 text-xs bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded font-medium flex items-center space-x-1 shadow-xs transition"
                  >
                    {copiedTemplate ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-500" />
                    )}
                    <span>{copiedTemplate ? 'Copied!' : 'Copy Template'}</span>
                  </button>
                </div>
              </div>

              {/* Text Area */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Paste Questions and Answers:
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  rows={10}
                  placeholder={
                    importFormat === 'text'
                      ? `Section: VARC\nPassage:\n[Reading comprehension text here...]\n\nQ1. What is the central idea?\nA. First option\nB. Second option\nC. Third option\nD. Fourth option\nAns: B\nSolution: The author explicitly clarifies...\n\nSection: LRDI\nQ2. [TITA] Find the value...\nAns: 42\nSolution: ...`
                      : `[\n  {\n    "id": 1,\n    "section": "VARC",\n    "type": "MCQ",\n    "questionText": "...",\n    "options": [{ "id": 1, "text": "..." }],\n    "correctAnswer": "1",\n    "solution": { "explanation": "..." }\n  }\n]`
                  }
                  className="w-full font-mono text-xs p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white leading-relaxed"
                />
              </div>

              {/* Parser Feedback */}
              {parseResult && (
                <div
                  className={`p-4 rounded-xl border text-xs ${
                    parseResult.success
                      ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                      : 'bg-red-50/70 border-red-300 text-red-950'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2 font-bold">
                      {parseResult.success ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Validation Successful: Ready to Import!</span>
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>Validation Issues Found ({parseResult.errors.length})</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-2 font-semibold">
                      <span className="px-2 py-0.5 bg-white rounded border text-gray-800">
                        {parseResult.counts.total} Questions Detected
                      </span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                        VARC: {parseResult.counts.VARC}
                      </span>
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded">
                        DILR: {parseResult.counts.LRDI}
                      </span>
                      <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded">
                        QA: {parseResult.counts.QA}
                      </span>
                    </div>
                  </div>

                  {parseResult.errors.length > 0 && (
                    <div className="mt-2 text-red-700 bg-red-100/50 p-2.5 rounded border border-red-200">
                      <ul className="list-disc list-inside space-y-0.5">
                        {parseResult.errors.slice(0, 5).map((err, i) => (
                          <li key={i}>{err}</li>
                        ))}
                        {parseResult.errors.length > 5 && (
                          <li>...and {parseResult.errors.length - 5} more issues</li>
                        )}
                      </ul>
                    </div>
                  )}

                  {parseResult.warnings.length > 0 && (
                    <div className="mt-2 text-amber-700 bg-amber-100/50 p-2 rounded border border-amber-200">
                      <ul className="list-disc list-inside space-y-0.5">
                        {parseResult.warnings.slice(0, 3).map((w, i) => (
                          <li key={i}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-3.5 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            {activeTab === 'select'
              ? 'You can switch papers at any time during practice.'
              : 'Pasted sets are saved to your browser so they remain available.'}
          </p>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg text-xs font-semibold transition"
            >
              Cancel
            </button>

            {activeTab === 'import' && (
              <button
                disabled={!parseResult || !parseResult.success || parseResult.questions.length === 0}
                onClick={handleSaveAndStart}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg text-xs font-semibold flex items-center space-x-1.5 shadow-xs transition"
              >
                <Check className="w-4 h-4" />
                <span>Save & Start This Paper</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
