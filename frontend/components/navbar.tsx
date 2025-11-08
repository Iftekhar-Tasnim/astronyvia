"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          isScrolled && "px-4 md:px-6 pt-4"
        )}
        style={{ willChange: "transform" }}
      >
        <div
          className={cn(
            "transition-all duration-700 ease-out",
            isScrolled
              ? "max-w-7xl mx-auto glass rounded-2xl border border-white/20 shadow-lg shadow-primary/5 px-6 py-3"
              : "w-full glass border-b border-white/10 px-6 md:px-8 lg:px-12 py-4"
          )}
          style={{ 
            transitionProperty: "max-width, width, border-radius, padding, box-shadow",
            willChange: "max-width, width, border-radius, padding"
          }}
        >
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <Image
                  src="/astronyvia.png"
                  alt="Astronyvia logo"
                  width={36}
                  height={36}
                  className="rounded-lg transition-transform duration-500 ease-out group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              </div>
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/80 transition-all duration-500 ease-out">
                Astronyvia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ease-out",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20 animate-in fade-in duration-300" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                className="glow-cyan rounded-lg px-5 font-medium"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-all duration-300 ease-out"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <X 
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"
                  )} 
                />
                <Menu 
                  className={cn(
                    "absolute inset-0 h-6 w-6 transition-all duration-300 ease-out",
                    isMobileMenuOpen ? "opacity-0 -rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  )} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div 
            className="fixed top-20 left-4 right-4 z-50 glass rounded-2xl border border-white/20 shadow-2xl p-6 md:hidden"
            style={{
              animation: "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-out",
                      isActive
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                    )}
                    style={{
                      animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
              
              <div 
                className="flex items-center gap-3 pt-4 mt-2 border-t border-white/10"
                style={{
                  animation: `fadeInUp 0.3s ease-out ${navLinks.length * 0.05}s both`,
                }}
              >
                <ThemeToggle />
                <Button
                  className="flex-1 glow-cyan rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

    </>
  )
}
