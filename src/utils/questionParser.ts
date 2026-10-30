import { QuestionData, QuestionOption, QuestionType, SectionId } from '../types/cat.ts';

export interface ParseResult {
  success: boolean;
  questions: QuestionData[];
  errors: string[];
  warnings: string[];
  counts: {
    total: number;
    VARC: number;
    LRDI: number;
    QA: number;
    MCQ: number;
    TITA: number;
  };
}

/**
 * Standard text template that users can copy and fill in.
 */
export const SAMPLE_TEXT_TEMPLATE = `Section: VARC
Passage:
Philosophy and science have long shared an intertwined history. Early natural philosophers sought to explain the physical world through deduction and metaphysical speculation. With the advent of the scientific method, empirical observation and mathematical rigor displaced purely philosophical assertions about cosmological mechanics. Nevertheless, the philosophy of science continues to play a vital normative role, questioning epistemic foundations, theory appraisal, and the ethical dimensions of technology.

Q1. Which of the following best expresses the primary role of philosophy of science today according to the passage?
A. Supplanting empirical science with metaphysical deduction
B. Scrutinizing epistemic foundations, theory appraisal, and ethical concerns
C. Formulating new mathematical equations for cosmological mechanics
D. Defending pre-scientific philosophical assumptions against empirical data
Ans: B
Solution: The author explicitly concludes that philosophy of science plays a vital normative role in questioning epistemic foundations, theory appraisal, and ethics.

Q2. What can be inferred about early natural philosophers?
A. They utilized modern statistical rigor in their experiments
B. Their hypotheses were largely rejected by later societies
C. They relied heavily on deductive logic and metaphysical speculation rather than empirical methods
D. They separated ethical inquiries entirely from cosmology
Ans: C
Solution: The second sentence states that early natural philosophers sought to explain the physical world through deduction and metaphysical speculation before empirical methods developed.

Section: LRDI
Directions: Four project managers (Anita, Bob, Carol, David) lead four distinct projects (P1, P2, P3, P4) across four quarters (Q1, Q2, Q3, Q4). No two managers handle the same project in any quarter.
1. Anita leads P1 in Q1 and P2 in Q3.
2. Bob never leads P1.
3. Carol leads P3 in Q2.
4. David leads P4 in Q1.

Q3. Who leads project P1 in quarter Q2?
A. Bob
B. Carol
C. David
D. Anita
Ans: C
Solution: Since Anita is leading P4 in Q2 and Bob cannot lead P1, deductive elimination reveals David must manage P1 in quarter Q2.

Q4. [TITA] How many managers handle project P3 across the four quarters?
Ans: 4
Solution: Since each manager takes a distinct project every quarter without duplicate assignment, exactly 4 distinct managers handle P3 across 4 quarters.

Section: QA
Q5. If log_2(x) + log_4(x) + log_16(x) = 21/4, find the value of x.
A. 4
B. 8
C. 16
D. 32
Ans: B
Solution: Convert all to base 2: log_2(x) + (1/2)log_2(x) + (1/4)log_2(x) = (7/4)log_2(x) = 21/4. Therefore log_2(x) = 3, so x = 2^3 = 8.

Q6. [TITA] A train running at 72 km/h crosses a 250m long platform in 25 seconds. What is the length of the train in meters?
Ans: 250
Solution: Speed = 72 * (5/18) = 20 m/s. Total distance in 25s = 20 * 25 = 500m. Length of train = 500 - 250 = 250m.
`;

/**
 * Standard JSON template
 */
export const SAMPLE_JSON_TEMPLATE = JSON.stringify(
  [
    {
      id: 1,
      section: 'VARC',
      type: 'MCQ',
      passageText:
        'Philosophy and science have long shared an intertwined history. Early natural philosophers sought to explain the physical world through deduction...',
      questionText:
        "Which of the following best expresses the primary role of philosophy of science today according to the passage?",
      options: [
        { id: 1, text: 'Supplanting empirical science with metaphysical deduction' },
        { id: 2, text: 'Scrutinizing epistemic foundations, theory appraisal, and ethical concerns' },
        { id: 3, text: 'Formulating new mathematical equations for cosmological mechanics' },
        { id: 4, text: 'Defending pre-scientific philosophical assumptions' },
      ],
      correctAnswer: '2',
      solution: {
        explanation:
          'The author explicitly concludes that philosophy of science plays a vital normative role in questioning epistemic foundations, theory appraisal, and ethics.',
      },
    },
    {
      id: 2,
      section: 'QA',
      type: 'TITA',
      questionText:
        'A train running at 72 km/h crosses a 250m long platform in 25 seconds. What is the length of the train in meters?',
      correctAnswer: '250',
      solution: {
        explanation:
          'Speed = 72 * (5/18) = 20 m/s. Total distance covered = 20 * 25 = 500m. Train length = 500 - 250 = 250m.',
      },
    },
  ],
  null,
  2
);

