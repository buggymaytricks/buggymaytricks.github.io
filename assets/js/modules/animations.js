/**
 * Animations Module - Enhanced cursor, typing, quotes, and stats animations
 * Handles all visual animations and effects
 */

import { qs, qsa, isMobile, randomElement, createAnimationLoop, createObserver } from './utils.js';
import { portfolioData } from './data.js';

/**
 * Enhanced Custom Cursor with Trail
 */
export function initEnhancedCursor() {
  const dot = qs('#cursor-dot');
  const ring = qs('#cursor-ring');
  const trail = qs('#cursor-trail');

  if (!dot || !ring || !trail) return;

  // Check if basic cursor is already initialized (from immediate script)
  if (dot.style.display === 'block') {
    console.log('✨ Enhancing existing cursor with trail effects');
    // Just add the trail effects to the existing cursor
    addTrailEffects(dot, ring, trail);
    return;
  }

  // Disable cursor effects on mobile devices
  if (isMobile()) {
    dot.style.display = 'none';
    ring.style.display = 'none';
    trail.style.display = 'none';
    return;
  }

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

  const cursorAnimation = createAnimationLoop(() => {
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
  });

  cursorAnimation.start();

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

/**
 * Add trail effects to existing cursor
 */
function addTrailEffects(dot, ring, trail) {
  if (isMobile()) return;

  let trailHistory = [];
  let mx = 0, my = 0;

  // Get current mouse position
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;

    // Add to trail history
    trailHistory.push({ x: mx, y: my, time: Date.now() });
    if (trailHistory.length > 10) trailHistory.shift();
  });

  // Enhanced trail animation
  const trailAnimation = createAnimationLoop(() => {
    // Update trail with fade effect
    if (trailHistory.length > 3) {
      const recentPos = trailHistory[Math.floor(trailHistory.length * 0.7)];
      trail.style.left = (recentPos.x - 8) + 'px';
      trail.style.top = (recentPos.y - 8) + 'px';
      trail.style.opacity = '0.6';
    }
  });

  // Enhanced hover effects for clickable elements
  qsa('a, button, .clickable, .logo-link, .nav__link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'scale(1.8)';
      ring.style.borderColor = '#00d4ff';
      ring.style.borderWidth = '3px';
      dot.style.transform = 'scale(1.2)';
      dot.style.backgroundColor = '#00d4ff';
      trail.style.opacity = '0.8';
    });

    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'scale(1)';
      ring.style.borderColor = '#fff';
      ring.style.borderWidth = '2px';
      dot.style.transform = 'scale(1)';
      dot.style.backgroundColor = '#fff';
      trail.style.opacity = '0.6';
    });
  });

  console.log('✨ Trail effects enhanced successfully');
}

/**
 * Enhanced Typing Effect - Buttery Smooth Version
 */
export function initEnhancedTyping() {
  const textEl = qs('#typed-text');
  const introEl = qs('#intro-text');
  if (!textEl || !introEl) return;

  // Set intro text
  introEl.textContent = `${portfolioData.personal.title} specializing in offensive security and red team operations.`;

  let tagIdx = 0, charIdx = 0, deleting = false, pause = false;

  // Optimized speeds for buttery smooth animation
  const typeSpeed = 60;      // Faster but smooth typing
  const delSpeed = 25;       // Faster deletion
  const wait = 2200;         // Slightly shorter pause
  const variance = 15;       // Reduced variance for consistency

  function typeStep() {
    const current = portfolioData.taglines[tagIdx];

    if (pause) {
      setTimeout(() => {
        pause = false;
        deleting = true;
        typeStep();
      }, wait);
      return;
    }

    if (!deleting) {
      // Smooth character addition with micro-transitions
      const nextChar = current.charAt(charIdx);
      textEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;

      if (charIdx === current.length) {
        pause = true;
      }

      // Use requestAnimationFrame for smoother timing
      const delay = typeSpeed + (Math.random() * variance);
      setTimeout(() => requestAnimationFrame(typeStep), delay);
    } else {
      // Smooth character removal
      textEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;

      if (charIdx === 0) {
        deleting = false;
        tagIdx = (tagIdx + 1) % portfolioData.taglines.length;
      }

      // Use requestAnimationFrame for smoother deletion
      const delay = delSpeed + (Math.random() * (variance * 0.5));
      setTimeout(() => requestAnimationFrame(typeStep), delay);
    }
  }

  // Start with a small delay for page load
  setTimeout(() => requestAnimationFrame(typeStep), 800);
}

