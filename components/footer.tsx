import Link from "next/link"
import { Instagram } from "lucide-react"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Footer() {
  return (
    <footer className="text-primary-foreground bg-[rgba(0,32,0,1)]">
      {/* Main Footer Content */}
      <div className="container mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Sitemap */}
          <ScrollReveal delay={0}>
            <div>
              <h3 className="text-sm mb-6 text-primary-foreground/60 font-bold tracking-wider">SITEMAP</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/campaigns" className="hover:text-accent transition-colors">
                    Campaign
                  </Link>
                </li>
                <li>
                  <Link href="/impact" className="hover:text-accent transition-colors">
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Headquarters */}
          <ScrollReveal delay={100}>
            <div className="text-center">
              <h3 className="text-sm mb-6 text-primary-foreground/60 font-bold tracking-wider">HEADQUARTER OFFICE</h3>
              <address className="not-italic space-y-2 text-primary-foreground/80">
                <p>Kroo Bay Community,</p>
                <p>Freetown,</p>
                <p>Sierra Leone</p>
              </address>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="hover:text-accent transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-accent transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Achievement */}
          <ScrollReveal delay={200}>
            <div className="md:text-right">
              <h3 className="text-sm mb-6 text-primary-foreground/60 font-bold tracking-wider">ACHIEVEMENT</h3>
              <div className="inline-flex items-center gap-3 border border-white/30 rounded-full px-6 py-3 bg-white/5 backdrop-blur-sm">
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  <div className="w-1 h-6 bg-accent/50 rounded-full" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-accent">Website Of</div>
                  <div className="text-sm font-semibold">The Day</div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-6 bg-accent rounded-full" />
                  <div className="w-1 h-6 bg-accent/50 rounded-full" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/60">Copyright The Na-Iye Jabbie Foundation Inc.</p>
          <div className="flex gap-8 text-sm text-primary-foreground/60">
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
      <div className="py-12 px-4 shadow-inner bg-black/20">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-6 font-black">
            <h2 className="text-2xl md:text-4xl tracking-wide text-center text-background font-sans lg:text-8xl font-black leading-[]">
              THE NA-IYE JABBIE FOUNDATION
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Hashtag Bar */}
      <div className="bg-accent text-accent-foreground py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-xl font-bold tracking-widest">
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
