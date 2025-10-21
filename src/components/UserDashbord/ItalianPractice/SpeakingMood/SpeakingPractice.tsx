import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
// Assuming these types and components are defined in separate files as per the refactoring
import { ExerciseType, Phrase, ConversationData } from './types';
import PronunciationPractice from './PronunciationPractice';
import ConversationPractice from './ConversationPractice';
import ReadingPractice from './ReadingPractice';
import CompletionPage from './CompletionPage';
import ExerciseHeader from './ExerciseHeader';

const pronunciationPhrases: Phrase[] = [
  {
    italian: "Buongiorno, Come Sta?",
    english: "Good morning, how are you?",
    phonetic: "[bwon-JOR-no, KO-meh STAH]"
  },
  {
    italian: "Mi Chiamo Marco E Vengo Dall'Italia.",
    english: "My name is Marco and I come from Italy.",
    phonetic: "[mee kee-AH-moh MAR-koh eh VEN-goh dahl ee-TAH-lee-ah]"
  },
  {
    // Index 2: The phrase shown in the image
    italian: "Dove Posso Trovare Una Farmacia?",
    english: "Where can I find a pharmacy?",
    phonetic: "[DOH-veh POS-soh troh-VAH-reh OO-nah far-mah-CHEE-ah]"
  },
  {
    // Index 3: A duplicate, kept for array length consistency
    italian: "Un caffè e un cornetto, per favore.", 
    english: "A coffee and a croissant, please.",
    phonetic: "[oon kahf-FEH eh oon kor-NET-toh, pehr fah-VOH-reh]"
  }
];

const conversationData: ConversationData = {
  title: "Ordering At A Restaurant",
  description: "You are at an Italian restaurant. The waiter will greet you and take your order.",
  waiterMessages: [
    { italian: "Buongiorno! Benvenuto al nostro ristorante. Ha una prenotazione?", english: "Good morning! Welcome to our restaurant. Do you have a reservation?" },
    { italian: "Perfetto, Ecco il menu. Desidera qualcosa da bere?", english: "Perfect, here is the menu. Would you like something to drink?" },
    { italian: "Ottima scelta! E per il primo piatto?", english: "Great choice! And for the first course?" },
    { italian: "Grazie! E un ordine arriverà tra 15 minuti.", english: "Thank you! Your order will arrive in 15 minutes." }
  ],
  userResponses: [
    "No, non ho una prenotazione. C'è un tavolo libero?",
    "Vorrei una birra, per favore.",
    "Prendo gli spaghetti carbonara.",
    "Perfetto, grazie mille!"
  ]
};

