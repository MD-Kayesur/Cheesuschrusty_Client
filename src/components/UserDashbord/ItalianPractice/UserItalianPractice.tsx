
import React from "react";
import { BookOpen, Headphones } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

const SkillCard = ({ icon, title, subtitle, duration, progress, bgColor, iconBg, path }: any) => (
  <div className={`${bgColor} rounded-xl p-6 shadow-sm`}>
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`${iconBg} rounded-lg p-3 flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <span className="text-sm text-gray-600">{duration}</span>
    </div>

    <div className="mb-3">
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-gray-800 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>

    <div className="flex items-center justify-between mb-4">
      <span className="text-xs text-gray-600">{progress}% Completed</span>
    </div>

    <Link
      to={path}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
    >
      Start Practice
    </Link>
  </div>
);

const UserItalianPractice: React.FC = () => {
  const location = useLocation();

  // ✅ Nested route check
  const isNested = location.pathname.startsWith("/user/practice/") && location.pathname !== "/user/practice";

  if (isNested) {
    return <Outlet />;
  }

  const skills = [
    {
      icon: <BookOpen className="w-5 h-5 text-blue-600" />,
      title: "Reading",
      subtitle: "Comprehension practice",
      duration: "8 min",
      progress: 70,
      bgColor: "bg-blue-50",
      iconBg: "bg-white",
      path: "reading",
    },
    {
      icon: <Headphones className="w-5 h-5 text-orange-600" />,
      title: "Listening",
      subtitle: "Audio comprehension",
      duration: "8 min",
      progress: 50,
      bgColor: "bg-orange-50",
      iconBg: "bg-white",
      path: "listening",
    },
    {
      icon: <Headphones className="w-5 h-5 text-orange-600" />,
      title: "Writing",
      subtitle: "Audio comprehension",
      duration: "8 min",
      progress: 50,
      bgColor: "bg-orange-50",
      iconBg: "bg-white",
      path: "Writing",
    },
    {
      icon: <Headphones className="w-5 h-5 text-orange-600" />,
      title: "Soeaking",
      subtitle: "Audio comprehension",
      duration: "8 min",
      progress: 50,
      bgColor: "bg-orange-50",
      iconBg: "bg-white",
      path: "Speaking",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Italian</h1>
          <p className="text-gray-600">Choose a skill to practice and improve your Italian proficiency</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserItalianPractice;





















// import React from "react";
// import { BookOpen, Headphones, PenTool, MessageCircle, BarChart3, Clock, Target } from "lucide-react";
// import { Link, Outlet, useLocation } from "react-router-dom";

// const SkillCard = ({ icon, title, subtitle, duration, progress, bgColor, iconBg, path }: any) => (
//   <div className={`${bgColor} rounded-xl p-6 shadow-sm`}>
//     <div className="flex items-start justify-between mb-4">
//       <div className="flex items-center gap-3">
//         <div className={`${iconBg} rounded-lg p-3 flex items-center justify-center`}>
//           {icon}
//         </div>
//         <div>
//           <h3 className="font-semibold text-gray-800">{title}</h3>
//           <p className="text-sm text-gray-500">{subtitle}</p>
//         </div>
//       </div>
//       <span className="text-sm text-gray-600">{duration}</span>
//     </div>

//     <div className="mb-3">
//       <div className="w-full bg-gray-300 rounded-full h-2">
//         <div
//           className="bg-gray-800 h-2 rounded-full transition-all duration-300"
//           style={{ width: `${progress}%` }}
//         />
//       </div>
//     </div>

//     <div className="flex items-center justify-between mb-4">
//       <span className="text-xs text-gray-600">{progress}% Completed</span>
//     </div>

//     <Link
//       to={path}
//       className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
//     >
//       Start Practice
//     </Link>
//   </div>
// );

// const UserItalianPractice: React.FC = () => {
//   const location = useLocation();
//   const isNested = location.pathname.includes("/user/practice/reading");

//   if (isNested) {
//     // ✅ If nested route (e.g. reading), render it inside Outlet
//     return <Outlet />;
//   }

//   const skills = [
//     {
//       icon: <BookOpen className="w-5 h-5 text-blue-600" />,
//       title: "Reading",
//       subtitle: "Comprehension practice",
//       duration: "8 min",
//       progress: 70,
//       bgColor: "bg-blue-50",
//       iconBg: "bg-white",
//       path: "reading", // ✅ relative nested path
//     },
//     {
//       icon: <Headphones className="w-5 h-5 text-orange-600" />,
//       title: "Listening",
//       subtitle: "Audio comprehension",
//       duration: "8 min",
//       progress: 50,
//       bgColor: "bg-orange-50",
//       iconBg: "bg-white",
//       path: "listening", // placeholder
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="mx-auto">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Italian</h1>
//           <p className="text-gray-600">Choose a skill to practice and improve your Italian proficiency</p>
//         </div>

//         {/* Stats (optional) */}
//         <div className="grid grid-cols-2 gap-6">
//           {skills.map((skill, index) => (
//             <SkillCard key={index} {...skill} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserItalianPractice;



















// import React from 'react';
// import { BookOpen, Headphones, PenTool, MessageCircle, BarChart3, Clock, Target } from 'lucide-react';
// import { Link } from 'react-router-dom';

// interface SkillCardProps {
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   duration: string;
//   progress: number;
//   bgColor: string;
//   iconBg: string;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ icon, title, subtitle, duration, progress, bgColor, iconBg }) => {
//   return (
//     <div className={`${bgColor} rounded-xl p-6 shadow-sm`}>
//       <div className="flex items-start justify-between mb-4">
//         <div className="flex items-center gap-3">
//           <div className={`${iconBg} rounded-lg p-3 flex items-center justify-center`}>
//             {icon}
//           </div>
//           <div>
//             <h3 className="font-semibold text-gray-800">{title}</h3>
//             <p className="text-sm text-gray-500">{subtitle}</p>
//           </div>
//         </div>
//         <span className="text-sm text-gray-600">{duration}</span>
//       </div>
      
//       <div className="mb-3">
//         <div className="w-full bg-gray-300 rounded-full h-2">
//           <div 
//             className="bg-gray-800 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${progress}%` }}
//           />
//         </div>
//       </div>
      
