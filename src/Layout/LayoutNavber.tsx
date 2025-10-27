import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";

interface UserHeaderProps {
  userImage: string;
  userName: string;
  userRole: string;
  themeIcon: string;
  onThemeClick?: () => void; // optional handler
}

export const LayoutNavber: React.FC<UserHeaderProps> = ({
  userImage,
  // userName,
  // userRole,
  themeIcon,
  onThemeClick,
}) => {

// const navigate =useNavigate() 
  const userData = localStorage.getItem("userData");
const { role } = userData ? JSON.parse(userData) : {};

console.log(role)

  return (
    <div className="px-10 border-b border-[#C6C8CB] py-5 flex items-center justify-between">
      {/* Left Side: User Info */}
      <div className="flex items-center gap-3">
        <img
          src={userImage}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
  {role === "admin" && (
    <div>
      <div className="font-semibold text-sm">Admin</div>
      <div className="text-base text-gray-500">Admin</div>
    </div>
  )}

  {role === "user" && (
    <div>
      <div className="font-semibold text-sm"> User</div>
      <div className="text-base text-gray-500"> User</div>
    </div>
  )}

  {role === "freeuser" && (
    <div>
      <div className="font-semibold text-sm">FreeUser</div>
      <div className="text-base text-gray-500">Free User</div>
    </div>
  )}
</div>

      </div>

      {/* Right Side: Theme Icon */}
      <button
        className="w-10 h-10 flex cursor-pointer items-center justify-center hover:bg-gray-100 rounded-full transition"
        onClick={onThemeClick}
      >
        <img src={themeIcon} alt="Theme" className="w-10 h-10" />
      </button>
       

 

    </div>
  );
};

 