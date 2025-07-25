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
    
    console.log(`⚡ Enhanced Portfolio loaded in ${loadTime}ms`);
    console.log(`🎨 Rich animations and multi-column layouts active`);
    console.log(`📱 Mobile optimized: ${mobile ? 'YES' : 'NO'}`);
    
    if (!mobile) {
      console.log('🖱️ Enhanced cursor with trailing effects enabled');
    } else {
      console.log('👆 Touch-optimized interface enabled');
    }
    
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
      webVitals.getCLS(console.log);
      webVitals.getFID(console.log);
      webVitals.getFCP(console.log);
      webVitals.getLCP(console.log);
      webVitals.getTTFB(console.log);
    }
  } catch (error) {
    console.log('Web Vitals not available');
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
    console.log('📊 Memory Usage:', {
      used: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      total: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
      limit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
    });
  }
}

/**
 * Connection Speed Detection
 */
export function detectConnection() {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    console.log('🌐 Connection:', {
      type: connection.effectiveType,
      downlink: `${connection.downlink} Mbps`,
      rtt: `${connection.rtt}ms`,
      saveData: connection.saveData
    });
    
    // Adjust features based on connection
    if (connection.saveData || connection.effectiveType === 'slow-2g') {
      document.body.classList.add('save-data');
      console.log('💾 Save-Data mode enabled');
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
      console.log(`🎬 Frame Rate: ${fps} FPS`);
      
      if (fps < 30) {
        console.warn('⚠️ Low frame rate detected, consider optimizing animations');
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
    
    console.log(`📦 Total Resources: ${(totalSize / 1024).toFixed(2)} KB`);
  }
}
