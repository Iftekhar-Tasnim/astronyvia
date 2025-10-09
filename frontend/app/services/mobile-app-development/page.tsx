import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mobile App Development | Astronyvia",
  description:
    "iOS and Android apps with React Native and Flutter. Modern UX, performance, and analytics baked in.",
  alternates: { canonical: "/services/mobile-app-development" },
}

export default function MobileAppDevelopmentPage() {
  return (
    <main className="relative px-6 py-24 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Mobile App Development</h1>
        <p className="mb-10 text-muted-foreground">
          Build once, ship everywhere. We deliver fast, reliable iOS and Android apps.
        </p>

        <section className="prose prose-invert max-w-none">
          <h2>Capabilities</h2>
          <ul>
            <li>React Native and Flutter</li>
            <li>Offline-first sync, push notifications</li>
            <li>CI/CD, TestFlight/Play Store release</li>
            <li>Performance monitoring and crash analytics</li>
          </ul>

          <h2>FAQs</h2>
          <details>
            <summary>Do you support native modules?</summary>
            <p>Yes, we bridge native features when required for performance.</p>
          </details>
          <details>
            <summary>How do you handle QA?</summary>
            <p>Automated tests + manual QA across target devices and OS versions.</p>
          </details>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Mobile App Development",
              provider: { "@type": "Organization", name: "Astronyvia" },
              areaServed: "Global",
              serviceType: "Mobile Application Development",
              description:
                "iOS and Android apps with React Native and Flutter. Modern UX, performance, and analytics baked in.",
            }),
          }}
        />
      </div>
    </main>
  )
}


