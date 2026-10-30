import { QuestionData } from '../types/cat.ts';

const varcPassage1 = `For decades, artificial intelligence was viewed primarily through the lens of computational efficiency—a quest to optimize algorithmic searches, recognize patterns across massive datasets, and automate routine administrative or analytical tasks. However, the emergence of generative models capable of persuasive prose, synthetic imagery, and fluent dialogue has provoked a fundamental epistemic shift. We are no longer merely debating whether a machine can simulate human cognitive competence; we are confronted with the deeper question of how human epistemic authority and institutional trust are transformed when synthetic content is indistinguishable from authentic human expression.

Philosopher C. Thi Nguyen warns against the cognitive danger of "epistemic bubbles" and "echo chambers," but generative systems introduce an even more insidious phenomenon: epistemic exhaustion. When the marginal cost of creating plausible-sounding arguments, counterfeit evidentiary documents, and pseudo-scientific justifications drops to zero, the information ecosystem is inundated with synthetic noise. In response, rational actors do not necessarily adopt false beliefs; rather, they develop a generalized skepticism toward all information. This nihilistic epistemic weariness erodes the shared informational commons essential for democratic deliberation, peer-reviewed science, and judicial credibility.

Furthermore, traditional frameworks of intellectual property and authorial intent collapse in the face of latent-space synthesis. When a machine produces a nuanced philosophical essay by aggregating probabilistic associations across billions of tokens written by uncredited humans, where does agency reside? The technology industry frequently promotes the paradigm of "copilot" or "collaborative augment," implying that human judgment remains securely at the helm. Yet observational studies of decision-makers relying on algorithmic advisory systems reveal systemic automation bias—an uncritical deference to automated recommendations, particularly under temporal duress. Consequently, the transition from computer-as-tool to computer-as-arbiter occurs not through an overt transfer of sovereignty, but through an incremental surrender of cognitive friction.`;

const varcPassage2 = `Mainstream macroeconomic orthodoxy long treated financial markets as self-correcting mechanisms governed by the Efficient Market Hypothesis (EMH). Under EMH, asset prices reflect all available information, and deviations from intrinsic value are promptly extinguished by rational arbitrageurs. However, the recurring spectacles of speculative asset bubbles, systemic bank runs, and violent flash crashes have continually discredited this mechanical equilibrium model.

In contrast, Hyman Minsky's Financial Instability Hypothesis posits that capitalism is inherently prone to endogenous financial crises. Minsky's seminal insight was encapsulated in his dictum: "Stability breeds instability." During prolonged periods of tranquil economic growth, firms and financial institutions experience expanding cash flows and diminished default rates. This sustained optimism induces market participants to progressively downgrade their perception of risk. Conservative "hedge financing"—where anticipated cash flows suffice to pay both principal and interest—gradually gives way to "speculative financing," where cash flows cover only interest obligations, necessitating constant debt rollover.

Ultimately, market euphoric excess culminates in "Ponzi financing," where debt service depends entirely on continuous asset price inflation. When an inevitable macroeconomic shock arrives—such as a marginal interest rate hike or a sudden liquidity squeeze—Ponzi borrowers are forced to liquidate assets, triggering fire sales, sharp price collapses, and cascading credit defaults. Minsky demonstrated that stability is not an equilibrium condition but an incubator for financial vulnerability, proving that free-market financial systems cannot achieve lasting tranquility without counter-cyclical regulatory interventions.`;

