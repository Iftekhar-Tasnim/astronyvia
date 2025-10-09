import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Development Company | Astronyvia",
  description:
    "Custom web development with Next.js and React. High-performance, SEO-friendly websites and apps that convert.",
  alternates: { canonical: "/services/web-development" },
}

export default function WebDevelopmentPage() {
  return (
    <main className="relative px-6 py-24 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Web Development Company</h1>
        <p className="mb-10 text-muted-foreground">
          We build blazing-fast, SEO-friendly web apps with Next.js, React, and modern cloud platforms.
        </p>

        <section className="prose prose-invert max-w-none">
          <h2>What we deliver</h2>
          <ul>
            <li>Next.js SSR/ISR for speed and SEO</li>
            <li>Design systems and accessible UI</li>
            <li>Integrations: headless CMS, payments, auth</li>
            <li>Analytics, A/B testing, and SEO foundations</li>
          </ul>

          <h2>Process</h2>
          <ol>
            <li>Discovery & requirements</li>
            <li>Design & architecture</li>
            <li>Development & QA</li>
            <li>Launch & growth</li>
          </ol>

          <h2>FAQs</h2>
          <details>
            <summary>How long does a project take?</summary>
            <p>Typical builds take 3–8 weeks depending on scope.</p>
          </details>
          <details>
            <summary>Do you provide SEO?</summary>
            <p>Yes, technical SEO is built-in: metadata, OG, sitemap, robots, clean markup.</p>
          </details>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Web Development",
              provider: { "@type": "Organization", name: "Astronyvia" },
              areaServed: "Global",
              serviceType: "Web Development",
              description:
                "Custom web development with Next.js and React. High-performance, SEO-friendly websites and apps that convert.",
            }),
          }}
        />
      </div>
    </main>
  )
}


