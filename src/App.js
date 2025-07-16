import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="profile-image">FD</div>
          <h1 className="name">Franco Dell Aguila</h1>
          <p className="title">Desarrollador Full Stack</p>
          <p className="subtitle">Apasionado por Odoo • Automatización • Tecnologías Web</p>
          
          <div className="social-links">
            <a href="mailto:franco@example.com" className="social-link">📧 Email</a>
            <a href="#" className="social-link">💼 LinkedIn</a>
            <a href="#" className="social-link">🐙 GitHub</a>
          </div>
        </div>
        <div className="scroll-indicator"></div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <h2 className="section-title">Sobre mí</h2>
        <div className="about-content">
          <p className="about-text">
            Desarrollador web especializado en crear soluciones innovadoras y eficientes. 
            Con experiencia en desarrollo full stack y una pasión particular por la 
            automatización y los sistemas de gestión empresarial.
          </p>
          <p className="about-text">
            Siempre buscando nuevos desafíos y oportunidades para aplicar 
            tecnologías modernas en proyectos reales.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Tecnologías</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <span className="skill-icon">⚛️</span>
            <div className="skill-name">React</div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🟨</span>
            <div className="skill-name">JavaScript</div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🐍</span>
            <div className="skill-name">Python</div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🏢</span>
            <div className="skill-name">Odoo</div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🔧</span>
            <div className="skill-name">Node.js</div>
          </div>
          <div className="skill-card">
            <span className="skill-icon">🗄️</span>
            <div className="skill-name">PostgreSQL</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Projects Section */}
      <section className="section projects-section">
        <h2 className="section-title">Proyectos Destacados</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-content">
              <div className="project-icon">📦</div>
              <h3 className="project-title">Sistema de Gestión de Franquicias</h3>
              <p className="project-description">
                Desarrollo de un sistema completo para la gestión de franquicias como 
                Trabajo de Fin de Grado. Incluye gestión de inventarios, reportes y 
                análisis de rendimiento.
              </p>
              <div className="project-tags">
                <span className="tag">Odoo</span>
                <span className="tag">Python</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-icon">🌍</div>
              <h3 className="project-title">MapYourWorld</h3>
              <p className="project-description">
                Plataforma de turismo gamificado que permite a los usuarios explorar 
                destinos de manera interactiva, ganar puntos y compartir experiencias 
                de viaje.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Maps API</span>
                <span className="tag">Node.js</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-content">
              <div className="project-icon">🤖</div>
              <h3 className="project-title">ChocoHub</h3>
              <p className="project-description">
                Herramienta de automatización utilizando GitHub Actions para optimizar 
                flujos de trabajo de desarrollo y despliegue continuo.
              </p>
              <div className="project-tags">
                <span className="tag">GitHub Actions</span>
                <span className="tag">CI/CD</span>
                <span className="tag">DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Contact Section */}
      <section className="section">
        <h2 className="section-title">¿Trabajamos juntos?</h2>
        <div className="contact-content">
          <p className="contact-text">
            Estoy disponible para nuevos proyectos y oportunidades. 
            ¡No dudes en contactarme!
          </p>
          <a href="mailto:franco@example.com" className="contact-button">
            Enviar mensaje
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
