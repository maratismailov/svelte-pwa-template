

module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.css",
    "**/*.png",
    "**/*.svg",
    "**/*.html",
    "**/*.js"
  ],
  "swSrc": "sw-src.js",
  "swDest": "sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};

