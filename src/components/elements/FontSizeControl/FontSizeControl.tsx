import { useEffect, useState } from 'react';
import { MdTextIncrease, MdTextDecrease } from 'react-icons/md';

export function FontSizeControl() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      const next = prev < 20 ? prev + 2 : prev;
      if (typeof window !== 'undefined') {
        document.documentElement.style.fontSize = `${next}px`;
        localStorage.setItem('fontSize', next.toString());
      }
      return next;
    });
  }

  function decreaseFontSize() {
    setFontSize((prev) => {
      const next = prev > 16 ? prev - 2 : prev;
      if (typeof window !== 'undefined') {
        document.documentElement.style.fontSize = `${next}px`;
        localStorage.setItem('fontSize', next.toString());
      }
      return next;
    });
  }

  return (
    <>
      {/* <span className="text-xs">{fontSize}px</span> */}
      <button
        onClick={increaseFontSize}
        aria-label="Increase Font Size"
        className="w-10 h-10 py-0.5 text-xl flex justify-center items-center rounded-full hover:bg-neutral-100/80 dark:hover:bg-red-950/25 dark:text-neutral-100"
      >
        <MdTextIncrease />
      </button>
      <button
        onClick={decreaseFontSize}
        aria-label="Decrease Font Size"
        className="w-10 h-10 py-0.5 text-xl flex justify-center items-center rounded-full hover:bg-neutral-100/80 dark:hover:bg-red-950/25 dark:text-neutral-100"
      >
        <MdTextDecrease />
      </button>
    </>
  );
}
