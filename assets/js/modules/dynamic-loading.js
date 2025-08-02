/**
 * Dynamic Loading Module - Advanced code splitting and lazy loading
 * Implements dynamic imports and progressive loading strategies
 */

import { createLazyLoader } from './advanced-performance.js';

/**
 * Dynamic Chart Loading with Intersection Observer
 */
export async function initDynamicChartLoading() {
  const skillsChart = document.querySelector('#skills-chart');
  if (!skillsChart || skillsChart.dataset.chartLoaded) return;
  
  const chartObserver = createLazyLoader(async (element) => {
    try {
      // Loading skills chart...
      
      // Mark as loading to prevent double initialization
      element.dataset.chartLoaded = 'true';
      
      // Dynamically import chart functionality
      const { initSkillsWithAnimations } = await import('./charts.js');
      
      // Ensure Chart.js is loaded
      if (typeof Chart === 'undefined') {
        await loadChartJsIfNeeded();
      }
      
      // Initialize the chart
      await initSkillsWithAnimations();
      
      // Skills chart loaded and initialized
      chartObserver.unobserve(element);
      
    } catch (error) {
      // Failed to load skills chart
    }
  }, { rootMargin: '200px' });
  
  chartObserver.observe(skillsChart);
}

/**
 * Load Chart.js only when needed
 */
async function loadChartJsIfNeeded() {
  if (typeof Chart !== 'undefined') return;
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/assets/js/chart.umd.js';
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

/**
 * Dynamic Animation Loading for Performance
 */
export function initDynamicAnimations() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 768;
  const isSlowConnection = navigator.connection?.effectiveType === '2g' || navigator.connection?.effectiveType === 'slow-2g';
  
  // Skip heavy animations on slow devices/connections
  if (prefersReducedMotion || isSlowConnection) {
    // Skipping heavy animations for better performance
    return;
  }
  
  // Load animations based on viewport
  const animatedElements = document.querySelectorAll('[data-animate]');
  const animationObserver = createLazyLoader(async (element) => {
    const animationType = element.dataset.animate;
    
    try {
      switch (animationType) {
        case 'cursor':
          if (!isMobile) {
            const { initEnhancedCursor } = await import('./animations.js');
            initEnhancedCursor();
          }
          break;
          
        case 'typing':
          const { initEnhancedTyping } = await import('./animations.js');
          initEnhancedTyping();
          break;
          
        case 'reveal':
          const { initStaggeredRevealAnimations } = await import('./animations.js');
          initStaggeredRevealAnimations();
          break;
          
        case 'stats':
          const { initAnimatedStats } = await import('./animations.js');
          initAnimatedStats();
          break;
      }
      
      animationObserver.unobserve(element);
    } catch (error) {
      // Failed to load animation
    }
  }, { rootMargin: '100px' });
  
  animatedElements.forEach(element => animationObserver.observe(element));
}

/**
 * Progressive Content Loading
 */
export function initProgressiveContentLoading() {
  const contentSections = [
    { selector: '#projects-section', module: 'content', function: 'initDynamicProjects' },
    { selector: '#blog-section', module: 'content', function: 'initDynamicBlog' },
    { selector: '#tools-section', module: 'content', function: 'initMultiColumnTools' },
    { selector: '#contact-section', module: 'content', function: 'initMultiColumnContact' }
  ];
  
  contentSections.forEach(({ selector, module, function: functionName }) => {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const contentObserver = createLazyLoader(async (el) => {
      try {
        // Loading content...
        
        const moduleExports = await import(`./${module}.js`);
        const initFunction = moduleExports[functionName];
        
        if (initFunction) {
          await initFunction();
          // Content loaded
        }
        
        contentObserver.unobserve(el);
      } catch (error) {
        // Failed to load content
      }
    }, { rootMargin: '300px' });
    
    contentObserver.observe(element);
  });
}

/**
 * Conditional Feature Loading
 */
export function initConditionalFeatures() {
  const features = [];
  
  // Enhanced form only if contact form exists
  if (document.querySelector('#contact-form')) {
    features.push({
      name: 'Enhanced Form',
      load: () => import('./navigation.js').then(m => m.initEnhancedForm())
    });
  }
  
  // Mobile navigation only on mobile
  if (window.innerWidth <= 768) {
    features.push({
      name: 'Mobile Navigation',
      load: () => import('./navigation.js').then(m => m.initMobileNavigation())
    });
  }
  
  // Performance monitoring only in development
  if (location.hostname === 'localhost') {
    features.push({
      name: 'Advanced Performance Monitoring',
      load: () => import('./advanced-performance.js').then(m => m.initAllPerformanceOptimizations())
    });
  }
  
  // Load features with delay
  features.forEach((feature, index) => {
    setTimeout(async () => {
      try {
        await feature.load();
        // Feature loaded
      } catch (error) {
        // Failed to load feature
      }
    }, index * 100);
  });
}

/**
 * Prefetch Next Page Resources
 */
export function initResourcePrefetching() {
  const links = document.querySelectorAll('a[href^="/"]');
  
  const prefetchObserver = createLazyLoader((link) => {
    const href = link.getAttribute('href');
    if (href && !link.dataset.prefetched) {
      // Prefetch the page
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = href;
      document.head.appendChild(prefetchLink);
      
      link.dataset.prefetched = 'true';
    }
  }, { rootMargin: '50px' });
  
  links.forEach(link => prefetchObserver.observe(link));
}

/**
 * Initialize All Dynamic Loading Features
 */
export function initAllDynamicLoading() {
  initDynamicChartLoading();
  initDynamicAnimations();
  initProgressiveContentLoading();
  initConditionalFeatures();
  
  // Prefetch resources after initial load
  setTimeout(initResourcePrefetching, 2000);
  
  // Dynamic loading initialized
}