/**
 * Parses user input in JSON format
 */
export function parseQuestionsFromJson(rawJson: string): ParseResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const questions: QuestionData[] = [];

  let data: any;
  try {
    data = JSON.parse(rawJson);
  } catch (err: any) {
    return {
      success: false,
      questions: [],
      errors: [`Invalid JSON: ${err.message || String(err)}`],
      warnings: [],
      counts: { total: 0, VARC: 0, LRDI: 0, QA: 0, MCQ: 0, TITA: 0 },
    };
  }

  // Handle case where data is wrapped in an object { questions: [...] }
  const rawList = Array.isArray(data)
    ? data
    : Array.isArray(data?.questions)
    ? data.questions
    : null;

  if (!rawList) {
    return {
      success: false,
      questions: [],
      errors: ['JSON must be an array of question objects, or an object with a "questions" array.'],
      warnings: [],
      counts: { total: 0, VARC: 0, LRDI: 0, QA: 0, MCQ: 0, TITA: 0 },
    };
  }

  rawList.forEach((item: any, index: number) => {
    const qNum = index + 1;
    const section: SectionId = ['VARC', 'LRDI', 'QA'].includes(String(item.section).toUpperCase())
      ? (String(item.section).toUpperCase() as SectionId)
      : 'VARC';

    if (!item.section) {
      warnings.push(`Q${qNum}: No section specified, defaulted to VARC.`);
    }

    const type: QuestionType = String(item.type).toUpperCase() === 'TITA' ? 'TITA' : 'MCQ';

    if (!item.questionText || typeof item.questionText !== 'string' || item.questionText.trim() === '') {
      errors.push(`Q${qNum}: Missing or empty questionText.`);
      return;
    }

    if (!item.correctAnswer && item.correctAnswer !== 0) {
      errors.push(`Q${qNum}: Missing correctAnswer.`);
      return;
    }

    let options: QuestionOption[] | undefined = undefined;
    if (type === 'MCQ') {
      if (Array.isArray(item.options) && item.options.length >= 2) {
        options = item.options.map((opt: any, optIdx: number) => {
          if (typeof opt === 'string') {
            return { id: optIdx + 1, text: opt };
          }
          return { id: opt.id || optIdx + 1, text: String(opt.text || opt.title || '') };
        });
      } else {
        warnings.push(`Q${qNum}: MCQ question has fewer than 2 options.`);
      }
    }

    // Normalize correct answer
    let normalizedAnswer = String(item.correctAnswer).trim();
    if (type === 'MCQ' && options && options.length > 0) {
      const charMap: Record<string, string> = { A: '1', B: '2', C: '3', D: '4', E: '5', a: '1', b: '2', c: '3', d: '4', e: '5' };
      if (charMap[normalizedAnswer]) {
        normalizedAnswer = charMap[normalizedAnswer];
      }
    }

    const explanation =
      item.solution?.explanation ||
      (typeof item.solution === 'string' ? item.solution : '') ||
      'No explanation provided.';

    questions.push({
      id: qNum,
      section,
      type,
      title: item.title,
      contextHeader: item.contextHeader,
      passageText: item.passageText,
      tableData: item.tableData,
      diagramType: item.diagramType,
      questionText: item.questionText.trim(),
      options,
      correctAnswer: normalizedAnswer,
      solution: {
        correctAnswerText: item.solution?.correctAnswerText,
        genre: item.solution?.genre,
        wordCount: item.solution?.wordCount,
        explanation: explanation.trim(),
        optionElimination: item.solution?.optionElimination,
      },
    });
  });

  const counts = computeCounts(questions);

  return {
    success: errors.length === 0 && questions.length > 0,
    questions,
    errors,
    warnings,
    counts,
  };
}

/**
 * Parses user input in plain text / markdown format
 */
