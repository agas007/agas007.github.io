"use client";

import { useEffect } from "react";

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
              <div className="logo"><a href="/">Agas</a></div>
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
              <div className="hero-content fade-in">
                  <h1>Hi, {"I'm"} <span className="highlight">Agas</span></h1>
                  <p className="subtitle">Building sleek, performant, and premium web applications.</p>
                  <div className="cta-group">
                      <a href="#portfolio" className="btn btn-primary">View My Work</a>
                      <a href="#contact" className="btn btn-secondary">Get in Touch</a>
                  </div>
              </div>
          </section>

          <section id="tech-stack" className="section">
              <h2 className="section-title fade-in">Tech Stack</h2>
              <div className="tech-grid fade-in">
                  <div className="tech-card js">JavaScript</div>
                  <div className="tech-card js">TypeScript</div>
                  <div className="tech-card js">Next.js</div>
                  <div className="tech-card js">Angular</div>
                  <div className="tech-card node">Node.js</div>
                  <div className="tech-card react">React</div>
                  <div className="tech-card react">Express</div>
                  <div className="tech-card react">SQL / NoSQL</div>
                  <div className="tech-card html">HTML & CSS</div>
              </div>
          </section>

          <section id="portfolio" className="section">
              <h2 className="section-title fade-in">Portfolio</h2>
              <div className="portfolio-grid fade-in">
                  {/* Gym Tracker Portfolio Card */}
                  <div className="portfolio-card glass-card">
                      <div className="card-image gym-tracker-img">
                           <div className="card-image-overlay">
                              <span>Fitness App</span>
                           </div>
                      </div>
                      <div className="card-content">
                          <h3>Gym Tracker</h3>
                          <p>A comprehensive workout tracking application built with Jamstack principles. Includes user management, exercise tracking, and real-time statistics.</p>
                          <div className="tags">
                              <span>Jamstack</span>
                              <span>API</span>
                              <span>Node.js</span>
                              <span>Frontend</span>
                          </div>
                          <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
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
                          <h3>Perjalanan Dinas</h3>
                          <p>A comprehensive system to manage official corporate travel requests, internal approval processes, and dynamic frontend workflows.</p>
                          <div className="tags">
                              <span>Enterprise</span>
                              <span>React</span>
                              <span>Express</span>
                          </div>
                          <a href="/perjalanan-dinas" target="_blank" className="btn btn-outline" rel="noreferrer">Open Application</a>
                      </div>
                  </div>
              </div>
          </section>

          <section id="contact" className="section">
              <h2 className="section-title fade-in">Get In Touch</h2>
              <div className="contact-card glass-card fade-in">
                  <p>{"I'm"} currently looking for new opportunities. Whether you have a question or just want to say hi, {"I'll"} try my best to get back to you!</p>
                  <a href="mailto:agastyaarnanda@gmail.com" className="btn btn-primary">Say Hello</a>
              </div>
          </section>
      </main>

      <footer>
          <p>&copy; 2026 Agas. Built with ❤️ and Modern Web Technologies.</p>
      </footer>
    </>
  );
}
