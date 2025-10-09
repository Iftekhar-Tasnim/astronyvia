"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contactus@astronyvia.com",
      link: "mailto:contactus@astronyvia.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+880 15-2110-4415",
      link: "tel:+8801521104415",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "ECB Chattar, Dhaka, Bangladesh",
      link: "https://www.google.com/maps/place/ECB+Chattar,+Dhaka/@23.8225706,90.3831293,15z/data=!3m1!4b1!4m6!3m5!1s0x3755c6c2ab936b87:0xcaa915c4069493be!8m2!3d23.8225517!4d90.3934291!16s%2Fg%2F11bztyyv98?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D",
    },
  ]

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
              Ready to transform your business with cutting-edge technology? Let's start a conversation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative px-6 py-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="glass neon-border-cyan h-full border-border/50 p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="glass border-border/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass border-border/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="glass border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="glass min-h-[150px] border-border/50"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="glow-cyan w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <AnimatedSection delay={100}>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="glass group border-border/50 p-6 transition-all hover:scale-105">
                      <a href={info.link} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/20">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">{info.title}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </Card>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <Card className="glass neon-border-purple overflow-hidden border-border/50">
                  <div className="relative h-[300px] bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    {/* Google Map Embed */}
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <iframe
                        title="Astronyvia Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.517074806516!2d90.3831293!3d23.8225706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6c2ab936b87%3A0xcaa915c4069493be!2sECB%20Chattar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1728490000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Offices</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                We have a global presence to serve you better.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                city: "San Francisco",
                country: "United States",
                address: "123 Tech Street, CA 94102",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                city: "London",
                country: "United Kingdom",
                address: "456 Innovation Ave, EC1A 1BB",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "789 Future Road, 018956",
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((office, index) => (
              <AnimatedSection key={office.city} delay={index * 100}>
                <Card className="glass group relative overflow-hidden border-border/50 p-6 transition-all hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${office.gradient} p-2.5`}
                    >
                      <MapPin className="h-full w-full text-white" />
                    </div>
                    <h3 className="mb-1 text-xl font-bold">{office.city}</h3>
                    <p className="mb-2 text-sm text-muted-foreground">{office.country}</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-magenta rounded-3xl p-8 md:p-12">
              <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    q: "What is your typical project timeline?",
                    a: "Project timelines vary based on scope, but most projects range from 8-16 weeks from kickoff to launch.",
                  },
                  {
                    q: "Do you offer ongoing support?",
                    a: "Yes, we provide comprehensive maintenance and support packages for all our projects.",
                  },
                  {
                    q: "What industries do you serve?",
                    a: "We work across various industries including fintech, healthcare, e-commerce, and enterprise software.",
                  },
                  {
                    q: "How do you ensure project success?",
                    a: "We follow agile methodologies with regular check-ins, transparent communication, and iterative development.",
                  },
                ].map((faq) => (
                  <div key={faq.q} className="space-y-2">
                    <h3 className="font-semibold">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
