"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    // Scroll Effects for Navbar
    const navbar = document.querySelector('.glass-nav');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for Scroll Animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    // Trigger initial check so top elements appear immediately
    requestAnimationFrame(() => {
        setTimeout(() => {
            const topFaders = document.querySelectorAll('.hero .fade-in');
            topFaders.forEach(fader => {
                fader.classList.add('appear');
            });
        }, 150);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      appearOnScroll.disconnect();
    };
  }, []);

  return (
    <>
      {/* Abstract background blobs for premium feel */}
      <div className="blob-bg"></div>
      <div className="blob-bg blob-2"></div>
      
      <header className="glass-nav">
          <nav>
              <div className="logo"><Link href="/">Agas</Link></div>
              <ul className="nav-links">
                  <li><a href="#about">About</a></li>
                  <li><a href="#tech-stack">Tech Stack</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
          </nav>
      </header>

      <main>
          <section id="about" className="hero">
              <div className="hero-grid">
                <div className="hero-content fade-in">
                    <p className="eyebrow">Finance &amp; tax professional · software builder</p>
                    <h1>Hi, {"I'm"} <span className="highlight">Agas</span></h1>
                    <p className="subtitle">I build practical software, automation, and internal systems that make complex work easier to manage.</p>
                    <div className="cta-group">
                        <a href="#portfolio" className="btn btn-primary">View My Work <span aria-hidden="true">↗</span></a>
                        <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                    </div>
                    <div className="hero-proof">
                        <span><strong>20+</strong> public repositories</span>
                        <span><strong>4</strong> active builds</span>
                    </div>
                </div>

                <aside className="hero-panel glass-card fade-in">
                    <div className="hero-panel-top">
                        <span className="status-dot"></span>
                        <span>Currently building</span>
                    </div>
                    <div className="hero-panel-line"></div>
                    <p className="hero-panel-index">01 / 03</p>
                    <h2>Systems that connect numbers, people, and action.</h2>
                    <p className="hero-panel-copy">From tax operations to internal workflows, I turn messy processes into tools people can actually use.</p>
                    <div className="hero-panel-tags">
                        <span>Finance systems</span>
                        <span>Automation</span>
                        <span>Web apps</span>
                    </div>
                </aside>
              </div>
          </section>

          <section id="tech-stack" className="section">
              <div className="section-heading fade-in">
                <p className="section-kicker">The tools behind the work</p>
                <h2 className="section-title">Tech Stack</h2>
                <p className="section-lede">A practical stack for shipping internal products, polished web experiences, and useful automation.</p>
              </div>
              <div className="tech-grid fade-in">
                  <div className="tech-card js">TypeScript</div>
                  <div className="tech-card js">JavaScript</div>
                  <div className="tech-card js">Next.js</div>
                  <div className="tech-card react">React</div>
                  <div className="tech-card node">Node.js</div>
                  <div className="tech-card node">Go</div>
                  <div className="tech-card react">Python</div>
                  <div className="tech-card react">PostgreSQL</div>
                  <div className="tech-card html">HTML & CSS</div>
              </div>
          </section>

          <section id="portfolio" className="section">
              <div className="section-heading fade-in">
                <p className="section-kicker">Selected work</p>
                <h2 className="section-title">Projects with a purpose</h2>
                <p className="section-lede">A mix of working systems, product concepts, and experiments across finance, operations, and everyday life.</p>
              </div>
              <div className="portfolio-grid fade-in">
                  {/* Bupot PANRB Portfolio Card */}
                  <div className="portfolio-card portfolio-card-featured glass-card">
                      <div className="card-image bupot-img">
                           <div className="card-image-overlay">
                              <span>Internal System</span>
                           </div>
                      </div>
                      <div className="card-content">
                          <p className="project-number">01 · Featured build</p>
                          <h3>Bupot PANRB</h3>
                          <p>A monitoring system for withholding-tax documents, designed to make document status, reporting, and operational follow-up easier to manage.</p>
                          <div className="tags">
                              <span>Next.js</span>
                              <span>TypeScript</span>
                              <span>Prisma</span>
                              <span>PostgreSQL</span>
                          </div>
                          <div className="button-group">
                              <a href="https://github.com/agas007/bupot-panrb" target="_blank" className="btn btn-outline" rel="noreferrer">View Repository <span aria-hidden="true">↗</span></a>
                          </div>
                      </div>
                  </div>

                  {/* Gym Tracker Portfolio Card */}
                  <div className="portfolio-card glass-card">
                      <div className="card-image gym-tracker-img">
                           <div className="card-image-overlay">
                              <span>Fitness App</span>
                           </div>
                      </div>
                      <div className="card-content">
                          <p className="project-number">02 · Product concept</p>
                          <h3>Gym Tracker</h3>
                          <p>A role-based fitness management concept for gym owners, instructors, and students, with workout planning, progress tracking, and dashboard views.</p>
                          <div className="tags">
                              <span>Next.js</span>
                              <span>Tailwind CSS</span>
                              <span>Node.js</span>
                              <span>Frontend</span>
                          </div>
                          <div className="button-group">
                              <a href="/gym-tracker" target="_blank" className="btn btn-outline" rel="noreferrer">Open Application</a>
                              <a href="https://github.com/agas007/gym-tracker" target="_blank" className="btn btn-outline" rel="noreferrer">Open Repository</a>
                          </div>
                      </div>
                  </div>

                  {/* Perjalanan Dinas Portfolio Card */}
                  <div className="portfolio-card glass-card">
                      <div className="card-image project-2-img">
                           <div className="card-image-overlay">
                               <span>Enterprise App</span>
                           </div>
                      </div>
                      <div className="card-content">
                          <p className="project-number">03 · Workflow concept</p>
                          <h3>Perjalanan Dinas</h3>
                          <p>An internal workflow concept for official travel requests, approvals, notifications, reporting, and administrative oversight.</p>
                          <div className="tags">
                              <span>Enterprise</span>
                              <span>Angular</span>
                              <span>Node.js</span>
                              <span>SQL</span>
                              <span>Laravel</span>
                              <span>Frontend</span>
                          </div>
                          <div className="button-group">
                              <a href="/perjalanan-dinas" target="_blank" className="btn btn-outline" rel="noreferrer">Open Application</a>
                          </div>
                      </div>
                  </div>

                  {/* TAT & Partners Portfolio Card */}
                  <div className="portfolio-card glass-card">
                      <div className="card-image tat-partners-img">
                           <div className="card-image-overlay">
                               <span>Corporate Web</span>
                           </div>
                      </div>
                      <div className="card-content">
                          <p className="project-number">04 · Client experience</p>
                          <h3>TAT & Partners</h3>
                          <p>A corporate web experience for a tax consulting firm, presenting services, academy programs, partners, clients, and a task-management portal concept.</p>
                          <div className="tags">
                              <span>Premium</span>
                              <span>Next.js</span>
                              <span>Prisma</span>
                              <span>SQLite</span>
                              <span>Portal</span>
                              <span>Tailwind</span>
                          </div>
                          <div className="button-group">
                              <a href="/tat-webpage" target="_blank" className="btn btn-outline" rel="noreferrer">Open Application</a>
                              <a href="https://github.com/agas007/tat-webpage" target="_blank" className="btn btn-outline" rel="noreferrer">Open Repository</a>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section id="contact" className="section">
              <div className="section-heading fade-in">
                <p className="section-kicker">Have something in mind?</p>
                <h2 className="section-title">Let&apos;s make it useful.</h2>
              </div>
              <div className="contact-card glass-card fade-in">
                  <p>Have a project involving finance workflows, tax operations, internal tools, or web applications? Let&apos;s connect.</p>
                  <div className="contact-actions">
                      <a href="mailto:agastyaarnanda@gmail.com" className="btn btn-primary">Email Me</a>
                      <a href="https://www.linkedin.com/in/agastyaarnanda/" className="btn btn-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
                      <a href="https://github.com/agas007" className="btn btn-secondary" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
              </div>
          </section>
      </main>

      <footer>
          <p>&copy; 2026 Agas. Finance, tax, and software.</p>
      </footer>
    </>
  );
}
