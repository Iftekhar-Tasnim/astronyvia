"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ParticleBackground } from "@/components/particle-background"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { FAQSection } from "@/components/faq-section"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "AI & ML", "Cloud", "Development", "Design", "Industry"]

  const posts = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt:
        "Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation.",
      category: "AI & ML",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      image: "/blog-ai-enterprise-futuristic.jpg",
      author: "Dr. Sarah Chen",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Building Scalable Cloud Architectures",
      excerpt:
        "Best practices for designing cloud infrastructure that grows with your business while maintaining performance.",
      category: "Cloud",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      image: "/blog-cloud-architecture-diagram.jpg",
      author: "Marcus Rodriguez",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Modern Web Development Trends 2025",
      excerpt: "A comprehensive look at the latest frameworks, tools, and methodologies shaping web development today.",
      category: "Development",
      date: "Jan 10, 2025",
      readTime: "10 min read",
      image: "/blog-web-development-code.jpg",
      author: "David Kim",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to create and maintain design systems that empower teams and ensure consistency across products.",
      category: "Design",
      date: "Jan 8, 2025",
      readTime: "7 min read",
      image: "/blog-design-system-components.jpg",
      author: "Emily Watson",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Machine Learning in Production",
      excerpt: "Practical strategies for deploying and maintaining ML models in production environments at scale.",
      category: "AI & ML",
      date: "Jan 5, 2025",
      readTime: "12 min read",
      image: "/blog-ml-production-pipeline.jpg",
      author: "Dr. Sarah Chen",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding edge computing and its implications for the future of distributed systems and IoT.",
      category: "Cloud",
      date: "Jan 3, 2025",
      readTime: "9 min read",
      image: "/blog-edge-computing-network.jpg",
      author: "Marcus Rodriguez",
      gradient: "from-emerald-500 to-teal-500",
    },
  ]

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory)

  const featuredPost = posts[0]

  return (
    <main className="relative min-h-screen">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative px-6 pb-16 pt-32 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl text-center">
          <AnimatedSection>
            <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Insights &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <p className="mx-auto mb-10 max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
              Thoughts, research, and insights from our team on the latest in technology and innovation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative px-6 pb-16 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <Card className="glass group relative overflow-hidden border-border/50 transition-all duration-300 hover:scale-[1.01]">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="relative h-[400px] overflow-hidden lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <Badge
                    variant="secondary"
                    className={`mb-4 w-fit bg-gradient-to-r ${featuredPost.gradient} text-white`}
                  >
                    Featured
                  </Badge>
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">{featuredPost.title}</h2>
                  <p className="mb-6 text-lg text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div>By {featuredPost.author}</div>
                  </div>
                  <Button className="glow-cyan group w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative px-6 pb-12 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-purple flex flex-wrap justify-center gap-3 rounded-full p-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "glow-purple" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="relative px-6 py-12 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(1).map((post, index) => (
              <AnimatedSection key={post.title} delay={index * 100}>
                <Card className="glass group relative h-full overflow-hidden border-border/50 transition-all duration-300 hover:scale-[1.02]">
                  {/* Post Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <Badge variant="secondary" className={`mb-3 bg-gradient-to-r ${post.gradient} text-white`}>
                      {post.category}
                    </Badge>
                    <h3 className="mb-3 text-xl font-bold leading-tight">{post.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>

                    <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">By {post.author}</span>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        faqs={[
          {
            q: "How often do you publish new blog posts?",
            a: "We publish new articles regularly, typically 2-4 times per month, covering the latest trends in AI, web development, cloud technology, and industry insights.",
          },
          {
            q: "Can I subscribe to your blog updates?",
            a: "Yes! You can subscribe to our newsletter using the form above to receive the latest blog posts and insights directly in your inbox.",
          },
          {
            q: "Do you accept guest posts?",
            a: "We occasionally accept high-quality guest posts from industry experts. Please contact us with your proposal and writing samples.",
          },
          {
            q: "What topics do you cover in your blog?",
            a: "We cover a wide range of topics including AI and machine learning, web development, cloud architecture, design systems, industry trends, and technology best practices.",
          },
        ]}
        className="relative"
      />

      {/* Newsletter Section */}
      <section className="relative px-6 py-24 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <AnimatedSection>
            <div className="glass neon-border-cyan relative overflow-hidden rounded-3xl p-12 text-center md:p-16">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <h2 className="mb-4 text-4xl font-bold md:text-5xl">Stay Updated</h2>
                <p className="mx-auto mb-8 max-w-2xl text-balance text-lg text-muted-foreground">
                  Subscribe to our newsletter for the latest insights, research, and updates from Astronyvia.
                </p>
                <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="glass flex-1 rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm outline-none ring-primary focus:ring-2"
                  />
                  <Button size="lg" className="glow-cyan">
                    Subscribe
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
