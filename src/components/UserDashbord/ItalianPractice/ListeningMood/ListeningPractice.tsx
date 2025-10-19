



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ListeningDictation from './ListeningDictation';
import SentenceOrdering from './SentenceOrdering';
import ListeningPracticeComplete from './ListeningPracticeComplete';
import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
import { AudioPlayerComponent } from './AudioPlayerComponent ';
 
interface Question {
  id: number;
  question: string;
  options: string[];
  selectedAnswer: string | null;
}

const ListeningPractice: React.FC = () => {
  const navigate = useNavigate();
  const audioSrc = "../../../../../public/videoplayback.m4a";

  const [questions, setQuestions] = useState<Question[]>([
    { id: 1, question: "Che cosa ordina Marco?", options: ["Un cappuccino", "Un caffè", "Un cornetto", "Un tè"], selectedAnswer: null },
    { id: 2, question: "Dove si svolge la conversazione?", options: ["In un ristorante", "In un bar", "In una pizzeria", "In un supermercato"], selectedAnswer: null },
    { id: 3, question: "A che ora è l'appuntamento di Marco?", options: ["Alle 9:00", "Alle 10:00", "Alle 11:00", "Alle 12:00"], selectedAnswer: null },
    { id: 4, question: "Con chi ha l'appuntamento Marco?", options: ["Con il suo capo", "Con un amico", "Con un cliente", "Con sua sorella"], selectedAnswer: null },
    { id: 5, question: "Quanto costa il caffè?", options: ["1 euro", "1.50 euro", "2 euro", "2.50 euro"], selectedAnswer: null },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [phase, setPhase] = useState<'questions' | 'dictation' | 'sentence' | 'complete'>('questions');

  const handleOptionSelect = (option: string) => {
    const updated = [...questions];
    updated[currentQuestion].selectedAnswer = option;
    setQuestions(updated);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setPhase('dictation');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const handleDictationContinue = () => setPhase('sentence');
  const handleSentenceComplete = () => setPhase('complete');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto">
        {phase !== 'complete' && (
          <>
            <button
            onClick={() => navigate("/user/practice")}
            className="flex border p-3 cursor-pointer rounded-2xl items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-base font-semibold">Back To Practice</span>
          </button>

            <AudioPlayerComponent src={audioSrc} />

            {phase === 'questions' && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
                <ProgressBar
                  current={currentQuestion}
                  total={questions.length}
                  label="Question"
                  color="bg-black"
                />

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium text-gray-900">{questions[currentQuestion].question}</h3>
                </div>

                <div className="space-y-3 mb-6">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(option)}
                      className={`w-full text-left px-4 py-3 border-2 rounded-lg  transition-colors cursor-pointer ${
                        questions[currentQuestion].selectedAnswer === option
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'bg-white border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      <span className="font-semibold text-gray-900">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      <span className="ml-2 text-gray-700">{option}</span>
                    </button>
                  ))}
                </div>

                <div className="flex justify-center gap-6">
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestion === 0}
                    className={`px-6 py-3 border-2 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer ${
                      currentQuestion === 0
                        ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous
                  </button>

                  <button
                    onClick={handleNextQuestion}
                    disabled={!questions[currentQuestion].selectedAnswer}
                    className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors cursor-pointer ${
                      !questions[currentQuestion].selectedAnswer
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                    <ChevronLeft className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </div>
            )}

            {phase === 'dictation' && (
              <ListeningDictation continueCallback={handleDictationContinue} />
            )}

            {phase === 'sentence' && (
              <SentenceOrdering continueCallback={handleSentenceComplete} />
            )}
          </>
        )}

        {phase === 'complete' && <ListeningPracticeComplete />}
      </div>
    </div>
  );
};

export default ListeningPractice;













// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ChevronLeft, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Headphones } from 'lucide-react';
//  import ReactPlayer from 'react-player';
// import ListeningDictation from './ListeningDictation';
// import SentenceOrdering from './SentenceOrdering';
// import ListeningPracticeComplete from './ListeningPracticeComplete';
//  import { ProgressBar } from '@/components/ProgressBar/ProgressBar';
// import { AudioPlayerComponent } from './AudioPlayerComponent ';

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   selectedAnswer: string | null;
// }

// const ListeningPractice: React.FC = () => {
//   const navigate = useNavigate();
//   const audioSrc = "../../../../../public//videoplayback.m4a"; // <--- CHANGE THIS PATH

//   // Audio & playback state
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(150);
//   const [speed, setSpeed] = useState(1);
//   const [volume, setVolume] = useState(0.7);
//   const [isMuted, setIsMuted] = useState(false);

//   // Question & phase state
//   const [questions, setQuestions] = useState<Question[]>([
//     { id: 1, question: "Che cosa ordina Marco?", options: ["Un cappuccino", "Un caffè", "Un cornetto", "Un tè"], selectedAnswer: null },
//     { id: 2, question: "Dove si svolge la conversazione?", options: ["In un ristorante", "In un bar", "In una pizzeria", "In un supermercato"], selectedAnswer: null },
//     { id: 3, question: "A che ora è l'appuntamento di Marco?", options: ["Alle 9:00", "Alle 10:00", "Alle 11:00", "Alle 12:00"], selectedAnswer: null },
//     { id: 4, question: "Con chi ha l'appuntamento Marco?", options: ["Con il suo capo", "Con un amico", "Con un cliente", "Con sua sorella"], selectedAnswer: null },
//     { id: 5, question: "Quanto costa il caffè?", options: ["1 euro", "1.50 euro", "2 euro", "2.50 euro"], selectedAnswer: null },
//   ]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [phase, setPhase] = useState<'questions' | 'dictation' | 'sentence' | 'complete'>('questions');

//   // Handlers
//   const handleOptionSelect = (option: string) => {
//     const updated = [...questions];
//     updated[currentQuestion].selectedAnswer = option;
//     setQuestions(updated);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setPhase('dictation');
//     }
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
//   };

//   const handleDictationContinue = () => setPhase('sentence');
//   const handleSentenceComplete = () => setPhase('complete');

//   // Audio handlers
//   const handlePlayPause = () => setIsPlaying(!isPlaying);
//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTime(parseFloat(e.target.value));
//   const handleSpeedChange = (inc: boolean) => setSpeed(prev => inc ? Math.min(prev + 0.25, 2) : Math.max(prev - 0.25, 0.5));
//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const v = parseFloat(e.target.value);
//     setVolume(v);
//     if (v > 0) setIsMuted(false);
//   };
//   const toggleMute = () => setIsMuted(!isMuted);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="mx-auto  ">

//         {phase !== 'complete' && (
//           <>
//             {/* Back Button */}
//             <button
//               onClick={() => navigate("/user/practice")}
//               className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
//             >
//               <ChevronLeft className="w-4 h-4" />
//               <span className="text-sm">Back To Practice</span>
//             </button>

//             {/* Audio Player */}
//              <AudioPlayerComponent src={audioSrc} />
//              import ReactPlayer from 'react-player';

// // ... inside your component
// {/* <ReactPlayer
//   url={src} // Your YouTube link goes here
//   playing={isPlaying}
//   onPlay={() => setIsPlaying(true)}
//   onPause={() => setIsPlaying(false)}
//   playbackRate={speed}
//   volume={volume}
//   muted={isMuted}
//   // ... other props for seeking, duration, etc.
//   width='0' // Hide the video/visual component
//   height='0'
// /> */}
// // ...

         

// {phase === 'questions' && (
//   <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
//     {/* Question Progress */}
//     {/* <div className="mb-4">
//       <div className="text-xs text-gray-600 mb-2">
//         Question {currentQuestion + 1} of {questions.length}
//       </div>
//       <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//         <div
//           className="h-full bg-indigo-600 transition-all duration-300"
//           style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
//         />
//       </div>
//     </div> */}

//    <ProgressBar
//         current={currentQuestion}
//         total={questions.length}
//         label="Question"
//         color="bg-black"
//       />


//     {/* Question */}
//     <div className="bg-gray-50 rounded-lg p-4 mb-4">
//       <h3 className="font-medium text-gray-900">{questions[currentQuestion].question}</h3>
//     </div>

//     {/* Answer Options */}
//     <div className="space-y-3 mb-6">
//       {questions[currentQuestion].options.map((option, idx) => (
//         <button
//           key={idx}
//           onClick={() => handleOptionSelect(option)}
//           className={`w-full text-left px-4 py-3 border-2 rounded-lg transition-colors ${
//             questions[currentQuestion].selectedAnswer === option
//               ? 'border-indigo-600 bg-indigo-50'
//               : 'bg-white border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
//           }`}
//         >
//           <span className="font-semibold text-gray-900">{String.fromCharCode(65 + idx)}.</span>
//           <span className="ml-2 text-gray-700">{option}</span>
//         </button>
//       ))}
//     </div>

//     {/* Navigation Buttons */}
//     <div className="flex justify-center gap-6">
//       <button
//         onClick={handlePreviousQuestion}
//         disabled={currentQuestion === 0}
//         className={`px-6 py-3 border-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
//           currentQuestion === 0
//             ? 'border-gray-200 text-gray-400 cursor-not-allowed'
//             : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//         }`}
//       >
//         <ChevronLeft className="w-4 h-4" /> Previous
//       </button>

//       <button
//         onClick={handleNextQuestion}
//         disabled={!questions[currentQuestion].selectedAnswer}
//         className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${
//           !questions[currentQuestion].selectedAnswer
//             ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//             : 'bg-blue-600 text-white hover:bg-blue-700'
//         }`}
//       >
//         {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
//         <ChevronLeft className="w-4 h-4 rotate-180" />
//       </button>
//     </div>
//   </div>
// )}





//             {phase === 'dictation' && <ListeningDictation continueCallback={handleDictationContinue} />}
//             {phase === 'sentence' && <SentenceOrdering continueCallback={handleSentenceComplete} />}
//           </>
//         )}

//         {/* Complete Page */}
//         {phase === 'complete' && <ListeningPracticeComplete />}
//       </div>
//     </div>
//   );
// };

// export default ListeningPractice;



















// import React, { useState } from 'react';
// import { ChevronLeft, Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Headphones } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import ListeningDictation from './ListeningDictation'; // Make sure path is correct

// interface Question {
//   id: number;
//   question: string;
//   options: string[];
//   selectedAnswer: string | null;
// }

// const ListeningPractice: React.FC = () => {
//   const navigate = useNavigate();
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(150);
//   const [speed, setSpeed] = useState(1);
//   const [volume, setVolume] = useState(0.7);
//   const [isMuted, setIsMuted] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [showDictation, setShowDictation] = useState(false);

//   const [questions, setQuestions] = useState<Question[]>([
//     { id: 1, question: "Che cosa ordina Marco?", options: ["Un cappuccino", "Un caffè", "Un cornetto", "un tè"], selectedAnswer: null },
//     { id: 2, question: "Dove si svolge la conversazione?", options: ["In un ristorante", "In un bar", "In una pizzeria", "In un supermercato"], selectedAnswer: null },
//     { id: 3, question: "A che ora è l'appuntamento di Marco?", options: ["Alle 9:00", "Alle 10:00", "Alle 11:00", "Alle 12:00"], selectedAnswer: null },
//     { id: 4, question: "Con chi ha l'appuntamento Marco?", options: ["Con il suo capo", "Con un amico", "Con un cliente", "Con sua sorella"], selectedAnswer: null },
//     { id: 5, question: "Quanto costa il caffè?", options: ["1 euro", "1.50 euro", "2 euro", "2.50 euro"], selectedAnswer: null },
//   ]);

//   const totalQuestions = questions.length;

//   // ----------------- Handlers -----------------
//   const handleOptionSelect = (option: string) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[currentQuestion].selectedAnswer = option;
//     setQuestions(updatedQuestions);
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       setShowDictation(true); // Show dictation when last question is done
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const handlePlayPause = () => setIsPlaying(!isPlaying);
//   const handleSpeedChange = (inc: boolean) => setSpeed(prev => inc ? Math.min(prev + 0.25, 2) : Math.max(prev - 0.25, 0.5));
//   const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const v = parseFloat(e.target.value);
//     setVolume(v);
//     if (v > 0) setIsMuted(false);
//   };
//   const toggleMute = () => setIsMuted(!isMuted);
//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTime(parseFloat(e.target.value));

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="mx-auto max-w-4xl">
//         {/* Header */}
//         <button
//           onClick={() => navigate("/user/practice")}
//           className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
//         >
//           <ChevronLeft className="w-4 h-4" />
//           <span className="text-sm">Back To Practice</span>
//         </button>

//         {/* Title Section */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Listening Practice</h1>
//           <p className="text-gray-600">Improve your Italian listening comprehension</p>
//         </div>

//         {/* -------- Audio Player (Live, always visible) -------- */}
//         {/* <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
//           <div className="flex items-start justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg flex items-center justify-center">
//                 <Headphones className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h2 className="text-lg font-semibold text-gray-900">Audio Comprehension</h2>
//                 <p className="text-sm text-gray-600">Listen to the audio while answering</p>
//               </div>
//             </div>
//             <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//               Exercise 1/3
//             </button>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-6 mb-6">
//              <div className="mb-4">
//               <input
//                 type="range"
//                 min="0"
//                 max={duration}
//                 value={currentTime}
//                 onChange={handleSeek}
//                 className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//                 style={{
//                   background: `linear-gradient(to right, #d1d5db 0%, #d1d5db ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
//                 }}
//               />
//               <div className="flex justify-between text-xs text-gray-500 mt-1">
//                 <span>{formatTime(currentTime)}</span>
//                 <span>{formatTime(duration)}</span>
//               </div>
//             </div>

//              <div className="flex items-center justify-center gap-4 mb-6">
//               <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
//                 <SkipBack className="w-5 h-5 text-gray-700" />
//               </button>
//               <button
//                 onClick={handlePlayPause}
//                 className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
//               >
//                 {isPlaying ? (
//                   <Pause className="w-6 h-6 text-white" fill="white" />
//                 ) : (
//                   <Play className="w-6 h-6 text-white ml-1" fill="white" />
//                 )}
//               </button>
//               <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
//                 <SkipForward className="w-5 h-5 text-gray-700" />
//               </button>
//             </div>

//              <div className="flex items-center justify-between gap-8">
//               <div className="flex-1">
//                 <div className="text-sm font-medium text-gray-700 mb-2">Speed</div>
//                 <div className="flex items-center gap-2">
//                   <button onClick={() => handleSpeedChange(false)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">-</button>
//                   <div className="w-16 h-8 flex items-center justify-center bg-white border border-gray-300 rounded font-medium text-sm">{speed}x</div>
//                   <button onClick={() => handleSpeedChange(true)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">+</button>
//                 </div>
//               </div>

//               <div className="flex-1">
//                 <div className="text-sm font-medium text-gray-700 mb-2">Volume</div>
//                 <div className="flex items-center gap-2">
//                   <button onClick={toggleMute} className="text-gray-600 hover:text-gray-800">
//                     {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//                   </button>
//                   <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.01"
//                     value={isMuted ? 0 : volume}
//                     onChange={handleVolumeChange}
//                     className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div> */}\

// {/* Audio Player */}
//           <div className="bg-gray-50 rounded-lg p-6 mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <Headphones className="w-4 h-4 text-gray-600" />
//               <span className="text-sm font-medium text-gray-700">Una Conversazione al Bar</span>
//             </div>

//             {/* Timeline */}
//             <div className="mb-4">
//               <input
//                 type="range"
//                 min="0"
//                 max={duration}
//                 value={currentTime}
//                 onChange={handleSeek}
//                 className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//                 style={{
//                   background: `linear-gradient(to right, #d1d5db 0%, #d1d5db ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%, #e5e7eb 100%)`
//                 }}
//               />
//               <div className="flex justify-between text-xs text-gray-500 mt-1">
//                 <span>{formatTime(currentTime)}</span>
//                 <span>{formatTime(duration)}</span>
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
//                 <SkipBack className="w-5 h-5 text-gray-700" />
//               </button>
//               <button 
//                 onClick={handlePlayPause}
//                 className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
//               >
//                 {isPlaying ? (
//                   <Pause className="w-6 h-6 text-white" fill="white" />
//                 ) : (
//                   <Play className="w-6 h-6 text-white ml-1" fill="white" />
//                 )}
//               </button>
//               <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors">
//                 <SkipForward className="w-5 h-5 text-gray-700" />
//               </button>
//             </div>

//             {/* Speed and Volume Controls */}
//             <div className="flex items-center justify-between gap-8">
//               {/* Speed Control */}
//               <div className="flex-1">
//                 <div className="text-sm font-medium text-gray-700 mb-2">Speed</div>
//                 <div className="flex items-center gap-2">
//                   <button 
//                     onClick={() => handleSpeedChange(false)}
//                     className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
//                   >
//                     -
//                   </button>
//                   <div className="w-16 h-8 flex items-center justify-center bg-white border border-gray-300 rounded font-medium text-sm">
//                     {speed}x
//                   </div>
//                   <button 
//                     onClick={() => handleSpeedChange(true)}
//                     className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>

//               {/* Volume Control */}
//               <div className="flex-1">
//                 <div className="text-sm font-medium text-gray-700 mb-2">Volume</div>
//                 <div className="flex items-center gap-2">
//                   <button onClick={toggleMute} className="text-gray-600 hover:text-gray-800">
//                     {isMuted || volume === 0 ? (
//                       <VolumeX className="w-5 h-5" />
//                     ) : (
//                       <Volume2 className="w-5 h-5" />
//                     )}
//                   </button>
//                   <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.01"
//                     value={isMuted ? 0 : volume}
//                     onChange={handleVolumeChange}
//                     className="flex-1 h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//                   />
//                 </div>
//               </div>

//               {/* Show Transcript Button */}
//               <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
//                 Show Transcript
//               </button>
//             </div>
//           </div>






//         {/* -------- Question / Dictation Section -------- */}
//         {showDictation ? (
//           <ListeningDictation />
//         ) : (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
//             {/* Question Progress */}
//             <div className="mb-4">
//               <div className="text-xs text-gray-600 mb-2">Question {currentQuestion + 1} of {totalQuestions}</div>
//               <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div
//                   className="h-full bg-gray-900 transition-all duration-300"
//                   style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
//                 />
//               </div>
//             </div>

//             {/* Question */}
//             <div className="bg-gray-50 rounded-lg p-4 mb-4">
//               <h3 className="font-medium text-gray-900">{questions[currentQuestion].question}</h3>
//             </div>

//             {/* Answer Options */}
//             <div className="space-y-3 mb-6">
//               {questions[currentQuestion].options.map((option, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => handleOptionSelect(option)}
//                   className={`w-full text-left px-4 py-3 border-2 rounded-lg transition-colors ${
//                     questions[currentQuestion].selectedAnswer === option
//                       ? 'border-indigo-600 bg-indigo-50'
//                       : 'bg-white border-gray-200 hover:border-indigo-600 hover:bg-indigo-50'
//                   }`}
//                 >
//                   <span className="font-semibold text-gray-900">{String.fromCharCode(65 + idx)}.</span>
//                   <span className="ml-2 text-gray-700">{option}</span>
//                 </button>
//               ))}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-center gap-3">
//               <button
//                 onClick={handlePrevious}
//                 disabled={currentQuestion === 0}
//                 className={`px-6 py-3 border-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
//                   currentQuestion === 0 ? 'border-gray-200 text-gray-400 cursor-not-allowed' : 'border-gray-300 text-gray-700 hover:bg-gray-50'
//                 }`}
//               >
//                 <ChevronLeft className="w-4 h-4" /> Previous
//               </button>

//               <button
//                 onClick={handleNext}
//                 disabled={!questions[currentQuestion].selectedAnswer}
//                 className={`px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors ${
//                   !questions[currentQuestion].selectedAnswer ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
//                 }`}
//               >
//                 {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
//                 <ChevronLeft className="w-4 h-4 rotate-180" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListeningPractice;





















 