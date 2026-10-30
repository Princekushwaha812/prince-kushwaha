import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseQuestionsFromText,
  parseQuestionsFromJson,
  SAMPLE_TEXT_TEMPLATE,
  SAMPLE_JSON_TEMPLATE,
} from './questionParser.ts';

test('parseQuestionsFromText successfully parses sample text template', () => {
  const result = parseQuestionsFromText(SAMPLE_TEXT_TEMPLATE);
  assert.equal(result.success, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.questions.length, 6);
  assert.equal(result.counts.VARC, 2);
  assert.equal(result.counts.LRDI, 2);
  assert.equal(result.counts.QA, 2);
  assert.equal(result.counts.MCQ, 4);
  assert.equal(result.counts.TITA, 2);

  // Check Q1
  const q1 = result.questions[0];
  assert.equal(q1.section, 'VARC');
  assert.equal(q1.type, 'MCQ');
  assert.equal(q1.correctAnswer, '2'); // B was mapped to 2
  assert.ok(q1.passageText && q1.passageText.includes('intertwined history'));

  // Check Q4 TITA
  const q4 = result.questions[3];
  assert.equal(q4.section, 'LRDI');
  assert.equal(q4.type, 'TITA');
  assert.equal(q4.correctAnswer, '4');

  // Check Q5
  const q5 = result.questions[4];
  assert.equal(q5.section, 'QA');
  assert.equal(q5.type, 'MCQ');
  assert.equal(q5.correctAnswer, '2'); // B mapped to 2
});

test('parseQuestionsFromJson successfully parses JSON template', () => {
  const result = parseQuestionsFromJson(SAMPLE_JSON_TEMPLATE);
  assert.equal(result.success, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.questions.length, 2);
  assert.equal(result.counts.VARC, 1);
  assert.equal(result.counts.QA, 1);
  assert.equal(result.counts.MCQ, 1);
  assert.equal(result.counts.TITA, 1);
});

test('parseQuestionsFromText handles empty and malformed inputs gracefully', () => {
  const emptyRes = parseQuestionsFromText('');
  assert.equal(emptyRes.success, false);
  assert.ok(emptyRes.errors.length > 0);

  const jsonErrorRes = parseQuestionsFromJson('{ bad json');
  assert.equal(jsonErrorRes.success, false);
  assert.ok(jsonErrorRes.errors.length > 0);
});
