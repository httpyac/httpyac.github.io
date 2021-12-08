/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "802e6947a945724dee562225223d842e"
  },
  {
    "url": "assets/css/0.styles.f1c581b5.css",
    "revision": "e43d1e12f21bd600c873d5a38d7835b9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8d6d0cf3.js",
    "revision": "bf4b7f4874500a39eda81ddf9d342d62"
  },
  {
    "url": "assets/js/11.ac08658c.js",
    "revision": "114247b4ede4e7dc0d294f1d99f726ca"
  },
  {
    "url": "assets/js/12.2dac0e49.js",
    "revision": "393a658c248b6d58cbb349a737369fd7"
  },
  {
    "url": "assets/js/13.244e7d77.js",
    "revision": "f3cc7de1548bb89ae7f99b66b537c98c"
  },
  {
    "url": "assets/js/14.4eb29f39.js",
    "revision": "4fe12eb857b9d7fe443cb581981ce1b7"
  },
  {
    "url": "assets/js/15.dd50b18f.js",
    "revision": "640290c05c57c865bb4e1db5170dd6aa"
  },
  {
    "url": "assets/js/16.66d84680.js",
    "revision": "5c873e302198d87520e966b18559f211"
  },
  {
    "url": "assets/js/17.fab597d4.js",
    "revision": "e0834f4ee017044bbf2fdadd7b9b1738"
  },
  {
    "url": "assets/js/18.1b343324.js",
    "revision": "546168373ba83623123d9d8525118905"
  },
  {
    "url": "assets/js/19.0413be78.js",
    "revision": "c20976edf08edd22ec3152f42f46480f"
  },
  {
    "url": "assets/js/20.4ee33cf6.js",
    "revision": "11b6fe498f665355c32062c66d44bc8e"
  },
  {
    "url": "assets/js/21.8fe2f800.js",
    "revision": "70e1f501d4a2dda21fe85ecbdaeeb64e"
  },
  {
    "url": "assets/js/22.a43cf707.js",
    "revision": "f68b0954c6fe7e86342f9c15935647c0"
  },
  {
    "url": "assets/js/23.1450971b.js",
    "revision": "d9e5286df6fdde2f84547da8b6107e81"
  },
  {
    "url": "assets/js/24.332c34b1.js",
    "revision": "ea54a80ef877a7856a949e24646a8d4d"
  },
  {
    "url": "assets/js/25.b28c19aa.js",
    "revision": "8eca2b67a29e96634df87cf6e262fc41"
  },
  {
    "url": "assets/js/26.56029822.js",
    "revision": "3378c9756d316b78d1545af7d9a987ec"
  },
  {
    "url": "assets/js/27.3064a73b.js",
    "revision": "daff8532c03e4a4158c0bb135192fa90"
  },
  {
    "url": "assets/js/28.488eafb7.js",
    "revision": "a13e81b2369a301c39868d6f16c42f2e"
  },
  {
    "url": "assets/js/29.ab6e8cf7.js",
    "revision": "a320a760d566fef31c746ba03f6564b9"
  },
  {
    "url": "assets/js/3.ccd1c82c.js",
    "revision": "5e41c81420389e2ee3f03c462aceebcf"
  },
  {
    "url": "assets/js/4.c6f19318.js",
    "revision": "172c087f554906e220324728a4c76ea7"
  },
  {
    "url": "assets/js/5.5aadd259.js",
    "revision": "938efbc2dbe6b2c6a52a271378ac450c"
  },
  {
    "url": "assets/js/6.3c03cc98.js",
    "revision": "8d8199c41d49b7992f1296b5fab4152b"
  },
  {
    "url": "assets/js/7.c9a88e57.js",
    "revision": "cbc9a0e2dd43f6e60825ea773e5122cf"
  },
  {
    "url": "assets/js/8.9fb1a0f7.js",
    "revision": "11505bbd56916e72085502ec51834c1a"
  },
  {
    "url": "assets/js/9.ad64d078.js",
    "revision": "76e959b702f66b75844991e67b8234de"
  },
  {
    "url": "assets/js/app.4e51d48b.js",
    "revision": "d19bc2b1ea52202b14c6ef4b343bc9c0"
  },
  {
    "url": "assets/js/vendors~flowchart.89405d15.js",
    "revision": "17f29a9768c90ed2a4cd9bf41b4c6f84"
  },
  {
    "url": "cli_json.gif",
    "revision": "a3de871259c950023163f1aca3fa7b80"
  },
  {
    "url": "cli_tests.gif",
    "revision": "2c01986af5c95d89f02b19c49f34ac28"
  },
  {
    "url": "cli.gif",
    "revision": "f9a7e7344f8a7f9df211a79736c3b84d"
  },
  {
    "url": "config/index.html",
    "revision": "dc71bff75a73bafb7b6333469cbd9839"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "github.svg",
    "revision": "5a14e36c8b0b5e4ba427f47fca304477"
  },
  {
    "url": "guide/badges.html",
    "revision": "0a6551bbc1432803ad673e05e7882680"
  },
  {
    "url": "guide/comment.html",
    "revision": "8b5c4090bfc3b8b2ec8dfdd47cdcca3c"
  },
  {
    "url": "guide/environments.html",
    "revision": "41996f78c06a37a2cacf53fa183b9f87"
  },
  {
    "url": "guide/examples.html",
    "revision": "af4663c9e75895ef48f2fec47a29d51d"
  },
  {
    "url": "guide/hooks.html",
    "revision": "ed42fa949d178db6ef18702c17d72e4e"
  },
  {
    "url": "guide/index.html",
    "revision": "f8430d43f145600bf81fc987d754be5b"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "aea44e599cf072d25667eae8d026fad8"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "033c9ebb4bee973012a01c5ad2982146"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "53d45f438862a0e96aa5863127437b51"
  },
  {
    "url": "guide/installation.html",
    "revision": "5f451614642a0c675513530c42e432ba"
  },
  {
    "url": "guide/metaData.html",
    "revision": "b0825e4d92d4e39e687e3dbf977fc764"
  },
  {
    "url": "guide/request.html",
    "revision": "4dfdd541826d84add54bf0db926cc0ac"
  },
  {
    "url": "guide/response.html",
    "revision": "8e683ebf858f237f336d72b092f00cda"
  },
  {
    "url": "guide/scripting.html",
    "revision": "59bffa79aa27614d77c9af30653b83dd"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "906a02f9e0d2533fca01f7548d7db683"
  },
  {
    "url": "guide/variables.html",
    "revision": "9ea5bc359af75c85ea5dd704748e16b8"
  },
  {
    "url": "httpbook_oauth2.gif",
    "revision": "dd697a5391419b9f2e89c2234bf26675"
  },
  {
    "url": "httpbook.gif",
    "revision": "691a2c43f4477c532a8ea9495e8cb4c5"
  },
  {
    "url": "httpyac_site.png",
    "revision": "2f616c453ec80368d909e1d6f75c5947"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f6759f335ab2092432fd8cd01d2f6a3e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "dc8f87c85f88f50814a6d0b1606e9384"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "0af3044c7a4795be761d65b816f2db99"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "99a152bdd1f57a0382b3a96c77b85795"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "64980f3c9bf19cb89293eb93f90f6673"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "572ef62b906acd724b5626564031bd99"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "f8816eb502c04707b21dca0d5d81555e"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "64980f3c9bf19cb89293eb93f90f6673"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "8a174dba12e38e6d074fb86fb91c51af"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "6dcddf9a8c13958f3d5aaa88c28530ef"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "22db38e6c35d3776510dc3187132afc1"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "c9c2b5d6109cd3e07f092887243bc60a"
  },
  {
    "url": "index.html",
    "revision": "68030ddf80483529da40158d2c56d47c"
  },
  {
    "url": "plugins/index.html",
    "revision": "c9e6b26a7195caabf3de143f0326f769"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "8c4c703acd446c9a2454a34297e4fbd8"
  },
  {
    "url": "vscode_preview.gif",
    "revision": "47e10281068560c59dc9bca29e3c4208"
  },
  {
    "url": "vscode.gif",
    "revision": "c54c0795fb573ef81cd9c456e5b7d4f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
