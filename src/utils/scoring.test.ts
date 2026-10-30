import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateQuestionScore, evaluateTest, estimatePercentile } from './scoring.ts';
import { QuestionData, UserResponse } from '../types/cat.ts';

const mockMcqQuestion: QuestionData = {
  id: 1,
  section: 'VARC',
  type: 'MCQ',
  questionText: 'Test MCQ question?',
  options: [
    { id: 1, text: 'Option 1' },
    { id: 2, text: 'Option 2' },
    { id: 3, text: 'Option 3' },
    { id: 4, text: 'Option 4' },
  ],
  correctAnswer: '3',
  solution: {
    explanation: 'Option 3 is correct',
  },
};

const mockTitaQuestion: QuestionData = {
  id: 28,
  section: 'VARC',
  type: 'TITA',
  questionText: 'Type parajumble sequence',
  correctAnswer: '31254',
  solution: {
    explanation: 'The order is 31254',
  },
};

test('MCQ scoring gives +3 for correct', () => {
  const resp: UserResponse = {
    answer: '3',
    status: 'answered',
    timeSpentSeconds: 30,
    isBookmarked: false,
  };
  const result = calculateQuestionScore(mockMcqQuestion, resp);
  assert.equal(result.score, 3);
  assert.equal(result.isCorrect, true);
  assert.equal(result.isAttempted, true);
});

test('MCQ scoring gives -1 for incorrect', () => {
  const resp: UserResponse = {
    answer: '2',
    status: 'answered',
    timeSpentSeconds: 25,
    isBookmarked: false,
  };
  const result = calculateQuestionScore(mockMcqQuestion, resp);
  assert.equal(result.score, -1);
  assert.equal(result.isCorrect, false);
  assert.equal(result.isAttempted, true);
});

test('TITA scoring gives +3 for correct and 0 for incorrect', () => {
  const respCorrect: UserResponse = {
    answer: '31254',
    status: 'answered',
    timeSpentSeconds: 40,
    isBookmarked: false,
  };
  const res1 = calculateQuestionScore(mockTitaQuestion, respCorrect);
  assert.equal(res1.score, 3);
  assert.equal(res1.isCorrect, true);

  const respWrong: UserResponse = {
    answer: '12345',
    status: 'answered',
    timeSpentSeconds: 40,
    isBookmarked: false,
  };
  const res2 = calculateQuestionScore(mockTitaQuestion, respWrong);
  assert.equal(res2.score, 0); // No negative marking in TITA!
  assert.equal(res2.isCorrect, false);
  assert.equal(res2.isAttempted, true);
});

test('Unattempted question gives 0 marks', () => {
  const res = calculateQuestionScore(mockMcqQuestion, undefined);
  assert.equal(res.score, 0);
  assert.equal(res.isAttempted, false);
});

test('estimatePercentile yields realistic CAT percentiles', () => {
  assert.ok(estimatePercentile(150) >= 99);
  assert.ok(estimatePercentile(100) >= 97);
  assert.ok(estimatePercentile(50) >= 75);
  assert.ok(estimatePercentile(0) <= 10);
});

test('evaluateTest aggregates sections accurately', () => {
  const questions: QuestionData[] = [
    mockMcqQuestion,
    mockTitaQuestion,
    {
      id: 35,
      section: 'LRDI',
      type: 'TITA',
      questionText: 'LRDI Q35',
      correctAnswer: '47',
      solution: { explanation: '47' },
    },
  ];

  const responses: Record<number, UserResponse> = {
    1: { answer: '3', status: 'answered', timeSpentSeconds: 20, isBookmarked: false }, // +3
    28: { answer: '99999', status: 'answered', timeSpentSeconds: 15, isBookmarked: false }, // 0 (TITA)
    35: { answer: '47', status: 'answered', timeSpentSeconds: 45, isBookmarked: false }, // +3
  };

  const evalResult = evaluateTest(questions, responses, { VARC: 1200, LRDI: 1500, QA: 900 });
  assert.equal(evalResult.totalScore, 6);
  assert.equal(evalResult.totalAttempts, 3);
  assert.equal(evalResult.totalCorrect, 2);
  assert.equal(evalResult.totalIncorrect, 1);
  assert.equal(evalResult.sections.VARC.score, 3);
  assert.equal(evalResult.sections.LRDI.score, 3);
  assert.equal(evalResult.totalTimeSpentSeconds, 3600);
  assert.equal(evalResult.sections.VARC.timeSpentSeconds, 1200);
  assert.equal(evalResult.sections.VARC.allocatedTimeSeconds, 2400);
});
