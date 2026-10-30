import test from 'node:test';
import assert from 'node:assert/strict';
import { OPEN_CDC_1_QUESTIONS } from './openCdc1Questions.ts';

test('OPEN_CDC_1_QUESTIONS has exactly 66 questions with unique continuous IDs 1 to 66', () => {
  assert.equal(OPEN_CDC_1_QUESTIONS.length, 66);
  for (let i = 1; i <= 66; i++) {
    const q = OPEN_CDC_1_QUESTIONS[i - 1];
    assert.equal(q.id, i, `Question at index ${i - 1} should have id ${i}`);
  }
});

test('OPEN_CDC_1_QUESTIONS section counts match standard CAT 66-question pattern', () => {
  const varc = OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'VARC');
  const lrdi = OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'LRDI');
  const qa = OPEN_CDC_1_QUESTIONS.filter((q) => q.section === 'QA');

  assert.equal(varc.length, 24, 'VARC should have 24 questions');
  assert.equal(lrdi.length, 20, 'LRDI should have 20 questions');
  assert.equal(qa.length, 22, 'QA should have 22 questions');
});

test('Every question in OPEN CDC 01 2024 has valid text, correct answer, and explanation', () => {
  for (const q of OPEN_CDC_1_QUESTIONS) {
    assert.ok(q.questionText && q.questionText.trim().length > 0, `Q${q.id} missing questionText`);
    assert.ok(q.correctAnswer && q.correctAnswer.trim().length > 0, `Q${q.id} missing correctAnswer`);
    assert.ok(q.solution && q.solution.explanation.trim().length > 0, `Q${q.id} missing explanation`);
    if (q.type === 'MCQ') {
      assert.ok(q.options && q.options.length >= 3, `MCQ Q${q.id} should have options`);
    }
  }
});
