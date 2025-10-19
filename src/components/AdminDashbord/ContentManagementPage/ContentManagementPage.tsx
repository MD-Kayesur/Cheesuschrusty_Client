
// ContentManagementPage.tsx

import React, { useState } from 'react';
import StatCard from './StatCard';
import CreateContentModal from './CreateContentModal';
import FlashcardsTabContent from './FlashcardsTabContent';
import LessonsTabContent from './LessonTab/LessonsTabContent';
import { 
  mockStats, 
  mockDecks, 
  mockLessons, 
  ContentItem, 
  Difficulty, 
} from './types';

type ActiveTab = 'Flashcard Decks' | 'Lessons' | 'Phrase of the Day';
type ModalType = 'Deck' | 'Lesson' | null;

const ContentManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('Flashcard Decks');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  
  // State for content data (to allow adding new items)
  const [decks, setDecks] = useState(mockDecks);
  const [lessons, setLessons] = useState(mockLessons);

  const tabs: ActiveTab[] = ['Flashcard Decks', 'Lessons', 'Phrase of the Day'];

  const openModal = (type: ModalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  // Handler for both "Create Deck" and "Create Lesson" forms
  const handleCreateContent = (data: { title: string, description: string, difficulty: Difficulty | '' }, type: 'Deck' | 'Lesson') => {
    const newItem: ContentItem = {
      id: Date.now(), // Simple unique ID
      title: data.title,
      description: data.description,
      cards: 0, // Starts at 0
      difficulty: data.difficulty as Difficulty,
      category: 'Vocabulary', 
      status: 'Drafted',
      lastModified: new Date().toLocaleDateString('en-GB'),
    };
    
    if (type === 'Deck') {
      setDecks([newItem, ...decks]);
      alert(`Flashcard Deck "${data.title}" created successfully!`);
    } else {
      setLessons([newItem, ...lessons]);
      alert(`Lesson "${data.title}" created successfully!`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      
      {/* Header */}
      <header className="mb-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
        <p className="text-md text-gray-500">Welcome back! Here's what's happening with your platform today.</p>
      </header>

      <main className="max-w-7xl mx-auto">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Flashcard Decks" value={mockStats.totalDecks} icon={<span className="text-xl">📚</span>} iconColor="text-blue-600" />
          <StatCard title="Published Lessons" value={mockStats.publishedLessons} icon={<span className="text-xl">✅</span>} iconColor="text-green-600" />
          <StatCard title="Total Flashcards" value={mockStats.totalFlashcards} icon={<span className="text-xl">🎴</span>} iconColor="text-yellow-600" />
          <StatCard title="Content Views" value={mockStats.contentViews} icon={<span className="text-xl">👁️</span>} iconColor="text-red-600" />
        </div>

        {/* Content Tabs Container */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content Rendering */}
          {activeTab === 'Flashcard Decks' && (
            <FlashcardsTabContent 
              decks={decks}
              onOpenCreateModal={() => openModal('Deck')} 
            />
          )}
          
          {activeTab === 'Lessons' && (
            <LessonsTabContent 
              lessons={lessons}
              onOpenCreateModal={() => openModal('Lesson')} 
            />
          )}

          {activeTab === 'Phrase of the Day' && (
            <div className="py-12 text-center text-gray-500">
              Content for **Phrase of the Day** content management would go here.
            </div>
          )}
        </div>
      </main>

      {/* Reusable Modal Component */}
      {modalType && (
        <CreateContentModal
          type={modalType}
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleCreateContent}
        />
      )}
    </div>
  );
};

export default ContentManagementPage;















// // ContentManagementPage.tsx

// import React, { useState } from 'react';
// import StatCard from './StatCard';
// import CreateDeckModal from './CreateDeckModal';
// import { mockStats, mockDecks, FlashcardDeck, Difficulty, Status, Category, Stats } from './types';

// // --- Utility Components ---

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
//   if (difficulty === 'Intermediate') color = 'bg-yellow-100 text-yellow-700';
//   if (difficulty === 'Advanced') color = 'bg-red-100 text-red-700';
  
//   return (
//     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${color}`}>
//       {difficulty}
//     </span>
//   );
// };


// // --- Main Component ---

// const ContentManagementPage: React.FC = () => {  
//   const [activeTab, setActiveTab] = useState<'Flashcard Decks' | 'Lessons' | 'Phrase of the Day'>('Flashcard Decks');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [decks, setDecks] = useState(mockDecks);

//   const handleCreateDeck = (data: { title: string, description: string, difficulty: Difficulty | '' }) => {
//     const newDeck: FlashcardDeck = {
//       id: decks.length + 1,
//       title: data.title,
//       description: data.description,
//       cards: 0, // Starts at 0 cards
//       difficulty: data.difficulty as Difficulty,
//       category: 'Vocabulary', // Default category
//       status: 'Drafted',
//       lastModified: new Date().toLocaleDateString('en-GB'),
//     };
//     setDecks([newDeck, ...decks]); // Add to the top of the list
//     alert(`Deck "${data.title}" created successfully!`);
//   };

//   const tabs: ('Flashcard Decks' | 'Lessons' | 'Phrase of the Day')[] = ['Flashcard Decks', 'Lessons', 'Phrase of the Day'];

//   return (
//     <div className="bg-gray-50 min-h-screen p-8">
      
//       {/* Header */}
//       <header className="mb-6 max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800">Content Management</h1>
//         <p className="text-md text-gray-500">Welcome back! Here's what's happening with your platform today.</p>
//       </header>

//       <main className="max-w-7xl mx-auto">
        
//         {/* Stats Grid */}
//         <div className="grid grid-cols-4 gap-6 mb-8">
//           <StatCard title="Total Flashcard Decks" value={mockStats.totalDecks} icon={<span className="text-xl">📚</span>} iconColor="text-blue-600" />
//           <StatCard title="Published Lessons" value={mockStats.publishedLessons} icon={<span className="text-xl">✅</span>} iconColor="text-green-600" />
//           <StatCard title="Total Flashcards" value={mockStats.totalFlashcards} icon={<span className="text-xl">🎴</span>} iconColor="text-yellow-600" />
//           <StatCard title="Content Views" value={mockStats.contentViews} icon={<span className="text-xl">👁️</span>} iconColor="text-red-600" />
//         </div>

//         {/* Content Tabs */}
//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
//           <div className="flex border-b border-gray-200 mb-6">
//             {tabs.map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
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

//           {/* Tab Content */}
//           {activeTab === 'Flashcard Decks' && (
//             <div>
//               <div className="flex justify-between items-center mb-4">
//                 <div>
//                   <h2 className="text-xl font-semibold text-gray-800">Flashcard Decks</h2>
//                   <p className="text-sm text-gray-500">Manage your Italian learning flashcard collections.</p>
//                 </div>
//                 <button
//                   onClick={() => setIsModalOpen(true)}
//                   className="flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   <span className="mr-2 text-lg">+</span> Create Deck
//                 </button>
//               </div>

//               {/* Flashcard Table */}
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cards</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Modified</th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {decks.map((deck) => (
//                       <tr key={deck.id}>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                           {deck.title}
//                           <p className="text-xs text-gray-500">{deck.description}</p>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.cards}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm">
//                           <DifficultyBadge difficulty={deck.difficulty} />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.category}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm">
//                           <StatusBadge status={deck.status} />
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{deck.lastModified}</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <div className="flex space-x-2">
//                             <button title="View" className="text-gray-400 hover:text-blue-600">👁️</button>
//                             <button title="Edit" className="text-gray-400 hover:text-yellow-600">✏️</button>
//                             <button title="Delete" className="text-gray-400 hover:text-red-600">🗑️</button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
          
//           {/* Placeholder for other tabs */}
//           {(activeTab === 'Lessons' || activeTab === 'Phrase of the Day') && (
//             <div className="py-12 text-center text-gray-500">
//               Content for **{activeTab}** goes here.
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Modal Component */}
//       <CreateDeckModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleCreateDeck}
//       />
//     </div>
//   );
// };

// export default ContentManagementPage;