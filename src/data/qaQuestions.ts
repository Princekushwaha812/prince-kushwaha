import { QuestionData } from '../types/cat.ts';

export const qaQuestions: QuestionData[] = [
  {
    id: 67,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The equations for four lines are given as: x + 2y – 3 = 0, 3x + 4y – 7 = 0, 2x + 3y – 4 = 0 and 4x + 5y – 6 = 0. What can be said about these four lines?',
    options: [
      { id: 1, text: 'Concurrent' },
      { id: 2, text: 'Are sides of a parallelogram' },
      { id: 3, text: 'Are sides of a square' },
      { id: 4, text: 'None of these' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Step 1: Point of intersection of x + 2y - 3 = 0 and 2x + 3y - 4 = 0:
Solving: x = -1, y = 2.
Step 2: Check on 4x + 5y - 6 = 0: 4(-1) + 5(2) - 6 = 0 (Lies on this line).
Step 3: Check on 3x + 4y - 7 = 0: 3(-1) + 4(2) - 7 = -2 ≠ 0.
Since all 4 lines do not pass through the same point, they are NOT concurrent.
Since three lines pass through (-1, 2), they cannot form a quadrilateral (parallelogram or square).
Hence, Option 4 ('None of these') is correct.`
    }
  },
  {
    id: 68,
    section: 'QA',
    type: 'TITA',
    questionText: 'Kashish invested two equal amounts at 7.5% and 7% rate of simple interest. If the difference between the interests earned on these two investments after 8 years is Rs. 400, then find the total amount (in Rs) invested by Kashish.',
    correctAnswer: '20000',
    solution: {
      explanation: `Let the amount in each investment be x.
Total amount invested = 2x.
Difference in interest = (x * 7.5 * 8)/100 - (x * 7 * 8)/100 = 400
=> (x * 8 * 0.5)/100 = 400
=> 4x / 100 = 400 => x = 10,000.
Total amount invested = 2x = Rs. 20,000.`
    }
  },
  {
    id: 69,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If a and b are the roots of the quadratic equation: x² - 3x + 9 = 0, then find the quadratic equation having its roots as a² and b².',
    options: [
      { id: 1, text: 'x² + 18x – 81 = 0' },
      { id: 2, text: 'x² + 9x + 81 = 0' },
      { id: 3, text: 'x² – 9x + 81 = 0' },
      { id: 4, text: 'Cannot be determined' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `For x² - 3x + 9 = 0:
Sum of roots: a + b = 3
Product of roots: ab = 9
Sum of new roots: a² + b² = (a + b)² - 2ab = 3² - 2(9) = 9 - 18 = -9.
Product of new roots: a²b² = (ab)² = 9² = 81.
The quadratic equation is: x² - (sum)x + product = 0
=> x² - (-9)x + 81 = 0 => x² + 9x + 81 = 0. Option 2 is correct.`
    }
  },
  {
    id: 70,
    section: 'QA',
    type: 'MCQ',
    diagramType: 'circle_geom',
    questionText: 'Triangle PTQ and triangle TRS, as shown in the figure, are isosceles with PQ and RS as their bases. Also, ∠PTQ + ∠RVS = 180°, ∠PTQ = 2∠RVS, ∠UQW = 75°. If WQ is a tangent to the circle at point Q, then find ∠UQP.',
    options: [
      { id: 1, text: '15°' },
      { id: 2, text: '45°' },
      { id: 3, text: '50°' },
      { id: 4, text: '60°' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `∠PTQ + ∠RVS = 180° and ∠PTQ = 2∠RVS => 3∠RVS = 180° => ∠RVS = 60°, ∠PTQ = 120°.
In isosceles ΔPTQ with base PQ: ∠QPT = ∠PQT = (180 - 120)/2 = 30°.
By alternate segment theorem, ∠UQW = 75° = ∠UPQ.
In cyclic quadrilateral UPTQ: ∠UPT + ∠UQT = 180°
Also ∠UPQ = 75° = ∠QPT + ∠UQP = 30° + ∠UQP => ∠UQP = 75° - 30° = 45°. Option 2 is correct.`
    }
  },
  {
    id: 71,
    section: 'QA',
    type: 'MCQ',
    questionText: 'A rope, 10 feet 2 inches long, has to be cut down into 20 pieces in such a way that some pieces are 9 inches long and others are 4 inches long. If 2 inches is allowed for sawing waste and remaining is used completely, then how many pieces of the respective lengths were cut?',
    options: [
      { id: 1, text: '9, 11' },
      { id: 2, text: '8, 12' },
      { id: 3, text: '15, 5' },
      { id: 4, text: '10, 10' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `Total length = 10 feet 2 inches = 10 * 12 + 2 = 122 inches.
Subtracting 2 inches sawing waste gives 120 inches.
Let x = number of 9-inch pieces and y = number of 4-inch pieces.
x + y = 20
9x + 4y = 120
Subtract 4(x + y = 20): 5x = 40 => x = 8.
y = 20 - 8 = 12.
Pieces of respective lengths: 8 and 12. Option 2 is correct.`
    }
  },
  {
    id: 72,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Simplify the following expression: [ (x^(2^(n-1)) + y^(2^(n-1))) (x^(2^(n-1)) - y^(2^(n-1))) ] / [ x^(2^n) - y^(2^n) ]',
    options: [
      { id: 1, text: '1' },
      { id: 2, text: 'x^n + y^n' },
      { id: 3, text: 'x^(2n) – y^(2n)' },
      { id: 4, text: 'x^(2n) + y^(2n)' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `Numerator is in form (A + B)(A - B) = A² - B².
Here A = x^(2^(n-1)), so A² = (x^(2^(n-1)))² = x^(2^(n-1) * 2) = x^(2^n).
Similarly B² = y^(2^n).
Thus Numerator = x^(2^n) - y^(2^n).
Denominator = x^(2^n) - y^(2^n).
Numerator / Denominator = 1. Option 1 is correct.`
    }
  },
  {
    id: 73,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Deepti said to Bhavya, “When 10 times the month number of my birth added to 12 times the date of my birth, the result comes out to be 388”. On which of the following days could Deepti be celebrating her birthday?',
    options: [
      { id: 1, text: '29th March' },
      { id: 2, text: '31st April' },
      { id: 3, text: '29th September' },
      { id: 4, text: '24th October' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Let m = month (1 to 12) and d = date (1 to 31).
10m + 12d = 388 => 5m + 6d = 194.
Mod 5: 6d ≡ 194 (mod 5) => d ≡ 4 (mod 5).
Possible d values: 4, 9, 14, 19, 24, 29.
If d = 29: 5m = 194 - 6(29) = 194 - 174 = 20 => m = 4 (April 29th, not among options; option 2 has 31st April which doesn't exist).
If d = 24: 5m = 194 - 6(24) = 194 - 144 = 50 => m = 10 (October 24th).
Hence 24th October is valid. Option 4 is correct.`
    }
  },
  {
    id: 74,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If (x + 2)² = 9 and (y + 3)² = 25, then the maximum value of x/y is',
    options: [
      { id: 1, text: '5/8' },
      { id: 2, text: '1/2' },
      { id: 3, text: '5/2' },
      { id: 4, text: '2/1' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `(x + 2)² = 9 => x + 2 = ±3 => x = 1 or -5.
(y + 3)² = 25 => y + 3 = ±5 => y = 2 or -8.
Possible ratios x/y:
1/2 = 0.5
1/(-8) = -0.125
(-5)/2 = -2.5
(-5)/(-8) = 5/8 = 0.625.
Maximum value is 5/8. Option 1 is correct.`
    }
  },
  {
    id: 75,
    section: 'QA',
    type: 'TITA',
    questionText: 'Two merchants - A and B - each sell an article for Rs.1000. If merchant A computes his profit on cost price while merchant B computes his profit on selling price, then both ended up on making an individual profit of 25%. By how much rupees is the profit made by merchant B greater than that of merchant A?',
    correctAnswer: '50',
    solution: {
      explanation: `Selling price for both = Rs. 1000.
Merchant B computes profit on SP: Profit_B = 25% of 1000 = Rs. 250.
Merchant A computes profit on CP: SP = 1.25 * CP_A = 1000 => CP_A = 800.
Profit_A = 1000 - 800 = Rs. 200.
Difference = Profit_B - Profit_A = 250 - 200 = Rs. 50.`
    }
  },
  {
    id: 76,
    section: 'QA',
    type: 'MCQ',
    diagramType: 'hexagon_geom',
    questionText: 'ABCDEF is a regular hexagon. Find the ratio of the area of the triangle formed by joining the midpoints of the sides of the triangle ACE to that of the hexagon ABCDEF.',
    options: [
      { id: 1, text: '1 : 2' },
      { id: 2, text: '1 : 4' },
      { id: 3, text: '1 : 8' },
      { id: 4, text: '2 : 3' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Let side of regular hexagon be a.
Area of hexagon ABCDEF = 6 * (√3 / 4) * a² = (3√3 / 2) a².
Triangle ACE is an equilateral triangle with side AC = √3 a.
Area(ΔACE) = (√3 / 4) * (√3 a)² = (3√3 / 4) a² (which is half the hexagon).
The medial triangle PQR formed by joining midpoints of ΔACE has area = 1/4 * Area(ΔACE) = 1/4 * (1/2 * Area of Hexagon) = 1/8 * Area of Hexagon.
Ratio = 1 : 8. Option 3 is correct.`
    }
  },
  {
    id: 77,
    section: 'QA',
    type: 'MCQ',
    diagramType: 'concentric_circles',
    questionText: 'All the four circles, shown in the figure, are congruent having radius 6 cm and every two adjacent circles pass through the centre of another circle. What is the perimeter of the red curve in the given figure?',
    options: [
      { id: 1, text: '16π' },
      { id: 2, text: '18π' },
      { id: 3, text: '20π' },
      { id: 4, text: '24π' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Each of the 4 outer arcs subtends an angle of:
360° - 90° - 60° - 60° = 150°.
Total perimeter of 4 arcs = 4 * (150° / 360°) * 2πr
= 4 * (5 / 12) * 2π(6) = (5 / 3) * 12π = 20π. Option 3 is correct.`
    }
  },
  {
    id: 78,
    section: 'QA',
    type: 'TITA',
    questionText: 'A student was asked to find the 3/7th of a number but he instead multiplied it by 7/3. As a result, he got an answer which was more than the correct answer by 1680. What was the number?',
    correctAnswer: '882',
    solution: {
      explanation: `Let the number be x.
(7/3)x - (3/7)x = 1680
=> [(49 - 9)/21] x = 1680
=> (40 / 21) x = 1680
=> x = 1680 * 21 / 40 = 42 * 21 = 882.`
    }
  },
  {
    id: 79,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Anil spent 16.67% of his income on rent, 25% of the remaining on food, 60% of then remaining on education. If he is still able to save Rs. 4500 per month, then find his monthly income (in Rs.).',
    options: [
      { id: 1, text: '16000' },
      { id: 2, text: '17000' },
      { id: 3, text: '18000' },
      { id: 4, text: '19000' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Let income be x.
16.67% = 1/6. Remaining = 5/6 x.
Spends 25% on food => remaining = (3/4) * (5/6 x).
Spends 60% on education => remaining = (40/100) * (3/4) * (5/6 x) = 4500.
(2/5) * (3/4) * (5/6) * x = 4500
=> (1/4) * x = 4500 => x = 18,000. Option 3 is correct.`
    }
  },
  {
    id: 80,
    section: 'QA',
    type: 'MCQ',
    questionText: 'A and B invested in a business in the ratio 3 : 2. If 5% of the total profit earned in the business goes to charity and A’s share of profit is Rs 855, then the total profit (in Rs.) earned is',
    options: [
      { id: 1, text: '1425' },
      { id: 2, text: '1500' },
      { id: 3, text: '1537.5' },
      { id: 4, text: '1576' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `Let total profit be P.
After 5% charity, remaining distributable profit = 0.95 P.
A's share is 3 / (3 + 2) = 3/5 of 0.95 P = 0.57 P.
0.57 P = 855 => P = 855 / 0.57 = 1500. Option 2 is correct.`
    }
  },
  {
    id: 81,
    section: 'QA',
    type: 'TITA',
    questionText: 'Find the sum of all possible solutions of the equation (x² + 5x + 5)^(x² - 10x + 21) = 1.',
    correctAnswer: '2',
    solution: {
      explanation: `For A^B = 1:
Case 1: B = 0 and A ≠ 0:
x² - 10x + 21 = 0 => (x - 3)(x - 7) = 0 => x = 3, 7.
Both make base ≠ 0.
Case 2: A = 1:
x² + 5x + 5 = 1 => x² + 5x + 4 = 0 => (x + 1)(x + 4) = 0 => x = -1, -4.
Case 3: A = -1 and B is even:
x² + 5x + 5 = -1 => x² + 5x + 6 = 0 => x = -2, -3.
Check parity of B = x² - 10x + 21:
For x = -2: B = 4 + 20 + 21 = 45 (odd, rejected).
For x = -3: B = 9 + 30 + 21 = 60 (even, accepted!).
Valid solutions: 3, 7, -1, -4, -3.
Sum = 3 + 7 - 1 - 4 - 3 = 2.`
    }
  },
  {
    id: 82,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If 6 fair coins are tossed, then what is the probability that there will be more heads than tails?',
    options: [
      { id: 1, text: '1/2' },
      { id: 2, text: '31/64' },
      { id: 3, text: '1/3' },
      { id: 4, text: '11/32' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Total outcomes = 2⁶ = 64.
More heads than tails means 4, 5, or 6 heads.
Number of ways:
6 heads: 6C6 = 1
5 heads: 6C5 = 6
4 heads: 6C4 = 15
Total favorable = 1 + 6 + 15 = 22.
Probability = 22 / 64 = 11 / 32. Option 4 is correct.`
    }
  },
  {
    id: 83,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Abhay, a CAT aspirant, decided to work on his calculations. So he started multiplying 4 consecutive Natural numbers and noting them down on a paper. Which of the following numbers could not be the number written by Abhay?',
    options: [
      { id: 1, text: '360' },
      { id: 2, text: '5040' },
      { id: 3, text: '5047' },
      { id: 4, text: '7920' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `The product of any 4 consecutive integers contains at least two even numbers (one divisible by 2 and one by 4), hence it is always a multiple of 24, and in particular must be even.
5047 is an odd number, so it cannot be the product of 4 consecutive natural numbers. Option 3 is correct.`
    }
  },
  {
    id: 84,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If m, n and p are in an Arithmetic Progression (AP), then m-th, n-th, and p-th terms of that AP are in',
    options: [
      { id: 1, text: 'AP' },
      { id: 2, text: 'GP' },
      { id: 3, text: 'HP' },
      { id: 4, text: 'None of these' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `Let the AP have first term a and common difference d.
m-th term T_m = a + (m - 1)d
n-th term T_n = a + (n - 1)d
p-th term T_p = a + (p - 1)d
T_n - T_m = (n - m)d
T_p - T_n = (p - n)d
Since m, n, p are in AP, (n - m) = (p - n).
Therefore T_n - T_m = T_p - T_n, which means T_m, T_n, T_p are also in AP! Option 1 is correct.`
    }
  },
  {
    id: 85,
    section: 'QA',
    type: 'TITA',
    questionText: 'On a particular day, a salesman sold 3 types of toys. Each toy of the 3 varieties sells at Rs. 100, Rs. 50 and Rs. 25 respectively. If the total sales on that day was of Rs. 300 and that salesman sold at least one toy of each variety, then find the maximum number of toys he could have sold on that day.',
    correctAnswer: '8',
    solution: {
      explanation: `Let x, y, z be the number of toys of Rs 100, 50, 25.
100x + 50y + 25z = 300 => 4x + 2y + z = 12.
Given x >= 1, y >= 1, z >= 1.
To maximize total toys (x + y + z), we minimize x and y:
Let x = 1, y = 1:
4(1) + 2(1) + z = 12 => 6 + z = 12 => z = 6.
Maximum number of toys = 1 + 1 + 6 = 8.`
    }
  },
  {
    id: 86,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Three different alloys, of copper and iron, have the two elements in the ratio 3 : 5, 3 : 7 and 12 : 5 respectively. If 8 kg of the first alloy and 30 kg of the second alloy are taken, then how much quantity (in kg) of the third alloy should be taken so that the ratio of copper and iron in the final mixture is 1 : 1?',
    options: [
      { id: 1, text: '51' },
      { id: 2, text: '34' },
      { id: 3, text: '68' },
      { id: 4, text: '85' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `First alloy: 8 kg, ratio 3:5 => Copper = 3 kg, Iron = 5 kg.
Second alloy: 30 kg, ratio 3:7 => Copper = 9 kg, Iron = 21 kg.
Combined from first two: Copper = 12 kg, Iron = 26 kg.
Third alloy ratio is 12:5. Let quantity taken be 17a kg.
Copper added = 12a kg, Iron added = 5a kg.
For 1:1 final ratio:
12 + 12a = 26 + 5a => 7a = 14 => a = 2.
Quantity of third alloy = 17a = 17 * 2 = 34 kg. Option 2 is correct.`
    }
  },
  {
    id: 87,
    section: 'QA',
    type: 'TITA',
    questionText: 'The average age of husband, wife and their child 3 years ago from now was 27 years and that of wife and child 5 years ago from now was 20 years. The age (in years) of the husband 5 years ago from now was',
    correctAnswer: '35',
    solution: {
      explanation: `Let current ages be h, w, c.
3 years ago: (h - 3) + (w - 3) + (c - 3) = 3 * 27 = 81
=> h + w + c - 9 = 81 => h + w + c = 90.
5 years ago: (w - 5) + (c - 5) = 2 * 20 = 40
=> w + c - 10 = 40 => w + c = 50.
Current age of husband h = 90 - 50 = 40 years.
Husband's age 5 years ago = 40 - 5 = 35 years.`
    }
  },
  {
    id: 88,
    section: 'QA',
    type: 'MCQ',
    questionText: 'How many 9-digit numbers can be formed using the digits 6 and 7 only, so that the number so formed is multiple of 12?',
    options: [
      { id: 1, text: '43' },
      { id: 2, text: '35' },
      { id: 3, text: '42' },
      { id: 4, text: '29' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `A number is divisible by 12 if it is divisible by 4 and 3.
Divisibility by 4: last 2 digits formed by 6 and 7 must be divisible by 4:
Possibilities for last 2 digits: 66 (no), 67 (no), 76 (yes, 76/4 = 19), 77 (no).
So last two digits MUST end in 76.
Remaining 7 digits can be chosen from {6, 7}.
Divisibility by 3: sum of digits must be divisible by 3.
Digit 6 ≡ 0 (mod 3), digit 7 ≡ 1 (mod 3).
Fixed last 2 digits: 7 + 6 = 13 ≡ 1 (mod 3).
For total sum to be divisible by 3, the sum of remaining 7 digits must ≡ 2 (mod 3).
Let k be the number of 7s in the remaining 7 positions.
k ≡ 2 (mod 3). Since 0 <= k <= 7, possible values of k are 2 or 5.
Number of ways = 7C2 + 7C5 = 21 + 21 = 42 numbers. Option 3 is correct.`
    }
  },
  {
    id: 89,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If h(x) = k^x, where k is any real number, then which of the following is/are true?\n1. h(x + 2) – 2h(x + 1) + h(x) = (k – 1)² h(x)\n2. h(x + 1) h(x – 1) = (h(x))²\n3. h(x) h(–x) = 1',
    options: [
      { id: 1, text: 'Only 1 and 2' },
      { id: 2, text: 'Only 2 and 3' },
      { id: 3, text: 'Only 1 and 3' },
      { id: 4, text: 'All of these' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Given h(x) = k^x:
(1) h(x+2) - 2h(x+1) + h(x) = k^(x+2) - 2k^(x+1) + k^x = k^x(k² - 2k + 1) = (k - 1)² h(x) -> TRUE.
(2) h(x+1) * h(x-1) = k^(x+1) * k^(x-1) = k^(2x) = (k^x)² = (h(x))² -> TRUE.
(3) h(x) * h(-x) = k^x * k^(-x) = k^0 = 1 -> TRUE.
Hence All of these are true. Option 4 is correct.`
    }
  },
  {
    id: 90,
    section: 'QA',
    type: 'TITA',
    questionText: 'In an acute-angled triangle, thirteen times an angle is equal to 17 times another. The angles (in degrees) of the triangle are all integers. If the third angle is less than or equal to 30°, then the difference between the first two angles (in degrees) is',
    correctAnswer: '20',
    solution: {
      explanation: `Let angles be A, B, C.
13A = 17B => A = 17k, B = 13k for some integer k.
Since triangle is acute, all angles < 90°.
Also C = 180° - 30k <= 30° => 30k >= 150° => k >= 5.
For k = 5:
A = 17 * 5 = 85° (< 90°, acute)
B = 13 * 5 = 65° (< 90°, acute)
C = 180° - (85 + 65) = 30° (<= 30°, valid!)
Difference between first two angles = A - B = 85° - 65° = 20°.`
    }
  },
  {
    id: 91,
    section: 'QA',
    type: 'TITA',
    questionText: 'If M = 40! and N = 43, then find the remainder when M is divided by N.',
    correctAnswer: '21',
    solution: {
      explanation: `Since 43 is prime, by Wilson's Theorem:
42! ≡ -1 ≡ 42 (mod 43).
42! = 40! * 41 * 42.
Note that 41 ≡ -2 (mod 43) and 42 ≡ -1 (mod 43).
So 40! * (-2) * (-1) ≡ -1 (mod 43)
=> 2 * 40! ≡ -1 ≡ 42 (mod 43).
Dividing both sides by 2 (since gcd(2, 43) = 1):
40! ≡ 21 (mod 43).
Hence remainder is 21.`
    }
  },
  {
    id: 92,
    section: 'QA',
    type: 'MCQ',
    questionText: 'A circular track is marked with numbers from 1 to 15 so as to divide the track into 15 equal parts. Two runners started simultaneously from the point marked as 1 and run in opposite directions. After running for several hours, they noticed that they cross each other only at these 15 marked points and also that they crossed each other at each of these 15 points at least once. Which of the following is a possible value of the ratio of the speeds of the faster runner to the speed of the slower runner?',
    options: [
      { id: 1, text: '2.75' },
      { id: 2, text: '2' },
      { id: 3, text: '1.5' },
      { id: 4, text: 'All are possible' }
    ],
    correctAnswer: '1',
    solution: {
      explanation: `For two runners in opposite directions with speed ratio in lowest terms p/q:
Total distinct meeting points = p + q.
We are given that they meet at exactly 15 distinct points.
So p + q = 15, with gcd(p, q) = 1.
Testing options:
(1) 2.75 = 11 / 4 => p = 11, q = 4. Here p + q = 15 and gcd(11, 4) = 1! (Matches!).
(2) 2 = 2 / 1 => p + q = 3 meeting points.
(3) 1.5 = 3 / 2 => p + q = 5 meeting points.
Hence only 2.75 is possible. Option 1 is correct.`
    }
  },
  {
    id: 93,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Find the complete range of values of x for which (x² – x + 1)^x < 1.',
    options: [
      { id: 1, text: '(-∞, 0)' },
      { id: 2, text: '(0, 1)' },
      { id: 3, text: '(-∞, 0) ∪ (0, 1)' },
      { id: 4, text: '(0, 1) ∪ (1, ∞)' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Taking log: x * ln(x² - x + 1) < 0.
Case (i): x < 0 and ln(x² - x + 1) > 0 => x² - x + 1 > 1 => x(x - 1) > 0.
Since x < 0, x - 1 < 0, so x(x - 1) > 0 holds for all x < 0. Range: (-∞, 0).
Case (ii): x > 0 and ln(x² - x + 1) < 0 => x² - x + 1 < 1 => x(x - 1) < 0 => 0 < x < 1. Range: (0, 1).
Combining both cases gives (-∞, 0) ∪ (0, 1). Option 3 is correct.`
    }
  },
  {
    id: 94,
    section: 'QA',
    type: 'MCQ',
    questionText: 'P and Q can complete a task either by P working for 6 days and then Q working for 8 days or by P working for 3 days and then Q working for 16 days. In how many days can P and Q together complete twice the amount of task?',
    options: [
      { id: 1, text: '14' },
      { id: 2, text: '8 1/3' },
      { id: 3, text: '6 5/11' },
      { id: 4, text: '13 1/11' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `Let daily work of P and Q be p and q.
Total work W = 6p + 8q = 3p + 16q.
=> 3p = 8q => p/q = 8/3.
Let p = 8 units/day, q = 3 units/day.
Total work W = 6(8) + 8(3) = 48 + 24 = 72 units.
Twice the task = 2 * 72 = 144 units.
Combined rate = p + q = 8 + 3 = 11 units/day.
Days required = 144 / 11 = 13 1/11 days. Option 4 is correct.`
    }
  },
  {
    id: 95,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The ratio of the sum of first a odd natural numbers to the sum of first b even natural numbers is 32 : 51. If a and b are in ratio 4 : 5, then find the sum of all b even numbers and all a odd number.',
    options: [
      { id: 1, text: '1600' },
      { id: 2, text: '2550' },
      { id: 3, text: '4150' },
      { id: 4, text: '3320' }
    ],
    correctAnswer: '3',
    solution: {
      explanation: `Sum of first a odd natural numbers = a².
Sum of first b even natural numbers = b(b + 1).
Given a/b = 4/5 => a = 4n, b = 5n.
(4n)² / [5n(5n + 1)] = 32 / 51
=> 16n² / [5n(5n + 1)] = 32 / 51
=> 16n / [5(5n + 1)] = 32 / 51
=> n / [5(5n + 1)] = 2 / 51
=> 51n = 10(5n + 1) = 50n + 10 => n = 10.
So a = 40, b = 50.
Sum of first a odd numbers = 40² = 1600.
Sum of first b even numbers = 50 * 51 = 2550.
Total sum = 1600 + 2550 = 4150. Option 3 is correct.`
    }
  },
  {
    id: 96,
    section: 'QA',
    type: 'TITA',
    questionText: 'Had a person traveled 3 kmph faster he would have taken 2 hours less to cover a certain distance. Had he traveled 4 kmph slower he would have taken 5 hours more to cover the same distance. Find the distance (in km) he needs to cover.',
    correctAnswer: '120',
    solution: {
      explanation: `Let distance = d, original speed = s, original time = t.
d = st.
(s + 3)(t - 2) = st => 3t - 2s = 6   ...(1)
(s - 4)(t + 5) = st => 5s - 4t = 20  ...(2)
Multiply (1) by 4 and (2) by 3:
12t - 8s = 24
15s - 12t = 60
Adding both: 7s = 84 => s = 12 km/h.
From (1): 3t = 6 + 2(12) = 30 => t = 10 hours.
Distance d = s * t = 12 * 10 = 120 km.`
    }
  },
  {
    id: 97,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If P = 2⁷ × 3⁵ × 7⁴ × 11⁷ and Q = 2⁸ × 3⁶ × 7³ × 5⁷, then find the number of even factors common to both P and Q which are also perfect squares.',
    options: [
      { id: 1, text: '24' },
      { id: 2, text: '192' },
      { id: 3, text: '168' },
      { id: 4, text: '18' }
    ],
    correctAnswer: '4',
    solution: {
      explanation: `GCD(P, Q) = 2^(min(7,8)) * 3^(min(5,6)) * 7^(min(4,3)) = 2⁷ × 3⁵ × 7³.
A factor is a perfect square if all prime powers are even.
Even factor must have exponent of 2 >= 2.
Even exponents available:
For 2: {2, 4, 6} -> 3 choices (must be even, so 2^0 is excluded).
For 3: {0, 2, 4} -> 3 choices.
For 7: {0, 2} -> 2 choices.
Number of such factors = 3 * 3 * 2 = 18. Option 4 is correct.`
    }
  },
  {
    id: 98,
    section: 'QA',
    type: 'MCQ',
    questionText: 'A shopkeeper manufactures a product. 35% of the cost of the product is due to the raw material used by him, and 40% of the cost is its manufacturing cost. Remaining costs are due to packaging, transportations, etc. He marked up the price by 25% while selling it in market. If the cost of raw material is decreased by 10% and that of the manufacturing increased by 5%, but other costs as well as the selling price remains the same, then what is the (approximate) profit earned by the shopkeeper?',
    options: [
      { id: 1, text: '25%' },
      { id: 2, text: '27%' },
      { id: 3, text: '20%' },
      { id: 4, text: '35%' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `Let initial total cost = Rs. 100.
Raw material = 35, Mfg = 40, Other costs = 25.
SP = 100 * 1.25 = Rs. 125.
New Raw material = 35 * 0.90 = 31.5.
New Mfg = 40 * 1.05 = 42.
Other costs = 25.
New total cost = 31.5 + 42 + 25 = Rs. 98.5.
Profit = 125 - 98.5 = Rs. 26.5.
Profit % = (26.5 / 98.5) * 100 ≈ 26.9% ≈ 27%. Option 2 is correct.`
    }
  },
  {
    id: 99,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If both 11² and 3³ are factors of (a × 4³ × 6² × 13¹¹), then what is the smallest possible value of a?',
    options: [
      { id: 1, text: '121' },
      { id: 2, text: '363' },
      { id: 3, text: '3267' },
      { id: 4, text: '33' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `Expression: a * 4³ * 6² * 13¹¹ = a * (2²)³ * (2 * 3)² * 13¹¹ = a * 2⁸ * 3² * 13¹¹.
For 11² to be a factor: since 11 is not in 2⁸ * 3² * 13¹¹, 'a' must supply 11² = 121.
For 3³ to be a factor: existing power of 3 is 3², so 'a' must supply at least one more 3 (3¹).
Smallest value of a = 11² * 3 = 121 * 3 = 363. Option 2 is correct.`
    }
  },
  {
    id: 100,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Find the sum of n terms of the following series:\nlog(a/b) + log(a²/b) + log(a³/b) + ... + log(aⁿ/b)',
    options: [
      { id: 1, text: 'log( a^(n(n+1)/2) / b )' },
      { id: 2, text: 'n · log( √(a^(n+1)) / b )' },
      { id: 3, text: 'log( a^(n(n+1)) / b )' },
      { id: 4, text: 'n · log( √a / b )' }
    ],
    correctAnswer: '2',
    solution: {
      explanation: `Sum S = ∑[k=1 to n] (log a^k - log b)
= (log a + 2 log a + 3 log a + ... + n log a) - n log b
= [n(n+1)/2] log a - n log b
= n [ ((n+1)/2) log a - log b ]
= n [ log(a^((n+1)/2)) - log b ]
= n · log( √(a^(n+1)) / b ).
Option 2 is correct.`
    }
  }
];
