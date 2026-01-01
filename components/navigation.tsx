"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/campaigns" className="text-gray-900 hover:text-gray-600 transition-colors">
              Campaigns
            </Link>
            <Link href="/impact" className="text-gray-900 hover:text-gray-600 transition-colors">
              Impact
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-black text-white hover:bg-gray-900 px-6">
              <Link href="/donate">DONATE NOW</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t mt-4 py-4 px-4 space-y-4">
            <Link href="/" className="block text-gray-900 hover:text-gray-600 py-2">
              Home
            </Link>
            <Link href="/campaigns" className="block text-gray-900 hover:text-gray-600 py-2">
              Campaigns
            </Link>
            <Link href="/impact" className="block text-gray-900 hover:text-gray-600 py-2">
              Impact
            </Link>
            <Link href="/contact" className="block text-gray-900 hover:text-gray-600 py-2">
              Contact
            </Link>
            <Button asChild className="bg-black text-white hover:bg-gray-900 w-full">
              <Link href="/donate">DONATE NOW</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
