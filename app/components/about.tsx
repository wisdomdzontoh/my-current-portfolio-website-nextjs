"use client"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Code, Database, HeartPulse, Laptop, Server } from "lucide-react"

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="section-container bg-background">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Software Engineer</h3>
              </div>
              <p className="text-muted-foreground">
                Experienced in building robust web applications and APIs using Django, React, and other modern
                technologies.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <HeartPulse className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Health Informatician</h3>
              </div>
              <p className="text-muted-foreground">
                Specialized in health information systems, data analytics, and improving healthcare delivery through
                technology.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Database className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Data Specialist</h3>
              </div>
              <p className="text-muted-foreground">
                Skilled in data collection, analysis, and visualization to derive meaningful insights and support
                decision-making.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Background</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a software engineer and health informatician with a passion for coding and technology. I
                  specialize in Django for backend APIs and have experience with React for frontend development.
                </p>
                <p>
                  My goal is to build impactful projects, particularly in the health sector, that can leverage
                  technology for better outcomes. I am currently working on projects that connect healthcare providers
                  with patients, using machine learning algorithms to analyze patient data and provide personalized
                  treatment recommendations.
                </p>
                <p>
                  I am excited to collaborate with like-minded individuals and organizations to create innovative
                  solutions that can make a significant difference across various industries.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Focus</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-2">
                    <Server className="text-primary mr-2" size={20} />
                    <h4 className="text-lg font-medium">Backend Development</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Building robust APIs and server-side applications with Django, Python, and PostgreSQL.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Laptop className="text-primary mr-2" size={20} />
                    <h4 className="text-lg font-medium">Frontend Development</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Creating responsive and interactive user interfaces with React, Next.js, and Tailwind CSS.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <Database className="text-primary mr-2" size={20} />
                    <h4 className="text-lg font-medium">Data Management</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Designing database schemas, data pipelines, and analytics solutions for healthcare and other
                    sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

