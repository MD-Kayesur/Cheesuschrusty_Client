import React from "react";

interface ProgressBarProps {
  /** If using percentage directly (0–100) */
  progress?: number;
  /** If using step-based progress */
  current?: string | number|any;
  total?: number;
  /** Optional label shown above the bar */
  label?: string;
  /** Show numeric percentage text */
  showPercentage?: boolean;
  /** Tailwind color for the filled part */
  color?: string;
  /** Height of the bar, e.g. 'h-2', 'h-3' */
  height?: string;
  /** Rounded corner size */
  rounded?: string;
  /** Extra wrapper classes */
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  current,
  total,
  label,
  showPercentage = false,
  color = "bg-indigo-600",
  // height = "h-2",
  rounded = "rounded-full",
  className = "",
}) => {
  // Correct progress percentage calculation
  const percentage =
    progress !== undefined
      ? Math.min(Math.max(progress, 0), 100)
      : total
      ? Math.min(((current ?? 0) / total) * 100, 100)
      : 0;

  return (
    <div className={`w-full ${className}`}>
      {/* Optional label */}
      {label && (
        <div className="text-xs text-gray-600 mb-2">
          {total && current !== undefined
            ? `${label} ${current} of ${total}`
            : label}
        </div>
      )}

      {/* Progress bar track */}
      <div className={`w-full bg-[#D9D9D9]  h-3 ${rounded} overflow-hidden`}>
        <div
          className={`${color}  h-3 ${rounded} transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Optional numeric percentage */}
      {showPercentage && (
        <div className="text-xs text-gray-600 mt-1">{Math.round(percentage)}%</div>
      )}
    </div>
  );
};













// import React from "react";

// interface ProgressBarProps {
//   /** If using percentage directly (0–100) */
//   progress?: number;
//   /** If using step-based progress */
//   current?: number;
//   total?: number;
//   /** Optional label shown above the bar */
//   label?: string;
//   /** Show numeric percentage text */
//   showPercentage?: boolean;
//   /** Tailwind color for the filled part */
//   color?: string;
//   /** Height of the bar, e.g. 'h-2', 'h-3' */
//   height?: string;
//   /** Rounded corner size */
//   rounded?: string;
//   /** Extra wrapper classes */
//   className?: string;
//   value?:string;
// }

// export const ProgressBar: React.FC<ProgressBarProps> = ({
//   progress,
//   current,
//   total,
//   label,
//   showPercentage = false,
//   color = "bg-indigo-600",
//   height = "h-2",
//   rounded = "rounded-full",
//   className = "",
// }) => {
//   // Calculate progress %
//   const percentage =
//     progress !== undefined
//       ? Math.min(Math.max(progress, 0), 100)
//       : total
//       ? Math.min(((current ?? 0 + 1) / total) * 100, 100)
//       : 0;

//   return (
//     <div className={`w-full ${className}`}>
//       {/* Optional label */}
//       {label && (
//         <div className="text-xs text-gray-600 mb-2">
//           {total && current !== undefined
//             ? `${label} ${current + 1} of ${total}`
//             : label}
//         </div>
//       )}

//       {/* Bar */}
//       <div className={`w-full bg-gray-200 ${height} ${rounded} overflow-hidden`}>
//         <div
//           className={`${color} ${height} ${rounded} transition-all duration-500 ease-out`}
//           style={{ width: `${percentage}%` }}
//         />
//       </div>

//       {/* Optional numeric percentage */}
//       {showPercentage && (
//         <div className="text-xs text-gray-600 mt-1">{Math.round(percentage)}%</div>
//       )}
//     </div>
//   );
// };














// import React from "react";

// interface ProgressBarProps {
//   /** Current progress value (0–100) */
//   progress: number;
//   /** Optional label shown above the bar */
//   label?: string;
//   /** Show numeric percentage text */
//   showPercentage?: boolean;
//   /** Tailwind background color for the filled part */
//   color?: string;
//   /** Height of the bar, e.g. 'h-2', 'h-3', 'h-4' */
//   height?: string;
//   /** Rounded corner size, e.g. 'rounded-full' or 'rounded-md' */
//   rounded?: string;
//   /** Extra wrapper classes for margin or layout */
//   className?: string;
// }

// export const ProgressBar: React.FC<ProgressBarProps> = ({
//   progress,
//   label,
//   showPercentage = false,
//   color = "bg-indigo-600",
//   height = "h-3",
//   rounded = "rounded-full",
//   className = "",
// }) => {
//   // Ensure progress stays between 0–100
//   const percentage = Math.min(Math.max(progress, 0), 100);

//   return (
//     <div className={`w-full ${className}`}>
//       {label && <div className="text-xs text-gray-600 mb-2">{label}</div>}
//       <div className={`w-full bg-gray-200 ${height} ${rounded} overflow-hidden`}>
//         <div
//           className={`${color} ${height} ${rounded} transition-all duration-500 ease-out`}
//           style={{ width: `${percentage}%` }}
//         />
//       </div>
//       {showPercentage && (
//         <div className="text-xs text-gray-600 mt-1">{percentage}%</div>
//       )}
//     </div>
//   );
// };
