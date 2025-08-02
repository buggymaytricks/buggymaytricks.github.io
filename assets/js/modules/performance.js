/**
 * Performance Module - Performance monitoring and optimization
 * Handles performance tracking and optimization utilities
 */

import { isMobile } from './utils.js';

/**
 * Performance Monitoring
 */
export function initPerformanceMonitoring() {
  const startTime = performance.now();
  
  window.addEventListener('load', () => {
    const loadTime = (performance.now() - startTime).toFixed(1);
    const mobile = isMobile();
    
    // Report Core Web Vitals
    if ('web-vital' in window) {
      reportWebVitals();
    }
  });
}

/**
 * Report Core Web Vitals (if available)
 */
function reportWebVitals() {
  // This would integrate with web-vitals library if loaded
  try {
    if (typeof webVitals !== 'undefined') {
      webVitals.getCLS(() => {});
      webVitals.getFID(() => {});
      webVitals.getFCP(() => {});
      webVitals.getLCP(() => {});
      webVitals.getTTFB(() => {});
    }
  } catch (error) {
    // Silent error handling
  }
}

/**
 * Lazy Loading Helper
 * @param {string} selector - Element selector
 * @param {Function} callback - Callback when element is visible
 * @param {Object} options - Intersection observer options
 */
export function lazyLoad(selector, callback, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  });
  
  elements.forEach(el => observer.observe(el));
}

/**
 * Resource Hints Helper
 * @param {string} url - Resource URL
 * @param {string} as - Resource type
 */
export function preloadResource(url, as = 'script') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = url;
  link.as = as;
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}

/**
 * Critical Resource Loader
 * @param {Array} resources - Array of resource objects
 */
export function loadCriticalResources(resources) {
  resources.forEach(resource => {
    if (resource.critical) {
      preloadResource(resource.url, resource.as);
    }
  });
}

/**
 * Memory Usage Monitor (if available)
 */
export function monitorMemory() {
  if ('memory' in performance) {
    const memory = performance.memory;
    // Silent memory monitoring
  }
}

/**
 * Connection Speed Detection
 */
export function detectConnection() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    
    // Adjust features based on connection
    if (connection.saveData || connection.effectiveType === 'slow-2g') {
      document.body.classList.add('save-data');
    }
  }
}

/**
 * Frame Rate Monitor
 */
export function monitorFrameRate() {
  let frames = 0;
  let lastTime = performance.now();
  
  function countFrames(currentTime) {
    frames++;
    
    if (currentTime >= lastTime + 1000) {
      const fps = Math.round((frames * 1000) / (currentTime - lastTime));
      
      if (fps < 30) {
        // Low frame rate detected - could optimize animations
      }
      
      frames = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(countFrames);
  }
  
  requestAnimationFrame(countFrames);
}

/**
 * Bundle Size Reporter
 */
export function reportBundleSize() {
  if ('performance' in window) {
    const resources = performance.getEntriesByType('resource');
    let totalSize = 0;
    
    resources.forEach(resource => {
      if (resource.transferSize) {
        totalSize += resource.transferSize;
      }
    });
    
    // Silent bundle size calculation
  }
}
