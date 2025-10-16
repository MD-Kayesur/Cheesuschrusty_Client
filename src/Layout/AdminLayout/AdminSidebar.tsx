
import { Link, useLocation } from "react-router-dom";
import React from "react";
import itimg from "../../assets/cube-group.png";
import overviewIcon from "../../assets/Dashbord/fi_7.svg";
import usermanagementicon from "../../assets/Dashbord/fi_5.svg";
import contentmanagementicon from "../../assets/Dashbord/fi_4.svg";
import Subscriptionicon from "../../assets/Dashbord/fi_6.svg";
import Analyticsicon from "../../assets/Dashbord/fi_3.svg";
import Supporticon from "../../assets/Dashbord/fi_2.svg";
import Settingsicon from "../../assets/Dashbord/fi_1.svg";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin", label: "Overview", icon: overviewIcon },
    { path: "/admin/users", label: "User Management", icon: usermanagementicon },
    { path: "/admin/content", label: "Content Management", icon: contentmanagementicon },
    { path: "/admin/subscription", label: "Subscription", icon: Subscriptionicon },
    { path: "/admin/analytics", label: "Analytics", icon: Analyticsicon },
    { path: "/admin/support", label: "Support", icon: Supporticon },
    { path: "/admin/settings", label: "Settings", icon: Settingsicon },
  ];

  return (
    <div
      className={`rounded-r-2xl border border-r-[#C6C8CB] bg-[#EBEBEB] text-white flex flex-col transition-all duration-400 ${
        sidebarOpen ? "w-64" : "w-0 overflow-hidden"
      }`}
    >
      {sidebarOpen && (
        <>
          {/* Close Button */}
          <div className="flex justify-end p-2">
            <button
              onClick={() => setSidebarOpen(false)}
              className="hover:cursor-pointer w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center"
            >
              ✖
            </button>
          </div>

          {/* Logo */}
          <div className="px-11 pt-7 pb-8 border-b border-b-[#C6C8CB] flex items-center gap-2">
            <img className="w-11" src={itimg} alt="Logo" />
            <h1 className="font-bold text-3xl text-[#111827]">B1 Italian</h1>
          </div>

          {/* Menu */}
          <nav className="flex-1 mt-4 p-4">
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
                  <span className="p1">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </>
      )}
    </div>
  );
};

export default AdminSidebar;














// import React from "react";
// import itimg from "../../assets/cube-group.png";
// import overviewIcon from "../../assets/Dashbord/fi_7.svg";
// import usermanagementicon from "../../assets/Dashbord/fi_5.svg";
// import contentmanagementicon from "../../assets/Dashbord/fi_4.svg";
// import Subscriptionicon from "../../assets/Dashbord/fi_6.svg";
// import Analyticsicon from "../../assets/Dashbord/fi_3.svg";
// import Supporticon from "../../assets/Dashbord/fi_2.svg";
// import Settingsicon from "../../assets/Dashbord/fi_1.svg";

// interface AdminSidebarProps {
//   sidebarOpen: boolean;
//   currentRoute: string;
//   setSidebarOpen: (open: boolean) => void;
//   setCurrentRoute: (route: string) => void;
// }

// const AdminSidebar: React.FC<AdminSidebarProps> = ({
//   sidebarOpen,
//   currentRoute,
//   setSidebarOpen,
//   setCurrentRoute,
// }) => {
//   const menuItems = [
//     { id: "overview", label: "Overview", icon: overviewIcon },
//     { id: "users", label: "User Management", icon: usermanagementicon },
//     { id: "content", label: "Content Management", icon: contentmanagementicon },
//     { id: "subscription", label: "Subscription", icon: Subscriptionicon },
//     { id: "analytics", label: "Analytics", icon: Analyticsicon },
//     { id: "support", label: "Support", icon: Supporticon },
//     { id: "settings", label: "Settings", icon: Settingsicon },
//   ];

//   return (
//     <div
//       className={`rounded-r-2xl border border-r-[#C6C8CB] bg-[#EBEBEB] text-white flex flex-col transition-all duration-400 ${
//         sidebarOpen ? "w-64" : "w-0 overflow-hidden"
//       }`}
//     >
//       {sidebarOpen && (
//         <>
//           {/* Close Button */}
//           <div className="flex justify-end p-2">
//             <button
//               onClick={() => setSidebarOpen(false)}
//               className="hover:cursor-pointer w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center"
//             >
//               ✖
//             </button>
//           </div>

//           {/* Logo */}
//           <div className="px-11 pt-7 pb-8 border-b border-b-[#C6C8CB] flex items-center gap-2">
//             <img className="w-11" src={itimg} alt="Logo" />
//             <h1 className="font-bold text-3xl text-[#111827]">B1 Italian</h1>
//           </div>

//           {/* Menu */}
//           <nav className="flex-1 mt-4 p-4">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setCurrentRoute(item.id)}
//                 className={`w-full mb-3 text-left px-4 py-3 rounded-lg flex items-center gap-2 transition ${
//                   currentRoute === item.id
//                     ? "bg-[#111827] text-white"
//                     : "text-[#7E7E7E] hover:bg-[#111827] hover:text-white"
//                 }`}
//               >
//                 <img src={item.icon} alt={item.label} className="w-6 h-6" />
//                 <span className="p1">{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminSidebar;
