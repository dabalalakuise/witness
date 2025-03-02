const CACHE_NAME = 'azure-voice-cache-v1';
const urlsToCache = [
    '/witness/public/index.html',
    '/witness/public/manifest.json',
    '/witness/public/icons/icon-192x192.png',
    '/witness/public/icons/icon-512x512.png',
    // Add other assets you want to cache
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache)
                    .catch(error => {
                        console.error('Failed to cache:', error);
                        urlsToCache.forEach(url => {
                            fetch(url).catch(fetchError => {
                                console.error('Failed to fetch:', url, fetchError);
                            });
                        });
                    });
            })
            .catch(error => {
                console.error('Failed to open cache:', error);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
