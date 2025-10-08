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
      title: "ChatterPoint",
      category: "Web Apps",
      description: "Real-time chat and collaboration platform.",
      image: "/chatpoint.png",
      tags: ["React", "Firebase"],
      gradient: "from-cyan-500 to-blue-500",
      url: "https://chatterpoint.web.app/",
    },
    {
      title: "ServiceTrek",
      category: "Web Apps",
      description: "Service management and booking application.",
      image: "/servicetrek.png",
      tags: ["Next.js", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
      url: "https://servicetrek-ff5f1.web.app/",
    },
    {
      title: "CineVerse",
      category: "Web Apps",
      description: "Movie discovery and tracking experience.",
      image: "/cineverse.png",
      tags: ["React", "TMDB API"],
      gradient: "from-pink-500 to-rose-500",
      url: "https://cineverse-dffdc.web.app/",
    },
    {
      title: "UIXpertise",
      category: "Web Apps",
      description: "UX/UI agency site.",
      image: "/modern-design-system-components.jpg",
      tags: ["Design", "Web"],
      gradient: "from-violet-500 to-purple-500",
      url: "https://uixpertise.com",
    },
    {
      title: "Lyvaa",
      category: "Web Apps",
      description: "E-commerce and lifestyle brand site.",
      image: "/lyva.png",
      tags: ["Commerce", "Web"],
      gradient: "from-blue-500 to-cyan-500",
      url: "https://lyvaa.com",
    },
    {
      title: "N3xVenture",
      category: "Web Apps",
      description: "Venture and startup studio.",
      image: "/smart-city-iot-network-visualization.jpg",
      tags: ["Startup", "Web"],
      gradient: "from-emerald-500 to-teal-500",
      url: "https://n3xventure.xyz",
    },
    {
      title: "Being Smile",
      category: "Web Apps",
      description: "Nonprofit organization platform.",
      image: "/beingsmile.png",
      tags: ["NGO", "Web"],
      gradient: "from-cyan-500 to-blue-500",
      url: "https://beingsmile.org",
    },
    {
      title: "Tusqa Wellbeing",
      category: "Web Apps",
      description: "Health and wellbeing services.",
      image: "/tusqa.png",
      tags: ["Health", "Web"],
      gradient: "from-purple-500 to-pink-500",
      url: "https://tusqawellbeing.com",
    },
    {
      title: "Unies",
      category: "Web Apps",
      description: "Business services company.",
      image: "/modern-design-system-components.jpg",
      tags: ["Business", "Web"],
      gradient: "from-violet-500 to-purple-500",
      url: "https://unies.com.bd",
    },
    {
      title: "Net Speed Analyzer",
      category: "Web Apps",
      description: "Speed and network diagnostics tool.",
      image: "/smart-city-iot-network-visualization.jpg",
      tags: ["PWA", "Web"],
      gradient: "from-emerald-500 to-teal-500",
      url: "https://siamahamed57.github.io/NetSpeedAnalyzer/",
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
            <div className="flex flex-wrap justify-center gap-3 rounded-full border p-3">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className=""
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
                <Card className="group relative h-full overflow-hidden border transition-all duration-300 hover:scale-[1.02]">
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Hover Overlay */
                    // Link overlays to the project URL
                    }
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="text-center">
                        <p className="mb-4 px-4 text-sm text-muted-foreground">{project.description}</p>
                        <a href={(project as any).url} target="_blank" rel="noopener noreferrer">
                          <Button className="glow-cyan group/btn">
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Badge variant="secondary" className="">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="mb-3 text-xl font-bold">
                      <a href={(project as any).url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    </h3>
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
            <div className="rounded-3xl border p-12">
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
