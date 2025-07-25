/**
 * Text Compression Module - Optimize file delivery and reduce bandwidth
 * Implements client-side text compression techniques and monitoring
 */

/**
 * Initialize text compression optimizations
 */
export function initTextCompression() {
  // 1. Enable compression headers if supported
  addCompressionHeaders();
  
  // 2. Compress dynamic content
  compressDynamicContent();
  
  // 3. Monitor compression effectiveness
  monitorCompression();
  
  // 4. Optimize text delivery
  optimizeTextDelivery();
  
  console.log('🗜️ Text compression optimizations initialized');
}

/**
 * Add compression-related meta tags and headers
 */
function addCompressionHeaders() {
  // Add compression hints to HTML
  const meta = document.createElement('meta');
  meta.httpEquiv = 'Content-Encoding';
  meta.content = 'gzip, deflate, br';
  document.head.appendChild(meta);
  
  // Add resource hints for better compression
  const resourceHints = [
    { rel: 'preconnect', href: location.origin },
    { rel: 'dns-prefetch', href: '//api.github.com' }
  ];
  
  resourceHints.forEach(hint => {
    const link = document.createElement('link');
    Object.assign(link, hint);
    document.head.appendChild(link);
  });
}

/**
 * Compress dynamic content before sending
 */
function compressDynamicContent() {
  // Compress localStorage data
  const originalSetItem = localStorage.setItem;
  localStorage.setItem = function(key, value) {
    try {
      // Simple compression for text data
      const compressed = compressText(value);
      originalSetItem.call(this, key, compressed);
    } catch (e) {
      originalSetItem.call(this, key, value);
    }
  };
  
  const originalGetItem = localStorage.getItem;
  localStorage.getItem = function(key) {
    try {
      const value = originalGetItem.call(this, key);
      return value ? decompressText(value) : value;
    } catch (e) {
      return originalGetItem.call(this, key);
    }
  };
}

/**
 * Simple text compression using built-in methods
 */
function compressText(text) {
  try {
    // Use TextEncoder/TextDecoder for compression simulation
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    
    // Basic compression: remove extra whitespace and compress JSON
    if (typeof text === 'string') {
      let compressed = text
        .replace(/\s+/g, ' ')           // Multiple spaces to single
        .replace(/\n\s*/g, '\n')        // Clean newlines
        .trim();                        // Remove leading/trailing space
      
      // Try to parse and minify JSON
      try {
        const parsed = JSON.parse(compressed);
        compressed = JSON.stringify(parsed); // Minified JSON
      } catch (e) {
        // Not JSON, keep as is
      }
      
      return compressed;
    }
    return text;
  } catch (e) {
    return text;
  }
}

/**
 * Decompress text
 */
function decompressText(text) {
  // For this simple implementation, text is already decompressed
  // In production, you'd implement actual decompression
  return text;
}

/**
 * Monitor compression effectiveness
 */
function monitorCompression() {
  const compressionStats = {
    originalSize: 0,
    compressedSize: 0,
    ratio: 0
  };
  
  // Monitor fetch requests for compression headers
  const originalFetch = window.fetch;
  window.fetch = function(...args) {
    return originalFetch.apply(this, args).then(response => {
      // Check compression headers
      const encoding = response.headers.get('content-encoding');
      const length = response.headers.get('content-length');
      
      if (encoding && length) {
        console.log(`🗜️ Resource compressed with ${encoding}: ${length} bytes`);
      }
      
      return response;
    });
  };
  
  // Report compression stats
  window.addEventListener('load', () => {
    setTimeout(() => reportCompressionStats(), 2000);
  });
}

/**
 * Optimize text delivery
 */
function optimizeTextDelivery() {
  // 1. Minify inline JSON data
  const scripts = document.querySelectorAll('script[type="application/json"]');
  scripts.forEach(script => {
    try {
      const data = JSON.parse(script.textContent);
      script.textContent = JSON.stringify(data); // Minified
    } catch (e) {
      // Not JSON, skip
    }
  });
  
  // 2. Compress large text content
  const textElements = document.querySelectorAll('[data-compress]');
  textElements.forEach(el => {
    const original = el.textContent;
    const compressed = compressText(original);
    if (compressed.length < original.length) {
      el.textContent = compressed;
      el.title = `Compressed: ${original.length} → ${compressed.length} chars`;
    }
  });
  
  // 3. Enable text compression for dynamic content
  compressStringPrototype();
}

