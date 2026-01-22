import './App.css'

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Auth & Security', 'WebSockets'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma'],
  },
  {
    title: 'DevOps & Tools',
    items: ['Docker', 'GitHub Actions', 'AWS', 'Vercel', 'Testing', 'CI/CD'],
  },
]

const languages = [
  'JavaScript (ES6+)',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'SQL',
]

const projects = [
  {
    name: 'Shop-ease',
    desc: 'Modern e-commerce storefront with curated collections, smooth cart flow, and responsive UX.',
    tags: ['Next.js', 'UI', 'Commerce', 'Responsive'],
    url: 'https://shop-ease-one-zeta.vercel.app/',
  },
  {
    name: 'Movie Search',
    desc: 'Fast movie finder with clean listings, details view, and quick filters for better discovery.',
    tags: ['Next.js', 'API', 'Search', 'Responsive'],
    url: 'https://movie-search-iota.vercel.app/',
  },
]

function App() {
  return (
    <div className="page">
      <div className="glow glow-one" />
      <div className="glow glow-two" />

      <header className="nav">
        <div className="logo-mark">
          <span>M</span>aya
        </div>
        <nav className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button ghost" href="#contact">
          Let&apos;s talk
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow fade-up" style={{ '--delay': '0.05s' }}>
            Software Developer • Full Stack • UI/UX
          </p>
          <h1 className="title fade-up" style={{ '--delay': '0.1s' }}>
            Building elegant, high-performance web experiences with modern
            technologies.
          </h1>
          <p className="subtitle fade-up" style={{ '--delay': '0.2s' }}>
            I craft delightful interfaces, scalable backends, and cloud-ready
            products. Focused on clean code, crisp visuals, and measurable impact.
          </p>
          <div className="hero-actions fade-up" style={{ '--delay': '0.3s' }}>
            <a className="button primary" href="#projects">
              View projects
            </a>
          </div>
          <div className="hero-stats fade-up" style={{ '--delay': '0.4s' }}>
            <div>
              <strong>40+</strong>
              <span>Projects shipped</span>
            </div>
            <div>
              <strong>15</strong>
              <span>Industries served</span>
            </div>
          </div>
        </div>
        <div className="hero-card fade-up" style={{ '--delay': '0.25s' }}>
          <div className="status">
            <span className="dot" />
            Available for freelance
          </div>
          <h3>Hi, I&apos;m Maya</h3>
          <p>
            I specialize in React, Next.js, and Node. I love turning complex problems into
            simple, beautiful experiences.
          </p>
          <div className="chip-row">
            {languages.map((language) => (
              <span className="chip" key={language}>
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-header">
          <h2>Featured projects</h2>
          <p>Case studies that highlight product design, performance, and scale.</p>
        </div>
        <div className="grid projects-grid">
          {projects.map((project) => (
            <article className="card" key={project.name}>
              <div className="card-top">
                <h3>{project.name}</h3>
                <span className="badge">Live</span>
              </div>
              <p>{project.desc}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="link-button" href={project.url} target="_blank" rel="noreferrer">
                View project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="skills">
        <div className="section-header">
          <h2>Technology stack</h2>
          <p>Tools, platforms, and languages I use to build production-ready apps.</p>
        </div>
        <div className="grid skill-grid">
          {skills.map((skill) => (
            <div className="card soft" key={skill.title}>
              <h3>{skill.title}</h3>
              <div className="pill-grid">
                {skill.items.map((item, index) => (
                  <span className="pill fade-up" key={item} style={{ '--delay': `${0.05 * index}s` }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta" id="contact">
        <div className="cta-content">
          <h2>Let&apos;s build your next product</h2>
          <p>
            Ready to launch, redesign, or scale? I can help with strategy, execution,
            and long-term growth.
          </p>
        </div>
        <div className="cta-actions">
          <a className="button primary" href="mailto:mayamlelemba919@gmail.com">
            mayamlelemba919@gmail.com
          </a>
          <div className="contact-meta">
            <span>Based in Remote / GMT+0</span>
            <span>Open to full-time & contract</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 Maya </span>
        <div className="footer-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Dribbble</a>
        </div>
      </footer>
    </div>
  )
}

export default App
