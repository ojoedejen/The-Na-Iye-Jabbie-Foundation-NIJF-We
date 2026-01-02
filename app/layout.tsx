import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Na-Iye Jabbie Foundation - Building Stronger Communities Together",
  description:
    "The Na-Iye Jabbie Foundation empowers communities in Sierra Leone through health awareness, children's programs, agriculture, and women's empowerment initiatives.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aggressive error suppression for v0 preview environment CORS errors
              (function() {
                const shouldSuppress = (msg) => {
                  if (!msg) return false;
                  const str = typeof msg === 'string' ? msg : (msg.message || String(msg));
                  return str.includes("origins don't match") || 
                         str.includes('SecurityError') ||
                         (str.includes('v0.app') && str.includes('vusercontent.net'));
                };

                // Patch postMessage to suppress cross-origin errors
                const originalPostMessage = window.postMessage;
                window.postMessage = function(...args) {
                  try {
                    return originalPostMessage.apply(this, args);
                  } catch (e) {
                    if (!shouldSuppress(e)) throw e;
                  }
                };

                // Intercept all console methods
                ['error', 'warn', 'log', 'info', 'debug'].forEach(method => {
                  const original = console[method];
                  console[method] = function(...args) {
                    if (args.some(arg => shouldSuppress(arg))) return;
                    original.apply(console, args);
                  };
                });

                // Capture errors at the earliest phase
                window.addEventListener('error', function(e) {
                  if (shouldSuppress(e.message || e.error)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    return false;
                  }
                }, true);

                // Capture promise rejections
                window.addEventListener('unhandledrejection', function(e) {
                  if (shouldSuppress(e.reason)) {
                    e.preventDefault();
                    e.stopImmediatePropagation();
                  }
                }, true);

                // Override onerror handler
                const originalOnError = window.onerror;
                window.onerror = function(message, source, lineno, colno, error) {
                  if (shouldSuppress(message || error)) return true;
                  return originalOnError ? originalOnError.apply(this, arguments) : false;
                };
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
