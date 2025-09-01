'use client';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { QAType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';
import { FaChevronRight } from 'react-icons/fa';
import { useSearchParams } from 'next/navigation';

export const QnA: React.FC<{ data: QAType }> = ({ data }) => {
  const { id, heading, body, isCollapsed } = data;
  const [collapsed, setCollapsed] = useState(isCollapsed);
  const [height, setHeight] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);

  useHashChange(() => {
    const cleanId = window.location.hash.substring(1);
    const isIdentical = cleanId === id;
    if (isIdentical) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  });

  // Set the height dynamically when collapsed
  useEffect(() => {
    if (bodyRef.current) {
      setHeight(collapsed ? 0 : bodyRef.current.scrollHeight);
    }
  }, [collapsed]);

  // Handle initial scroll on mount if there's a matching hash
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash === id) {
      // Wait for DOM to be ready and element to be mounted
      const checkAndScroll = () => {
        const element = document.getElementById(id);
        if (element && element.offsetParent !== null) {
          // Element is visible, safe to scroll
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Element not ready yet, try again
          setTimeout(checkAndScroll, 50);
        }
      };

      // Start checking after a brief delay
      setTimeout(checkAndScroll, 100);
    }
  }, [id]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="w-full max-w-3xl rounded-theme bg-white dark:bg-neutral-900">
      <button
        id={id}
        className="p-4 lg:p-6 w-full flex rounded-lg justify-between items-baseline gap-10 accent-red-500/30 scroll-mt-24"
        onClick={toggleCollapsed}
      >
        <span className="text-lg xl:text-xl text-start font-heading font-semibold text-neutral-800 dark:text-neutral-100 max-w-none">
          {heading}
        </span>
        <FaChevronRight
          size={15}
          className={classNames(
            'shrink-0 transition-transform duration-500 text-neutral-800 dark:text-neutral-100',
            {
              'rotate-90': collapsed,
            },
          )}
        />
      </button>
      <div
        ref={bodyRef}
        style={{
          height: `${height}px`,
          overflow: 'hidden',
        }}
        className={classNames('transition-all duration-500 ease')}
      >
        <MarkdownRenderer className="max-w-none prose px-4 lg:px-6 pb-4 lg:pb-6 2xl:prose-lg text-neutral-600 dark:text-neutral-300">
          {body}
        </MarkdownRenderer>
      </div>
    </div>
  );
};

function useHashChange(
  callback: (hash: string, prevHash: string | null) => void,
) {
  useSearchParams(); // needed to trigger re-render on hash change
  const previousHashRef = useRef<string | null>(null);

  useEffect(() => {
    const handler = () => {
      const currentHash = window.location.hash;
      if (currentHash !== previousHashRef.current) {
        callback(currentHash, previousHashRef.current);
        previousHashRef.current = currentHash;
      }
    };

    window.addEventListener('hashchange', handler);

    // Trigger immediately if there's a hash
    if (
      window.location.hash &&
      window.location.hash !== previousHashRef.current
    ) {
      callback(window.location.hash, previousHashRef.current);
      previousHashRef.current = window.location.hash;
    }

    return () => {
      window.removeEventListener('hashchange', handler);
    };
  }, [callback]);
}
