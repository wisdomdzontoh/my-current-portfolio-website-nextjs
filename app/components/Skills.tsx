"use client"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

type Skill = {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced"
  percentage: number
}

const skillCategories = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: "Advanced", percentage: 90 },
      { name: "JavaScript", level: "Intermediate", percentage: 75 },
      { name: "C++", level: "Intermediate", percentage: 70 },
      { name: "JAVA", level: "Intermediate", percentage: 65 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "Django", level: "Advanced", percentage: 90 },
      { name: "React", level: "Intermediate", percentage: 75 },
      { name: "Next.js", level: "Intermediate", percentage: 70 },
      { name: "Tailwind CSS", level: "Intermediate", percentage: 80 },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "PostgreSQL", level: "Intermediate", percentage: 75 },
      { name: "MySQL", level: "Intermediate", percentage: 70 },
      { name: "MongoDB", level: "Intermediate", percentage: 65 },
      { name: "AWS", level: "Intermediate", percentage: 60 },
      { name: "Git", level: "Intermediate", percentage: 80 },
      { name: "Docker", level: "Intermediate", percentage: 65 },
    ],
  },
]

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation()
  const [animateSkills, setAnimateSkills] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimateSkills(true)
      }, 300)

      return () => clearTimeout(timer)
    }
  }, [isVisible])

  return (
    <section id="skills" className="section-container bg-background/50">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="bg-card rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: animateSkills ? `${skill.percentage}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

