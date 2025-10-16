import React from 'react';
import { Check, X, RefreshCw } from 'lucide-react';

interface Answer {
  question: string;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

const ReadingExerciseComplete: React.FC = () => {
  const answers: Answer[] = [
    {
      question: "Quando è stata fondata l'Università di Bologna?",
      userAnswer: "1088",
      correctAnswer: "1088",
      isCorrect: true
    },
    {
      question: "Quando è stata fondata l'Università di Bologna?",
      userAnswer: "1066",
      correctAnswer: "1088",
      isCorrect: true
    },
    {
      question: "Quando è stata fondata l'Università di Bologna?",
      userAnswer: "1088",
      correctAnswer: "1088",
      isCorrect: true
    },
    {
      question: "Quando è stata fondata l'Università di Bologna?",
      userAnswer: "1066",
      correctAnswer: "1088",
      isCorrect: false
    }
  ];

  const correctCount = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correctCount / answers.length) * 100);

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      {/* Success Icon */}
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-white" strokeWidth={3} />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-center text-xl font-semibold text-gray-800 mb-2">
        Reading Exercise Complete!
      </h1>
      <p className="text-center text-sm text-gray-500 mb-6">
        Great job! Review your answers below
      </p>

      {/* Stats */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">{correctCount}</div>
          <div className="text-xs text-gray-500">CORRECT ANSWERS</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">{percentage}%</div>
          <div className="text-xs text-gray-500">ACCURACY</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">30+</div>
          <div className="text-xs text-gray-500">XP EARNED</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-6">
        <button className="flex-1 py-3 px-4 border-2 border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
        <button className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Keep Reading Practice →
        </button>
      </div>

      {/* Answer Review Section */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Answer Review</h2>
        
        <div className="space-y-4">
          {answers.map((answer, index) => (
            <div key={index} className="border-l-4 pl-4 py-2" style={{
              borderColor: answer.isCorrect ? '#10b981' : '#ef4444'
            }}>
              <div className="flex items-start gap-2 mb-2">
                {answer.isCorrect ? (
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                )}
                <p className="text-sm font-medium text-gray-800">
                  {answer.question}
                </p>
              </div>
              
              <div className="ml-7 text-sm space-y-1">
                <div>
                  <span className="text-blue-600 font-medium">Your Answer: </span>
                  <span className={answer.isCorrect ? "text-gray-700" : "text-red-600"}>
                    {answer.userAnswer}
                  </span>
                </div>
                <div>
                  <span className="text-green-600 font-medium">Correct Answer: </span>
                  <span className="text-gray-700">{answer.correctAnswer}</span>
                </div>
              </div>

              <p className="ml-7 mt-2 text-xs text-gray-600">
                L'Università di Bologna è stata fondata nel 1088, rendendola una delle 
                università più antiche del mondo
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadingExerciseComplete;