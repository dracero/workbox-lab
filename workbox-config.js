module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "index.html",
    "*.js",
    "style/style.css"
  ],
  "swSrc": "src/sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};