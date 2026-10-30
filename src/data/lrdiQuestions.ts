import { QuestionData } from '../types/cat.ts';

const set1Context = `Four patriotism based movies – Indian Soldier (IS), I-Indian (II), True Indian (TI), and Wake Up India (WUI) – were released on the occasion of 72nd Independence Day, on 15 August 2018. The total box office collection for the first 4 days of each of the 4 movies was Rs. 61 crores and the sum of the box office collection of the 4 movies for each of the first 4 days was also Rs. 61 crores. Further, it is known that the box office collection (in Rs. crores) on each of the 4 days for each of the 4 movies was a prime number, such that for any movie the box office collection of no two days was same and for any day, the box office collections of no two movies was same.`;

const set2Context = `A survey is conducted among the people of town 'X' to establish the data regarding their choices of two drinks - Tea and Coffee, and three games - Cricket, Football and Hockey. The results of the survey reveal that:
(i) All the people, who drink neither tea nor coffee, like to play both football and hockey.
(ii) All the people, who drink both tea and coffee, like to play cricket and exactly one more game out of football and hockey.
(iii) All the people, who drink any one (but not both) of the two drinks, like to play at most one of the three games.
(iv) The total population of town 'X' is 432, out of which, 120 people like to play cricket, 108 people like to play football, 144 people like to play hockey and 168 people do not like to play any of the three games.
(v) 24 people in town 'X' do not drink any of the two drinks whereas 288 people drink tea and 192 people drink coffee.
All the following questions are pertaining to the town X and based on the information given above.`;

const set3Context = `Two friends - Amit and Sanjeev - were getting bored at home so decided to play some game. They collected 27 identical dice, where each face of dice had a distinct number written on it, out of 1, 2, 3, 4, 5, and 6. These numbers are written in such a way that the sum of numbers on every opposite faces is 7.
They arranged these dice to form a large cube of size 3 x 3 x 3. The dice in the cube are arranged in such a way that the cube, so formed, has all the properties of these dice, i.e on each face of the cube only same digit of the dice are visible and the digit is distinct for all faces of the cube. Also, the sum of the digits visible on any two opposite faces of this cube is 7, e.g. the face on which all visible digits are 1 is opposite to the face on which all visible digits are 6. 
The rules of this game will be as follows:
(I) Each of the two friends takes out a dice, one by one, from any visible face or edge or corner of the cube.
(II) When one takes out a dice, faces of its adjacent dice, which were earlier covered, will now become uncovered and number written on them will be visible.
(III) Now amount (in Rs.) equivalent to the sum of the numbers written on these recently uncovered faces will be paid by the other friend to the friend who has taken out the dice.
Example: If Amit takes out a dice from the corner, faces of three of its adjacent dice now become uncovered. The sum of the numbers on these faces is the amount (in Rs.) paid by Sanjeev to Amit.`;

const set4Context = `In E-CL limited, there are a total of 2500 employees, each belonging to one of the 5 departments - Acads, Marketing, HR, Finance and Operations. Every employee belongs to one of the two designations i.e. Manager and Executive.
The table shown below gives the information about the number of employees belonging to the various departments at the two aforementioned designations and the following pie-chart shows the percentage-wise split up of the employees, according to their work experience.

Further, it is known that:
(i) No employee, belonging to Acads, has less than 3 years of experience.
(ii) 50% of the employees having experience of more than or equals to 3 years but less than 5 years, belong to Operations.
(iii) No Executive has an experience of more than or equal to 5 years.
(iv) No Manager has an experience of less than 3 years.`;

const set5Context = `Six sprinters - A, B, C, D, E and F - participated in a running race. There were four rounds in the race - Round 1, Round 2, Round 3 and Round 4. In each round, the sprinters were given a rank from 1 to 6, based on the time taken by them to finish the race i.e. who finished a round first was given rank 1, who finished second was given rank 2, and so on till who finished 6th was given rank 6. In each round, these sprinters based on their ranks from 1 to 6 were awarded 10, 8, 6, 4, 2 and 1 points respectively.
The following table shows the partial information of the ranks attained by the top five persons, in terms of cumulative points scored in all the four rounds combined, out of these six sprinters. For each row, the last column gives the total number of points scored by the top five persons in all the rounds taken together.

The following additional information is also known:
(i) Each sprinter finished within the first three positions in exactly two of these four rounds.
(ii) No two sprinters got the same rank in any round.
(iii) No sprinter finished two or more rounds at the same position.`;

