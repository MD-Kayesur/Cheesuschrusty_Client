import React, { useState } from 'react';

interface Flashcard {
  italian: string;
  english: string;
  category: string;
}

export const UserFlashcards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const flashcards: Flashcard[] = [
    { italian: 'Ciao', english: 'Hello', category: 'Greetings' },
    { italian: 'Grazie', english: 'Thank you', category: 'Manners' },
    { italian: 'Per favore', english: 'Please', category: 'Manners' },
    { italian: 'Arrivederci', english: 'Goodbye', category: 'Greetings' }
  ];

  const handleNext = () => {
    setFlipped(false);
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Flashcards</h2>
      <p className="text-gray-600 mb-8">Practice vocabulary with interactive flashcards</p>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-4 text-sm text-gray-600">
          Card {currentCard + 1} of {flashcards.length}
        </div>

        <div
          onClick={() => setFlipped(!flipped)}
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-12 cursor-pointer shadow-xl hover:shadow-2xl transition-all min-h-80 flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          <span className="text-white text-sm font-medium mb-4 opacity-90">
            {flashcards[currentCard].category}
          </span>
          <div className="text-5xl font-bold text-white mb-4">
            {flipped ? flashcards[currentCard].english : flashcards[currentCard].italian}
          </div>
          <p className="text-white text-sm opacity-75">Click to flip</p>
        </div>

        <div className="flex gap-4 mt-6">
          <button onClick={handleNext} className="flex-1 bg-white border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
            Next Card
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Mark as Learned
          </button>
        </div>
      </div>
    </div>
  );
};
