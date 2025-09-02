import classNames from 'classnames';
import { AlignmentType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';

export const Body: React.FC<{
  content: string;
  alignment?: AlignmentType;
}> = ({ content, alignment }) => (
  <div
    className={classNames(
      'prose-lg lg:text-[1.1875rem] drop-shadow-xl text-neutral-600 dark:prose-invert dark:text-neutral-50/90',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
      },
    )}
  >
    <MarkdownRenderer>{content}</MarkdownRenderer>
  </div>
);
