import { QuestionData } from '../types/cat.ts';

// ==========================================
// VARC PASSAGES & QUESTIONS (Q.1 to Q.24)
// ==========================================

const varcPassage1 = `The findings of trolleyology—complex, instinctive and worldwide moral intuitions—led Hauser and John Mikhail (a legal scholar) to revive an analogy from the philosopher John Rawls between the moral sense and language. According to Noam Chomsky, we are born with a “universal grammar” that forces us to analyse speech in terms of its grammatical structure, with no conscious awareness of the rules in play. By analogy, we are born with a universal moral grammar that forces us to analyse human action in terms of its moral structure, with just as little awareness.

The idea that the moral sense is an innate part of human nature is not far-fetched. A list of human universals collected by the anthropologist Donald E. Brown includes many moral concepts and emotions, including a distinction between right and wrong; empathy; fairness; admiration of generosity; rights and obligations; proscription of murder, rape and other forms of violence; redress of wrongs; sanctions for wrongs against the community; shame; and taboos. . . .

Though no one has identified genes for morality, there is circumstantial evidence they exist. The character traits called “conscientiousness” and “agreeableness” are far more correlated in identical twins separated at birth (who share their genes but not their environment) than in adoptive siblings raised together (who share their environment but not their genes). People given diagnoses of “antisocial personality disorder” or “psychopathy” show signs of morality blindness from the time they are children. They bully younger children, torture animals, habitually lie and seem incapable of empathy or remorse, often despite normal family backgrounds. Some of these children grow up into monsters who bilk elderly people out of their savings, . . or shoot convenience-store clerks lying on the floor during a robbery.

Though psychopathy probably comes from a genetic predisposition, a milder version can be caused by damage to frontal regions of the brain (including the areas that inhibit intact people from throwing the hypothetical fat man off the bridge). The neuroscientists Hanna and Antonio Damasio and their colleagues found that some children who sustained severe injuries to their frontal lobes can grow up into callous and irresponsible adults, despite normal intelligence. They lie, steal, ignore punishment, endanger their own children and can’t think through even the simplest moral dilemmas, like what two people should do if they disagreed on which TV channel to watch or whether a man ought to steal a drug to save his dying wife.

The moral sense, then, may be rooted in the design of the normal human brain. Yet for all the awe that may fill our minds when we reflect on an innate moral law within, the idea is at best incomplete. . . . Of course, languages vary, too. In Chomsky’s theory, languages conform to an abstract blueprint, like having phrases built out of verbs and objects, while the details vary, like whether the verb or the object comes first. Could we be wired with an abstract spec sheet that embraces all the strange ideas that people in different cultures moralise?`;

const varcPassage2 = `Jeffrey T. Nealon's. . .Post-Postmodernism: or, The Cultural Logic of Just-in-Time Capitalism sets itself a daunting task for its slim 227 pages: to assess our new-millennial present with tools from Fredric Jameson’s now-classic essay “Postmodernism, or the Cultural Logic of Late Capitalism,” first published. . .nearly 30 years ago. . . .

What does Nealon want from Jameson? Two big things. First, Jameson, as Nealon rightly argues, takes a dialectical, rather than a moralistic, approach to the nexus of culture and economy that he presents. Jameson does not lament the dominance of capitalism — though he does believe it’s “late” and may yet come to an end, having established the preconditions for a more radically free and equal world than it could itself sustain. So Nealon takes Jameson as his authority for asserting that those of us concerned with the culture of the present must not merely decry but also analyse it, and see its energies and positive aspects. I couldn’t agree more, but it’s a hard lesson.

Second, Nealon takes from Jameson a methodological principle of “transcoding” or “overcoding.” As he explains:
[I]f everything in our world exists on the same flat plane, then things that don’t at first seem to have much in common quite literally have to be related in some way(s) — the cultural realm and the economic realm, avant-garde poetry and downtown skyscrapers, for example. Or, to put it somewhat more precisely, one should be able to take the claims and effects that surround the logic of X or Y cultural phenomenon (say, that contemporary literature is open-ended, process-oriented, not dedicated to the limitations of univocal meaning) and dialectically overcode or transcode these cultural effects in terms of economic ones (that, say, global capitalism is open-ended, process-oriented, not dedicated to the limitations of univocal meaning).

Here is where things start to go wrong. Nealon’s version of transcoding makes everything the same, relating elements as possessing similar properties (i.e., open-ended, process-oriented, not dedicated to univocal meaning, etc.), but Jameson’s famous formula in his postmodernism book is that “difference relates.” Nealon seeks the sameness of “homology,” but there are many other different kinds of relationships and the thinkers Nealon cites most often have excelled in specifying varieties of nonhomology.

Nealon thus uses the very same terms to characterise both culture and the economy, and he claims it’s the task of critical thinking to do just this. Sometimes it works. This homological imperative makes for a stirring chapter on the university, considered as an economic entity. He points out that contemporary corporate management aims for flat organisation, eliminating bureaucratic intermediaries; in contrast, universities over the last 40 years have added mid-level administrators much more rapidly than professors. Nealon thus proposes that we “unlock shareholder value” by “trimming and streamlining the administrative ranks […] and disgorging that excess cash back into the ‘core business’ of teaching and research, thereby turning the university back to the people who bear the real brunt of its success or failure: the faculty and the students.” I agree; I just wish he also acknowledged that much of the administrative growth has come directly in the service of the two major groups that pay for American higher education: governments and parents.`;

const varcPassage3 = `Laboratory mice are very little help, [Dr. Steven Austad] thinks, in understanding ageing in animals that have not gone through decades of inbreeding and which live in environments that offer more danger than that inflicted in experiments. Lab mice, he feels, are not just a poor guide to the wider world of animal ageing; they are barely even mice any more. They are, in a phrase coined by one of his colleagues, just “mouse-like objects”. . . .

In early work on American opossums, he observed that those living on an island off the coast of Georgia, where there were no predators, seemed to age less rapidly than those on the mainland. This caused him to be sceptical about how much could be learned from inbred animals leading cushy lives (lab mice tend to live many times longer than their wild relatives). Instead, he seeks to study longevity in wild animals.

With a maximum recorded lifespan of just over 120 years, human beings are at the upper end of the animal longevity scale. But there are a few that outdo them. At an estimated 200 years, bowhead whales are thought to be the longest-living mammals. . . . In-depth studies of bowhead whales and Greenland sharks obviously pose difficulties. Long-lived invertebrates may not have as much to say about people as one might wish. And working with true methuselahs, backboned or not, might mean working on their timescales, which would hardly be helpful.

As a compromise between longevity and fecundity, Dr Austad proposes the house sparrow. In general, animal lifespans increase with size. But whereas wild mice live three or four months wild sparrows, similar in weight, can live almost 20 years. Understanding the physiological differences that grant these birds such long lives might, he reckons, lead to useful ideas for increasing the lifespans and healthspans of people, a species in which he is interested despite its basically domesticated nature.

Another off-kilter approach is to look at ageing not through the lens of animals that lead long lives in the wild but of animals that lead shorter lives in domesticity. Big breeds of dogs live less long than small ones; breeding them for size bred them for short lives, too. The mechanism by which that happened may be more tractable to study than most of those involved in ageing; selective breeding has changed relatively little of the dogs’ genome. And turning understanding thus gathered into a treatment would unleash a flood of dollars and love from people who own Great Danes, Newfoundlands and the like.

That is what Celine Halioua, the founder of Loyal, a San Francisco startup, wants to do. She knows which pathway she wants to target, and the company is getting a drug into trials. Animal trials are more easily done than human ones, and veterinary approval is far faster than medical approval. Ms Halioua’s hope is that by developing a life-lengthening supplement for big dogs, she can provide Loyal with a reliable revenue stream quite quickly. With that she can fund her long-term goal, the extension of human life. And it should help with her other heroic ambition—to found a drug company people actually like, even love.`;

const varcPassage4 = `In the history of Western aesthetics, the subject matters that received attention ranged from natural objects and phenomena, built structures, utilitarian objects, and human actions, to what is today regarded as the fine arts. However, beginning with the nineteenth century, the discourse has become increasingly focused on the fine arts. This narrowing attention occurred despite the prominence of the aesthetic attitude theory in modern aesthetics, according to which there is virtually no limit to what can become a source of aesthetic experience. The tendency to equate aesthetics with the philosophy of art became widespread in twentieth-century aesthetics, particularly within the Anglo-American tradition.

Challenges to this rather limited scope of aesthetics began during the latter half of the twentieth century with a renewed interest in nature and environment, followed by the exploration of popular arts. Everyday aesthetics continues this trajectory of widening scope by including objects, events, and activities that constitute people’s daily life. However, it is more accurate to characterise this recent development as restoring the scope of aesthetics rather than opening a new arena.

In addition, many cultural traditions outside the Western sphere have long been concerned with the aesthetics of daily life. In some cultural traditions, such as Inuit and Navajo, aesthetic considerations are thoroughly integrated in daily activities, including making things such as tool. Even in other traditions, such as Japanese and Chinese, with distinctive art-making practices of paintings, literature, theatre, and the like, aesthetic practices permeate people’s daily life. One of the findings of comparative aesthetics is that a greater emphasis is placed on the aesthetics of everyday life in many non-Western cultures than in the West.

Thus, the perception that everyday aesthetics is a new frontier of aesthetics discourse needs to be situated in the context of late twentieth-century Anglo-American aesthetics. That is, it was established as a reaction against what was considered to be an undue restriction on the scope of aesthetics. It aims to give due regard to the entirety of people’s multi-faceted aesthetic life, including various ingredients of everyday life: artefacts of daily use, chores around the house, interactions with other people, and quotidian activities such as eating, walking, and bathing. Everyday aesthetics also seeks to liberate aesthetic inquiry from an almost exclusive focus on beauty characteristic of modern Western aesthetics. It includes within its purview those qualities that pervade everyday experience, such as pretty, cute, messy, gaudy, tasteful, dirty, lively, monotonous, to name only a few. These items and qualities are characterised by their ubiquitous presence in the daily life of people, regardless of their identity, occupation, lifestyle, economic status, social class, cultural background, and familiarity with art.

Beyond attending to more items and qualities for its inquiry, everyday aesthetics also raises theoretical issues that have not received adequate attention from the prevailing mainstream Western aesthetics. These include: indeterminate identity of the object of aesthetic experience due to a lack of an institutionally agreed-upon framing; changes and modifications everyday objects go through; general anonymity of the designer and creator, as well as absence of any clear authorship behind everyday objects; bodily engagements with objects and activities and their pragmatic outcome; perceived lack of criteria for aesthetic judgments. By raising these issues, everyday aesthetics challenges long-held assumptions underlying art-centred aesthetics discourse.`;

