import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_MOCK_QUESTIONS, SECTION_METADATA } from './mockQuestions.ts';

test('ALL_MOCK_QUESTIONS has exactly 100 questions with unique continuous IDs 1 to 100', () => {
  assert.equal(ALL_MOCK_QUESTIONS.length, 100);
  for (let i = 1; i <= 100; i++) {
    const q = ALL_MOCK_QUESTIONS[i - 1];
    assert.equal(q.id, i, `Question at index ${i - 1} should have id ${i}`);
  }
});

test('Section counts match CAT standard breakdown', () => {
  const varc = ALL_MOCK_QUESTIONS.filter((q) => q.section === 'VARC');
  const lrdi = ALL_MOCK_QUESTIONS.filter((q) => q.section === 'LRDI');
  const qa = ALL_MOCK_QUESTIONS.filter((q) => q.section === 'QA');

  assert.equal(varc.length, 34);
  assert.equal(lrdi.length, 32);
  assert.equal(qa.length, 34);
});

test('Every question has non-empty text, correct answer, and solution', () => {
  for (const q of ALL_MOCK_QUESTIONS) {
    assert.ok(q.questionText && q.questionText.trim().length > 0, `Q${q.id} missing questionText`);
    assert.ok(q.correctAnswer && q.correctAnswer.trim().length > 0, `Q${q.id} missing correctAnswer`);
    assert.ok(q.solution && q.solution.explanation.trim().length > 0, `Q${q.id} missing solution`);
    if (q.type === 'MCQ') {
      assert.ok(q.options && q.options.length >= 3, `MCQ Q${q.id} should have options`);
    }
  }
});
