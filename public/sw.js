// Service Worker for MediMind Expert PWA
const CACHE_NAME = 'medimind-v1.0.0';
const OFFLINE_URL = '/offline.html';

// Files to cache for offline functionality
const urlsToCache = [
  '/',
  '/offline.html',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  // Add critical medical calculator resources
  '/calculators',
  '/static/medical-data/critical-values.json'
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Install event');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching critical resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        // Force activate this service worker
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages
        return self.clients.claim();
      })
  );
});

// Fetch event - handle network requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // If successful, cache the response
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // If offline, serve from cache or fallback page
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                return cachedResponse;
              }
              // Serve offline fallback page
              return caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // Handle API requests
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/.netlify/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful API responses for medical data
          if (response.status === 200 && isCacheableAPIRequest(url.pathname)) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // Try to serve from cache
          return caches.match(request)
            .then((cachedResponse) => {
              if (cachedResponse) {
                console.log('[SW] Serving API request from cache:', request.url);
                return cachedResponse;
              }
              // Return a network error response
              throw new Error('Network error and no cached response available');
            });
        })
    );
    return;
  }
  
  // Handle static assets (cache first strategy)
  if (isStaticAsset(url.pathname)) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((response) => {
              // Cache the asset if successful
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            });
        })
    );
    return;
  }
  
  // Default: network first, cache fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseClone);
            });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});

// Helper functions
function isStaticAsset(pathname) {
  const staticExtensions = ['.js', '.css', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'];
  return staticExtensions.some(ext => pathname.endsWith(ext));
}

function isCacheableAPIRequest(pathname) {
  // Cache medical calculator data and other static medical content
  const cacheablePatterns = [
    '/api/calculators',
    '/api/medical-data',
    '/api/reference-values'
  ];
  return cacheablePatterns.some(pattern => pathname.includes(pattern));
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync event:', event.tag);
  
  if (event.tag === 'medimind-offline-sync') {
    event.waitUntil(
      syncOfflineActions()
    );
  }
});

async function syncOfflineActions() {
  try {
    // Get queued actions from IndexedDB or localStorage
    const queuedActions = await getQueuedActions();
    
    for (const action of queuedActions) {
      try {
        await processQueuedAction(action);
        await removeQueuedAction(action.id);
        console.log('[SW] Successfully synced action:', action.type);
      } catch (error) {
        console.error('[SW] Failed to sync action:', action.type, error);
      }
    }
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

async function getQueuedActions() {
  // This would integrate with the OfflineActionQueue from the React app
  // For now, return empty array
  return [];
}

async function processQueuedAction(action) {
  // Process the queued action by making the appropriate API call
  console.log('[SW] Processing queued action:', action);
}

async function removeQueuedAction(actionId) {
  // Remove the action from the queue
  console.log('[SW] Removing queued action:', actionId);
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push event:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from MediMind Expert',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/icons/checkmark.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('MediMind Expert', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification click:', event);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

console.log('[SW] Service Worker loaded successfully'); 