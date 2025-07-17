"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-xl bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm border border-dark-200/20 dark:border-dark-600/30 hover:bg-white/20 dark:hover:bg-dark-700/50 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-orange-500 transition-all duration-500 ${
            theme === "light" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 rotate-90 scale-75"
          }`}
        />
        
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-500 ${
            theme === "dark" 
              ? "opacity-100 rotate-0 scale-100" 
              : "opacity-0 -rotate-90 scale-75"
          }`}
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
        theme === "light" 
          ? "shadow-orange-500/20 group-hover:shadow-orange-500/40" 
          : "shadow-blue-400/20 group-hover:shadow-blue-400/40"
      } shadow-lg group-hover:shadow-xl`} />
    </button>
  );
}
