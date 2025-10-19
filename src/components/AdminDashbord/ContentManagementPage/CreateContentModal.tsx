// CreateContentModal.tsx

import React, { useState } from 'react';
import Modal from './Modal';
import { Difficulty } from './types';

interface FormData {
  title: string;
  description: string;
  difficulty: Difficulty | '';
}

interface CreateContentModalProps {
  type: 'Deck' | 'Lesson';
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData, type: 'Deck' | 'Lesson') => void;
}

const difficultyLevels: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

const CreateContentModal: React.FC<CreateContentModalProps> = ({ type, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ title: '', description: '', difficulty: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.difficulty) {
      onSubmit(formData, type);
      setFormData({ title: '', description: '', difficulty: '' }); // Reset form
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  const modalTitle = `Create New ${type}`;
  const modalSubtitle = `Add a new ${type.toLowerCase()} to your Italian learning content.`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={modalTitle} subtitle={modalSubtitle}>
      <form onSubmit={handleSubmit}>
        
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">{type} Title</label>
          <input
            id="title"
            type="text"
            placeholder={`Enter ${type.toLowerCase()} title`}
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            id="description"
            type="text"
            placeholder={`Enter ${type.toLowerCase()} description`}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Difficulty Level */}
        <div className="mb-6">
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">Difficulty level</label>
          <select
            id="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none"
            required
          >
            <option value="" disabled>Select</option>
            {difficultyLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Create {type}
        </button>
      </form>
    </Modal>
  );
};

export default CreateContentModal;