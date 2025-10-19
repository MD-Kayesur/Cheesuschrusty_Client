

import React, { useState } from "react";
import { ChevronLeft, BookOpen, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReadingExerciseComplete from "./ReadingExerciseComplete";
import readingicon from "../../../../assets/Dashbord/darkreading.svg"
import { MdOutlineTranslate } from "react-icons/md";
import { ProgressBar } from "@/components/ProgressBar/ProgressBar";

 interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

const UserReadingPractice: React.FC = () => {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Quando è stata fondata l'Università di Bologna?",
      answers: ["1088", "1100", "1200", "1300"],
      correctAnswer: "1088",
    },
    {
      id: 2,
      question: "Quanti livelli ha il percorso di studi universitario in Italia?",
      answers: ["Due livelli", "Tre livelli", "Quattro livelli", "Cinque livelli"],
      correctAnswer: "Tre livelli",
    },
    {
      id: 3,
      question: "Dove si riuniscono spesso gli studenti per socializzare?",
      answers: ["In biblioteca", "Nelle piazze e nei caffè", "Nelle aule", "Nei dormitori"],
      correctAnswer: "Nelle piazze e nei caffè",
    },
    {
      id: 4,
      question: "Qual è il voto massimo nel sistema di valutazione italiano?",
      answers: ["25", "28", "30", "32"],
      correctAnswer: "30",
    },
  ];

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = { ...answers, [currentQuestion.id]: selectedAnswer };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      const saved = updatedAnswers[questions[nextIndex].id];
      setSelectedAnswer(saved || null);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      const saved = answers[questions[prevIndex].id];
      setSelectedAnswer(saved || null);
    }
  };

  const resultAnswers = questions.map((q) => {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.correctAnswer;
    return {
      question: q.question,
      userAnswer,
      correctAnswer: q.correctAnswer,
      isCorrect,
    };
  });

  return (
    <div className="min-h-screen  ">
      {/* Header */}
      <div className="    ">
        <div className="  mx-auto px-6 py-4">
          <button
            onClick={() => navigate("/user/practice")}
            className="flex border p-3 cursor-pointer rounded-2xl items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="text-base font-semibold">Back To Practice</span>
          </button>
          <div>
            <h1 className="text-4xl mt-9 font-bold text-gray-900">Reading Practice</h1>
            <p className="text-xl text-[#7E7E7E] mt-3">
              Improve your Italian reading comprehension
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="  mx-auto px-6 py-8">
        <div className=" flex flex-col md:flex-row gap-6">
          {/* Reading Passage */}
          <div className="bg-white max-h-auto flex-1 flex flex-col gap-4 rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="  rounded-lg ">
                   <img className="w-8 h-8" src={readingicon} alt="" />
                </div>
                <h2 className="text-xl font-semibold text-[#3C424E ]">
                  La Vita Universitaria in Italia
                </h2>
              </div>
              <button className="flex cursor-pointer items-center gap-2 px-3 py-1.5 border border-[#1C1B1F] rounded-lg hover:bg-gray-50 transition-colors">
                <MdOutlineTranslate className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-[#3C424E]">Show Translation</span> 
              </button>
            </div>

            <div className="space-y-4   text-[#7E7E7E] leading-relaxed">
              <p>
                L'università italiana ha una lunga tradizione che risale al
                Medioevo. Molte università italiane, come l'Università di
                Bologna fondata nel 1088, sono tra le più antiche del mondo.
              </p>
              <p>
                Gli studenti universitari in Italia seguono un percorso di studi
                strutturato in tre livelli: la laurea triennale (tre anni), la
                laurea magistrale (due anni) e il dottorato di ricerca.
              </p>
              <p>
                La vita sociale degli studenti è molto importante. Molti
                partecipano alle attività delle associazioni studentesche, che
                organizzano eventi culturali e ricreativi. È comune vedere
                gruppi di studenti nelle piazze o nei caffè vicino
                all'università.
              </p>
              <p>
                Il sistema di valutazione italiano è basato su un punteggio da
                18 a 30, dove 18 è il voto minimo per superare un esame e 30 è
                il massimo. Gli studenti che ottengono 30 possono anche ricevere
                la "lode".
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-white flex-1  rounded-lg shadow-sm p-6">
            {isComplete ? (
              <ReadingExerciseComplete answers={resultAnswers} />
            ) : (
              <>
                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">
                      Question {currentQuestionIndex + 1} of {totalQuestions}
                    </span>
                  </div>
                  {/* <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div> */}


<ProgressBar
  progress={progressPercentage}   // replace inline width
  color="bg-black"             // fill color
  height="h-3"                    // height of the bar
  rounded="rounded-full"          // rounded corners
  // showPercentage={true}           // optional numeric % display
  className="mb-2"                // optional wrapper spacing
/>


                </div>

                {/* Question */}
                <div className="mb-8">
                  <h3 className="text-lg bg-[#EBEBEB] py-6 px-4 font-semibold text-gray-900 rounded-xl mb-6">
                    {currentQuestion.question}
                  </h3>

                  <div className="space-y-5">
                    {currentQuestion.answers.map((answer, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedAnswer(answer)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          selectedAnswer === answer
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-gray-900">
                            {String.fromCharCode(65 + index)}.
                          </span>
                          <span className="text-[#3C424E]">{answer}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0}
                    className="flex-1 px-6 py-3 border border-[#111827] rounded-lg font-medium cursor-pointer text-gray-700 hover:bg-gray-50 text-base transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                    className={`flex-1 px-6 py-3 cursor-pointer rounded-lg font-medium flex text-base items-center justify-center gap-2 transition-colors duration-300 ${
                      selectedAnswer
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"}
                    <ChevronLeft className="w-4 h-4 rotate-180" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReadingPractice;












// import React, { useState } from "react";
// import { ChevronLeft, BookOpen, Volume2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import ReadingExerciseComplete from "./ReadingExerciseComplete"; // ✅ Import result component

// interface Question {
//   id: number;
//   question: string;
//   answers: string[];
//   correctAnswer: string;
// }

// const UserReadingPractice: React.FC = () => {
//   const navigate = useNavigate();

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [answers, setAnswers] = useState<Record<number, string>>({});
//   const [isComplete, setIsComplete] = useState<boolean>(false); // ✅ for showing result panel

//   const questions: Question[] = [
//     {
//       id: 1,
//       question: "Quando è stata fondata l'Università di Bologna?",
//       answers: ["1088", "1100", "1200", "1300"],
//       correctAnswer: "1088",
//     },
//     {
//       id: 2,
//       question: "Quanti livelli ha il percorso di studi universitario in Italia?",
//       answers: [
//         "Due livelli",
//         "Tre livelli",
//         "Quattro livelli",
//         "Cinque livelli",
//       ],
//       correctAnswer: "Tre livelli",
//     },
//     {
//       id: 3,
//       question: "Dove si riuniscono spesso gli studenti per socializzare?",
//       answers: [
//         "In biblioteca",
//         "Nelle piazze e nei caffè",
//         "Nelle aule",
//         "Nei dormitori",
//       ],
//       correctAnswer: "Nelle piazze e nei caffè",
//     },
//     {
//       id: 4,
//       question: "Qual è il voto massimo nel sistema di valutazione italiano?",
//       answers: ["25", "28", "30", "32"],
//       correctAnswer: "30",
//     },
//   ];

//   const totalQuestions = questions.length;
//   const currentQuestion = questions[currentQuestionIndex];
//   const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

//   // ✅ NEXT
//   const handleNext = () => {
//     if (!selectedAnswer) return;

//     const updatedAnswers = {
//       ...answers,
//       [currentQuestion.id]: selectedAnswer,
//     };
//     setAnswers(updatedAnswers);

//     if (currentQuestionIndex < totalQuestions - 1) {
//       const nextIndex = currentQuestionIndex + 1;
//       setCurrentQuestionIndex(nextIndex);
//       const saved = updatedAnswers[questions[nextIndex].id];
//       setSelectedAnswer(saved || null);
//     } else {
//       // ✅ show result panel instead of question
//       setIsComplete(true);
//     }
//   };

//   // ✅ PREVIOUS
//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       const prevIndex = currentQuestionIndex - 1;
//       setCurrentQuestionIndex(prevIndex);
//       const saved = answers[questions[prevIndex].id];
//       setSelectedAnswer(saved || null);
//     }
//   };

//   // ✅ Generate review data for result component
//   const resultAnswers = questions.map((q) => {
//     const userAnswer = answers[q.id];
//     const isCorrect = userAnswer === q.correctAnswer;
//     return {
//       question: q.question,
//       userAnswer,
//       correctAnswer: q.correctAnswer,
//       isCorrect,
//     };
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <button
//             onClick={() => navigate("/user/practice")}
//             className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             <span className="text-sm">Back To Practice</span>
//           </button>
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">
//               Reading Practice
//             </h1>
//             <p className="text-sm text-gray-500 mt-1">
//               Improve your Italian reading comprehension
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Reading Passage (left side stays same) */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-start justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="bg-gray-900 rounded-lg p-2">
//                   <BookOpen className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   La Vita Universitaria in Italia
//                 </h2>
//               </div>
//               <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <Volume2 className="w-4 h-4 text-gray-600" />
//                 <span className="text-sm text-gray-700">Show Translation</span>
//               </button>
//             </div>

//             <div className="space-y-4 text-gray-700 leading-relaxed">
//               <p>
//                 L'università italiana ha una lunga tradizione che risale al
//                 Medioevo. Molte università italiane, come l'Università di
//                 Bologna fondata nel 1088, sono tra le più antiche del mondo.
//               </p>
//               <p>
//                 Gli studenti universitari in Italia seguono un percorso di studi
//                 strutturato in tre livelli: la laurea triennale (tre anni), la
//                 laurea magistrale (due anni) e il dottorato di ricerca.
//               </p>
//               <p>
//                 La vita sociale degli studenti è molto importante. Molti
//                 partecipano alle attività delle associazioni studentesche, che
//                 organizzano eventi culturali e ricreativi. È comune vedere
//                 gruppi di studenti nelle piazze o nei caffè vicino
//                 all'università.
//               </p>
//               <p>
//                 Il sistema di valutazione italiano è basato su un punteggio da
//                 18 a 30, dove 18 è il voto minimo per superare un esame e 30 è
//                 il massimo. Gli studenti che ottengono 30 possono anche ricevere
//                 la "lode".
//               </p>
//             </div>
//           </div>

//           {/* ✅ Right Side — replace question with result after finish */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             {isComplete ? (
//               // ✅ Show result summary
//               <ReadingExerciseComplete answers={resultAnswers} />
//             ) : (
//               <>
//                 {/* Progress */}
//                 <div className="mb-6">
//                   <div className="flex justify-between items-center mb-2">
//                     <span className="text-sm text-gray-500">
//                       Question {currentQuestionIndex + 1} of {totalQuestions}
//                     </span>
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2">
//                     <div
//                       className="bg-blue-600 h-2 rounded-full transition-all duration-500"
//                       style={{ width: `${progressPercentage}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* Question */}
//                 <div className="mb-8">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-6">
//                     {currentQuestion.question}
//                   </h3>

//                   <div className="space-y-3">
//                     {currentQuestion.answers.map((answer, index) => (
//                       <button
//                         key={index}
//                         onClick={() => setSelectedAnswer(answer)}
//                         className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
//                           selectedAnswer === answer
//                             ? "border-blue-600 bg-blue-50"
//                             : "border-gray-200 hover:border-gray-300 bg-white"
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <span className="font-semibold text-gray-900">
//                             {String.fromCharCode(65 + index)}.
//                           </span>
//                           <span className="text-gray-700">{answer}</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Navigation */}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={handlePrevious}
//                     disabled={currentQuestionIndex === 0}
//                     className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                     Previous
//                   </button>

//                   <button
//                     onClick={handleNext}
//                     disabled={!selectedAnswer}
//                     className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//                   >
//                     {currentQuestionIndex === totalQuestions - 1
//                       ? "Finish"
//                       : "Next"}
//                     <ChevronLeft className="w-4 h-4 rotate-180" />
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserReadingPractice;

















// import React, { useState } from "react";
// import { ChevronLeft, BookOpen, Volume2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import ReadingExerciseComplete from "./ReadingExerciseComplete"; // ✅ import result screen

// interface Question {
//   id: number;
//   question: string;
//   answers: string[];
//   correctAnswer: string;
// }

// const UserReadingPractice: React.FC = () => {
//   const navigate = useNavigate();

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
//   const [answers, setAnswers] = useState<Record<number, string>>({});
//   const [isComplete, setIsComplete] = useState<boolean>(false); // ✅ new state for completion

//   const questions: Question[] = [
//     {
//       id: 1,
//       question: "Quando è stata fondata l'Università di Bologna?",
//       answers: ["1088", "1100", "1200", "1300"],
//       correctAnswer: "1088",
//     },
//     {
//       id: 2,
//       question: "Quanti livelli ha il percorso di studi universitario in Italia?",
//       answers: [
//         "Due livelli",
//         "Tre livelli",
//         "Quattro livelli",
//         "Cinque livelli",
//       ],
//       correctAnswer: "Tre livelli",
//     },
//     {
//       id: 3,
//       question: "Dove si riuniscono spesso gli studenti per socializzare?",
//       answers: [
//         "In biblioteca",
//         "Nelle piazze e nei caffè",
//         "Nelle aule",
//         "Nei dormitori",
//       ],
//       correctAnswer: "Nelle piazze e nei caffè",
//     },
//     {
//       id: 4,
//       question: "Qual è il voto massimo nel sistema di valutazione italiano?",
//       answers: ["25", "28", "30", "32"],
//       correctAnswer: "30",
//     },
//   ];

//   const totalQuestions = questions.length;
//   const currentQuestion = questions[currentQuestionIndex];
//   const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

//   // ✅ NEXT
//   const handleNext = () => {
//     if (!selectedAnswer) return;

//     // Save answer
//     const updatedAnswers = {
//       ...answers,
//       [currentQuestion.id]: selectedAnswer,
//     };
//     setAnswers(updatedAnswers);

//     if (currentQuestionIndex < totalQuestions - 1) {
//       const nextIndex = currentQuestionIndex + 1;
//       setCurrentQuestionIndex(nextIndex);
//       const saved = updatedAnswers[questions[nextIndex].id];
//       setSelectedAnswer(saved || null);
//     } else {
//       // ✅ Finish quiz
//       setIsComplete(true);
//     }
//   };

//   // ✅ PREVIOUS
//   const handlePrevious = () => {
//     if (currentQuestionIndex > 0) {
//       const prevIndex = currentQuestionIndex - 1;
//       setCurrentQuestionIndex(prevIndex);
//       const saved = answers[questions[prevIndex].id];
//       setSelectedAnswer(saved || null);
//     }
//   };

//   // ✅ If quiz complete, show result component
//   if (isComplete) {
//     // Create data for ReadingExerciseComplete
//     const answerData = questions.map((q) => {
//       const userAnswer = answers[q.id];
//       const isCorrect = userAnswer === q.correctAnswer;
//       return {
//         question: q.question,
//         userAnswer,
//         correctAnswer: q.correctAnswer,
//         isCorrect,
//       };
//     });

//     return <ReadingExerciseComplete answers={answerData} />;
//   }

//   // ✅ Otherwise, show quiz screen
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <button
//             onClick={() => navigate("/user/practice")}
//             className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-4"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             <span className="text-sm">Back To Practice</span>
//           </button>
//           <div>
//             <h1 className="text-2xl font-bold text-gray-900">
//               Reading Practice
//             </h1>
//             <p className="text-sm text-gray-500 mt-1">
//               Improve your Italian reading comprehension
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Reading Passage */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             <div className="flex items-start justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="bg-gray-900 rounded-lg p-2">
//                   <BookOpen className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   La Vita Universitaria in Italia
//                 </h2>
//               </div>
//               <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                 <Volume2 className="w-4 h-4 text-gray-600" />
//                 <span className="text-sm text-gray-700">Show Translation</span>
//               </button>
//             </div>

//             <div className="space-y-4 text-gray-700 leading-relaxed">
//               <p>
//                 L'università italiana ha una lunga tradizione che risale al
//                 Medioevo. Molte università italiane, come l'Università di
//                 Bologna fondata nel 1088, sono tra le più antiche del mondo.
//               </p>
//               <p>
//                 Gli studenti universitari in Italia seguono un percorso di studi
//                 strutturato in tre livelli: la laurea triennale (tre anni), la
//                 laurea magistrale (due anni) e il dottorato di ricerca.
//               </p>
//               <p>
//                 La vita sociale degli studenti è molto importante. Molti
//                 partecipano alle attività delle associazioni studentesche, che
//                 organizzano eventi culturali e ricreativi. È comune vedere
//                 gruppi di studenti nelle piazze o nei caffè vicino
//                 all'università.
//               </p>
//               <p>
//                 Il sistema di valutazione italiano è basato su un punteggio da
//                 18 a 30, dove 18 è il voto minimo per superare un esame e 30 è
//                 il massimo. Gli studenti che ottengono 30 possono anche ricevere
//                 la "lode".
//               </p>
//             </div>
//           </div>

//           {/* Question Section */}
//           <div className="bg-white rounded-lg shadow-sm p-6">
//             {/* Progress */}
//             <div className="mb-6">
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-sm text-gray-500">
//                   Question {currentQuestionIndex + 1} of {totalQuestions}
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2">
//                 <div
//                   className="bg-blue-600 h-2 rounded-full transition-all duration-500"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//             </div>

//             {/* Question */}
//             <div className="mb-8">
//               <h3 className="text-lg font-semibold text-gray-900 mb-6">
//                 {currentQuestion.question}
//               </h3>

//               <div className="space-y-3">
//                 {currentQuestion.answers.map((answer, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSelectedAnswer(answer)}
//                     className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
//                       selectedAnswer === answer
//                         ? "border-blue-600 bg-blue-50"
//                         : "border-gray-200 hover:border-gray-300 bg-white"
//                     }`}
//                   >
//                     <div className="flex items-center gap-3">
//                       <span className="font-semibold text-gray-900">
//                         {String.fromCharCode(65 + index)}.
//                       </span>
//                       <span className="text-gray-700">{answer}</span>
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex gap-3">
//               <button
//                 onClick={handlePrevious}
//                 disabled={currentQuestionIndex === 0}
//                 className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//                 Previous
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                 disabled={!selectedAnswer}
//               >
//                 {currentQuestionIndex === totalQuestions - 1
//                   ? "Finish"
//                   : "Next"}
//                 <ChevronLeft className="w-4 h-4 rotate-180" />
//               </button>
//             </div>
//           </div>


          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserReadingPractice;

















 