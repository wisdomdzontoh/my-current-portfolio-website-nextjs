"use client"

import { useScrollAnimation } from "@/app/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar } from "lucide-react"

type Experience = {
  role: string
  company: string
  period: string
  description: string
  tasks: string[]
}

const experiences: Experience[] = [
  {
    role: "Health Information Officer",
    company: "Greater Accra Regional Health Directorate, Ghana Health Service",
    period: "2020 - Present",
    description:
      "Utilized DHIMS2 for comprehensive health data management, ensuring accuracy and efficiency in data analysis and interpretation.",
    tasks: [
      "Trained healthcare professionals on effective data collection and analysis techniques.",
      "Developed customized data collection tools using Kobo Collect, ODK, and Google Forms.",
      "Conducted data analysis with statistical tools like Excel, SPSS, STATA, and EPI INFO.",
      "Ensured effective health data management through regular supervisory visits.",
      "Monitored and evaluated Key Performance Indicators (KPIs) at the district and facility level.",
    ],
  },
  {
    role: "Field Research Officer",
    company: "University of Ghana Business School - Department of Finance",
    period: "06/2024",
    description:
      "Engaged in pivotal research projects focusing on health system governance and the impacts of antimicrobial resistance.",
    tasks: [
      "Collaborated with pharmacies and over-the-counter (OTC) providers to gather insights on antimicrobial resistance.",
      "Utilized REDCAP offline survey app for accurate data collection in diverse environments.",
    ],
  },
  {
    role: "HHFA Data Collector",
    company: "World Health Organization (in collaboration with GHS & MOH)",
    period: "2022 - 2023",
    description:
      "Led data collection initiatives for the Harmonized Health Facility Assessment (HHFA) in Ghana, contributing to national health system evaluations.",
    tasks: [
      "Assessed health system service availability and readiness across various facilities.",
      "Worked closely with WHO to ensure the successful execution of health assessments.",
      "Provided in-depth data analysis and interpretation to support evidence-based decision-making.",
    ],
  },
  {
    role: "Clinical Data Abstractor",
    company: "AYA Collective (GHS)",
    period: "08/2022 - 09/2022",
    description:
      "Participated in the baseline evaluation of the Making Every Baby Count Initiative (MEBCI 2.0), focusing on maternal and child health data.",
    tasks: ["Entered critical data from delivery, antenatal, and NICU registers at Ridge Hospital using Survey CTO."],
  },
  {
    role: "Software Development Projects",
    company: "Various Projects",
    period: "Ongoing",
    description: "Developed innovative software solutions addressing various needs in health and e-commerce sectors.",
    tasks: [
      "Electronic Medical Records System: Addressed data management gaps in health facilities.",
      "E-commerce Web App: Developed CRUD operations for both user and admin roles.",
      "E-voting System: Enabled user voting and results monitoring with a dedicated admin panel.",
      "Blockchain Voting Platform: Created a secure voting environment with real-time monitoring capabilities.",
    ],
  },
]

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="section-container bg-background">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div ref={ref} className={cn("animate-on-scroll", isVisible && "visible")}>
          <div className="timeline-container">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div
                  className={cn(
                    "timeline-content bg-card rounded-lg p-6 shadow-lg",
                    index % 2 === 0 ? "animate-slide-in-from-right" : "animate-slide-in-from-left",
                  )}
                >
                  <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="mb-4">{exp.description}</p>
                  <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span className="text-muted-foreground">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

