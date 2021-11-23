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
    "revision": "8ff53018e8d5d641f1aa697c5bb35dfd"
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
    "url": "assets/js/15.8268998a.js",
    "revision": "475626d355820d68f147ac230f8c6b0e"
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
    "url": "assets/js/26.591f5f7c.js",
    "revision": "ba441fd64de03c4ae88f950520ea5bc6"
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
    "url": "assets/js/app.2bed3848.js",
    "revision": "b420b29f5287103bcceb2fa90335a191"
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
    "revision": "0832b9fb308d8832c4088825af90b551"
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
    "revision": "459d5fa3c8f336a854ad8a212229b8c0"
  },
  {
    "url": "guide/comment.html",
    "revision": "0877c590dad405348767cd4fc71159fd"
  },
  {
    "url": "guide/environments.html",
    "revision": "58430b88c266a1d17ccdde151073bf48"
  },
  {
    "url": "guide/examples.html",
    "revision": "8bd10ae4b8a13cba14a6e78906402eb2"
  },
  {
    "url": "guide/hooks.html",
    "revision": "e62dcf20165e90c2d0f593a23396551e"
  },
  {
    "url": "guide/index.html",
    "revision": "bff2f8ce7c0cd80b4ea5937308e88bfb"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "6466e620b533016577973b51ff31b4dc"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "6052f093ba1b4ffaaf3255396f400f59"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "db890d39943a5528c3f630fe66cb95f0"
  },
  {
    "url": "guide/installation.html",
    "revision": "d7b2864a87a79c538bab9677c2d1ece7"
  },
  {
    "url": "guide/metaData.html",
    "revision": "12ee4053338a19580bf1deb5d3693291"
  },
  {
    "url": "guide/request.html",
    "revision": "cbb3c5b335a6cd1db33cb22ad525ff96"
  },
  {
    "url": "guide/response.html",
    "revision": "f5850fa89c183719e6b2cce3afd7dd1c"
  },
  {
    "url": "guide/scripting.html",
    "revision": "b30f8e9b46bc6d4d66b272742fd7255c"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "f7a82344b948975e0c3d9cdba88094d3"
  },
  {
    "url": "guide/variables.html",
    "revision": "78e2ce0f67add28754b3ebc873eadda1"
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
    "revision": "fa4ba5380328bb23eb452eef191cc0f0"
  },
  {
    "url": "plugins/index.html",
    "revision": "84bee6c4f01ce17fb0523a2a12362f65"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "5ebdfbcb21279c71218315251c2219f0"
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
