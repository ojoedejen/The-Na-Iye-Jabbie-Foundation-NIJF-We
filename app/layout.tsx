import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FUNDFLOW - Your Kindness Can Change Someone's Life",
  description:
    "A transparent donation platform connecting donors with verified disaster relief campaigns. Make every contribution meaningful.",
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
              // Suppress v0 preview environment CORS errors
              (function() {
                const originalError = console.error;
                const originalWarn = console.warn;
                
                console.error = function(...args) {
                  const msg = args[0] && typeof args[0] === 'string' ? args[0] : '';
                  if (msg.includes("origins don't match") || msg.includes('v0.app') || msg.includes('vusercontent.net')) {
                    return;
                  }
                  originalError.apply(console, args);
                };
                
                console.warn = function(...args) {
                  const msg = args[0] && typeof args[0] === 'string' ? args[0] : '';
                  if (msg.includes("origins don't match") || msg.includes('v0.app') || msg.includes('vusercontent.net')) {
                    return;
                  }
                  originalWarn.apply(console, args);
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
