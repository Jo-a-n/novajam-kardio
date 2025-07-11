import classNames from 'classnames';
import { Roboto, Inter } from 'next/font/google';

const Roboto_Font = Roboto({
  subsets: ['latin', 'latin-ext', 'greek', 'greek-ext'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const Inter_Font = Inter({
  subsets: ['latin', 'latin-ext', 'greek', 'greek-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

export const generateFontClassnames = (
  fontMain: string | null,
  fontHeading: string | null,
) =>
  classNames({
    [Roboto_Font.className]: fontMain === 'Roboto',
    [Inter_Font.className]: fontHeading === 'Inter',
  });
