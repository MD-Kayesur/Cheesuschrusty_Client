// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import NotFound from "../pages/NotFound";
// import Home from "../pages/Home";
// import Login from "@/pages/Login";
// import Signup from "@/pages/Signup";
// import AdminLayout from "@/Layout/AdminLayout";
// import AdminDashboard from "@/components/AdminDashbord/Admin/AdminDashboard";
// import UserLayout from "@/Layout/UserLayout";
// import { Overview } from "@/components/UserDashbord/Overviwe/Overview";
// import ReadingPractice from "@/components/UserDashbord/ItalianPractice/ReadingPractice";
// import ItalianPractice from "@/components/UserDashbord/ItalianPractice/ItalianPractice";
// import { Analytics } from "@/components/UserDashbord/Analytics";
// import { Flashcards } from "@/components/UserDashbord/Flashcards";
// import { Leaderboard } from "@/components/UserDashbord/Leaderboard";
// import { StudyPlanner } from "@/components/UserDashbord/StudyPlanner";
// import { Settings } from "@/components/UserDashbord/Settings";



// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: "login", element: <Login /> },
//       { path: "signup", element: <Signup /> },

//       // USER ROUTES
//       {
//         path: "user",
//         element: <UserLayout />,
//         children: [
//           { index: true, element: <Overview /> },
//           { path: "practice", element: <ItalianPractice /> },
//           { path: "italian_practice", element: <ReadingPractice /> },
//           { path: "analytics", element: <Analytics /> },
//           { path: "flashcards", element: <Flashcards/> },
//           { path: "leaderboard", element: <Leaderboard/> },
//           { path: "planner", element: <StudyPlanner /> },
//           { path: "settings", element: <Settings /> },
//         ],
//       },

//       // ADMIN ROUTES
//       {
//         path: "admin",
//         element: <AdminLayout />,
//         children: [{ index: true, element: <AdminDashboard /> }],
//       },
//     ],
//   },
//   { path: "*", element: <NotFound /> },
// ]);

// export default routes;















import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import UserLayout from "@/Layout/UserLayout/UserLayout";
import { UserOverview } from "@/components/UserDashbord/Overviwe/UserOverview";
import { UserAnalytics } from "@/components/UserDashbord/UserAnalytics";
import { UserFlashcards } from "@/components/UserDashbord/UserFlashcards";
import { UserLeaderboard } from "@/components/UserDashbord/UserLeaderboard";
import { UserStudyPlanner } from "@/components/UserDashbord/UserStudyPlanner";
import { Settings } from "lucide-react";
import UserItalianPractice from "@/components/UserDashbord/ItalianPractice/UserItalianPractice";
import UserReadingPractice from "@/components/UserDashbord/ItalianPractice/ReadingMood/UserReadingPractice";
import AdminLayout from "@/Layout/AdminLayout/AdminLayout";
 import AdminUserManagement from "@/components/AdminDashbord/Admin/AdminUserManagement";
import AdminContentManagement from "@/components/AdminDashbord/Admin/AdminContentManagement";
import AdminSubscription from "@/components/AdminDashbord/Admin/AdminSubscription";
 import AdminAnalytics from "@/components/AdminDashbord/Admin/AdminAnalytics";
import AdminOverview from "@/components/AdminDashbord/Overview/AdminOverview";
import AdminSupport from "@/components/AdminDashbord/Admin/AdminSupport";
import AdminSettings from "@/components/AdminDashbord/Admin/AdminSettings";
import ListeningPractice from "@/components/UserDashbord/ItalianPractice/ListeningMood/ListeningPractice";
import ListeningModule from "@/components/UserDashbord/ItalianPractice/ListeningMood/ListeningModule";
import WritingPractice from "@/components/UserDashbord/ItalianPractice/WritingMood/WritingPractice";
import ExercisesContainer from "@/components/UserDashbord/ItalianPractice/WritingMood/ExercisesContainer";
  
 



const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },


      // ✅ USER ROUTES
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { index: true, element: <UserOverview /> },
          {
            path: "analytics",
            element: <UserAnalytics />
          },
          {
            path: "flashcards",
            element: <UserFlashcards />
          },
          {
            path: "leaderboard",
            element: <UserLeaderboard />
          },
          {
            path: "planner",
            element: <UserStudyPlanner />
          },
          {
            path: "settings",
            element: <Settings />
          },
          {
            path: "practice",
            element: <UserItalianPractice />,
            children: [
              { path: "reading", element: <UserReadingPractice /> }, // ✅ nested route
               { path: "listening", element: <ListeningPractice /> }, // ✅ nested route
              { path: "Writing", element: <ExercisesContainer /> }, // ✅ nested route
            ],
          },
        ],
      },

      // ✅ ADMIN ROUTES
      {
        path: "admin",
        element: (
          // <ProtectedRoute role="admin">
          <AdminLayout />
          // </ProtectedRoute>
        ),
       children: [
    { index: true, element: <AdminOverview /> },
    { path: "users", element: <AdminUserManagement /> },
    { path: "content", element: <AdminContentManagement /> },
    { path: "subscription", element: <AdminSubscription /> },
    { path: "analytics", element: <AdminAnalytics /> },
    { path: "support", element: <AdminSupport /> },
    { path: "settings", element: <AdminSettings /> },
  ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;

















