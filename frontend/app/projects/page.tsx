"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "AI & ML", "Cloud", "Web Apps", "Mobile", "Design"]

  const projects = [
    {
      title: "Neural Commerce Platform",
      category: "AI & ML",
      description: "AI-powered e-commerce platform with personalized recommendations and predictive analytics.",
      image: "/futuristic-ai-ecommerce-dashboard.jpg",
      tags: ["TensorFlow", "React", "AWS"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "CloudScale Infrastructure",
      category: "Cloud",
      description: "Scalable Kubernetes infrastructure serving 10M+ users with 99.99% uptime.",
      image: "/cloud-infrastructure-network-visualization.jpg",
      tags: ["Kubernetes", "Docker", "Terraform"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "FinTech Dashboard",
      category: "Web Apps",
      description: "Real-time financial analytics platform with advanced data visualization.",
      image: "/modern-financial-dashboard-dark-theme.jpg",
      tags: ["Next.js", "TypeScript", "D3.js"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "HealthTrack Mobile",
      category: "Mobile",
      description: "Cross-platform health monitoring app with AI-driven insights.",
      image: "/health-tracking-app.png",
      tags: ["React Native", "Firebase", "ML Kit"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Brand Identity System",
      category: "Design",
      description: "Complete design system and brand guidelines for a global tech company.",
      image: "/modern-design-system-components.jpg",
      tags: ["Figma", "Design Tokens", "Storybook"],
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "Smart City IoT",
      category: "AI & ML",
      description: "IoT platform managing 50,000+ sensors with real-time AI analytics.",
      image: "/smart-city-iot-network-visualization.jpg",
      tags: ["Python", "TensorFlow", "MQTT"],
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

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
                Projects
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
              Explore our portfolio of innovative solutions that have transformed businesses and delighted users.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative px-6 pb-12 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-cyan flex flex-wrap justify-center gap-3 rounded-full p-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={activeFilter === filter ? "glow-cyan" : ""}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-6 py-12 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <Card className="glass group relative h-full overflow-hidden border-border/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <div className="text-center">
                        <p className="mb-4 px-4 text-sm text-muted-foreground">{project.description}</p>
                        <Button className="glow-cyan group/btn">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary" className={`bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
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
            <div className="glass neon-border-purple rounded-3xl p-12">
              <div className="grid gap-8 md:grid-cols-4">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "200+", label: "Happy Clients" },
                  { value: "50+", label: "Countries Served" },
                  { value: "15+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="mb-2 text-4xl font-bold text-glow">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
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
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Have a Project in Mind?</h2>
                <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" className="glow-magenta">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline" className="glass bg-transparent">
                    Schedule a Call
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
