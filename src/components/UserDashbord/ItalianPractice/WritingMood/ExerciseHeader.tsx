import React from 'react';
import { EyeOff, Lightbulb } from 'lucide-react';

interface ExerciseHeaderProps {
  showTips: boolean;
  onToggleTips: () => void;
}

const ExerciseHeader: React.FC<ExerciseHeaderProps> = ({ showTips, onToggleTips }) => (
  <div className="p-6 border-b border-gray-200">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Short Essay</h2>
          <p className="text-sm text-gray-600">Write a short paragraph about the given topic</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onToggleTips}
          className="px-3 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1"
        >
          <EyeOff className="w-4 h-4" />
          {showTips ? 'Hide Hints' : 'Show Hints'}
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Exercise 1/3
        </button>
      </div>
    </div>
  </div>
);

export default ExerciseHeader;
