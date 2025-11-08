"use client"

import { use } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import projectsData from "@/data/projects.json"

function getProjectBySlug(slug: string) {
  return projectsData.projects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  )
}

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = use(params)
  const project = getProjectBySlug(resolvedParams.slug)

  if (!project) {
    return (
      <main className="relative min-h-screen">
        <ParticleBackground />
        <section className="relative flex min-h-screen items-center justify-center px-6 pt-32 md:px-8 lg:px-12">
          <div className="container mx-auto max-w-7xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Project Not Found</h1>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <Link href="/projects">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Button>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                {project.fullDescription}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="relative h-[400px] overflow-hidden rounded-3xl md:h-[500px]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="relative px-6 py-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection>
                <Card className="glass border-border/50 p-8">
                  <h2 className="mb-6 text-3xl font-bold">About This Project</h2>
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <Card className="glass border-border/50 p-8">
                  <h2 className="mb-6 text-3xl font-bold">Key Features</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedSection delay={200}>
                <Card className="glass border-border/50 p-6">
                  <h3 className="mb-4 text-xl font-bold">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <Card className="glass border-border/50 p-6">
                  <h3 className="mb-4 text-xl font-bold">Project Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <Card className="glass neon-border-cyan border-border/50 p-6">
                  <h3 className="mb-4 text-xl font-bold">Live Project</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Visit the live site to see this project in action.
                  </p>
                  <Button
                    className="glow-cyan w-full group"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live Site
                      <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

