import { QuestionData, UserResponse, SectionId, ExamResult, SectionSummary } from '../types/cat.ts';

/**
 * Calculates score for a single question based on CAT marking scheme:
 * - MCQ: +3 for correct, -1 for incorrect, 0 for unattempted
 * - TITA: +3 for correct, 0 for incorrect, 0 for unattempted
 */
export function calculateQuestionScore(
  question: QuestionData,
  response?: UserResponse
): { score: number; isAttempted: boolean; isCorrect: boolean } {
  if (!response || !response.answer || response.answer.trim() === '') {
    return { score: 0, isAttempted: false, isCorrect: false };
  }

  const userAnswer = response.answer.trim().toLowerCase();
  const correctAnswer = question.correctAnswer.trim().toLowerCase();

  const isCorrect = userAnswer === correctAnswer;

  if (isCorrect) {
    return { score: 3, isAttempted: true, isCorrect: true };
  }

  // If wrong
  if (question.type === 'MCQ') {
    return { score: -1, isAttempted: true, isCorrect: false };
  } else {
    // TITA has no negative marking in CAT
    return { score: 0, isAttempted: true, isCorrect: false };
  }
}

/**
 * Estimates CAT percentile based on scaled score
 * (Approximate CAT curve for 300 total marks exam)
 */
export function estimatePercentile(score: number, maxPossible = 300): number {
  if (score <= 0) return 5.0;
  // Scaled benchmarks:
  // ~150+ -> 99.9+
  // ~120 -> 99.0
  // ~100 -> 98.0
  // ~80 -> 95.0
  // ~65 -> 90.0
  // ~50 -> 80.0
  // ~35 -> 70.0
  // ~20 -> 50.0
  if (score >= 150) return Math.min(99.99, 99.5 + ((score - 150) / 150) * 0.49);
  if (score >= 120) return 99.0 + ((score - 120) / 30) * 0.9;
  if (score >= 100) return 98.0 + ((score - 100) / 20) * 1.0;
  if (score >= 80) return 95.0 + ((score - 80) / 20) * 3.0;
  if (score >= 65) return 90.0 + ((score - 65) / 15) * 5.0;
  if (score >= 50) return 80.0 + ((score - 50) / 15) * 10.0;
  if (score >= 35) return 70.0 + ((score - 35) / 15) * 10.0;
  if (score >= 20) return 50.0 + ((score - 20) / 15) * 20.0;
  return Math.max(5.0, 10.0 + (score / 20) * 40.0);
}

/**
 * Evaluates entire test and sectional breakdowns
 */
export function evaluateTest(
  questions: QuestionData[],
  responses: Record<number, UserResponse>,
  sectionTimeSpent: Record<SectionId, number> = { VARC: 0, LRDI: 0, QA: 0 }
): ExamResult {
  const sectionGroups: Record<SectionId, QuestionData[]> = {
    VARC: [],
    LRDI: [],
    QA: [],
  };

  for (const q of questions) {
    sectionGroups[q.section].push(q);
  }

  const sections: Record<SectionId, SectionSummary> = {
    VARC: createEmptySectionSummary('VARC', 'Verbal Ability & Reading Comprehension'),
    LRDI: createEmptySectionSummary('LRDI', 'Data Interpretation & Logical Reasoning'),
    QA: createEmptySectionSummary('QA', 'Quantitative Aptitude'),
  };

  let totalScore = 0;
  let totalAttempts = 0;
  let totalCorrect = 0;
  let totalIncorrect = 0;
  const totalAllocatedSeconds = 120 * 60; // 7200 seconds (40 mins x 3)

  const totalTimeSpentSeconds =
    (sectionTimeSpent.VARC || 0) + (sectionTimeSpent.LRDI || 0) + (sectionTimeSpent.QA || 0);

  for (const secId of ['VARC', 'LRDI', 'QA'] as SectionId[]) {
    const secQuestions = sectionGroups[secId];
    let secScore = 0;
    let secAttempts = 0;
    let secCorrect = 0;
    let secIncorrect = 0;

    for (const q of secQuestions) {
      const resp = responses[q.id];
      const { score, isAttempted, isCorrect } = calculateQuestionScore(q, resp);

      if (isAttempted) {
        secAttempts++;
        if (isCorrect) {
          secCorrect++;
        } else {
          secIncorrect++;
        }
      }
      secScore += score;
    }

    const accuracy = secAttempts > 0 ? (secCorrect / secAttempts) * 100 : 0;
    const percentile = estimatePercentile(secScore, secQuestions.length * 3);
    const timeSpent = sectionTimeSpent[secId] || 0;
    const allocatedTime = 40 * 60; // 2400 seconds
    const percentageOfExam =
      totalTimeSpentSeconds > 0 ? (timeSpent / totalTimeSpentSeconds) * 100 : 33.33;
    const avgTimePerQ = secAttempts > 0 ? Math.round(timeSpent / secAttempts) : 0;

    sections[secId] = {
      section: secId,
      name:
        secId === 'VARC'
          ? 'Verbal Ability & Reading Comprehension'
          : secId === 'LRDI'
          ? 'Data Interpretation & Logical Reasoning'
          : 'Quantitative Aptitude',
      totalQuestions: secQuestions.length,
      attempted: secAttempts,
      correct: secCorrect,
      incorrect: secIncorrect,
      score: secScore,
      accuracy: Math.round(accuracy * 10) / 10,
      percentile: Math.round(percentile * 10) / 10,
      timeSpentSeconds: timeSpent,
      allocatedTimeSeconds: allocatedTime,
      percentageOfExamTime: Math.round(percentageOfExam * 10) / 10,
      avgTimePerQuestion: avgTimePerQ,
    };

    totalScore += secScore;
    totalAttempts += secAttempts;
    totalCorrect += secCorrect;
    totalIncorrect += secIncorrect;
  }

  const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;
  const overallPercentile = estimatePercentile(totalScore, questions.length * 3);

  return {
    totalScore,
    totalAttempts,
    totalCorrect,
    totalIncorrect,
    overallAccuracy: Math.round(overallAccuracy * 10) / 10,
    estimatedPercentile: Math.round(overallPercentile * 10) / 10,
    totalTimeSpentSeconds,
    totalAllocatedSeconds,
    sections,
  };
}

function createEmptySectionSummary(section: SectionId, name: string): SectionSummary {
  return {
    section,
    name,
    totalQuestions: 0,
    attempted: 0,
    correct: 0,
    incorrect: 0,
    score: 0,
    accuracy: 0,
    percentile: 0,
    timeSpentSeconds: 0,
    allocatedTimeSeconds: 2400,
    percentageOfExamTime: 0,
    avgTimePerQuestion: 0,
  };
}
