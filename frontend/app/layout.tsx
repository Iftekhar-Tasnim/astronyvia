import type React from "react"
import type { Metadata } from "next"
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
  title: "Astronyvia - Building the Future of Intelligence",
  description:
    "Next-generation tech and AI company specializing in artificial intelligence, cloud platforms, and innovative web solutions.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} ${GeistMono.variable} antialiased`} suppressHydrationWarning>
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
