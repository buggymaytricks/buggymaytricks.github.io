/**
 * LCP Optimization Module - Largest Contentful Paint improvements
 * Focuses on optimizing the largest content element rendering
 */

/**
 * Optimize LCP by prioritizing hero content
 */
export function optimizeLCP() {
  // 1. Immediately show hero skeleton to improve perceived performance
  const heroSection = document.querySelector('#home');
  if (heroSection) {
    heroSection.style.visibility = 'visible';
    heroSection.style.opacity = '1';
  }

  // 2. Prioritize hero text rendering
  const heroText = document.querySelector('#typed-text');
  if (heroText) {
    // Ensure hero text is immediately visible
    heroText.style.minHeight = '1.5em';
    heroText.style.display = 'inline-block';
  }

  // 3. Preload hero fonts immediately
  const heroFontLink = document.createElement('link');
  heroFontLink.rel = 'preload';
  heroFontLink.href = '/assets/fonts/JetBrainsMono-Bold.woff2';
  heroFontLink.as = 'font';
  heroFontLink.type = 'font/woff2';
  heroFontLink.crossOrigin = 'anonymous';
  document.head.insertBefore(heroFontLink, document.head.firstChild);

  // 4. Reduce layout shifts
  requestAnimationFrame(() => {
    const heroElements = document.querySelectorAll('.hero *');
    heroElements.forEach(el => {
      if (el.offsetWidth === 0) {
        el.style.minWidth = '1px';
      }
    });
  });

  console.log('🎯 LCP optimization applied');
}

/**
 * Critical resource hints for fastest loading
 */
export function addCriticalResourceHints() {
  const hints = [
    // DNS prefetch for external resources
    { rel: 'dns-prefetch', href: '//api.github.com' },
    
    // Preconnect to critical domains
    { rel: 'preconnect', href: location.origin },
    
    // Preload critical images if any
    // { rel: 'preload', href: '/assets/images/hero-bg.webp', as: 'image' }
  ];

  hints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
}

/**
 * Reduce main thread blocking for faster LCP
 */
export function optimizeMainThread() {
  // Defer non-critical operations
  const deferredTasks = [];
  
  // Add tasks that can be deferred
  deferredTasks.push(
    () => import('./advanced-performance.js'),
    () => import('./dynamic-loading.js')
  );
  
  // Execute deferred tasks after LCP
  const executeDeferredTasks = () => {
    deferredTasks.forEach((task, index) => {
      setTimeout(task, index * 100);
    });
  };
  
  // Wait for LCP measurement or timeout
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      if (entries.length > 0) {
        observer.disconnect();
        executeDeferredTasks();
      }
    });
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      // Fallback timeout
      setTimeout(executeDeferredTasks, 3000);
    } catch (e) {
      executeDeferredTasks();
    }
  } else {
    // Fallback for browsers without PerformanceObserver
    setTimeout(executeDeferredTasks, 1000);
  }
}

/**
 * Critical CSS loading optimization
 */
export function optimizeCriticalCSS() {
  // Mark critical CSS as loaded
  document.documentElement.classList.add('css-loaded');
  
  // Add critical viewport meta if missing
  if (!document.querySelector('meta[name="viewport"]')) {
    const viewport = document.createElement('meta');
    viewport.name = 'viewport';
    viewport.content = 'width=device-width, initial-scale=1.0';
    document.head.insertBefore(viewport, document.head.firstChild);
  }
}

/**
 * Initialize all LCP optimizations
 */
export function initLCPOptimizations() {
  // Run immediately
  optimizeLCP();
  addCriticalResourceHints();
  optimizeCriticalCSS();
  
  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeMainThread);
  } else {
    optimizeMainThread();
  }
  
  console.log('🚀 LCP optimizations initialized');
}
