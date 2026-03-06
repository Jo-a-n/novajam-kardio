'use client';

import { useState } from 'react';

export function HighContrastToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-md">Υψηλή Αντίθεση</span>
      <button
        role="switch"
        aria-checked={enabled}
        aria-label="Υψηλή Αντίθεση"
        onClick={() => {
          const next = !enabled;
          setEnabled(next);
          document.documentElement.classList.toggle('high-contrast', next);
        }}
        className={`
          relative inline-flex h-5 w-9 shrink-0 cursor-pointer
          rounded-full border-2 border-transparent
          transition-colors duration-200 ease-in-out
          ${enabled ? 'bg-green-500' : 'bg-white/30'}
        `}
      >
        <span
          aria-hidden="true"
          className={`
            pointer-events-none inline-block h-4 w-4
            rounded-full bg-white shadow-sm
            transition-transform duration-200 ease-in-out
            ${enabled ? 'translate-x-4' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
}
