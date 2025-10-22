import React, { useState } from "react";
import { FlashcardDashboard } from "./FlashcardDashboard";
import FlashcardReviewSession from "./FlashcardReviewSession";

// Define a type for a more detailed topic structure (since we need cards)
export interface TopicData {
  title: string;
  cards: { word: string; translation: string }[];
}

type AppView = "dashboard" | "review";

// Enhanced Topic Data (static for this example)
const ALL_TOPICS: TopicData[] = [
  {
    title: "Basic Vocabulary",
    cards: [
      { word: "Ciao", translation: "Hello / Bye" },
      { word: "Grazie", translation: "Thank you" },
      { word: "Per favore", translation: "Please" },
      { word: "Sì", translation: "Yes" },
      { word: "No", translation: "No" },
      { word: "Acqua", translation: "Water" },
      { word: "Vino", translation: "Wine" },
    ],
  },
  {
    title: "Travel Phrases",
    cards: [
      { word: "Dov'è...?", translation: "Where is...?" },
      { word: "Il conto, per favore", translation: "The bill, please" },
      { word: "Aiuto!", translation: "Help!" },
    ],
  },
  {
    title: "Verbs Conjugation",
    cards: [
      { word: "Io parlo", translation: "I speak" },
      { word: "Tu mangi", translation: "You eat" },
      { word: "Lui/Lei dorme", translation: "He/She sleeps" },
      { word: "Noi andiamo", translation: "We go" },
      { word: "Voi bevete", translation: "You all drink" },
      { word: "Essere", translation: "To be" },
    ],
  },
];

export const FlashcardApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>("dashboard");
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // 1. Updated handler to select topic and switch to review view
  const handleStartPractice = (topicTitle: string) => {
    const topic = ALL_TOPICS.find((t) => t.title === topicTitle);
    if (topic) {
      setSelectedTopic(topic);
      setCurrentCardIndex(0); // Start from the first card
      setCurrentView("review");
    }
  };

  const handleContinue = () => {
    alert("Exercise complete! Returning to Dashboard.");
    setSelectedTopic(null);
    setCurrentView("dashboard");
  };

  // 2. Navigation handlers for the flashcard review session
  const goToNextCard = () => {
    if (selectedTopic && currentCardIndex < selectedTopic.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else if (selectedTopic) {
      // Logic for session end/looping can go here
      alert("End of topic cards! Returning to Dashboard.");
      handleContinue();
    }
  };

  const goToPreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  // 3. Pass topic and card data/handlers to the Review Session
  return (
    <div className="min-h-screen  ">
      {currentView === "dashboard" ? (
        <FlashcardDashboard
          onStartPractice={handleStartPractice}
          topics={ALL_TOPICS.map((t) => t.title)} // Pass only titles to Dashboard
        />
      ) : selectedTopic ? (
        <FlashcardReviewSession
          topic={selectedTopic}
          cardIndex={currentCardIndex}
          onContinue={handleContinue}
          goToNextCard={goToNextCard}
          goToPreviousCard={goToPreviousCard}
        />
      ) : (
        <FlashcardDashboard
          onStartPractice={handleStartPractice}
          topics={ALL_TOPICS.map((t) => t.title)}
        />
      )}
    </div>
  );
};

export default FlashcardApp;












// import React, { useState } from "react";
// import { FlashcardDashboard } from "./FlashcardDashboard";
// import FlashcardReviewSession from "./FlashcardReviewSession";

// type AppView = "dashboard" | "review";

// export const FlashcardApp: React.FC = () => {
//   const [currentView, setCurrentView] = useState<AppView>("dashboard");

//   const handleStartPractice = () => {
//     setCurrentView("review");
//   };

//   const handleContinue = () => {
//     alert("Exercise complete! Returning to Dashboard.");
//     setCurrentView("dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {currentView === "dashboard" ? (
//         <FlashcardDashboard onStartPractice={handleStartPractice} />
//       ) : (
//         <FlashcardReviewSession onContinue={handleContinue} />
//       )}
//     </div>
//   );
// };

// export default FlashcardApp;











// import React, { useState } from 'react';
// import { FlashcardDashboard } from './FlashcardDashboard';
// import { PronunciationExercise } from './PronunciationExercise';
// import FlashcardReviewSession from './FlashcardReviewSession';

// type AppView = 'dashboard' | 'pronunciation';

// export const FlashcardApp: React.FC = () => {
//     // State to control which view is displayed
//     const [currentView, setCurrentView] = useState<AppView>('dashboard');

//     const handleStartPractice = () => {
//         // When a user clicks "Start" on the dashboard, open the pronunciation exercise
//         setCurrentView('pronunciation');
//     };

//     const handleTryAgain = () => {
//         // In a real app, this would re-enable recording. Here, we just log.
//         console.log("Starting a new recording attempt.");
//     };

//     const handleContinue = () => {
//         // After completing the exercise, return to the dashboard (or move to the next card)
//         alert("Exercise complete! Returning to Dashboard.");
//         setCurrentView('dashboard');
//     };

//     return (
//         <div className="min-h-screen bg-gray-50">
//             {currentView === 'dashboard' ? (
//                 <FlashcardDashboard onStartPractice={handleStartPractice} />
//             ) : (
//                 <FlashcardReviewSession 
//                     onTryAgain={handleTryAgain}
//                     onContinue={handleContinue}
//                 />
//             )}
//         </div>
//     );
// };

// export default FlashcardApp;