import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import HeaderButton from './HeaderButton';
import ExerciseHeader from './ExerciseHeader';
import WritingArea from './WritingArea';
import WritingTips from './WritingTips';
import NavigationButtons from './NavigationButtons';
 import GrammarPractice from './GrammarPractice';
import WritingPracticeComplete from './WritingPracticeComplete';
import CompleteSentences from './CompleteSentences';
import { useNavigate } from 'react-router-dom';

type Phase = 'writing' | 'completeSentences' | 'grammar' | 'complete';

const WritingPractice: React.FC = () => {
  const [text, setText] = useState('');
  const [showTips, setShowTips] = useState(true);
  const [phase, setPhase] = useState<Phase>('writing');
const navigate=useNavigate()
  const minWords = 80;
  const maxWords = 120;
  const prompt =
    'Describe your typical Italian breakfast. What do you usually eat and drink? (80-120 words)';

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  const tips = [
    'Start with "La mattina, di solito..."',
    'Include foods: cornetto, caffè, cappuccino, biscotti',
    'Use present tense verbs: mangio, bevo, prendo',
  ];

  // Navigation handlers
  const handleNext = () => {
    if (phase === 'writing') setPhase('completeSentences');
    else if (phase === 'completeSentences') setPhase('grammar');
    else if (phase === 'grammar') setPhase('complete');
  };

  const handlePrev = () => {
    if (phase === 'grammar') setPhase('completeSentences');
    else if (phase === 'completeSentences') setPhase('writing');
  };

  return (
    <div className="min-h-screen   p-6">
      <div className="  mx-auto">
        <HeaderButton
          label="Back To Practice"
          onClick={() => navigate("/user/practice")}
          icon={<ChevronLeft className="w-4 h-4" />}
        />

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Writing Practice</h1>
          <p className="text-gray-600">Enhance your Italian writing skills</p>
        </div>

        {phase === 'writing' && (
          <>
            <div className="  rounded-xl      mb-4">
            <ExerciseHeader
        title="Short Essay"
        description="Write a short paragraph about the given topic."
        progressLabel="Exercise 1/3" 
        showTips={showTips}
        onToggleTips={() => setShowTips(!showTips)}
      />
              <WritingArea
                prompt={prompt}
                text={text}
                setText={setText}
                minWords={minWords}
                maxWords={maxWords}
                wordCount={wordCount}
              />
              {showTips && <WritingTips tips={tips} />}
            </div>
            <NavigationButtons onNext={handleNext} />
          </>
        )}

        {phase === 'completeSentences' && (
          <CompleteSentences onPrev={handlePrev} onNext={handleNext} />
        )}

        {phase === 'grammar' && <GrammarPractice onPrev={handlePrev} onFinish={handleNext} />}

        {phase === 'complete' && <WritingPracticeComplete/>}
      </div>
    </div>
  );
};

export default WritingPractice;











// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import HeaderButton from './HeaderButton';
// import ExerciseHeader from './ExerciseHeader';
// import WritingArea from './WritingArea';
// import WritingTips from './WritingTips';
// import NavigationButtons from './NavigationButtons';
// import CompleteSentences from './CompleteSentences';
// import GrammarPractice from './GrammarPractice'; // ⬅️ new component

// const WritingPractice: React.FC = () => {
//   const [text, setText] = useState('');
//   const [showTips, setShowTips] = useState(true);

//   // ✅ three-phase control (add more easily later)
//   const [phase, setPhase] = useState<'writing' | 'completeSentences' | 'grammar'>('writing');

//   const minWords = 80;
//   const maxWords = 120;
//   const prompt = "Describe your typical Italian breakfast. What do you usually eat and drink? (80-120 words)";

//   const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

//   const tips = [
//     'Start with "La mattina, di solito..."',
//     'Include foods: cornetto, caffè, cappuccino, biscotti',
//     'Use present tense verbs: mangio, bevo, prendo',
//   ];

//   // ✅ Navigation handlers
//   const handleNext = () => {
//     if (phase === 'writing') setPhase('completeSentences');
//     else if (phase === 'completeSentences') setPhase('grammar');
//   };

//   const handlePrev = () => {
//     if (phase === 'grammar') setPhase('completeSentences');
//     else if (phase === 'completeSentences') setPhase('writing');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//         <HeaderButton label="Back To Practice" icon={<ChevronLeft className="w-4 h-4" />} />

//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Writing Practice</h1>
//           <p className="text-gray-600">Enhance your Italian writing skills</p>
//         </div>

//         {/* ✅ Conditional rendering for each phase */}
//         {phase === 'writing' && (
//           <>
//             <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4">
//               <ExerciseHeader
//                 onToggleTips={() => setShowTips(!showTips)}
//                 showTips={showTips}
//               />
//               <WritingArea
//                 prompt={prompt}
//                 text={text}
//                 setText={setText}
//                 minWords={minWords}
//                 maxWords={maxWords}
//                 wordCount={wordCount}
//               />
//               {showTips && <WritingTips tips={tips} />}
//             </div>
//             <NavigationButtons onNext={handleNext} />
//           </>
//         )}

//         {phase === 'completeSentences' && (
//           <>
//             <CompleteSentences onPrev={handlePrev} onNext={handleNext} />
//           </>
//         )}

//         {phase === 'grammar' && (
//           <>
//             <GrammarPractice onPrev={handlePrev} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WritingPractice;













// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import HeaderButton from './HeaderButton';
// import ExerciseHeader from './ExerciseHeader';
// import WritingArea from './WritingArea';
// import WritingTips from './WritingTips';
// import NavigationButtons from './NavigationButtons';
// import CompleteSentences from './CompleteSentences';

// const WritingPractice: React.FC = () => {
//   const [text, setText] = useState('');
//   const [showTips, setShowTips] = useState(true);
//   const [phase, setPhase] = useState<'writing' | 'completeSentences'>('writing');

//   const minWords = 80;
//   const maxWords = 120;
//   const prompt = "Describe your typical Italian breakfast. What do you usually eat and drink? (80-120 words)";

//   const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

//   const tips = [
//     'Start with "La mattina, di solito..."',
//     'Include foods: cornetto, caffè, cappuccino, biscotti',
//     'Use present tense verbs: mangio, bevo, prendo',
//     'Costa 24 euro al chilogrammo.',
//     'Sì, sto cercando del formaggio parmigiano.'
//   ];

//   const handleNext = () => {
//     setPhase('completeSentences');
//   };

//   const handlePrev = () => {
//     setPhase('writing');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//         <HeaderButton label="Back To Practice" icon={<ChevronLeft className="w-4 h-4" />} />

//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Writing Practice</h1>
//           <p className="text-gray-600">Enhance your Italian writing skills</p>
//         </div>

//         {phase === 'writing' ? (
//           <>
//             <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4">
//               <ExerciseHeader
//                 onToggleTips={() => setShowTips(!showTips)}
//                 showTips={showTips}
//               />
//               <WritingArea
//                 prompt={prompt}
//                 text={text}
//                 setText={setText}
//                 minWords={minWords}
//                 maxWords={maxWords}
//                 wordCount={wordCount}
//               />
//               {showTips && <WritingTips tips={tips} />}
//             </div>

//             <NavigationButtons onNext={handleNext} />
//           </>
//         ) : (
//           <CompleteSentences onPrev={handlePrev} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default WritingPractice;














// import React, { useState } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import HeaderButton from './HeaderButton';
// import ExerciseHeader from './ExerciseHeader';
// import WritingArea from './WritingArea';
// import WritingTips from './WritingTips';
// import NavigationButtons from './NavigationButtons';

// const WritingPractice: React.FC = () => {
//   const [text, setText] = useState('');
//   const [showTips, setShowTips] = useState(true);

//   const minWords = 80;
//   const maxWords = 120;
//   const prompt = "Describe your typical Italian breakfast. What do you usually eat and drink? (80-120 words)";
  
//   const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

//   const tips = [
//     'Start with "La mattina, di solito..."',
//     'Include foods: cornetto, caffè, cappuccino, biscotti',
//     'Use present tense verbs: mangio, bevo, prendo',
//     'Costa 24 euro al chilogrammo.',
//     'Sì, sto cercando del formaggio parmigiano.'
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-5xl mx-auto">
//         <HeaderButton label="Back To Practice" icon={<ChevronLeft className="w-4 h-4" />} />

//         <div className="mb-6">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Writing Practice</h1>
//           <p className="text-gray-600">Enhance your Italian writing skills</p>
//         </div>
// {/* this div will re;lece and come another cjomponent wihrn i eill click next from navigation button */}
//         <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-4">
//           <ExerciseHeader 
//             onToggleTips={() => setShowTips(!showTips)} 
//             showTips={showTips} 
//           />
//           <WritingArea
//             prompt={prompt}
//             text={text}
//             setText={setText}
//             minWords={minWords}
//             maxWords={maxWords}
//             wordCount={wordCount}
//           />
//         {showTips && <WritingTips tips={tips} />}
//         </div>


//         <NavigationButtons />
//       </div>
//     </div>
//   );
// };

// export default WritingPractice;
