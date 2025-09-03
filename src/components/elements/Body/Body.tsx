import classNames from 'classnames';
import { AlignmentType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';

export const Body: React.FC<{
  content: string;
  alignment?: AlignmentType;
  bodyWhiteOnMobile?: boolean;
}> = ({ content, alignment, bodyWhiteOnMobile }) => (
  <div
    className={classNames(
      'prose-lg lg:text-[1.1875rem] dark:prose-invert dark:text-neutral-50/90',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
        'text-white drop-shadow sm:text-neutral-600 sm:drop-shadow-none':
          bodyWhiteOnMobile,
      },
    )}
  >
    <MarkdownRenderer>{content}</MarkdownRenderer>
  </div>
);
