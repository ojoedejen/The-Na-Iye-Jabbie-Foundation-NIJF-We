import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12">Have questions? We're here to help. Reach out to our team.</p>

          <Card className="p-8 border-2 border-black rounded-3xl bg-white mb-12">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-4 border-2 border-gray-300 rounded-2xl text-lg focus:border-black focus:outline-none resize-none"
              />
              <Button className="w-full bg-black text-white hover:bg-gray-900 py-6 text-lg rounded-2xl">
                Send Message
              </Button>
            </div>
          </Card>

          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Head Quarter Office</h2>
            <address className="not-italic text-gray-600 space-y-2">
              <p>34 Marina View,</p>
              <p>Downtown Core Planning Area,</p>
              <p>Singapore 018963</p>
            </address>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
