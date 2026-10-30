export type SectionId = 'VARC' | 'LRDI' | 'QA';

export type QuestionType = 'MCQ' | 'TITA';

export type QuestionStatus = 
  | 'not_visited'
  | 'not_answered'
  | 'answered'
  | 'marked_for_review'
  | 'answered_marked_for_review';

export interface QuestionOption {
  id: number;
  text: string;
}

export interface QuestionData {
  id: number; // 1 to 100
  section: SectionId;
  type: QuestionType;
  title?: string;
  contextHeader?: string; // e.g. "Directions for questions (1 to 6): ..."
  passageText?: string;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    subHeaders?: string[];
  };
  diagramType?: 'circle_geom' | 'cube_dice' | 'parabola_graph' | 'venn_survey' | 'hexagon_geom' | 'concentric_circles';
  questionText: string;
  options?: QuestionOption[]; // for MCQ
  correctAnswer: string; // "1", "2", "3", "4" or number like "47"
  solution: {
    correctAnswerText?: string;
    genre?: string;
    wordCount?: number;
    explanation: string;
    optionElimination?: {
      option: number | string;
      reason: string;
    }[];
  };
}

export interface UserResponse {
  answer: string; // selected option number ("1"-"4") or TITA string
  status: QuestionStatus;
  timeSpentSeconds: number;
  isBookmarked: boolean;
}

export interface SectionSummary {
  section: SectionId;
  name: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  score: number;
  accuracy: number;
  percentile: number;
  timeSpentSeconds: number;
  allocatedTimeSeconds: number;
  percentageOfExamTime: number;
  avgTimePerQuestion: number; // in seconds
}

export interface ExamResult {
  totalScore: number;
  totalAttempts: number;
  totalCorrect: number;
  totalIncorrect: number;
  overallAccuracy: number;
  estimatedPercentile: number;
  totalTimeSpentSeconds: number;
  totalAllocatedSeconds: number;
  sections: Record<SectionId, SectionSummary>;
}
