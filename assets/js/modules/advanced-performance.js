/**
 * Advanced Performance Module - Enhanced optimization utilities
 * Implements modern performance patterns and optimizations
 */

import { isMobile, debounce } from './utils.js';

/**
 * Advanced Performance Monitoring with Core Web Vitals
 */
export function initAdvancedPerformanceMonitoring() {
  const startTime = performance.now();
  
  // Track initialization performance
  const perfObserver = {
    entries: [],
    observe: function(entry) {
      this.entries.push({
        name: entry.name,
        startTime: entry.startTime,
        duration: entry.duration,
        type: entry.entryType
      });
    }
  };

  // Monitor largest contentful paint
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log(`🎯 LCP: ${entry.startTime.toFixed(1)}ms`);
          }
          if (entry.entryType === 'first-input') {
            console.log(`⚡ FID: ${entry.processingStart - entry.startTime.toFixed(1)}ms`);
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    } catch (error) {
      console.log('Performance Observer not fully supported');
    }
  }

  window.addEventListener('load', () => {
    const loadTime = (performance.now() - startTime).toFixed(1);
    console.log(`⚡ Portfolio loaded in ${loadTime}ms`);
    
    // Report navigation timing
    const navigation = performance.getEntriesByType('navigation')[0];
    if (navigation) {
      console.log(`🔄 DNS: ${(navigation.domainLookupEnd - navigation.domainLookupStart).toFixed(1)}ms`);
      console.log(`🔗 Connect: ${(navigation.connectEnd - navigation.connectStart).toFixed(1)}ms`);
      console.log(`📄 DOM: ${(navigation.domContentLoadedEventEnd - navigation.navigationStart).toFixed(1)}ms`);
    }
  });
}

/**
 * Intersection Observer for Lazy Loading
 */
export function createLazyLoader(callback, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  const observerOptions = { ...defaultOptions, ...options };
  
  if ('IntersectionObserver' in window) {
    return new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, observerOptions);
  }
  
  // Fallback for older browsers
  return {
    observe: (element) => callback(element),
    unobserve: () => {},
    disconnect: () => {}
  };
}

/**
 * Dynamic Chart.js Loading
 */
export async function loadChartJsDynamically() {
  // Only load if Chart.js isn't already available and skills chart exists
  if (typeof Chart !== 'undefined' || !document.querySelector('#skills-chart')) {
    return Promise.resolve();
  }
  
  try {
    // Create script element
    const script = document.createElement('script');
    script.src = '/assets/js/chart.umd.js';
    script.defer = true;
    
    // Return promise that resolves when script loads
    return new Promise((resolve, reject) => {
      script.onload = () => {
        console.log('📊 Chart.js loaded dynamically');
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  } catch (error) {
    console.error('Failed to load Chart.js dynamically:', error);
    throw error;
  }
}

/**
 * Critical Resource Preloader
 */
export function preloadCriticalResources() {
  const criticalResources = [
    { href: '/style.css', as: 'style' },
    { href: '/assets/fonts/JetBrainsMono-Regular.woff2', as: 'font', type: 'font/woff2', crossorigin: true }
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = 'anonymous';
    
    document.head.appendChild(link);
  });
}

/**
 * Memory Usage Monitor
 */
export function monitorMemoryUsage() {
  if ('memory' in performance) {
    const logMemory = debounce(() => {
      const memory = performance.memory;
      const used = (memory.usedJSHeapSize / 1048576).toFixed(1);
      const total = (memory.totalJSHeapSize / 1048576).toFixed(1);
      const limit = (memory.jsHeapSizeLimit / 1048576).toFixed(1);
      
      console.log(`🧠 Memory: ${used}MB / ${total}MB (limit: ${limit}MB)`);
      
      // Warn if memory usage is high
      if (memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.8) {
        console.warn('⚠️ High memory usage detected');
      }
    }, 5000);
    
    // Monitor periodically
    setInterval(logMemory, 30000);
    logMemory(); // Initial check
  }
}

/**
 * Network Quality Detection
 */
export function detectNetworkQuality() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  if (connection) {
    const quality = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };
    
    console.log('🌐 Network:', quality);
    
    // Adjust performance based on connection
    if (quality.effectiveType === 'slow-2g' || quality.effectiveType === '2g' || quality.saveData) {
      document.documentElement.classList.add('reduced-motion');
      console.log('🐌 Slow connection detected - reducing animations');
    }
    
    return quality;
  }
  
  return null;
}

/**
 * Battery-Aware Performance
 */
export function initBatteryAwarePerformance() {
  if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
      const checkBattery = () => {
        if (battery.level < 0.2 && !battery.charging) {
          document.documentElement.classList.add('power-save');
          console.log('🔋 Low battery - enabling power save mode');
        } else {
          document.documentElement.classList.remove('power-save');
        }
      };
      
      battery.addEventListener('levelchange', checkBattery);
      battery.addEventListener('chargingchange', checkBattery);
      checkBattery(); // Initial check
    });
  }
}

/**
 * Adaptive Image Loading
 */
export function initAdaptiveImageLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const connection = detectNetworkQuality();
  
  const imageObserver = createLazyLoader((img) => {
    // Use different image quality based on connection
    let src = img.dataset.src;
    
    if (connection && (connection.effectiveType === '2g' || connection.saveData)) {
      // Use lower quality images for slow connections
      src = src.replace('.jpg', '-low.jpg').replace('.png', '-low.png');
    }
    
    img.src = src;
    img.classList.add('loaded');
    imageObserver.unobserve(img);
  }, { rootMargin: '100px' });
  
  images.forEach(img => imageObserver.observe(img));
}

/**
 * Service Worker Registration
 */
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('🔄 Service Worker registered:', registration.scope);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
}

/**
 * FPS Monitor (Debug Mode)
 */
export function initFPSMonitor(debug = false) {
  if (!debug) return;
  
  let fps = 0;
  let lastTime = performance.now();
  let fpsCheckCount = 0;
  
  function countFPS() {
    const currentTime = performance.now();
    fps = 1000 / (currentTime - lastTime);
    lastTime = currentTime;
    fpsCheckCount++;
    
    // Only warn about low FPS after some frames and not too frequently
    if (fpsCheckCount > 60 && fpsCheckCount % 120 === 0 && fps < 25) {
      console.warn(`⚠️ Low FPS detected: ${fps.toFixed(1)}`);
    }
    
    requestAnimationFrame(countFPS);
  }
  
  requestAnimationFrame(countFPS);
}

/**
 * Initialize All Performance Optimizations
 */
export function initAllPerformanceOptimizations() {
  initAdvancedPerformanceMonitoring();
  detectNetworkQuality();
  initBatteryAwarePerformance();
  monitorMemoryUsage();
  initAdaptiveImageLoading();
  registerServiceWorker();
  
  // Enable FPS monitor in development
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    initFPSMonitor(true);
  }
}
