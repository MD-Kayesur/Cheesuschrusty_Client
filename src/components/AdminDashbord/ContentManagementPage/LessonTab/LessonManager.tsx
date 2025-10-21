import React, { useState } from 'react';
import LessonsTabContent from './LessonsTabContent';
import LessonFormPage from './LessonFormPage';
import { Lesson } from './types';

interface LessonManagerProps {
  lessons: Lesson[];
}

const LessonManager: React.FC<LessonManagerProps> = ({ lessons: initialLessons }) => {
  const [view, setView] = useState<'table' | 'create' | 'edit'>('table');
  const [lessons, setLessons] = useState<Lesson[]>(initialLessons);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleOpenCreateModal = () => {
    setSelectedLesson(null);
    setView('create');
  };

  const handleOpenEditModal = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setView('edit');
  };

  const handleViewLesson = (lesson: Lesson) => {
    console.log('Viewing lesson:', lesson);
  };

  const handleHistory = (lesson: Lesson) => {
    console.log('Lesson history:', lesson);
  };

  const handleCloseForm = () => {
    setView('table');
    setSelectedLesson(null);
  };

  const handleSaveForm = (formData: Partial<Lesson>, isEditMode: boolean) => {
    if (isEditMode && selectedLesson) {
      const updated = lessons.map((l) =>
        l.id === selectedLesson.id
          ? { ...l, ...formData, lastModified: new Date().toLocaleDateString('en-GB') }
          : l
      );
      setLessons(updated);
    } else {
      const newLesson: Lesson = {
        id: Date.now().toString(), // string id!
        title: formData.title || 'Untitled Lesson',
        description: formData.description || '',
        cards: 0,
        difficulty: formData.difficulty || 'Beginner',
        category: formData.category || 'Reading',
        status: 'Drafted',
        lastModified: new Date().toLocaleDateString('en-GB'),
      };
      setLessons([newLesson, ...lessons]);
    }

    handleCloseForm();
  };

  if (view === 'create' || view === 'edit') {
    return (
      <div className="relative p-6">
        <button
          onClick={handleCloseForm}
          className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Lessons
        </button>

        <LessonFormPage
          isEditMode={view === 'edit'}
          initialData={selectedLesson || undefined}
          onSave={handleSaveForm}
          onCancel={handleCloseForm}
        />
      </div>
    );
  }

  return (
    <LessonsTabContent
      onOpenCreateModal={handleOpenCreateModal}
      lessons={lessons}
      onView={handleViewLesson}
      onEdit={handleOpenEditModal}
      onHistory={handleHistory}
    />
  );
};

export default LessonManager;








// import React, { useState } from 'react';
// import LessonsTabContent from './LessonsTabContent';
// import LessonFormPage from './LessonFormPage';
// import { ContentItem } from '../types';

// interface LessonManagerProps {
//   lessons: ContentItem[];
//   onCreateLesson: () => void;
// }

// const LessonManager: React.FC<LessonManagerProps> = ({ lessons: initialLessons, onCreateLesson }) => {
//   const [view, setView] = useState<'table' | 'create' | 'edit'>('table');
//   const [lessons, setLessons] = useState<ContentItem[]>(initialLessons);
//   const [selectedLesson, setSelectedLesson] = useState<ContentItem | null>(null);

//   const handleOpenCreateModal = () => {
//     setSelectedLesson(null);
//     setView('create');
//     onCreateLesson();
//   };

//   const handleOpenEditModal = (lesson: ContentItem) => {
//     setSelectedLesson(lesson);
//     setView('edit');
//   };

//   const handleCloseForm = () => {
//     setView('table');
//     setSelectedLesson(null);
//   };

//   const handleSaveForm = (formData: Partial<ContentItem>, isEditMode: boolean) => {
//     if (isEditMode && selectedLesson) {
//       const updated = lessons.map((l) =>
//         l.id === selectedLesson.id
//           ? { ...l, ...formData, lastModified: new Date().toLocaleDateString('en-GB') }
//           : l
//       );
//       setLessons(updated);
//     } else {
//       const newLesson: ContentItem = {
//         id: Date.now().toString(),
//         title: formData.title || 'Untitled Lesson',
//         description: formData.description || '',
//         cards: 0,
//         difficulty: (formData.difficulty as ContentItem['difficulty']) || 'Beginner',
//         category: (formData.category as ContentItem['category']) || 'Reading',
//         status: 'Drafted',
//         lastModified: new Date().toLocaleDateString('en-GB'),
//       };
//       setLessons([newLesson, ...lessons]);
//     }

