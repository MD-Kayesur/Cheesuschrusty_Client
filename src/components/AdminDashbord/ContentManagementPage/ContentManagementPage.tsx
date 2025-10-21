
// ContentManagementPage.tsx
import React, { useState } from 'react';
import StatCard from './StatCard';
import CreateContentModal from './CreateContentModal';
import FlashcardsTabContent from './FlashcardsTabContent';
import {
  mockStats,
  mockDecks,
   
  ContentItem,
  Difficulty,
} from './types';

type ActiveTab = 'Flashcard Decks' | 'Lessons' | 'Phrase of the Day';

const ContentManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('Flashcard Decks');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [decks, setDecks] = useState<ContentItem[]>(mockDecks);

  const openDeckModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCreateContent = (data: { title: string; description: string; difficulty: Difficulty }) => {
    const newDeck: ContentItem = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      cards: 0,
      difficulty: data.difficulty,
      category: 'Vocabulary',
      status: 'Drafted',
      lastModified: new Date().toLocaleDateString('en-GB'),
    };
    setDecks([newDeck, ...decks]);
    closeModal();
  };

  const tabs: ActiveTab[] = ['Flashcard Decks', 'Lessons', 'Phrase of the Day'];

  return (
    <div className="p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">Content Management</h1>
      </header>

      <div className="grid grid-cols-4 gap-6 mb-8">
       <StatCard
  title="Total Flashcard Decks"
  value={mockStats.totalDecks}
  icon={<span className="text-xl">📚</span>}
  iconColor="text-blue-600"
/>
<StatCard
  title="Published Lessons"
  value={mockStats.publishedLessons}
  icon={<span className="text-xl">✅</span>}
  iconColor="text-green-600"
/>
<StatCard
  title="Total Flashcards"
  value={mockStats.totalFlashcards}
  icon={<span className="text-xl">🎴</span>}
  iconColor="text-yellow-600"
/>
<StatCard
  title="Content Views"
  value={mockStats.contentViews}
  icon={<span className="text-xl">👁️</span>}
  iconColor="text-red-600"
/>

      </div>

      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
        <div className="flex border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'Flashcard Decks' && (
          <FlashcardsTabContent decks={decks} onOpenCreateModal={openDeckModal} />
        )}

        {activeTab === 'Lessons' && <div>Lessons management here</div>}
        {activeTab === 'Phrase of the Day' && <div>Phrase of the Day content here</div>}
      </div>

      {isModalOpen && (
        <CreateContentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleCreateContent}
        />
      )}
    </div>
  );
};

export default ContentManagementPage;










// import React, { useState } from 'react';
// import StatCard from './StatCard';
// import CreateContentModal from './CreateContentModal';
// import FlashcardsTabContent from './FlashcardsTabContent';
// import LessonManager from './LessonTab/LessonManager';
// import LessonFormPage from './LessonTab/LessonFormPage';
// import {
//   mockStats,
//   mockDecks,
//   mockLessons,
//   ContentItem,

//   Difficulty,
// } from './types';

// type ActiveTab = 'Flashcard Decks' | 'Lessons' | 'Phrase of the Day';
// type ModalType = 'Deck' | null;

// const ContentManagementPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<ActiveTab>('Flashcard Decks');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState<ModalType>(null);
//   const [showLessonForm, setShowLessonForm] = useState(false);

//   const [decks, setDecks] = useState<ContentItem[]>(mockDecks);
//   const [lessons, setLessons] = useState<ContentItem[]>(mockLessons);

//   const tabs: ActiveTab[] = ['Flashcard Decks', 'Lessons', 'Phrase of the Day'];
// j
//   const openDeckModal = () => {
//     setModalType('Deck');
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalType(null);
//   };

//   const handleCreateContent = (
//     data: { title: string; description: string; difficulty: Difficulty | '' },
//     type: 'Deck'
//   ) => {
//     const newItem: ContentItem = {
//       id: Date.now().toString(),
//       title: data.title,
//       description: data.description,
//       cards: 0,
//       difficulty: (data.difficulty as Difficulty) || 'Beginner',
//       category: 'Vocabulary',
//       status: 'Drafted',
//       lastModified: new Date().toLocaleDateString('en-GB'),
//     };

//     setDecks([newItem, ...decks]);
//     alert(`Flashcard Deck "${data.title}" created successfully!`);
//     closeModal();
//   };

//   const handleOpenLessonForm = () => setShowLessonForm(true);
//   const handleCloseLessonForm = () => setShowLessonForm(false);

//   return (
//     <div className="min-h-screen p-8">
//       <header className="mb-6 mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
//         <p className="text-md text-gray-500">
//           Welcome back! Here's what's happening with your platform today.
//         </p>
//       </header>

//       <main className="mx-auto">
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <StatCard
//             title="Total Flashcard Decks"
//             value={mockStats.totalDecks}
//             icon={<span className="text-xl">📚</span>}
//             iconColor="text-blue-600"
//           />
//           <StatCard
//             title="Published Lessons"
//             value={mockStats.publishedLessons}
//             icon={<span className="text-xl">✅</span>}
//             iconColor="text-green-600"
//           />
//           <StatCard
//             title="Total Flashcards"
//             value={mockStats.totalFlashcards}
//             icon={<span className="text-xl">🎴</span>}
//             iconColor="text-yellow-600"
//           />
//           <StatCard
//             title="Content Views"
//             value={mockStats.contentViews}
//             icon={<span className="text-xl">👁️</span>}
//             iconColor="text-red-600"
//           />
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
//           <div className="flex border-b border-gray-200 mb-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   setShowLessonForm(false);
//                 }}
//                 className={`px-4 py-2 text-sm font-medium transition-colors ${
//                   activeTab === tab
//                     ? 'text-blue-600 border-b-2 border-blue-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {activeTab === 'Flashcard Decks' && (
//             <FlashcardsTabContent decks={decks} onOpenCreateModal={openDeckModal} />
//           )}

