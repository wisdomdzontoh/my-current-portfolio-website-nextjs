'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'blog', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="home">
      
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Welcome to My Portfolio</h1>
              <p className="hero-description">
                I am a software Engineer with experience in web development and mobile app development. With additional background in health informatics too. 
                I Demonstrated expertise in software engineering, innovation, and problem-solving. Committed to advancing 
                systems and bridging the gap between technology and industries. My core programming language is Python with django as my framework.
              </p>
              <div className="hero-buttons">
                <a href="#projects" className="button primary">View Projects</a>
                <a href="#contact" className="button secondary">Contact Me</a>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/assets/coder.jpg?height=400&width=400"
                alt="Profile"
                width={400}
                height={400}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Blog />
      <Contact />

      <style jsx>{`
        .home {
          --primary-color: #61dafb;
          --secondary-color: #4ade80;
          --text-color: #e2e8f0;
          --background-color: #0f172a;
          --card-background: #1e293b;
          --navbar-background: rgba(15, 23, 42, 0.8);
          min-height: 100vh;
          background-color: var(--background-color);
          color: var(--text-color);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: var(--navbar-background);
          backdrop-filter: blur(10px);
          z-index: 1000;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .nav-links {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding: 1rem 0;
        }

        .nav-links li {
          margin: 0 1rem;
        }

        .nav-links a {
          color: var(--text-color);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: var(--primary-color);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 4rem 0;
        }

        .hero-content {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .hero-text {
          flex: 1;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
        }

        .button {
          display: inline-block;
          padding: 0.8rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .button.primary {
          background-color: var(--primary-color);
          color: var(--background-color);
        }

        .button.primary:hover {
          background-color: var(--secondary-color);
        }

        .button.secondary {
          background-color: var(--card-background);
          color: var(--text-color);
        }

        .button.secondary:hover {
          background-color: var(--primary-color);
          color: var(--background-color);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-image {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .profile-image:hover {
          transform: scale(1.05) rotate(5deg);
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .nav-links {
            flex-wrap: wrap;
          }

          .nav-links li {
            margin: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}