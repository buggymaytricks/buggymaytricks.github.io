/**
 * Navigation Module - Navigation handling and mobile optimizations
 * Handles smooth scrolling, mobile nav, and viewport management
 */

import { qs, qsa, isMobile } from './utils.js';

/**
 * Smooth Scroll Navigation
 */
export function initSmoothNavigation() {
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
        const offset = isMobile() ? 80 : 100; // Adjust offset for mobile
        const targetPosition = section.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
    
    // Add touch feedback for mobile
    if ('ontouchstart' in window) {
      link.addEventListener('touchstart', () => {
        link.style.backgroundColor = 'rgba(0, 212, 255, 0.2)';
      });
      
      link.addEventListener('touchend', () => {
        setTimeout(() => {
          link.style.backgroundColor = '';
        }, 150);
      });
    }
  });

  // Active link highlighting
  const sections = qsa('section[id]');
  
  function updateActiveLink() {
    const scrollPos = window.scrollY + (isMobile() ? 120 : 150);
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

/**
 * Mobile Navigation - Simple Blog Link
 */
export function initMobileNavigation() {
  // No complex dropdown needed - just a simple blog link
  // The mobile nav is now just a single blog link, no JavaScript needed
  return;
}

/**
 * Mobile Viewport Handling
 */
export function initMobileViewportHandling() {
  // Handle mobile viewport height changes (iOS Safari)
  function setViewportHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  setViewportHeight();
  window.addEventListener('resize', setViewportHeight);
  window.addEventListener('orientationchange', () => {
    setTimeout(setViewportHeight, 100);
  });

  // Prevent zoom on double tap for better mobile experience
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);
}

/**
 * Enhanced Form Handling
 */
export function initEnhancedForm() {
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
