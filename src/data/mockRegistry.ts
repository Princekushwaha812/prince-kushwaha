import { MockTestPaper, QuestionData, SectionId } from '../types/cat.ts';
import { ALL_MOCK_QUESTIONS } from './mockQuestions.ts';
import { MOCK_2_QUESTIONS } from './mock2Questions.ts';
import { OPEN_CDC_1_QUESTIONS } from './openCdc1Questions.ts';

export const BUILTIN_PAPERS: MockTestPaper[] = [
  {
    id: 'open-cdc-1-2024',
    title: 'Career Launcher OPEN CDC 01 2024',
    subtitle: 'Official CAT Exam Pattern: 24 VARC • 20 DILR • 22 QA (66 Questions)',
    description: 'Complete Career Launcher Open CDC 01 2024 mock with full-length VARC, DILR caselets, and QA, featuring complete detailed step-by-step solutions.',
    totalQuestions: OPEN_CDC_1_QUESTIONS.length,
    sections: {
      VARC: OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'VARC').length,
      LRDI: OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'LRDI').length,
      QA: OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'QA').length,
    },
    durationMinutesPerSection: 40,
    questions: OPEN_CDC_1_QUESTIONS,
    isCustom: false,
  },
  {
    id: 'cat-mock-1',
    title: 'All India Open Mock CAT - 1',
    subtitle: 'Career Launcher / aspiration.ai (100 Questions)',
    description: 'Authentic 100-question full-length mock with 34 VARC, 32 LRDI, and 34 QA questions.',
    totalQuestions: ALL_MOCK_QUESTIONS.length,
    sections: {
      VARC: ALL_MOCK_QUESTIONS.filter((q) => q.section === 'VARC').length,
      LRDI: ALL_MOCK_QUESTIONS.filter((q) => q.section === 'LRDI').length,
      QA: ALL_MOCK_QUESTIONS.filter((q) => q.section === 'QA').length,
    },
    durationMinutesPerSection: 40,
    questions: ALL_MOCK_QUESTIONS,
    isCustom: false,
  },
  {
    id: 'cat-mock-2',
    title: 'CAT Official Pattern Mock Test - 2',
    subtitle: 'New Practice Set (High Yield RC, DILR & QA)',
    description: 'Fresh comprehensive mock test with new passages, microservices arrangement, set theory, and quantitative aptitude.',
    totalQuestions: MOCK_2_QUESTIONS.length,
    sections: {
      VARC: MOCK_2_QUESTIONS.filter((q) => q.section === 'VARC').length,
      LRDI: MOCK_2_QUESTIONS.filter((q) => q.section === 'LRDI').length,
      QA: MOCK_2_QUESTIONS.filter((q) => q.section === 'QA').length,
    },
    durationMinutesPerSection: 40,
    questions: MOCK_2_QUESTIONS,
    isCustom: false,
  },
];

const STORAGE_KEY_CUSTOM_PAPERS = 'cat_mock_custom_papers_v1';

export function getCustomPapers(): MockTestPaper[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CUSTOM_PAPERS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load custom papers', e);
    return [];
  }
}

export function saveCustomPaper(paper: MockTestPaper): void {
  try {
    const existing = getCustomPapers();
    const filtered = existing.filter((p) => p.id !== paper.id);
    const updated = [paper, ...filtered];
    localStorage.setItem(STORAGE_KEY_CUSTOM_PAPERS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save custom paper', e);
  }
}

export function deleteCustomPaper(paperId: string): void {
  try {
    const existing = getCustomPapers();
    const updated = existing.filter((p) => p.id !== paperId);
    localStorage.setItem(STORAGE_KEY_CUSTOM_PAPERS, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete custom paper', e);
  }
}

export function getAllAvailablePapers(): MockTestPaper[] {
  const custom = getCustomPapers();
  return [...BUILTIN_PAPERS, ...custom];
}

export function getPaperById(id: string): MockTestPaper {
  const all = getAllAvailablePapers();
  const found = all.find((p) => p.id === id);
  return found || BUILTIN_PAPERS[0];
}

/**
 * Calculates section metadata dynamically based on actual questions in test paper
 */
export function getSectionMetadataForQuestions(questions: QuestionData[], section: SectionId) {
  const secQuestions = questions.filter((q) => q.section === section);
  const minId = secQuestions.length > 0 ? Math.min(...secQuestions.map((q) => q.id)) : 0;
  const maxId = secQuestions.length > 0 ? Math.max(...secQuestions.map((q) => q.id)) : 0;

  return {
    name:
      section === 'VARC'
        ? 'Verbal Ability & Reading Comprehension'
        : section === 'LRDI'
        ? 'Data Interpretation & Logical Reasoning'
        : 'Quantitative Aptitude',
    shortName: section === 'LRDI' ? 'DILR / LRDI' : section,
    rangeText: secQuestions.length > 0 ? `Q.${minId} - Q.${maxId}` : 'No questions',
    totalQuestions: secQuestions.length,
    timeMinutes: 40,
  };
}
