import React, { useEffect, useRef } from 'react';
import './tooplate-stellaris-style.css';

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // ---------- Starfield setup ----------
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.prevX = this.x;
        this.prevY = this.y;
      }

      update() {
        this.z -= 2;
        if (this.z <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.z = 1000;
          this.prevX = this.x;
          this.prevY = this.y;
        }

        this.prevX = this.x;
        this.prevY = this.y;

        this.x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        this.y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
      }

      draw() {
        const opacity = Math.max(0, 1 - this.z / 1000);
        const size = Math.max(0, (1000 - this.z) / 1000 * 3);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2);
        ctx.fillStyle = '#f8fafc';
        ctx.fill();

        if (size > 1) {
          ctx.beginPath();
          ctx.moveTo(this.prevX, this.prevY);
          ctx.lineTo(this.x, this.y);
          ctx.strokeStyle = '#8b5cf6';
          ctx.lineWidth = size * 0.5;
          ctx.stroke();
        }
        ctx.restore();
      }
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < 800; i++) {
        stars.push(new Star());
      }
    }

    function animate() {
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        star.update();
        star.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    // ---------- Cosmic particles ----------
    const createdParticles = [];
    function createCosmicParticles() {
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'cosmic-particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = Math.random() * 4 + 6 + 's';
        document.body.appendChild(particle);
        createdParticles.push(particle);
      }
    }

    // ---------- Tab / Menu / Scroll behaviour ----------
    function setupUI() {
      // Mission tabs
      const missionTabs = document.querySelectorAll('.mission-tab');
      const missionContents = document.querySelectorAll('.mission-content');

      missionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          missionTabs.forEach(t => t.classList.remove('active'));
          missionContents.forEach(c => c.classList.remove('active'));

          tab.classList.add('active');
          const tabId = tab.getAttribute('data-tab');
          const el = document.getElementById(tabId);
          if (el) el.classList.add('active');
        });
      });

      // Mobile menu toggle
      const mobileToggle = document.getElementById('mobile-toggle');
      const navMenu = document.getElementById('nav-menu');
      if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
          mobileToggle.classList.toggle('active');
          navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
          link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
          });
        });
      }

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          const href = this.getAttribute('href');
          if (!href || href === '#') return;
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Navbar scroll effects and fade in
      function onScroll() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
          navbar && navbar.classList.add('scrolled');
        } else {
          navbar && navbar.classList.remove('scrolled');
        }

        const sections = document.querySelectorAll('.fade-in');
        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            section.classList.add('visible');
          }
        });
      }

      window.addEventListener('scroll', onScroll);

      // Contact form demo submit
      const contactForm = document.querySelector('.contact-form');
      function onSubmit(e) {
        e.preventDefault();
        alert('Research proposal submitted! 🌌 (This is a demo)');
      }
      contactForm && contactForm.addEventListener('submit', onSubmit);

      // Active menu highlighting using IntersectionObserver
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul a');

      const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -70% 0px',
        threshold: 0
      };

      function onIntersect(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`nav ul a[href="#${activeId}"]`);
            if (activeLink) activeLink.classList.add('active');
          }
        });
      }

      const observer = new IntersectionObserver(onIntersect, observerOptions);
      sections.forEach(section => observer.observe(section));

      // set home active on load
      if (navLinks && navLinks[0]) navLinks[0].classList.add('active');

      // return cleanup function for scroll/form listeners when needed
      return () => {
        window.removeEventListener('scroll', onScroll);
        contactForm && contactForm.removeEventListener('submit', onSubmit);
        // disconnect IntersectionObserver
        observer && observer.disconnect();
      };
    }

    // ---------- Initialize ----------
    resizeCanvas();
    initStars();
    animate();
    createCosmicParticles();

    // Setup UI and capture cleanup
    const cleanupUI = setupUI();

    // Handle window resize
    function handleResize() {
      resizeCanvas();
      initStars();
    }
    window.addEventListener('resize', handleResize);

    // cleanup on unmount
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      // remove created cosmic particles
      createdParticles.forEach(p => p.remove());
      // cleanup UI listeners
      cleanupUI && cleanupUI();
    };
  }, []);

  return (
    <>
      <canvas id="starfield" ref={canvasRef}></canvas>

      <nav id="navbar">
        <div className="nav-container">
          <a href="#home" className="logo-container">
            <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.6" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#f59e0b" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="#7c3aed" />

              <circle cx="85" cy="50" r="4" fill="#f59e0b">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="8s" repeatCount="indefinite" />
              </circle>
              <circle cx="15" cy="50" r="3" fill="#ec4899">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="-360 50 50" dur="12s" repeatCount="indefinite" />
              </circle>

              <circle cx="50" cy="50" r="8" fill="#f59e0b" opacity="0.3" />
            </svg>
            <span className="logo-text">STELLARIS</span>
          </a>

          <div className="mobile-menu-toggle" id="mobile-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="nav-menu" id="nav-menu">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#missions">MISSIONS</a></li>
              <li><a href="#equipment">EQUIPMENT</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="stars-layer"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>
        <div className="space-orb"></div>

        <div className="shooting-star" style={{ ['--delay']: '0s', ['--top']: '10%', ['--left']: '10%' }}></div>
        <div className="shooting-star" style={{ ['--delay']: '1.5s', ['--top']: '30%', ['--left']: '60%' }}></div>
        <div className="shooting-star" style={{ ['--delay']: '3s', ['--top']: '20%', ['--left']: '80%' }}></div>
        <div className="shooting-star" style={{ ['--delay']: '4.5s', ['--top']: '60%', ['--left']: '30%' }}></div>
        <div className="shooting-star" style={{ ['--delay']: '6s', ['--top']: '80%', ['--left']: '70%' }}></div>

        <div className="hero-content">
          <h1 className="cosmic-title">DR. ALEX NOVA</h1>
          <p className="subtitle">Exoplanet Researcher & Deep Space Pioneer</p>
        </div>

        <a href="#about" className="scroll-btn">
          <div className="scroll-btn-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </div>
        </a>
      </section>

      <section id="about" className="fade-in">
        <h2 className="section-title">EXPLORER PROFILE</h2>
        <div className="about-section">
          <div className="about-hero">
            <h3>Pioneering the Frontiers of Space</h3>
            <p className="about-description">Leading humanity's quest to understand our place in the cosmos through cutting-edge research in exoplanet discovery, astrobiology, and interstellar exploration. With over 15 years of experience in space science, I've dedicated my career to unlocking the mysteries of distant worlds and searching for signs of life beyond Earth.</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <span className="about-card-icon">🔬</span>
              <h4>Research Excellence</h4>
              <p>Published over 120 peer-reviewed papers on exoplanet atmospheres, habitability zones, and biosignature detection methods.</p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">🛰️</span>
              <h4>Mission Leadership</h4>
              <p>Principal investigator on multiple NASA and ESA missions, including the TRAPPIST system exploration and Mars sample analysis.</p>
            </div>

            <div className="about-card">
              <span className="about-card-icon">🌌</span>
              <h4>Discovery Pioneer</h4>
              <p>Co-discoverer of 47 confirmed exoplanets, including three potentially habitable super-Earths in the Goldilocks zone.</p>
            </div>
          </div>

          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">47</div>
              <div className="achievement-label">Exoplanets Discovered</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">1,247</div>
              <div className="achievement-label">Research Hours</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">23</div>
              <div className="achievement-label">Awards Received</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">8</div>
              <div className="achievement-label">Active Missions</div>
            </div>
          </div>
        </div>
      </section>

      <section id="missions" className="missions-section fade-in">
        <div className="missions-container">
          <h2 className="section-title">MISSION OPERATIONS</h2>

          <div className="mission-tabs">
            <button className="mission-tab active" data-tab="exploration">Deep Space Exploration</button>
            <button className="mission-tab" data-tab="research">Research Projects</button>
            <button className="mission-tab" data-tab="discovery">Recent Discoveries</button>
            <button className="mission-tab" data-tab="future">Future Missions</button>
          </div>

          <div className="mission-content active" id="exploration">
            <div className="mission-grid">
              <div className="mission-card">
                <h4>Kepler-442b Investigation</h4>
                <p>Comprehensive atmospheric analysis of this super-Earth located 1,206 light-years away. Studying potential biosignatures and atmospheric composition using advanced spectroscopy techniques.</p>
                <span className="mission-status">Active</span>
              </div>
              <div className="mission-card">
                <h4>Proxima Centauri Survey</h4>
                <p>Long-term monitoring mission of our nearest stellar neighbor, focusing on Proxima b's habitability potential and atmospheric dynamics during stellar flare events.</p>
                <span className="mission-status">Ongoing</span>
              </div>
              <div className="mission-card">
                <h4>Europa Deep Dive</h4>
                <p>Robotic exploration beneath Europa's ice sheet, searching for microbial life in the subsurface ocean and analyzing water samples from geysers.</p>
                <span className="mission-status">Planning</span>
              </div>
            </div>
          </div>

          <div className="mission-content" id="research">
            <div className="mission-grid">
              <div className="mission-card">
                <h4>Atmospheric Modeling</h4>
                <p>Developing advanced computer models to predict exoplanet atmospheric conditions and identify optimal candidates for follow-up observations with next-generation telescopes.</p>
                <span className="mission-status">Active</span>
              </div>
              <div className="mission-card">
                <h4>Biosignature Database</h4>
                <p>Creating comprehensive catalog of potential biological markers that could indicate life on distant worlds, including both Earth-like and exotic biochemistries.</p>
                <span className="mission-status">Research</span>
              </div>
              <div className="mission-card">
                <h4>Interstellar Communication</h4>
                <p>Designing protocols for potential communication with extraterrestrial intelligence, including mathematical languages and universal concepts.</p>
                <span className="mission-status">Development</span>
              </div>
            </div>
          </div>

          <div className="mission-content" id="discovery">
            <div className="mission-grid">
              <div className="mission-card">
                <h4>TOI-715b Confirmation</h4>
                <p>Recently confirmed this Earth-sized exoplanet in the habitable zone of a nearby red dwarf star, making it a prime candidate for atmospheric studies.</p>
                <span className="mission-status">Confirmed</span>
              </div>
              <div className="mission-card">
                <h4>Water Vapor Detection</h4>
                <p>First detection of water vapor in the atmosphere of K2-18b, a sub-Neptune exoplanet in its star's habitable zone, using Hubble Space Telescope data.</p>
                <span className="mission-status">Published</span>
              </div>
              <div className="mission-card">
                <h4>Multi-Planet System</h4>
                <p>Discovery of a seven-planet system around TRAPPIST-1, with three planets potentially habitable and showing signs of atmospheric retention.</p>
                <span className="mission-status">Complete</span>
              </div>
            </div>
          </div>

          <div className="mission-content" id="future">
            <div className="mission-grid">
              <div className="mission-card">
                <h4>James Webb Follow-up</h4>
                <p>Planned observations using JWST to study atmospheric composition of newly discovered potentially habitable exoplanets, focusing on oxygen and methane detection.</p>
                <span className="mission-status">Scheduled</span>
              </div>
              <div className="mission-card">
                <h4>Breakthrough Starshot</h4>
                <p>Collaboration on developing ultra-light nanocrafts capable of reaching Alpha Centauri within 20 years to capture close-up images of Proxima b.</p>
                <span className="mission-status">Planning</span>
              </div>
              <div className="mission-card">
                <h4>Mars Sample Return</h4>
                <p>Leading the astrobiology analysis team for the Mars Sample Return mission, searching for ancient microbial life in carefully selected rock samples.</p>
                <span className="mission-status">Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="fade-in">
        <h2 className="section-title">RESEARCH INSTRUMENTS</h2>
        <div className="equipment-container">
          <div className="equipment-item"><span>Hubble Telescope</span></div>
          <div className="equipment-item"><span>James Webb</span></div>
          <div className="equipment-item"><span>Spectroscopy Lab</span></div>
          <div className="equipment-item"><span>Radio Array</span></div>
          <div className="equipment-item"><span>AI Analysis</span></div>
          <div className="equipment-item"><span>Quantum Computing</span></div>
        </div>
      </section>

      <section id="contact" className="fade-in">
        <h2 className="section-title">RESEARCH COLLABORATION</h2>
        <form className="contact-form">
          <div className="form-group"><input type="text" placeholder="Principal Investigator Name" required /></div>
          <div className="form-group"><input type="email" placeholder="Institution Email" required /></div>
          <div className="form-group"><textarea rows="5" placeholder="Research Proposal or Collaboration Inquiry" required></textarea></div>
          <button type="submit" className="launch-btn">SUBMIT PROPOSAL</button>
        </form>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Research Areas</h3>
            <ul>
              <li><a href="#">Exoplanet Discovery</a></li>
              <li><a href="#">Astrobiology</a></li>
              <li><a href="#">Atmospheric Analysis</a></li>
              <li><a href="#">SETI Research</a></li>
              <li><a href="#">Space Technology</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Publications</h3>
            <ul>
              <li><a href="#">Nature Astronomy</a></li>
              <li><a href="#">Astrophysical Journal</a></li>
              <li><a href="#">Science Magazine</a></li>
              <li><a href="#">Research Papers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Professional Network</h3>
            <p style={{ color: 'var(--star-silver)', marginBottom: 15 }}>Connect with the global space research community</p>
            <div className="social-links">
              <a href="#" aria-label="ResearchGate"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L3.09 8.26l1.82 1.28L12 4.8l7.09 4.74 1.82-1.28L12 2M12 7L2 12l10 5 10-5-10-5" /></svg></a>
              <a href="#" aria-label="NASA Collaboration"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82" /></svg></a>
              <a href="#" aria-label="Academic Network"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6" /></svg></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2048 Dr. Alex Nova - Exoplanet Research Portfolio. Searching for life among the stars. Design: <a href="https://www.tooplate.com" target="_blank" rel="noopener noreferrer">Tooplate</a></p>
        </div>
      </footer>
    </>
  );
}