export const mock2VarcQuestions: QuestionData[] = [
  {
    id: 1,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (1 to 4): Read the passage and answer the questions.',
    passageText: varcPassage1,
    questionText:
      'According to the author in Passage 1, what is the primary danger posed by generative systems to the public informational ecosystem?',
    options: [
      { id: 1, text: 'The immediate widespread adoption of radical pseudoscientific beliefs by the majority' },
      { id: 2, text: 'A generalized epistemic exhaustion that causes rational actors to distrust all information' },
      { id: 3, text: 'The complete cessation of human literary and artistic creative output' },
      { id: 4, text: 'An explicit and formal political transfer of judicial sovereignty to machine intelligence' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'Paragraph 2 explicitly discusses "epistemic exhaustion": rational actors develop a generalized skepticism toward all information, eroding the shared informational commons.',
    },
  },
  {
    id: 2,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (1 to 4): Read the passage and answer the questions.',
    passageText: varcPassage1,
    questionText:
      'Which of the following phrases from the text best describes the mechanism through which humans surrender cognitive agency to automated systems?',
    options: [
      { id: 1, text: 'Sudden overt political revolution' },
      { id: 2, text: 'Deterministic algorithmic search optimization' },
      { id: 3, text: 'Incremental surrender of cognitive friction due to automation bias' },
      { id: 4, text: 'Rigorous adherence to peer-reviewed scientific norms' },
    ],
    correctAnswer: '3',
    solution: {
      explanation:
        'The final sentence states that the transition occurs through "an incremental surrender of cognitive friction" driven by automation bias.',
    },
  },
  {
    id: 3,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (1 to 4): Read the passage and answer the questions.',
    passageText: varcPassage1,
    questionText:
      'The author mentions "uncredited humans" in paragraph 3 primarily in order to:',
    options: [
      { id: 1, text: 'Highlight how modern generative systems obscure human intellectual agency and ownership' },
      { id: 2, text: 'Advocate for a total ban on web scraping for computational models' },
      { id: 3, text: 'Demonstrate that AI models are superior to individual human writers' },
      { id: 4, text: 'Show that copyright laws have successfully adapted to neural networks' },
    ],
    correctAnswer: '1',
    solution: {
      explanation:
        'Paragraph 3 asks "where does agency reside?" when machines synthesize uncredited human writings, showing how generative models obscure attribution and intellectual agency.',
    },
  },
  {
    id: 4,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (1 to 4): Read the passage and answer the questions.',
    passageText: varcPassage1,
    questionText:
      'Which of the following scenarios is the most direct real-world manifestation of "automation bias" as described in the passage?',
    options: [
      { id: 1, text: 'A student double-checking a calculator output using manual pen-and-paper arithmetic' },
      { id: 2, text: 'A medical doctor unquestioningly approving an automated diagnostic report due to time constraints' },
      { id: 3, text: 'A computer programmer debugging machine learning code line by line' },
      { id: 4, text: 'A consumer discarding automated email recommendations in favor of personal friends advice' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'The passage defines automation bias as "an uncritical deference to automated recommendations, particularly under temporal duress", matching option 2.',
    },
  },
  {
    id: 5,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (5 to 8): Read the passage and answer the questions.',
    passageText: varcPassage2,
    questionText:
      'According to Hyman Minsky’s Financial Instability Hypothesis, what is the core catalyst for increasing market fragility?',
    options: [
      { id: 1, text: 'Persistent economic instability that causes immediate institutional panic' },
      { id: 2, text: 'Prolonged economic stability that fosters overconfidence and progressive debt degradation' },
      { id: 3, text: 'Severe governmental price controls that stifle arbitrageur activity' },
      { id: 4, text: 'Strict adherence to conservative hedge financing across all corporations' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'Minsky’s central thesis "Stability breeds instability" explains that prolonged tranquil growth induces participants to lower their risk perception and take on speculative debt.',
    },
  },
  {
    id: 6,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (5 to 8): Read the passage and answer the questions.',
    passageText: varcPassage2,
    questionText:
      'How does the passage distinguish "Ponzi financing" from "speculative financing"?',
    options: [
      { id: 1, text: 'Ponzi borrowers cover principal while speculative borrowers only cover interest' },
      { id: 2, text: 'Speculative cash flows cover interest obligations, whereas Ponzi cash flows depend solely on asset appreciation' },
      { id: 3, text: 'Ponzi financing is completely risk-free while speculative financing is illegal' },
      { id: 4, text: 'Speculative financing requires continuous fire sales to maintain solvency' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'The passage states that in speculative financing, cash flows cover interest obligations; whereas in Ponzi financing, debt service depends entirely on continuous asset price inflation.',
    },
  },
  {
    id: 7,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions (5 to 8): Read the passage and answer the questions.',
    passageText: varcPassage2,
    questionText:
      'What is the fundamental disagreement between the Efficient Market Hypothesis (EMH) and Minsky’s model?',
    options: [
      { id: 1, text: 'EMH views markets as self-correcting equilibria, whereas Minsky demonstrates endogenous instability' },
      { id: 2, text: 'EMH rejects rational arbitrage while Minsky relies exclusively on it' },
      { id: 3, text: 'EMH argues that interest rates should never be regulated' },
      { id: 4, text: 'Minsky denies the existence of credit and bank loans in modern economies' },
    ],
    correctAnswer: '1',
    solution: {
      explanation:
        'EMH posits markets as self-correcting mechanisms returning to equilibrium, whereas Minsky shows that stability itself inherently generates destabilizing endogenous debt dynamics.',
    },
  },
  {
    id: 8,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Verbal Ability: Sentence Elimination / Odd One Out',
    questionText:
      'Five sentences are given below. Four of them can be rearranged to form a coherent paragraph. Identify the sentence that does NOT fit into the logical theme.\n\n1. Language is not merely a vehicle for expressing independent thought; it constructs our cognitive horizons.\n2. The grammatical structures we inherit systematically guide our attention toward specific aspects of empirical reality.\n3. In indigenous languages of Australia, spatial orientation is expressed exclusively through cardinal directions rather than egocentric coordinates.\n4. Modern neural network language models are trained on massive scrapes of digital text from the internet.\n5. As a result, speakers of such languages maintain an exceptional, subconscious awareness of their geographic orientation at all times.',
    options: [
      { id: 1, text: 'Sentence 1' },
      { id: 2, text: 'Sentence 3' },
      { id: 3, text: 'Sentence 4' },
      { id: 4, text: 'Sentence 5' },
    ],
    correctAnswer: '3',
    solution: {
      explanation:
        'Sentences 1, 2, 3, and 5 discuss linguistic relativity (the Sapir-Whorf hypothesis) and how language shapes spatial cognition. Sentence 4 abruptly discusses training modern AI neural network models, which is completely out of place.',
    },
  },
  {
    id: 9,
    section: 'VARC',
    type: 'TITA',
    contextHeader: 'Verbal Ability: Para Jumble',
    questionText:
      'The four sentences (labelled 1, 2, 3, 4) given below, when properly sequenced, form a coherent paragraph. Decide on the proper sequence of the numbers and key in the 4-digit sequence as your answer.\n\n1. This biological clock synchronizes metabolic rhythms, gene transcription, and hormone pulses with the solar cycle.\n2. In virtually every multicellular organism, an ancient circadian pacemaking network governs daily physiology.\n3. When artificial nocturnal illumination disrupts this molecular chronometer, systemic metabolic disorders frequently emerge.\n4. At its core, the circadian mechanism relies on self-regulating transcriptional-translational feedback loops of clock proteins.',
    correctAnswer: '2413',
    solution: {
      explanation:
        'Sentence 2 introduces the circadian pacemaking network in multicellular organisms. Sentence 4 explains what it relies on at its core (clock proteins). Sentence 1 explains what this biological clock synchronizes. Sentence 3 concludes with the negative consequence when artificial light disrupts it. Logical flow: 2-4-1-3.',
    },
  },
];

export const mock2LrdiQuestions: QuestionData[] = [
  {
    id: 10,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader:
      'Directions for questions (10 to 13): Five software architects—Aarav, Brijesh, Chitra, Dev, and Esha—work on five microservices: Auth, Billing, Catalog, Database, and Search. Each architect leads exactly one service.\n1. Neither Aarav nor Brijesh leads Auth or Search.\n2. Chitra leads either Billing or Catalog.\n3. The architect leading Auth sits directly adjacent to Esha.\n4. Dev leads Search.\n5. Brijesh does not lead Database.',
    questionText: 'Which microservice does Aarav lead?',
    options: [
      { id: 1, text: 'Auth' },
      { id: 2, text: 'Database' },
      { id: 3, text: 'Catalog' },
      { id: 4, text: 'Search' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'From condition 4: Dev = Search.\nFrom condition 1: Aarav and Brijesh can only lead Billing, Catalog, or Database.\nFrom condition 5: Brijesh does not lead Database. Hence, Aarav must lead Database.',
    },
  },
  {
    id: 11,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader:
      'Directions for questions (10 to 13): Five software architects—Aarav, Brijesh, Chitra, Dev, and Esha—work on five microservices: Auth, Billing, Catalog, Database, and Search. Each architect leads exactly one service.\n1. Neither Aarav nor Brijesh leads Auth or Search.\n2. Chitra leads either Billing or Catalog.\n3. The architect leading Auth sits directly adjacent to Esha.\n4. Dev leads Search.\n5. Brijesh does not lead Database.',
    questionText: 'Who leads the Auth microservice?',
    options: [
      { id: 1, text: 'Aarav' },
      { id: 2, text: 'Brijesh' },
      { id: 3, text: 'Chitra' },
      { id: 4, text: 'Esha' },
    ],
    correctAnswer: '4',
    solution: {
      explanation:
        'Dev leads Search. Aarav leads Database. Neither Aarav nor Brijesh leads Auth. Chitra leads Billing or Catalog. Thus, only Esha remains to lead Auth.',
    },
  },
  {
    id: 12,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader:
      'Directions for questions (10 to 13): Five software architects—Aarav, Brijesh, Chitra, Dev, and Esha—work on five microservices: Auth, Billing, Catalog, Database, and Search. Each architect leads exactly one service.\n1. Neither Aarav nor Brijesh leads Auth or Search.\n2. Chitra leads either Billing or Catalog.\n3. The architect leading Auth sits directly adjacent to Esha.\n4. Dev leads Search.\n5. Brijesh does not lead Database.',
    questionText: 'If Chitra leads Billing, which service does Brijesh lead?',
    options: [
      { id: 1, text: 'Catalog' },
      { id: 2, text: 'Database' },
      { id: 3, text: 'Auth' },
      { id: 4, text: 'Search' },
    ],
    correctAnswer: '1',
    solution: {
      explanation:
        'If Chitra leads Billing, and Aarav leads Database, Dev leads Search, and Esha leads Auth, the remaining service is Catalog, which Brijesh must lead.',
    },
  },
  {
    id: 13,
    section: 'LRDI',
    type: 'TITA',
    contextHeader:
      'Directions for questions (10 to 13): Set completion.',
    questionText:
      'How many possible assignment configurations of the five architects to the five microservices are mathematically valid under all given rules?',
    correctAnswer: '2',
    solution: {
      explanation:
        'Dev is fixed to Search, Aarav to Database, Esha to Auth. Chitra and Brijesh share {Billing, Catalog}. Chitra can be Billing (Brijesh Catalog) or Chitra Catalog (Brijesh Billing). That yields exactly 2 valid configurations.',
    },
  },
  {
    id: 14,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader:
      'Data Interpretation: A survey of 120 MBA candidates recorded proficiency across three tools: Python, SQL, and Tableau.\n- 65 candidates know Python\n- 60 know SQL\n- 50 know Tableau\n- 25 know both Python and SQL\n- 20 know both SQL and Tableau\n- 22 know both Python and Tableau\n- 10 candidates know all three tools',
    questionText: 'How many candidates know exactly two of these three tools?',
    options: [
      { id: 1, text: '37' },
      { id: 2, text: '42' },
      { id: 3, text: '47' },
      { id: 4, text: '57' },
    ],
    correctAnswer: '1',
    solution: {
      explanation:
        'Number knowing exactly two = (Only Python & SQL) + (Only SQL & Tableau) + (Only Python & Tableau)\n= (25 - 10) + (20 - 10) + (22 - 10) = 15 + 10 + 12 = 37.',
    },
  },
  {
    id: 15,
    section: 'LRDI',
    type: 'TITA',
    contextHeader:
      'Data Interpretation: Survey of 120 MBA candidates.',
    questionText:
      'How many candidates in the survey know NONE of the three tools (Python, SQL, or Tableau)?',
    correctAnswer: '12',
    solution: {
      explanation:
        'Total with at least one tool: n(P ∪ S ∪ T) = n(P) + n(S) + n(T) - n(P∩S) - n(S∩T) - n(P∩T) + n(P∩S∩T)\n= 65 + 60 + 50 - 25 - 20 - 22 + 10 = 175 - 67 + 10 = 108.\nCandidates knowing none = 120 - 108 = 12.',
    },
  },
];

export const mock2QaQuestions: QuestionData[] = [
  {
    id: 16,
    section: 'QA',
    type: 'MCQ',
    questionText:
      'A shopkeeper marks an article 40% above its cost price and allows a discount of 20% on the marked price. If he makes a profit of ₹180, what was the cost price of the article?',
    options: [
      { id: 1, text: '₹1200' },
      { id: 2, text: '₹1500' },
      { id: 3, text: '₹1600' },
      { id: 4, text: '₹1800' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'Let Cost Price = 100x.\nMarked Price = 140x.\nSelling Price after 20% discount = 140x * 0.8 = 112x.\nProfit = 112x - 100x = 12x = 180.\nHence x = 15, so Cost Price = 100x = ₹1500.',
    },
  },
  {
    id: 17,
    section: 'QA',
    type: 'MCQ',
    questionText:
      'Two runners, Rohan and Soham, run a 1000m race on a circular track of circumference 200m in the same direction. Rohan runs at 10 m/s and Soham at 6 m/s. After how many seconds from the start will they meet for the first time?',
    options: [
      { id: 1, text: '25 seconds' },
      { id: 2, text: '40 seconds' },
      { id: 3, text: '50 seconds' },
      { id: 4, text: '100 seconds' },
    ],
    correctAnswer: '3',
    solution: {
      explanation:
        'On a circular track, the time for the faster runner to lap the slower runner for the first time is Track Length / Relative Speed.\nRelative speed in same direction = 10 - 6 = 4 m/s.\nTime to meet = 200 / 4 = 50 seconds.',
    },
  },
  {
    id: 18,
    section: 'QA',
    type: 'MCQ',
    questionText:
      'Find the number of integral solutions to the equation: |x - 3| + |x + 5| ≤ 12.',
    options: [
      { id: 1, text: '11' },
      { id: 2, text: '12' },
      { id: 3, text: '13' },
      { id: 4, text: '14' },
    ],
    correctAnswer: '3',
    solution: {
      explanation:
        'The distance between -5 and 3 is 8.\nFor x between -5 and 3, |x-3| + |x+5| = 8 ≤ 12 (all 9 integers: -5, -4, -3, -2, -1, 0, 1, 2, 3).\nFor x > 3: (x-3) + (x+5) = 2x + 2 ≤ 12 => 2x ≤ 10 => x ≤ 5 (integers 4, 5).\nFor x < -5: -(x-3) - (x+5) = -2x - 2 ≤ 12 => -2x ≤ 14 => x ≥ -7 (integers -7, -6).\nTotal integers = 2 + 9 + 2 = 13 integers (from -7 to 5 inclusive: 5 - (-7) + 1 = 13).',
    },
  },
  {
    id: 19,
    section: 'QA',
    type: 'MCQ',
    questionText:
      'If log_3(x) + log_9(x) + log_27(x) = 11, find the value of x.',
    options: [
      { id: 1, text: '81' },
      { id: 2, text: '243' },
      { id: 3, text: '729' },
      { id: 4, text: '2187' },
    ],
    correctAnswer: '3',
    solution: {
      explanation:
        'Convert to base 3:\nlog_3(x) + (1/2)log_3(x) + (1/3)log_3(x) = 11\n[1 + 1/2 + 1/3] log_3(x) = (11/6) log_3(x) = 11\nlog_3(x) = 6\nx = 3^6 = 729.',
    },
  },
  {
    id: 20,
    section: 'QA',
    type: 'TITA',
    questionText:
      'A vessel contains 80 liters of pure milk. 20 liters of milk is taken out and replaced with water. This process of replacing 20 liters of the mixture with water is repeated one more time. How many liters of milk remain in the vessel?',
    correctAnswer: '45',
    solution: {
      explanation:
        'Final quantity of milk = Initial * (1 - Replacement / Capacity)^n\n= 80 * (1 - 20/80)^2 = 80 * (3/4)^2 = 80 * (9/16) = 5 * 9 = 45 liters.',
    },
  },
  {
    id: 21,
    section: 'QA',
    type: 'TITA',
    questionText:
      'In a right-angled triangle ABC right angled at B, AB = 15 cm and BC = 20 cm. Find the radius of the incircle (inradius in cm).',
    correctAnswer: '5',
    solution: {
      explanation:
        'Hypotenuse AC = √(15^2 + 20^2) = √(225 + 400) = √625 = 25 cm.\nFor a right-angled triangle, inradius r = (a + b - c) / 2 = (15 + 20 - 25) / 2 = 10 / 2 = 5 cm.',
    },
  },
  {
    id: 22,
    section: 'QA',
    type: 'MCQ',
    questionText:
      'How many four-digit numbers can be formed using digits 0, 1, 2, 3, 4, 5 without repetition such that the number is divisible by 5?',
    options: [
      { id: 1, text: '96' },
      { id: 2, text: '108' },
      { id: 3, text: '120' },
      { id: 4, text: '144' },
    ],
    correctAnswer: '2',
    solution: {
      explanation:
        'A number is divisible by 5 if its last digit is 0 or 5.\nCase 1: Ends with 0. The remaining 3 positions can be filled from {1,2,3,4,5} in 5 × 4 × 3 = 60 ways.\nCase 2: Ends with 5. The thousands digit cannot be 0, so choices for thousands place are {1,2,3,4} (4 choices). For hundreds, any of remaining 4 digits (4 choices), and tens (3 choices). Total = 4 × 4 × 3 = 48 ways.\nTotal four-digit numbers = 60 + 48 = 108.',
    },
  },
];

export const MOCK_2_QUESTIONS: QuestionData[] = [
  ...mock2VarcQuestions,
  ...mock2LrdiQuestions,
  ...mock2QaQuestions,
];
