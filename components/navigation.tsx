"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-top-4 duration-700 fade-in">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-white/20 relative z-50 shadow-xs font-sans">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
                <img
                  src="/nijf-logo.png"
                  alt="NIJF Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-primary hover:text-primary/70 transition-colors font-bold">
                Home
              </Link>
              <Link href="/campaigns" className="text-primary hover:text-primary/70 transition-colors font-bold">
                Rescue missions
              </Link>
              <Link href="/about" className="text-primary hover:text-primary/70 transition-colors font-bold">
                About us
              </Link>
              <Link href="/events" className="text-primary hover:text-primary/70 transition-colors font-bold">
                Events
              </Link>
              <Link href="/contact" className="text-primary hover:text-primary/70 transition-colors font-bold">
                Contacts
              </Link>
            </div>

            <div className="hidden md:block">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-primary/10 space-y-4 animate-in slide-in-from-top-2 duration-200">
              <Link href="/" className="block text-primary hover:text-primary/70 py-2 font-medium">
                Home
              </Link>
              <Link href="/campaigns" className="block text-primary hover:text-primary/70 py-2 font-medium">
                Rescue missions
              </Link>
              <Link href="/about" className="block text-primary hover:text-primary/70 py-2 font-medium">
                About us
              </Link>
              <Link href="/events" className="block text-primary hover:text-primary/70 py-2 font-medium">
                Events
              </Link>
              <Link href="/contact" className="block text-primary hover:text-primary/70 py-2 font-medium">
                Contacts
              </Link>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-lg">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
