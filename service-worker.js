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
    "revision": "f87286d4e67ff00a0b1560ff483c0ec4"
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
    "url": "assets/js/14.8a329d60.js",
    "revision": "64f7706851f82ec8e31c576e2619dd9a"
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
    "url": "assets/js/24.89e30f58.js",
    "revision": "9625fc4ab4edb9f3e196048cba606503"
  },
  {
    "url": "assets/js/25.b28c19aa.js",
    "revision": "8eca2b67a29e96634df87cf6e262fc41"
  },
  {
    "url": "assets/js/26.a7a572f1.js",
    "revision": "39c5f9aabcb947368a3c8fc80f31e2c3"
  },
  {
    "url": "assets/js/27.2980abed.js",
    "revision": "62e54330349b89605c57b2de9fcbe2b3"
  },
  {
    "url": "assets/js/28.18b1e308.js",
    "revision": "13e36c3b40fdb8e3d9bc99406f97bdf3"
  },
  {
    "url": "assets/js/29.ab6e8cf7.js",
    "revision": "a320a760d566fef31c746ba03f6564b9"
  },
  {
    "url": "assets/js/3.9ba65bd2.js",
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
    "url": "assets/js/app.a28e879a.js",
    "revision": "44096aa7b8ea7c4a4a4a8539196fc838"
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
    "revision": "c750ec650e61f32346eebd606c382c16"
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
    "revision": "f278f3be75731de86be424d65d3ccdee"
  },
  {
    "url": "guide/comment.html",
    "revision": "46ba4ff6b6d5b5e5160c2b796e90250b"
  },
  {
    "url": "guide/environments.html",
    "revision": "6862458a08b2a489f5c699f8de58d115"
  },
  {
    "url": "guide/examples.html",
    "revision": "7999e9a85a55ae064712ff79ee6365ac"
  },
  {
    "url": "guide/hooks.html",
    "revision": "debbed916ff184de63599daa53b39006"
  },
  {
    "url": "guide/index.html",
    "revision": "c0e25c8dec8f9b2d64a8a1c3ec1a64be"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "224da599183a0eaafd3901259ad1c6b8"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "4fa8d0482f4e426cac9658832c6f1add"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "4f7cb4bfb053aa7516d4bdd9df27a24d"
  },
  {
    "url": "guide/installation.html",
    "revision": "2ee0a7d2d8b11092657b73ad1ce71035"
  },
  {
    "url": "guide/metaData.html",
    "revision": "4b23753e1b822ee1edf894264920c672"
  },
  {
    "url": "guide/request.html",
    "revision": "5381c88f0f3e56997a945e40c0c88f16"
  },
  {
    "url": "guide/response.html",
    "revision": "7851d58996ce8883afc34b993d06fb05"
  },
  {
    "url": "guide/scripting.html",
    "revision": "cf018ef8399337feaeca4e636c04936d"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "56585061c9540037e79c11cf3dda955a"
  },
  {
    "url": "guide/variables.html",
    "revision": "1e7dda5ab8f264dd21350444199cea0a"
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
    "revision": "8517f0da80c285466b7553b39bf17b67"
  },
  {
    "url": "plugins/index.html",
    "revision": "16e20f87ec275a884de923089b416f64"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "21bb8a1b90adcc301a760a92b29fe578"
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
