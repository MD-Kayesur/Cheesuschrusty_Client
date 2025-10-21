import React, { useState } from 'react';
 import ExerciseHeader from '../ExerciseHeader';
import NavigationButtons from './NavigationButtons';


interface Option {
  id: string;
  text: string;
}

interface Question {
  id: number;
  sentence: string;
  options: Option[];
  selectedAnswer: string | null;
}

interface Props {
  onPrev: () => void;
  onFinish: () => void;
}

// ✅ Separate, reusable data
const grammarQuestions: Question[] = [
  {
    id: 1,
    sentence: "Il libro _____ molto interessante.",
    options: [
      { id: 'A', text: 'è davvero molto interessante.' },
      { id: 'B', text: 'sembra essere molto interessante.' },
      { id: 'C', text: 'risulta molto interessante.' },
      { id: 'D', text: 'appare molto interessante.' },
    ],
    selectedAnswer: null,
  },
  {
    id: 2,
    sentence: "Loro _____ arrivati in tempo alla riunione.",
    options: [
      { id: 'A', text: 'sono' },
      { id: 'B', text: 'saranno' },
      { id: 'C', text: 'erano' },
      { id: 'D', text: 'fossero' },
    ],
    selectedAnswer: null,
  },
  {
  id: 3,
  sentence: "Noi _____ a Roma per le vacanze estive.",
  options: [
    { id: 'A', text: 'andiamo' },
    { id: 'B', text: 'andate' },
    { id: 'C', text: 'vanno' },
    { id: 'D', text: 'va' },
  ],
  selectedAnswer: null,
},
{
  id: 4,
  sentence: "Tu _____ mai stato in Italia prima d’ora?",
  options: [
    { id: 'A', text: 'sei' },
    { id: 'B', text: 'eri' },
    { id: 'C', text: 'saresti' },
    { id: 'D', text: 'fossi' },
  ],
  selectedAnswer: null,
},
{
  id: 5,
  sentence: "Domani noi _____ una grande festa per il compleanno di Anna.",
  options: [
    { id: 'A', text: 'facciamo' },
    { id: 'B', text: 'faremo' },
    { id: 'C', text: 'abbiamo fatto' },
    { id: 'D', text: 'stiamo facendo' },
  ],
  selectedAnswer: null,
},
{
  id: 6,
  sentence: "Se piove, noi non _____ al mare.",
  options: [
    { id: 'A', text: 'andremo' },
    { id: 'B', text: 'andiamo' },
    { id: 'C', text: 'siamo andati' },
    { id: 'D', text: 'andremmo' },
  ],
  selectedAnswer: null,
},
];


interface Option { id: string; text: string; }
interface Question { id: number; sentence: string; options: Option[]; selectedAnswer: string | null; }

interface Props {
  onPrev: () => void;
  onFinish: () => void;
}