const SpeakingPractice: React.FC = () => {
  // --- STATE MODIFIED TO RENDER IMAGE VIEW ---
  const [currentExercise, setCurrentExercise] = useState<ExerciseType>('pronunciation');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(2); // Start at the 3rd phrase (index 2)
  const [isRecording, setIsRecording] = useState(false);
  const [recordingScore, setRecordingScore] = useState<number | null>(94); // Start with a 94% score
  // ------------------------------------------
    
  const [conversationStarted, setConversationStarted] = useState(false);
  const [currentConversationStep, setCurrentConversationStep] = useState(0);
  const [userResponses, setUserResponses] = useState<string[]>([]);
  const [showConversationComplete, setShowConversationComplete] = useState(false);

  const handleMicClick = () => {
    // Start Recording Simulation
    if (!isRecording) {
      setIsRecording(true);
      // Reset score when recording starts
      setRecordingScore(null); 
      // Stop Recording Simulation and Score after 2s
      setTimeout(() => {
        setIsRecording(false);
        // Set the score to 94% again (or a random one) for demonstration
        setRecordingScore(94); 
      }, 2000);
    }
  };

  const handleStartConversation = () => {
    setConversationStarted(true);
    setCurrentConversationStep(0);
    setUserResponses([]);
    setShowConversationComplete(false);
  };

  const handleRecordConversationResponse = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      // Simulate user response and advance conversation
      const newUserResponses = [...userResponses, conversationData.userResponses[currentConversationStep]];
      setUserResponses(newUserResponses);
      
      if (currentConversationStep < conversationData.waiterMessages.length - 1) {
        setTimeout(() => {
          setCurrentConversationStep(currentConversationStep + 1);
        }, 500);
      } else {
        setTimeout(() => {
          setShowConversationComplete(true);
        }, 500);
      }
    }, 2000);
  };

  const handleContinue = () => {
    if (currentExercise === 'pronunciation') {
      if (currentPhraseIndex < pronunciationPhrases.length - 1) {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
        setRecordingScore(null);
      } else {
        setCurrentExercise('conversation');
        setCurrentPhraseIndex(0); // Reset for next exercise type
        setRecordingScore(null);
      }
    } else if (currentExercise === 'conversation') {
      setCurrentExercise('reading');
    } else if (currentExercise === 'reading') {
      setCurrentExercise('complete');
    }
    // Reset recording state
    setIsRecording(false);
    setRecordingScore(null);
  };

  const handleTryAgain = () => {
    setRecordingScore(null);
    setIsRecording(false);
  };

  const resetAllExercises = () => {
    setCurrentExercise('pronunciation');
    setCurrentPhraseIndex(0);
    setRecordingScore(null);
    setConversationStarted(false);
    setCurrentConversationStep(0);
    setUserResponses([]);
    setShowConversationComplete(false);
    setIsRecording(false);
  };

  return (
    <div className="min-h-screen  ">
      <div className="  border-b border-gray-200">
        <div className="  mx-auto px-4 py-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back To Practice</span>
          </button>
        </div>
      </div>

      <div className="  mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Speaking Practice</h1>
          <p className="text-gray-600">Improve your Italian pronunciation and conversation skills</p>
        </div>

        {currentExercise !== 'complete' && (
          <ExerciseHeader 
            currentExercise={currentExercise} 
            currentPhraseIndex={currentPhraseIndex} 
          />
        )}

        {currentExercise === 'pronunciation' && (
          <PronunciationPractice
            phrase={pronunciationPhrases[currentPhraseIndex]}
            isRecording={isRecording}
            recordingScore={recordingScore}
            onMicClick={handleMicClick}
            onContinue={handleContinue}
            onTryAgain={handleTryAgain}
          />
        )}
        
        {currentExercise === 'conversation' && (
          <ConversationPractice
            conversationData={conversationData}
            conversationStarted={conversationStarted}
            currentConversationStep={currentConversationStep}
            userResponses={userResponses}
            showConversationComplete={showConversationComplete}
            isRecording={isRecording}
            onStart={handleStartConversation}
            onRecordResponse={handleRecordConversationResponse}
            onContinue={handleContinue}
            onTryAgain={handleStartConversation} // Start over simulation
          />
        )}

        {currentExercise === 'reading' && (
          <ReadingPractice
            isRecording={isRecording}
            onMicClick={handleMicClick} // Reusing the same recording logic for reading
            onContinue={handleContinue}
            onTryAgain={handleTryAgain}
          />
        )}

        {currentExercise === 'complete' && (
          <CompletionPage
            onPracticeAgain={resetAllExercises}
          />
        )}
      </div>
    </div>
  );
};

export default SpeakingPractice;











// import React, { useState } from 'react';
// import { ArrowLeft } from 'lucide-react';
// import { ExerciseType, Phrase, ConversationData } from './types';
// import PronunciationPractice from './PronunciationPractice';
// import ConversationPractice from './ConversationPractice';
// import ReadingPractice from './ReadingPractice';
// import CompletionPage from './CompletionPage';
// import ExerciseHeader from './ExerciseHeader';

