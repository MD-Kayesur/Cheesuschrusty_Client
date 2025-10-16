import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ScheduleItem {
  day: string;
  tasks: string[];
  completed: number;
  total: number;
}

export const UserStudyPlanner: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { day: 'Monday', tasks: ['Grammar: Present Tense', 'Vocabulary: Food'], completed: 2, total: 2 },
    { day: 'Tuesday', tasks: ['Reading Comprehension', 'Speaking Practice'], completed: 1, total: 2 },
    { day: 'Wednesday', tasks: ['Writing Exercise', 'Listening Practice'], completed: 0, total: 2 },
    { day: 'Thursday', tasks: ['Grammar Review', 'Conversation Practice'], completed: 0, total: 2 },
    { day: 'Friday', tasks: ['Vocabulary Quiz', 'Pronunciation'], completed: 0, total: 2 }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Study Planner</h2>
      <p className="text-gray-600 mb-8">Your personalized weekly study schedule</p>
      <div className="space-y-4">
        {schedule.map(item => (
          <div key={item.day} className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">{item.day}</h3>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">{item.completed}/{item.total} completed</span>
              </div>
            </div>
            <div className="space-y-2">
              {item.tasks.map((task, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-5 h-5 rounded border-2 ${i < item.completed ? 'bg-green-500 border-green-500 flex items-center justify-center' : 'border-gray-300'}`}>
                    {i < item.completed && <CheckCircle className="w-4 h-4 text-white" />}
                  </div>
                  <span className={`text-sm ${i < item.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>{task}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
