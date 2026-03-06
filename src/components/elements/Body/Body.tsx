import classNames from 'classnames';
import { AlignmentType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';

export const Body: React.FC<{
  content: string;
  alignment?: AlignmentType;
  textWhiteOnMobile?: boolean;
}> = ({ content, alignment, textWhiteOnMobile }) => (
  <div
    className={classNames(
      'prose-lg lg:text-[1.1875rem] dark:prose-invert dark:text-neutral-50/90',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
        'text-white drop-shadow-sm sm:text-neutral-600 sm:drop-shadow-none group-[.high-contrast]:bg-neutral-800 group-[.high-contrast]:!text-[#EBEDF4] group-[.high-contrast]:px-2 group-[.high-contrast]:py-1':
          textWhiteOnMobile,
      },
    )}
  >
    <MarkdownRenderer>{content}</MarkdownRenderer>
  </div>
);