// const pronunciationPhrases: Phrase[] = [
//   {
//     italian: "Buongiorno, Come Sta?",
//     english: "Good morning, how are you?",
//     phonetic: "[bwon-JOR-no, KO-meh STAH]"
//   },
//   {
//     italian: "Mi Chiamo Marco E Vengo Dall'Italia.",
//     english: "My name is Marco and I come from Italy.",
//     phonetic: "[mee kee-AH-moh MAR-koh eh VEN-goh dahl ee-TAH-lee-ah]"
//   },
//   {
//     italian: "Dove Posso Trovare Una Farmacia?",
//     english: "Where can I find a pharmacy?",
//     phonetic: "[DOH-veh POS-soh troh-VAH-reh OO-nah far-mah-CHEE-ah]"
//   },
//   {
//     italian: "Dove Posso Trovare Una Farmacia?",
//     english: "Where can I find a pharmacy?",
//     phonetic: "[DOH-veh POS-soh troh-VAH-reh OO-nah far-mah-CHEE-ah]"
//   }
// ];

// const conversationData: ConversationData = {
//   title: "Ordering At A Restaurant",
//   description: "You are at an Italian restaurant. The waiter will greet you and take your order.",
//   waiterMessages: [
//     { italian: "Buongiorno! Benvenuto al nostro ristorante. Ha una prenotazione?", english: "Good morning! Welcome to our restaurant. Do you have a reservation?" },
//     { italian: "Perfetto, Ecco il menu. Desidera qualcosa da bere?", english: "Perfect, here is the menu. Would you like something to drink?" },
//     { italian: "Ottima scelta! E per il primo piatto?", english: "Great choice! And for the first course?" },
//     { italian: "Grazie! E un ordine arriverà tra 15 minuti.", english: "Thank you! Your order will arrive in 15 minutes." }
//   ],
//   userResponses: [
//     "No, non ho una prenotazione. C'è un tavolo libero?",
//     "Vorrei una birra, per favore.",
//     "Prendo gli spaghetti carbonara.",
//     "Perfetto, grazie mille!"
//   ]
// };

// const SpeakingPractice: React.FC = () => {
//   const [currentExercise, setCurrentExercise] = useState<ExerciseType>('pronunciation');
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordingScore, setRecordingScore] = useState<number | null>(null);
//   const [conversationStarted, setConversationStarted] = useState(false);
//   const [currentConversationStep, setCurrentConversationStep] = useState(0);
//   const [userResponses, setUserResponses] = useState<string[]>([]);
//   const [showConversationComplete, setShowConversationComplete] = useState(false);

//   const handleMicClick = () => {
//     // Start Recording Simulation
//     if (!isRecording) {
//       setIsRecording(true);
//       // Stop Recording Simulation and Score after 2s
//       setTimeout(() => {
//         setIsRecording(false);
//         setRecordingScore(Math.floor(Math.random() * 15) + 85);
//       }, 2000);
//     }
//   };

//   const handleStartConversation = () => {
//     setConversationStarted(true);
//     setCurrentConversationStep(0);
//     setUserResponses([]);
//     setShowConversationComplete(false);
//   };

//   const handleRecordConversationResponse = () => {
//     setIsRecording(true);
//     setTimeout(() => {
//       setIsRecording(false);
//       // Simulate user response and advance conversation
//       const newUserResponses = [...userResponses, conversationData.userResponses[currentConversationStep]];
//       setUserResponses(newUserResponses);
      
//       if (currentConversationStep < conversationData.waiterMessages.length - 1) {
//         setTimeout(() => {
//           setCurrentConversationStep(currentConversationStep + 1);
//         }, 500);
//       } else {
//         setTimeout(() => {
//           setShowConversationComplete(true);
//         }, 500);
//       }
//     }, 2000);
//   };

//   const handleContinue = () => {
//     if (currentExercise === 'pronunciation') {
//       if (currentPhraseIndex < pronunciationPhrases.length - 1) {
//         setCurrentPhraseIndex(currentPhraseIndex + 1);
//         setRecordingScore(null);
//       } else {
//         setCurrentExercise('conversation');
//         setCurrentPhraseIndex(0); // Reset for next exercise type
//         setRecordingScore(null);
//       }
//     } else if (currentExercise === 'conversation') {
//       setCurrentExercise('reading');
//     } else if (currentExercise === 'reading') {
//       setCurrentExercise('complete');
//     }
//     // Reset recording state
//     setIsRecording(false);
//     setRecordingScore(null);
//   };

