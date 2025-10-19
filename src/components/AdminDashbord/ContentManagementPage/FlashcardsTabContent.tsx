// FlashcardsTabContent.tsx

import React from 'react';
import { ContentItem, mockDecks } from './types';
import { StatusBadge, DifficultyBadge } from './Badges';

interface FlashcardsTabContentProps {
  onOpenCreateModal: () => void;
  decks: ContentItem[];
}

const FlashcardsTabContent: React.FC<FlashcardsTabContentProps> = ({ onOpenCreateModal, decks }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Flashcard Decks</h2>
          <p className="text-sm text-gray-500">Manage your Italian learning flashcard collections.</p>
        </div>
        <button
          onClick={onOpenCreateModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="mr-2 text-lg">+</span> Create Deck
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cards</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {decks.map((deck) => (
              <tr key={deck.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {deck.title}
                  <p className="text-xs text-gray-500">{deck.description}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.cards}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm"><DifficultyBadge difficulty={deck.difficulty} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={deck.status} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.lastModified}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button title="View" className="text-gray-400 hover:text-blue-600">👁️</button>
                    <button title="Edit" className="text-gray-400 hover:text-yellow-600">✏️</button>
                    <button title="Delete" className="text-gray-400 hover:text-red-600">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlashcardsTabContent;