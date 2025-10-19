


import React from 'react';
import { EyeOff, Eye, Lightbulb } from 'lucide-react';
import icon from "../../../../assets/Dashbord/practice.svg"
interface ExerciseHeaderProps {
  title: string;
  description?: string;
  progressLabel?: string; // e.g., "Exercise 1/3"
  showTips?: boolean;
  onToggleTips?: () => void;
  icon?: React.ReactNode; // optional custom icon
  gradientColor?: string; // e.g. "from-amber-400 to-orange-500"
}

const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({
  title,
  description,
  progressLabel,
  showTips,
  onToggleTips,
  // icon,
  gradientColor = "from-amber-400 to-orange-500",
}) => {
  return (
    <div className="py-6 border-b border-gray-200   rounded-t-xl">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          {/* <div
            className={`w-12 h-12 bg-gradient-to-br ${gradientColor} rounded-lg flex items-center justify-center`}
          >
             
            {icon || <Lightbulb className="w-6 h-6 text-white" />}
          </div> */}

          <img src={icon} alt="" />

          <div>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm text-gray-600">{description}</p>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {onToggleTips && (
            <button
              onClick={onToggleTips}
              className="px-3 py-1.5 cursor-pointer text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
            >
              {showTips ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {showTips ? 'Hide Hints' : 'Show Hints'}
            </button>
          )}

          {progressLabel && (
            <button className="px-3 py-1.5 cursor-pointer text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              {progressLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseHeader;








// import React from 'react';
// import { EyeOff, Lightbulb } from 'lucide-react';

// interface ExerciseHeaderProps {
//   showTips: boolean;
//   onToggleTips: () => void;
// }

// const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({ showTips, onToggleTips }) => (
//   <div className="p-6 border-b border-gray-200">
//     <div className="flex items-start justify-between">
//       <div className="flex items-center gap-3">
//         <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
//           <Lightbulb className="w-6 h-6 text-white" />
//         </div>
//         <div>
//           <h2 className="text-lg font-semibold text-gray-900">Short Essay</h2>
//           <p className="text-sm text-gray-600">Write a short paragraph about the given topic</p>
//         </div>
//       </div>
//       <div className="flex gap-2">
//         <button
//           onClick={onToggleTips}
//           className="px-3 py-1.5 cursor-pointer text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
//         >
//           <EyeOff className="w-4 h-4" />
//           {showTips ? 'Hide Hints' : 'Show Hints'}
//         </button>
//         <button className="px-3 cursor-pointer py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
//           Exercise 1/3
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default ExerciseHeader;
