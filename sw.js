self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('padel-app').then(function(cache) {
      return cache.addAll([
        './',
        './manifest.json'
      ]);
    })
  );
});