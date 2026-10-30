import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseQuestionsFromText,
  parseQuestionsFromJson,
  normalizeSection,
  SAMPLE_TEXT_TEMPLATE,
  SAMPLE_JSON_TEMPLATE,
} from './questionParser.ts';

test('normalizeSection correctly identifies all DILR and LRDI variants', () => {
  assert.equal(normalizeSection('DILR'), 'LRDI');
  assert.equal(normalizeSection('dilr'), 'LRDI');
  assert.equal(normalizeSection('LRDI'), 'LRDI');
  assert.equal(normalizeSection('lrdi'), 'LRDI');
  assert.equal(normalizeSection('DI'), 'LRDI');
  assert.equal(normalizeSection('LR'), 'LRDI');
  assert.equal(normalizeSection('Data Interpretation'), 'LRDI');
  assert.equal(normalizeSection('Logical Reasoning'), 'LRDI');
  assert.equal(normalizeSection('Data Interpretation & Logical Reasoning'), 'LRDI');
  assert.equal(normalizeSection('Sec 2'), 'LRDI');
  assert.equal(normalizeSection('Section 2'), 'LRDI');

  // QA variants
  assert.equal(normalizeSection('QA'), 'QA');
  assert.equal(normalizeSection('qa'), 'QA');
  assert.equal(normalizeSection('Quant'), 'QA');
  assert.equal(normalizeSection('Quantitative Aptitude'), 'QA');
  assert.equal(normalizeSection('Section 3'), 'QA');

  // VARC variants
  assert.equal(normalizeSection('VARC'), 'VARC');
  assert.equal(normalizeSection('varc'), 'VARC');
  assert.equal(normalizeSection('Verbal Ability'), 'VARC');
  assert.equal(normalizeSection('Reading Comprehension'), 'VARC');
  assert.equal(normalizeSection('Section 1'), 'VARC');
});

test('parseQuestionsFromJson correctly maps DILR questions to LRDI section', () => {
  const jsonWithDilr = JSON.stringify([
    {
      id: 1,
      section: 'VARC',
      type: 'MCQ',
      questionText: 'What is the primary thesis of the author?',
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'A',
      solution: { explanation: 'Author argues...' },
    },
    {
      id: 2,
      section: 'DILR',
      type: 'MCQ',
      contextHeader: 'Directions for puzzle: 4 teams play 6 matches.',
      questionText: 'Which team scored the maximum points?',
      options: ['Team 1', 'Team 2', 'Team 3', 'Team 4'],
      correctAnswer: '2',
      solution: { explanation: 'Team 2 won all matches.' },
    },
    {
      id: 3,
      section: 'dilr',
      type: 'TITA',
      questionText: 'Find the minimum number of matches tied.',
      correctAnswer: '0',
      solution: { explanation: 'No match was tied.' },
    },
    {
      id: 4,
      section: 'Data Interpretation',
      type: 'MCQ',
      questionText: 'What is the percentage growth in sales from 2020 to 2024?',
      options: ['10%', '20%', '30%', '40%'],
      correctAnswer: '3',
      solution: { explanation: '30% growth.' },
    },
    {
      id: 5,
      section: 'QA',
      type: 'MCQ',
      questionText: 'Find x if 2^x = 32.',
      options: ['3', '4', '5', '6'],
      correctAnswer: '3',
      solution: { explanation: '2^5 = 32, so x = 5.' },
    },
  ]);

  const result = parseQuestionsFromJson(jsonWithDilr);
  assert.equal(result.success, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.questions.length, 5);

  // Crucial assertion: DILR must be classified under LRDI, NOT VARC!
  assert.equal(result.counts.VARC, 1, 'Only Q1 should be VARC');
  assert.equal(result.counts.LRDI, 3, 'Q2, Q3, and Q4 must be in LRDI');
  assert.equal(result.counts.QA, 1, 'Only Q5 should be QA');

  assert.equal(result.questions[0].section, 'VARC');
  assert.equal(result.questions[1].section, 'LRDI');
  assert.equal(result.questions[2].section, 'LRDI');
  assert.equal(result.questions[3].section, 'LRDI');
  assert.equal(result.questions[4].section, 'QA');
});

test('parseQuestionsFromJson successfully parses updated SAMPLE_JSON_TEMPLATE with all 3 sections', () => {
  const result = parseQuestionsFromJson(SAMPLE_JSON_TEMPLATE);
  assert.equal(result.success, true);
  assert.equal(result.errors.length, 0);
  assert.equal(result.questions.length, 3);
  assert.equal(result.counts.VARC, 1);
  assert.equal(result.counts.LRDI, 1);
  assert.equal(result.counts.QA, 1);
  assert.equal(result.counts.MCQ, 2);
  assert.equal(result.counts.TITA, 1);
});

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
});

test('parseQuestionsFromText handles empty and malformed inputs gracefully', () => {
  const emptyRes = parseQuestionsFromText('');
  assert.equal(emptyRes.success, false);
  assert.ok(emptyRes.errors.length > 0);

  const jsonErrorRes = parseQuestionsFromJson('{ bad json');
  assert.equal(jsonErrorRes.success, false);
  assert.ok(jsonErrorRes.errors.length > 0);
});
