'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { Roboto_Font } from '@/helpers/fonts';

export const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div className="fixed z-[100000] bottom-6 right-10">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Εργαλεία προσβασιμότητας"
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        className="w-11 h-11 rounded-full overflow-hidden shadow-md"
      >
        <Image
          src="/icons/wcag.svg"
          alt=""
          width={44}
          height={44}
          aria-hidden="true"
          className="w-full h-full"
        />
      </button>

      {isOpen && (
        <div
          id="a11y-panel"
          ref={panelRef}
          role="region"
          aria-label="Εργαλεία προσβασιμότητας"
          className={classNames(
            'absolute bottom-0 right-14 w-[250px] p-5 rounded-xl shadow-xl',
            'bg-blue-900 text-white',
            Roboto_Font.className,
            'gap-3.5 flex flex-col',
          )}
        >
          <p className="text-md">
            WCAG 2.1, Level AA ✓ <br /> EN 301 549 v3.2.1 ✓
          </p>
          <div>
            <p className="text-md font-bold">Μεγεθος κειμενου </p>
          </div>
        </div>
      )}
    </div>
  );
};
