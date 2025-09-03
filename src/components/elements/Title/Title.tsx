import classNames from 'classnames';
import { AlignmentType, TitleFontSizeType } from '@/helpers/types';
import { MarkdownRenderer } from '@/components/elements/MarkdownRenderer/MarkdownRenderer';

export const Title: React.FC<{
  content: string;
  titleFontSize: TitleFontSizeType;
  alignment?: AlignmentType;
  textWhiteOnMobile?: boolean;
}> = ({ content, titleFontSize, alignment, textWhiteOnMobile }) => (
  <div
    className={classNames(
      'font-heading leading-tight sm:leading-snug dark:text-neutral-50 drop-shadow-2xl sm:drop-shadow-none',
      {
        'text-center': alignment === 'center',
        'text-end': alignment === 'end',
        'text-sm-heading': titleFontSize === 'sm',
        'text-base-heading': titleFontSize === 'base',
        'text-lg-heading': titleFontSize === 'lg',
        'text-xl-heading': titleFontSize === 'xl',
        'text-2xl-heading': titleFontSize === '2xl',
        'text-white/90 drop-shadow-sm sm:text-inherit sm:drop-shadow-none':
          textWhiteOnMobile,
      },
    )}
  >
    <MarkdownRenderer>{content}</MarkdownRenderer>
  </div>
);
