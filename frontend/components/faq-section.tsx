"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/components/animated-section"
import { Card } from "@/components/ui/card"

interface FAQItem {
  q: string
  a: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title?: string
  className?: string
}

export function FAQSection({ faqs, title = "Frequently Asked Questions", className }: FAQSectionProps) {
  return (
    <section className={className}>
      <div className="container mx-auto max-w-7xl px-6 py-24 md:px-8 lg:px-12">
        <AnimatedSection>
          <div className="glass neon-border-magenta rounded-3xl p-8 md:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">{title}</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border/50 rounded-lg border px-4">
                  <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

