
import React, { useState } from 'react';
import { Lightbulb, Eye } from 'lucide-react';
import NavigationButtons from './NavigationButtons';
import completesectence from "../../../../assets/Dashbord/complete sectence.svg"
import ExerciseHeader from './ExerciseHeader';
// interface Sentence {
//   id: number;
//   prefix: string;
//   blank: string;
//   suffix: string;
//   hint: string;
//   userAnswer: string;
// }

// interface Props {
//   onPrev: () => void;
//   onNext: () => void;
// }
interface Sentence {
  id: number;
  prefix: string;
  blank: string;
  suffix: string;
  hint: string;
  userAnswer: string;
}

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

const sentenceData: Sentence[] = [
  {
    id: 1,
    prefix: 'Maria',
    blank: '',
    suffix: '(andare) al cinema ogni venerdì.',
    hint: 'Third person singular of "andare"',
    userAnswer: '',
  },
  {
    id: 2,
    prefix: 'Io',
    blank: '',
    suffix: '(mangiare) una mela ogni mattina.',
    hint: 'First person singular of "mangiare"',
    userAnswer: '',
  },
  {
    id: 3,
    prefix: 'Noi',
    blank: '',
    suffix: '(avere) due cani e un gatto.',
    hint: 'First person plural of "avere"',
    userAnswer: '',
  },
  {
  id: 4,
  prefix: 'Loro',
  blank: '',
  suffix: '(parlare) molto bene l’italiano.',
  hint: 'Third person plural of "parlare"',
  userAnswer: '',
},
{
  id: 5,
  prefix: 'Tu',
  blank: '',
  suffix: '(scrivere) una lettera a tua madre ogni settimana.',
  hint: 'Second person singular of "scrivere"',
  userAnswer: '',
},
{
  id: 6,
  prefix: 'Io',
  blank: '',
  suffix: '(dormire) otto ore ogni notte.',
  hint: 'First person singular of "dormire"',
  userAnswer: '',
},
];