export const openCdc1VarcQuestions: QuestionData[] = [
  {
    id: 1,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 1-4: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage1,
    questionText: 'Each of the following is a similarity between universal grammar and universal moral grammar EXCEPT:',
    options: [
      { id: 1, text: 'they both are not acquired characteristics.' },
      { id: 2, text: 'they both can have variations.' },
      { id: 3, text: 'they both have genetic predispositions.' },
      { id: 4, text: 'they both have unconscious processing.' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'The passage discusses universal grammar, referring to Noam Chomsky\'s theory that humans are born with an innate ability to analyse speech according to grammatical structure. This implies an innate capacity, but the passage does not explicitly mention a genetic predisposition for universal grammar. On the other hand, the passage mentions that no one has identified specific genes for morality. Therefore, the passage does not confirm genetic predispositions as a definitive similarity.',
      optionElimination: [
        { option: 1, reason: 'Incorrect: Both are innate, not acquired.' },
        { option: 2, reason: 'Incorrect: Both exhibit variations across cultures/languages.' },
        { option: 3, reason: 'Correct Answer: Genetic predispositions are not confirmed as a similarity.' },
        { option: 4, reason: 'Incorrect: Both operate beneath the level of conscious awareness.' },
      ],
    },
  },
  {
    id: 2,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 1-4: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage1,
    questionText: '“Could we be wired with an abstract spec sheet that embraces all the strange ideas that people in different cultures moralise?” Which one of the following is the best interpretation of this question posed by the author?',
    options: [
      { id: 1, text: 'The author is questioning the extent to which human beings may genuinely comprehend the moral beliefs of other cultures.' },
      { id: 2, text: 'The author is suggesting that there might be a universal framework for morality that accommodates diverse cultural norms.' },
      { id: 3, text: 'The author is sceptical about whether abstract morality can embrace diverse views given its dependence on the culture.' },
      { id: 4, text: 'The author is proposing that cultural moral differences are superficial and not rooted in a universal moral grammar.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'In the passage, the author draws an analogy between universal grammar and universal moral grammar, suggesting that just as humans have an innate grammatical blueprint that allows for linguistic diversity, there might also be an innate moral framework that accommodates diverse cultural norms.',
    },
  },
  {
    id: 3,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 1-4: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage1,
    questionText: 'The author compares identical twins separated at birth and adoptive siblings raised together to argue that:',
    options: [
      { id: 1, text: 'genetic factors may have an influence on traits related to morality.' },
      { id: 2, text: '“conscientiousness” and “agreeableness” can be called moral genes.' },
      { id: 3, text: 'the characteristics of personality disorders are related to morality.' },
      { id: 4, text: 'environmental factors privilege genetic factors in character traits.' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'The higher correlation of conscientiousness and agreeableness in identical twins separated at birth compared to adoptive siblings indicates that genetic factors play a significant role in traits related to morality.',
    },
  },
  {
    id: 4,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 1-4: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage1,
    questionText: 'The author would likely agree with all the following statements EXCEPT:',
    options: [
      { id: 1, text: 'psychopathy can arise not just from genetic predisposition.' },
      { id: 2, text: 'studying moral dilemmas can provide insights into morality.' },
      { id: 3, text: 'the moral sense is likely rooted in the brain\'s design.' },
      { id: 4, text: 'morality is detached from moral beliefs and practices.' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'The passage argues that human morality is deeply connected to universal intuitions and expressed through cultural moral beliefs and practices, directly contradicting the assertion that morality is detached from them.',
    },
  },
  {
    id: 5,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 5-8: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage2,
    questionText: 'Which of the following views of Nealon does the author consider problematic?',
    options: [
      { id: 1, text: 'Rather than just criticising, we should explore the dynamics of current economic conditions.' },
      { id: 2, text: 'Cultural and economic phenomena should be understood as possessing similar properties.' },
      { id: 3, text: 'The administrative expansion in universities serves the needs of governments and parents.' },
      { id: 4, text: 'The prevailing cultural conditions can be understood under the framework of nonhomology.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'The author critiques Nealon’s transcoding method because it equates cultural and economic elements based on shared properties ("homology"), overlooking Jameson\'s insight that "difference relates" and ignoring nonhomology.',
    },
  },
  {
    id: 6,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 5-8: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage2,
    questionText: '“[I]f everything in our world exists on the same flat plane, then things that don’t at first seem to have much in common quite literally have to be related in some way(s) — the cultural realm and the economic realm, avant-garde poetry and downtown skyscrapers, for example.” Which one of the following is the best interpretation of this sentence?',
    options: [
      { id: 1, text: 'Seemingly unrelated things must be connected if viewed on an equal level.' },
      { id: 2, text: 'Things that exist in the world do seem to have a common connection.' },
      { id: 3, text: 'The various realms of the world fundamentally have a common root.' },
      { id: 4, text: 'If there are connections between unrelated things, then they manifest in different realms.' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'The sentence argues that if all aspects of reality exist on the "same flat plane", then seemingly disparate and unrelated things must have underlying connections when viewed on an equal footing.',
    },
  },
  {
    id: 7,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 5-8: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage2,
    questionText: 'Which of the following best expresses the main point of the last paragraph?',
    options: [
      { id: 1, text: 'Nealon rightly criticises contemporary university management for adding mid-level administrators more rapidly than professors.' },
      { id: 2, text: 'Nealon proposes that universities should streamline administration and reinvest in teaching and research; however, this view is deeply flawed.' },
      { id: 3, text: 'Nealon\'s view on university economics is compelling but overlooks that administrative growth is driven by government and parents.' },
      { id: 4, text: 'Nealon’s assertion that corporate management trends and university administrative growth are different overlooks the homological factors.' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'The last paragraph praises Nealon\'s critique of bloated university administrative ranks, but adds the author\'s caveat that Nealon overlooks how this growth serves governments and parents paying for education.',
    },
  },
  {
    id: 8,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 5-8: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage2,
    questionText: 'What is the main difference between Nealon\'s and Jameson\'s approaches to the relationship between culture and economy?',
    options: [
      { id: 1, text: 'Nealon applies a moralistic lens, while Jameson uses a dialectical method.' },
      { id: 2, text: 'Nealon focuses on similarities, while Jameson emphasises relational differences.' },
      { id: 3, text: 'Nealon ignores economic factors, whereas Jameson integrates them into cultural analysis.' },
      { id: 4, text: 'Nealon examines historical contexts, while Jameson looks at contemporary issues.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'The text highlights that Nealon seeks the sameness of "homology", relating elements by shared properties, whereas Jameson\'s formula is that "difference relates".',
    },
  },
  {
    id: 9,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 9-12: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage3,
    questionText: 'All of the following statements are supported by the information given in the passage EXCEPT:',
    options: [
      { id: 1, text: 'there is an interplay between scientific rigour and commercial viability in longevity research.' },
      { id: 2, text: 'studying larger, long-lived species may yield more practical insights into longevity.' },
      { id: 3, text: 'veterinary research can serve as a stepping stone for human medical advancements.' },
      { id: 4, text: 'there is a significant commercial interest in extending the lifespans of pets.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'The passage explicitly notes that studying long-lived species like bowhead whales and Greenland sharks poses immense logistical difficulties and working on their extended timescales would "hardly be helpful".',
    },
  },
  {
    id: 10,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 9-12: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage3,
    questionText: 'Each of the following, if true, would weaken the suggestions made by Dr. Austad EXCEPT:',
    options: [
      { id: 1, text: 'lab mice are the most popular model organisms in research, with a vast amount of existing literature and data available.' },
      { id: 2, text: 'genetic engineering now creates lab mice with diversity similar to wild populations, reducing inbreeding issues.' },
      { id: 3, text: 'comparative genomic studies have shown that key ageing-related genes in lab mice are highly similar to those in wild animals.' },
      { id: 4, text: 'house sparrows are highly mobile and are difficult to maintain in stable populations within controlled research settings.' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'The popularity of lab mice and the volume of existing data do not counter Dr. Austad\'s biological critique regarding inbreeding and lack of environmental adversity. Thus Option 1 does not weaken his argument.',
    },
  },
  {
    id: 11,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 9-12: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage3,
    questionText: 'Celine Halioua’s business plan can be best summed up as which of the following?',
    options: [
      { id: 1, text: 'Create a reliable revenue stream through the development of innovative products and use it to support a long-term personal goal.' },
      { id: 2, text: 'Capitalise on a current need to quickly bring products to market and reinvest the profits into expanding research and development efforts.' },
      { id: 3, text: 'Develop and market a product to generate revenue, which will fund a long-term objective and help establish a well-regarded company.' },
      { id: 4, text: 'Work with a government agency to create an initial product that will help fund her long-term goal of creating a company that everyone loves.' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Her strategy is to develop a canine longevity supplement to generate immediate revenue, fund the long-term goal of human lifespan extension, and found a drug company people love.',
    },
  },
  {
    id: 12,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 9-12: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage3,
    questionText: 'If the information given in the passage is true, which one of the following must also be true?',
    options: [
      { id: 1, text: 'Studying long-lived species can provide insights into the development of longevity.' },
      { id: 2, text: 'The maximum lifespan of any species is not likely to be more than 200 years.' },
      { id: 3, text: 'Selective breeding can have unintended consequences on longevity.' },
      { id: 4, text: 'Wild mice are very likely to have a longer lifespan than laboratory mice.' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'The passage explicitly states: "breeding them for size bred them for short lives, too", proving that selective breeding for size had the unintended consequence of shortening lifespan.',
    },
  },
  {
    id: 13,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 13-16: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage4,
    questionText: 'The author primarily attempts to:',
    options: [
      { id: 1, text: 'critique the focus of modern Western aesthetics on fine arts.' },
      { id: 2, text: 'argue that everyday aesthetics restores the original scope of aesthetic inquiry.' },
      { id: 3, text: 'advocate for a renewed focus on aesthetic attitude theory in modern aesthetics.' },
      { id: 4, text: 'explain the development and scope of everyday aesthetics.' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'The passage provides a comprehensive historical and conceptual overview tracing how aesthetics narrowed to fine arts and explaining the rise, scope, and theoretical issues of everyday aesthetics.',
    },
  },
  {
    id: 14,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 13-16: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage4,
    questionText: 'The author apparently believes that everyday aesthetics:',
    options: [
      { id: 1, text: 'represents a renaissance of non-restrictive aesthetics.' },
      { id: 2, text: 'Invalidates the established aesthetic discourse.' },
      { id: 3, text: 'challenges the tenets of aesthetic attitude theory.' },
      { id: 4, text: 'is the celebration of utilitarian qualities of daily life.' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'The author describes everyday aesthetics as restoring the historical broad scope of aesthetic inquiry rather than creating an entirely new arena, reflecting a revival (renaissance) of non-restrictive aesthetics.',
    },
  },
  {
    id: 15,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 13-16: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage4,
    questionText: 'Each of the following is likely an attribute of everyday aesthetics EXCEPT:',
    options: [
      { id: 1, text: 'it allows for a more personal and diverse range of aesthetic experiences.' },
      { id: 2, text: 'It emphasises the specific kind of object over the character of an experience.' },
      { id: 3, text: 'sensory experiences and practical interactions play a crucial role in it.' },
      { id: 4, text: 'ugliness, grotesqueness, repulsiveness, and disgust can be a part of it.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Everyday aesthetics emphasizes the ubiquitous character of daily experiences and interactions, rather than restricting focus to prestigious or specific categories of objects.',
    },
  },
  {
    id: 16,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Directions for questions 13-16: The passage below is accompanied by four questions. Based on the passage, choose the best answer for each question.',
    passageText: varcPassage4,
    questionText: 'Which of the following sequence of words/phrases best describes the key ideas of the passage?',
    options: [
      { id: 1, text: 'Fine arts; Aesthetic attitude theory; Non-Western cultures; Everyday aesthetics' },
      { id: 2, text: 'Western aesthetics; Anglo-American tradition; Everyday aesthetics; Non-Western cultures' },
      { id: 3, text: 'Anglo-American tradition; Aesthetic attitude theory; Everyday aesthetics; Daily life' },
      { id: 4, text: 'Twentieth-century aesthetics; Everyday aesthetics; Everyday life; Theoretical issues' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'The passage starts with 20th-century aesthetics focusing on fine arts, transitions to the emergence of everyday aesthetics, explores everyday life examples, and concludes with theoretical issues raised.',
    },
  },
  {
    id: 17,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Verbal Ability: Paragraph Summary',
    questionText: 'The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.\n\nThe earliest ecological genetic studies attempted to document the action of natural selection in wild populations in support of Darwinian theory. In so doing, these studies attempted to demonstrate that evolution by natural selection was not only a historical causal force, but that it also continued to act on the characteristics of wild populations in the present day. Under the assumption of gradualism, it was not clear whether natural selection acting on phenotypes in wild populations could be detected, let alone account for between species phenotypic differences. The starting observations of many of the earliest ecological genetic investigations, i.e., the phenotypes of most interest, were conspicuous phenotypic polymorphisms, such as the spotting patterns on butterfly wings or banding patterns of snail shells or polymorphisms of chromosomal rearrangements. These were either known to have a genetic basis or could safely be assumed to have one.',
    options: [
      { id: 1, text: 'Early studies in ecological genetics, focusing on genetic polymorphisms in wild populations, proved that Darwinian natural selection continues to act on phenotypic differences between species.' },
      { id: 2, text: 'Early ecological genetic studies focused on observing conspicuous phenotypic polymorphisms in wild populations to provide evidence for ongoing natural selection and Darwinian evolution.' },
      { id: 3, text: 'Initial ecological genetic studies, concentrating on easily observable evolution, sought to show that natural selection, as described by Darwin, remains a significant force in wild populations.' },
      { id: 4, text: 'The gradual nature of evolutionary change made it difficult to observe and measure these changes within the timeframe of scientific studies, casting doubt on the Darwinian theory of natural selection.' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Option 2 accurately captures the core objective (providing evidence for ongoing natural selection) and methodology (observing conspicuous phenotypic polymorphisms in wild populations) without overstating with words like "proved".',
    },
  },
  {
    id: 18,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Verbal Ability: Paragraph Summary',
    questionText: 'The passage given below is followed by four alternate summaries. Choose the option that best captures the essence of the passage.\n\nWhile Ai-Da claims to advance AI public literacy and foster critical debate around intelligent systems, it instead ends up perpetuating popular misunderstandings about AI creativity, agency, and consciousness. Built in 2019, Ai-Da is a humanoid robot capable of creating drawings, paintings, and composing poetry. However, the project often conceals or miscommunicates the technical aspects of Ai-Da’s capabilities in a manner that encourages the public to misattribute human-like traits to the robot. This lack of transparency in the presentation of Ai-Da’s abilities and the creative processes involved risks reinforcing existing misconceptions about AI, rather than promoting a more nuanced understanding. The anthropomorphism and posthuman embodiment of the Ai-Da project show the dangers of AI hype can be obscured when presented through the lens of public art.',
    options: [
      { id: 1, text: 'Ai-Da\'s artistic abilities mislead the public about its true capabilities, fostering misconceptions rather than promoting creativity.' },
      { id: 2, text: 'Ai-Da miscommunicates its capabilities, reinforcing misconceptions about notions of creativity, agency, and consciousness.' },
      { id: 3, text: 'The Ai-Da project illustrates how public art can obscure the understanding of AI as an anthropomorphic and posthuman embodiment.' },
      { id: 4, text: 'Ai-Da perpetuates AI misunderstandings by miscommunicating its capabilities and encouraging anthropomorphism.' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'Option 4 concisely synthesizes the passage\'s main argument: miscommunicating technical capabilities leads to anthropomorphism and perpetuates public misunderstandings about AI.',
    },
  },
  {
    id: 19,
    section: 'VARC',
    type: 'TITA',
    contextHeader: 'Verbal Ability: Para Jumble (TITA)',
    questionText: 'The four sentences (labelled 1, 2, 3 and 4) given below, when properly sequenced, would yield a coherent paragraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four numbers as your answer.\n\n1. It is a biographical fact, documented by the letters, that Dickinson led a rich social life in her teens and twenties and then, beginning in her thirties, gradually withdrew from what today we would call “face-to-face” interaction with friends.\n2. The editing of the letters, as well as perspectives on Dickinson’s life, have changed dramatically since the 1890 edition of her poems sparked enough public interest.\n3. Interpretations of Dickinson’s reclusiveness are a case in point.\n4. All editing is an act of interpretation and is inextricable from its time.',
    correctAnswer: '4231',
    solution: {
      explanation: 'Sentence 4 states the broad premise that all editing is an act of interpretation. Sentence 2 connects editing specifically to Dickinson\'s letters and life perspectives. Sentence 3 cites interpretations of her reclusiveness as a case in point. Sentence 1 elaborates on the biographical facts of her reclusiveness. Logical sequence: 4231.',
    },
  },
  {
    id: 20,
    section: 'VARC',
    type: 'TITA',
    contextHeader: 'Verbal Ability: Para Jumble (TITA)',
    questionText: 'The four sentences (labelled 1, 2, 3 and 4) given below, when properly sequenced, would yield a coherent paragraph. Decide on the proper sequencing of the order of the sentences and key in the sequence of the four numbers as your answer.\n\n1. “This world,” mused Horace Walpole, “is a comedy to those that think, a tragedy to those that feel.”\n2. The process of life is oblivious to the beings it makes and breaks in the course of its perpetuation.\n3. And while no living creature escapes this carnage, only humans bear the burden of awareness.\n4. For Peter Wessel Zapffe, humans are condemned to do both.',
    correctAnswer: '1423',
    solution: {
      explanation: 'Sentence 1 quotes Walpole on thinking vs feeling (comedy vs tragedy). Sentence 4 directly responds that for Zapffe, humans are condemned to do both. Sentence 2 introduces life\'s indifferent carnage, and Sentence 3 concludes with humans bearing the burden of awareness. Logical sequence: 1423.',
    },
  },
  {
    id: 21,
    section: 'VARC',
    type: 'TITA',
    contextHeader: 'Verbal Ability: Odd One Out (TITA)',
    questionText: 'Five jumbled up sentences (labelled 1, 2, 3, 4 and 5), related to a topic, are given below. Four of them can be put together to form a coherent paragraph. Identify the odd sentence and key in the number of that sentence as your answer.\n\n1. They might be thoughts that we long had but never articulated or instantaneous insights in which something entirely new and unfamiliar suddenly comes to mind.\n2. The gulf between our solitary thoughts and the words that would convey them to others constantly confronts us all.\n3. And yet, venturing to investigate these cases can illuminate the deeper challenges that we face in articulation and transform our conception of ourselves.\n4. The thoughts we struggle to articulate might be as momentous as a transformative moral epiphany or as ordinary as an insight into a movie or the hurtful behaviour of a friend.\n5. They might seem hopeful or alarming, frivolous or serious, and lead us to find value in certain things or worry about others.',
    correctAnswer: '3',
    solution: {
      explanation: 'Sentences 2, 4, 5, and 1 describe the gulf between thoughts and words and illustrate the wide spectrum and nature of unarticulated thoughts. Sentence 3 shifts to the philosophical research benefit of investigating these cases, making 3 the odd sentence out.',
    },
  },
  {
    id: 22,
    section: 'VARC',
    type: 'TITA',
    contextHeader: 'Verbal Ability: Odd One Out (TITA)',
    questionText: 'Five jumbled up sentences (labelled 1, 2, 3, 4 and 5), related to a topic, are given below. Four of them can be put together to form a coherent paragraph. Identify the odd sentence and key in the number of that sentence as your answer.\n\n1. A writer’s soul screams to tell stories, and the impact we get to make on readers is an incredible corollary.\n2. From each story, there has come an internal change, a new thought, or a realization I have come away with.\n3. It isn’t hard to guess you love books immensely—you have probably devoured many.\n4. Sometimes, the impression was good, and other times bad, but I always came away with something.\n5. While I have read a lot, from each book I’ve read, I can tell you something I learned.',
    correctAnswer: '1',
    solution: {
      explanation: 'Sentences 3, 5, 2, and 4 form a paragraph from the reader\'s perspective about reading books and the impact of stories. Sentence 1 speaks from the writer\'s perspective about telling stories, which breaks the coherence.',
    },
  },
  {
    id: 23,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Verbal Ability: Sentence Placement',
    questionText: 'There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.\n\nSentence: Thus, given that dominance and prestige entail different patterns of interpersonal behaviours, these status-oriented strategies were likely motivated by (and rewarded with) different kinds of emotions.\n\nParagraph: Both dominance and prestige are likely adaptive, in that they provide access to resources; they represent different strategies for obtaining those rewards. __1__. Over the course of evolutionary history, dominant individuals obtained status by intimidating subordinates. In contrast, prestigious individuals obtained status by helping subordinates and sharing their knowledge with them; subordinates would, in turn, willingly grant resources to prestigious individuals out of respect. __2__. Specifically, dominant individuals may experience hubristic pride in response to success in an agonistic encounter. In non-human animals, this experience may be a simple sense of superiority; in humans, this experience became the more cognitively complex self-conscious emotion of hubristic pride. __3__. In turn, this positive emotional experience would reinforce and motivate the continued use of force and intimidation to maintain one’s dominance. __4__.',
    options: [
      { id: 1, text: 'Option 3' },
      { id: 2, text: 'Option 2 (Blank 2)' },
      { id: 3, text: 'Option 4' },
      { id: 4, text: 'Option 1' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Blank 2 directly follows the contrast between the behavioral patterns of dominance and prestige, and precedes the detailed description of emotional experiences (e.g. hubristic pride). Hence, the sentence fits smoothly at Blank 2.',
    },
  },
  {
    id: 24,
    section: 'VARC',
    type: 'MCQ',
    contextHeader: 'Verbal Ability: Sentence Placement',
    questionText: 'There is a sentence that is missing in the paragraph below. Look at the paragraph and decide where (option 1, 2, 3, or 4) the following sentence would best fit.\n\nSentence: They act, and either fail or succeed.\n\nParagraph: So many are filled with ambition but ruled by fear. __1__. Their inner voice is telling them they’re going to fail and that they’ll make a fool of themselves. __2__. The “stupids” either don’t hear this voice or choose to ignore it. __3__. You envy the ones who don’t fail, and you mock the ones who do. Unlike you, both categories have actually done something. __4__. So you tell yourself the successful ones got lucky and the “failures” — well, they prove your point, don’t they?',
    options: [
      { id: 1, text: 'Option 2' },
      { id: 2, text: 'Option 1' },
      { id: 3, text: 'Option 4' },
      { id: 4, text: 'Option 3 (Blank 3)' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'Blank 3 follows "The \'stupids\' either don\'t hear this voice or choose to ignore it", providing the immediate consequence: "They act, and either fail or succeed." This directly sets up the next sentence: "You envy the ones who don\'t fail, and you mock the ones who do."',
    },
  },
];

// ==========================================
// DILR SETS & QUESTIONS (Q.25 to Q.44)
// ==========================================

const dilrContextSet1 = `In a country, the Single Transferable Vote (STV) method is utilized for the election of Rajsa members. To win a Rajsa seat, a candidate must secure a minimum quota of votes calculated by the formula:
Minimum quota of votes required for Rajsa seat = [Number of MLAs in the state / (Number of Rajsa seats in the state + 1)] + 1

MLAs of a state select the candidate(s) based on the preference votes. The process of the preference voting is described below:
1) When filling out a ballot paper with names of candidates from various parties, MLAs rank candidates with 1 for their top preference, 2 for the next, and so forth. If a candidate(s) receive(s) enough first preference votes to meet or exceed the minimum quota of votes required to win a Rajsa seat, the candidate(s) is/are elected.
2) If all the available Rajsa seats are not filled after the above process, the surplus from topmost available preference votes of winning candidates is transferred to their next preference. If multiple candidates have surpluses, the largest surplus is transferred first.
3) To prevent wasted votes, if the required number of candidates is not elected after surplus transfers, the candidate with the fewest votes is eliminated.
4) The process steps No. 2 and 3 are repeated until enough candidates reach the quota to fill all available seats.
5) It is also known that no two candidates from a state receive the same number of first preference votes.

Assuming there are only six states—A, B, C, D, E, and F—in the country, the table below shows the number of Rajsa seats and MLAs in each state:
State A: 19 Rajsa Seats, 420 MLAs (Quota = 420/20 + 1 = 22)
State B: 16 Rajsa Seats, 323 MLAs (Quota = 323/17 + 1 = 20)
State C: 14 Rajsa Seats, 270 MLAs (Quota = 270/15 + 1 = 19)
State D: 12 Rajsa Seats, 312 MLAs (Quota = 312/13 + 1 = 25)
State E: 8 Rajsa Seats, 198 MLAs (Quota = 198/9 + 1 = 23)
State F: 7 Rajsa Seats, 184 MLAs (Quota = 184/8 + 1 = 24)`;

const dilrContextSet2 = `At a Mathematics class the teacher conducts a role play of a Bank where the students get to learn about investment and banking. Six students - Arko, Barkha, Chiku, Diksha, Esha, and Farukh - are given notes such that the total value of all the money is Rs.2,700.
It is also known that:
(i) For every group of any number of students among the six, the average amount per student for that group is an integer and no student has less than Rs.200 or more than Rs.800.
(ii) Barkha has more money than Chiku and the difference between their amounts is more than Rs.150 and less than Rs.200.
(iii) The amount with Diksha is equal to the sum of the amounts with Arko and Esha.
(iv) The amounts with Arko, Barkha, Esha, and Farukh are in the ratio 3 : 5 : 2 : 4 respectively.

Deductions:
Let A, B, E, F be 3k, 5k, 2k, 4k. Diksha D = A + E = 5k.
From the integer average condition for groups of 2, 3, 4, 5 students, k must be a multiple of 60.
With limits 200 to 800, k = 120.
Therefore:
Arko = Rs.360, Barkha = Rs.600, Chiku = Rs.420, Diksha = Rs.600, Esha = Rs.240, Farukh = Rs.480. Total = Rs.2,700.`;

const dilrContextSet3 = `In an athletics meet, 8 runners—Arun, Barun, Chandan, Dharam, Ezhil, Farhan, Govind, and Harman—participated in three races: 100 m, 200 m, and 400 m. No runner finished in the same position in any of the races. In each of the three races, all runners finished in distinct positions from 1 to 8. Position 1 is given to the runner who completed the race 1st, Position 2 is 2nd and so on.
Known information:
(i) In 100 m race, Chandan finished 3rd, and in 400 m race, he finished 2nd. In 100 m and 200 m races, Barun finished 1st and 2nd, respectively.
(ii) In 400 m race, Arun did not finish 4th, but Govind finished 7th in 200 m race. In 400 m race, Harman did not finish 4th, and Farhan did not finish 8th.
(iii) For Arun, the number of people who finished ahead of him in 100 m race is the same as the number of people who finished behind him in 200 m race.
(iv) In every race, Dharam, Ezhil, and Farhan finished in consecutive positions, with Dharam finishing first among them and Farhan finishing last.
(v) Across the three races, the sum of Dharam’s positions is the same as the sum of Govind’s positions.
(vi) Harman had his best finish in 400 m race, followed by 100 m race, and then 200 m race. Dharam had his best finish in 200 m race.

Final Race Grid:
Runner  | 100m | 200m | 400m
Arun    |  8   |  1   |  7
Barun   |  1   |  2   |  8
Chandan |  3   | 6/8  |  2
Dharam  |  5   |  3   |  4
Ezhil   |  6   |  4   |  5
Farhan  |  7   |  5   |  6
Govind  |  2   |  7   |  3
Harman  |  4   | 8/6  |  1`;

const dilrContextSet4 = `In a school, eight students of a class wrote exactly three tests - Test 1, Test 2, and Test 3. The eight students were ranked in each of the three tests from 1 to 8 such that, in every test, among any two students, the student with the higher marks received the numerically lower rank. Further, no student received the same marks in any two tests. For each student, the marks received by him in Test 3 was neither the highest nor the lowest among the three tests.
Exactly five students sent their Test 3 for re-evaluation and their marks either got increased or decreased. Due to which the ranks of eight students for Test 3 saw few changes maintaining previously stated conditions.

Marks in Test 1 & Test 2 and Ranks in Test 3:
Student | Test 1 | Test 2 | Orig Rank T3 | Rev Rank T3 | Original T3 Marks | Revised T3 Marks
Dev     |   79   |   88   |      1       |      1      |        87         |        87
Aman    |   85   |   92   |      2       |      2      |        86         |        86
Bheem   |   86   |   79   |      3       |      4      |      80 to 85     |   80 or 81 or 82
Gunjan  |   78   |   84   |      4       |      3      |      79 to 83     |   81 or 82 or 83
Jasbir  |   75   |   72   |      5       |      6      |      73 and 74    |        73
Fiza    |   73   |   66   |      6       |      7      |        72         |     71 or 72
Eshan   |   70   |   75   |      7       |      5      |        71         |        74
Hema    |   69   |   74   |      8       |      8      |        70         |     70 or 71`;

export const openCdc1LrdiQuestions: QuestionData[] = [
  {
    id: 25,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 25 to 29: Answer the questions on the basis of the information given below.',
    passageText: dilrContextSet1,
    tableData: {
      headers: ['States', 'A', 'B', 'C', 'D', 'E', 'F'],
      rows: [
        ['No. of Rajsa Seats', 19, 16, 14, 12, 8, 7],
        ['No. of MLAs', 420, 323, 270, 312, 198, 184],
      ],
    },
    questionText: 'Which state has the highest quota of votes required for a candidate to win a seat in the Rajsa?',
    options: [
      { id: 1, text: 'A' },
      { id: 2, text: 'D' },
      { id: 3, text: 'E' },
      { id: 4, text: 'F' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Quota = [MLAs / (Seats + 1)] + 1.\nState A = 420/20 + 1 = 22\nState B = 323/17 + 1 = 20\nState C = 270/15 + 1 = 19\nState D = 312/13 + 1 = 25\nState E = 198/9 + 1 = 23\nState F = 184/8 + 1 = 24.\nState D has the highest quota (25).',
    },
  },
  {
    id: 26,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 25 to 29: Single Transferable Vote (STV) Election.',
    passageText: dilrContextSet1,
    questionText: 'What is the minimum number of MLAs a party needs nationwide to secure a majority in the Rajsa?',
    correctAnswer: '784',
    solution: {
      explanation: 'Total Rajsa seats nationwide = 19 + 16 + 14 + 12 + 8 + 7 = 76.\nMajority required = 76/2 + 1 = 39 seats.\nTo minimize MLAs, we pick seats from states with lowest quota: State C (quota 19, 14 seats), State B (quota 20, 16 seats), and 9 seats from State A (quota 22).\nMinimum MLAs = (14 × 19) + (16 × 20) + (9 × 22) = 266 + 320 + 198 = 784 MLAs.',
    },
  },
  {
    id: 27,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 25 to 29: Single Transferable Vote (STV) Election.',
    passageText: dilrContextSet1,
    questionText: 'If a single party secures an absolute majority in all states, what is the minimum number of candidates they would have in the Rajsa? (Assuming the party attempted to secure as many seats as possible.)',
    options: [
      { id: 1, text: '36' },
      { id: 2, text: '37' },
      { id: 3, text: '38' },
      { id: 4, text: '39' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Minimum MLAs for absolute majority in state: A: 211, B: 162, C: 136, D: 157, E: 100, F: 93.\nSeats won with majority MLAs = floor(MLAs / Quota):\nA: 211/22 = 9\nB: 162/20 = 8\nC: 136/19 = 7\nD: 157/25 = 6\nE: 100/23 = 4\nF: 93/24 = 3.\nTotal minimum candidates = 9 + 8 + 7 + 6 + 4 + 3 = 37.',
    },
  },
  {
    id: 28,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 25 to 29: Single Transferable Vote (STV) Election.',
    passageText: dilrContextSet1,
    questionText: 'Due to administrative issues, a new state, G, has been formed from state A. State G has two Rajsa seats and 57 MLAs. All these MLAs cast their votes with the following preference ordering to fill two seats among four candidates: P, Q, R, and S.\n\nPreferences: (16 MLAs: 1st P, 2nd Q, 3rd R, 4th S), (24 MLAs: 1st P, 2nd R, 3rd Q, 4th S), (17 MLAs: 1st S, 2nd P, 3rd Q, 4th R).\n\nIf the surplus votes of a candidate are redistributed in the next round to the remaining candidates in the same ratio as they were received in the previous round, then which candidates are elected?',
    options: [
      { id: 1, text: 'P, Q' },
      { id: 2, text: 'Q, R' },
      { id: 3, text: 'P, R' },
      { id: 4, text: 'P, S' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Minimum quota in state G = [57 / (2 + 1)] + 1 = 19 + 1 = 20.\nRound 1: P gets 16 + 24 = 40 votes; S gets 17 votes. P is elected with 20 surplus votes.\nP\'s 2nd preferences: 16 for Q, 24 for R (ratio 2:3). Surplus 20 distributed: 8 to Q, 12 to R.\nRound 2 tally: P = 20 (elected), Q = 8, R = 12, S = 17.\nNo other candidate reached 20 quota. Q has fewest votes (8) and is excluded. Q\'s next preference is R, giving R 12 + 8 = 20 votes (quota reached).\nHence, candidates P and R are elected.',
    },
  },
  {
    id: 29,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 25 to 29: Single Transferable Vote (STV) Election.',
    passageText: dilrContextSet1,
    questionText: 'State C\'s legislative assembly consists of 3 parties, X, Y, and Z, with seats in the ratio of 1 : 2 : 3. Assuming the parties initially attempted to secure as many seats as possible. If the parties engaged in cross-voting, i.e., changing their 1st preference for another party, and one party gained a majority in the Rajsa for state C, which of the following statements could be TRUE?\nI. Parties X and Y were involved in cross-voting.\nII. Parties Y and Z were involved in cross-voting.\nIII. Parties X, Y, and Z were involved in cross-voting.',
    options: [
      { id: 1, text: 'I only' },
      { id: 2, text: 'III only' },
      { id: 3, text: 'Both I & III' },
      { id: 4, text: 'All of them' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'Total MLAs in State C = 270 in ratio 1:2:3 => X = 45, Y = 90, Z = 135. Quota = 19.\nInitially seats: X = 2 (38 MLAs, 7 left), Y = 4 (76 MLAs, 14 left), Z = 7 (133 MLAs, 2 left). Total 13 seats filled, 1 seat remaining.\nTo gain majority (8 out of 14 seats), Party Z needs 1 more seat (19 MLAs). Total remaining MLAs = 7 + 14 + 2 = 23.\nZ can secure the needed votes through cross-voting involving X & Y, Y & Z, or all X, Y, and Z. Thus all three statements could be true.',
    },
  },
  {
    id: 30,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 30 to 34: Answer the questions on the basis of the information given below.',
    passageText: dilrContextSet2,
    tableData: {
      headers: ['Student', 'Arko', 'Barkha', 'Chiku', 'Diksha', 'Esha', 'Farukh', 'Total'],
      rows: [['Amount (Rs.)', 360, 600, 420, 600, 240, 480, 2700]],
    },
    questionText: 'If the average amount per student in a group of three students is Rs.560, then which of the following represents students who are not in the group?',
    options: [
      { id: 1, text: 'Arko, Diksha, Farukh' },
      { id: 2, text: 'Arko, Chiku, Esha' },
      { id: 3, text: 'Chiku, Diksha, Esha' },
      { id: 4, text: 'Barkha, Diksha, Farukh' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Total amount of group of 3 = 560 × 3 = Rs. 1,680.\nThe only three students summing to 1680 are Barkha (600) + Diksha (600) + Farukh (480) = 1,680.\nTherefore, the remaining students not in the group are Arko (360), Chiku (420), and Esha (240).',
    },
  },
  {
    id: 31,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 30 to 34: Banking Roleplay Simulation.',
    passageText: dilrContextSet2,
    questionText: 'If Arko, Chiku and Farukh invest their total amounts in a business venture and the profit at the end of the year is Rs.357, then find Farukh’s share in the profit (in Rs.).',
    correctAnswer: '136',
    solution: {
      explanation: 'Investments: Arko = 360, Chiku = 420, Farukh = 480.\nRatio = 360 : 420 : 480 = 6 : 7 : 8.\nSum of ratio terms = 6 + 7 + 8 = 21.\nFarukh\'s share = (8 / 21) × 357 = 8 × 17 = Rs. 136.',
    },
  },
  {
    id: 32,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 30 to 34: Banking Roleplay Simulation.',
    passageText: dilrContextSet2,
    questionText: 'If Chiku and Farukh together invested their total amount at 10% per annum Compound interest, then what will be the total amount (in Rs.) with them at the end of 2 years?',
    correctAnswer: '1089',
    solution: {
      explanation: 'Principal = Chiku (420) + Farukh (480) = Rs. 900.\nCompound amount at 10% p.a. for 2 years = 900 × (1 + 10/100)^2 = 900 × 1.21 = Rs. 1,089.',
    },
  },
  {
    id: 33,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 30 to 34: Banking Roleplay Simulation.',
    passageText: dilrContextSet2,
    questionText: 'Which of the following statements is/are NOT TRUE?\nI. Barkha and Diksha have equal amounts.\nII. Esha has half the amount that Farukh has.\nIII. Three of them have amounts more than Rs.500',
    options: [
      { id: 1, text: 'I only' },
      { id: 2, text: 'Both I & II' },
      { id: 3, text: 'III only' },
      { id: 4, text: 'All of them' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Barkha = 600 and Diksha = 600, so I is TRUE.\nEsha = 240 and Farukh = 480 (240 = 480/2), so II is TRUE.\nOnly Barkha and Diksha have amounts > Rs.500 (exactly two students), so statement III is NOT TRUE.',
    },
  },
  {
    id: 34,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 30 to 34: Banking Roleplay Simulation.',
    passageText: dilrContextSet2,
    questionText: 'If Arko, Barkha and Chiku invest their total amount at 11% per annum simple interest for a period of ‘n’ years, then at what rate of simple interest should Diksha, Esha and Farukh invest their total amount to get the same interest at the end of ‘n’ years?',
    options: [
      { id: 1, text: '10%' },
      { id: 2, text: '10.5%' },
      { id: 3, text: '11.5%' },
      { id: 4, text: '12%' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Amount with Arko + Barkha + Chiku = 360 + 600 + 420 = Rs. 1,380.\nAmount with Diksha + Esha + Farukh = 600 + 240 + 480 = Rs. 1,320.\nInterest equality: [1380 × 11 × n] / 100 = [1320 × r × n] / 100\n=> r = (1380 × 11) / 1320 = 15180 / 1320 = 11.5%.',
    },
  },
  {
    id: 35,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 35 to 39: Answer the questions on the basis of the information given below.',
    passageText: dilrContextSet3,
    questionText: 'Which runners finished first in the three races?',
    options: [
      { id: 1, text: 'Barun, Arun, Chandan' },
      { id: 2, text: 'Barun, Chandan, Dharam' },
      { id: 3, text: 'Barun, Chandan, Harman' },
      { id: 4, text: 'Barun, Arun, Harman' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'From the deduction table:\n100m race winner: Barun (Position 1)\n200m race winner: Arun (Position 1)\n400m race winner: Harman (Position 1).\nHence, Barun, Arun, and Harman finished first.',
    },
  },
  {
    id: 36,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 35 to 39: Athletics Meet 8 Runners.',
    passageText: dilrContextSet3,
    questionText: 'What position did Farhan finish in 400 m race?',
    correctAnswer: '6',
    solution: {
      explanation: 'In the 400m race, the positions are: Harman (1st), Chandan (2nd), Govind (3rd), Dharam (4th), Ezhil (5th), Farhan (6th), Arun (7th), Barun (8th).\nFarhan finished in position 6.',
    },
  },
  {
    id: 37,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 35 to 39: Athletics Meet 8 Runners.',
    passageText: dilrContextSet3,
    questionText: 'Which of the following statements is/are TRUE?\nI. The first three positions for all races can be uniquely determined.\nII. Exactly 3 runners never have a top 3 finish.',
    options: [
      { id: 1, text: 'I only' },
      { id: 2, text: 'II only' },
      { id: 3, text: 'Both I & II' },
      { id: 4, text: 'Neither I nor II' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'In 100m, top 3 are Barun, Govind, Chandan (unique).\nIn 200m, top 3 are Arun, Barun, Dharam (unique).\nIn 400m, top 3 are Harman, Chandan, Govind (unique).\nThus, statement I is TRUE. Statement II is false as Ezhil and Farhan never have top 3 finishes (only 2 runners).',
    },
  },
  {
    id: 38,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 35 to 39: Athletics Meet 8 Runners.',
    passageText: dilrContextSet3,
    questionText: 'Which of the following runners can finish last in a race?',
    options: [
      { id: 1, text: 'Dharam' },
      { id: 2, text: 'Ezhil' },
      { id: 3, text: 'Chandan' },
      { id: 4, text: 'Govind' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'In the 200m race, Chandan and Harman can swap positions 6 and 8. Thus, Chandan can finish 8th (last) in the 200m race.',
    },
  },
  {
    id: 39,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 35 to 39: Athletics Meet 8 Runners.',
    passageText: dilrContextSet3,
    questionText: 'What can be the maximum sum of Harman’s positions across all three races?',
    correctAnswer: '13',
    solution: {
      explanation: 'Harman\'s finishes: 100m = 4th, 400m = 1st. In 200m, his finish can be 6th or 8th.\nTo maximize the sum, pick 8th in 200m.\nMaximum sum = 4 + 8 + 1 = 13.',
    },
  },
  {
    id: 40,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 40 to 44: Answer the questions on the basis of the information given below.',
    passageText: dilrContextSet4,
    questionText: 'As per original ranks, what was the absolute difference between the sum of scores in 3 tests obtained by highest and lowest scorer?',
    correctAnswer: '52',
    solution: {
      explanation: 'As per original ranks:\nHighest total score = Aman: 85 (T1) + 92 (T2) + 86 (T3) = 263 marks.\nLowest total score = Fiza: 73 (T1) + 66 (T2) + 72 (T3) = 211 marks.\nAbsolute difference = 263 - 211 = 52.',
    },
  },
  {
    id: 41,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 40 to 44: Re-evaluation of Test 3.',
    passageText: dilrContextSet4,
    questionText: 'As per the original ranks, what is the absolute difference between the maximum and minimum possible score of the eight students combined in Test 3?',
    correctAnswer: '10',
    solution: {
      explanation: 'Scores fixed: Dev (87), Aman (86), Fiza (72), Eshan (71), Hema (70).\nVariable scores: Bheem (80 to 85), Gunjan (79 to 83), Jasbir (73 to 74).\nMaximum sum = 87 + 86 + 85 + 83 + 74 + 72 + 71 + 70 = 628.\nMinimum sum = 87 + 86 + 80 + 79 + 73 + 72 + 71 + 70 = 618.\nAbsolute difference = 628 - 618 = 10.',
    },
  },
  {
    id: 42,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 40 to 44: Re-evaluation of Test 3.',
    passageText: dilrContextSet4,
    questionText: 'Which of the following can be the student who didn\'t send the Test 3 for re-evaluation?',
    options: [
      { id: 1, text: 'Gunjan' },
      { id: 2, text: 'Bheem' },
      { id: 3, text: 'Fiza' },
      { id: 4, text: 'Eshan' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Gunjan, Bheem, Eshan, and Jasbir definitely changed ranks, meaning they sent their papers for re-evaluation. Either Fiza or Hema did not send, so Fiza can be the student who did not send.',
    },
  },
  {
    id: 43,
    section: 'LRDI',
    type: 'MCQ',
    contextHeader: 'Directions for questions 40 to 44: Re-evaluation of Test 3.',
    passageText: dilrContextSet4,
    questionText: 'After re-evaluation, maximum how many students had the increase in their marks?',
    options: [
      { id: 1, text: '2' },
      { id: 2, text: '3' },
      { id: 3, text: '4' },
      { id: 4, text: '5' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Out of the 5 students who sent papers, Bheem\'s rank fell from 3 to 4, so his marks decreased. Therefore, at most 4 students (Gunjan, Eshan, Jasbir, and Hema/Fiza) could have had an increase in marks.',
    },
  },
  {
    id: 44,
    section: 'LRDI',
    type: 'TITA',
    contextHeader: 'Directions for questions 40 to 44: Re-evaluation of Test 3.',
    passageText: dilrContextSet4,
    questionText: 'After re-evaluation, what can be maximum increase or decrease in a student\'s marks in Test 3?',
    correctAnswer: '5',
    solution: {
      explanation: 'Bheem originally could score up to 85 marks, and after re-evaluation his score could become 80 marks. The maximum shift is 85 - 80 = 5 marks.',
    },
  },
];

// ==========================================
// QA QUESTIONS (Q.45 to Q.66)
// ==========================================

export const openCdc1QaQuestions: QuestionData[] = [
  {
    id: 45,
    section: 'QA',
    type: 'TITA',
    questionText: 'If \'a\' and \'b\' are positive numbers such that log_a(5a^3 + 24) = 6 and 4/log_a(b) - 1 = 0, then what is the value of (a + b)?',
    correctAnswer: '18',
    solution: {
      explanation: 'log_a(5a^3 + 24) = 6 => 5a^3 + 24 = a^6.\nLet k = a^3. Then k^2 - 5k - 24 = 0 => (k - 8)(k + 3) = 0.\nSince a > 0, k = 8 => a^3 = 8 => a = 2.\nNext, 4/log_a(b) - 1 = 0 => log_a(b) = 4 => b = a^4 = 2^4 = 16.\nHence, a + b = 2 + 16 = 18.',
    },
  },
  {
    id: 46,
    section: 'QA',
    type: 'MCQ',
    questionText: 'If √(3x + 1) + √(3x - 1) = √2(1 + √2), then the value of √(5x + 7) is:',
    options: [
      { id: 1, text: '3√2' },
      { id: 2, text: '2√3' },
      { id: 3, text: '4√3' },
      { id: 4, text: '√17' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Notice that √2(1 + √2) = √2 + 2 = √2 + √4.\nComparing √(3x + 1) + √(3x - 1) with √4 + √2:\n3x + 1 = 4 => 3x = 3 => x = 1.\nCheck: 3(1) - 1 = 2, so √(2), matches perfectly!\nTherefore, √(5x + 7) = √(5(1) + 7) = √12 = 2√3.',
    },
  },
  {
    id: 47,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The sum of the roots of the equation 9(x - 1)^2 - 18|x - 1| + 5 = 0, is:',
    options: [
      { id: 1, text: '0' },
      { id: 2, text: '4/3' },
      { id: 3, text: '8/3' },
      { id: 4, text: '4' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'Let t = |x - 1| >= 0. The equation is 9t^2 - 18t + 5 = 0.\n(3t - 1)(3t - 5) = 0 => t = 1/3 or t = 5/3.\nCase 1: |x - 1| = 1/3 => x - 1 = ±1/3 => x = 4/3, 2/3 (sum = 2).\nCase 2: |x - 1| = 5/3 => x - 1 = ±5/3 => x = 8/3, -2/3 (sum = 2).\nTotal sum of all four roots = 2 + 2 = 4.',
    },
  },
  {
    id: 48,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The times taken individually by Amit, Beena, and Chahal to complete a piece of work are in arithmetic progression in this order. Chahal takes 1.5 times as long as Amit to finish the same work. Amit works for 6 days, Beena works for 10 days, and Chahal needs 3 days to complete the remaining work. What is the difference between the number of days Amit alone and Beena alone will take to complete the work?',
    options: [
      { id: 1, text: '3' },
      { id: 2, text: '4' },
      { id: 3, text: '6' },
      { id: 4, text: '8' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Let times be A, B, C. In AP => B = (A + C)/2.\nGiven C = 1.5A => B = (A + 1.5A)/2 = 1.25A.\nRatio of times A : B : C = 1 : 1.25 : 1.5 = 4 : 5 : 6.\nWork per day: 1/4k, 1/5k, 1/6k.\nWork done: 6/(4k) + 10/(5k) + 3/(6k) = 1 => 1.5/k + 2/k + 0.5/k = 4/k = 1 => k = 4.\nTherefore, A = 16 days, B = 20 days, C = 24 days.\nDifference between B and A = 20 - 16 = 4 days.',
    },
  },
  {
    id: 49,
    section: 'QA',
    type: 'TITA',
    questionText: 'Let A_n and B_n be two sequences such that A_n = 11 + 8(n - 1) and B_n = 13 + 9(n - 1) for all natural numbers n ≤ 500. Then, find the largest integer common to both these sequences.',
    correctAnswer: '3955',
    solution: {
      explanation: 'A_n = 8n + 3; B_m = 9m + 4.\n8n + 3 = 9m + 4 => 8n - 9m = 1.\nSmallest positive solution: m = 7, n = 8 => First common term = 8(8) + 3 = 67.\nCommon difference = LCM(8, 9) = 72.\nCommon terms are 67 + 72k.\nMax term for n = 500: A_500 = 11 + 8(499) = 4003; B_500 = 13 + 9(499) = 4504.\n67 + 72k ≤ 4003 => 72k ≤ 3936 => k ≤ 54.66 => max integer k = 54.\nLargest common integer = 67 + 72(54) = 67 + 3888 = 3955.',
    },
  },
  {
    id: 50,
    section: 'QA',
    type: 'MCQ',
    diagramType: 'hexagon_geom',
    questionText: 'Let ΔABC be an equilateral triangle. D, E, F are points on the sides such that BD : DC = CE : EA = AF : FB = 2 : 1. If the area of ΔABC is 315 sq. cm, then what is the area (in sq. cm) of the triangle bounded by AD, BE, and CF?',
    options: [
      { id: 1, text: '15' },
      { id: 2, text: '30' },
      { id: 3, text: '45' },
      { id: 4, text: '60' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'By Routh\'s Theorem (or Cevian area dissection for ratio 2:1 on sides of equilateral triangle):\nArea ratio = (2 - 1)^3 / [(2^3 + 1^3) + (2 × 1 × 3) + ...] or by triangular dissection with 21 parts: Area(inner) / Area(total) = 1/7.\nArea of inner triangle = 315 / 7 = 45 sq. cm.',
    },
  },
  {
    id: 51,
    section: 'QA',
    type: 'TITA',
    questionText: 'In square ABCD, points E and F lie on AD and AB, respectively. BE and CF intersect at right angles at G, such that BG = 12 cm and EG = 14 cm. If GC > FG, what is the area (in sq. cm) of the square?',
    correctAnswer: '468',
    solution: {
      explanation: 'ΔAEB is congruent to ΔBFC. So BE = CF = 12 + 14 = 26 cm.\nLet GC = x, then FG = 26 - x.\nIn right triangle ΔBCF, BG is perpendicular to CF. By geometric altitude theorem:\nBG^2 = FG × GC => 12^2 = (26 - x)x => x^2 - 26x + 144 = 0 => (x - 18)(x - 8) = 0.\nSince GC > FG, x = 18 cm.\nSide squared BC^2 = BG^2 + GC^2 = 12^2 + 18^2 = 144 + 324 = 468 sq. cm.\nArea of square ABCD = 468 sq. cm.',
    },
  },
  {
    id: 52,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Ravi and Sonu bought a variety of fresh apples and oranges from the market. Spending the same amount of money as Ravi, Sonu purchased three times as many oranges and 12 less apples than Ravi. If the cost of one apple is Rs. 6 more than the cost of one orange, what is the minimum possible number of oranges bought by Ravi and Sonu together?',
    options: [
      { id: 1, text: '20' },
      { id: 2, text: '24' },
      { id: 3, text: '28' },
      { id: 4, text: '32' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Let price of orange = p, apple = p + 6.\nRavi: x oranges, y apples => Cost = px + (p + 6)y.\nSonu: 3x oranges, y - 12 apples => Cost = 3px + (p + 6)(y - 12).\npx + py + 6y = 3px + py - 12p + 6y - 72 => 2px = 12p + 72 => 2p(x - 6) = 72 => p(x - 6) = 36.\nFor integer oranges x > 6. Minimum integer x occurs when (x - 6) is a positive integer factor of 36.\nMinimum value of x is 7 (so p = 36).\nTotal oranges bought = x + 3x = 4x = 4 × 7 = 28.',
    },
  },
  {
    id: 53,
    section: 'QA',
    type: 'TITA',
    questionText: 'Rajesh borrowed 80 books from library A and some books from library B. Some books are of Hindi language while some are of other regional languages. Number of books in regional languages are atmost 200 and equal to 1.25 times the books in library B. If atmost 70% of books from library A were in regional languages, then maximum how many books of Hindi language were from Library B?',
    correctAnswer: '44',
    solution: {
      explanation: 'Let books in library B = 4x. Regional books = 1.25 × 4x = 5x.\nRegional books in A <= 80 × 0.70 = 56.\nTo maximize Hindi books in B, assume all regional books come from A, meaning 0 regional books in B (all 4x books in B are Hindi).\n5x <= 56 => maximum integer x = 11.\nMaximum Hindi books in library B = 4x = 4 × 11 = 44.',
    },
  },
  {
    id: 54,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The product of the two-digit number a4 and the three-digit number 3bc is 7656. What is the average of a, b and c? (a, b, c are digits)',
    options: [
      { id: 1, text: '3' },
      { id: 2, text: '4' },
      { id: 3, text: '5' },
      { id: 4, text: '6' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Factorize 7656 = 8 × 3 × 11 × 29 = 24 × 319.\nHere two-digit number ending in 4 is 24 (so a = 2), and three-digit number starting with 3 is 319 (so b = 1, c = 9).\nCheck: 24 × 319 = 7656.\nAverage of digits = (a + b + c) / 3 = (2 + 1 + 9) / 3 = 12 / 3 = 4.',
    },
  },
  {
    id: 55,
    section: 'QA',
    type: 'MCQ',
    questionText: 'The mean of a set of 11 positive integers is 77. Their median is 80 while the only mode is 85. If the mean of smallest five integers of this set is 69, then what can be the maximum possible integer in the set?',
    options: [
      { id: 1, text: '87' },
      { id: 2, text: '88' },
      { id: 3, text: '89' },
      { id: 4, text: '90' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Total sum = 11 × 77 = 847.\nSmallest 5 sum = 5 × 69 = 345.\nMedian (6th integer) = 80.\nTo maximize 11th integer (a11), minimize a7, a8, a9, a10.\nSince mode is 85 (only mode), 85 must appear at least twice. Let a9 = a10 = 85.\na7 and a8 must be distinct integers > 80: minimum a7 = 81, a8 = 82.\nSum of first 10 integers = 345 + 80 + 81 + 82 + 85 + 85 = 758.\nMaximum a11 = 847 - 758 = 89.',
    },
  },
  {
    id: 56,
    section: 'QA',
    type: 'TITA',
    questionText: 'Let M and m be the maximum and minimum value of n^3 – 3n such that n^4 – 10n^2 + 9 ≤ 0. What is the value of M – m?',
    correctAnswer: '36',
    solution: {
      explanation: 'n^4 - 10n^2 + 9 <= 0 => (n^2 - 1)(n^2 - 9) <= 0 => 1 <= n^2 <= 9.\nThus n ∈ [-3, -1] ∪ [1, 3].\nf(n) = n^3 - 3n => f\'(n) = 3n^2 - 3 = 3(n^2 - 1) >= 0 on this domain.\nSo f is non-decreasing on each interval.\nMax M = f(3) = 27 - 9 = 18.\nMin m = f(-3) = -27 + 9 = -18.\nM - m = 18 - (-18) = 36.',
    },
  },
  {
    id: 57,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Aman and Babli run around a circular track of length L metres. Aman and Babli run at constant, but different speeds. They start from diametrically opposite points such that Aman runs clockwise around the track and Babli runs counterclockwise. They meet for the first time after Aman has run 100 metres and for the second time after Babli runs 150 metres past their first meeting point. What is the value of L?',
    options: [
      { id: 1, text: '300' },
      { id: 2, text: '350' },
      { id: 3, text: '360' },
      { id: 4, text: '420' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Starting diametrically opposite, they cover L/2 combined for the 1st meeting.\nAman runs 100m => Babli runs L/2 - 100m.\nSpeed ratio a/b = 100 / (L/2 - 100).\nBetween 1st and 2nd meetings, they cover a full lap L combined.\nBabli runs 150m => Aman runs L - 150m.\nSpeed ratio a/b = (L - 150) / 150.\nEquating: 100 / (L/2 - 100) = (L - 150) / 150 => 15000 = (L - 150)(L/2 - 100)\n=> 30000 = (L - 150)(L - 200) = L^2 - 350L + 30000 => L^2 - 350L = 0 => L = 350 m.',
    },
  },
  {
    id: 58,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Rahul steals 4 mangoes for every dozen whenever he purchases them from a farmer and his customers steal 2 mangoes for every dozen whenever they purchase the mangoes from Rahul. What is the profit or loss percentage of Rahul, if he marks a dozen at 25% above the price that is offered by the farmer and offers a discount of 9%?',
    options: [
      { id: 1, text: '16% profit' },
      { id: 2, text: '9.04% loss' },
      { id: 3, text: 'No profit, no loss' },
      { id: 4, text: '30% profit' },
    ],
    correctAnswer: '4',
    solution: {
      explanation: 'Cost per mango for Rahul: He pays for 12 but gets 16. CP = 12 / 16 = 0.75 of farmer\'s price.\nSelling: Customer pays for 12, takes 14. Marked price = 1.25. After 9% discount = 1.25 × 0.91 = 1.1375 per dozen.\nEffective SP per mango = 1.1375 / 14 = 0.08125.\nComparing overall revenue: for 1 mango, SP/CP = (16/12) × (12/14) × 1.25 × 0.91 = (16/14) × 1.1375 = 1.30.\nProfit percentage = (1.30 - 1) × 100 = 30% profit.',
    },
  },
  {
    id: 59,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Captain Arjun Dev borrowed Rs.10 lakh from a nationalized bank at 6% per annum simple interest for 10 years. The bank came up with a scheme for armed forces personnel ‘t’ years later, thereby decreasing the rate of interest by 2 percentage points. In this way Arjun Dev had to pay a total amount of Rs.14.8 lakh. If he had received the same discount ‘t – 2’ years after he borrowed the amount, by how much would his interest (in Rs.) have decreased?',
    options: [
      { id: 1, text: '45,000' },
      { id: 2, text: '40,000' },
      { id: 3, text: '44,000' },
      { id: 4, text: '48,000' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Total interest paid = 14.8 - 10 = Rs. 4.8 lakh = 480,000.\n1,000,000 × 0.06 × t + 1,000,000 × 0.04 × (10 - t) = 480,000\n=> 60,000t + 400,000 - 40,000t = 480,000 => 20,000t = 80,000 => t = 4 years.\nIf discount started 2 years earlier (at t - 2 = 2 years), he gets 2 extra years at the lower 4% rate instead of 6%.\nInterest decrease = 1,000,000 × (6% - 4%) × 2 = 1,000,000 × 0.02 × 2 = Rs. 40,000.',
    },
  },
  {
    id: 60,
    section: 'QA',
    type: 'TITA',
    questionText: 'Let f(p, q) be a real-valued function such that f(p + 3q, 3p – 4q) = 13p, for all real numbers p and q. The value of p for which f(p/4, p/3) = 10, is:',
    correctAnswer: '5',
    solution: {
      explanation: 'Let u = p + 3q and v = 3p - 4q.\nNotice: 4u + 3v = 4(p + 3q) + 3(3p - 4q) = 4p + 12q + 9p - 12q = 13p.\nTherefore, f(u, v) = 4u + 3v for all u, v!\nThen f(p/4, p/3) = 4(p/4) + 3(p/3) = p + p = 2p.\nGiven 2p = 10 => p = 5.',
    },
  },
  {
    id: 61,
    section: 'QA',
    type: 'MCQ',
    questionText: 'A vessel contains a mixture of milk and water in the respective ratio of 5 : 1. 18 liters of mixture was taken out and replaced with the same quantity of milk so that the resultant ratio between the quantities of milk and water in the mixture becomes 7 : 1 respectively. If 28 liters of the mixture is again taken out from the vessel, what is the quantity (in liters) of water that should be added to make the quantity of milk 70% in the mixture?',
    options: [
      { id: 1, text: '9' },
      { id: 2, text: '10' },
      { id: 3, text: '11' },
      { id: 4, text: '12' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Initial milk = 5x, water = x. Total = 6x.\n18L removed => 15L milk and 3L water removed. Replaced with 18L milk.\nNew milk = 5x - 15 + 18 = 5x + 3; water = x - 3.\n(5x + 3) / (x - 3) = 7 / 1 => 5x + 3 = 7x - 21 => 2x = 24 => x = 12.\nTotal volume = 6 × 12 = 72L (milk = 63L, water = 9L, ratio 7:1).\nRemove 28L => 72 - 28 = 44L remaining.\nMilk remaining = 44 × (7/8) = 38.5L.\nDesired: milk is 70% => 38.5 / (44 + y) = 0.70 => 44 + y = 38.5 / 0.7 = 55 => y = 11 liters.',
    },
  },
  {
    id: 62,
    section: 'QA',
    type: 'MCQ',
    diagramType: 'circle_geom',
    questionText: 'A trapezium ABCD is inscribed in a circle of radius 17 cm. Sides AB and CD are parallel, and the perpendicular distance between them is 23 cm. If AB = 16 cm, then what is the area (in sq. cm) of the trapezium ABCD?',
    options: [
      { id: 1, text: '529' },
      { id: 2, text: '523' },
      { id: 3, text: '519' },
      { id: 4, text: '509' },
    ],
    correctAnswer: '1',
    solution: {
      explanation: 'Distance of chord AB from center: Half-chord = 16/2 = 8 cm.\nd1 = √(17^2 - 8^2) = √(289 - 64) = √225 = 15 cm.\nSince total distance between parallel chords is 23 cm, the chords lie on opposite sides of the center: d2 = 23 - 15 = 8 cm.\nHalf of chord CD = √(17^2 - 8^2) = 15 cm => CD = 30 cm.\nArea of trapezium = (1/2) × (AB + CD) × height = (1/2) × (16 + 30) × 23 = 23 × 23 = 529 sq. cm.',
    },
  },
  {
    id: 63,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Some rowers in a boat row up a stream flowing at 5 km/h. At their destination, one-third of the rowers were too tired to row on the return journey. Despite this, the time taken on the return leg was the same. If each rower contributed 1 km/h of speed, what was the length (in km) of the stream given that the entire journey took 4 hours?',
    options: [
      { id: 1, text: '25' },
      { id: 2, text: '35' },
      { id: 3, text: '50' },
      { id: 4, text: '60' },
    ],
    correctAnswer: '3',
    solution: {
      explanation: 'Let initial number of rowers be 3x. Upstream speed = 3x - 5.\nReturn leg (downstream): 2x rowers remain. Downstream speed = 2x + 5.\nSince times are equal: 3x - 5 = 2x + 5 => x = 10 rowers.\nSpeed on both legs = 3(10) - 5 = 25 km/h.\nEach leg took 4 / 2 = 2 hours.\nLength of stream = 25 km/h × 2 h = 50 km.',
    },
  },
  {
    id: 64,
    section: 'QA',
    type: 'TITA',
    questionText: 'The roots of x^2 + 11x + 3 = 0 are m and n and the roots of x^2 + Bx – C = 0 are m + 1 and n + 1. What is the value of C?',
    correctAnswer: '7',
    solution: {
      explanation: 'For x^2 + 11x + 3 = 0: m + n = -11, mn = 3.\nNew roots are m + 1 and n + 1.\nProduct of new roots = (m + 1)(n + 1) = mn + (m + n) + 1 = 3 + (-11) + 1 = -7.\nIn x^2 + Bx - C = 0, product of roots is -C.\nSo -C = -7 => C = 7.',
    },
  },
  {
    id: 65,
    section: 'QA',
    type: 'TITA',
    questionText: 'In a school, the ratio of students in three sections A, B and C is 17 : 13 : 15. Due to the Inter-School competition, some new students were added to sections A and C. As a result, the ratio of the students of sections A, B and C becomes 14 : 10 : 23. What is the minimum possible number of students that were there in the three sections initially?',
    correctAnswer: '450',
    solution: {
      explanation: 'Initial students: A = 17x, B = 13x, C = 15x.\nNew students: A = 14y, B = 10y, C = 23y.\nNo students added to section B => 13x = 10y => x/y = 10/13.\nTo minimize students, positive integers x and y must be minimized: x = 10, y = 13.\nInitial total students = (17 + 13 + 15) × x = 45 × 10 = 450 students.',
    },
  },
  {
    id: 66,
    section: 'QA',
    type: 'MCQ',
    questionText: 'Let ‘x’ and ‘y’ be real numbers such that |x – y| + 3x – y = 70, and |y – x| + 3y + x = 50. Then, the possible value of (x + 2y)/5 is:',
    options: [
      { id: 1, text: '3' },
      { id: 2, text: '6' },
      { id: 3, text: '12' },
      { id: 4, text: '18' },
    ],
    correctAnswer: '2',
    solution: {
      explanation: 'Case 1: x >= y.\n|x - y| = x - y.\nEq 1: (x - y) + 3x - y = 70 => 4x - 2y = 70 => 2x - y = 35.\nEq 2: (x - y) + 3y + x = 50 => 2x + 2y = 50 => x + y = 25.\nAdding: 3x = 60 => x = 20, y = 5. (Satisfies x >= y).\nThen (x + 2y) / 5 = (20 + 2(5)) / 5 = 30 / 5 = 6.\nCase 2: x < y yields y = 25/2, x = 35 which contradicts x < y.\nTherefore, the possible value is 6.',
    },
  },
];

export const OPEN_CDC_1_QUESTIONS: QuestionData[] = [
  ...openCdc1VarcQuestions,
  ...openCdc1LrdiQuestions,
  ...openCdc1QaQuestions,
];
