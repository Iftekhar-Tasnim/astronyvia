"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Brain, Cloud, Code, Palette, Database, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Automation",
      description:
        "Transform your business with intelligent systems that learn, adapt, and optimize operations automatically.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Chatbots",
        "Process Automation",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Build scalable, resilient cloud architectures that grow with your business and ensure maximum uptime.",
      features: [
        "Cloud Migration Services",
        "Kubernetes Orchestration",
        "Serverless Architecture",
        "DevOps & CI/CD",
        "Infrastructure as Code",
        "Cloud Security",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Web & Mobile Development",
      description:
        "Create stunning, high-performance applications that deliver exceptional user experiences across all devices.",
      features: [
        "Full-Stack Development",
        "Progressive Web Apps",
        "Native Mobile Apps",
        "API Development",
        "E-commerce Solutions",
        "Real-time Applications",
      ],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "UX / UI Engineering",
      description: "Design beautiful, intuitive interfaces that users love, backed by research and best practices.",
      features: [
        "User Research & Testing",
        "Interface Design",
        "Design Systems",
        "Prototyping",
        "Accessibility Compliance",
        "Brand Identity",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Database,
      title: "Data Systems",
      description: "Build robust data pipelines and analytics platforms that turn raw data into actionable insights.",
      features: [
        "Data Warehousing",
        "ETL Pipelines",
        "Real-time Analytics",
        "Data Visualization",
        "Big Data Processing",
        "Database Optimization",
      ],
      gradient: "from-violet-500 to-purple-500",
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

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We analyze your needs and define project goals together.",
              },
              {
                step: "02",
                title: "Design",
                description: "Creating intuitive solutions that align with your vision.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building robust, scalable systems with best practices.",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launching your solution with ongoing support and optimization.",
              },
            ].map((phase, index) => (
              <AnimatedSection key={phase.step} delay={index * 100}>
                <Card className="glass relative h-full border-border/50 p-6">
                  <div className="mb-4 text-5xl font-bold text-primary/20">{phase.step}</div>
                  <h3 className="mb-2 text-xl font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

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