const GrammarPractice: React.FC<Props> = ({ onPrev, onFinish }) => {
const [questions, setQuestions] = useState<Question[]>(grammarQuestions);

  const handleSelect = (qid: number, oid: string) => {
    setQuestions(q => q.map(qs => qs.id === qid ? { ...qs, selectedAnswer: oid } : qs));
  };
 const [showTips, setShowTips] = useState(true);
  return (
    <div className="  mx-auto     rounded-xl     ">
      {/* <div className="flex justify-between mb-6">
        <h2 className="text-xl font-bold">Grammar Practice</h2>
        <div className="flex gap-2">
          <button onClick={onPrev} className="px-4 py-2 border rounded-lg">← Back</button>
        </div>
      </div> */}

       <ExerciseHeader
        title="Grammar Practice"
        description="Choose the correct grammatical form."
        progressLabel="Exercise 3 /3"
        showTips={showTips}
        onToggleTips={() => setShowTips(!showTips)}
      /> 


 <div className='w-full bg-[#EBEBEB] py-6 px-4 rounded-2xl mt-10'>
  <p > Select the correct form for each sentence:</p>
 </div>


     <div className=' mt-10 flex flex-col gap-6'>
       {questions.map(q => (
        <div key={q.id} className="mb-4">
          <p className="mb-2 text-xl font-medium"> {q.id}. {q.sentence}</p>
          <div className="grid grid-cols-2 gap-2">
            {q.options.map(o => (
              <button key={o.id} onClick={() => handleSelect(q.id, o.id)}
                className={`p-3 border rounded-lg text-base text-left ${q.selectedAnswer === o.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
                <strong>{o.id}.</strong> {o.text}
              </button>
            ))}
          </div>
        </div>
      ))}
     </div>

      {/* <div className="mt-6 flex justify-end gap-4">
        <button onClick={onPrev} className="px-6 py-3 border rounded-lg">Back</button>
        <button onClick={onFinish} className="px-6 py-3 bg-blue-600 text-white rounded-lg">Finish</button>
      </div> */}

  <NavigationButtons onPrev={onPrev} onNext={onFinish}/>
    </div>
  );
};

export default GrammarPractice;












// import React, { useState } from 'react';
// import { ChevronLeft, EyeOff } from 'lucide-react';

// interface Option {
//   id: string;
//   text: string;
// }

// interface Question {
//   id: number;
//   sentence: string;
//   options: Option[];
//   selectedAnswer: string | null;
// }

// const GrammarPractice: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([
//     {
//       id: 1,
//       sentence: "Il libro _____ molto interessante.",
//       options: [
//         { id: "A", text: "Il libro è davvero molto interessante." },
//         { id: "B", text: "Il libro sembra essere molto interessante." },
//         { id: "C", text: "Il libro risulta molto interessante." },
//         { id: "D", text: "Il libro appare molto interessante." }
//       ],
//       selectedAnswer: null
//     },
//     {
//       id: 2,
//       sentence: "Maria e Anna _____ al mercato.",
//       options: [
//         { id: "A", text: "Il libro sembra essere molto interessante." },
//         { id: "B", text: "Il libro risulta molto interessante." },
//         { id: "C", text: "Il libro è davvero molto interessante." },
//         { id: "D", text: "Il libro risulta molto interessante." }
//       ],
//       selectedAnswer: null
//     }
//   ]);

//   const handleOptionSelect = (questionId: number, optionId: string) => {
//     setQuestions(questions.map(q => 
//       q.id === questionId ? { ...q, selectedAnswer: optionId } : q
//     ));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//             <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <rect x="3" y="3" width="18" height="18" rx="2"/>
//               <path d="M9 3v18"/>
//               <path d="M9 9h12"/>
//             </svg>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">Grammar Practice</h2>
//             <p className="text-sm text-gray-600">Choose the correct grammatical form.</p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
//             <EyeOff className="w-4 h-4" />
//             Hide Hint
//           </button>
//           <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//             Exercise 3/3
//           </button>
//         </div>
//       </div>

//       {/* Instruction */}
//       <div className="bg-gray-100 rounded-lg p-4 mb-6">
//         <p className="text-gray-800 font-medium">Select the correct form for each sentence:</p>
//       </div>

//       {/* Questions */}
//       <div className="space-y-8">
//         {questions.map((question) => (
//           <div key={question.id}>
//             {/* Question Sentence */}
//             <h3 className="text-lg font-medium text-gray-900 mb-4">
//               {question.sentence}
//             </h3>

//             {/* Options Grid */}
//             <div className="grid grid-cols-2 gap-3">
//               {question.options.map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => handleOptionSelect(question.id, option.id)}
//                   className={`text-left p-4 rounded-lg border-2 transition-all ${
//                     question.selectedAnswer === option.id
//                       ? 'border-blue-500 bg-blue-50'
//                       : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50'
//                   }`}
//                 >
//                   <span className="font-semibold text-gray-900">{option.id}.</span>
//                   <span className="ml-2 text-gray-700">{option.text}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="flex justify-center gap-4 mt-8">
//         <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2">
//           <ChevronLeft className="w-4 h-4" />
//           Previous
//         </button>
//         <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
//           Finish
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GrammarPractice;