const set6Context = `A company ‘ABC’ is in the manufacturing business of gears for motor bikes. These gears after being manufactured were packed in a packet such that each packet has 100 pieces of gears. Total number of packets need not be an integer value, as the last packet may contain less than 100 pieces in it depending on the number of manufactured pieces, e.g., if company manufactures 340 pieces then number of packets will become 3.40. The cost (in ‘00 Rs.) and sales revenue (in ‘00 Rs.) of the company are given by two quadratic functions, as written below, where x represents the number of packets and 0 < x < 7. Assume that all manufactured pieces are sold. The number of pieces manufactured by the company is an integer value always.
Profit earned by the company = Total sales – Total cost.
Cost function: x² – 8x + 18
Sales revenue function: 6x – x² + 8`;

const set7Context = `A boat racing competition was held at the Hussain Sagar Lake in Hyderabad in which a total of ten boats participated. Two ends of the lake - A and B - were tagged as start and reverse respectively. The starting point of the race is end A which is also the finishing point for the race, such that every boat has to start the race from A then row to the other end B of the lake and then row back to the end A without stopping at the end B. All the ten boats started from end A at the same time.
Some of the data related to the race is also known:
(i) The distance between the two ends of the lake was 2 km.
(ii) Speeds (in kmph) of all the ten boats were different from each other but the speed of each boat remains constant throughout the race.
(iii) The distance, from the end A, at which two boats are present at the same time is called the meeting point.`;

const set8Context = `A newspaper agency conducted a survey in which a reader has to select his first three preferences of newspapers, out of the five newspapers - Rajdhani News (RN), Dainik Khabre (DK), Times of Capital (TC), Rajdhani Express (RE) and Din Raat (DR). According to a reader’s choice, 5, 3 and 2 points are awarded to the newspaper selected by him at first, second and third preference respectively. It is also known that every newspaper is selected as the first preference by the equal number of readers. The total points awarded to the five newspapers in this survey are tabulated below. Some of the cells in the following table are left blank intentionally.`;