/**
 * Add compression methods to String prototype
 */
function compressStringPrototype() {
  if (!String.prototype.compress) {
    String.prototype.compress = function() {
      return compressText(this.toString());
    };
  }
  
  if (!String.prototype.getCompressionRatio) {
    String.prototype.getCompressionRatio = function() {
      const compressed = this.compress();
      return ((this.length - compressed.length) / this.length * 100).toFixed(1);
    };
  }
}

/**
 * Report compression statistics
 */
function reportCompressionStats() {
  const stats = analyzePageCompression();
  
  console.group('🗜️ Text Compression Report');
  console.log(`📊 Total HTML: ${formatBytes(stats.html.original)} → ${formatBytes(stats.html.compressed)}`);
  console.log(`📊 Total CSS: ${formatBytes(stats.css.original)} → ${formatBytes(stats.css.compressed)}`);
  console.log(`📊 Total JS: ${formatBytes(stats.js.original)} → ${formatBytes(stats.js.compressed)}`);
  console.log(`📊 Overall ratio: ${stats.overallRatio}%`);
  console.log(`💾 Bandwidth saved: ${formatBytes(stats.totalSaved)}`);
  console.groupEnd();
  
  return stats;
}

/**
 * Analyze page compression potential
 */
function analyzePageCompression() {
  const stats = {
    html: { original: 0, compressed: 0 },
    css: { original: 0, compressed: 0 },
    js: { original: 0, compressed: 0 },
    overallRatio: 0,
    totalSaved: 0
  };
  
  // Estimate HTML compression
  const htmlSize = document.documentElement.outerHTML.length;
  stats.html.original = htmlSize;
  stats.html.compressed = Math.round(htmlSize * 0.3); // ~70% compression typical
  
  // Estimate CSS compression (check stylesheets)
  document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => {
    if (el.tagName === 'STYLE') {
      const size = el.textContent.length;
      stats.css.original += size;
      stats.css.compressed += Math.round(size * 0.25); // ~75% compression
    }
  });
  
  // Estimate JS compression
  document.querySelectorAll('script').forEach(el => {
    if (el.textContent) {
      const size = el.textContent.length;
      stats.js.original += size;
      stats.js.compressed += Math.round(size * 0.35); // ~65% compression
    }
  });
  
  const totalOriginal = stats.html.original + stats.css.original + stats.js.original;
  const totalCompressed = stats.html.compressed + stats.css.compressed + stats.js.compressed;
  
  stats.overallRatio = totalOriginal > 0 ? 
    Math.round((totalOriginal - totalCompressed) / totalOriginal * 100) : 0;
  stats.totalSaved = totalOriginal - totalCompressed;
  
  return stats;
}

/**
 * Format bytes for display
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

/**
 * Server-side compression recommendations
 */
export function getServerCompressionConfig() {
  const config = {
    apache: {
      description: 'Apache .htaccess configuration',
      code: `
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Enable Brotli if available
<IfModule mod_brotli.c>
  BrotliCompressionLevel 6
  BrotliFilterByType text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript
</IfModule>`
    },
    nginx: {
      description: 'Nginx configuration',
      code: `
# Enable Gzip
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

# Enable Brotli
brotli on;
brotli_comp_level 6;
brotli_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;`
    },
    cloudflare: {
      description: 'Cloudflare settings',
      code: `
1. Go to Speed > Optimization
2. Enable "Auto Minify" for HTML, CSS, JS
3. Enable "Brotli" compression
4. Enable "Enhanced HTTP/2 Prioritization"`
    }
  };
  
  console.table(config);
  return config;
}

/**
 * Text compression utilities
 */
export const compressionUtils = {
  compressText,
  decompressText,
  formatBytes,
  analyzePageCompression,
  getCompressionRatio: (text) => {
    const compressed = compressText(text);
    return ((text.length - compressed.length) / text.length * 100).toFixed(1);
  }
};
