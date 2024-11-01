'use client'

import { useState, useEffect } from 'react'

export default function AboutMe() {
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

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className={`about ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="content">
          <div className="text-content">
            <p>
              I am a software engineer, student and health informatician with a passion for coding and technology.
              I specialize in Django for backend APIs and have experience with React for frontend development.
            </p>
            <p>
              My goal is to build impactful projects, particularly in the health sector, and other industrial sectors that can leverage technology
              for better outcomes. I am currently working on a project to develop a web application that connects healthcare providers with patients,
              using machine learning algorithms to analyze patient data and provide personalized treatment recommendations.
            </p>
            <p>
              I am excited to collaborate with like-minded individuals and organizations to create innovative solutions that can make a significant difference between enterprise
            </p>
          </div>
          <div className="skills">
            <h3>Key Skills</h3>
            <ul>
              <li>Django</li>
              <li>React</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Health Informatics</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about {
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

        .about.visible {
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
          margin-bottom: 2rem;
        }

        .content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
        }

        .text-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
          color: var(--text-color);
        }

        .skills {
          background: linear-gradient(135deg, var(--card-background), #3a4a5e);
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .skills h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .skills ul {
          list-style-type: none;
          padding: 0;
        }

        .skills li {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }

        .skills li::before {
          content: '▹';
          color: var(--secondary-color);
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .content {
            grid-template-columns: 1fr;
          }

          .skills {
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  )
}