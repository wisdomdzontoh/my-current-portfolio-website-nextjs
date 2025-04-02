"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div
            className={cn(
              "flex-1 transition-all duration-1000 transform",
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="text-primary">Wisdom Dzontoh</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
              Software Engineer & Health Informatician
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I build innovative software solutions with a focus on health information systems. Specializing in Django,
              React, and data analytics to create impactful applications that bridge technology and healthcare.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/wisdomdzontoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/wisdom-dzontoh-563430195"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:wisdomdzontoh@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div
            className={cn(
              "flex-1 flex justify-center transition-all duration-1000",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl animate-float" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                <Image src="/assets/coder.jpg" alt="Wisdom Dzontoh" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}

