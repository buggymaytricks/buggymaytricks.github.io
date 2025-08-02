/**
 * Utils Module - Helper functions and utilities
 * Contains DOM helpers, caching, and common utilities
 */

// DOM Helper Functions
export const qs = (sel, ctx = document) => ctx.querySelector(sel);
export const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/**
 * Enhanced caching helper for API requests
 * @param {string} cacheKey - Unique key for caching
 * @param {number} ttlMinutes - Time to live in minutes
 * @returns {Function} - Cached fetch function
 */
export function createCachedFetch(cacheKey, ttlMinutes = 60) {
  return async function(url, options = {}) {
    try {
      // Check if we have cached data
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        const now = Date.now();
        const cacheAge = (now - timestamp) / (1000 * 60); // Age in minutes
        
        if (cacheAge < ttlMinutes) {
          // Using cached data
          return { 
            ok: true, 
            json: () => Promise.resolve(data),
            status: 200 
          };
        }
      }
      
      // Cache miss or expired - fetch fresh data
      // Fetching fresh data
      const response = await fetch(url, options);
      
      if (response.ok) {
        const data = await response.json();
        // Store in cache
        localStorage.setItem(cacheKey, JSON.stringify({
          data: data,
          timestamp: Date.now()
        }));
        // Cached data
        
        // Return response that mimics fetch API
        return {
          ok: true,
          json: () => Promise.resolve(data),
          status: response.status
        };
      } else {
        return response; // Return error response as-is
      }
    } catch (error) {
      // Cache/fetch error
      throw error;
    }
  };
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Intersection Observer helper for animations
 * @param {Function} callback - Callback function
 * @param {Object} options - Observer options
 * @returns {IntersectionObserver} - Observer instance
 */
export function createObserver(callback, options = {}) {
  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}

/**
 * Animation frame helper for smooth animations
 * @param {Function} callback - Animation callback
 * @returns {Function} - Start animation function
 */
export function createAnimationLoop(callback) {
  let animationId;
  let isRunning = false;
  
  function animate() {
    if (isRunning) {
      callback();
      animationId = requestAnimationFrame(animate);
    }
  }
  
  return {
    start() {
      if (!isRunning) {
        isRunning = true;
        animate();
      }
    },
    stop() {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    }
  };
}

/**
 * Check if device is mobile
 * @returns {boolean} - True if mobile device
 */
export function isMobile() {
  return window.innerWidth <= 768 || 'ontouchstart' in window;
}

/**
 * Get random integer between min and max
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get random array element
 * @param {Array} array - Source array
 * @returns {*} - Random element
 */
export function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Format date for display
 * @param {string|Date} date - Date to format
 * @param {Object} options - Format options
 * @returns {string} - Formatted date
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options });
}
