/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "c4bc1f94eadd0a782c24f2c00ef7ac32"
  },
  {
    "url": "script.js",
    "revision": "8bce6cf23ec5b281e24ee8571317b560"
  },
  {
    "url": "style/style.css",
    "revision": "ca3c9231017b9ab49ff49fe717d9ea94"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(/(.*)\.html/, args => {
  return postHandler.handle(args).then(response => {
    if (!response) {
      return caches.match("pages/offline.html");
    } else if (response.status === 404) {
      return caches.match("pages/404.html");
    }
    return response;
  });
});

const postHandler = workbox.strategies.cacheFirst({
  cacheName: "posts-cache",
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 50
    })
  ]
});