//   const handleTryAgain = () => {
//     setRecordingScore(null);
//     setIsRecording(false);
//   };

//   const resetAllExercises = () => {
//     setCurrentExercise('pronunciation');
//     setCurrentPhraseIndex(0);
//     setRecordingScore(null);
//     setConversationStarted(false);
//     setCurrentConversationStep(0);
//     setUserResponses([]);
//     setShowConversationComplete(false);
//     setIsRecording(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-4 py-4">
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
//             <ArrowLeft size={20} />
//             <span className="text-sm font-medium">Back To Practice</span>
//           </button>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Speaking Practice</h1>
//           <p className="text-gray-600">Improve your Italian pronunciation and conversation skills</p>
//         </div>

//         {currentExercise !== 'complete' && (
//           <ExerciseHeader 
//             currentExercise={currentExercise} 
//             currentPhraseIndex={currentPhraseIndex} 
//           />
//         )}

//         {currentExercise === 'pronunciation' && (
//           <PronunciationPractice
//             phrase={pronunciationPhrases[currentPhraseIndex]}
//             isRecording={isRecording}
//             recordingScore={recordingScore}
//             onMicClick={handleMicClick}
//             onContinue={handleContinue}
//             onTryAgain={handleTryAgain}
//           />
//         )}
        
//         {currentExercise === 'conversation' && (
//           <ConversationPractice
//             conversationData={conversationData}
//             conversationStarted={conversationStarted}
//             currentConversationStep={currentConversationStep}
//             userResponses={userResponses}
//             showConversationComplete={showConversationComplete}
//             isRecording={isRecording}
//             onStart={handleStartConversation}
//             onRecordResponse={handleRecordConversationResponse}
//             onContinue={handleContinue}
//             onTryAgain={handleStartConversation} // Start over simulation
//           />
//         )}

//         {currentExercise === 'reading' && (
//           <ReadingPractice
//             isRecording={isRecording}
//             onMicClick={handleMicClick} // Reusing the same recording logic for reading
//             onContinue={handleContinue}
//             onTryAgain={handleTryAgain}
//           />
//         )}

//         {currentExercise === 'complete' && (
//           <CompletionPage
//             onPracticeAgain={resetAllExercises}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default SpeakingPractice;




















// import React, { useState } from 'react';
// import { ArrowLeft, Mic, Volume2, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';

// type ExerciseType = 'pronunciation' | 'conversation' | 'reading' | 'complete';

// const SpeakingPractice: React.FC = () => {
//   const [currentExercise, setCurrentExercise] = useState<ExerciseType>('pronunciation');
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [isRecording, setIsRecording] = useState(false);
//   const [showPhonetic, setShowPhonetic] = useState(false);
//   const [recordingScore, setRecordingScore] = useState<number | null>(null);
//   const [conversationStarted, setConversationStarted] = useState(false);
//   const [currentConversationStep, setCurrentConversationStep] = useState(0);
//   const [userResponses, setUserResponses] = useState<string[]>([]);
//   const [showConversationComplete, setShowConversationComplete] = useState(false);

//   const pronunciationPhrases = [
//     {
//       italian: "Buongiorno, Come Sta?",
//       english: "Good morning, how are you?",
//       phonetic: "[bwon-JOR-no, KO-meh STAH]"
//     },
//     {
//       italian: "Mi Chiamo Marco E Vengo Dall'Italia.",
//       english: "My name is Marco and I come from Italy.",
//       phonetic: "[mee kee-AH-moh MAR-koh eh VEN-goh dahl ee-TAH-lee-ah]"
//     },
//     {
//       italian: "Dove Posso Trovare Una Farmacia?",
//       english: "Where can I find a pharmacy?",
//       phonetic: "[DOH-veh POS-soh troh-VAH-reh OO-nah far-mah-CHEE-ah]"
//     }
//   ];

