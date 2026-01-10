const cacheName = 'snake-v1';
const assets = [
  './',
  './index.html',
  // Jika kamu punya file .css atau .js terpisah, masukkan namanya di sini
  // Contoh: './style.css', './script.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
