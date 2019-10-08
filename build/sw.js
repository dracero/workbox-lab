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
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "images/articles/buildings.jpg",
    "revision": "71dceaabcd85c771e9fa5d9fd55611f3"
  },
  {
    "url": "images/articles/doctors.jpg",
    "revision": "488ee4eabb8e08080eb544f2b7950235"
  },
  {
    "url": "images/articles/food.jpg",
    "revision": "5d77777f05adeb3be0912d5804819ea0"
  },
  {
    "url": "images/articles/plane.jpg",
    "revision": "5deadedc1a7ab71b00877fbd50621c33"
  },
  {
    "url": "images/articles/solar.jpg",
    "revision": "de07a1e6e7e7bd64eedbc0a04b0e9aae"
  },
  {
    "url": "images/articles/space.jpg",
    "revision": "e5133211f752c4fe82bf7951cc3093c7"
  },
  {
    "url": "images/articles/weather.jpg",
    "revision": "bfddd29233472e231453b16c3a80c125"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "0d077eac3b5028d3543f7e35908d6ecb"
  },
  {
    "url": "index.html",
    "revision": "17820577d9720fcd226317b36fb393d2"
  },
  {
    "url": "js/animation.js",
    "revision": "8952a6ec2786e6e8d62a7934bc7f1c1f"
  },
  {
    "url": "pages/404.html",
    "revision": "1a6cf0261a93d2c998c813d5588856bb"
  },
  {
    "url": "pages/article1.html",
    "revision": "1f931443fb5f601fd43a374f73c38cc5"
  },
  {
    "url": "pages/article2.html",
    "revision": "cfad7c63133ce13c096ede2aec32a5f4"
  },
  {
    "url": "pages/article3.html",
    "revision": "53c4489707202a303d329594cf2e48f9"
  },
  {
    "url": "pages/article4.html",
    "revision": "4db49b0732d2ac23c132f990432bc6b1"
  },
  {
    "url": "pages/offline.html",
    "revision": "09b9feaee1fbd9d3f27253d24b7911c9"
  },
  {
    "url": "pages/post1.html",
    "revision": "864e7492ffc01fca0abd1aca9b045e54"
  },
  {
    "url": "pages/post2.html",
    "revision": "8d6c714f00c9cea3728a01c1f98ce73b"
  },
  {
    "url": "pages/post3.html",
    "revision": "9b7c1a6f57bf78cfe47a7f6bb2548982"
  },
  {
    "url": "style/main.css",
    "revision": "628320e3f89c25f36472cda3e970e57d"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}