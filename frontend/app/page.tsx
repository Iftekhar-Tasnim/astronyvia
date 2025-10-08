import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ParticleBackground } from "@/components/particle-background"
import { AnimatedSection } from "@/components/animated-section"
import { ArrowRight, Brain, Cloud, Code, Palette, Zap, Users, TrendingUp, Clock, Star, Send } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "AI Systems",
      description: "Advanced machine learning and neural networks powering intelligent solutions.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Scalable infrastructure and cloud-native architectures for modern applications.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Web Apps",
      description: "Full-stack development with cutting-edge frameworks and technologies.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Palette,
      title: "UX Design",
      description: "Beautiful, intuitive interfaces that users love to interact with.",
      gradient: "from-blue-500 to-cyan-500",
    },
  ]

  const stats = [
    { icon: Zap, value: "500+", label: "Projects Delivered" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: TrendingUp, value: "99.9%", label: "Success Rate" },
    { icon: Clock, value: "24/7", label: "Uptime" },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechCorp",
      content:
        "Astronyvia transformed our infrastructure with their cloud solutions. The team's expertise in AI and scalability is unmatched.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/7691739/pexels-photo-7691739.jpeg",
    },
    {
      name: "Michael Rodriguez",
      role: "CEO, StartupX",
      content:
        "Working with Astronyvia was a game-changer. They delivered our MVP in record time with exceptional quality.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/671800/pexels-photo-671800.jpeg",
    },
    {
      name: "Emily Watson",
      role: "Product Lead, InnovateCo",
      content: "The AI solutions they built for us increased our efficiency by 300%. Truly next-generation technology.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/837306/pexels-photo-837306.jpeg",
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business needs and goals to create a tailored strategy.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our team crafts beautiful, intuitive interfaces that users love.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build scalable, high-performance solutions using cutting-edge technology.",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Seamless launch with ongoing support and optimization for success.",
    },
  ]

  const partners = [
    { name: "React", logo: "/react-logo.png" },
    { name: "Next.js", logo: "/nextjs-logo.png" },
    { name: "TensorFlow", logo: "/tensorflow-logo.png" },
    { name: "AWS", logo: "/aws-logo.png" },
    { name: "Docker", logo: "/docker-logo.png" },
    { name: "Kubernetes", logo: "/kubernetes-logo.png" },
  ]

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <div className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              We are always here to help you
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="mx-auto mb-10 max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
              Empower your entire organization to create at the speed of thought, while ensuring security remains at the
              forefront.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="glow-cyan group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="glass group bg-transparent">
                Watch Demo
                <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
                  <div className="h-0 w-0 border-y-4 border-l-8 border-y-transparent border-l-primary" />
                </div>
              </Button>
            </div>
          </AnimatedSection>

          {/* Floating Elements */}
          <div className="absolute left-10 top-1/4 hidden animate-float lg:block">
            <div className="glass neon-border-cyan h-20 w-20 rounded-2xl p-4">
              <Brain className="h-full w-full text-cyan-400" />
            </div>
          </div>
          <div className="absolute right-10 top-1/3 hidden animate-float lg:block" style={{ animationDelay: "1s" }}>
            <div className="glass neon-border-purple h-20 w-20 rounded-2xl p-4">
              <Zap className="h-full w-full text-purple-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">What We Build</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                Cutting-edge solutions powered by the latest technologies and innovative thinking.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 100}>
                <Card className="glass group relative h-full overflow-hidden border-border/50 p-6 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} p-2.5`}
                    >
                      <feature.icon className="h-full w-full text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-cyan rounded-3xl p-12">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="mb-2 text-4xl font-bold text-glow">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partners/Tech Stack Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Powered by Industry Leaders</h2>
              <p className="mx-auto max-w-2xl text-balance text-muted-foreground">
                We leverage the best technologies to deliver exceptional results
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="glass neon-border-cyan rounded-3xl p-8">
              <div className="grid grid-cols-3 gap-8 md:grid-cols-6">
                {partners.map((partner, index) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center opacity-60 transition-opacity hover:opacity-100"
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Process</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                A proven methodology that delivers results every time
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <Card className="glass group relative h-full overflow-hidden border-border/50 p-6 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-4 text-5xl font-bold text-glow opacity-20">{step.number}</div>
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video/Innovation Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-purple overflow-hidden rounded-3xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">Innovation at Scale</h2>
                  <p className="mb-6 text-balance text-muted-foreground">
                    We combine cutting-edge AI technology with human creativity to deliver solutions that transform
                    businesses and shape the future.
                  </p>
                  <div className="flex gap-4">
                    <Button className="glow-purple">Learn More</Button>
                    <Button variant="outline" className="glass bg-transparent">
                      View Case Studies
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[300px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 md:min-h-[400px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm">
                      <div className="h-0 w-0 border-y-8 border-l-12 border-y-transparent border-l-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                Don't just take our word for it - hear from the companies we've helped transform
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 100}>
                <Card className="glass group h-full border-border/50 p-6 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Preview Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Featured Projects</h2>
                <p className="max-w-2xl text-balance text-lg text-muted-foreground">
                  Explore our latest work and see how we're shaping the future
                </p>
              </div>
              <Button variant="outline" className="glass hidden bg-transparent md:flex" asChild>
                <Link href="/projects">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI E-Commerce Platform",
                category: "AI & Machine Learning",
                image: "/lyva.png",
                url: "https://lyvaa.com/",
              },
              {
                title: "Cloud Infrastructure",
                category: "Cloud Solutions",
                image: "/beingsmile.png",
                url: "https://beingsmile.org/",
              },
              {
                title: "FinTech Dashboard",
                category: "Web Development",
                image: "/tusqa.png",
                url: "https://tusqawellbeing.com/",
              },
            ].map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Link href={(project as any).url} target="_blank" rel="noopener noreferrer">
                  <Card className="glass group relative h-full overflow-hidden border-border/50 transition-all duration-300 hover:scale-105 hover:border-primary/50">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-2 text-sm text-primary">{project.category}</div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" className="glass bg-transparent" asChild>
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-purple rounded-3xl p-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Stay Updated</h2>
              <p className="mx-auto mb-8 max-w-2xl text-balance text-muted-foreground">
                Subscribe to our newsletter for the latest insights on AI, cloud technology, and digital innovation
              </p>
              <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="glass flex-1 rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none transition-all focus:border-primary/50"
                />
                <Button type="submit" className="glow-purple">
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-magenta relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10" />
              <div className="relative">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Let's Build the Future Together</h2>
                <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  Ready to transform your business with cutting-edge AI and cloud solutions? Get in touch with our team
                  today.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="glow-magenta">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline" className="glass bg-transparent" asChild>
                    <Link href="/contact">Contact Sales</Link>
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
