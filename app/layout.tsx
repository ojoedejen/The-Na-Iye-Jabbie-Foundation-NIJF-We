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
              // Comprehensive error suppression for v0 preview environment
              (function() {
                const shouldSuppress = (msg) => {
                  if (!msg) return false;
                  const str = typeof msg === 'string' ? msg : String(msg);
                  return str.includes("origins don't match") || 
                         str.includes('v0.app') && str.includes('vusercontent.net') ||
                         str.includes('SecurityError');
                };

                // Intercept console methods
                const originalError = console.error;
                const originalWarn = console.warn;
                const originalLog = console.log;
                
                console.error = function(...args) {
                  if (shouldSuppress(args[0])) return;
                  originalError.apply(console, args);
                };
                
                console.warn = function(...args) {
                  if (shouldSuppress(args[0])) return;
                  originalWarn.apply(console, args);
                };
                
                console.log = function(...args) {
                  if (shouldSuppress(args[0])) return;
                  originalLog.apply(console, args);
                };

                // Intercept window error events
                window.addEventListener('error', function(e) {
                  if (shouldSuppress(e.message)) {
                    e.preventDefault();
                    e.stopPropagation();
                    return true;
                  }
                }, true);

                // Intercept unhandled promise rejections
                window.addEventListener('unhandledrejection', function(e) {
                  if (shouldSuppress(e.reason)) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }, true);
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
