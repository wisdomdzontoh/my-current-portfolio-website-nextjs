'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type Project = {
  title: string;
  description: string;
  link: string;
  technologies: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Health Information Management System',
    description: 'A comprehensive system for managing health information and data analytics, designed to improve healthcare delivery.',
    link: 'https://github.com/wisdomdzontoh/DJANGO-ELECTRONIC-HOSPITAL-MANAGEMENT-SYSTEM',
    technologies: 'Django, React, PostgreSQL, Tailwind CSS',
    image: '/assets/med-rec-system.png?height=200&width=300',
  },
  {
    title: 'AI-Based Medical Diagnosis System',
    description: 'Developed a system that utilizes AI algorithms to assist in medical diagnosis, integrating with existing health records.',
    link: '#',
    technologies: 'Python, TensorFlow, Django REST Framework, React',
    image: '/assets/AI-MED.jpg?height=200&width=300',
  },
  {
    title: 'Online Voting Platform',
    description: 'Created a secure online voting platform, allowing organizations to conduct polls and elections with ease and transparency.',
    link: 'https://github.com/wisdomdzontoh/online-voting-platform-frontend',
    technologies: 'Django, React, WebSocket, PostgreSQL',
    image: '/assets/online-voting.png?height=200&width=300',
  },
  {
    title: 'AI Travel Planner Mobile App',
    description: 'A mobile application that uses AI to help users plan their travel itineraries seamlessly.',
    link: 'https://github.com/wisdomdzontoh/AI-travel-planner-react_native-mobile-app',
    technologies: 'React Native',
    image: '/assets/AI-Travel-planner.png?height=200&width=300',
  },
  {
    title: 'Maternal and Perinatal Death Reporting System',
    description: 'Developed a system for reporting and analyzing maternal and perinatal deaths, contributing to better health outcomes.',
    link: 'https://github.com/wisdomdzontoh/django_maternal_and_perinatal_reporting_system',
    technologies: 'Django, Tailwind CSS, PostgreSQL',
    image: '/assets/maternal-death.png?height=200&width=300',
  },
  {
    title: 'Job Listing Web App',
    description: 'A web application for job listings, enabling users to search and apply for jobs effectively.',
    link: 'https://github.com/wisdomdzontoh/react-job-listing-web-app',
    technologies: 'React, Tailwind CSS',
    image: '/assets/react-job-listing.png?height=200&width=300',
  },
  {
    title: 'AMHSG Job Portal for Health Professionals',
    description: 'An integrated job portal for health professionals, featuring job listings and payment integration using Paystack API.',
    link: 'https://github.com/wisdomdzontoh/AMHSG-EMPLOYMENT-PORTAL-DJANGO',
    technologies: 'Django, PostgreSQL, Tailwind CSS, Paystack API',
    image: '/assets/AMHSG-dashboard.png?height=200&width=300',
  },
  {
    title: 'Student Management System',
    description: 'A comprehensive system for managing student data, streamlining administrative tasks and record-keeping.',
    link: 'https://github.com/wisdomdzontoh/student-management-system',
    technologies: 'PHP, MySQL, SQL Server, HTML, CSS',
    image: '/assets/student-mgt.jpg?height=200&width=300',
  },
];

export default function Projects() {
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

    const section = document.getElementById('projects')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="projects" className={`projects ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <Image src={project.image} alt={project.title} width={300} height={200} layout="responsive" />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies"><strong>Technologies:</strong> {project.technologies}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          --primary-color: #61dafb;
          --secondary-color: #4ade80;
          --text-color: #e2e8f0;
          --background-color: #1a202c;
          --card-background: #2d3748;
          padding: 4rem 0;
          background-color: var(--background-color);
          color: var(--text-color);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .projects.visible {
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: var(--card-background);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .project-description {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-technologies {
          font-size: 0.8rem;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .project-link {
          display: inline-block;
          background-color: var(--primary-color);
          color: var(--background-color);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
        }

        .project-link:hover {
          background-color: var(--secondary-color);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}