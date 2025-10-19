// types.ts (Update or create this file with the following)

// Re-using types from the previous request:
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Status = 'Published' | 'Drafted';
export type Category = 'Reading' | 'Writing' | 'Listening' | 'Speaking' | 'Grammar' | 'Vocabulary';


export interface Lesson {
  id: number;
  title: string;
  description: string;
  cards: number; // Represents the number of items/sections in the lesson
  difficulty: Difficulty;
  category: Category;
  status: Status;
  lastModified: string; // Date string
}

export const mockLessons: Lesson[] = [
  { id: 101, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 102, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 103, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Intermediate', category: 'Reading', status: 'Published', lastModified: '25/09/2025' },
  { id: 104, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 15, difficulty: 'Beginner', category: 'Reading', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 105, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 35, difficulty: 'Advanced', category: 'Writing', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 106, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Listening', status: 'Published', lastModified: '25/09/2025' },
  { id: 107, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Speaking', status: 'Drafted', lastModified: '25/09/2025' },
  { id: 108, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 15, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
  { id: 109, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
  { id: 110, title: 'Basic Italian Greetings', description: 'Essential greetings and polite expressions', cards: 25, difficulty: 'Beginner', category: 'Reading', status: 'Published', lastModified: '26/09/2025' },
];