/**
 * Animated Cybersecurity Quotes
 */
export function initAnimatedQuotes() {
  const quoteEl = qs('#cyber-quote');
  if (!quoteEl) {
    console.log('❌ Quote element not found');
    return;
  }

  console.log('✅ Starting quotes animation');
  let lastQuoteIndex = -1;
  let isTyping = false;
  const quotes = portfolioData.cybersec_quotes;

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
    // Buttery smooth speeds with micro-timing variations
    const speed = 35;              // Faster, smoother typing
    const backspaceSpeed = 20;     // Quicker deletion
    const pauseDuration = 1800;    // Shorter pause for better flow
    const microVariance = 8;       // Small timing variance for realism

    // Clear and setup with optimized transitions
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
        transition: opacity 0.1s ease-out;
        will-change: opacity;
      ">
        <span id="typing-quote" style="transition: opacity 0.05s ease-out;"></span><span class="cursor-blink">|</span>
      </div>
    `;

    const typingSpan = qs('#typing-quote');
    if (!typingSpan) return;

    function typeChar() {
      if (charIndex < text.length) {
        const nextChar = text.charAt(charIndex);

        // Add character with micro-fade for ultra-smooth appearance
        typingSpan.style.opacity = '0.8';
        typingSpan.textContent += nextChar;

        // Smooth opacity transition
        requestAnimationFrame(() => {
          typingSpan.style.opacity = '1';
        });

        charIndex++;

        // Dynamic speed based on character type for natural flow
        let charSpeed = speed;
        if (nextChar === ' ') charSpeed *= 0.7;      // Faster on spaces
        if (nextChar === ',' || nextChar === '.') charSpeed *= 1.4;  // Pause on punctuation
        if (nextChar === '!' || nextChar === '?') charSpeed *= 1.6;  // Longer pause on emphasis

        const delay = charSpeed + (Math.random() * microVariance);
        setTimeout(() => requestAnimationFrame(typeChar), delay);
      } else {
        setTimeout(() => requestAnimationFrame(startBackspace), pauseDuration);
      }
    }

    function startBackspace() {
      function deleteChar() {
        if (charIndex > 0) {
          // Smooth character removal with micro-transitions
          typingSpan.style.opacity = '0.7';
          charIndex--;
          typingSpan.textContent = text.substring(0, charIndex);

          requestAnimationFrame(() => {
            typingSpan.style.opacity = '1';
          });

          const delay = backspaceSpeed + (Math.random() * (microVariance * 0.5));
          setTimeout(() => requestAnimationFrame(deleteChar), delay);
        } else {
          isTyping = false;
          if (callback) {
            requestAnimationFrame(callback);
          }
        }
      }
      deleteChar();
    }

    // Start typing with requestAnimationFrame for perfect timing
    requestAnimationFrame(typeChar);
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

/**
 * Animated Stats Counters
 */
export function initAnimatedStats() {
  const grid = qs('#stats-grid');
  if (!grid) return;

  const stats = [
    { val: portfolioData.personal.experience_years, label: 'Years Experience', suffix: '+', color: '#00d4ff' },
    { val: portfolioData.personal.thm_rooms, label: 'THM Rooms', suffix: '+', color: '#ff0051' },
    { val: portfolioData.personal.internships_done, label: 'Internships Done', suffix: '', color: '#00ff41' },
    { val: portfolioData.personal.certs, label: 'Certs', suffix: '', color: '#ffaa00' }
  ];

  grid.innerHTML = stats.map((s, i) => `
    <div class="stat-card animate-slide-up" style="animation-delay: ${i * 0.2}s; border-left: 3px solid ${s.color};">
      <div class="stat-icon" style="color: ${s.color}; font-size: 2rem; margin-bottom: 12px;">⚡</div>
      <div class="stat-value" data-target="${s.val}" data-suffix="${s.suffix}" style="font-size: 2.2rem; font-weight: 700; color: ${s.color};">${s.suffix}</div>
      <div class="stat-label" style="color: var(--color-text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em;">${s.label}</div>
    </div>
  `).join('');

  // Animate counters on intersection
  const observer = createObserver(entries => {
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

/**
 * Staggered Reveal Animations
 */
export function initStaggeredRevealAnimations() {
  const revealElements = qsa('.animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right, .animate-title');

  const revealObserver = createObserver(entries => {
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
