import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  // 1. Check local storage first. If nothing is there, DEFAULT TO 'dark'.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  // 2. Apply the theme to the document whenever it changes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save the user's choice so it remembers it if they refresh
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-swaash-cyan dark:hover:text-swaash-cyan transition-colors overflow-hidden flex items-center justify-center w-10 h-10"
      aria-label="Toggle Theme"
    >
      {/* Moon Icon (Visible in Dark Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          opacity: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : 90
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon size={18} />
      </motion.div>

      {/* Sun Icon (Visible in Light Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          opacity: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : -90
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </button>
  );
};

export default ThemeToggle;