export const lrdiQuestions: QuestionData[] = [
  // Set 1 (Questions 35-38)
  {
    id: 35,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for question 35 to 38: Answer the questions on the basis of the information given below.',
    passageText: set1Context,
    questionText: 'If on the first day of the release, the box office collection of one of the movies was more than 300% of the combined box office collection of the other 3 movies on that day, then what was the box office collection (in Rs. crores) of that movie having the highest collection, on that day?',
    correctAnswer: '47',
    solution: {
      explanation: `We find in how many ways 61 can be written as a sum of 4 distinct primes less than 61:
Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59.
Possible distinct sums of 4 primes adding to 61:
(1) 47 + 7 + 5 + 2 = 61
(2) 43 + 13 + 3 + 2 = 61
(3) 43 + 11 + 5 + 2 = 61
(4) 41 + 11 + 7 + 2 = 61
...
If highest is more than 300% of sum of other 3:
In equation (1): 47 > 300% of (7 + 5 + 2 = 14), 3 * 14 = 42 < 47.
Hence the highest collection is 47.`
    }
  },
  {
    id: 36,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for question 35 to 38: Answer the questions on the basis of the information given below.',
    passageText: set1Context,
    questionText: 'If on the 2nd day of the release of the 4 movies, the movie ‘True Indian’ had the highest box office collection among the 4 movies, then the number of possible values of the box office collection of ‘True Indian’ on that day is',
    options: [
      { id: 1, text: '13' },
      { id: 2, text: '10' },
      { id: 3, text: '7' },
      { id: 4, text: '5' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `From the 13 valid 4-prime combinations adding to 61:
The maximum value in each combination can be:
47, 43, 41, 37, 31, 29, 23.
Total distinct maximum values = 7. Thus, option 3 (7) is correct.`
    }
  },
  {
    id: 37,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for question 35 to 38: Answer the questions on the basis of the information given below.',
    passageText: set1Context,
    questionText: 'If on the 3rd day of the release, the box office collection of one of the movies is more than the combined box office collection of the other 3 movies on that day but less than the twice of the combined box office collection of the other 3 movies on that day, then what can be the box office collection of the movie with the 2nd highest box office collection on that day?',
    options: [
      { id: 1, text: 'Rs. 17 crores' },
      { id: 2, text: 'Rs. 19 crores' },
      { id: 3, text: 'Rs. 23 crores' },
      { id: 4, text: 'All of these' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Let H be the highest and S the sum of other three.
Condition: S < H < 2S.
Since H + S = 61, S < 61 - S => 2S < 61 => S <= 30, so H >= 31.
Also 61 - S < 2S => 3S > 61 => S >= 21, so H <= 40.
Looking at the 13 equations:
Eq (6): 37 + 19 + 3 + 2 (S = 24, 2nd highest = 19)
Eq (7): 37 + 17 + 5 + 2 (S = 24, 2nd highest = 17)
Eq (8): 31 + 23 + 5 + 2 (S = 30, 2nd highest = 23)
Eq (9): 31 + 17 + 11 + 2 (S = 30, 2nd highest = 17)
All 17, 19, and 23 are possible. Hence Option 4 ("All of these") is correct.`
    }
  },
  {
    id: 38,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for question 35 to 38: Answer the questions on the basis of the information given below.',
    passageText: set1Context,
    questionText: 'On the 4th day of the release of 4 movies, what can be the least possible value of the box office collection (in Rs. crores) of the movie, with the highest box office collection among the 4 movies, on that day?',
    correctAnswer: '23',
    solution: {
      explanation: `To minimize the maximum value of the 4 primes that add to 61, we look at equation (13):
23 + 19 + 17 + 2 = 61.
The maximum value in this combination is 23, which is the smallest possible maximum among all 13 combinations.
Therefore the answer is 23.`
    }
  },

  // Set 2 (Questions 39-42)
  {
    id: 39,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 39 to 42: Answer the questions on the basis of the information given below.',
    passageText: set2Context,
    diagramType: 'venn_survey',
    questionText: 'What percentage of the people who like to play Football don\'t drink any of the two drinks?',
    options: [
      { id: 1, text: '16 1/6 %' },
      { id: 2, text: '11 1/9 %' },
      { id: 3, text: '22 2/9 %' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Let w = 24 (neither drink).
From (i), all 24 who drink neither tea nor coffee like to play both Football and Hockey.
In the 3-game Venn diagram: (e + g) = w = 24.
Total who like to play football = 108.
Percentage = (24 / 108) * 100 = 2/9 * 100 = 22 2/9 %.
Thus option 3 is correct.`
    }
  },
  {
    id: 40,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 39 to 42: Answer the questions on the basis of the information given below.',
    passageText: set2Context,
    diagramType: 'venn_survey',
    questionText: 'What percentage of the people who drink tea also like to play cricket?',
    options: [
      { id: 1, text: '37 1/2 %' },
      { id: 2, text: '41 2/3 %' },
      { id: 3, text: '12 1/2 %' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `People who drink both tea and coffee (z = 72) play cricket and exactly one more game (f + d = 72).
People who drink only tea (x = 216) play at most one game. We cannot uniquely determine the exact number of only-tea drinkers who play cricket versus football versus hockey versus no games.
Hence, the percentage cannot be determined. Option 4 is correct.`
    }
  },
  {
    id: 41,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 39 to 42: Answer the questions on the basis of the information given below.',
    passageText: set2Context,
    diagramType: 'venn_survey',
    questionText: 'If the number of people who play only hockey is maximum possible, then what is the number of people who like to play Football and drink any one (but not both) of the two drinks?',
    options: [
      { id: 1, text: '48' },
      { id: 2, text: '12' },
      { id: 3, text: '36' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `From the Venn diagram relations:
c + f = 120, b + c = 132.
Maximum value of 'c' (only hockey) is 120 (since f >= 0).
When c = 120, f = 0.
Then d = 72 (since f + d = 72).
Since b + d = 84, b = 84 - 72 = 12.
People who play only Football ('b') drink any one of the two drinks.
Hence the number of people is 12. Option 2 is correct.`
    }
  },
  {
    id: 42,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 39 to 42: Answer the questions on the basis of the information given below.',
    passageText: set2Context,
    diagramType: 'venn_survey',
    questionText: 'Which of the following is necessarily false?',
    options: [
      { id: 1, text: 'The number of people who play hockey and at least one more game, cannot be equal to 144.' },
      { id: 2, text: 'The number of people who play football and at least one more game, cannot be equal to 108.' },
      { id: 3, text: 'The number of people who play hockey, drink coffee and do not drink tea, cannot be equal to 120.' },
      { id: 4, text: 'None of the above.' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `The statement in option 3 claims that the number "cannot be equal to 120".
However, from our calculations, c can indeed be 120. When c = 120, all 120 only-hockey players can be coffee drinkers (as coffee only drinkers y = 120).
Therefore, saying it CANNOT be equal to 120 is FALSE!
Hence option 3 is necessarily false.`
    }
  },

  // Set 3 (Questions 43-46)
  {
    id: 43,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 43 to 46: Answer the questions on the basis of the information given below.',
    passageText: set3Context,
    diagramType: 'cube_dice',
    questionText: 'If Amit takes out a dice, then what is the largest possible amount (in Rs.) that Sanjeev has to pay to him?',
    correctAnswer: '20',
    solution: {
      explanation: `The largest amount is achieved when a dice from the center of a face is removed.
When a center face dice is removed, 5 internal faces of adjacent dice are uncovered.
Opposite pairs sum to 7. If face 1 is on outside, its opposite inside face is 6, and the 4 surrounding sides inside have digits 2, 3, 4, 5.
Uncovered digits: 2 + 3 + 4 + 5 + 6 = 20.
Hence largest possible amount = Rs. 20.`
    }
  },
  {
    id: 44,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 43 to 46: Answer the questions on the basis of the information given below.',
    passageText: set3Context,
    diagramType: 'cube_dice',
    questionText: 'If Amit takes out a dice, then what is the smallest possible amount (in Rs.) that Sanjeev has to pay to him?',
    correctAnswer: '6',
    solution: {
      explanation: `The smallest sum is achieved when a dice from the corner meeting faces with 1, 2, and 3 is removed.
A corner dice has 3 adjacent internal dice.
The uncovered faces have digits 1, 2, and 3.
Sum = 1 + 2 + 3 = 6.
Hence the smallest possible amount is Rs. 6.`
    }
  },
  {
    id: 45,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 43 to 46: Answer the questions on the basis of the information given below.',
    passageText: set3Context,
    diagramType: 'cube_dice',
    questionText: 'If Amit takes out a dice and then Sanjeev takes out a dice in such a way that the number of faces got uncovered is different for both of them, then what is the maximum possible difference between the amounts they need to pay each other? (Assume that both play intelligently and want to earn maximum possible amount from each other).',
    correctAnswer: '2',
    solution: {
      explanation: `To maximize what each earns while having different numbers of uncovered faces:
One will choose a face center (5 faces uncovered, max amount = 20).
The other will choose an edge (4 faces uncovered, max amount = 5 + 6 + 4 + 3 = 18).
Maximum difference = 20 - 18 = 2.`
    }
  },
  {
    id: 46,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 43 to 46: Answer the questions on the basis of the information given below.',
    passageText: set3Context,
    diagramType: 'cube_dice',
    questionText: 'If Amit takes out a dice from all eight corners, then what is the total amount (in Rs.) Sanjeev should pay to Amit?',
    correctAnswer: '84',
    solution: {
      explanation: `Each of the 8 corners uncovers 3 faces.
The 8 corner combinations are triplets from {1,6}, {2,5}, {3,4}:
Sums for the 8 corners:
(4,5,6)=15, (3,5,6)=14, (2,4,6)=12, (2,3,6)=11, (1,4,5)=10, (1,3,5)=9, (1,2,4)=7, (1,2,3)=6.
Total sum = 15 + 14 + 12 + 11 + 10 + 9 + 7 + 6 = 84.
Hence, Rs. 84.`
    }
  },

  // Set 4 (Questions 47-50)
  {
    id: 47,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for question 47 to 50: Answer the questions on the basis of the information given below.',
    passageText: set4Context,
    tableData: {
      headers: ['Department', 'Managers', 'Executives'],
      rows: [
        ['Acads', 400, 100],
        ['Marketing', 300, 350],
        ['Operations', 300, 450],
        ['Finance', 150, 200],
        ['HR', 150, 100]
      ]
    },
    questionText: 'What can be the maximum value of the number of employees, who are Managers in Marketing department with experience of more than or equal to 3 years but less than 5 years, as a percentage of the total number of employees belonging to Marketing?',
    options: [
      { id: 1, text: '23.1%' },
      { id: 2, text: '46.2%' },
      { id: 3, text: '30.8%' },
      { id: 4, text: '41.4%' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `Total employees = 2500.
Experience distribution:
E < 3: 40% = 1000
3 <= E < 5: 20% = 500
5 <= E <= 8: 20% = 500
E > 8: 20% = 500
Out of 500 in (3 <= E < 5):
Acads has 100 Executives who have >= 3 yrs experience. Since No Executive has >= 5 yrs, all 100 Acads Executives are in (3 <= E < 5).
50% of the 500 belong to Operations = 250 employees.
At least 150 must be Operations Managers.
Remaining available manager slots = 500 - 200 (executives) - 150 = 150.
So maximum Marketing Managers with 3 <= E < 5 is 150.
Percentage = 150 / 650 * 100 = 23.07% ≈ 23.1%. Option 1 is correct.`
    }
  },
  {
    id: 48,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for question 47 to 50: Answer the questions on the basis of the information given below.',
    passageText: set4Context,
    questionText: 'If the number of employees belonging to Operations having experience of less than 3 years is minimum possible, then what can be the maximum number of employees belonging to Operations with experience of more than or equal to 5 years but less than or equals to 8 years?',
    correctAnswer: '150',
    solution: {
      explanation: `Employees with E < 3 is 1000 and all must be Executives.
Total Executives across all departments = 100 + 350 + 450 + 200 + 100 = 1200.
Acads has 0 with E < 3.
Maximum Executives in Operations with 3 <= E < 5 is 100, so at least 350 Operations Executives have E < 3.
At least 150 Operations Managers have 3 <= E < 5.
Out of 300 Operations Managers, at most 300 - 150 = 150 can have 5 <= E <= 8.
Hence the required maximum is 150.`
    }
  },
  {
    id: 49,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for question 47 to 50: Answer the questions on the basis of the information given below.',
    passageText: set4Context,
    questionText: 'If at least 50% of the employees in E-CL limited are women and there are no woman managers in Acads and at least 10% of the Managers in each of the remaining 4 departments are men, then what can be the maximum value of the number of men who are Executives in Marketing and Operations taken together?',
    options: [
      { id: 1, text: '800' },
      { id: 2, text: '400' },
      { id: 3, text: '760' },
      { id: 4, text: '670' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Minimum women = 50% of 2500 = 1250.
Acads has 0 female managers.
In the remaining 4 departments (total 900 managers), at most 90% can be women = 810 female managers.
Remaining women must be Executives: 1250 - 810 = 440 female executives.
Executives in Acads, Finance, HR = 100 + 200 + 100 = 400.
Even if all 400 are women, at least 440 - 400 = 40 women must be Executives in Marketing + Operations.
Total executives in Marketing + Operations = 350 + 450 = 800.
Maximum men executives = 800 - 40 = 760. Option 3 is correct.`
    }
  },
  {
    id: 50,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for question 47 to 50: Answer the questions on the basis of the information given below.',
    passageText: set4Context,
    questionText: 'If no Manager from Acads has experience of more than 5 years and no Manager from Operations has experience of more than 8 years, then what can be the maximum number of employees from Marketing are there having experience of more than or equal to 5 years and less than or equal to 8 years?',
    correctAnswer: '100',
    solution: {
      explanation: `All 400 Acads Managers must have 3 <= E < 5.
Also at least 250 Operations employees have 3 <= E < 5.
All 500 employees with 5 <= E <= 8 must be Managers (since no executive has >= 5 yrs).
Acads takes 400 in 3 <= E < 5, Operations takes 300.
Detailed analysis gives the maximum possible Marketing employees in 5 <= E <= 8 as 100.`
    }
  },

  // Set 5 (Questions 51-54)
  {
    id: 51,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 51 to 54: Answer the questions on the basis of the information given below.',
    passageText: set5Context,
    tableData: {
      headers: ['Persons', 'Round 1', 'Round 2', 'Round 3', 'Round 4', 'Total Points'],
      rows: [
        ['A', '', '1', '', '', '21'],
        ['B', '', '', '3', '', '22'],
        ['C', '', '', '', '2', '20'],
        ['D', '2', '', '', '', '19'],
        ['E', '', '', '4', '', '23']
      ]
    },
    questionText: 'Who got the rank 1 in Round 1?',
    options: [
      { id: 1, text: 'A' },
      { id: 2, text: 'B' },
      { id: 3, text: 'E' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Points for ranks 1 to 6 are 10, 8, 6, 4, 2, 1.
Two distinct valid distributions emerge:
Possibility (a): Round 1 Rank 1 is E.
Possibility (b): Round 1 Rank 1 is B.
Since both E and B are possible for Rank 1 in Round 1, it cannot be determined. Option 4 is correct.`
    }
  },
  {
    id: 52,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 51 to 54: Answer the questions on the basis of the information given below.',
    passageText: set5Context,
    questionText: 'Who was the last person to finish Round 2?',
    options: [
      { id: 1, text: 'F' },
      { id: 2, text: 'C' },
      { id: 3, text: 'E' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `In Round 2, the ranks of A, B, C, D, E are:
A = 1, E = 2, D = 3 (or 4), C = 4 (or 3), B = 5.
Ranks 1 to 5 are occupied by A, E, D, C, B.
Therefore rank 6 (the last person) in Round 2 must be F in all cases! Option 1 is correct.`
    }
  },
  {
    id: 53,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 51 to 54: Answer the questions on the basis of the information given below.',
    passageText: set5Context,
    questionText: 'What is the sum of the ranks obtained by F in all the four rounds taken together?',
    options: [
      { id: 1, text: '30' },
      { id: 2, text: '10' },
      { id: 3, text: '15' },
      { id: 4, text: '18' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Across both possibilities:
Ranks obtained by F:
Round 1: 3
Round 2: 6
Round 3: 1
Round 4: 5
Sum of ranks = 3 + 6 + 1 + 5 = 15. Option 3 is correct.`
    }
  },
  {
    id: 54,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 51 to 54: Answer the questions on the basis of the information given below.',
    passageText: set5Context,
    questionText: 'In how many rounds did B finish earlier than D finish?',
    options: [
      { id: 1, text: 'None' },
      { id: 2, text: 'One' },
      { id: 3, text: 'Two' },
      { id: 4, text: 'Three' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Comparing ranks of B vs D:
In Round 3: B was rank 3, D was rank 6 (B finished earlier).
In Round 4: B was rank 1 (or rank 4 when D was rank 3... in either case B finishes ahead of D in exactly two rounds).
In exactly 2 rounds B finished earlier than D. Option 3 is correct.`
    }
  },

  // Set 6 (Questions 55-58)
  {
    id: 55,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 55 to 58: Answer the questions on the basis of the information given below.',
    passageText: set6Context,
    diagramType: 'parabola_graph',
    questionText: 'For how many values of x the company makes a profit?',
    options: [
      { id: 1, text: '540' },
      { id: 2, text: '541' },
      { id: 3, text: '539' },
      { id: 4, text: '538' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Profit = (6x - x² + 8) - (x² - 8x + 18) = -2x² + 14x - 10.
Profit > 0 => 2x² - 14x + 10 < 0 => x² - 7x + 5 < 0.
Roots: x = (7 ± √29) / 2 ≈ (7 ± 5.385) / 2 => 0.807 < x < 6.192.
Since 1 packet = 100 pieces and pieces manufactured is an integer,
Pieces range: 80.7 to 619.2 => integer values from 81 to 619.
Count = 619 - 81 + 1 = 539 values. Option 3 is correct.`
    }
  },
  {
    id: 56,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 55 to 58: Answer the questions on the basis of the information given below.',
    passageText: set6Context,
    diagramType: 'parabola_graph',
    questionText: 'If the company manufactured more than or equal to 400 pieces but less than 700 pieces, then how many pieces should it manufacture for the maximum profit?',
    options: [
      { id: 1, text: '400' },
      { id: 2, text: '619' },
      { id: 3, text: '620' },
      { id: 4, text: '699' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `Profit function P(x) = -2x² + 14x - 10 has vertex at x = 14/4 = 3.5 (350 pieces).
For x >= 3.5, the parabola is strictly decreasing.
Thus on the interval [4.00, 7.00), the maximum occurs at the smallest x, which is x = 4.00 (400 pieces). Option 1 is correct.`
    }
  },
  {
    id: 57,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 55 to 58: Answer the questions on the basis of the information given below.',
    passageText: set6Context,
    diagramType: 'parabola_graph',
    questionText: 'The maximum profit (in Rs.) the company can earn is',
    options: [
      { id: 1, text: '350' },
      { id: 2, text: '1000' },
      { id: 3, text: '1400' },
      { id: 4, text: '1450' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Maximum occurs at x = 3.5 (350 pieces).
P(3.5) = -2(3.5)² + 14(3.5) - 10 = -2(12.25) + 49 - 10 = -24.5 + 39 = 14.5 in '00 Rs.
Profit in Rs = 14.5 * 100 = Rs. 1450. Option 4 is correct.`
    }
  },
  {
    id: 58,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 55 to 58: Answer the questions on the basis of the information given below.',
    passageText: set6Context,
    diagramType: 'parabola_graph',
    questionText: 'The profit earned by the company by manufacturing 280 pieces is same as that by manufacturing ‘A’ pieces. What is the value of ‘A’?',
    options: [
      { id: 1, text: '480' },
      { id: 2, text: '420' },
      { id: 3, text: '320' },
      { id: 4, text: 'None of these' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `The parabola is symmetric around vertex x = 3.5 (350 pieces).
Distance from 3.5 to 2.8 is 0.7.
By symmetry, x = 3.5 + 0.7 = 4.2 (420 pieces).
Hence A = 420 pieces. Option 2 is correct.`
    }
  },

  // Set 7 (Questions 59-62)
  {
    id: 59,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 59 to 62: Answer the questions on the basis of the information given below.',
    passageText: set7Context,
    questionText: 'Find the number of meetings, for all the boats taken together, at the meeting points during the race.',
    options: [
      { id: 1, text: '10' },
      { id: 2, text: '25' },
      { id: 3, text: '45' },
      { id: 4, text: '55' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Every pair of boats will meet exactly once while one is returning from B and the other is moving towards B.
Total pairs out of 10 boats = 10C2 = (10 * 9) / 2 = 45 meetings. Option 3 is correct.`
    }
  },
  {
    id: 60,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 59 to 62: Answer the questions on the basis of the information given below.',
    passageText: set7Context,
    questionText: 'Find the minimum possible number of meeting points in the lake.',
    options: [
      { id: 1, text: '45' },
      { id: 2, text: '22' },
      { id: 3, text: '17' },
      { id: 4, text: '9' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `The fastest boat meets all other 9 boats at 9 distinct points.
If the speed ratios between consecutive boats are kept constant (geometric progression), the meeting points of all subsequent boat pairs will coincide with these same 9 points.
Hence, the minimum possible number of meeting points is 9. Option 4 is correct.`
    }
  },
  {
    id: 61,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 59 to 62: Answer the questions on the basis of the information given below.',
    passageText: set7Context,
    questionText: 'If the meeting points in the lake were minimum possible and the speed of the fastest and the second fastest boats were 10 kmph and 8 kmph respectively, then find the speed of the boat having 4th highest speed.',
    options: [
      { id: 1, text: '6.4 kmph' },
      { id: 2, text: '6 kmph' },
      { id: 3, text: '5.12 kmph' },
      { id: 4, text: '4 kmph' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Ratio of consecutive speeds = 8 / 10 = 4 / 5 = 0.8.
Fastest (1st): 10 kmph
2nd: 8 kmph
3rd: 8 * 0.8 = 6.4 kmph
4th: 6.4 * 0.8 = 5.12 kmph. Option 3 is correct.`
    }
  },
  {
    id: 62,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 59 to 62: Answer the questions on the basis of the information given below.',
    passageText: set7Context,
    questionText: 'Suppose the meeting points of the boat having highest speed with the boats having 2nd highest speed, 3rd highest speed, 4th highest speed,...., lowest speed, are numbered as 1st, 2nd, 3rd,..., 9th respectively. If the meeting points in the lake were minimum possible, then at which meeting point there will be exactly 5 meetings?',
    options: [
      { id: 1, text: '5th' },
      { id: 2, text: '4th' },
      { id: 3, text: '2nd' },
      { id: 4, text: '1st' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `Number of meetings at point k:
At the 1st meeting point: 9 meetings
At the 2nd meeting point: 8 meetings
At the 3rd meeting point: 7 meetings
At the 4th meeting point: 6 meetings
At the 5th meeting point: 5 meetings.
Hence, the 5th meeting point has exactly 5 meetings. Option 1 is correct.`
    }
  },

  // Set 8 (Questions 63-66)
  {
    id: 63,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 63 to 66: Answer the questions on the basis of the information given below.',
    passageText: set8Context,
    tableData: {
      headers: ['Name of the Newspaper', 'Total Points'],
      rows: [
        ['Rajdhani News (RN)', 150],
        ['Dainik Khabre (DK)', '-'],
        ['Times of Capital (TC)', 128],
        ['Rajdhani Express (RE)', 142],
        ['Din Raat (DR)', '-']
      ]
    },
    questionText: 'If the total points awarded, out of the five newspapers, is not maximum for RN, then find the minimum number of readers covered in the survey.',
    options: [
      { id: 1, text: '80' },
      { id: 2, text: '75' },
      { id: 3, text: '65' },
      { id: 4, text: '56' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Each reader awards 5 + 3 + 2 = 10 points.
Total points must be a multiple of 10.
Sum of given papers: 150 + 128 + 142 = 420.
Let x readers choose each paper as 1st preference; total readers = 5x.
Total points awarded = 50x.
Points for DK + DR = 50x - 420.
For minimum readers, DR gets only 1st preference points = 5x.
Then DK = 45x - 420. Since DK > 150 (as RN is not maximum), 45x - 420 > 150 => 45x > 570 => x >= 13.
For x = 13: total readers = 5 * 13 = 65.
DK = 45(13) - 420 = 165 > 150.
Hence minimum readers = 65. Option 3 is correct.`
    }
  },
  {
    id: 64,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 63 to 66: Answer the questions on the basis of the information given below.',
    passageText: set8Context,
    questionText: 'If Dainik Khabre is the newspaper with the maximum total points and the readers covered in the survey is minimum possible, then the total points awarded to Din Raat cannot be more than',
    options: [
      { id: 1, text: '55' },
      { id: 2, text: '59' },
      { id: 3, text: '69' },
      { id: 4, text: '79' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `When readers are minimum, x = 13, total readers = 65.
Sum of DK + DR = 50(13) - 420 = 650 - 420 = 230 points.
Since DK has maximum points and RN has 150, DK must be at least 151.
Therefore DR cannot exceed 230 - 151 = 79 points. Option 4 is correct.`
    }
  },
  {
    id: 65,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 63 to 66: Answer the questions on the basis of the information given below.',
    passageText: set8Context,
    questionText: 'If Rajdhani News is the paper with maximum points, then find the range of the people who covered in the survey.',
    options: [
      { id: 1, text: 'From 60 to 70' },
      { id: 2, text: 'From 55 to 70' },
      { id: 3, text: 'From 54 to 71' },
      { id: 4, text: 'From 53 to 65' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `If RN (150) has maximum points:
Both DK <= 149 and DR <= 149, so y = DK + DR < 300.
Also y > 10x (since each gets 5x for 1st preference).
50x = 420 + y => y = 50x - 420.
Since y is between 130 and 280, 50x ranges between 550 and 700.
Total readers = 50x / 10 = 55 to 70.
Range is 55 – 70. Option 2 is correct.`
    }
  },
  {
    id: 66,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Direction for questions 63 to 66: Answer the questions on the basis of the information given below.',
    passageText: set8Context,
    questionText: 'If Times of Capital is the newspaper with minimum points, then find the minimum readers covered in the survey.',
    options: [
      { id: 1, text: '72' },
      { id: 2, text: '70' },
      { id: 3, text: '65' },
      { id: 4, text: '54' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `TC has 128 points. If TC is minimum, both DK >= 129 and DR >= 129.
Thus y = DK + DR >= 258.
Since y = 50x - 420 must be a multiple of 10, y >= 280 (for x to be an integer, 420 + 280 = 700 => x = 14).
Total readers = 5x = 5 * 14 = 70. Option 2 is correct.`
    }
  }
];
