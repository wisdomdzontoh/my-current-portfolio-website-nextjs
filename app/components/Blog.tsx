'use client'

import { useState, useEffect } from 'react'

type BlogPost = {
  title: string;
  summary: string;
  link: string;
};

const blogPosts: BlogPost[] = [
  {
    title: 'Exploring Health Information Management',
    summary: 'An overview of key challenges and opportunities in health information management.',
    link: '#',
  },
  {
    title: 'Building a Medical Diagnosis System with AI',
    summary: 'Steps and considerations in developing AI-based medical diagnosis systems.',
    link: '#',
  },
  // Add more blog posts as needed
];

export default function Blog() {
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

    const section = document.getElementById('blog')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="blog" className={`blog ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Blog & Articles</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="blog-link">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog {
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

        .blog.visible {
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

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .blog-card {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .blog-title {
          font-size: 1.5rem;
          color: var(--primary-color);
          margin-bottom: 1rem;
        }

        .blog-summary {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .blog-link {
          display: inline-block;
          color: var(--secondary-color);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .blog-link:hover {
          color: var(--primary-color);
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}