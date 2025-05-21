'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from './components/Card';
import TypewriterText from './components/TypewriterText';
import { projects } from './data/projects';
import { jobs } from './data/jobs';
import { education } from './data/education';
import { typewriterPhrases } from './data/phrases';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies?.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      <div className="relative bg-gradient-to-b from-gray-900 to-background py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-500/20 shadow-lg shadow-blue-500/10">
                <Image
                  src="/images/profilepic.jpg"
                  alt="Brandon Herman"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                  Hi, I'm Brandon Herman
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-300">
                  I'm a{' '}
                  <TypewriterText 
                    phrases={typewriterPhrases}
                    className="text-blue-400 font-medium"
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <Card key={job.id} {...job} />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Personal Projects</h2>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full md:w-64 px-4 py-2 rounded-lg bg-input text-white border border-border focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex flex-wrap gap-2">
                <button
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-secondary text-gray-300 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === 'Web Development'
                      ? 'bg-blue-600 text-white'
                      : 'bg-secondary text-gray-300 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedCategory('Web Development')}
                >
                  Web
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === 'Mobile App'
                      ? 'bg-blue-600 text-white'
                      : 'bg-secondary text-gray-300 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedCategory('Mobile App')}
                >
                  Mobile
                </button>
                <button
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === 'Design'
                      ? 'bg-blue-600 text-white'
                      : 'bg-secondary text-gray-300 hover:bg-muted'
                  }`}
                  onClick={() => setSelectedCategory('Design')}
                >
                  Design
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-400">No projects found matching your criteria</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>


      <section id="education" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu) => (
              <Card key={edu.id} {...edu} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/brandonherman1996/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/hermanator608"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://x.com/Brandon_Herman9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-[#1DA1F2] text-white rounded-lg font-medium hover:bg-[#1a8cd8] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
