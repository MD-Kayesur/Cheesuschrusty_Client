
// CreateContentModal.tsx
import React, { useState } from 'react';
import { Difficulty } from './types';
import Modal from './Modals';

interface CreateContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; description: string; difficulty: Difficulty }) => void;
}

const difficultyLevels: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

const CreateContentModal: React.FC<CreateContentModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState<Difficulty>('Beginner');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      onSubmit({ title, description, difficulty });
      setTitle('');
      setDescription('');
      setDifficulty('Beginner');
      onClose();
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Flashcard Deck"
      subtitle="Add a new flashcard deck to your Italian learning content"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Deck Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value as Difficulty)} className="border p-2 rounded">
          {difficultyLevels.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 cursor-pointer text-white p-2 rounded">Create Deck</button>
      </form>
    </Modal>
  );
};

export default CreateContentModal;










// // CreateContentModal.tsx

// import React, { useState } from 'react';
// import Modal from './Modal';
// import { Difficulty } from './types';

// interface FormData {
//   title: string;
//   description: string;
//   difficulty: Difficulty | '';
// }

// interface CreateContentModalProps {
//   type: 'Deck' | 'Lesson';
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: FormData, type: 'Deck' | 'Lesson') => void;
// }

// const difficultyLevels: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced'];

// const CreateContentModal: React.FC<CreateContentModalProps> = ({ type, isOpen, onClose, onSubmit }) => {
//   const [formData, setFormData] = useState<FormData>({ title: '', description: '', difficulty: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.title && formData.description && formData.difficulty) {
//       onSubmit(formData, type);
//       setFormData({ title: '', description: '', difficulty: '' }); // Reset form
//       onClose();
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   const modalTitle = `Create New ${type}`;
//   const modalSubtitle = `Add a new ${type.toLowerCase()} to your Italian learning content.`;

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title={modalTitle} subtitle={modalSubtitle}>
//       <form onSubmit={handleSubmit}>
        
//         {/* Title */}
//         <div className="mb-4">
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">{type} Title</label>
//           <input
//             id="title"
//             type="text"
//             placeholder={`Enter ${type.toLowerCase()} title`}
//             value={formData.title}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-4">
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//           <input
//             id="description"
//             type="text"
//             placeholder={`Enter ${type.toLowerCase()} description`}
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
//             required
//           />
//         </div>

//         {/* Difficulty Level */}
//         <div className="mb-6">
//           <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 mb-1">Difficulty level</label>
//           <select
//             id="difficulty"
//             value={formData.difficulty}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500 appearance-none"
//             required
//           >
//             <option value="" disabled>Select</option>
//             {difficultyLevels.map(level => (
//               <option key={level} value={level}>{level}</option>
//             ))}
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//         >
//           Create {type}
//         </button>
//       </form>
//     </Modal>
//   );
// };

// export default CreateContentModal;