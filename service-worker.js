const CACHE_NAME = 'dark-side-v1';
const ASSETS = [
  './',
  './index.html'
];

self.addEventListener('install', (e) => {
  self.skipWaiting(); // Forces the waiting service worker to become the active service worker
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim()); // Ensure the service worker takes control immediately
  
  // Clean up any old caches if you ever change the CACHE_NAME version
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      // Serve from cache if found, otherwise try network.
      // If network fails (offline), fallback to the cached index.html.
      return cachedResponse || fetch(e.request).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});