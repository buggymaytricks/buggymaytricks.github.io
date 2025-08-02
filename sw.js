/**
 * Service Worker for Enhanced Portfolio
 * Provides offline capabilities and caching strategies
 */

const CACHE_NAME = 'portfolio-cache-v1';
const STATIC_CACHE = 'portfolio-static-v1';
const DYNAMIC_CACHE = 'portfolio-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/style.css',
  '/assets/js/main.js',
  '/assets/js/chart.umd.js',
  '/assets/fonts/JetBrainsMono-Regular.woff2',
  '/assets/fonts/JetBrainsMono-Medium.woff2',
  '/assets/fonts/JetBrainsMono-Bold.woff2',
  '/assets/css/jetbrains-mono.css'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch(error => {
        // Silent error handling
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }
  
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Not in cache, fetch from network
        return fetch(request)
          .then(networkResponse => {
            // Check if valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            
            // Clone response for caching
            const responseToCache = networkResponse.clone();
            
            // Cache dynamic content
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(request, responseToCache);
              });
            
            return networkResponse;
          })
          .catch(error => {
            // Return offline fallback for HTML pages
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html');
            }
            
            throw error;
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form') {
    event.waitUntil(
      // Handle offline form submissions
      syncContactForm()
    );
  }
});

// Handle contact form sync
async function syncContactForm() {
  try {
    const formData = await getStoredFormData();
    if (formData) {
      const response = await fetch('/contact', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        await clearStoredFormData();
      }
    }
  } catch (error) {
    // Silent error handling
  }
}

// Helper functions for form data storage
async function getStoredFormData() {
  // Implementation would depend on IndexedDB storage
  return null;
}

async function clearStoredFormData() {
  // Implementation would depend on IndexedDB storage
}

// Push notification handling (for future blog updates)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/assets/icons/icon-192x192.png',
      badge: '/assets/icons/badge-72x72.png',
      data: data.url
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.notification.data) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});
