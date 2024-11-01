'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
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

    const section = document.getElementById('contact')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="contact" className={`contact ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="contact-description">
          Feel free to reach out if you would like to discuss opportunities or have any questions!
        </p>
        <a href="mailto:wisdomdzontoh@gmail.com" className="contact-button">
          Email Me
        </a>
      </div>

      <style jsx>{`
        .contact {
          --primary-color: #61dafb;
          --secondary-color: #4ade80;
          --text-color: #e2e8f0;
          --background-color: #1a202c;
          --card-background: #2d3748;
          padding: 6rem 0;
          background-color: var(--background-color);
          color: var(--text-color);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .contact.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }

        .contact-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }

        .contact-button {
          display: inline-block;
          background-color: var(--primary-color);
          color: var(--background-color);
          font-size: 1.1rem;
          font-weight: 600;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .contact-button:hover {
          background-color: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 768px) {
          .contact {
            padding: 4rem 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-description {
            font-size: 1rem;
          }

          .contact-button {
            font-size: 1rem;
            padding: 0.8rem 1.6rem;
          }
        }
      `}</style>
    </section>
  )
}