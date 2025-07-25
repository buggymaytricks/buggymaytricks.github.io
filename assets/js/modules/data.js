/**
 * Data Module - Static data definitions for the portfolio
 * Contains personal information, skills, tools, projects, and quotes
 */

export const portfolioData = {
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