//       <div className="flex items-center justify-between mb-4">
//         <span className="text-xs text-gray-600">{progress}% Completed</span>
//       </div>
      
//       <Link to="italian_practice" className="   bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
//         Start Practice
//       </Link >
//     </div>
//   );
// };

// const ItalianPractice: React.FC = () => {
//   const skills = [
//     {
//       icon: <BookOpen className="w-5 h-5 text-blue-600" />,
//       title: 'Reading',
//       subtitle: 'Comprehension practice',
//       duration: '8 min',
//       progress: 70,
//       bgColor: 'bg-blue-50',
//       iconBg: 'bg-white'
//     },
//     {
//       icon: <Headphones className="w-5 h-5 text-orange-600" />,
//       title: 'Listening',
//       subtitle: 'Audio Comprehension',
//       duration: '8 min',
//       progress: 70,
//       bgColor: 'bg-orange-50',
//       iconBg: 'bg-white'
//     },
//     {
//       icon: <PenTool className="w-5 h-5 text-green-600" />,
//       title: 'Writing',
//       subtitle: 'Composition practice',
//       duration: '8 min',
//       progress: 70,
//       bgColor: 'bg-green-50',
//       iconBg: 'bg-white'
//     },
//     {
//       icon: <MessageCircle className="w-5 h-5 text-purple-600" />,
//       title: 'Speaking',
//       subtitle: 'Verbal practice',
//       duration: '8 min',
//       progress: 70,
//       bgColor: 'bg-purple-50',
//       iconBg: 'bg-white'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="  mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Italian</h1>
//           <p className="text-gray-600">Choose a skill to practice and improve your Italian proficiency</p>
//         </div>

//         {/* Daily Goal Progress */}
//         <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
//           <div className="flex items-center justify-between mb-3">
//             <div className="flex items-center gap-3">
//               <div className="bg-red-50 rounded-full p-2">
//                 <Target className="w-5 h-5 text-red-500" />
//               </div>
//               <div>
//                 <h2 className="font-semibold text-gray-900">Daily Goal Progress</h2>
//                 <p className="text-sm text-gray-500">32 of 38 minutes completed</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <div className="text-2xl font-bold text-gray-900">73%</div>
//               <div className="text-xs text-gray-500">8 min left</div>
//             </div>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-3">
//             <div 
//               className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-300"
//               style={{ width: '73%' }}
//             />
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="grid grid-cols-3 gap-6 mb-8">
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-2">
//               <BarChart3 className="w-5 h-5 text-blue-600" />
//               <span className="text-sm text-gray-600">Today's Sessions</span>
//             </div>
//             <div className="text-3xl font-bold text-gray-900">3</div>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-2">
//               <Clock className="w-5 h-5 text-blue-600" />
//               <span className="text-sm text-gray-600">Total Study Time</span>
//             </div>
//             <div className="text-3xl font-bold text-gray-900">3/5</div>
//           </div>
          
//           <div className="bg-white rounded-xl p-6 shadow-sm">
//             <div className="flex items-center gap-3 mb-2">
//               <Target className="w-5 h-5 text-blue-600" />
//               <span className="text-sm text-gray-600">Average Accuracy</span>
//             </div>
//             <div className="text-3xl font-bold text-gray-900">88%</div>
//           </div>
//         </div>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-2 gap-6">
//           {skills.map((skill, index) => (
//             <SkillCard key={index} {...skill} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItalianPractice;