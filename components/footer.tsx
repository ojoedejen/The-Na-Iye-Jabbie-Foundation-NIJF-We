import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Sitemap */}
          <div>
            <h3 className="text-sm mb-6 text-gray-400 font-bold">SITEMAP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gray-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/campaigns" className="hover:text-gray-400 transition-colors">
                  Campaign
                </Link>
              </li>
              <li>
                <Link href="/impact" className="hover:text-gray-400 transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="text-center">
            <h3 className="text-sm mb-6 text-gray-400 font-bold">HEAD QUARTER OFFICE</h3>
            <address className="not-italic space-y-2 text-gray-300">
              <p>34 Marina View,</p>
              <p>Downtown Core Planning Area,</p>
              <p>Singapore 018963</p>
            </address>
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Achievement */}
          <div className="text-right">
            <h3 className="text-sm mb-6 text-gray-400 font-bold">ACHIEVEMENT</h3>
            <div className="inline-flex items-center gap-3 border-2 border-white rounded-full px-6 py-3">
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-white rounded-full" />
                <div className="w-1 h-6 bg-white rounded-full" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold">Website Of</div>
                <div className="text-sm font-semibold">The Day</div>
              </div>
              <div className="flex gap-1">
                <div className="w-1 h-6 bg-white rounded-full" />
                <div className="w-1 h-6 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">Copyright FUNDFLOW Inc.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Services
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Large Logo */}
      <div className="py-12 px-4">
        <div className="flex items-center justify-center gap-6">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <div className="grid grid-cols-2 gap-1 p-2">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
          <h2 className="text-6xl tracking-wider md:text-9xl font-black">FUNDFLOW</h2>
        </div>
      </div>

      {/* Hashtag Bar */}
      <div className="bg-[#c8ff5c] text-black py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-xl font-bold">
          <span>#CHARITY</span>
          <span>#CROWDFUNDING</span>
          <span>#DISASTER</span>
          <span>#DONATION</span>
          <span>#WARGABANTUWARGA</span>
          <span>#HUMANITARIAN</span>
          <span>#CHARITY</span>
          <span>#CROWDFUNDING</span>
          <span>#DISASTER</span>
          <span>#DONATION</span>
        </div>
      </div>
    </footer>
  )
}
