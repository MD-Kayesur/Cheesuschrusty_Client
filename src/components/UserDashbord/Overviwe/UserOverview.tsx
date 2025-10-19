import React, { useState } from "react";
import {
  Clock,
  BookOpen,
  Target,
  Brain,
  Flame,
  Volume2,
  CheckSquare,
  Mic,
  FileText,
  Zap,
  Award,
  Subtitles,
} from "lucide-react";
 
import ContinueLearningCard from "./UserContinueLearningCard";
import WeeklyProgressCard from "./UserWeeklyProgressCard";
import StreakBadge from "./UserStreakBadge";
import Header from "../../Header/Header";
import sessionicon from "../../../assets/Dashbord//startsession.svg"
import fireicon from "../../../assets/Dashbord//fireicon.svg"
import { UserStatCard } from "./UserStatCard";
import { UserPracticeAreaCard } from "./UserPracticeAreaCard";
import { UserAchievementsCard } from "./UserAchievementsCard";




export const UserOverview: React.FC = () => {
  const [stats] = useState({
    minutesStudied: 22,
    totalMinutes: 30,
    lessonsCompleted: 3,
    totalLessons: 5,
    accuracyRate: 88,
    wordsLearned: 15,
    totalWords: 20,
    streak: 7,
    weeklyTime: 135,
    weeklyGoal: 160,
    weeklyLessons: 12,
  });

  const minutesRemaining = stats.totalMinutes - stats.minutesStudied;
  const weeklyProgress = Math.round((stats.weeklyTime / stats.weeklyGoal) * 100);

  const practiceAreas = [
    { name: "Reading", icon: FileText, iconColor: "text-blue-600", completed: 12, total: 16, completionText: "12 Lessons completed" },
    { name: "Listening", icon: Volume2, iconColor: "text-orange-600", completed: 12, total: 16, completionText: "12 Lessons completed" },
    { name: "Writing", icon: CheckSquare, iconColor: "text-green-600", completed: 12, total: 16, completionText: "12 Lessons completed" },
    { name: "Speaking", icon: Mic, iconColor: "text-purple-600", completed: 12, total: 16, completionText: "12 Lessons completed" },
  ];

  const recentAchievements = [
    { name: "7 Day Streak", icon: Flame, time: "2 days ago", iconColor: "text-orange-500", bgColor: "bg-orange-50" },
    { name: "Fast Learner", icon: Zap, time: "3 days ago", iconColor: "text-yellow-500", bgColor: "bg-yellow-50" },
    { name: "Grammar Master", icon: Award, time: "1 week ago", iconColor: "text-indigo-500", bgColor: "bg-indigo-50" },
  ];

  const weeklyStats = [
    { label: "Study Time", value: "2h 15m" },
    { label: "Lessons", value: "12" },
  ];

  const handleViewAnalytics = () => {
    console.log("Navigating to detailed analytics...");
  };

  const handleStartSession = () => {
    console.log("Starting practice session...");
  };

  return (
    <div className="p-6    mx-auto font-sans   min-h-screen">
    <Header title={"Welcome back, Marco! 👋"} subtitle={"Ready to continue your Italian learning journey?"}/>
  <div className=" flex flex-col mt-8 gap-10">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <UserStatCard
              title="Minutes Studied"
              icon={Clock}
              iconColor="text-blue-500"
              value={stats.minutesStudied}
              total={stats.totalMinutes}
              progressBarColor="bg-[#0B5FFF]"
            />
            <UserStatCard
              title="Lessons Completed"
              icon={BookOpen}
              iconColor="text-green-500"
              value={stats.lessonsCompleted}
              total={stats.totalLessons}
              progressBarColor="bg-[#0B5FFF]"
            />
            <UserStatCard
              title="Accuracy Rate"
              icon={Target}
              iconColor="text-red-500"
              value={stats.accuracyRate}
              progressBarColor="bg-[#0B5FFF]"
              unit="%"
            />
            <UserStatCard
              title="Words Learned"
              icon={Brain}
              iconColor="text-orange-500"
              value={stats.wordsLearned}
              total={stats.totalWords}
              progressBarColor="bg-[#0B5FFF]"
            />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 ">
        {/* Left Column */}
        <div className="md:col-span-8  space-y-10">
        

          <ContinueLearningCard
            title="Continue Learning"
            goalText={`You're ${minutesRemaining} minutes away from your daily goal`}
            buttonText="Start Practice Session"
            img={sessionicon}
            onButtonClick={handleStartSession}
          />

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-gray-600 mb-6">
              Track your progress across different skills
            </p>
            <div className="grid grid-cols-2 gap-6">
              {practiceAreas.map((area) => (
                <UserPracticeAreaCard
                  key={area.name}
                  {...area}
                  progress={Math.round((area.completed / area.total) * 100)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-4 space-y-6">
          <StreakBadge
            streakCount={stats.streak}
            streakUnit="Day"
            fireicon={fireicon}
            message="Keep the fire burning!"
          />

          <WeeklyProgressCard
            title="This Week"
            subtitle="Your learning progress"
            progress={weeklyProgress}
            stats={weeklyStats}
            buttonText="View Detailed Analytics"
            onButtonClick={handleViewAnalytics}
          />

          <UserAchievementsCard achievements={recentAchievements} />
        </div>
      </div>
  </div>
    </div>
  );
};
















// import React, { useState } from 'react';
// import { Clock, BookOpen, Target, Brain, Flame, Volume2, CheckSquare, Mic, FileText, Zap, Award } from 'lucide-react';
// import { StatCard } from './Overviwe/StatCard';
// import { PracticeAreaCard } from './Overviwe/PracticeAreaCard';
// import { AchievementsCard } from './Overviwe/AchievementsCard';
// import { ProgressBar } from './Overviwe/ProgressBar';
// import ContinueLearningCard from './Overviwe/ContinueLearningCard';
// import WeeklyProgressCard from './Overviwe/WeeklyProgressCard';
// import StreakBadge from './Overviwe/StreakBadge';
 
// export const Overview: React.FC = () => {
//   const [stats] = useState({
//     minutesStudied: 22,
//     totalMinutes: 30,
//     lessonsCompleted: 3,
//     totalLessons: 5,
//     accuracyRate: 88,
//     wordsLearned: 15,
//     totalWords: 20,
//     streak: 7,
//     weeklyTime: 135,
//     weeklyGoal: 160,
//     weeklyLessons: 12,
//   });

//   const practiceAreas = [
//     { name: 'Reading', icon: FileText, iconColor: 'text-blue-600', completed: 12, total: 16 },
//     { name: 'Listening', icon: Volume2, iconColor: 'text-orange-600', completed: 12, total: 15 },
//     { name: 'Writing', icon: CheckSquare, iconColor: 'text-green-600', completed: 12, total: 16 },
//     { name: 'Speaking', icon: Mic, iconColor: 'text-purple-600', completed: 12, total: 15 },
//   ];

//   const recentAchievements = [
//     { name: '7 Day Streak', icon: Flame, time: '2 days ago', iconColor: 'text-orange-500', bgColor: 'bg-orange-50' },
//     { name: 'Fast Learner', icon: Zap, time: '3 days ago', iconColor: 'text-yellow-500', bgColor: 'bg-yellow-50' },
//     { name: 'Grammar Master', icon: Award, time: '1 week ago', iconColor: 'text-indigo-500', bgColor: 'bg-indigo-50' },
//   ];

//   const weeklyProgress = (stats.weeklyTime / stats.weeklyGoal) * 100;

// const weeklyStats = [
//     { label: 'Study Time', value: '2h 15m' },
//     { label: 'Lessons', value: '12' },
//   ];

//   const handleViewAnalytics = () => {
//     console.log('Navigating to detailed analytics...');
//   };



// const handleStartSession = () => {
//     console.log('Starting practice session...');
//     // Add your routing or state logic here
//   };



//   return (
//     <div className="p-8  mx-auto font-sans   min-h-screen space-y-8">
//       <header>
//         <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
//         <p className="text-gray-600 mt-1">Here's a quick look at your learning progress</p>
//       </header>

//       <div className="grid grid-cols-12 gap-8">
//         {/* Left Column */}
//         <div className="col-span-8 space-y-8">
//           {/* Stats */}
//           <div className="grid grid-cols-4 gap-6">
//             <StatCard
//               title="Minutes Studied"
//               icon={Clock}
//               iconColor="text-blue-500"
//               value={stats.minutesStudied}
//               total={stats.totalMinutes}
//               progressBarColor="bg-blue-500"
//             />
//             <StatCard
//               title="Lessons Completed"
//               icon={BookOpen}
//               iconColor="text-green-500"
//               value={stats.lessonsCompleted}
//               total={stats.totalLessons}
//               progressBarColor="bg-green-500"
//             />
//             <StatCard
//               title="Accuracy Rate"
//               icon={Target}
//               iconColor="text-indigo-500"
//               value={stats.accuracyRate}
//               progressBarColor="bg-indigo-500"
//               unit="%"
//             />
//             <StatCard
//               title="Words Learned"
//               icon={Brain}
//               iconColor="text-orange-500"
//               value={stats.wordsLearned}
//               total={stats.totalWords}
//               progressBarColor="bg-orange-500"
//             />
//           </div>

//           {/* Practice Areas */}
//           <div className="grid grid-cols-2 gap-4">
//             {practiceAreas.map((area) => (
//               <PracticeAreaCard key={area.name} {...area} />
//             ))}
//           </div>
//         </div>
// <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
//       {/* 1. Streak Badge */}
//       <div className="mb-4">
//         <StreakBadge
//           streakCount={7}
//           streakUnit="Day"
//           message="Keep the fire burning!"
//         />
//       </div>

//       {/* 2. Weekly Progress Card */}
//       <WeeklyProgressCard
//         title="This Week"
//         subtitle="Your learning progress"
//         progress={85} // Dynamic progress value
//         stats={weeklyStats}
//         buttonText="View Detailed Analytics"
//         onButtonClick={handleViewAnalytics}
//       />
//     </div>






//         {/* Right Column */}
//         <div className="col-span-4 space-y-6">
//           <AchievementsCard achievements={recentAchievements} />


// <ContinueLearningCard
//         title="Continue Learning"
//         goalText="You're 8 minutes away from your daily goal"
//         buttonText="Start Practice Session"
//         onButtonClick={handleStartSession}
//       />



//           {/* Weekly Progress Section */}
//           <div className="bg-white rounded-xl shadow-md p-6">
//             <h3 className="text-lg font-semibold text-gray-800 mb-2">Weekly Study Progress</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               {stats.weeklyTime} / {stats.weeklyGoal} minutes
//             </p>
//             <ProgressBar
//               value={stats.weeklyTime}
//               max={stats.weeklyGoal}
//               color={weeklyProgress >= 100 ? 'bg-green-500' : 'bg-blue-500'}
//             />
//             <p className="text-sm text-gray-500 mt-2">
//               {Math.min(weeklyProgress, 100).toFixed(1)}% completed
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };












// import React, { useState } from 'react';
// import { Clock, BookOpen, Target, Brain, Flame, Volume2, CheckSquare, Mic, FileText, Zap, Award } from 'lucide-react';
// import { StatCard } from './Overviwe/StatCard';
// import { PracticeAreaCard } from './Overviwe/PracticeAreaCard';
// import { AchievementsCard } from './Overviwe/AchievementsCard';
// import { ProgressBar } from './Overviwe/ProgressBar';
 
// export const Overview: React.FC = () => {
//   const [stats, setStats] = useState({
//     minutesStudied: 22,
//     totalMinutes: 30,
//     lessonsCompleted: 3,
//     totalLessons: 5,
//     accuracyRate: 88,
//     wordsLearned: 15,
//     totalWords: 20,
//     streak: 7,
//     weeklyTime: 135,
//     weeklyGoal: 160,
//     weeklyLessons: 12,
//   });

//   const practiceAreas = [
//     { name: 'Reading', icon: FileText, iconColor: 'text-blue-600', completed: 12, total: 16 },
//     { name: 'Listening', icon: Volume2, iconColor: 'text-orange-600', completed: 12, total: 15 },
//     { name: 'Writing', icon: CheckSquare, iconColor: 'text-green-600', completed: 12, total: 16 },
//     { name: 'Speaking', icon: Mic, iconColor: 'text-purple-600', completed: 12, total: 15 },
//   ];

//   const recentAchievements = [
//     { name: '7 Day Streak', icon: Flame, time: '2 days ago', iconColor: 'text-orange-500', bgColor: 'bg-orange-50' },
//     { name: 'Fast Learner', icon: Zap, time: '3 days ago', iconColor: 'text-yellow-500', bgColor: 'bg-yellow-50' },
//     { name: 'Grammar Master', icon: Award, time: '1 week ago', iconColor: 'text-indigo-500', bgColor: 'bg-indigo-50' },
//   ];

//   return (
//     <div className="p-8 max-w-6xl mx-auto font-sans bg-gray-50 min-h-screen space-y-8">
//       <header>
//         <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
//       </header>

//       <div className="grid grid-cols-12 gap-8">
//         <div className="col-span-8 space-y-8">
//           <div className="grid grid-cols-4 gap-6">
//             <StatCard title="Minutes Studied" icon={Clock} iconColor="text-blue-500" value={stats.minutesStudied} total={stats.totalMinutes} progressBarColor="bg-blue-500" />
//             <StatCard title="Lessons Completed" icon={BookOpen} iconColor="text-green-500" value={stats.lessonsCompleted} total={stats.totalLessons} progressBarColor="bg-green-500" />
//             <StatCard title="Accuracy Rate" icon={Target} iconColor="text-indigo-500" value={stats.accuracyRate} progressBarColor="bg-indigo-500" unit="%" />
//             <StatCard title="Words Learned" icon={Brain} iconColor="text-orange-500" value={stats.wordsLearned} total={stats.totalWords} progressBarColor="bg-orange-500" />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             {practiceAreas.map(area => <PracticeAreaCard key={area.name} {...area} />)}
//           </div>
//         </div>

//         <div className="col-span-4 space-y-6">
//           <AchievementsCard achievements={recentAchievements} />
//         <ProgressBar/>
//         </div>
//       </div>
//     </div>
//   );
// };









 