//   const conversationData = {
//     title: "Ordering At A Restaurant",
//     description: "You are at an Italian restaurant. The waiter will greet you and take your order.",
//     waiterMessages: [
//       {
//         italian: "Buongiorno! Benvenuto al nostro ristorante. Ha una prenotazione?",
//         english: "Good morning! Welcome to our restaurant. Do you have a reservation?"
//       },
//       {
//         italian: "Perfetto, Ecco il menu. Desidera qualcosa da bere?",
//         english: "Perfect, here is the menu. Would you like something to drink?"
//       },
//       {
//         italian: "Ottima scelta! E per il primo piatto?",
//         english: "Great choice! And for the first course?"
//       },
//       {
//         italian: "Grazie! E un ordine arriverà tra 15 minuti.",
//         english: "Thank you! Your order will arrive in 15 minutes."
//       }
//     ],
//     userResponses: [
//       "No, non ho una prenotazione. C'è un tavolo libero?",
//       "Vorrei una birra, per favore.",
//       "Prendo gli spaghetti carbonara.",
//       "Perfetto, grazie mille!"
//     ]
//   };

//   const handleMicClick = () => {
//     setIsRecording(!isRecording);
//     if (!isRecording) {
//       setTimeout(() => {
//         setIsRecording(false);
//         setRecordingScore(Math.floor(Math.random() * 15) + 85);
//       }, 2000);
//     }
//   };

//   const handleStartConversation = () => {
//     setConversationStarted(true);
//     setCurrentConversationStep(0);
//     setUserResponses([]);
//   };

//   const handleRecordResponse = () => {
//     setIsRecording(true);
//     setTimeout(() => {
//       setIsRecording(false);
//       const newResponses = [...userResponses, conversationData.userResponses[currentConversationStep]];
//       setUserResponses(newResponses);
      
//       if (currentConversationStep < conversationData.waiterMessages.length - 1) {
//         setTimeout(() => {
//           setCurrentConversationStep(currentConversationStep + 1);
//         }, 500);
//       } else {
//         setTimeout(() => {
//           setShowConversationComplete(true);
//         }, 500);
//       }
//     }, 2000);
//   };

//   const handleContinue = () => {
//     if (currentExercise === 'pronunciation') {
//       if (currentPhraseIndex < pronunciationPhrases.length - 1) {
//         setCurrentPhraseIndex(currentPhraseIndex + 1);
//         setRecordingScore(null);
//         setShowPhonetic(false);
//       } else {
//         setCurrentExercise('conversation');
//         setCurrentPhraseIndex(0);
//         setRecordingScore(null);
//       }
//     } else if (currentExercise === 'conversation') {
//       setCurrentExercise('reading');
//     } else if (currentExercise === 'reading') {
//       setCurrentExercise('complete');
//     }
//   };

//   const handleTryAgain = () => {
//     setRecordingScore(null);
//     setIsRecording(false);
//   };

//   const handleConversationTryAgain = () => {
//     setConversationStarted(false);
//     setCurrentConversationStep(0);
//     setUserResponses([]);
//     setShowConversationComplete(false);
//   };

//   const resetAllExercises = () => {
//     setCurrentExercise('pronunciation');
//     setCurrentPhraseIndex(0);
//     setRecordingScore(null);
//     setShowPhonetic(false);
//     setConversationStarted(false);
//     setCurrentConversationStep(0);
//     setUserResponses([]);
//     setShowConversationComplete(false);
//     setIsRecording(false);
//   };

//   const renderPronunciationPractice = () => {
//     const phrase = pronunciationPhrases[currentPhraseIndex];
//     return (
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="p-8">
//           <div className="text-center mb-6">
//             <h2 className="text-4xl font-bold text-gray-900 mb-3">
//               "{phrase.italian}"
//             </h2>
//             <p className="text-gray-600 text-lg mb-4">{phrase.english}</p>
            
//             <button
//               onClick={() => setShowPhonetic(!showPhonetic)}
//               className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
//             >
//               {showPhonetic ? 'Hide Phonetic' : 'Show Phonetic'}
//             </button>
            
//             {showPhonetic && (
//               <p className="text-gray-500 text-sm mt-2">{phrase.phonetic}</p>
//             )}
//           </div>

//           <div className="flex justify-center mb-8">
//             <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//               <Volume2 size={20} className="text-gray-700" />
//               <span className="font-medium text-gray-900">Listen To Pronunciation</span>
//             </button>
//           </div>

//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">
//               Record Your Pronunciation
//             </h3>
            
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={handleMicClick}
//                 className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
//                   isRecording
//                     ? 'bg-red-500 hover:bg-red-600 animate-pulse'
//                     : 'bg-indigo-600 hover:bg-indigo-700'
//                 }`}
//               >
//                 <Mic className="text-white" size={32} />
//               </button>
//             </div>

//             <p className="text-gray-600 text-sm mb-8">
//               {isRecording
//                 ? 'Recording... Click to stop'
//                 : 'Click the microphone to record your pronunciation'}
//             </p>

//             {recordingScore !== null && (
//               <div className="mb-8 p-6 bg-green-50 rounded-lg max-w-md mx-auto">
//                 <div className="text-4xl font-bold text-green-600 mb-2">{recordingScore}%</div>
//                 <div className="text-sm text-gray-600 mb-4">Accuracy Score</div>
//                 <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
//                   <div className="bg-green-600 h-2 rounded-full" style={{ width: `${recordingScore}%` }}></div>
//                 </div>
//                 <div className="text-sm text-gray-600">Excellent pronunciation!</div>
//               </div>
//             )}

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleTryAgain}
//                 className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
//               >
//                 <span>🔄</span>
//                 Try Again
//               </button>
//               <button
//                 onClick={handleContinue}
//                 className="px-6 py-3 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition-colors"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderConversationPractice = () => {
//     if (showConversationComplete) {
//       return (
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//                 <CheckCircle className="text-green-600" size={40} />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Conversation Complete!</h2>
//             <p className="text-gray-600">Great job completing the restaurant scenario!</p>
//           </div>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={handleConversationTryAgain}
//               className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
//             >
//               <span>🔄</span>
//               Try Again
//             </button>
//             <button
//               onClick={handleContinue}
//               className="px-6 py-3 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition-colors"
//             >
//               Next Exercise
//             </button>
//           </div>
//         </div>
//       );
//     }

//     if (!conversationStarted) {
//       return (
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//           <div className="p-8">
//             <div className="text-center mb-8">
//               <div className="flex justify-center mb-4">
//                 <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center">
//                   <MessageSquare className="text-indigo-600" size={40} />
//                 </div>
//               </div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-2">{conversationData.title}</h2>
//               <p className="text-gray-600 mb-4">{conversationData.description}</p>
//               <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
//                 View Role Guidance
//               </button>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 onClick={handleStartConversation}
//                 className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//               >
//                 <Volume2 size={20} />
//                 Begin Conversation
//               </button>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="p-8">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
//                 <MessageSquare className="text-indigo-600" size={32} />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">{conversationData.title}</h2>
//             <p className="text-gray-600 mb-4">{conversationData.description}</p>
//             <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
//               View Role Guidance
//             </button>
//           </div>

//           <div className="space-y-4 max-w-2xl mx-auto mb-8">
//             <div className="text-center font-semibold text-gray-900 mb-6">Conversation</div>
            
//             {conversationData.waiterMessages.slice(0, currentConversationStep + 1).map((message, index) => (
//               <div key={index} className="space-y-4">
//                 <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 text-left">
//                   <p className="text-gray-900 font-medium mb-2">{message.italian}</p>
//                   <button className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700">
//                     <Volume2 size={14} />
//                     <span>Listen</span>
//                   </button>
//                 </div>
                