export function parseQuestionsFromText(rawText: string): ParseResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const questions: QuestionData[] = [];

  if (!rawText || rawText.trim() === '') {
    return {
      success: false,
      questions: [],
      errors: ['Input text is empty. Please paste your questions and answers.'],
      warnings: [],
      counts: { total: 0, VARC: 0, LRDI: 0, QA: 0, MCQ: 0, TITA: 0 },
    };
  }

  // Pre-process lines
  const lines = rawText.split(/\r?\n/);
  let currentSection: SectionId = 'VARC';
  let currentPassage = '';
  let currentContextHeader = '';

  // Accumulator for questions
  interface RawQuestionBlock {
    section: SectionId;
    passage?: string;
    contextHeader?: string;
    rawLines: string[];
  }

  const blocks: RawQuestionBlock[] = [];
  let currentBlock: RawQuestionBlock | null = null;
  let inPassage = false;
  let passageBuffer: string[] = [];

  // Regex helpers
  const sectionRegex = /^(?:Section|SECTION)\s*[:\-]\s*(VARC|LRDI|DILR|QA|QUANT|VERBAL|READING)/i;
  const passageStartRegex = /^(?:Passage|Reading Comprehension|Caselet|Directions|DIRECTIONS)\s*[:\-]?\s*(.*)$/i;
  // A question line starts with Q1, Q.1, Question 1, or a number followed by dot/paren (e.g. 1. or 1) )
  const explicitQuestionRegex = /^(?:Q(?:uestion)?\s*[\.\:\#]?\s*\d+)(?:[\.\:\)]|\s|$)/i;
  const numberedQuestionRegex = /^\d+[\.\)]\s+[A-Z\[]/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Check section header
    const secMatch = trimmed.match(sectionRegex);
    if (secMatch) {
      const secKey = secMatch[1].toUpperCase();
      if (secKey.includes('VARC') || secKey.includes('VERBAL') || secKey.includes('READING')) {
        currentSection = 'VARC';
      } else if (secKey.includes('LRDI') || secKey.includes('DILR')) {
        currentSection = 'LRDI';
      } else if (secKey.includes('QA') || secKey.includes('QUANT')) {
        currentSection = 'QA';
      }
      currentPassage = '';
      currentContextHeader = '';
      inPassage = false;
      continue;
    }

    // Check passage / directions header
    const passMatch = trimmed.match(passageStartRegex);
    if (passMatch) {
      if (inPassage && passageBuffer.length > 0) {
        currentPassage = passageBuffer.join('\n').trim();
        passageBuffer = [];
      }
      inPassage = true;
      if (passMatch[1] && passMatch[1].trim()) {
        currentContextHeader = passMatch[0];
        passageBuffer.push(passMatch[1].trim());
      } else {
        currentContextHeader = trimmed;
      }
      continue;
    }

    // If we're inside a passage, only an EXPLICIT "Q1", "Question 1" or end of passage ends it
    // This ensures numbered premises in LRDI (e.g. "1. Anita leads...") stay inside directions!
    const isExplicitQ = explicitQuestionRegex.test(trimmed);
    const isNumberedQ = !inPassage && numberedQuestionRegex.test(trimmed);

    if (isExplicitQ || isNumberedQ) {
      if (inPassage) {
        currentPassage = passageBuffer.join('\n').trim();
        inPassage = false;
        passageBuffer = [];
      }

      if (currentBlock && currentBlock.rawLines.length > 0) {
        blocks.push(currentBlock);
      }

      currentBlock = {
        section: currentSection,
        passage: currentPassage || undefined,
        contextHeader: currentContextHeader || undefined,
        rawLines: [trimmed],
      };
      continue;
    }

    if (inPassage) {
      passageBuffer.push(line);
      continue;
    }

    if (currentBlock) {
      currentBlock.rawLines.push(line);
    }
  }

  // Push final block
  if (currentBlock && currentBlock.rawLines.length > 0) {
    blocks.push(currentBlock);
  }

  if (blocks.length === 0) {
    return {
      success: false,
      questions: [],
      errors: [
        'Could not detect any questions. Please prefix questions with "Q1.", "Q2." or "1.", "2."',
      ],
      warnings: [],
      counts: { total: 0, VARC: 0, LRDI: 0, QA: 0, MCQ: 0, TITA: 0 },
    };
  }

  // Parse each block into QuestionData
  blocks.forEach((block, idx) => {
    const qNum = idx + 1;
    const blockText = block.rawLines.join('\n');
    const lines = block.rawLines.map((l) => l.trim()).filter(Boolean);

    let isTita = false;
    let questionText = '';
    const options: QuestionOption[] = [];
    let correctAnswer = '';
    let explanation = '';

    // Check for [TITA] tag
    if (/\[TITA\]/i.test(blockText) || /\bType:\s*TITA\b/i.test(blockText)) {
      isTita = true;
    }

    let parsingState: 'QUESTION' | 'OPTIONS' | 'ANSWER' | 'SOLUTION' = 'QUESTION';
    const questionLines: string[] = [];
    const solutionLines: string[] = [];

    const optionRegex = /^(\d+|[A-Ea-e])[\.\)\:\-]\s*(.+)$/;
    const answerRegex = /^(?:Ans(?:wer)?|Correct\s*Answer|Correct)\s*[\:\-]\s*(.+)$/i;
    const solutionRegex = /^(?:Sol(?:ution)?|Explanation|Explain)\s*[\:\-]\s*(.*)$/i;

    for (const line of lines) {
      // Check Answer line
      const ansMatch = line.match(answerRegex);
      if (ansMatch) {
        correctAnswer = ansMatch[1].trim();
        parsingState = 'ANSWER';
        continue;
      }

      // Check Solution line
      const solMatch = line.match(solutionRegex);
      if (solMatch) {
        if (solMatch[1] && solMatch[1].trim()) {
          solutionLines.push(solMatch[1].trim());
        }
        parsingState = 'SOLUTION';
        continue;
      }

      if (parsingState === 'SOLUTION') {
        solutionLines.push(line);
        continue;
      }

      // Check Option line
      const optMatch = line.match(optionRegex);
      if (optMatch && !isTita && (parsingState === 'QUESTION' || parsingState === 'OPTIONS')) {
        parsingState = 'OPTIONS';
        const label = optMatch[1];
        const text = optMatch[2].trim();
        options.push({
          id: options.length + 1,
          text,
        });
        continue;
      }

      if (parsingState === 'QUESTION') {
        // Strip question prefix like "Q1." or "1." from first line
        if (questionLines.length === 0) {
          const stripped = line
            .replace(/^(?:Q(?:uestion)?\s*[\.\:\#]?\s*\d+[\.\:\)]?|^\d+[\.\)])\s*/i, '')
            .replace(/\[TITA\]/i, '')
            .trim();
          questionLines.push(stripped);
        } else {
          questionLines.push(line);
        }
      }
    }

    questionText = questionLines.join(' ').trim();
    explanation = solutionLines.join(' ').trim() || 'Refer to CAT solution concept.';

    if (!questionText) {
      errors.push(`Q${qNum}: Empty question text.`);
      return;
    }

    // Determine MCQ vs TITA
    let qType: QuestionType = isTita || options.length === 0 ? 'TITA' : 'MCQ';

    // Normalize Answer
    if (qType === 'MCQ') {
      const charMap: Record<string, string> = { A: '1', B: '2', C: '3', D: '4', E: '5', a: '1', b: '2', c: '3', d: '4', e: '5' };
      if (charMap[correctAnswer]) {
        correctAnswer = charMap[correctAnswer];
      }
      // If answer is option text, match it
      if (options.length > 0 && !['1', '2', '3', '4', '5'].includes(correctAnswer)) {
        const matched = options.find((o) => o.text.toLowerCase() === correctAnswer.toLowerCase());
        if (matched) {
          correctAnswer = String(matched.id);
        }
      }
    }

    if (!correctAnswer) {
      warnings.push(`Q${qNum}: No answer specified, defaulted to ${qType === 'MCQ' ? '1' : '0'}.`);
      correctAnswer = qType === 'MCQ' ? '1' : '0';
    }

    questions.push({
      id: qNum,
      section: block.section,
      type: qType,
      passageText: block.passage,
      contextHeader: block.contextHeader,
      questionText,
      options: qType === 'MCQ' ? options : undefined,
      correctAnswer,
      solution: {
        explanation,
      },
    });
  });

  const counts = computeCounts(questions);

  return {
    success: errors.length === 0 && questions.length > 0,
    questions,
    errors,
    warnings,
    counts,
  };
}

function computeCounts(questions: QuestionData[]) {
  const counts = {
    total: questions.length,
    VARC: 0,
    LRDI: 0,
    QA: 0,
    MCQ: 0,
    TITA: 0,
  };

  questions.forEach((q) => {
    if (q.section === 'VARC') counts.VARC++;
    else if (q.section === 'LRDI') counts.LRDI++;
    else if (q.section === 'QA') counts.QA++;

    if (q.type === 'TITA') counts.TITA++;
    else counts.MCQ++;
  });

  return counts;
}
