import ThemeButton from "@/hooks/ThemeButton";
import ThemeToggle from "@/hooks/ThemeToggle";

 
const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="mb-2">Free User</p>
      <p className="mb-2">User</p>
      <p className="mb-2">Admin</p>

      <ThemeButton/>

 <div className="min-h-screen flex flex-col items-center justify-center transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <header className="flex flex-col items-center gap-4">
        <ThemeToggle />
        <h1 className="text-4xl font-bold">Theme Toggle Demo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Click the toggle above to switch between Light and Dark mode.
        </p>
      </header>
    </div>

    </div>
  );
};

export default Home;
