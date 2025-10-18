import React from 'react';

interface HeaderButtonProps {
  label: string;
  icon?: React.ReactNode;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ label, icon }) => (
  <button className="flex items-center gap-2 px-4 py-2 mb-6 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors">
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </button>
);

export default HeaderButton;
