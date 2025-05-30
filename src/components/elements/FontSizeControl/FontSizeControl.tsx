import { useEffect, useState } from 'react';
import { GoArrowUp, GoArrowDown } from 'react-icons/go';

export function FontSizeControl() {
  const [fontSize, setFontSize] = useState(16);

  // On mount, read from localStorage and set the root font size
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('fontSize');
      const initial = stored ? parseInt(stored, 10) : 16;
      setFontSize(initial);
      document.documentElement.style.fontSize = `${initial}px`;
    }
  }, []);

  function increaseFontSize() {
    setFontSize((prev) => {
      const next = prev < 22 ? prev + 2 : prev;
      if (typeof window !== 'undefined') {
        document.documentElement.style.fontSize = `${next}px`;
        localStorage.setItem('fontSize', next.toString());
      }
      return next;
    });
  }

  function decreaseFontSize() {
    setFontSize((prev) => {
      const next = prev > 14 ? prev - 2 : prev;
      if (typeof window !== 'undefined') {
        document.documentElement.style.fontSize = `${next}px`;
        localStorage.setItem('fontSize', next.toString());
      }
      return next;
    });
  }

  return (
    <>
      <span className="text-xs">{fontSize}px</span>
      <button
        onClick={increaseFontSize}
        aria-label="Increase Font Size"
        className="w-8 h-10 py-0.5 flex justify-center items-center rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-100/20 dark:text-slate-100"
      >
        <GoArrowUp />
      </button>
      <button
        onClick={decreaseFontSize}
        aria-label="Decrease Font Size"
        className="w-8 h-10 py-0.5 flex justify-center items-center rounded-full hover:bg-slate-100/80 dark:hover:bg-slate-100/20 dark:text-slate-100"
      >
        <GoArrowDown />
      </button>
    </>
  );
}
