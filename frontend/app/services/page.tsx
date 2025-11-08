"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Palette, ArrowRight, CheckCircle2, Globe2, Smartphone, Server, Wrench, Search } from "lucide-react"
import Link from "next/link"
import { VisualTimeline } from "@/components/visual-timeline"
import { FAQSection } from "@/components/faq-section"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe2,
      title: "Website, Web Application & E-Commerce Development",
      description:
        "We design and develop fast, responsive, and professional websites, custom web applications, and secure e-commerce platforms with comprehensive maintenance and support.",
      details:
        "We create modern, responsive websites and web applications that deliver exceptional user experiences. Our e-commerce solutions include secure payment gateways, product management systems, and customer-friendly interfaces. We also provide ongoing maintenance and support to ensure your digital presence remains current and secure.",
      features: ["Business Websites", "Web Applications", "E-Commerce Platforms", "Maintenance & Support"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Android Application Development",
      description:
        "We create user-friendly, high-performance Android apps tailored to your business needs with attractive UI/UX design and seamless integration.",
      details:
        "We specialize in developing native Android applications that provide exceptional user experiences. Our apps feature attractive UI/UX design, seamless integration with business systems, and comprehensive testing to ensure bug-free performance and timely updates.",
      features: ["Custom Android Apps", "UI/UX Design", "Integration", "Testing & Maintenance"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Server,
      title: "Software Development",
      description:
        "We provide tailored software solutions to streamline business operations including custom software, desktop applications, and cloud integration.",
      details:
        "We develop custom software solutions that perfectly fit your business processes and requirements. From ERP and CRM systems to desktop applications and cloud-integrated solutions, we create software that grows with your business and ensures optimal performance.",
      features: ["Custom Software", "Desktop Applications", "Cloud Integration", "Testing & Quality Assurance"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Wrench,
      title: "Office Setup (Hardware Purchase & Installation)",
      description:
        "We set up complete office IT infrastructure including hardware procurement, installation, security solutions, and ongoing IT support.",
      details:
        "We provide comprehensive office IT infrastructure setup services, from hardware procurement and installation to security solutions and ongoing support. Our team ensures seamless integration of all systems and provides reliable IT support to keep your business running smoothly.",
      features: ["Hardware Procurement", "Installation & Configuration", "Security Solutions", "IT Support & Maintenance"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "3D Modeling & Game Asset Design",
      description:
        "We create high-quality digital assets for games, VR/AR, and marketing including 3D models, game assets, and product visualization.",
      details:
        "We specialize in creating high-quality 3D models and digital assets for games, VR/AR applications, and marketing purposes. Our team delivers optimized models for various platforms, complete with animation and rigging, plus realistic product visualization for marketing and presentations.",
      features: ["3D Models", "Game Assets", "Animation & Rigging", "Product Visualization"],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Search,
      title: "Search Engine Optimization (SEO)",
      description:
        "We help businesses rank higher on search engines and grow visibility through comprehensive on-page, off-page, and technical SEO strategies.",
      details:
        "We implement comprehensive SEO strategies to improve your search engine rankings and increase online visibility. Our approach includes on-page optimization, off-page strategies, technical improvements, and detailed analytics reporting to track performance and provide actionable insights.",
      features: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Analytics & Reporting"],
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  const technologies = [
    { name: "React", logo: "/react-logo.png" },
    { name: "Next.js", logo: "/nextjs-logo.png" },
    { name: "TensorFlow", logo: "/tensorflow-logo.png" },
    { name: "AWS", logo: "/aws-logo.png" },
    { name: "Docker", logo: "/docker-logo.png" },
    { name: "Kubernetes", logo: "/kubernetes-logo.png" },
    { name: "Python", logo: "/python-logo.png" },
    { name: "TypeScript", logo: "/typescript-logo.png" },
  ]

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business
              growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative px-6 py-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Card className="glass group relative h-full overflow-hidden border-border/50 p-8 transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div
                      className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} p-3`}
                    >
                      <service.icon className="h-full w-full text-white" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                    <p className="mb-6 text-muted-foreground">{service.description}</p>

                    <div className="mb-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="glow-cyan group w-full sm:w-auto">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Technologies We Use</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                We leverage the most powerful and modern technologies to build world-class solutions.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="glass neon-border-purple rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="relative flex">
                <div
                  className="flex gap-12"
                  style={{
                    animation: "scroll-left 30s linear infinite",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animationPlayState = "paused"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animationPlayState = "running"
                  }}
                >
                  {/* First set of logos */}
                  {technologies.map((tech) => (
                    <div
                      key={`${tech.name}-1`}
                      className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 flex-shrink-0"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/50 transition-all group-hover:bg-primary/20">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {technologies.map((tech) => (
                    <div
                      key={`${tech.name}-2`}
                      className="group flex flex-col items-center gap-3 transition-transform hover:scale-110 flex-shrink-0"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-muted/50 transition-all group-hover:bg-primary/20">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={tech.name}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
              `}</style>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Process</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                A proven methodology that delivers results, from discovery to deployment.
              </p>
            </div>
          </AnimatedSection>

          <VisualTimeline
            steps={[
              {
                number: "01",
                title: "Discovery",
                description: "We analyze your needs and define project goals together.",
              },
              {
                number: "02",
                title: "Design",
                description: "Creating intuitive solutions that align with your vision.",
              },
              {
                number: "03",
                title: "Development",
                description: "Building robust, scalable systems with best practices.",
              },
              {
                number: "04",
                title: "Deployment",
                description: "Launching your solution with ongoing support and optimization.",
              },
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          {
            q: "What services do you offer?",
            a: "We offer comprehensive technology solutions including web development, mobile app development, AI solutions, cloud services, 3D modeling, SEO, and office IT setup.",
          },
          {
            q: "How long does a typical project take?",
            a: "Project timelines vary based on scope and complexity. Simple websites may take 4-8 weeks, while complex applications can take 12-24 weeks. We provide detailed timelines during the discovery phase.",
          },
          {
            q: "Do you provide ongoing support and maintenance?",
            a: "Yes, we offer comprehensive maintenance and support packages to ensure your systems remain secure, updated, and performing optimally after launch.",
          },
          {
            q: "What technologies do you work with?",
            a: "We work with modern technologies including React, Next.js, Node.js, Python, AWS, Docker, Kubernetes, and many others. We choose the best stack for each project's specific needs.",
          },
        ]}
        className="relative"
      />

      {/* CTA Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-cyan relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  Let's discuss how our services can help transform your business and achieve your goals.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="glow-cyan" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="glass bg-transparent" asChild>
                    <Link href="/projects">View Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
