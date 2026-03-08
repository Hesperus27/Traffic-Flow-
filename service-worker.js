self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("traffic-flow-cache").then(function(cache) {
      return cache.addAll(["index.html"]);
    })
  );
});
