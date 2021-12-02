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
    "revision": "097609f201adf506fec5507e27f7afc6"
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
    "url": "assets/js/18.61d10442.js",
    "revision": "9be6532030a55f9591191a77a0fd1eca"
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
    "url": "assets/js/24.61f6a264.js",
    "revision": "b2cbcc5cdc2007ccbf0547ccce6b16a7"
  },
  {
    "url": "assets/js/25.b28c19aa.js",
    "revision": "8eca2b67a29e96634df87cf6e262fc41"
  },
  {
    "url": "assets/js/26.7e0ca8dc.js",
    "revision": "6eaa77ad51eb9a5f67535f82dd4a05b8"
  },
  {
    "url": "assets/js/27.2980abed.js",
    "revision": "62e54330349b89605c57b2de9fcbe2b3"
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
    "url": "assets/js/app.b326cd9c.js",
    "revision": "7f761779d0376dd8ade307926df7be60"
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
    "revision": "588874dc226bc410258b51251b0f6ee8"
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
    "revision": "144e2c846316375a0d37d6b9af49910b"
  },
  {
    "url": "guide/comment.html",
    "revision": "efd437801867519f8421ab016b2ce00e"
  },
  {
    "url": "guide/environments.html",
    "revision": "9cfd5438eaa2dd8e305e911e608213da"
  },
  {
    "url": "guide/examples.html",
    "revision": "2cc53628d086f49f3c29dc83426819dd"
  },
  {
    "url": "guide/hooks.html",
    "revision": "d3b7214d8cafc907baedb6e720164111"
  },
  {
    "url": "guide/index.html",
    "revision": "84e42d7b006656a4907455af07f3e53d"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "949c236c7160656ef9033e5d53efd53a"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "054af8c0d57e258957c8bd99e7fcb22e"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "000c243127fb02d2a5feab35b9639004"
  },
  {
    "url": "guide/installation.html",
    "revision": "a951ad602b113a82b318119903c15d0f"
  },
  {
    "url": "guide/metaData.html",
    "revision": "ee1644d85597bb283be9e6e5d35895f4"
  },
  {
    "url": "guide/request.html",
    "revision": "78904994404ba814af88eb65f86396a7"
  },
  {
    "url": "guide/response.html",
    "revision": "d402312dad5b5b52aced578094cc504a"
  },
  {
    "url": "guide/scripting.html",
    "revision": "a4ef807fded5dd47be0eb52a7b5734ef"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "a1f86ac707a6682957c4af4a3a5d94c3"
  },
  {
    "url": "guide/variables.html",
    "revision": "48dca64694177ba757148859687c29a9"
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
    "revision": "17c38bceeb13b09efc6ab030f38e51db"
  },
  {
    "url": "plugins/index.html",
    "revision": "ba2aeb5b6dbe6d74d4b17841f3eda988"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "78bb2f9b7d975777a4d43be2fac163f4"
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