//     handleCloseForm();
//   };

//   if (view === 'create' || view === 'edit') {
//     return (
//       <div className="relative p-6">
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <svg
//             className="w-5 h-5 mr-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back to Lessons
//         </button>

//         <LessonFormPage
//           isEditMode={view === 'edit'}
//           initialData={selectedLesson || undefined}
//           onSave={handleSaveForm}
//           onCancel={handleCloseForm}
//         />
//       </div>
//     );
//   }

//   return (
//     <LessonsTabContent
//       onOpenCreateModal={handleOpenCreateModal}
//       lessons={lessons}
//       onView={(lesson) => console.log('View:', lesson)}
//       onEdit={handleOpenEditModal}
//       onHistory={(lesson) => console.log('History:', lesson)}
//     />
//   );
// };

// export default LessonManager;













// // LessonManager.tsx
// import React, { useState } from 'react';
// import LessonsTabContent from './LessonsTabContent';
// import LessonFormPage from './LessonFormPage';
// import { ContentItem } from '../types'; // ✅ use shared types if you have them

// const initialLessons: ContentItem[] = [
//   {
//     id: 'l1',
//     title: 'Introduzione',
//     description: 'Basic greetings and culture',
//     cards: 15,
//     difficulty: 'Beginner',
//     category: 'Listening',
//     status: 'Published',
//     lastModified: '10/01/2025',
//   },
//   {
//     id: 'l2',
//     title: 'Grammatica Base',
//     description: 'Nouns and Articles',
//     cards: 20,
//     difficulty: 'Intermediate',
//     category: 'Reading',
//     status: 'Drafted',
//     lastModified: '15/01/2025',
//   },
// ];

// const LessonManager: React.FC = () => {
//   const [view, setView] = useState<'table' | 'create' | 'edit'>('table');
//   const [lessons, setLessons] = useState<ContentItem[]>(initialLessons);
//   const [selectedLesson, setSelectedLesson] = useState<ContentItem | null>(null);

//   // ✅ CREATE — open form
//   const handleOpenCreateModal = () => {
//     setSelectedLesson(null);
//     setView('create');
//   };

//   // ✅ EDIT — open form prefilled
//   const handleOpenEditModal = (lesson: ContentItem) => {
//     setSelectedLesson(lesson);
//     setView('edit');
//   };

//   // ✅ VIEW — simple console log for now
//   const handleViewLesson = (lesson: ContentItem) => {
//     console.log('Viewing lesson:', lesson);
//   };

//   // ✅ HISTORY — simple console log
//   const handleHistory = (lesson: ContentItem) => {
//     console.log('Lesson history:', lesson);
//   };

//   // ✅ Return to table view
//   const handleCloseForm = () => {
//     setView('table');
//     setSelectedLesson(null);
//   };

//   // ✅ Handle form submission (create or edit)
//   const handleSaveForm = (formData: Partial<ContentItem>, isEditMode: boolean) => {
//     if (isEditMode && selectedLesson) {
//       // Update existing
//       const updated = lessons.map((l) =>
//         l.id === selectedLesson.id ? { ...l, ...formData, lastModified: new Date().toLocaleDateString('en-GB') } : l
//       );
//       setLessons(updated);
//     } else {
//       // Create new
//       const newLesson: ContentItem = {
//         id: Date.now().toString(),
//         title: formData.title || 'Untitled Lesson',
//         description: formData.description || '',
//         cards: 0,
//         difficulty: (formData.difficulty as ContentItem['difficulty']) || 'Beginner',
//         category: (formData.category as ContentItem['category']) || 'Reading',
//         status: 'Drafted',
//         lastModified: new Date().toLocaleDateString('en-GB'),
//       };
//       setLessons([newLesson, ...lessons]);
//     }

//     handleCloseForm(); // Go back to table
//   };

