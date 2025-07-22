import { useEffect, useState } from 'react';
import { GoSun, GoMoon } from 'react-icons/go';

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle Dark Mode"
      className="w-9 h-9 p-0.5 flex justify-center items-center rounded-full hover:bg-neutral-100/80 dark:hover:bg-red-950/25 dark:text-neutral-100"
    >
      {isDarkMode ? <GoMoon /> : <GoSun />}
    </button>
  );
}
