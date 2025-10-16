import React from 'react';
import { TrendingUp, Target, Clock } from 'lucide-react';

export const UserAnalytics: React.FC = () => {
  const weeklyData = [80, 65, 90, 75, 88, 45, 70];
  const weeklyMinutes = [24, 19, 27, 22, 26, 13, 21];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Advanced Analytics</h2>
      <p className="text-gray-600 mb-8">Detailed insights into your learning progress</p>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">+23%</div>
          <p className="text-sm text-gray-600">Improvement this week</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
          <Target className="w-8 h-8 text-green-600 mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">92%</div>
          <p className="text-sm text-gray-600">Average accuracy</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
          <Clock className="w-8 h-8 text-purple-600 mb-3" />
          <div className="text-3xl font-bold text-gray-900 mb-1">340 min</div>
          <p className="text-sm text-gray-600">Total study time</p>
        </div>
      </div>
    </div>
  );
};
