'use client';
import React, { JSX, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { RiFacebookFill } from 'react-icons/ri';
import {
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from 'react-icons/fa6';
import { FiLink } from 'react-icons/fi';
import { IoMdCheckmark } from 'react-icons/io';
import * as Toast from '@radix-ui/react-toast';

// Component for social media icon links
const SocialMediaLink: React.FC<{
  url: string;
  icon: JSX.Element;
}> = ({ url, icon }) => (
  <Link
    href={url}
    target="_blank"
    className={classNames(
      'group/sns w-10 h-10 rounded-full flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 ease-in-out dark:bg-opacity-10 dark:hover:bg-opacity-5',
    )}
  >
    {React.cloneElement(icon, {
      className: '',
    })}
  </Link>
);

// Component to copy the current link to clipboard
const CopyLinkToClipboard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy link:', err);
      }
    }
  };

  return (
    <Toast.Provider swipeDirection="up">
      <button
        onClick={handleCopyLink}
        className={classNames(
          'group/sns cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-neutral-100 hover:bg-neutral-200 transition-colors duration-300 ease-in-out dark:bg-opacity-10 dark:hover:bg-opacity-5',
        )}
      >
        <FiLink size={15} className="rotate-45" />
      </button>
      {copied && (
        <Toast.Root className="px-6 py-4 rounded-md bg-neutral-900/90 text-neutral-100">
          <Toast.Title className="font-semibold flex items-center">
            <IoMdCheckmark className="mr-2" /> Link copied to clipboard
          </Toast.Title>
        </Toast.Root>
      )}
      <Toast.Viewport className="fixed bottom-0 left-1/2 -translate-x-1/2 flex flex-col p-6 max-w-full z-50" />
    </Toast.Provider>
  );
};

// SNS Component
export const SNS: React.FC<{
  linkedInUrl?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  copyLinkToClipboard?: boolean;
}> = ({
  linkedInUrl,
  facebookUrl,
  twitterUrl,
  youtubeUrl,
  instagramUrl,
  copyLinkToClipboard,
}) => (
  <div className="flex gap-5 items-center py-3">
    {facebookUrl && (
      <SocialMediaLink url={facebookUrl} icon={<RiFacebookFill size={15} />} />
    )}
    {twitterUrl && (
      <SocialMediaLink url={twitterUrl} icon={<FaXTwitter size={15} />} />
    )}
    {linkedInUrl && (
      <SocialMediaLink url={linkedInUrl} icon={<FaLinkedinIn size={15} />} />
    )}
    {youtubeUrl && (
      <SocialMediaLink url={youtubeUrl} icon={<FaYoutube size={15} />} />
    )}
    {instagramUrl && (
      <SocialMediaLink url={instagramUrl} icon={<FaInstagram size={15} />} />
    )}
    {copyLinkToClipboard && <CopyLinkToClipboard />}
  </div>
);
