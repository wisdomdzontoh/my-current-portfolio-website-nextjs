"use client"

import { Button } from "@/components/ui/button"
import { Github, Heart, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 inline-block">
              Wisdom Dzontoh
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Software engineer and health informatician specializing in building innovative solutions that bridge
              technology and healthcare.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/wisdomdzontoh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/wisdom-dzontoh-563430195"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:wisdomdzontoh@gmail.com"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+233558749735"
                aria-label="Phone"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-muted-foreground">
                <Mail className="mr-2" size={16} />
                <a href="mailto:wisdomdzontoh@gmail.com" className="hover:text-primary transition-colors">
                  wisdomdzontoh@gmail.com
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Phone className="mr-2" size={16} />
                <a href="tel:+233558749735" className="hover:text-primary transition-colors">
                  +233 558 749 735
                </a>
              </li>
            </ul>

            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Wisdom Dzontoh. All rights reserved.</p>
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Built with <Heart className="mx-1 text-primary" size={14} /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

