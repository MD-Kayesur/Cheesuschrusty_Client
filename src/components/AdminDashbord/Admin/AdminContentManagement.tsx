import React from 'react';

const AdminContentManagement: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>
      <p className="text-gray-600 mb-6">
        Upload, edit, and manage learning materials and course content here.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Italian Basics', 'Grammar 101', 'Verb Conjugations'].map((title) => (
          <div
            key={title}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-3">
              Manage flashcards, lessons, and quizzes.
            </p>
            <button className="text-blue-500 text-sm font-medium hover:underline">
              Edit Content
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminContentManagement;
