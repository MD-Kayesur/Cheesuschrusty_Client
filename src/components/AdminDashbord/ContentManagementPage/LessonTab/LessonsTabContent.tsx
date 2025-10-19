

// LessonsTabContent.tsx

import React from 'react';
import { ContentItem } from './types';
import { StatusBadge, DifficultyBadge } from '../Badges';

interface LessonsTabContentProps {
  onOpenCreateModal: () => void;
  lessons: ContentItem[];
}

const LessonsTabContent: React.FC<LessonsTabContentProps> = ({ onOpenCreateModal, lessons }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Lessons</h2>
          <p className="text-sm text-gray-500">Manage structured Italian learning lessons.</p>
        </div>
        <button
          onClick={onOpenCreateModal}
          className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="mr-2 text-lg">+</span> Create Lesson
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
            {lessons.map((lesson) => (
              <tr key={lesson.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {lesson.title}
                  <p className="text-xs text-gray-500">{lesson.description}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.cards}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm"><DifficultyBadge difficulty={lesson.difficulty} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm"><StatusBadge status={lesson.status} /></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.lastModified}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button title="View" className="text-gray-400 hover:text-blue-600">👁️</button>
                    <button title="Edit" className="text-gray-400 hover:text-yellow-600">✏️</button>
                    <button title="History" className="text-gray-400 hover:text-gray-600">🕒</button>
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

export default LessonsTabContent;









// // LessonsTabContent.tsx

// import React from 'react';
// import { Lesson, mockLessons, Difficulty, Status } from './types'; // Adjust path as needed

// interface LessonsTabContentProps {
//   onOpenCreateModal: () => void;
// }

// // Re-using badge components (assuming they are available or defined here for simplicity)
// const StatusBadge: React.FC<{ status: Status }> = ({ status }) => {
//   const color = status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
//   return (
//     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${color}`}>
//       {status}
//     </span>
//   );
// };

// const DifficultyBadge: React.FC<{ difficulty: Difficulty }> = ({ difficulty }) => {
//   let color = 'bg-blue-100 text-blue-700';
//   if (difficulty === 'Intermediate') color = 'bg-green-100 text-green-700'; // Note: Used green here for Intermediate to match image
//   if (difficulty === 'Advanced') color = 'bg-yellow-100 text-yellow-700'; // Note: Used yellow here for Advanced to match image
  
//   return (
//     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${color}`}>
//       {difficulty}
//     </span>
//   );
// };


// const LessonsTabContent: React.FC<LessonsTabContentProps> = ({ onOpenCreateModal }) => {
//   const lessons = mockLessons; // Using mock data

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800">Lessons</h2>
//           <p className="text-sm text-gray-500">Manage structured Italian learning lessons.</p>
//         </div>
//         <button
//           onClick={onOpenCreateModal}
//           className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//         >
//           <span className="mr-2 text-lg">+</span> Create Lesson
//         </button>
//       </div>

//       {/* Lessons Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cards</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {lessons.map((lesson) => (
//               <tr key={lesson.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {lesson.title}
//                   <p className="text-xs text-gray-500">{lesson.description}</p>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.cards}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <DifficultyBadge difficulty={lesson.difficulty} />
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.category}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <StatusBadge status={lesson.status} />
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lesson.lastModified}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   <div className="flex space-x-2">
//                     <button title="View" className="text-gray-400 hover:text-blue-600">👁️</button>
//                     <button title="Edit" className="text-gray-400 hover:text-yellow-600">✏️</button>
//                     <button title="History" className="text-gray-400 hover:text-gray-600">🕒</button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default LessonsTabContent;