"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4">
      <div className="bg-gray-100 rounded-3xl border-4 border-black shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 p-1.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/campaigns" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Rescue missions
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                About us
              </Link>
              <Link href="/events" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Events
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                Contacts
              </Link>
            </div>

            <div className="hidden md:block">
              <Button asChild className="bg-gray-900 text-white hover:bg-black px-6 rounded-lg">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-300 space-y-4">
              <Link href="/" className="block text-gray-900 hover:text-gray-600 py-2 font-medium">
                Home
              </Link>
              <Link href="/campaigns" className="block text-gray-900 hover:text-gray-600 py-2 font-medium">
                Rescue missions
              </Link>
              <Link href="/about" className="block text-gray-900 hover:text-gray-600 py-2 font-medium">
                About us
              </Link>
              <Link href="/events" className="block text-gray-900 hover:text-gray-600 py-2 font-medium">
                Events
              </Link>
              <Link href="/contact" className="block text-gray-900 hover:text-gray-600 py-2 font-medium">
                Contacts
              </Link>
              <Button asChild className="bg-gray-900 text-white hover:bg-black w-full rounded-lg">
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
