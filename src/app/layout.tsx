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
        <Script id="history-origin-guard" strategy="beforeInteractive">
          {`
          (function () {
            if (typeof window === 'undefined' || !window.history) return;

            function withSameOriginGuard(originalMethod) {
              return function (state, title, url) {
                if (typeof url === 'string' && url.length > 0) {
                  try {
                    var nextUrl = new URL(url, window.location.href);
                    if (nextUrl.origin !== window.location.origin) return;
                  } catch (_error) {
                    return;
                  }
                }
                return originalMethod.apply(window.history, arguments);
              };
            }

            window.history.replaceState = withSameOriginGuard(window.history.replaceState);
            window.history.pushState = withSameOriginGuard(window.history.pushState);
          })();
          `}
        </Script>
        {children}
        <AccessibilityButton />
      </body>
    </html>
  );
}
