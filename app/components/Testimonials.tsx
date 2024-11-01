'use client'

import { useState, useEffect } from 'react'

type Testimonial = {
  name: string;
  title: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Jocelyn Laryea',
    title: 'Software Engineer',
    quote: 'Incredibly dedicated and skilled in health information management and software development.',
  },
  {
    name: 'Sally Obeng',
    title: 'Network Engineer',
    quote: 'Always delivers work of high quality, with great attention to detail and teamwork.',
  },
  {
    name: 'Bright Obeng',
    title: 'Data Protection Engineer',
    quote: 'Great guy with great attention to detail and excellent performance',
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
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

    const section = document.getElementById('testimonials')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="testimonials" className={`testimonials ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">&quot;</div>
              <p className="quote">{testimonial.quote}</p>
              <div className="author">
                <p className="name">{testimonial.name}</p>
                <p className="title">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials {
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

        .testimonials.visible {
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

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .quote-icon {
          position: absolute;
          top: -0.5rem;
          left: 1rem;
          font-size: 6rem;
          color: var(--primary-color);
          opacity: 0.2;
          font-family: serif;
        }

        .quote {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .author {
          text-align: right;
        }

        .name {
          font-size: 1.1rem;
          font-weight: bold;
          color: var(--secondary-color);
        }

        .title {
          font-size: 0.9rem;
          color: var(--text-color);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}