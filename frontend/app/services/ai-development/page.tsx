import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Development Services | Astronyvia",
  description:
    "Custom AI solutions: chatbots, ML pipelines, and computer vision. Deployable on cloud or edge.",
  alternates: { canonical: "/services/ai-development" },
}

export default function AiDevelopmentPage() {
  return (
    <main className="relative px-6 py-24 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">AI Development Services</h1>
        <p className="mb-10 text-muted-foreground">
          We build practical AI: retrieval‑augmented chat, predictive models, and automation workflows.
        </p>

        <section className="prose prose-invert max-w-none">
          <h2>Solutions</h2>
          <ul>
            <li>Chatbots with RAG and function calling</li>
            <li>Classification, forecasting, and recommendations</li>
            <li>Vision models and document intelligence</li>
            <li>Monitoring, evals, and safety guardrails</li>
          </ul>

          <h2>FAQs</h2>
          <details>
            <summary>Which models do you support?</summary>
            <p>OpenAI, Anthropic, Gemini, local LoRA, and custom fine‑tunes.</p>
          </details>
          <details>
            <summary>Can you deploy on our VPC?</summary>
            <p>Yes, we support AWS, Azure, GCP, and on‑prem Kubernetes.</p>
          </details>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Development",
              provider: { "@type": "Organization", name: "Astronyvia" },
              areaServed: "Global",
              serviceType: "Artificial Intelligence",
              description:
                "Custom AI solutions: chatbots, ML pipelines, and computer vision. Deployable on cloud or edge.",
            }),
          }}
        />
      </div>
    </main>
  )
}


