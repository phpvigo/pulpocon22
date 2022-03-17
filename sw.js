importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07a059f0e14b66297060.js",
    "revision": "e27d8e62f8f8c8a994dc19779c52fe49"
  },
  {
    "url": "/_nuxt/0ba4f3835b72b8f51f3e.js",
    "revision": "0e2d09cdbc4b90605358882cff76b85a"
  },
  {
    "url": "/_nuxt/3e8a135d6f797d8f9143.css",
    "revision": "54ada358455a98599f8afccef1daddca"
  },
  {
    "url": "/_nuxt/447a6157bb8420928cd1.css",
    "revision": "9acd0d8b6489aa8f592f4ec69216eef3"
  },
  {
    "url": "/_nuxt/5d97439ba7485a7994ee.js",
    "revision": "de628ad4e53b63b4db05f98a9c5fcb3e"
  },
  {
    "url": "/_nuxt/751607b7185015709698.js",
    "revision": "508d210ba54466f504f79eaaa3d026d7"
  },
  {
    "url": "/_nuxt/aac8d37365913fee7d65.js",
    "revision": "cf3dee563b25afaf5686f5948b8479a7"
  },
  {
    "url": "/_nuxt/cd3140d1cedb54f5ad0a.js",
    "revision": "25fe276ba273da1c9b5b33e5bc3c1bfd"
  },
  {
    "url": "/_nuxt/d24bcbd2d47c19981684.js",
    "revision": "b322f0f2c27fb20c05f0fb6b57eafcea"
  }
], {
  "cacheId": "PHPulpo-Con-2020",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
