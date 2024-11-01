'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/Button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-blue-400">
              Wisdom Dzontoh Portfolio
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link 
                  href="#about" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'about' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link 
                  href="#projects" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'projects' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="#contact" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'contact' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  Contact
                </Link>
              </li>
              <li>
              <Link 
                  href="#experience" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'experience' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  Experience
                </Link>
                </li>
                <li>
              <Link 
                  href="#skills" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'skills' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  Skills
                </Link>
                </li>
                <li>
              <Link 
                  href="#testimonials" 
                  className={`hover:text-blue-400 transition-colors ${activeSection === 'testimonials' ? 'text-blue-400' : 'text-gray-300'}`}
                >
                  Testimonials
                </Link>
                </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 border-t border-gray-700">
          <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li>
              <Link
                href="#about"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'about' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'projects' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'contact' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'experience' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'skills' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#testimonials"
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors ${activeSection === 'testimonials' ? 'bg-gray-700 text-white' : 'text-gray-300'}`}
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
