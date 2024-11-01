'use client'

import { useState, useEffect } from 'react'

type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
};

const experiences: Experience[] = [
  {
    role: 'Health Information Officer',
    company: 'Greater Accra Regional Health Directorate, Ghana Health Service',
    period: '2020 - Present',
    description: 'Utilized DHIMS2 for comprehensive health data management, ensuring accuracy and efficiency in data analysis and interpretation.',
    tasks: [
      'Trained healthcare professionals on effective data collection and analysis techniques.',
      'Developed customized data collection tools using Kobo Collect, ODK, and Google Forms.',
      'Conducted data analysis with statistical tools like Excel, SPSS, STATA, and EPI INFO.',
      'Ensured effective health data management through regular supervisory visits.',
      'Monitored and evaluated Key Performance Indicators (KPIs) at the district and facility level.',
    ],
  },
  {
    role: 'Field Research Officer',
    company: 'University of Ghana Business School - Department of Finance',
    period: '06/2024',
    description: 'Engaged in pivotal research projects focusing on health system governance and the impacts of antimicrobial resistance.',
    tasks: [
      'Collaborated with pharmacies and over-the-counter (OTC) providers to gather insights on antimicrobial resistance.',
      'Utilized REDCAP offline survey app for accurate data collection in diverse environments.',
    ],
  },
  {
    role: 'HHFA Data Collector',
    company: 'World Health Organization (in collaboration with GHS & MOH)',
    period: '2022 - 2023',
    description: 'Led data collection initiatives for the Harmonized Health Facility Assessment (HHFA) in Ghana, contributing to national health system evaluations.',
    tasks: [
      'Assessed health system service availability and readiness across various facilities.',
      'Worked closely with WHO to ensure the successful execution of health assessments.',
      'Provided in-depth data analysis and interpretation to support evidence-based decision-making.',
    ],
  },
  {
    role: 'Clinical Data Abstractor',
    company: 'AYA Collective (GHS)',
    period: '08/2022 - 09/2022',
    description: 'Participated in the baseline evaluation of the Making Every Baby Count Initiative (MEBCI 2.0), focusing on maternal and child health data.',
    tasks: [
      'Entered critical data from delivery, antenatal, and NICU registers at Ridge Hospital using Survey CTO.',
    ],
  },
  {
    role: 'Software Development Projects',
    company: 'Various Projects',
    period: 'Ongoing',
    description: 'Developed innovative software solutions addressing various needs in health and e-commerce sectors.',
    tasks: [
      'Electronic Medical Records System: Addressed data management gaps in health facilities.',
      'E-commerce Web App: Developed CRUD operations for both user and admin roles.',
      'E-voting System: Enabled user voting and results monitoring with a dedicated admin panel.',
      'Blockchain Voting Platform: Created a secure voting environment with real-time monitoring capabilities.',
    ],
  },
];

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('experience')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="experience" className={`experience ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3 className="role">{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                <ul className="tasks">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience {
          --primary-color: #61dafb;
          --secondary-color: #4ade80;
          --text-color: #e2e8f0;
          --background-color: #1a202c;
          --card-background: #2d3748;
          --timeline-color: #4a5568;
          padding: 4rem 0;
          background-color: var(--background-color);
          color: var(--text-color);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .experience.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary-color);
          text-align: center;
          margin-bottom: 3rem;
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline::after {
          content: '';
          position: absolute;
          width: 6px;
          background-color: var(--timeline-color);
          top: 0;
          bottom: 0;
          left: 50%;
          margin-left: -3px;
        }

        .timeline-item {
          padding: 10px 40px;
          position: relative;
          background-color: inherit;
          width: 50%;
        }

        .timeline-item:nth-child(odd) {
          left: 0;
        }

        .timeline-item:nth-child(even) {
          left: 50%;
        }

        .timeline-item::after {
          content: '';
          position: absolute;
          width: 25px;
          height: 25px;
          right: -17px;
          background-color: var(--card-background);
          border: 4px solid var(--primary-color);
          top: 15px;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-item:nth-child(even)::after {
          left: -16px;
        }

        .timeline-content {
          padding: 20px 30px;
          background-color: var(--card-background);
          position: relative;
          border-radius: 6px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .role {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .company {
          font-size: 1rem;
          color: var(--secondary-color);
          margin-bottom: 0.25rem;
        }

        .period {
          font-size: 0.875rem;
          color: var(--text-color);
          opacity: 0.8;
          margin-bottom: 1rem;
        }

        .description {
          margin-bottom: 1rem;
        }

        .tasks {
          list-style-type: none;
          padding-left: 0;
        }

        .tasks li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .tasks li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--secondary-color);
        }

        @media screen and (max-width: 768px) {
          .timeline::after {
            left: 31px;
          }

          .timeline-item {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
          }

          .timeline-item::after {
            left: 15px;
          }

          .timeline-item:nth-child(even) {
            left: 0%;
          }
        }
      `}</style>
    </section>
  )
}