import classNames from 'classnames';
import {
  Roboto,
  Poppins,
  Montserrat,
  Inter,
  Playfair_Display,
} from 'next/font/google';

const Roboto_Font = Roboto({
  subsets: ['latin', 'latin-ext', 'greek', 'greek-ext'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

const Inter_Font = Inter({
  subsets: ['latin', 'latin-ext', 'greek', 'greek-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

const Poppins_Font = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-heading',
});

const Montserrat_Font = Montserrat({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

const Playfair_Display_Font = Playfair_Display({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

export const generateFontClassnames = (
  fontMain: string | null,
  fontHeading: string | null,
) =>
  classNames({
    [Roboto_Font.className]: fontMain === 'Roboto',
    [Inter_Font.className]: fontMain === 'Inter',
    [Montserrat_Font.className]: fontMain === 'Montserrat',
    [Montserrat_Font.variable]: fontHeading === 'Montserrat',
    [Poppins_Font.className]: fontMain === 'Poppins',
    [Poppins_Font.variable]: fontHeading === 'Poppins',
    [Playfair_Display_Font.variable]: fontHeading === 'Playfair Display',
  });
