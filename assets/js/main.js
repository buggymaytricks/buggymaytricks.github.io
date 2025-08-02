/**
 * Main Module - Application initialization and orchestration
 * Coordinates all modules and handles the main initialization sequence
 */

// Import all modules
import { initEnhancedCursor, initEnhancedTyping, initAnimatedQuotes, initAnimatedStats, initStaggeredRevealAnimations } from './modules/animations.js';
import { initSkillsWithAnimations } from './modules/charts.js';
import { initMultiColumnTools, initDynamicProjects, initDynamicBlog, initMultiColumnContact } from './modules/content.js';
import { initSmoothNavigation, initMobileNavigation, initMobileViewportHandling, initEnhancedForm } from './modules/navigation.js';
import { initPerformanceMonitoring, detectConnection, monitorMemory } from './modules/performance.js';
import { initAllPerformanceOptimizations } from './modules/advanced-performance.js';
import { initAllDynamicLoading } from './modules/dynamic-loading.js';
import { initTextCompression } from './modules/text-compression.js';
import { initLCPOptimizations } from './modules/lcp-optimization.js';

// Initialize LCP optimizations immediately (before class definition)
initLCPOptimizations();

/**
 * Main Application Class
 */
class PortfolioApp {
  constructor() {
    this.initialized = false;
    this.modules = new Map();
    this.startTime = performance.now();
  }

  /**
   * Initialize the application
   */
  async init() {
    if (this.initialized) return;
    
    try {
      // Wait for Chart.js to be available
      await this.waitForDependencies();
      
      // Initialize modules in order of priority
      await this.initializeModules();
      
      // Mark as initialized
      this.initialized = true;
      
    } catch (error) {
      // Silent error handling
    }
  }

  /**
   * Wait for external dependencies
   */
  async waitForDependencies() {
    // Wait for Chart.js if needed
    if (document.querySelector('#skills-chart')) {
      let attempts = 0;
      const maxAttempts = 20;
      
      while (typeof Chart === 'undefined' && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }
      
      if (typeof Chart === 'undefined') {
        // Chart.js not loaded, skip
      } else {
        // Chart.js dependency ready
      }
    }
  }

  /**
   * Initialize all modules
   */
  async initializeModules() {
    // Mobile optimizations first (critical for UX)
    this.registerModule('mobileViewport', initMobileViewportHandling);
    this.registerModule('mobileNavigation', initMobileNavigation);
    
    // Core visual features
    this.registerModule('enhancedCursor', initEnhancedCursor);
    this.registerModule('enhancedTyping', initEnhancedTyping);
    this.registerModule('animatedQuotes', initAnimatedQuotes);
    this.registerModule('animatedStats', initAnimatedStats);
    
    // Content modules (can be async)
    // Note: skillsChart is now handled by dynamicLoading module
    this.registerModule('multiColumnTools', initMultiColumnTools);
    this.registerModule('dynamicProjects', initDynamicProjects, { async: true });
    this.registerModule('dynamicBlog', initDynamicBlog, { async: true });
    this.registerModule('multiColumnContact', initMultiColumnContact);
    
    // Interactive features
    this.registerModule('smoothNavigation', initSmoothNavigation);
    this.registerModule('staggeredAnimations', initStaggeredRevealAnimations);
    this.registerModule('enhancedForm', initEnhancedForm);
    
    // Performance monitoring (non-critical)
    this.registerModule('performanceMonitoring', initPerformanceMonitoring);
    this.registerModule('connectionDetection', detectConnection);
    this.registerModule('memoryMonitoring', monitorMemory);
    
    // Advanced performance optimizations
    this.registerModule('advancedPerformance', initAllPerformanceOptimizations, { async: true, delay: 1000 });
    this.registerModule('dynamicLoading', initAllDynamicLoading, { async: true, delay: 500 });
    this.registerModule('textCompression', initTextCompression, { async: true, delay: 200 });
    
    // Initialize all registered modules
    await this.runModules();
  }

  /**
   * Register a module
   * @param {string} name - Module name
   * @param {Function} initFn - Initialization function
   * @param {Object} options - Module options
   */
  registerModule(name, initFn, options = {}) {
    this.modules.set(name, {
      init: initFn,
      async: options.async || false,
      delay: options.delay || 0,
      critical: options.critical !== false,
      initialized: false
    });
  }

  /**
   * Run all registered modules
   */
  async runModules() {
    const criticalModules = [];
    const asyncModules = [];
    
    // Separate critical and async modules
    for (const [name, module] of this.modules) {
      if (module.critical && !module.async) {
        criticalModules.push({ name, module });
      } else {
        asyncModules.push({ name, module });
      }
    }
    
    // Run critical modules first
    for (const { name, module } of criticalModules) {
      try {
        await this.runModule(name, module);
      } catch (error) {
        // Silent error handling
      }
    }
    
    // Run async modules in parallel
    const asyncPromises = asyncModules.map(({ name, module }) => 
      this.runModule(name, module).catch(error => {
        // Silent error handling
      })
    );
    
    await Promise.allSettled(asyncPromises);
  }

  /**
   * Run a single module
   * @param {string} name - Module name
   * @param {Object} module - Module configuration
   */
  async runModule(name, module) {
    if (module.initialized) return;
    
    try {
      if (module.delay > 0) {
        await new Promise(resolve => setTimeout(resolve, module.delay));
      }
      
      if (module.async) {
        await module.init();
      } else {
        module.init();
      }
      
      module.initialized = true;
      
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get module status
   * @param {string} name - Module name
   * @returns {Object} Module status
   */
  getModuleStatus(name) {
    const module = this.modules.get(name);
    return module ? { 
      name, 
      initialized: module.initialized,
      critical: module.critical,
      async: module.async 
    } : null;
  }

  /**
   * Get all modules status
   * @returns {Array} All modules status
   */
  getAllModulesStatus() {
    return Array.from(this.modules.keys()).map(name => this.getModuleStatus(name));
  }
}

// Create global app instance
const app = new PortfolioApp();

// Make app available globally for debugging
window.portfolioApp = app;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Wait for all scripts to load including Chart.js
  if (document.readyState === 'loading') {
    window.addEventListener('load', () => app.init());
  } else {
    // If already loaded, wait a bit for Chart.js
    setTimeout(() => app.init(), 100);
  }
});

// Export for module usage
export default app;
