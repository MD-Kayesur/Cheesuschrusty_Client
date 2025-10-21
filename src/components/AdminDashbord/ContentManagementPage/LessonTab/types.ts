export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Status = 'Published' | 'Drafted';
export type Category =
  | 'Reading'
  | 'Writing'
  | 'Listening'
  | 'Speaking'
  | 'Grammar'
  | 'Vocabulary';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  cards: number;
  difficulty: Difficulty;
  category: Category;
  status: Status;
  lastModified: string;
}

// Alias for backward compatibility
export type ContentItem = Lesson;

// Example mock data
export const mockLessons: Lesson[] = [
  {
    id: '101',
    title: 'Basic Italian Greetings',
    description: 'Essential greetings and polite expressions',
    cards: 25,
    difficulty: 'Beginner',
    category: 'Reading',
    status: 'Published',
    lastModified: '25/09/2025',
  },
  {
    id: '102',
    title: 'Ordering Food in Italian',
    description: 'Common restaurant phrases and interactions',
    cards: 20,
    difficulty: 'Beginner',
    category: 'Speaking',
    status: 'Published',
    lastModified: '26/09/2025',
  },
  {
    id: '103',
    title: 'Everyday Conversations',
    description: 'Short dialogues and practical phrases',
    cards: 30,
    difficulty: 'Intermediate',
    category: 'Listening',
    status: 'Drafted',
    lastModified: '27/09/2025',
  },
  {
    id: '104',
    title: 'Advanced Writing Practice',
    description: 'Compose formal letters and essays in Italian',
    cards: 35,
    difficulty: 'Advanced',
    category: 'Writing',
    status: 'Drafted',
    lastModified: '28/09/2025',
  },
];














// // types.ts

// // -----------------------------
// // Basic Type Definitions
// // -----------------------------

// export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
// export type Status = 'Published' | 'Drafted';
// export type Category = 
//   | 'Reading' 
//   | 'Writing' 
//   | 'Listening' 
//   | 'Speaking' 
//   | 'Grammar' 
//   | 'Vocabulary';

// // -----------------------------
// // Main Lesson Interface
// // -----------------------------
// export interface Lesson {
//   id: number;
//   title: string;
//   description: string;
//   cards: number; // Number of items or flashcards in the lesson
//   difficulty: Difficulty;
//   category: Category;
//   status: Status;
//   lastModified: string; // Date string (e.g., "25/09/2025")
// }

// // Optional alias to support older code references
// export type ContentItem = Lesson;

// // -----------------------------
// // Mock Lessons Data
// // -----------------------------
// export const mockLessons: Lesson[] = [
//   { 
//     id: 101, 
//     title: 'Basic Italian Greetings', 
//     description: 'Essential greetings and polite expressions', 
//     cards: 25, 
//     difficulty: 'Beginner', 
//     category: 'Reading', 
//     status: 'Published', 
//     lastModified: '25/09/2025' 
//   },
//   { 
//     id: 102, 
//     title: 'Ordering Food in Italian', 
//     description: 'Common restaurant phrases and interactions', 
//     cards: 20, 
//     difficulty: 'Beginner', 
//     category: 'Speaking', 
//     status: 'Published', 
//     lastModified: '26/09/2025' 
//   },
//   { 
//     id: 103, 
//     title: 'Italian Numbers & Counting', 
//     description: 'Learn numbers and counting up to 100', 
//     cards: 18, 
//     difficulty: 'Beginner', 
//     category: 'Vocabulary', 
//     status: 'Drafted', 
//     lastModified: '27/09/2025' 
//   },
//   { 
//     id: 104, 
//     title: 'Everyday Conversations', 
//     description: 'Short dialogues and practical phrases', 
//     cards: 30, 
//     difficulty: 'Intermediate', 
//     category: 'Listening', 
//     status: 'Published', 
//     lastModified: '28/09/2025' 
//   },
//   { 
//     id: 105, 
//     title: 'Italian Grammar Basics', 
//     description: 'Introduction to nouns, verbs, and adjectives', 
//     cards: 40, 
//     difficulty: 'Intermediate', 
//     category: 'Grammar', 
//     status: 'Drafted', 
//     lastModified: '29/09/2025' 
//   },
//   { 
//     id: 106, 
//     title: 'Advanced Writing Practice', 
//     description: 'Compose formal letters and essays in Italian', 
//     cards: 35, 
//     difficulty: 'Advanced', 
//     category: 'Writing', 
//     status: 'Drafted', 
//     lastModified: '30/09/2025' 
//   },
// ];









// // types.ts (Update or create this file with the following)

// // Re-using types from the previous request:
// export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
// export type Status = 'Published' | 'Drafted';
// export type Category = 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Grammar' | 'Vocabulary';


// export interface Lesson {
//   id: number;
//   title: string;
//   description: string;
//   cards: number; // Represents the number of items/sections in the lesson
//   difficulty: Difficulty;
//   category: Category;
//   status: Status;
//   lastModified: string; // Date string
// }

// export const mockLessons: Lesson[] = [
//   { id: 101, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
//   { id: 102, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
//   { id: 103, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Intermediate', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
//   { id: 104, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 15, difficulty: 'Beginner', category: 'Reading', status: 'Drafted', lastModified: '25/09/2025' },
//   { id: 105, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 35, difficulty: 'Advanced', category: 'Writing', status: 'Drafted', lastModified: '25/09/2025' },
//   { id: 106, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Listening', status: 'Published', lastModified: '25/09/2025' },
//   { id: 107, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Speaking', status: 'Drafted', lastModified: '25/09/2025' },
//   { id: 108, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 15, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
//   { id: 109, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
//   { id: 110, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
// ];