//                 {userResponses[index] && (
//                   <div className="flex justify-end">
//                     <div className="bg-gray-900 text-white rounded-2xl rounded-tr-none p-4 max-w-md">
//                       <p>{userResponses[index]}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {!isRecording && userResponses.length === currentConversationStep && currentConversationStep < conversationData.waiterMessages.length && (
//             <div className="flex justify-center">
//               <button
//                 onClick={handleRecordResponse}
//                 className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
//               >
//                 <Mic size={20} />
//                 Record Your Response
//               </button>
//             </div>
//           )}

//           {isRecording && (
//             <div className="flex flex-col items-center">
//               <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center animate-pulse mb-4">
//                 <Mic className="text-white" size={32} />
//               </div>
//               <p className="text-gray-600 text-sm">Recording your response...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderReadingPractice = () => {
//     return (
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="p-8">
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
//               La città di Roma è famosa in tutto il mondo per la sua storia antica e i suoi monumenti. Il Colosseo, il Foro Romano e la Fontana di Trevi sono alcune delle attrazioni più visitate ogni anno. Camminare per le strade di Roma è come fare un viaggio nel tempo, dove ogni pietra racconta una storia.
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               The city of Rome is famous worldwide for its ancient history and monuments. The Colosseum, Roman Forum and Trevi Fountain are some of the most visited attractions every year. Walking through the streets of Rome is like taking a journey through time, where every stone tells a story.
//             </p>
//             <button className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
//               Hide Translation
//             </button>
//           </div>

//           <div className="text-center">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">
//               Record Your Reading
//             </h3>
            
//             <div className="flex justify-center mb-6">
//               <button
//                 onClick={handleMicClick}
//                 className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
//                   isRecording
//                     ? 'bg-red-500 hover:bg-red-600 animate-pulse'
//                     : 'bg-indigo-600 hover:bg-indigo-700'
//                 }`}
//               >
//                 <Mic className="text-white" size={32} />
//               </button>
//             </div>

