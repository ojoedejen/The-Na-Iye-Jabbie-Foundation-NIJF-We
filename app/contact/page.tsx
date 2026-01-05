"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ firstName: "", lastName: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">Have questions? We're here to help. Reach out to our team.</p>

          <Card className="p-8 border-2 border-black rounded-3xl bg-white mb-12 shadow-xl">
            {isSubmitted ? (
              <div className="bg-green-100 border-2 border-green-500 text-green-700 p-8 rounded-2xl text-center animate-in zoom-in-95 duration-300">
                <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                <p className="text-lg">Thank you for reaching out. Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none transition-colors"
                />
                <textarea
                  required
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none resize-none transition-colors"
                />
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-900 py-8 text-xl rounded-2xl font-bold shadow-lg transform active:scale-[0.98] transition-all">
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Head Quarter Office</h2>
              <address className="not-italic text-gray-600 space-y-2 text-lg">
                <p>34 Marina View,</p>
                <p>Downtown Core Planning Area,</p>
                <p>Singapore 018963</p>
              </address>
            </div>

            <div className="bg-primary text-primary-foreground border-2 border-black rounded-3xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Direct Communication</h2>
              <div className="space-y-2 text-lg opacity-90">
                <p>Email: contact@nijf.org</p>
                <p>Phone: +232 XX XXX XXX</p>
                <p>Hours: Mon-Fri 9am - 5pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
