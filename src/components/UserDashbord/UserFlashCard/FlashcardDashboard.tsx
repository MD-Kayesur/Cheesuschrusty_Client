
import React from 'react';
import { Play, RotateCw } from 'lucide-react';

// ... (TopicCardProps and TopicCard component remain the same)
interface TopicCardProps {
    title: string;
    onStart: (title: string) => void; // Updated signature
    onResume: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, onStart, onResume }) => {
    // Static data matching the image for consistency
    const totalCards = title.includes('Verbs') ? 250 : 150;
    const mastered = Math.floor(totalCards * 0.59);
    const due = 61;

    return (
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>

            <div className="flex justify-between text-sm mt-3 mb-4 text-gray-600">
                <p>Total Cards</p>
                <span className="font-semibold text-gray-800">{totalCards}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
                <p>Mastered</p>
                <span className="font-semibold text-green-600">{mastered} (59%)</span>
            </div>
            <div className="flex justify-between text-sm mb-4">
                <p>Due</p>
                <span className="font-semibold text-red-600">{due}</span>
            </div>

            <div className="flex space-x-2 mt-auto pt-2">
                <button
                    onClick={onResume}
                    className="flex-1 cursor-pointer flex items-center justify-center px-3 py-2 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                    <RotateCw size={16} className="mr-1" />
                    Resume Session
                </button>
                <button
                    onClick={() => onStart(title)} // Pass the topic title here
                    className="flex-1 cursor-pointer flex items-center justify-center px-3 py-2 text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Play size={16} className="mr-1" />
                    Start
                </button>
            </div>
        </div>
    );
};

interface FlashcardDashboardProps {
    onStartPractice: (topicTitle: string) => void;
    topics: string[]; // New prop for dynamic topics
}

export const FlashcardDashboard: React.FC<FlashcardDashboardProps> = ({ onStartPractice, topics }) => {
    // Duplicating the topic list to match the visual grid from the original code
    const allTopics = [...topics, ...topics.slice(0, 3)];

    return (
        <div className="  mx-auto p-6  ">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Advance Flashcard</h1>
            <p className="text-gray-600 mb-8">Master Italian vocabulary with spaced repetition</p>

            {/* Topic Grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
                {allTopics.map((topic, index) => (
                    <TopicCard
                        key={index}
                        title={topic}
                        onStart={onStartPractice} // This links to the speaking exercise
                        onResume={() => console.log(`Resuming ${topic}`)}
                    />
                ))}
            </div>

            {/* ... (Previously Completed Sessions section remains the same) */}
            <h2 className="text-xl font-bold text-gray-900 mb-4">Previously Completed Sessions</h2>
            <p className="text-gray-600 mb-6">Master Italian vocabulary with spaced repetition</p>

            <div className="grid grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">3</div>
                    <p className="text-sm text-gray-600">Number of Sessions Completed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-red-600 mb-1">123</div>
                    <p className="text-sm text-gray-600">Total Cards Studied</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-green-600 mb-1">22</div>
                    <p className="text-sm text-gray-600">Average Score</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <div className="text-3xl font-bold text-indigo-600 mb-1">86%</div>
                    <p className="text-sm text-gray-600">Success Rate</p>
                </div>
            </div>
        </div>
    );
};













// import React from 'react';
// import { Play, RotateCw } from 'lucide-react';

// interface TopicCardProps {
//     title: string;
//     onStart: () => void;
//     onResume: () => void;
// }

// const TopicCard: React.FC<TopicCardProps> = ({ title, onStart, onResume }) => {
//     // Static data matching the image for consistency
//     const totalCards = title.includes('Verbs') ? 250 : 150; 
//     const mastered = Math.floor(totalCards * 0.59);
//     const due = 61;

//     return (
//         <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col">
//             <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            
//             <div className="flex justify-between text-sm mt-3 mb-4 text-gray-600">
//                 <p>Total Cards</p>
//                 <span className="font-semibold text-gray-800">{totalCards}</span>
//             </div>
//             <div className="flex justify-between text-sm mb-2">
//                 <p>Mastered</p>
//                 <span className="font-semibold text-green-600">{mastered} (59%)</span>
//             </div>
//             <div className="flex justify-between text-sm mb-4">
//                 <p>Due</p>
//                 <span className="font-semibold text-red-600">{due}</span>
//             </div>

//             <div className="flex space-x-2 mt-auto pt-2">
//                 <button 
//                     onClick={onResume} 
//                     className="flex-1 flex items-center justify-center px-3 py-2 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors"
//                 >
//                     <RotateCw size={16} className="mr-1" />
//                     Resume Session
//                 </button>
//                 <button 
//                     onClick={onStart} 
//                     className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                     <Play size={16} className="mr-1" />
//                     Start
//                 </button>
//             </div>
//         </div>
//     );
// };

// interface FlashcardDashboardProps {
//     onStartPractice: () => void;
// }

// export const FlashcardDashboard: React.FC<FlashcardDashboardProps> = ({ onStartPractice }) => {
//     const topics = [
//         "Basic Vocabulary", "Travel Phrases", "Verbs Conjugation",
//         "Food & Drinks", "Common Expressions", "Numbers & Dates",
//         "Food & Drinks", "Common Expressions", "Numbers & Dates"
//     ];

//     return (
//         <div className="  mx-auto p-6 bg-gray-50">
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Advance Flashcard</h1>
//             <p className="text-gray-600 mb-8">Master Italian vocabulary with spaced repetition</p>

//             {/* Topic Grid */}
//             <div className="grid grid-cols-3 gap-6 mb-12">
//                 {topics.map((topic, index) => (
//                     <TopicCard
//                         key={index}
//                         title={topic}
//                         onStart={onStartPractice} // This links to the speaking exercise
//                         onResume={() => console.log(`Resuming ${topic}`)}
//                     />
//                 ))}
//             </div>

//             {/* Previously Completed Sessions */}
//             <h2 className="text-xl font-bold text-gray-900 mb-4">Previously Completed Sessions</h2>
//             <p className="text-gray-600 mb-6">Master Italian vocabulary with spaced repetition</p>

//             <div className="grid grid-cols-4 gap-6">
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="text-3xl font-bold text-indigo-600 mb-1">3</div>
//                     <p className="text-sm text-gray-600">Number of Sessions Completed</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="text-3xl font-bold text-red-600 mb-1">123</div>
//                     <p className="text-sm text-gray-600">Total Cards Studied</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="text-3xl font-bold text-green-600 mb-1">22</div>
//                     <p className="text-sm text-gray-600">Average Score</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
//                     <div className="text-3xl font-bold text-indigo-600 mb-1">86%</div>
//                     <p className="text-sm text-gray-600">Success Rate</p>
//                 </div>
//             </div>
//         </div>
//     );
// };