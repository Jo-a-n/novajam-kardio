import classNames from 'classnames';
import { AlignmentType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';

export const Body: React.FC<{
  content: string;
  alignment?: AlignmentType;
}> = ({ content, alignment }) => (
  <div
    className={classNames(
      'prose-lg lg:prose-xl 2xl:prose-xl text-neutral-700 dark:prose-invert dark:text-neutral-100/80',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
      },
    )}
  >
    <MarkdownRenderer>{content}</MarkdownRenderer>
  </div>
);
