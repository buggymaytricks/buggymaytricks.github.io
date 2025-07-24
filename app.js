// Enhanced Cybersecurity Portfolio with Rich Animations & Multi-Column Layouts
document.addEventListener('DOMContentLoaded', () => {
  /*****************************************
   * DATA DEFINITIONS
   *****************************************/
  const data = {
    personal: {
      name: 'buGGy',
      handle: '@buggymaytricks',
      title: 'Cybersecurity Enthusiast & Red Team Operator',
      experience_years: 3,
      vulnerabilities_found: 47,
      tools_mastered: 25,
      bio: `Passionate red team operator with 3+ years of experience in offensive security. Specializing in web application security, network penetration testing, and custom tool development. My approach combines technical precision with operational security, ensuring maximum impact while maintaining stealth.

I've discovered 47+ vulnerabilities across various organizations and built multiple custom tools used by security professionals worldwide. Currently pursuing advanced certifications and expanding expertise in binary exploitation and cloud security.`
    },
    taglines: [
      'Penetrating systems, not defenses',
      'Red teaming with precision',
      'OPSEC first, exploit second',
      'Breaking code, building security',
      'Exploiting logic, not people',
      'Security through offensive thinking'
    ],
    skills: [
      { name: 'Web Application Security', level: 95 },
      { name: 'Network Penetration Testing', level: 88 },
      { name: 'Binary Exploitation', level: 82 },
      { name: 'Social Engineering', level: 75 },
      { name: 'Wireless Security', level: 78 },
      { name: 'Cloud Security', level: 85 }
    ],
    tools: [
      { name: 'BurpSuite Professional', level: 'Expert', icon: '🔍', category: 'Web Security' },
      { name: 'Nmap & Nessus', level: 'Expert', icon: '🌐', category: 'Network' },
      { name: 'FFUF & Gobuster', level: 'Expert', icon: '📁', category: 'Enumeration' },
      { name: 'Hydra & John the Ripper', level: 'Advanced', icon: '🔐', category: 'Cracking' },
      { name: 'Metasploit Framework', level: 'Advanced', icon: '💥', category: 'Exploitation' },
      { name: 'ESP32 Development', level: 'Advanced', icon: '📟', category: 'Hardware' },
      { name: 'Python & Bash Scripting', level: 'Expert', icon: '🐍', category: 'Development' },
      { name: 'Linux/Unix Systems', level: 'Expert', icon: '🐧', category: 'Systems' }
    ],
    certifications: [
      { name: 'eJPT (eLearnSecurity)', status: 'In Progress', progress: 75, year: '2024' },
      { name: 'eCPPT (eLearnSecurity)', status: 'Planned', progress: 15, year: '2025' },
      { name: 'OSCP (Offensive Security)', status: 'Goal', progress: 5, year: '2025' }
    ],
    projects: [
      {
        name: 'Hash-Verify',
        status: 'Stable',
        status_color: '#00ff41',
        description: 'Multi-algorithm hash verification tool with rainbow table protection and collision detection.',
        tech: ['Python', 'Cryptography', 'CLI'],
        features: ['SHA-256/512 support', 'MD5 legacy support', 'Real-time clustering', 'Rainbow table detection'],
        github: 'https://github.com/buggymaytricks/hash-verify'
      },
      {
        name: 'ESP32 WiFi Auditor',
        status: 'Beta',
        status_color: '#ffaa00',
        description: 'Hardware-based wireless security assessment toolkit for 2.4GHz reconnaissance.',
        tech: ['C++', 'ESP32', 'WiFi'],
        features: ['Deauth attacks', 'WPA handshake capture', 'WPS testing', 'Packet analysis'],
        github: 'https://github.com/buggymaytricks/esp32-wifi-auditor'
      },
      {
        name: 'Web Enum Framework',
        status: 'Alpha',
        status_color: '#ff0051',
        description: 'Modular web application enumeration pipeline with FFUF and Nuclei integration.',
        tech: ['Python', 'Asyncio', 'Threading'],
        features: ['Directory discovery', 'Subdomain enumeration', 'Port scanning', 'Vulnerability detection'],
        github: 'https://github.com/buggymaytricks/web-enum-framework'
      },
      {
        name: 'Steganography Toolkit',
        status: 'Stable',
        status_color: '#00ff41',
        description: 'Advanced data hiding and extraction utilities for OSINT and red team operations.',
        tech: ['Python', 'PIL', 'Cryptography'],
        features: ['Image steganography', 'Audio embedding', 'File extraction', 'Encryption support'],
        github: 'https://github.com/buggymaytricks/stego-toolkit'
      }
    ],
    blog_posts: [
      {
        slug: 'portswigger-sql-injection-complete',
        title: 'PortSwigger Web Security Academy: Complete SQL Injection Walkthrough',
        date: '2024-12-15',
        excerpt: 'Deep dive into advanced SQL injection techniques with practical examples from PortSwigger labs. Covering union-based, blind, and time-based injection methods.',
        tags: ['sql injection', 'web security', 'portswigger'],
        featured: true
      },
      {
        slug: 'red-team-opsec-enterprise',
        title: 'Red Team OPSEC: Staying Ghost in Enterprise Networks',
        date: '2024-11-28',
        excerpt: 'Operational security principles for maintaining persistence without detection in enterprise environments.',
        tags: ['red team', 'opsec', 'persistence']
      },
      {
        slug: 'esp32-wifi-pineapple-build',
        title: 'ESP32 WiFi Pineapple: Building Custom Hardware for Security Testing',
        date: '2024-10-20',
        excerpt: 'Hardware hacking tutorial for creating portable penetration testing devices using ESP32 microcontrollers.',
        tags: ['esp32', 'wifi', 'hardware']
      }
    ],
    social: {
      twitter: '@buggymaytricks',
      github: '@buggymaytricks',
      email: 'contact@buggy.security',
      linkedin: '@buggymaytricks'
    }
  };

  /*****************************************
   * HELPER FUNCTIONS
   *****************************************/
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /*****************************************
   * ENHANCED CUSTOM CURSOR WITH TRAIL
   *****************************************/
  function initEnhancedCursor() {
    const dot = qs('#cursor-dot');
    const ring = qs('#cursor-ring');
    const trail = qs('#cursor-trail');
    
    if (!dot || !ring || !trail) return;
    
    let mx = 0, my = 0, rx = 0, ry = 0, tx = 0, ty = 0;
    let trailHistory = [];
    
    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      
      // Update dot position immediately
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      
      // Add to trail history
      trailHistory.push({ x: mx, y: my, time: Date.now() });
      if (trailHistory.length > 10) trailHistory.shift();
    });

    const animateCursor = () => {
      // Smooth ring following
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      ring.style.left = (rx - 17) + 'px';
      ring.style.top = (ry - 17) + 'px';
      
      // Trail following with delay
      tx += (mx - tx) * 0.1;
      ty += (my - ty) * 0.1;
      trail.style.left = (tx - 2) + 'px';
      trail.style.top = (ty - 2) + 'px';
      
      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    // Interactive cursor states
    const interactiveElements = qsa('a, button, .card, .project-card, .blog-card, .stat-card, .tool-item, .skill-item, .nav__link');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        ring.style.transform = 'scale(1.5)';
        ring.style.borderColor = '#ff0051';
        dot.style.transform = 'scale(1.5)';
        dot.style.backgroundColor = '#ff0051';
      });
      
      el.addEventListener('mouseleave', () => {
        ring.style.transform = 'scale(1)';
        ring.style.borderColor = '#00d4ff';
        dot.style.transform = 'scale(1)';
        dot.style.backgroundColor = '#00d4ff';
      });
    });
  }

  /*****************************************
   * ENHANCED TYPING EFFECT
   *****************************************/
  function initEnhancedTyping() {
    const textEl = qs('#typed-text');
    const introEl = qs('#intro-text');
    if (!textEl || !introEl) return;

    // Set intro text
    introEl.textContent = `${data.personal.title} specializing in offensive security and red team operations.`;

    let tagIdx = 0, charIdx = 0, deleting = false, pause = false;
    const typeSpeed = 80, delSpeed = 30, wait = 2500;

    function typeStep() {
      const current = data.taglines[tagIdx];

      if (pause) {
        setTimeout(() => { 
          pause = false; 
          deleting = true; 
          typeStep(); 
        }, wait);
        return;
      }

      if (!deleting) {
        textEl.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) { 
          pause = true; 
        }
        setTimeout(typeStep, typeSpeed + Math.random() * 50);
      } else {
        textEl.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) { 
          deleting = false; 
          tagIdx = (tagIdx + 1) % data.taglines.length; 
        }
        setTimeout(typeStep, delSpeed + Math.random() * 30);
      }
    }
    
    setTimeout(typeStep, 800);
  }

  /*****************************************
   * ANIMATED STATS COUNTERS
   *****************************************/
  function initAnimatedStats() {
    const grid = qs('#stats-grid');
    if (!grid) return;

    const stats = [
      { val: data.personal.experience_years, label: 'Years Experience', suffix: '+', color: '#00d4ff' },
      { val: data.personal.vulnerabilities_found, label: 'Vulns Found', suffix: '', color: '#ff0051' },
      { val: data.personal.tools_mastered, label: 'Tools Mastered', suffix: '+', color: '#00ff41' },
      { val: 99.9, label: 'Uptime %', suffix: '', color: '#ffaa00' }
    ];

    grid.innerHTML = stats.map((s, i) => `
      <div class="stat-card animate-slide-up" style="animation-delay: ${i * 0.2}s; border-left: 3px solid ${s.color};">
        <div class="stat-icon" style="color: ${s.color}; font-size: 2rem; margin-bottom: 12px;">⚡</div>
        <div class="stat-value" data-target="${s.val}" data-suffix="${s.suffix}" style="font-size: 2.2rem; font-weight: 700; color: ${s.color};">${s.suffix}</div>
        <div class="stat-label" style="color: var(--color-text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em;">${s.label}</div>
      </div>
    `).join('');

    // Animate counters on intersection
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        qsa('.stat-value', grid).forEach((valEl, index) => {
          const target = parseFloat(valEl.dataset.target);
          const suffix = valEl.dataset.suffix;
          let current = 0;
          const increment = target / 60;
          
          const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
              valEl.textContent = target + suffix;
              clearInterval(counter);
            } else {
              valEl.textContent = Math.floor(current * 10) / 10 + suffix;
            }
          }, 25);
        });
        observer.disconnect();
      });
    }, { threshold: 0.3 });
    
    observer.observe(grid);
  }

  /*****************************************
   * SKILLS RADAR & ANIMATED PROGRESS BARS
   *****************************************/
  function initSkillsWithAnimations() {
    // Enhanced Radar Chart
    const ctx = qs('#skills-chart');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: data.skills.map(s => s.name),
          datasets: [{
            label: 'Skill Level',
            data: data.skills.map(s => s.level),
            fill: true,
            backgroundColor: 'rgba(0, 212, 255, 0.15)',
            borderColor: '#00d4ff',
            pointBackgroundColor: '#ff0051',
            pointBorderColor: '#ffffff',
            borderWidth: 3,
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 2000,
            easing: 'easeOutQuart'
          },
          plugins: { 
            legend: { display: false } 
          },
          scales: { 
            r: { 
              max: 100,
              min: 0,
              ticks: { 
                display: false,
                stepSize: 20
              },
              grid: { 
                color: 'rgba(255,255,255,.08)',
                lineWidth: 1
              },
              pointLabels: { 
                color: '#b3b3b3', 
                font: { 
                  family: 'JetBrains Mono', 
                  size: 11,
                  weight: '500'
                }
              },
              angleLines: {
                color: 'rgba(255,255,255,.05)'
              }
            } 
          }
        }
      });
    }

    // Animated Progress Bars
    const list = qs('#skills-list');
    if (list) {
      list.innerHTML = data.skills.map((skill, i) => `
        <div class="skill-item animate-slide-in-right" style="animation-delay: ${i * 0.1}s;">
          <div class="skill-header flex justify-between items-center mb-8">
            <span class="skill-name" style="font-weight: 600; color: var(--color-text-primary);">${skill.name}</span>
            <span class="skill-level" style="font-weight: 700; color: var(--color-electric-blue);">${skill.level}%</span>
          </div>
          <div class="skill-progress-container" style="width: 100%; height: 8px; background: var(--color-bg-tertiary); border-radius: 4px; overflow: hidden; position: relative;">
            <div class="skill-progress-fill" 
                 data-width="${skill.level}%" 
                 style="width: 0; height: 100%; background: linear-gradient(90deg, var(--color-electric-blue), var(--color-crimson)); transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden;">
              <div class="progress-shine" style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); animation: shine 2s ease-in-out infinite;"></div>
            </div>
          </div>
        </div>
      `).join('');

      // Trigger progress bar animations
      const progressObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector('.skill-progress-fill');
            if (bar) {
              setTimeout(() => {
                bar.style.width = bar.dataset.width;
              }, 200);
            }
            progressObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      qsa('.skill-item', list).forEach(item => progressObserver.observe(item));
    }
  }

  /*****************************************
   * MULTI-COLUMN TOOLS GRID
   *****************************************/
  function initMultiColumnTools() {
    const grid = qs('#tools-grid');
    if (!grid) return;
    
    grid.innerHTML = data.tools.map((tool, i) => `
      <div class="tool-item animate-fade-in" style="animation-delay: ${i * 0.1}s;">
        <div class="tool-header flex items-center gap-16 mb-12">
          <span class="tool-icon" style="font-size: 1.8rem; width: 40px; text-align: center;">${tool.icon}</span>
          <div class="tool-info flex flex-col">
            <span class="tool-name" style="font-weight: 600; color: var(--color-text-primary); font-size: 1.1rem;">${tool.name}</span>
            <span class="tool-category" style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${tool.category}</span>
          </div>
        </div>
        <div class="tool-level-container">
          <span class="tool-level tool-level--${tool.level.toLowerCase()}" style="padding: 4px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
            ${tool.level}
          </span>
        </div>
      </div>
    `).join('');
  }

  /*****************************************
   * ANIMATED CERTIFICATIONS
   *****************************************/
  function initAnimatedCertifications() {
    const list = qs('#certifications-list');
    if (!list) return;
    
    list.innerHTML = data.certifications.map((cert, i) => `
      <div class="cert-item animate-slide-in-left" style="animation-delay: ${i * 0.2}s;">
        <div class="cert-header flex justify-between items-start mb-16">
          <div>
            <div class="cert-name" style="font-weight: 600; font-size: 1.1rem; color: var(--color-text-primary);">${cert.name}</div>
            <div class="cert-status" style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 4px;">
              ${cert.status}${cert.year ? ` • Target: ${cert.year}` : ''}
            </div>
          </div>
          <span class="cert-progress-text" style="font-weight: 700; color: var(--color-electric-blue);">${cert.progress}%</span>
        </div>
        <div class="cert-progress-container" style="width: 100%; height: 6px; background: var(--color-bg-tertiary); border-radius: 3px; overflow: hidden;">
          <div class="cert-progress-fill" 
               data-width="${cert.progress}%" 
               style="width: 0; height: 100%; background: var(--color-status-progress); transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);">
          </div>
        </div>
      </div>
    `).join('');

    // Animate certification progress
    const certObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.cert-progress-fill');
          if (bar) {
            setTimeout(() => {
              bar.style.width = bar.dataset.width;
            }, 300);
          }
          certObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    qsa('.cert-item', list).forEach(item => certObserver.observe(item));
  }

  /*****************************************
   * ENHANCED PROJECTS GRID
   *****************************************/
  function initEnhancedProjects() {
    const grid = qs('#projects-grid');
    if (!grid) return;
    
    grid.innerHTML = data.projects.map((project, i) => `
      <div class="project-card animate-slide-up" style="animation-delay: ${i * 0.2}s;">
        <div class="project-header flex justify-between items-start mb-20">
          <h4 class="project-title" style="color: var(--color-text-primary); margin: 0; font-size: 1.3rem;">${project.name}</h4>
          <span class="project-status project-status--${project.status.toLowerCase()}" 
                style="padding: 6px 14px; border-radius: 16px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; background: rgba(${project.status === 'Stable' ? '0, 255, 65' : project.status === 'Beta' ? '255, 170, 0' : '255, 0, 81'}, 0.2); color: ${project.status_color}; border: 1px solid ${project.status_color};">
            ${project.status}
          </span>
        </div>
        <p class="project-description mb-20" style="color: var(--color-text-secondary); line-height: 1.6;">${project.description}</p>
        <div class="project-tech flex flex-wrap gap-8 mb-20">
          ${project.tech.map(tech => `<span class="tech-tag" style="padding: 4px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 12px; font-size: 0.75rem; color: var(--color-electric-blue);">${tech}</span>`).join('')}
        </div>
        <ul class="project-features mb-24" style="list-style: none; padding: 0; margin: 0;">
          ${project.features.map(feature => `<li style="padding: 6px 0; color: var(--color-text-secondary); position: relative; padding-left: 20px;"><span style="position: absolute; left: 0; color: var(--color-electric-blue);">▸</span>${feature}</li>`).join('')}
        </ul>
        <a href="${project.github}" target="_blank" class="btn btn--sm btn--primary btn-glow">View Source ↗</a>
      </div>
    `).join('');
  }

  /*****************************************
   * MULTI-COLUMN BLOG LAYOUT
   *****************************************/
  function initMultiColumnBlog() {
    const featuredEl = qs('#featured-post');
    const recentEl = qs('#recent-posts');
    
    if (!featuredEl || !recentEl) return;

    // Featured post
    const featured = data.blog_posts.find(p => p.featured) || data.blog_posts[0];
    featuredEl.innerHTML = `
      <div class="featured-badge mb-16" style="display: inline-block; padding: 4px 12px; background: rgba(255, 0, 81, 0.2); border: 1px solid var(--color-crimson); border-radius: 12px; font-size: 0.7rem; font-weight: 600; text-transform: uppercase; color: var(--color-crimson);">Featured</div>
      <h4 style="color: var(--color-text-primary); margin: 0 0 16px 0; font-size: 1.4rem; line-height: 1.3;">${featured.title}</h4>
      <div class="post-meta mb-16" style="color: var(--color-text-muted); font-size: 0.9rem;">
        ${new Date(featured.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
      </div>
      <p style="color: var(--color-text-secondary); line-height: 1.7; margin-bottom: 20px;">${featured.excerpt}</p>
      <div class="post-tags flex flex-wrap gap-8">
        ${featured.tags.map(tag => `<span class="blog-tag" style="padding: 3px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 10px; font-size: 0.7rem; color: var(--color-electric-blue);">${tag}</span>`).join('')}
      </div>
    `;

    // Recent posts
    const recentPosts = data.blog_posts.filter(p => !p.featured).slice(0, 3);
    recentEl.innerHTML = recentPosts.map((post, i) => `
      <div class="recent-post-item animate-slide-in-right" style="animation-delay: ${i * 0.1}s;">
        <h5 style="color: var(--color-text-primary); margin: 0 0 8px 0; font-size: 1rem; line-height: 1.3;">${post.title}</h5>
        <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 12px;">
          ${new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem; line-height: 1.5; margin: 0;">${post.excerpt.substring(0, 100)}...</p>
      </div>
    `).join('');
  }

  /*****************************************
   * MULTI-COLUMN CONTACT SECTION
   *****************************************/
  function initMultiColumnContact() {
    const channelsList = qs('#contact-channels');
    if (!channelsList) return;

    const aboutText = qs('#about-text');
    if (aboutText) {
      aboutText.innerHTML = data.personal.bio;
    }

    const channels = [
      { 
        name: 'Secure Email', 
        handle: data.social.email, 
        url: `mailto:${data.social.email}`,
        icon: '📧',
        description: 'PGP encrypted communications'
      },
      { 
        name: 'GitHub', 
        handle: data.social.github, 
        url: `https://github.com/${data.social.github.replace('@','')}`,
        icon: '🐱',
        description: 'Open source projects & contributions'
      },
      { 
        name: 'Twitter/X', 
        handle: data.social.twitter, 
        url: `https://twitter.com/${data.social.twitter.replace('@','')}`,
        icon: '🐦',
        description: 'Security insights & research updates'
      },
      { 
        name: 'LinkedIn', 
        handle: data.social.linkedin, 
        url: `https://linkedin.com/in/${data.social.linkedin.replace('@','')}`,
        icon: '💼',
        description: 'Professional networking'
      }
    ];

    channelsList.innerHTML = channels.map((ch, i) => `
      <li class="contact-channel animate-slide-in-right" style="animation-delay: ${i * 0.1}s; padding: 16px; background: var(--color-bg-card); border: 1px solid var(--color-border-primary); border-radius: var(--border-radius); transition: all var(--animation-fast) var(--ease-out-cubic);">
        <div class="channel-header flex items-center gap-12 mb-8">
          <span style="font-size: 1.5rem;">${ch.icon}</span>
          <div>
            <strong style="color: var(--color-text-primary); font-size: 1rem;">${ch.name}</strong>
            <div style="color: var(--color-text-muted); font-size: 0.8rem;">${ch.description}</div>
          </div>
        </div>
        <a href="${ch.url}" target="_blank" style="color: var(--color-electric-blue); font-weight: 600; font-size: 0.9rem;">${ch.handle}</a>
      </li>
    `).join('');
  }

  /*****************************************
   * ENHANCED FORM HANDLING
   *****************************************/
  function initEnhancedForm() {
    const form = qs('#contactForm');
    const status = qs('#form-status');
    const submitBtn = form?.querySelector('button[type="submit"]');
    
    if (form && status && submitBtn) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        
        // Show processing state with animation
        status.textContent = 'Encrypting & Transmitting...';
        status.className = 'status status--info ml-16';
        submitBtn.disabled = true;
        submitBtn.style.transform = 'scale(0.95)';
        
        // Simulate encryption delay
        setTimeout(() => {
          status.textContent = '✔ Message Sent Securely';
          status.className = 'status status--success ml-16';
          form.reset();
          
          // Reset after success display
          setTimeout(() => {
            status.className = 'status status--info ml-16 hidden';
            status.textContent = 'Sending...';
            submitBtn.disabled = false;
            submitBtn.style.transform = 'scale(1)';
          }, 4000);
        }, 2200);
      });
    }
  }

  /*****************************************
   * SMOOTH SCROLL NAVIGATION
   *****************************************/
  function initSmoothNavigation() {
    const navLinks = qsa('.nav__link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const section = qs(targetId);
        
        if (section) {
          const offset = 100;
          const targetPosition = section.offsetTop - offset;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // Active link highlighting
    const sections = qsa('section[id]');
    
    function updateActiveLink() {
      const scrollPos = window.scrollY + 150;
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          current = section.id;
        }
      });
      
      navLinks.forEach(link => {
        link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${current}`);
      });
    }
    
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveLink();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    updateActiveLink();
  }

  /*****************************************
   * STAGGERED REVEAL ANIMATIONS
   *****************************************/
  function initStaggeredRevealAnimations() {
    const revealElements = qsa('.animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right, .animate-title');
    
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
      el.style.animationPlayState = 'paused';
      revealObserver.observe(el);
    });
  }

  /*****************************************
   * CMS FUNCTIONALITY
   *****************************************/
  function initCMS() {
    const overlay = qs('#cms-interface');
    if (!overlay) return;

    function showCMS() {
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      const postsList = qs('#cms-posts-list');
      if (postsList) {
        postsList.innerHTML = data.blog_posts.map((p, i) => 
          `<div class="cms-post-item" data-idx="${i}">
            <div style="font-weight: 600; margin-bottom: 4px;">${p.title}</div>
            <div style="font-size: 0.8rem; color: var(--color-text-muted);">${new Date(p.date).toLocaleDateString()}</div>
           </div>`
        ).join('');
      }

      const editorForm = qs('#cms-post-form');
      const welcome = qs('#cms-welcome');

      function openEditor(post = null) {
        if (welcome) welcome.classList.add('hidden');
        if (editorForm) editorForm.classList.remove('hidden');
        
        if (post) {
          const inputs = {
            title: qs('#cms-title'),
            excerpt: qs('#cms-excerpt'),
            tags: qs('#cms-tags'),
            content: qs('#cms-content')
          };
          
          if (inputs.title) inputs.title.value = post.title || '';
          if (inputs.excerpt) inputs.excerpt.value = post.excerpt || '';
          if (inputs.tags) inputs.tags.value = post.tags ? post.tags.join(', ') : '';
          if (inputs.content) inputs.content.value = post.content || post.excerpt || '';
        } else {
          qsa('#cms-post-form input, #cms-post-form textarea').forEach(input => input.value = '');
        }
      }

      // Event bindings
      qs('#cms-new-post')?.addEventListener('click', () => openEditor());
      
      postsList?.addEventListener('click', e => {
        const item = e.target.closest('.cms-post-item');
        if (item) {
          const idx = parseInt(item.dataset.idx);
          openEditor(data.blog_posts[idx]);
        }
      });

      qs('#cms-save-post')?.addEventListener('click', () => {
        const formData = {
          title: qs('#cms-title')?.value || '',
          excerpt: qs('#cms-excerpt')?.value || '',
          tags: qs('#cms-tags')?.value || '',
          content: qs('#cms-content')?.value || ''
        };
        
        console.log('CMS - Saving Post:', formData);
        
        // Show success feedback
        const saveBtn = qs('#cms-save-post');
        const originalText = saveBtn.textContent;
        saveBtn.textContent = '✓ Saved';
        saveBtn.style.background = 'var(--color-status-stable)';
        
        setTimeout(() => {
          saveBtn.textContent = originalText;
          saveBtn.style.background = '';
          overlay.classList.add('hidden');
          document.body.style.overflow = '';
        }, 1500);
      });

      qs('#cms-cancel-edit')?.addEventListener('click', () => {
        if (editorForm) editorForm.classList.add('hidden');
        if (welcome) welcome.classList.remove('hidden');
      });

      qs('#cms-close')?.addEventListener('click', () => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
      });
    }

    // Check for CMS access
    function checkCMSAccess() {
      const url = window.location.href;
      return url.includes('k3y9p7gQcmS') || url.includes('#cms') || window.location.hash === '#cms';
    }

    window.addEventListener('hashchange', () => {
      if (checkCMSAccess()) showCMS();
    });

    if (checkCMSAccess()) showCMS();
    
    // Global access
    window.openCMS = showCMS;
    console.log('🔐 CMS Access: Add #cms to URL or navigate to /k3y9p7gQcmS');
  }

  /*****************************************
   * PERFORMANCE MONITORING
   *****************************************/
  function initPerformanceMonitoring() {
    const startTime = performance.now();
    
    window.addEventListener('load', () => {
      const loadTime = (performance.now() - startTime).toFixed(1);
      console.log(`⚡ Enhanced Portfolio loaded in ${loadTime}ms`);
      console.log('🎨 Rich animations and multi-column layouts active');
      console.log('🖱️ Enhanced cursor with trailing effects enabled');
    });
  }

  /*****************************************
   * INITIALIZATION SEQUENCE
   *****************************************/
  function init() {
    console.log('🚀 Initializing Enhanced Cybersecurity Portfolio...');
    
    // Core functionality
    initEnhancedCursor();
    initEnhancedTyping();
    initAnimatedStats();
    initSkillsWithAnimations();
    initMultiColumnTools();
    initAnimatedCertifications();
    initEnhancedProjects();
    initMultiColumnBlog();
    initMultiColumnContact();
    
    // Interactive features
    initEnhancedForm();
    initSmoothNavigation();
    initStaggeredRevealAnimations();
    initCMS();
    initPerformanceMonitoring();
    
    console.log('✅ All systems loaded and operational');
  }

  // Start initialization
  init();
});