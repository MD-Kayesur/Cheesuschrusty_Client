import React from 'react';
import { Flame, Trophy, Users } from 'lucide-react';

interface Leader {
  rank: number;
  name: string;
  points: number;
  streak: number;
  avatar: string;
}

export const UserLeaderboard: React.FC = () => {
  const leaders: Leader[] = [
    { rank: 1, name: 'Marco (You)', points: 2450, streak: 7, avatar: '👨' },
    { rank: 2, name: 'Sofia', points: 2380, streak: 12, avatar: '👩' },
    { rank: 3, name: 'Alessandro', points: 2310, streak: 5, avatar: '👨' },
    { rank: 4, name: 'Giulia', points: 2240, streak: 9, avatar: '👩' },
    { rank: 5, name: 'Lorenzo', points: 2180, streak: 4, avatar: '👨' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Pro Leaderboard</h2>
      <p className="text-gray-600 mb-8">Compete with other learners worldwide</p>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {leaders.map((leader) => (
          <div key={leader.rank} className={`flex items-center gap-4 p-6 border-b border-gray-200 last:border-0 ${leader.rank === 1 ? 'bg-yellow-50' : ''}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
              leader.rank === 1 ? 'bg-yellow-400 text-white' :
              leader.rank === 2 ? 'bg-gray-300 text-gray-700' :
              leader.rank === 3 ? 'bg-orange-300 text-white' :
              'bg-gray-100 text-gray-600'
            }`}>
              #{leader.rank}
            </div>
            <div className="text-4xl">{leader.avatar}</div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900">{leader.name}</h3>
              <p className="text-sm text-gray-600">{leader.points} points</p>
            </div>
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-medium text-gray-700">{leader.streak}</span>
            </div>
            {leader.rank === 1 && <Trophy className="w-6 h-6 text-yellow-500" />}
          </div>
        ))}
      </div>
    </div>
  );
};
