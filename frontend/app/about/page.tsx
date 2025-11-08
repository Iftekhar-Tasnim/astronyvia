"use client"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Zap } from "lucide-react"
import { VisualTimeline } from "@/components/visual-timeline"

export default function AboutPage() {
  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description: "Astronyvia was founded with a vision to revolutionize the tech industry through AI innovation.",
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 company, delivering enterprise AI solutions.",
    },
    {
      year: "2019",
      title: "Global Expansion",
      description: "Opened offices in 5 countries, expanding our reach to serve clients worldwide.",
    },
    {
      year: "2021",
      title: "Cloud Excellence",
      description: "Became AWS Advanced Consulting Partner, recognized for cloud infrastructure expertise.",
    },
    {
      year: "2023",
      title: "AI Breakthrough",
      description: "Launched proprietary AI platform serving 10M+ users with 99.99% uptime.",
    },
    {
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as top 10 AI companies globally, with 500+ successful projects delivered.",
    },
  ]

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "/team-ceo-professional-portrait.jpg",
      bio: "Former AI researcher at MIT with 15+ years in machine learning.",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "/team-cto-professional-portrait.jpg",
      bio: "Ex-Google engineer specializing in distributed systems and cloud architecture.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image: "/team-design-lead-portrait.jpg",
      bio: "Award-winning designer with experience at Apple and Airbnb.",
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "/team-engineering-vp-portrait.jpg",
      bio: "Previously led engineering teams at Amazon and Microsoft.",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technologies to solve complex problems.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every line of code, every design decision is crafted with meticulous attention to detail.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions emerge from diverse perspectives working together.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in everything we create.",
      gradient: "from-blue-500 to-cyan-500",
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
              Shaping Tomorrow's{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Intelligence
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
              We're a team of innovators, engineers, and designers united by a passion for building the future of
              technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative px-6 py-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div className="glass neon-border-cyan h-full rounded-3xl p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  At Astronyvia, we believe technology should empower humanity, not replace it. Our mission is to create
                  intelligent systems that augment human capabilities and solve real-world problems.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We combine cutting-edge AI research with practical engineering to deliver solutions that are not just
                  innovative, but transformative.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="glass neon-border-purple h-full rounded-3xl p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Vision</h2>
                <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
                  We envision a future where artificial intelligence seamlessly integrates with human creativity,
                  enabling breakthroughs that were once thought impossible.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Through continuous innovation and unwavering commitment to excellence, we're building the foundation
                  for tomorrow's intelligent systems.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Journey</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                A decade of innovation, growth, and transformative impact.
              </p>
            </div>
          </AnimatedSection>

          <VisualTimeline
            steps={timeline.map((item) => ({
              number: item.year,
              title: item.title,
              description: item.description,
            }))}
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Meet Our Team</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                The brilliant minds behind Astronyvia's success.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 100}>
                <Card className="glass group relative overflow-hidden border-border/50 transition-all duration-300 hover:scale-105">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {member.role}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">Our Values</h2>
              <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <Card className="glass group relative h-full border-border/50 p-6 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} p-2.5`}
                    >
                      <value.icon className="h-full w-full text-white" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
