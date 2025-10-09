import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Space_Grotesk } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { Suspense } from "react"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://astronyvia.com"),
  title: {
    default: "Astronyvia - Building the Future of Intelligence",
    template: "%s | Astronyvia",
  },
  description:
    "Next-generation AI, cloud platforms, and web engineering. We design, build, and scale high-performance products.",
  keywords: [
    "Astronyvia",
    "AI",
    "Artificial Intelligence",
    "Machine Learning",
    "Cloud",
    "Next.js",
    "React",
    "SaaS",
    "Web Development",
  ],
  authors: [{ name: "Astronyvia" }],
  creator: "Astronyvia",
  publisher: "Astronyvia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://astronyvia.com/",
    title: "Astronyvia - Building the Future of Intelligence",
    description:
      "Next-generation AI, cloud platforms, and web engineering to ship products faster.",
    siteName: "Astronyvia",
    images: [
      {
        url: "/astronyvia.png",
        width: 1200,
        height: 630,
        alt: "Astronyvia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astronyvia - Building the Future of Intelligence",
    description:
      "Next-generation AI, cloud platforms, and web engineering to ship products faster.",
    images: ["/astronyvia.png"],
    creator: "@astronyvia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/astronyvia.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/astronyvia.png" }],
    shortcut: [{ url: "/astronyvia.png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Astronyvia",
              url: "https://astronyvia.com/",
              logo: "https://astronyvia.com/astronyvia.png",
              sameAs: [
                "https://x.com/astronyvia"
              ],
            }),
          }}
        />
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
