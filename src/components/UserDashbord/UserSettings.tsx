import React from 'react';
import { CheckCircle } from 'lucide-react';

export const UserSettings: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Settings</h2>
      <p className="text-gray-600 mb-8">Customize your learning experience</p>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Profile Settings</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="displayName" className="text-sm font-medium text-gray-700 block mb-2">Display Name</label>
              <input id="displayName" type="text" defaultValue="Marco" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-2">Email</label>
              <input id="email" type="email" defaultValue="marco@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
          </div>
        </div>

        {/* Learning Preferences */}
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Learning Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Daily Goal (minutes)</span>
              <input type="number" defaultValue={30} className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-center" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notifications</span>
              <div className="w-12 h-6 flex items-center bg-blue-600 rounded-full p-0.5 cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full transition-transform transform translate-x-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
