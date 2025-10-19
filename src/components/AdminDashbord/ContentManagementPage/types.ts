

// types.ts

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Status = 'Published' | 'Drafted';
export type Category = 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Grammar' | 'Vocabulary';

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  cards: number;
  difficulty: Difficulty;
  category: Category;
  status: Status;
  lastModified: string; // Date string
}

export interface Stats {
  totalDecks: number;
  publishedLessons: number;
  totalFlashcards: number;
  contentViews: number;
}

export const mockStats: Stats = {
  totalDecks: 127,
  publishedLessons: 43,
  totalFlashcards: 3284,
  contentViews: 45231,
};

export const mockDecks: ContentItem[] = [
  { id: 1, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 2, title: 'Intermediate Verbs', description: 'Common verb conjugations', cards: 40, difficulty: 'Intermediate', category: 'Grammar', status: 'Published', lastModified: '25/09/2025' },
  { id: 3, title: 'Advanced Idioms', description: 'Idiomatic expressions for fluency', cards: 15, difficulty: 'Advanced', category: 'Speaking', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 4, title: 'Writing Practice', description: 'Prompts and vocabulary', cards: 20, difficulty: 'Intermediate', category: 'Writing', status: 'Published', lastModified: '25/09/2025' },
  { id: 5, title: 'Basic Listening', description: 'Phrases for basic listening tests', cards: 30, difficulty: 'Beginner', category: 'Listening', status: 'Drafted', lastModified: '25/09/2025' },
];

export const mockLessons: ContentItem[] = [
  { id: 101, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 102, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Intermediate', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 103, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 15, difficulty: 'Beginner', category: 'Reading', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 104, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 35, difficulty: 'Advanced', category: 'Writing', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 105, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Listening', status: 'Published', lastModified: '25/09/2025' },
];














// // types.ts

// export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
// export type Status = 'Published' | 'Drafted';
// export type Category = 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Grammar' | 'Vocabulary';

// export interface FlashcardDeck {
//   id: number;
//   title: string;
//   description: string;
//   cards: number;
//   difficulty: Difficulty;
//   category: Category;
//   status: Status;
//   lastModified: string; // Date string
// }

// export interface Stats {
//   totalDecks: number;
//   publishedLessons: number;
//   totalFlashcards: number;
//   contentViews: number;
// }

// export const mockStats: Stats = {
//   totalDecks: 127,
//   publishedLessons: 43,
//   totalFlashcards: 3284,
//   contentViews: 45231,
// };

// export const mockDecks: FlashcardDeck[] = [
//   { id: 1, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
//   { id: 2, title: 'Intermediate Verbs', description: 'Common verb conjugations in present tense', cards: 40, difficulty: 'Intermediate', category: 'Grammar', status: 'Published', lastModified: '25/09/2025' },
//   { id: 3, title: 'Advanced Idioms', description: 'Italian idiomatic expressions for fluency', cards: 15, difficulty: 'Advanced', category: 'Speaking', status: 'Drafted', lastModified: '25/09/2025' },
//   { id: 4, title: 'Travel Vocabulary', description: 'Words and phrases for travel situations', cards: 50, difficulty: 'Beginner', category: 'Vocabulary', status: 'Published', lastModified: '25/09/2025' },
//   { id: 5, title: 'Writing Practice Deck', description: 'Prompts and vocabulary for writing emails', cards: 20, difficulty: 'Intermediate', category: 'Writing', status: 'Published', lastModified: '25/09/2025' },
//   { id: 6, title: 'Listening Comprehension 1', description: 'Phrases for basic listening tests', cards: 30, difficulty: 'Beginner', category: 'Listening', status: 'Drafted', lastModified: '25/09/2025' },
// ];