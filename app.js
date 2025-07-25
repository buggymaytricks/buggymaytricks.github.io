// Enhanced Cybersecurity Portfolio with Rich Animations & Multi-Column Layouts
document.addEventListener('DOMContentLoaded', () => {
  /*****************************************
   * DATA DEFINITIONS
   *****************************************/
  const data = {
    personal: {
      name: 'buGGy',
      handle: '@buggymaytricks',
      title: 'Cybersecurity Enthusiast & Penetration Tester',
      experience_years: 2,
      vulnerabilities_found: 12,
      tools_mastered: 24,
      bio: `Passionate cybersecurity enthusiast and penetration tester with 2+ years of hands-on experience in offensive security. Currently pursuing advanced certifications while actively participating in bug bounty programs and CTF competitions.

My journey began with a fascination for understanding how systems work and where they can fail. I specialize in web application security, network enumeration, and developing custom security tools. Through continuous learning and practical application, I've discovered 12+ vulnerabilities across various platforms and contributed to several open-source security projects.

Always eager to learn new techniques, share knowledge with the community, and help organizations improve their security posture through ethical hacking practices.`
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
      { name: 'Web Application Security', level: 80 },
      { name: 'Network Penetration Testing', level: 75 },
      { name: 'Linux Systems', level: 85 },
      { name: 'Python Scripting', level: 75 },
      { name: 'OSINT & Reconnaissance', level: 70 },
      { name: 'Vulnerability Assessment', level: 80 }
    ],
    tools: [
      { name: 'BurpSuite Pro', level: 'Expert', icon: '🔍', category: 'Web Security' },
      { name: 'Nmap', level: 'Expert', icon: '🌐', category: 'Network' },
      { name: 'Metasploit', level: 'Advanced', icon: '💥', category: 'Exploitation' },
      { name: 'Python/Bash', level: 'Expert', icon: '🐍', category: 'Development' },
      { name: 'Linux Systems', level: 'Expert', icon: '🐧', category: 'Systems' },
      { name: 'FFUF/Gobuster', level: 'Expert', icon: '🔎', category: 'Enumeration' },
      { name: 'Wireshark', level: 'Advanced', icon: '🦈', category: 'Network Analysis' },
      { name: 'John the Ripper', level: 'Advanced', icon: '🔓', category: 'Password Cracking' },
      { name: 'Hashcat', level: 'Advanced', icon: '⚡', category: 'Password Cracking' },
      { name: 'Nikto', level: 'Intermediate', icon: '🔍', category: 'Web Scanning' },
      { name: 'SQLMap', level: 'Advanced', icon: '💉', category: 'Database Testing' },
      { name: 'Aircrack-ng', level: 'Intermediate', icon: '📡', category: 'Wireless Security' },
      { name: 'Nessus', level: 'Advanced', icon: '🛡️', category: 'Vulnerability Scanner' },
      { name: 'OpenVAS', level: 'Intermediate', icon: '🔒', category: 'Vulnerability Scanner' },
      { name: 'Cobalt Strike', level: 'Learning', icon: '🎯', category: 'Red Team' },
      { name: 'BloodHound', level: 'Intermediate', icon: '🐕', category: 'AD Enumeration' },
      { name: 'Mimikatz', level: 'Intermediate', icon: '🔑', category: 'Post-Exploitation' },
      { name: 'Responder', level: 'Advanced', icon: '📢', category: 'Network Poisoning' },
      { name: 'Empire', level: 'Learning', icon: '👑', category: 'Post-Exploitation' },
      { name: 'Crackmapexec', level: 'Advanced', icon: '🗺️', category: 'Network Assessment' },
      { name: 'Impacket', level: 'Advanced', icon: '📦', category: 'Network Protocols' },
      { name: 'Nuclei', level: 'Intermediate', icon: '⚛️', category: 'Vulnerability Scanner' },
      { name: 'Subfinder', level: 'Advanced', icon: '🔍', category: 'Subdomain Enum' },
      { name: 'Amass', level: 'Intermediate', icon: '🌊', category: 'Asset Discovery' }
    ],
    certifications: [
      { name: 'eJPT (eLearnSecurity)', status: 'In Progress', progress: 60, year: '2025' },
      { name: 'CEH (EC-Council)', status: 'Planned', progress: 25, year: '2025' },
      { name: 'OSCP (Offensive Security)', status: 'Goal', progress: 10, year: '2026' }
    ],
    projects: [
      {
        name: 'Hash-Verify',
        status: 'Stable',
        status_color: '#00ff41',
        description: 'A simple script to verify the integrity of downloaded files using multiple hash algorithms.',
        tech: ['Python', 'Cryptography', 'CLI'],
        features: ['SHA-256/512 support', 'MD5 legacy support', 'File integrity verification', 'Multiple hash formats'],
        github: 'https://github.com/buggymaytricks/Hash-Verify'
      },
      {
        name: 'ECSIP Botnet Simulation',
        status: 'Active',
        status_color: '#00ff41',
        description: 'Basic botnet simulation and analysis framework for educational cybersecurity research.',
        tech: ['Python', 'Network Security', 'Research'],
        features: ['Botnet simulation', 'Network analysis', 'Security research', 'Educational framework'],
        github: 'https://github.com/buggymaytricks/ECSIP-botnet-sim-and-analysis'
      },
      {
        name: 'Bug Bounty Blog List',
        status: 'Forked',
        status_color: '#ffaa00',
        description: 'Curated collection of bug bounty blogs and security research resources.',
        tech: ['Research', 'OSINT', 'Bug Bounty'],
        features: ['Blog compilation', 'Security research', 'Community resources', 'OSINT gathering'],
        github: 'https://github.com/buggymaytricks/bugbountybloglist'
      },
      {
        name: 'Engineering Notes',
        status: 'Personal',
        status_color: '#0099ff',
        description: 'Personal collection of engineering and cybersecurity notes and documentation.',
        tech: ['Documentation', 'Notes', 'Learning'],
        features: ['Technical notes', 'Learning resources', 'Personal documentation', 'Knowledge base'],
        github: 'https://github.com/buggymaytricks/Engineering-Notes'
      }
    ],
    blog_posts: [
      {
        slug: 'building-home-cybersecurity-lab',
        title: 'Building a Home Cybersecurity Lab: Complete Setup Guide',
        date: '2025-07-22',
        excerpt: 'Building a Home Cybersecurity Lab: Complete Setup Guide',
        tags: ['homelab', 'virtualization', 'security-testing'],
        featured: true
      },
      {
        slug: 'sql-injection-fundamentals',
        title: 'SQL Injection Fundamentals and Advanced Techniques',
        date: '2025-07-21',
        excerpt: 'Comprehensive guide to SQL injection attack vectors, exploitation techniques, and defensive strategies.',
        tags: ['sql-injection', 'web-security', 'testing']
      },
      {
        slug: 'essential-cybersecurity-tools',
        title: 'Essential Cybersecurity Tools for Security Professionals',
        date: '2025-07-20',
        excerpt: 'Essential Cybersecurity Tools for Security Professionals',
        tags: ['cybersecurity', 'tools', 'nmap', 'wireshark', 'burp-suite']
      }
    ],
    social: {
      twitter: '@buggymaytricks',
      github: 'buggymaytricks',
      email: 'contact@buggymaytricks.page',
      linkedin: 'buggymaytricks',
      discord: 'buggy#7823',
      signal: '+1-XXX-XXX-XXXX'
    },
    cybersec_quotes: [
      "Breaking systems to build better defenses",
      "Security through offensive thinking",
      "Every system has a backdoor - find it first",
      "Red teams reveal what blue teams can't see",
      "Penetration testing: Making the impossible possible",
      "Exploiting trust, not people",
      "The best defense understands offense",
      "Vulnerability research drives innovation",
      "Think like an attacker, defend like a guardian",
      "Code is poetry, exploits are art",
      "OPSEC first, payload second",
      "Social engineering: The human firewall fails",
      "Binary exploitation: Where logic meets creativity",
      "Web security: Every input is an opportunity",
      "Network penetration: Mapping the invisible",
      "Zero-days are born from curiosity",
      "Reverse engineering unlocks digital mysteries",
      "Privilege escalation: From user to admin",
      "Persistence is the key to lasting access",
      "Steganography: Hiding in plain sight",
      "Cryptography: Making secrets unbreakable",
      "Forensics: Digital detective work",
      "Incident response: Racing against time",
      "Bug bounties: Ethical hacking pays",
      "Purple teams: Where red meets blue",
      "Information is power, access is everything",
      "Every click tells a story",
      "Security is not a product, it's a process",
      "The weakest link is often human",
      "Trust but verify, then verify again",
      "Defense in depth, attack in breadth",
      "Hackers don't break in, they log in",
      "Your network is only as secure as its weakest password",
      "Patch today, breathe easy tomorrow",
      "Encryption: Making data unreadable to the wrong eyes",
      "Firewalls: The digital castle walls",
      "Malware analysis: Dissecting digital pathogens",
      "Phishing: Fishing for credentials in human waters",
      "APT: Advanced Persistent Threats require persistent defense",
      "IoT: Internet of Things, Internet of Threats",
      "Cloud security: Protecting data in someone else's computer",
      "Mobile security: Pocket-sized attack vectors",
      "BYOD: Bring Your Own Device, Bring Your Own Risk",
      "Threat hunting: Proactive defense against reactive attacks",
      "SIEM: Security Information and Event Management",
      "SOC: Security Operations Center - The digital war room",
      "Honeypots: Sweet traps for digital intruders",
      "Sandboxing: Quarantining suspicious behavior",
      "DLP: Data Loss Prevention - Keeping secrets secret",
      "IAM: Identity and Access Management - You are who you prove to be",
      "MFA: Multi-Factor Authentication - Something you know, have, and are",
      "VPN: Virtual Private Networks - Tunneling through public danger",
      "PKI: Public Key Infrastructure - The backbone of digital trust",
      "OSINT: Open Source Intelligence - Hiding in plain sight",
      "CTF: Capture The Flag - Gamifying security skills",
      "Red team exercises: Authorized adversarial testing",
      "Blue team defense: Monitoring, detecting, responding",
      "Purple team collaboration: Breaking down silos",
      "DevSecOps: Security baked into every code commit",
      "Shift left: Security from the start, not as an afterthought",
      "Zero trust: Never trust, always verify"
    ]
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
   * ANIMATED CYBERSECURITY QUOTES
   *****************************************/
  function initAnimatedQuotes() {
    const quoteEl = qs('#cyber-quote');
    if (!quoteEl) {
      console.log('❌ Quote element not found');
      return;
    }

    console.log('✅ Starting quotes animation');
    let lastQuoteIndex = -1;
    let isTyping = false;
    const quotes = data.cybersec_quotes;
    
    // Function to get random quote index, ensuring it's different from the last one
    function getRandomQuoteIndex() {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * quotes.length);
      } while (randomIndex === lastQuoteIndex && quotes.length > 1);
      return randomIndex;
    }
    
    function typewriterEffect(text, callback) {
      if (isTyping) return;
      isTyping = true;
      
      let charIndex = 0;
      const speed = 50;
      const backspaceSpeed = 30;
      const pauseDuration = 2000;
      
      // Clear and setup with fixed height to prevent page movement
      quoteEl.innerHTML = `
        <div class="quote-text" style="
          font-style: italic; 
          color: var(--color-primary); 
          font-size: 1.6rem; 
          line-height: 1.6; 
          max-width: 800px; 
          margin: 0 auto;
          min-height: 4.2em;
          height: 4.2em;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          overflow: hidden;
        ">
          <span id="typing-quote"></span><span class="cursor-blink">|</span>
        </div>
      `;
      
      const typingSpan = qs('#typing-quote');
      if (!typingSpan) return;
      
      function typeChar() {
        if (charIndex < text.length) {
          typingSpan.textContent += text.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, speed + Math.random() * 20);
        } else {
          setTimeout(startBackspace, pauseDuration);
        }
      }
      
      function startBackspace() {
        function deleteChar() {
          if (charIndex > 0) {
            typingSpan.textContent = text.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteChar, backspaceSpeed + Math.random() * 10);
          } else {
            isTyping = false;
            if (callback) callback();
          }
        }
        deleteChar();
      }
      
      typeChar();
    }
    
    function showNextQuote() {
      const randomIndex = getRandomQuoteIndex();
      lastQuoteIndex = randomIndex;
      const quote = quotes[randomIndex];
      console.log(`📝 Showing random quote: ${quote}`);
      typewriterEffect(quote, () => {
        setTimeout(showNextQuote, 500);
      });
    }
    
    // Start immediately
    setTimeout(showNextQuote, 1000);
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
  async function initSkillsWithAnimations() {
    // Load skills from external config file ONLY
    let skillsData = [];
    
    try {
      const skillsResponse = await fetch('/skills-config.json');
      if (skillsResponse.ok) {
        const skillsConfig = await skillsResponse.json();
        skillsData = skillsConfig.skills;
        console.log('✅ Skills loaded from config file:', skillsData.length, 'skills');
      } else {
        console.error('❌ Failed to load skills-config.json');
        return;
      }
    } catch (error) {
      console.error('❌ Error loading skills config:', error);
      return;
    }

    if (skillsData.length === 0) {
      console.error('❌ No skills data available');
      return;
    }

    // Enhanced Radar Chart
    const ctx = qs('#skills-chart');
    if (ctx) {
      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: skillsData.map(s => s.name),
          datasets: [{
            label: 'Skill Level',
            data: skillsData.map(s => s.level),
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

    // Skills list removed - only showing radar chart
  }

  /*****************************************
   * MULTI-COLUMN TOOLS GRID
   *****************************************/
  function initMultiColumnTools() {
    const grid = qs('#tools-grid');
    if (!grid) return;
    
    // Create horizontal scrolling marquee with all tools
    const toolCards = data.tools.map((tool, i) => `
      <div class="tool-item-marquee" style="--delay: ${i};">
        <div class="tool-header flex items-center gap-8 mb-6">
          <span class="tool-icon" style="font-size: 1.8rem; width: 40px; text-align: center;">${tool.icon}</span>
          <div class="tool-info flex flex-col">
            <span class="tool-name" style="font-weight: 600; color: var(--color-text-primary); font-size: 1rem; line-height: 1.1;">${tool.name}</span>
            <span class="tool-category" style="font-size: 0.7rem; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">${tool.category}</span>
          </div>
        </div>
        <div class="tool-level-container">
          <span class="tool-level tool-level--${tool.level.toLowerCase()}" style="padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
            ${tool.level}
          </span>
        </div>
      </div>
    `).join('');
    
    // Create the marquee structure - duplicate tools for seamless loop
    grid.innerHTML = `
      <div class="tools-track">
        ${toolCards}
        ${toolCards}
      </div>
    `;
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
   * DYNAMIC PROJECTS FROM GITHUB
   *****************************************/
  async function initDynamicProjects() {
    const grid = qs('#projects-grid');
    if (!grid) return;

    try {
      // Load excluded repositories
      let excludedRepos = [];
      try {
        const excludeResponse = await fetch('excluded-repos.txt');
        if (excludeResponse.ok) {
          const excludeText = await excludeResponse.text();
          excludedRepos = excludeText
            .split('\n')
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('#'));
          console.log('✅ Excluded repos loaded:', excludedRepos);
        }
      } catch (e) {
        console.log('⚠️ No excluded repos file found, showing all repos');
      }

      // Fetch repositories from GitHub API with comprehensive details
      const response = await fetch('https://api.github.com/users/buggymaytricks/repos?sort=updated&direction=desc&per_page=30');
      
      if (!response.ok) {
        console.log('❌ GitHub API failed with status:', response.status);
        initStaticProjects();
        return;
      }
      
      const repos = await response.json();
      
      if (Array.isArray(repos)) {
        console.log('📦 Total repos fetched:', repos.length);
        console.log('🚫 Excluded repos list:', excludedRepos);
        
        // Filter out excluded repos and get detailed info
        const filteredRepos = repos
          .filter(repo => {
            const isExcluded = excludedRepos.includes(repo.name);
            if (isExcluded) {
              console.log('❌ Excluding repo:', repo.name);
            }
            return !isExcluded;
          })
          .filter(repo => !repo.fork) // Exclude forked repos
          .filter(repo => repo.size > 0) // Exclude empty repos
          .sort((a, b) => {
            // Sort by stars (descending), then by updated date (descending)
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at) - new Date(a.updated_at);
          })
          .slice(0, 6);

        console.log('✅ Final filtered repos:', filteredRepos.map(r => r.name));

        // Fetch comprehensive details for each repository
        const projectsWithDetails = await Promise.all(
          filteredRepos.map(async (repo) => {
            try {
              // Fetch languages
              const languagesResponse = await fetch(`https://api.github.com/repos/buggymaytricks/${repo.name}/languages`);
              const languages = await languagesResponse.json();
              
              // Get all languages (not just top 4)
              const sortedLanguages = Object.entries(languages)
                .sort(([,a], [,b]) => b - a)
                .map(([lang]) => lang);
              
              return {
                ...repo,
                languages: sortedLanguages.length > 0 ? sortedLanguages : ['Repository'],
                last_updated: new Date(repo.updated_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                }),
                size_mb: Math.round(repo.size / 1024 * 100) / 100 // Convert KB to MB
              };
            } catch (error) {
              console.log(`Failed to fetch details for ${repo.name}:`, error);
              return {
                ...repo,
                languages: repo.language ? [repo.language] : ['Repository'],
                last_updated: new Date(repo.updated_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                }),
                size_mb: Math.round(repo.size / 1024 * 100) / 100
              };
            }
          })
        );

        const projectsHTML = projectsWithDetails.map((repo, i) => {
          const description = repo.description || 'A repository by buGGy';
          
          return `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
              <div class="project-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
                <div class="project-header mb-16">
                  <div class="flex justify-between items-start mb-8">
                    <h4 style="color: var(--color-text-primary); margin: 0; font-size: 1.2rem; line-height: 1.3;">${repo.name}</h4>
                  </div>
                  
                  <div class="project-stats flex gap-12 mb-12" style="font-size: 0.75rem; color: var(--color-text-muted);">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    ${repo.size_mb > 0 ? `<span>📦 ${repo.size_mb} MB</span>` : ''}
                  </div>
                  
                  <p style="color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 12px 0; font-size: 0.95rem;">${description}</p>
                  
                  <div class="project-meta flex justify-between items-center" style="font-size: 0.7rem; color: var(--color-text-muted);">
                    <span>Updated: ${repo.last_updated}</span>
                  </div>
                </div>
                
                <div class="project-tech flex flex-wrap gap-8">
                  ${repo.languages.map(lang => `<span class="tech-badge" style="padding: 4px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue); font-family: 'JetBrains Mono', monospace;">${lang}</span>`).join('')}
                </div>
              </div>
            </a>
          `;
        }).join('');
        
        grid.innerHTML = projectsHTML;
        console.log('✅ Projects loaded with comprehensive details');
      } else {
        // Fallback to static data if API fails
        initStaticProjects();
      }
    } catch (error) {
      console.log('❌ GitHub API failed, using static projects:', error);
      initStaticProjects();
    }
  }
  
  function initStaticProjects() {
    const grid = qs('#projects-grid');
    if (!grid) return;
    
    console.log('📁 Loading static projects as fallback');
    
    grid.innerHTML = data.projects.slice(0, 6).map((project, i) => `
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
        <div class="project-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
          <div class="project-header mb-16">
            <div class="flex justify-between items-start mb-8">
              <h4 style="color: var(--color-text-primary); margin: 0; font-size: 1.2rem; line-height: 1.3;">${project.name}</h4>
            </div>
            
            <div class="project-stats flex gap-12 mb-12" style="font-size: 0.75rem; color: var(--color-text-muted);">
              <span>⭐ --</span>
              <span>🍴 --</span>
              <span>📦 -- MB</span>
            </div>
            
            <p style="color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 12px 0; font-size: 0.95rem;">${project.description}</p>
            
            <div class="project-meta flex justify-between items-center" style="font-size: 0.7rem; color: var(--color-text-muted);">
              <span>Static fallback data</span>
            </div>
          </div>
          
          <div class="project-tech flex flex-wrap gap-8">
            ${project.tech.map(tech => `<span class="tech-badge" style="padding: 4px 10px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue); font-family: 'JetBrains Mono', monospace;">${tech}</span>`).join('')}
          </div>
        </div>
      </a>
    `).join('');
  }

  /*****************************************
   * DYNAMIC BLOG POSTS
   *****************************************/
  async function initDynamicBlog() {
    const blogGrid = qs('#blog-grid');
    if (!blogGrid) return;

    try {
      // Try to fetch recent posts from Jekyll blog
      const response = await fetch('/feed.json');
      let posts = [];
      
      if (response.ok) {
        const feedData = await response.json();
        posts = feedData.items ? feedData.items.slice(0, 3) : [];
      } else {
        // Fallback to static data
        posts = data.blog_posts.slice(0, 3);
      }
      
      const blogHTML = posts.map((post, i) => {
        const title = post.title || post.title;
        const excerpt = post.content_text || post.excerpt || '';
        const date = post.date_published || post.date;
        const url = post.url || '/blog/';
        const tags = post.tags || ['cybersecurity'];
        
        return `
          <div class="blog-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
            <div class="blog-header mb-16">
              <h4 style="color: var(--color-text-primary); margin: 0 0 8px 0; font-size: 1.2rem; line-height: 1.3;">
                <a href="${url}" style="color: inherit; text-decoration: none;">${title}</a>
              </h4>
              <div style="color: var(--color-text-muted); font-size: 0.85rem;">
                ${new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
            <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
              ${excerpt.substring(0, 150)}${excerpt.length > 150 ? '...' : ''}
            </p>
            <div class="blog-tags flex flex-wrap gap-6 mb-16">
              ${tags.slice(0, 3).map(tag => `<span class="blog-tag" style="padding: 2px 8px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue);">${tag}</span>`).join('')}
            </div>
            <a href="${url}" class="btn btn--sm btn--outline">Read More →</a>
          </div>
        `;
      }).join('');
      
      blogGrid.innerHTML = blogHTML;
      
    } catch (error) {
      console.log('Blog API failed, using static posts:', error);
      initStaticBlog();
    }
  }
  
  function initStaticBlog() {
    const blogGrid = qs('#blog-grid');
    if (!blogGrid) return;
    
    const posts = data.blog_posts.slice(0, 3);
    const blogHTML = posts.map((post, i) => `
      <div class="blog-card animate-slide-in-up" style="animation-delay: ${i * 0.1}s;">
        <div class="blog-header mb-16">
          <h4 style="color: var(--color-text-primary); margin: 0 0 8px 0; font-size: 1.2rem; line-height: 1.3;">
            <a href="/posts/${post.slug}/" style="color: inherit; text-decoration: none;">${post.title}</a>
          </h4>
          <div style="color: var(--color-text-muted); font-size: 0.85rem;">
            ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
        <p style="color: var(--color-text-secondary); line-height: 1.6; margin-bottom: 16px;">
          ${post.excerpt.substring(0, 150)}${post.excerpt.length > 150 ? '...' : ''}
        </p>
        <div class="blog-tags flex flex-wrap gap-6 mb-16">
          ${post.tags.slice(0, 3).map(tag => `<span class="blog-tag" style="padding: 2px 8px; background: rgba(0, 212, 255, 0.1); border: 1px solid rgba(0, 212, 255, 0.3); border-radius: 8px; font-size: 0.7rem; color: var(--color-electric-blue);">${tag}</span>`).join('')}
        </div>
        <a href="/posts/${post.slug}/" class="btn btn--sm btn--outline">Read More →</a>
      </div>
    `).join('');
    
    blogGrid.innerHTML = blogHTML;
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

    // Define channels in chronological/priority order with proper icons
    const channels = [
      {
        name: 'Email', 
        handle: data.social.email, 
        url: `mailto:${data.social.email}`,
        icon: '📧',
        priority: 'Primary',
        description: 'Best for formal communications and inquiries'
      },
      {
        name: 'GitHub', 
        handle: `@${data.social.github}`, 
        url: `https://github.com/${data.social.github}`,
        icon: '⚡',
        priority: 'Code',
        description: 'Open source projects and contributions'
      },
      {
        name: 'LinkedIn', 
        handle: `@${data.social.linkedin}`, 
        url: `https://linkedin.com/in/${data.social.linkedin}`,
        icon: '💼',
        priority: 'Professional',
        description: 'Professional networking and opportunities'
      },
      {
        name: 'Twitter', 
        handle: data.social.twitter, 
        url: `https://twitter.com/${data.social.twitter.replace('@','')}`,
        icon: '�',
        priority: 'Updates',
        description: 'Security insights and research updates'
      }
    ];

    channelsList.innerHTML = channels.map((channel, i) => `
      <li class="contact-channel animate-slide-in-right" style="animation-delay: ${i * 0.05}s;">
        <a href="${channel.url}" class="contact-card" ${channel.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
          <div class="contact-header">
            <span class="contact-icon">${channel.icon}</span>
            <div class="contact-info">
              <h5 class="contact-name">${channel.name} <span class="contact-priority">${channel.priority}</span></h5>
              <p class="contact-handle">${channel.handle}</p>
            </div>
          </div>
        </a>
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
        const targetId = link.getAttribute('href');
        
        // Skip external links and page navigation (don't prevent default)
        if (!targetId.startsWith('#')) {
          return; // Let the browser handle the navigation
        }
        
        e.preventDefault();
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
        const href = link.getAttribute('href');
        // Only highlight anchor links, not external page links
        if (href.startsWith('#')) {
          link.classList.toggle('nav__link--active', href === `#${current}`);
        }
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
    initAnimatedQuotes();
    initAnimatedStats();
    initSkillsWithAnimations();
    initMultiColumnTools();
    initDynamicProjects();
    initDynamicBlog();
    initMultiColumnContact();
    
    // Interactive features
    initSmoothNavigation();
    initStaggeredRevealAnimations();
    initPerformanceMonitoring();
    
    console.log('✅ All systems loaded and operational');
  }

  // Start initialization
  init();
});