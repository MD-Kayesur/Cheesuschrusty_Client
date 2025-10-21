import { useState, useEffect } from "react";
import { Classic } from "@theme-toggles/react";
import "@theme-toggles/react/css/classic.css";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load initial theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Apply & store theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Classic
      toggled={isDark}
      toggle={setIsDark}
      title="Toggle dark mode"
      className="text-gray-800 dark:text-yellow-300 text-3xl cursor-pointer"
    />
  );
}
