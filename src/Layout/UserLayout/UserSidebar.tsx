import { Link, useLocation } from "react-router-dom";
import itimg from "../../assets/cube-group.png";
import overviewIcon from "../../assets/Dashbord/fi_18.svg";
import Practiceicon from "../../assets/Dashbord/fi_17.svg";
import TrendingUpicon from "../../assets/Dashbord/fi_16.svg";
import Brainicon from "../../assets/Dashbord/fi_15.svg";
import Usersicon from "../../assets/Dashbord/fi_14.svg";
import Calendaricon from "../../assets/Dashbord/fi_13.svg";
import Settingsicon from "../../assets/Dashbord/fi_1.svg";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const UserSidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/user", label: "Pro Overview", icon: overviewIcon },
    { path: "/user/practice", label: "Practice", icon: Practiceicon },
     { path: "/user/analytics", label: "Advanced Analytics", icon: TrendingUpicon },
    { path: "/user/flashcards", label: "Advanced Flashcards", icon: Brainicon },
    { path: "/user/leaderboard", label: "Pro Leaderboard", icon: Usersicon },
    { path: "/user/planner", label: "AI Study Planner", icon: Calendaricon },
    { path: "/user/settings", label: "Settings", icon: Settingsicon },
  ];

  return (
    <div
      className={`rounded-r-2xl border border-r-[#C6C8CB] bg-[#EBEBEB] flex flex-col transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      {/* Close Button */}
      {sidebarOpen && (
        <div className="flex justify-end p-2">
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center hover:cursor-pointer"
          >
            ✖
          </button>
        </div>
      )}

      {/* Logo */}
      {sidebarOpen && (
        <div className="px-6 pt-4 pb-6 border-b border-b-[#C6C8CB] flex items-center gap-2">
          <img src={itimg} alt="Logo" className="w-11" />
          <h1 className="font-bold text-3xl text-[#111827]">B1 Italian</h1>
        </div>
      )}

      {/* Menu */}
      <nav className="flex-1 mt-4 px-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full mb-3 text-left px-4 py-3 rounded-lg flex items-center gap-2 transition ${
                isActive
                  ? "bg-[#111827] text-white"
                  : "text-[#7E7E7E] hover:bg-[#111827] hover:text-white"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