//   // --- Render Views ---
//   if (view === 'create' || view === 'edit') {
//     return (
//       <div className="relative p-6">
//         {/* Back button */}
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-blue-600 transition-colors"
//         >
//           <svg
//             className="w-5 h-5 mr-1"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
//           </svg>
//           Back to Lessons
//         </button>

//         <LessonFormPage
//           isEditMode={view === 'edit'}
//           initialData={selectedLesson || undefined}
//           onSave={handleSaveForm}
//           onCancel={handleCloseForm}
//         />
//       </div>
//     );
//   }

//   // ✅ Default: show lessons table
//   return (
//     <LessonsTabContent
//       onOpenCreateModal={handleOpenCreateModal}
//       lessons={lessons}
//       onView={handleViewLesson}
//       onEdit={handleOpenEditModal}
//       onHistory={handleHistory}
//     />
//   );
// };

// export default LessonManager;










// // LessonManager.tsx

// import React, { useState } from 'react';
// import LessonsTabContent from './LessonsTabContent'; // Assuming this is the path
// import LessonFormPage from './LessonFormPage';       // Assuming this is the path

// // Dummy Data and Types (You should place ContentItem in a separate file like './types.ts')
// interface ContentItem {
//     id: string;
//     title: string;
//     description: string;
//     cards: number;
//     difficulty: 'Beginner' | 'Intermediate' | 'Advance'; 
//     category: 'Reading' | 'Writing' | 'Listening' | 'Speaking';
//     status: 'Published' | 'Drafted'; 
//     lastModified: string;
// }

// const initialLessons: ContentItem[] = [
//     { id: 'l1', title: 'Introduzione', description: 'Basic greetings and culture', cards: 15, difficulty: 'Beginner', category: 'Listening', status: 'Published', lastModified: '10/01/2025' },
//     { id: 'l2', title: 'Grammatica Base', description: 'Nouns and Articles', cards: 20, difficulty: 'Intermediate', category: 'Reading', status: 'Drafted', lastModified: '15/01/2025' },
// ];

// const LessonManager: React.FC = () => {
//     // State to control which component is visible
//     const [view, setView] = useState<'table' | 'create' | 'edit'>('table');
//     const [lessons, setLessons] = useState<ContentItem[]>(initialLessons);
//     const [selectedLesson, setSelectedLesson] = useState<ContentItem | null>(null);

//     // Function to open the creation form
//     const handleOpenCreateModal = () => {
//         setSelectedLesson(null); // Clear any selected lesson
//         setView('create');
//     };

//     // Function to open the edit form
//     const handleOpenEditModal = (lesson: ContentItem) => {
//         setSelectedLesson(lesson);
//         setView('edit');
//     };

//     // Function to handle viewing a lesson (for this example, we'll just log it)
//     const handleViewLesson = (lesson: ContentItem) => {
//         console.log("Viewing lesson:", lesson);
//         // In a real app, this would open a view-only modal
//     };
    
//     // Function to handle history (for this example, we'll just log it)
//     const handleHistory = (lesson: ContentItem) => {
//         console.log("Showing history for:", lesson);
//     };

//     // Function to return to the table view
//     const handleCloseForm = () => {
//         setView('table');
//         setSelectedLesson(null);
//     };

//     if (view === 'create' || view === 'edit') {
//         return (
//             <div className="relative">
//                 {/* Back button to return to the table */}
//                 <button 
//                     onClick={handleCloseForm} 
//                     className="absolute top-4 left-4 flex items-center text-gray-600 hover:text-blue-600 z-10 transition-colors"
//                 >
//                     <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
//                     Back to Lessons
//                 </button>
                
//                 {/* Render the Lesson Form Page */}
//                 <LessonFormPage 
//                     isEditMode={view === 'edit'} 
//                     // You would pass the selectedLesson data to the form here if in edit mode
//                     // initialData={selectedLesson} 
//                     // onSave={handleSaveForm}
//                 />
//             </div>
//         );
//     }

//     return (
//         <LessonsTabContent 
//             onOpenCreateModal={handleOpenCreateModal}
//             lessons={lessons} // Pass the data to the table
//             onView={handleViewLesson}
//             onEdit={handleOpenEditModal}
//             onHistory={handleHistory}
//         />
//     );
// };

// export default LessonManager;