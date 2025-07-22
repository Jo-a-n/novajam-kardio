import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/styles/globals.css';
import { PostHogProvider } from '@/components/PostHogProvider';
import Script from 'next/script';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
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
      </head>
      <body className="bg-[#EBEDF4] dark:bg-neutral-900 dark:text-neutral-100">
        <PostHogProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
