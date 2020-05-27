module.exports = {
  "globDirectory": "public",
  "globPatterns": [
    "**/*.css",
    "**/*.png",
    "**/*.svg",
    "**/*.html",
    "**/*.js"
  ],
  "swSrc": "public/sw-src.js",
  "swDest": "public/sw.js",
  "globIgnores": [
    "**/workbox*.js",
    "**/**/sw.js",
    "**/sw.js"
  ]
};