const CompleteSentences: React.FC<Props> = ({ onPrev, onNext }) => {
  const [sentences, setSentences] = useState<Sentence[]>(sentenceData);

  const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

  const handleInputChange = (id: number, value: string) => {
    setSentences(sentences.map(s => (s.id === id ? { ...s, userAnswer: value } : s)));
  };

  const toggleHint = (id: number) => {
    setShowHints(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const hideHints = () => setShowHints({});
 const [showTips, setShowTips] = useState(true);
  return (
    <div className="  mx-auto     rounded-xl      ">
      {/* <div className="flex items-start justify-between mb-6">
       <div className='flex items-center gap-3 '>
        <img src={completesectence} alt="" />
         <div>
          <h2 className="text-xl font-bold text-gray-900">Complete the Sentences</h2>
          <p className="text-sm text-gray-600">Fill in the blanks with the correct Italian words</p>
        </div>
       </div>
        <div className="flex gap-2">
          <button onClick={hideHints} className="px-3 py-1.5 cursor-pointer text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1">
            <Eye className="w-4 h-4" /> Hide Hints
          </button>
          <button className="px-3 py-1.5 cursor-pointer text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Exercise 2/3
        </button>
        </div> 
      </div> */}

       <ExerciseHeader
        title="Complete the Sentences"
        description="Fill in the blanks with the correct Italian words"
        progressLabel="Exercise 2/3"
        showTips={showTips}
        onToggleTips={() => setShowTips(!showTips)}
      />

      <div className="space-y-4 mt-10">
        {sentences.map(s => (
          <div key={s.id} className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-center gap-2 mb-2 flex-wrap text-xl">
              <span>{s.prefix}</span>
              <input
                type="text"
                placeholder="..."
                value={s.userAnswer}
                onChange={e => handleInputChange(s.id, e.target.value)}
                className="px-2 py-1 focus:border border-blue-500  rounded-md bg-[#EBEBEB] min-w-[100px]"
              />
              <span >{s.suffix}</span>
            </div>
            <button onClick={() => toggleHint(s.id)} className="flex mt-4 bg-[#F7F9FF] border border-[#AFC7FF] text-base cursor-pointer items-center gap-2  rounded-xl p-2 text-gray-600">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              {showHints[s.id] ? s.hint : 'Click to show hint'}
            </button>
          </div>
        ))}
      </div>
 
      <NavigationButtons onPrev={onPrev} onNext={onNext}/>
    </div>
  );
};

export default CompleteSentences;















// import React, { useState } from 'react';
// import { Lightbulb, Eye, ChevronLeft } from 'lucide-react';
// import NavigationButtons from './NavigationButtons';

// interface Sentence {
//   id: number;
//   prefix: string;
//   suffix: string;
//   hint: string;
//   userAnswer: string;
// }

// interface Props {
//   onPrev: () => void;
//   onNext: () => void;
// }

// const CompleteSentences: React.FC<Props> = ({ onPrev, onNext }) => {
//   const [sentences, setSentences] = useState<Sentence[]>([
//     {
//       id: 1,
//       prefix: "Maria",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: "",
//     },
//     {
//       id: 2,
//       prefix: "Io",
//       suffix: "(mangiare) una mela ogni mattina.",
//       hint: 'First person singular present tense of "mangiare"',
//       userAnswer: "",
//     },
//     {
//       id: 3,
//       prefix: "Noi",
//       suffix: "(avere) due cani e un gatto.",
//       hint: 'First person plural present tense of "avere"',
//       userAnswer: "",
//     },
//     {
//       id: 4,
//       prefix: "Loro",
//       suffix: "(essere) molto simpatici.",
//       hint: 'Third person plural present tense of "essere"',
//       userAnswer: "",
//     },
//     {
//       id: 5,
//       prefix: "Tu",
//       suffix: "(scrivere) una lettera a tua madre?",
//       hint: 'Second person singular present tense of "scrivere"',
//       userAnswer: "",
//     },
//   ]);

//   const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

//   const handleInputChange = (id: number, value: string) => {
//     setSentences((prev) =>
//       prev.map((sentence) =>
//         sentence.id === id ? { ...sentence, userAnswer: value } : sentence
//       )
//     );
//   };

//   const toggleHint = (id: number) => {
//     setShowHints((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const handleHideAllHints = () => {
//     setShowHints({});
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//             <svg
//               className="w-6 h-6 text-white"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path d="M12 19l7-7 3 3-7 7-3-3z" />
//               <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
//               <path d="M2 2l7.586 7.586" />
//             </svg>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">
//               Complete the Sentences
//             </h2>
//             <p className="text-sm text-gray-600">
//               Fill in the blanks with the correct Italian verbs
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <button
//             onClick={handleHideAllHints}
//             className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
//           >
//             <Eye className="w-4 h-4" />
//             Hide All Hints
//           </button>
//           <button
//             onClick={onPrev}
//             className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
//           >
//             <ChevronLeft className="w-4 h-4" />
//             Back
//           </button>
//         </div>
//       </div>

//       {/* Sentences */}
//       <div className="space-y-5">
//         {sentences.map((sentence) => (
//           <div
//             key={sentence.id}
//             className="bg-gray-50 rounded-lg p-5 border border-gray-200"
//           >
//             <div className="flex items-center gap-2 mb-3 flex-wrap">
//               <span className="text-gray-800 font-medium">
//                 {sentence.prefix}
//               </span>
//               <input
//                 type="text"
//                 value={sentence.userAnswer}
//                 onChange={(e) =>
//                   handleInputChange(sentence.id, e.target.value)
//                 }
//                 placeholder="..."
//                 className="px-3 py-1.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px] text-gray-800"
//               />
//               <span className="text-gray-800">{sentence.suffix}</span>
//             </div>

//             <button
//               onClick={() => toggleHint(sentence.id)}
//               className="flex items-start gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
//             >
//               <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
//               <span className={showHints[sentence.id] ? 'font-medium' : ''}>
//                 {showHints[sentence.id]
//                   ? sentence.hint
//                   : 'Click to show hint'}
//               </span>
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="mt-8">
//         <NavigationButtons onPrev={onPrev} onNext={onNext} />
//       </div>
//     </div>
//   );
// };

// export default CompleteSentences;
















// import React, { useState } from 'react';
// import { Lightbulb, Eye } from 'lucide-react';
// import NavigationButtons from './NavigationButtons';

// interface Sentence {
//   id: number;
//   prefix: string;
//   blank: string;
//   suffix: string;
//   hint: string;
//   userAnswer: string;
// }

// interface Props {
//   onPrev: () => void;
// }

// const CompleteSentences: React.FC<Props> = ({ onPrev }) => {
//   const [sentences, setSentences] = useState<Sentence[]>([
//     {
//       id: 1,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     },
//     {
//       id: 2,
//       prefix: "Io",
//       blank: "",
//       suffix: "(mangiare) una mela ogni mattina.",
//       hint: 'First person singular present tense of "mangiare"',
//       userAnswer: ""
//     },
//     {
//       id: 3,
//       prefix: "Noi",
//       blank: "",
//       suffix: "(avere) due cani e un gatto.",
//       hint: 'First person plural present tense of "avere"',
//       userAnswer: ""
//     },
//     {
//       id: 4,
//       prefix: "Loro",
//       blank: "",
//       suffix: "(essere) molto simpatici.",
//       hint: 'Third person plural present tense of "essere"',
//       userAnswer: ""
//     },
//     {
//       id: 5,
//       prefix: "Tu",
//       blank: "",
//       suffix: "(scrivere) una lettera a tua madre?",
//       hint: 'Second person singular present tense of "scrivere"',
//       userAnswer: ""
//     }
//   ]);

//   const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

//   const handleInputChange = (id: number, value: string) => {
//     setSentences(sentences.map(sentence =>
//       sentence.id === id ? { ...sentence, userAnswer: value } : sentence
//     ));
//   };

//   const toggleHint = (id: number) => {
//     setShowHints(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const handleHideHint = () => {
//     setShowHints({});
//   };

//   return (
//     <div>
//         <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//             <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M12 19l7-7 3 3-7 7-3-3z" />
//               <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
//               <path d="M2 2l7.586 7.586" />
//             </svg>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">Complete the Sentences</h2>
//             <p className="text-sm text-gray-600">Fill in the blanks with the correct Italian words or phrases</p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={handleHideHint}
//             className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
//           >
//             <Eye className="w-4 h-4" />
//             Hide Hint
//           </button>
//           <button
//             onClick={onPrev}
//             className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             ← Back
//           </button>
//         </div>
//       </div>

//       {/* Sentences */}
//       <div className="space-y-4">
//         {sentences.map((sentence) => (
//           <div key={sentence.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
//             <div className="flex items-center gap-2 mb-3 flex-wrap">
//               <span className="text-gray-800 font-medium">{sentence.prefix}</span>
//               <input
//                 type="text"
//                 value={sentence.userAnswer}
//                 onChange={(e) => handleInputChange(sentence.id, e.target.value)}
//                 placeholder="..."
//                 className="px-3 py-1.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px] text-gray-800"
//               />
//               <span className="text-gray-800">{sentence.suffix}</span>
//             </div>

//             <button
//               onClick={() => toggleHint(sentence.id)}
//               className="flex items-start gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
//             >
//               <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
//               <span className={showHints[sentence.id] ? 'font-medium' : ''}>
//                 {showHints[sentence.id] ? sentence.hint : 'Click to show hint'}
//               </span>
//             </button>
//           </div>
//         ))}


//       </div>
//     </div>
//         <NavigationButtons/>
//     </div>
//   );
// };

// export default CompleteSentences;




















// import React, { useState } from 'react';
// import { Lightbulb, Eye } from 'lucide-react';

// interface Sentence {
//   id: number;
//   prefix: string;
//   blank: string;
//   suffix: string;
//   hint: string;
//   userAnswer: string;
// }

// const CompleteSentences: React.FC = ({        onPrev 
// }) => {
//   const [sentences, setSentences] = useState<Sentence[]>([
//     {
//       id: 1,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     },
//     {
//       id: 2,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     },
//     {
//       id: 3,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     },
//     {
//       id: 4,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     },
//     {
//       id: 5,
//       prefix: "Maria",
//       blank: "",
//       suffix: "(andare) al cinema ogni venerdì sera.",
//       hint: 'Third person singular present tense of "andare"',
//       userAnswer: ""
//     }
//   ]);

//   const [showHints, setShowHints] = useState<{ [key: number]: boolean }>({});

//   const handleInputChange = (id: number, value: string) => {
//     setSentences(sentences.map(sentence => 
//       sentence.id === id ? { ...sentence, userAnswer: value } : sentence
//     ));
//   };

//   const toggleHint = (id: number) => {
//     setShowHints(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const handleHideHint = () => {
//     setShowHints({});
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white">
//       {/* Header */}
//       <div className="flex items-start justify-between mb-6">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//             <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M12 19l7-7 3 3-7 7-3-3z"/>
//               <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
//               <path d="M2 2l7.586 7.586"/>
//             </svg>
//           </div>
//           <div>
//             <h2 className="text-xl font-bold text-gray-900">Complete the Sentences</h2>
//             <p className="text-sm text-gray-600">Fill in the blanks with the correct Italian words or phrases</p>
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button 
//             onClick={handleHideHint}
//             className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
//           >
//             <Eye className="w-4 h-4" />
//             Hide Hint
//           </button>
//           <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//             Exercise 1/3
//           </button>
//         </div>
//       </div>

//       {/* Sentences */}
//       <div className="space-y-4">
//         {sentences.map((sentence) => (
//           <div key={sentence.id} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
//             {/* Sentence with input */}
//             <div className="flex items-center gap-2 mb-3 flex-wrap">
//               <span className="text-gray-800 font-medium">{sentence.prefix}</span>
//               <input
//                 type="text"
//                 value={sentence.userAnswer}
//                 onChange={(e) => handleInputChange(sentence.id, e.target.value)}
//                 placeholder="..."
//                 className="px-3 py-1.5 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px] text-gray-800"
//               />
//               <span className="text-gray-800">{sentence.suffix}</span>
//             </div>

//             {/* Hint */}
//             <button
//               onClick={() => toggleHint(sentence.id)}
//               className="flex items-start gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors"
//             >
//               <Lightbulb className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
//               <span className={showHints[sentence.id] ? 'font-medium' : ''}>
//                 {showHints[sentence.id] ? sentence.hint : 'Third person singular present tense of "andare"'}
//               </span>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CompleteSentences;