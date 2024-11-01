'use client'

import { useState, useEffect } from 'react'

type Skill = {
  name: string;
  level: string;
};

const skills: { category: string; items: Skill[] }[] = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'JAVA', level: 'Intermediate' },
    ],
  },
  {
    category: 'Web Development',
    items: [
      { name: 'Django', level: 'Advanced' },
      { name: 'React', level: 'Intermediate' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Intermediate' },
    ],
  },
  {
    category: 'Database & DevOps',
    items: [
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Git', level: 'Intermediate' },
      { name: 'Docker', level: 'Intermediate' },
    ],
  },
];

export default function Skills() {
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

    const section = document.getElementById('skills')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="skills" className={`skills ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((category, catIndex) => (
            <div key={catIndex} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skill-list">
                {category.items.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-bar-container">
                      <div 
                        className="skill-bar" 
                        style={{
                          width: skill.level === 'Advanced' ? '100%' : skill.level === 'Intermediate' ? '75%' : '50%'
                        }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills {
          --primary-color: #61dafb;
          --secondary-color: #4ade80;
          --text-color: #e2e8f0;
          --background-color: #1a202c;
          --card-background: #2d3748;
          --skill-bar-bg: #4a5568;
          --skill-bar-fill: #61dafb;
          padding: 4rem 0;
          background-color: var(--background-color);
          color: var(--text-color);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .skills.visible {
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .category-title {
          font-size: 1.5rem;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        .skill-list {
          display: grid;
          gap: 1rem;
        }

        .skill-item {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0.5rem;
          align-items: center;
        }

        .skill-name {
          font-size: 1rem;
          font-weight: 500;
        }

        .skill-bar-container {
          grid-column: 1 / -1;
          height: 8px;
          background-color: var(--skill-bar-bg);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar {
          height: 100%;
          background-color: var(--skill-bar-fill);
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .skill-level {
          font-size: 0.875rem;
          color: var(--text-color);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}