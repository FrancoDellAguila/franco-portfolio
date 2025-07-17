import './App.css';
import { useState, useEffect } from 'react';
import mywImage from './assets/MYW.png';
import ctImage from './assets/CT.png';
import gelroyImage from './assets/TFG.png';

function App() {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  const skillCategories = [
    {
      name: "Stack",
      skills: ["Java", "Python", "C", "Fortran", "JavaScript", "SQL"]
    },
    {
      name: "Frameworks",
      skills: ["Django", "Flask", "React", "Spring", "Odoo"]
    },
    {
      name: "Web",
      skills: ["HTML", "CSS", "XML", "RESTful APIs"]
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "SQLite", "MySQL", "MongoDB"]
    },
    {
      name: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub Actions", "SonarQube"]
    },
    {
      name: "Tools & Methodologies",
      skills: ["Linux", "GitHub Copilot", "Agile/Scrum", "Physics", "Mathematics", "Machine Learning"]
    },
    {
      name: "Soft Skills",
      skills: ["Autonomy", "Adaptability", "Technical Communication", "Teamwork", "Problem Solving", "Critical Thinking"]
    },
    {
      name: "Languages",
      skills: ["Spanish (Native)", "English (Fluent - C1)", "German (Basic - B2)"]
    }
  ];

  const projects = [
    {
      title: "Franchise Management System",
      description: "A comprehensive platform developed as Final Degree Project for managing franchises. Features inventory modules, reporting systems, performance analytics, and administrative dashboard with real-time data visualization.",
      tech: ["Odoo", "Python", "PostgreSQL", "JavaScript", "XML"],
      github: "https://github.com/FrancoDellAguila/gelroy",
      external: "#",
      image: gelroyImage
    },
    {
      title: "MapYourWorld",
      description: "Gamified tourism platform that allows users to explore destinations interactively, earn points for visits, and share travel experiences with the community. Features location tracking, user achievements, and social interactions.",
      tech: ["React", "Node.js", "Maps API", "MongoDB", "Express"],
      github: "https://github.com/FrancoDellAguila/MapYourWorld",
      external: "#",
      image: mywImage
    },
    {
      title: "Cell Tracking System",
      description: "An application for analyzing cell movement and behavior from microscopy videos. Features object detection, path tracking, and data visualization for biological research.",
      tech: ["Python", "OpenCV", "PyTorch"],
      github: "https://github.com/FrancoDellAguila/cell-tracking",
      external: "#",
      image: ctImage
    }
  ];

  return (
    <div className="App">
      <header className="header">
  <div className="logo">
    <a href="/" aria-label="home">FD</a>
  </div>
  
  <nav className="nav">
    <ol className="nav-list">
      <li className="nav-item">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-item">
        <a href="#skills" className="nav-link">Skills</a>
      </li>
      <li className="nav-item">
        <a href="#projects" className="nav-link">Projects</a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ol>
  </nav>
  
  <div className="resume-button-container">
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  </div>
</header>

      <main className="main">
        <section className="hero">
          <header className="hero-header">
            <p className="main-text text-fluid">
              Building experiences that click
            </p>
            <h1 className="subtitle">
              Franco Dell Aguila Ureña — Software Engineer
            </h1>
          </header>
          
          <p className="hero-description">
            I'm a software engineer specialized in creating exceptional web applications and digital solutions. 
            Currently focused on developing innovative systems with modern technologies, automation, 
            and scalable architectures.
          </p>
          
          <a className="email-link" href="#contact">
            Get In Touch
          </a>

          <a className="scroll-indicator" href="#about">
            <div className="arrow-down">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </div>
            <span className="scroll-text">Get to know more here</span>
          </a>
        </section>

        <section id="about" className="about">
          <h2 className="numbered-heading">About Me</h2>
          <div className="about-inner">
            <div>
              <div className="about-text">
                <p>
                  Hello! My name is Franco and I enjoy creating things that live on the internet. 
                  My interest in development started in 2016 learning programming basics in Pascal 
                  and later exploring web development with JavaScript.
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working on various projects, 
                  from cell tracking systems to gamified tourism platforms. My main focus 
                  these days is building accessible, inclusive solutions with modern technologies.
                </p>
                <p>
                  I also recently completed my Final Degree Project developing a comprehensive 
                  franchise management system using Odoo.
                </p>
                <p>These are technologies I've been working with recently:</p>
              </div>
              <ul className="skills-list">
                <li>React</li>
                <li>Docker</li>
                <li>Python</li>
                <li>Odoo</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="jobs">
          <h2 className="numbered-heading">Technical Skills</h2>
          <div className="jobs-inner">
            <div className="tab-list" role="tablist" aria-label="Skill category tabs">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  className={`tab-button ${activeSkillCategory === index ? 'active' : ''}`}
                  onClick={() => setActiveSkillCategory(index)}
                  role="tab"
                  aria-selected={activeSkillCategory === index}
                >
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
            <div className="tab-panels">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="tab-panel"
                  role="tabpanel"
                  style={{ display: activeSkillCategory === categoryIndex ? 'block' : 'none' }}
                >
                  <div className="skills-grid">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <span className="skill-name">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2 className="numbered-heading">Things I've Built</h2>
          <ul className="projects-grid">
            {projects.map((project, index) => (
              <li key={index} className="project">
                <div className="project-content">
                  <div>
                    <p className="project-overline">Highlighted Project</p>
                    <h3 className="project-title">
                      <a href={project.external}>{project.title}</a>
                    </h3>
                    <div className="project-description">
                      <p>{project.description}</p>
                    </div>
                    <ul className="project-tech-list">
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="project-links">
                      <a href={project.github} aria-label="GitHub Link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" width="22" height="22">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a href={project.external} aria-label="External Link">
                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link" width="22" height="22">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-image">
                  <a href={project.external}>
                    <img src={project.image} alt={project.title} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="contact">
          <h2 className="numbered-heading">Let's Connect</h2>
          <p>
            <strong>I'm currently open to new opportunities!</strong> My inbox is always open, whether you have a question or just want to say hi.
          </p>
          <p>
            Feel free to reach out about any relevant positions or collaborations. I'll do my best to get back to you!
          </p>

          <div className="contact-social">
            <a href="https://github.com/FrancoDellAguila" aria-label="GitHub" className="contact-social-link" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" width="24" height="24">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/franco-dell-aguila/" aria-label="LinkedIn" className="contact-social-link" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin" width="24" height="24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:francodellaguila@gmail.com" aria-label="Email" className="contact-social-link">
              <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail" width="24" height="24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="credit">
          <p>© 2025 Franco Dell Aguila Ureña. Built with React & deployed on Vercel</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
