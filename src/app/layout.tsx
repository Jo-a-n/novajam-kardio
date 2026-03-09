import '@/app/styles/globals.css';
import Script from 'next/script';
import { AccessibilityButton } from '@/components/elements/AccessibilityButton/AccessibilityButton';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="group scroll-smooth">
      <body className="bg-[#EBEDF4] dark:bg-neutral-900 dark:text-neutral-100">
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0GGQJPH7FV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0GGQJPH7FV');
          `}
        </Script>
        {children}
        <AccessibilityButton />
      </body>
    </html>
  );
}
