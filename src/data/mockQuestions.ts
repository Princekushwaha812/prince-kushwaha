import { QuestionData, SectionId } from '../types/cat.ts';
import { varcQuestions } from './varcQuestions.ts';
import { lrdiQuestions } from './lrdiQuestions.ts';
import { qaQuestions } from './qaQuestions.ts';

export const ALL_MOCK_QUESTIONS: QuestionData[] = [
  ...varcQuestions,
  ...lrdiQuestions,
  ...qaQuestions,
];

export const SECTION_METADATA: Record<
  SectionId,
  { name: string; shortName: string; rangeText: string; totalQuestions: number; timeMinutes: number }
> = {
  VARC: {
    name: 'Verbal Ability & Reading Comprehension',
    shortName: 'VARC',
    rangeText: 'Q.1 - Q.34',
    totalQuestions: 34,
    timeMinutes: 40,
  },
  LRDI: {
    name: 'Data Interpretation & Logical Reasoning',
    shortName: 'DILR / LRDI',
    rangeText: 'Q.35 - Q.66',
    totalQuestions: 32,
    timeMinutes: 40,
  },
  QA: {
    name: 'Quantitative Aptitude',
    shortName: 'QA',
    rangeText: 'Q.67 - Q.100',
    totalQuestions: 34,
    timeMinutes: 40,
  },
};

export function getQuestionsBySection(section: SectionId): QuestionData[] {
  return ALL_MOCK_QUESTIONS.filter((q) => q.section === section);
}

export function getQuestionById(id: number): QuestionData | undefined {
  return ALL_MOCK_QUESTIONS.find((q) => q.id === id);
}