//             <p className="text-gray-600 text-sm mb-8">
//               Click the microphone to record your reading
//             </p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={handleTryAgain}
//                 className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
//               >
//                 <span>🔄</span>
//                 Try Again
//               </button>
//               <button
//                 onClick={handleContinue}
//                 className="px-6 py-3 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition-colors"
//               >
//                 Finish
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderCompletePage = () => {
//     return (
//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
//         <div className="p-8">
//           <div className="text-center mb-8">
//             <div className="flex justify-center mb-4">
//               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
//                 <CheckCircle className="text-green-600" size={50} />
//               </div>
//             </div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-2">Speaking Practice Complete!</h2>
//             <p className="text-gray-600">You scored 15 exercises in 8 sessions today!</p>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
//             <div className="bg-green-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-gray-900">10</div>
//               <div className="text-sm text-gray-600">Exercises Done</div>
//             </div>
//             <div className="bg-blue-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-gray-900">75%</div>
//               <div className="text-sm text-gray-600">Accuracy Rate</div>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg text-center">
//               <div className="text-2xl font-bold text-gray-900">30+</div>
//               <div className="text-sm text-gray-600">XP Earned</div>
//             </div>
//           </div>

//           <div className="mb-8 p-4 bg-blue-50 rounded-lg max-w-2xl mx-auto">
//             <div className="flex items-start gap-3">
//               <div className="text-blue-600 mt-1">📊</div>
//               <div>
//                 <h3 className="font-semibold text-gray-900 mb-1">Performance Analysis - Needs Improvement</h3>
//                 <p className="text-sm text-gray-600">
//                   Don't worry! Listening is often the most challenging skill. With targeted practice, you'll see rapid improvement.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="mb-8 max-w-2xl mx-auto">
//             <h3 className="font-semibold text-gray-900 mb-4">📈 Exercise Performance</h3>
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="text-gray-600">Audio Comprehension</span>
//                   <span className="font-medium">0%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-gray-900 h-2 rounded-full" style={{ width: '0%' }}></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="text-gray-600">Dictation Exercise</span>
//                   <span className="font-medium">33%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-gray-900 h-2 rounded-full" style={{ width: '33%' }}></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="flex justify-between text-sm mb-2">
//                   <span className="text-gray-600">Dialogue Sequencing</span>
//                   <span className="font-medium">88%</span>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2">
//                   <div className="bg-gray-900 h-2 rounded-full" style={{ width: '88%' }}></div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mb-8 max-w-2xl mx-auto">
//             <h3 className="font-semibold text-gray-900 mb-4">🎯 Areas for Improvement</h3>
//             <div className="grid grid-cols-3 gap-4">
//               {['Audio Comprehension', 'Dictation Exercise', 'Dialogue Sequencing'].map((area) => (
//                 <div key={area} className="bg-gray-50 p-4 rounded-lg">
//                   <h4 className="font-medium text-gray-900 mb-2 text-sm">{area}</h4>
//                   <p className="text-xs text-gray-600 mb-2">Difficulty understanding main ideas and details</p>
//                   <div className="space-y-1">
//                     {[
//                       'Recommended Practice',
//                       'Practice identifying content before listening',
//                       'Practice justifying content before listening',
//                       'Practice justifying content before listening'
//                     ].map((item, i) => (
//                       <div key={i} className="flex items-start gap-2 text-xs text-gray-600">
//                         <span className="text-green-600">✓</span>
//                         <span>{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="mb-8 max-w-2xl mx-auto">
//             <h3 className="font-semibold text-gray-900 mb-4">📚 Personalized Study Plan</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               Based on your performance, here's what we recommend for your next study session:
//             </p>
//             <div className="space-y-3">
//               <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-900">Begin with very basic Italian audio content</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
//                 <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-900">Begin with very basic Italian audio content</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={resetAllExercises}
//               className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
//             >
//               <span>🔄</span>
//               Practice Again
//             </button>
//             <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium text-white hover:bg-blue-700 transition-colors">
//               ➜ More Speaking Practice
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const getExerciseTitle = () => {
//     switch (currentExercise) {
//       case 'pronunciation':
//         return {
//           title: 'Pronunciation Practice',
//           description: 'Listen and repeat the Italian phrases with correct pronunciation.',
//           icon: <Volume2 className="text-white" size={20} />
//         };
//       case 'conversation':
//         return {
//           title: 'Conversation Practice',
//           description: 'Practice real conversations with AI feedback.',
//           icon: <MessageSquare className="text-white" size={20} />
//         };
//       case 'reading':
//         return {
//           title: 'Reading Aloud',
//           description: 'Practice the text and receive your response and rhythm.',
//           icon: <BookOpen className="text-white" size={20} />
//         };
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-4xl mx-auto px-4 py-4">
//           <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
//             <ArrowLeft size={20} />
//             <span className="text-sm font-medium">Back To Practice</span>
//           </button>
//         </div>
//       </div>

//       <div className="max-w-4xl mx-auto px-4 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Speaking Practice</h1>
//           <p className="text-gray-600">Improve your Italian pronunciation and conversation skills</p>
//         </div>

//         {currentExercise !== 'complete' && getExerciseTitle() && (
//           <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
//                   {getExerciseTitle()?.icon}
//                 </div>
//                 <div>
//                   <h2 className="text-lg font-semibold text-gray-900">{getExerciseTitle()?.title}</h2>
//                   <p className="text-sm text-gray-600">{getExerciseTitle()?.description}</p>
//                 </div>
//               </div>
//               <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//                 Exercise {currentExercise === 'pronunciation' ? currentPhraseIndex + 1 : currentExercise === 'conversation' ? '2' : '3'}/3
//               </button>
//             </div>
//           </div>
//         )}

//         {currentExercise === 'pronunciation' && renderPronunciationPractice()}
//         {currentExercise === 'conversation' && renderConversationPractice()}
//         {currentExercise === 'reading' && renderReadingPractice()}
//         {currentExercise === 'complete' && renderCompletePage()}
//       </div>
//     </div>
//   );
// };

// export default SpeakingPractice;