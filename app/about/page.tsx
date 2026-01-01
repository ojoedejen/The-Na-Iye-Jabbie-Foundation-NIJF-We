import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const teamMembers = [
    { name: "Jett Russo", image: "/placeholder.svg?height=60&width=60" },
    { name: "Evan Bell", image: "/placeholder.svg?height=60&width=60" },
    { name: "Kenig Fischer", image: "/placeholder.svg?height=60&width=60" },
    { name: "Miguel", image: "/placeholder.svg?height=60&width=60" },
    { name: "Scott", image: "/placeholder.svg?height=60&width=60" },
    { name: "Sierra Joseph", image: "/placeholder.svg?height=60&width=60" },
    { name: "Evelyn Hunter", image: "/placeholder.svg?height=60&width=60" },
    { name: "Enao Di", image: "/placeholder.svg?height=60&width=60" },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
            We're making a difference to people's lives
          </h1>
          <p className="text-lg text-gray-600">Creating a way to impact people in work, with people.</p>
          <p className="text-lg text-gray-600">We need extra data.</p>
        </div>

        <div className="text-center mb-8">
          <button className="text-sm underline">Contact us</button>
        </div>

        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden">
          <Image
            src="/diverse-workers-volunteers-in-colorful-uniforms.jpg"
            alt="Diverse team of workers"
            width={1200}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our mission</h2>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Wokka, we're tackling the future of work head through dynamic mechanisms and use the work for better or
              worse, from mundane task to ground breaking projects. We are committed to up of relieved can be has faced,
              building are easier with partners and one workforce labour solution for all.
            </p>
            <p>
              We see a team of Spent first, hard-working individuals. First of anything normally should create solid
              jobs and, income source. Economic growth, families can be create opportunities world
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#c8ff5c] border-2 border-black rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-8">Who we are & how we arrived here?</h2>
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              <span className="font-semibold">
                Started in 2015 by Shawn Lemon, The Digital Organiser partners with forward-thinking businesses to
                create streamlined, effective, and easy-to-use digital organisation systems.
              </span>{" "}
              It is our belief that everyone should have access to the help they need to supercharge their productivity
              so that they can get more of the right things done.
            </p>
            <p>
              Shawn spent the early part of his career working as a Creative at Apple where he focused on training
              people how to use their products—whether it was a new iPhone, a Mac, or anything else in between.
              Throughout his nearly 7 years there, he began to see a pattern with his customers: day after day, in
              thousands of training sessions, people came with the same goals—to start fresh with a clean inbox to
              better manage their information and start creative projects. However, once people transferred their
              information onto their new Macs, their digital workspaces were a giant mess.
            </p>
            <p>
              Seeing a need in the market motivated Shawn to begin moonlighting to help people get their Macs organized.
              In sync, word spread quickly and Shawn needed to quit his job with Apple in order to keep up with the
              demand. And The Digital Organiser was born.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#ff5722] border-2 border-black rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">We're here, there, everywhere</h2>
          <p className="mb-8">We're a team who passionate about making work better for everyone.</p>

          <div className="flex flex-wrap gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-white/40 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">{member.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Got any questions? We have answers.</h2>
          <p className="text-gray-600">Play workers seconds, with conference links worked, organization.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-black rounded-2xl px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                Eligibility Criteria for Organizations
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">
                All registered organizations, institutions to Legal both shared organization post and education
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Become a Member Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Become wokka member like you want</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Donor Card */}
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="inline-block bg-[#ffe5d9] text-[#ff5722] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Donor
            </div>
            <h3 className="text-2xl font-bold mb-4">People wanting work to be helpful during your busy week</h3>
            <p className="text-gray-600 mb-6">
              Are you looking for someone to assist with household maintenance, errands...
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Access expert certified drivers, grooms, and producers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Access expert certified drivers, grooms, and producers.</span>
              </li>
            </ul>
            <Button className="w-full bg-[#ff5722] hover:bg-[#f4511e] text-white rounded-full h-12">
              Join as Donor
            </Button>
            <div className="mt-6">
              <Image
                src="/worker-with-safety-equipment.jpg"
                alt="Worker"
                width={400}
                height={200}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Service Provider Card */}
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="inline-block bg-[#ffe5d9] text-[#ff5722] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Service Provider
            </div>
            <h3 className="text-2xl font-bold mb-4">Aspiring offering courses to become part of your pace</h3>
            <p className="text-gray-600 mb-6">Becoming part of our Wokka Serve means you will have opportunities...</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Access expert certified drivers, grooms, and producers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Access expert certified drivers, grooms, and producers.</span>
              </li>
            </ul>
            <Button className="w-full bg-[#ff5722] hover:bg-[#f4511e] text-white rounded-full h-12">
              Join as Service Provider
            </Button>
            <div className="mt-6">
              <Image
                src="/service-worker-helping-customer.jpg"
                alt="Service Provider"
                width={400}
                height={200}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
