import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Brain, Cloud, Code, Palette, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Advanced AI solutions that transform businesses and drive innovation.",
      href: "/services",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud platforms built for performance and reliability.",
      href: "/services",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web applications with cutting-edge technologies.",
      href: "/services",
    },
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Beautiful, intuitive interfaces that users love.",
      href: "/services",
    },
  ]

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "200+", label: "Happy Clients" },
    { value: "99.9%", label: "Success Rate" },
    { value: "15+", label: "Years Experience" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content: "Astronyvia transformed our infrastructure with their cloud solutions. The team's expertise in AI and scalability is unmatched.",
      rating: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, StartupX",
      content: "Working with Astronyvia was a game-changer. They delivered our MVP in record time with exceptional quality.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Product Lead, InnovateCo",
      content: "The AI solutions they built for us increased our efficiency by 300%. Truly next-generation technology.",
      rating: 5,
    },
  ]

  const featuredProjects = [
    {
      title: "AI E-Commerce Platform",
      category: "AI & Machine Learning",
      image: "/lyva.png",
      href: "/projects",
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Solutions",
      image: "/beingsmile.png",
      href: "/projects",
    },
    {
      title: "FinTech Dashboard",
      category: "Web Development",
      image: "/tusqa.png",
      href: "/projects",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      
      {/* Background decorative elements */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/* Large gradient orbs */}
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-3xl dark:from-cyan-500/10" />
        <div className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl dark:from-purple-500/10" />
        <div className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-pink-500/20 to-transparent blur-3xl dark:from-pink-500/10" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-[90vh] items-center justify-center px-6 pt-24 pb-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <AnimatedSection>
              <p className="mb-6 text-sm font-medium uppercase tracking-wider text-primary md:text-base">
                Technology Solutions for Modern Businesses
              </p>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                Building the Future of{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                We design, build, and scale high-performance AI, cloud, and web solutions that empower businesses to thrive in the digital age.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="glow-cyan group" asChild>
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group" asChild>
                  <Link href="/projects">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 px-6 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <Card className="glass group h-full border-border/50 p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 border-y border-border/50 bg-muted/30 px-6 py-16 md:px-8 lg:px-12 lg:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="mb-2 text-4xl font-bold text-foreground md:text-5xl">{stat.value}</div>
                  <div className="text-sm font-medium text-muted-foreground md:text-base">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative z-10 px-6 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-12 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Featured Projects</h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  Explore our latest work and see how we're shaping the future of technology
                </p>
              </div>
              <Button variant="outline" className="hidden md:flex" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Link href={project.href}>
                  <Card className="glass group h-full overflow-hidden border-border/50 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
                    <div className="relative h-48 overflow-hidden bg-muted">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="mb-2 text-sm font-medium text-primary">{project.category}</p>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 border-y border-border/50 bg-muted/30 px-6 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Client Testimonials</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Don't just take our word for it - hear from the companies we've helped transform
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100}>
                <Card className="glass h-full border-border/50 p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-6 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection>
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">How We Work</h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                A proven methodology that delivers results every time
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-lg font-bold text-primary">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20 md:px-8 lg:px-12 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection>
            <Card className="glass border-border/50 p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="glow-cyan" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
