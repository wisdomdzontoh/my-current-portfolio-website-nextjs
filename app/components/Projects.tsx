"use client"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

type Project = {
  title: string
  description: string
  link: string
  technologies: string[]
  image: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Health Information Management System",
    description:
      "A comprehensive system for managing health information and data analytics, designed to improve healthcare delivery.",
    link: "#",
    github: "https://github.com/wisdomdzontoh/DJANGO-ELECTRONIC-HOSPITAL-MANAGEMENT-SYSTEM",
    technologies: ["Django", "React", "PostgreSQL", "Tailwind CSS"],
    image: "/assets/med-rec-system.png",
  },
  {
    title: "AI-Based Medical Diagnosis System",
    description:
      "Developed a system that utilizes AI algorithms to assist in medical diagnosis, integrating with existing health records.",
    link: "#",
    technologies: ["Python", "TensorFlow", "Django REST Framework", "React"],
    image: "/assets/AI-MED.jpg",
  },
  {
    title: "Online Voting Platform",
    description:
      "Created a secure online voting platform, allowing organizations to conduct polls and elections with ease and transparency.",
    link: "#",
    github: "https://github.com/wisdomdzontoh/online-voting-platform-frontend",
    technologies: ["Django", "React", "WebSocket", "PostgreSQL"],
    image: "/assets/online-voting.png",
  },
  {
    title: "AI Travel Planner Mobile App",
    description: "A mobile application that uses AI to help users plan their travel itineraries seamlessly.",
    link: "#",
    github: "https://github.com/wisdomdzontoh/AI-travel-planner-react_native-mobile-app",
    technologies: ["React Native"],
    image: "/assets/AI-Travel-planner.png",
  },
  {
    title: "Maternal and Perinatal Death Reporting System",
    description:
      "Developed a system for reporting and analyzing maternal and perinatal deaths, contributing to better health outcomes.",
    link: "#",
    github: "https://github.com/wisdomdzontoh/django_maternal_and_perinatal_reporting_system",
    technologies: ["Django", "Tailwind CSS", "PostgreSQL"],
    image: "/assets/maternal-death.png",
  },
  {
    title: "Job Listing Web App",
    description: "A web application for job listings, enabling users to search and apply for jobs effectively.",
    link: "#",
    github: "https://github.com/wisdomdzontoh/react-job-listing-web-app",
    technologies: ["React", "Tailwind CSS"],
    image: "/assets/react-job-listing.png",
  },
]

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="section-container bg-background/50">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={cn(
                  "overflow-hidden transition-all duration-300 border-border/50 bg-card",
                  hoveredIndex === index ? "transform scale-[1.02] shadow-xl" : "transform scale-100 shadow-md",
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover transition-transform duration-500",
                      hoveredIndex === index ? "scale-110" : "scale-100",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  {project.github && (
                    <Button asChild variant="ghost" size="sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}

                  <Button asChild variant="default" size="sm" className="ml-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

