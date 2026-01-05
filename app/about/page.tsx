import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Heart, Users, Sprout, Baby } from "lucide-react"

export default function AboutPage() {
  const programs = [
    {
      icon: Heart,
      title: "Health Awareness & Mental Wellness",
      description:
        "NIJF conducts community health workshops addressing critical public health issues including drug abuse prevention and mental health awareness. Our kush sensitization and mental health awareness initiative targets vulnerable communities like Kroo Bay, combining education with practical support to combat substance abuse and promote psychological well-being.",
      color: "bg-rose-100",
    },
    {
      icon: Baby,
      title: "Children's Assurance Program",
      description:
        "Through our Children's Assurance Program, NIJF focuses on child protection, welfare, and development. We prioritize vulnerable children in Sierra Leone, ensuring access to support, education, and a safe environment to thrive and reach their potential.",
      color: "bg-blue-100",
    },
    {
      icon: Sprout,
      title: "NIJF Goes Green – Agriculture for Empowerment",
      description:
        "Our flagship 'NIJF Goes Green' agricultural initiative empowers communities through sustainable farming practices. We support women in agriculture, promote food security for underprivileged families, and create economic opportunities through agricultural training and resources. This program directly addresses hunger while building women's independence and community resilience.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Women's Empowerment Initiative",
      description:
        "NIJF champions gender equality through targeted programs that empower women economically, socially, and personally. From agricultural training to financial literacy and leadership development, we create pathways for women to lead, earn, and thrive in their communities.",
      color: "bg-purple-100",
    },
  ]

  const faqs = [
    {
      question: "What is The Na-Iye Jabbie Foundation?",
      answer:
        "The Na-Iye Jabbie Foundation (NIJF) is a nonprofit humanitarian organization operating as a flagship program under TechHealth Africa. Based in Freetown, Sierra Leone, we address critical social challenges through community-focused initiatives in public health, youth development, and social protection.",
    },
    {
      question: "How does NIJF support communities?",
      answer:
        "We work through four key program areas: Health Awareness & Mental Wellness, Children's Assurance Program, NIJF Goes Green Agriculture Initiative, and Women's Empowerment. Each program is designed to create lasting, sustainable change in vulnerable communities.",
    },
    {
      question: "Who founded The Na-Iye Jabbie Foundation?",
      answer:
        "The Na-Iye Jabbie Foundation was established by Amb. Billoh Gassama and operates under the broader TechHealth Africa initiative, bringing together expertise in technology, health, and community development.",
    },
    {
      question: "Where does NIJF operate?",
      answer:
        "NIJF is based in Freetown, Sierra Leone, and serves vulnerable communities throughout the country, with targeted programs in areas like Kroo Bay and rural agricultural communities.",
    },
    {
      question: "How can I support NIJF programs?",
      answer:
        "You can support our work through donations, volunteering, or starting a campaign for a specific program. Every contribution helps us build stronger, more resilient communities across Sierra Leone.",
    },
    {
      question: "What is the kush sensitization program?",
      answer:
        "Our kush sensitization initiative is a critical health awareness program targeting drug abuse prevention in vulnerable communities. We combine education, practical support, and mental health services to combat substance abuse and promote well-being.",
    },
    {
      question: "How does NIJF empower women?",
      answer:
        "Through our Women's Empowerment Initiative and NIJF Goes Green program, we provide agricultural training, financial literacy education, leadership development, and economic opportunities that enable women to achieve independence and thrive.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">About The Na-Iye Jabbie Foundation</h1>
          <p className="text-lg text-gray-600">Serving humanity through community-focused initiatives</p>
          <p className="text-lg text-gray-600">Building stronger, more resilient communities in Sierra Leone</p>
        </div>

        <div className="text-center mb-8">
          <button className="text-sm underline">Contact us</button>
        </div>

        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden">
          <Image
            src="/images/Helping the Poor with Food.jpeg"
            alt="NIJF community gathering"
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
              The Na-Iye Jabbie Foundation (NIJF), operating as a flagship program under TechHealth Africa, is a
              nonprofit humanitarian organization committed to serving humanity through diverse, community-focused
              initiatives. Based in Freetown, Sierra Leone, NIJF works to address critical social challenges through
              targeted programs that prioritize public health, youth development, and social protection in vulnerable
              communities.
            </p>
            <p>
              Our mission is rooted in the principle of giving back to society. We believe that sustainable change comes
              from understanding community needs and working alongside local people to create lasting solutions. Whether
              through health awareness campaigns, agricultural empowerment, women's development, or children's welfare
              programs, NIJF is committed to building stronger, more resilient communities.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#c8ff5c] border-2 border-black rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-8">Leadership & Vision</h2>
          <div className="space-y-6 text-gray-800 leading-relaxed">
            <p>
              <span className="font-semibold">
                The Na-Iye Jabbie Foundation was established by Amb. Billoh Gassama and operates under the broader
                TechHealth Africa initiative.
              </span>{" "}
              Our organization brings together expertise in technology, health, and community development to create
              innovative solutions for Sierra Leone's most pressing challenges.
            </p>
            <p>
              We believe that sustainable development requires a holistic approach. By combining health interventions
              with economic empowerment, education, and social support, we create comprehensive programs that address
              root causes rather than just symptoms. Our work is guided by the communities we serve, ensuring that every
              initiative is culturally relevant and truly meets local needs.
            </p>
            <p>
              From addressing the kush epidemic in Kroo Bay to empowering women through agricultural training, NIJF is
              at the forefront of community-driven change in Sierra Leone. We don't just provide services – we build
              capacity, create opportunities, and foster the resilience that communities need to thrive independently.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600">
            Our programs address critical needs across health, child welfare, agriculture, and women's empowerment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <div key={index} className="bg-white border-2 border-black rounded-3xl p-8">
                <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Learn more about The Na-Iye Jabbie Foundation and our work</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border-2 border-black rounded-2xl px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Become a Member Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Join The Movement</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Donor Card */}
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="inline-block bg-[#ffe5d9] text-[#ff5722] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Donor
            </div>
            <h3 className="text-2xl font-bold mb-4">Support Our Mission to Transform Communities</h3>
            <p className="text-gray-600 mb-6">
              Your contributions help us provide health services, support children, empower women, and create
              sustainable agricultural opportunities across Sierra Leone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Direct impact on vulnerable communities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Transparent reporting on fund usage</span>
              </li>
            </ul>
            <Button className="w-full bg-[#ff5722] hover:bg-[#f4511e] text-white rounded-full h-12">Donate Now</Button>
            <div className="mt-6">
              <Image
                src="/images/Helping the Poor with Food 2.jpeg"
                alt="NIJF Impact"
                width={400}
                height={200}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Volunteer Card */}
          <div className="bg-white border-2 border-black rounded-3xl p-8">
            <div className="inline-block bg-[#d9f7e5] text-[#22c55e] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Volunteer
            </div>
            <h3 className="text-2xl font-bold mb-4">Become Part of Our Team</h3>
            <p className="text-gray-600 mb-6">
              Join our dedicated volunteers working on health awareness, agricultural training, child welfare, and
              community development programs across Sierra Leone.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Make a direct difference in people's lives</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c8ff5c] text-xl">✓</span>
                <span className="text-sm">Gain experience in community development</span>
              </li>
            </ul>
            <Button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-full h-12">
              Join as Volunteer
            </Button>
            <div className="mt-6">
              <Image
                src="/images/Helping the Poor with Food 3.jpeg"
                alt="NIJF Volunteers"
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