//           {activeTab === 'Lessons' && (
//             <>
//               {!showLessonForm ? (
//                 <LessonManager lessons={lessons} onCreateLesson={handleOpenLessonForm} />
//               ) : (
//                 <LessonFormPage
//                   onSave={() => {}}
//                   onCancel={handleCloseLessonForm}
//                   isEditMode={false}
//                 />
//               )}
//             </>
//           )}

//           {activeTab === 'Phrase of the Day' && (
//             <div className="py-12 text-center text-gray-500">
//               Content for <strong>Phrase of the Day</strong> content management would go here.
//             </div>
//           )}
//         </div>
//       </main>

//       {isModalOpen && modalType === 'Deck' && (
//         <CreateContentModal
//           type="Deck"
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSubmit={(data) => handleCreateContent(data, 'Deck')}
//         />
//       )}
//     </div>
//   );
// };

// export default ContentManagementPage;














// // ContentManagementPage.tsx

// import React, { useState } from 'react';
// import StatCard from './StatCard';
// import CreateContentModal from './CreateContentModal';
// import FlashcardsTabContent from './FlashcardsTabContent';
// import LessonManager from './LessonTab/LessonManager';
// import LessonFormPage from './LessonTab/LessonFormPage'; // ✅ Import your form page

// import { 
//   mockStats, 
//   mockDecks, 
//   mockLessons, 
//   ContentItem, 
//   Difficulty 
// } from './types';

// type ActiveTab = 'Flashcard Decks' | 'Lessons' | 'Phrase of the Day';
// type ModalType = 'Deck' | null;

// const ContentManagementPage: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<ActiveTab>('Flashcard Decks');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalType, setModalType] = useState<ModalType>(null);
//   const [showLessonForm, setShowLessonForm] = useState(false); // ✅ Toggle for Lesson form

//   const [decks, setDecks] = useState(mockDecks);
//   const [lessons, setLessons] = useState(mockLessons);

//   const tabs: ActiveTab[] = ['Flashcard Decks', 'Lessons', 'Phrase of the Day'];

//   const openDeckModal = () => {
//     setModalType('Deck');
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalType(null);
//   };

//   const handleCreateContent = (
//     data: { title: string; description: string; difficulty: Difficulty | '' },
//     type: 'Deck'
//   ) => {
//     const newItem: ContentItem = {
//       id: Date.now(),
//       title: data.title,
//       description: data.description,
//       cards: 0,
//       difficulty: data.difficulty as Difficulty,
//       category: 'Vocabulary',
//       status: 'Drafted',
//       lastModified: new Date().toLocaleDateString('en-GB'),
//     };

//     setDecks([newItem, ...decks]);
//     alert(`Flashcard Deck "${data.title}" created successfully!`);
//     closeModal();
//   };

//   // ✅ Handlers for lesson form toggling
//   const handleOpenLessonForm = () => setShowLessonForm(true);
//   const handleCloseLessonForm = () => setShowLessonForm(false);

//   return (
//     <div className="min-h-screen p-8">
//       {/* Header */}
//       <header className="mb-6 mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
//         <p className="text-md text-gray-500">
//           Welcome back! Here's what's happening with your platform today.
//         </p>
//       </header>

//       <main className="mx-auto">
//         {/* Stats Grid */}
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <StatCard
//             title="Total Flashcard Decks"
//             value={mockStats.totalDecks}
//             icon={<span className="text-xl">📚</span>}
//             iconColor="text-blue-600"
//           />
//           <StatCard
//             title="Published Lessons"
//             value={mockStats.publishedLessons}
//             icon={<span className="text-xl">✅</span>}
//             iconColor="text-green-600"
//           />
//           <StatCard
//             title="Total Flashcards"
//             value={mockStats.totalFlashcards}
//             icon={<span className="text-xl">🎴</span>}
//             iconColor="text-yellow-600"
//           />
//           <StatCard
//             title="Content Views"
//             value={mockStats.contentViews}
//             icon={<span className="text-xl">👁️</span>}
//             iconColor="text-red-600"
//           />
//         </div>

//         {/* Content Tabs Container */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
//           <div className="flex border-b border-gray-200 mb-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => {
//                   setActiveTab(tab);
//                   setShowLessonForm(false); // ✅ Reset form view when switching tabs
//                 }}
//                 className={`px-4 py-2 text-sm font-medium transition-colors ${
//                   activeTab === tab
//                     ? 'text-blue-600 border-b-2 border-blue-600'
//                     : 'text-gray-500 hover:text-gray-700'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Tab Content Rendering */}
//           {activeTab === 'Flashcard Decks' && (
//             <FlashcardsTabContent decks={decks} onOpenCreateModal={openDeckModal} />
//           )}

//           {activeTab === 'Lessons' && (
//             <>
//               {!showLessonForm ? (
//                 <LessonManager
//                   lessons={lessons}
//                   onCreateLesson={handleOpenLessonForm} // ✅ New handler
//                 />
//               ) : (
//                 <LessonFormPage onClose={handleCloseLessonForm} /> // ✅ Switch view
//               )}
//             </>
//           )}

//           {activeTab === 'Phrase of the Day' && (
//             <div className="py-12 text-center text-gray-500">
//               Content for <strong>Phrase of the Day</strong> content management would go here.
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Flashcard Deck Modal */}
//       {isModalOpen && modalType === 'Deck' && (
//         <CreateContentModal
//           type="Deck"
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSubmit={(data) => handleCreateContent(data, 'Deck')}
//         />
//       )}
//     </div>
//   );
// };

// export default ContentManagementPage;














 