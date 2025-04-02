"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 100
      const sectionHeight = (section as HTMLElement).offsetHeight
      const sectionId = section.getAttribute("id") || ""

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(sectionId)
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            Wisdom Dzontoh
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary relative py-2",
                      activeSection === item.href.substring(1) ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
          <ul className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

