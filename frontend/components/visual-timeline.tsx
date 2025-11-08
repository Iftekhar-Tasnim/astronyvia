"use client"

import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineStep {
  number: string
  title: string
  description: string
}

interface VisualTimelineProps {
  steps: TimelineStep[]
  className?: string
}

export function VisualTimeline({ steps, className }: VisualTimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 hidden h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 md:block" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <AnimatedSection key={step.number} delay={index * 100}>
            <div className="relative flex gap-6 md:gap-8">
              {/* Timeline Dot */}
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 ring-4 ring-background shadow-lg shadow-primary/50">
                <CheckCircle2 className="h-8 w-8 text-white" />
              </div>

              {/* Content Card */}
              <div className="flex-1 pt-2">
                <Card className="glass group relative h-full border-border/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-2 text-2xl font-bold text-primary/20">{step.number}</div>
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

