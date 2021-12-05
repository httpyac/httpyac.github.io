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
    "revision": "77f97c97c5b3f1c1f0d70c52af0b2ce1"
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
    "url": "assets/js/20.39ed8a3f.js",
    "revision": "6641f9f62ccd4762f83c7f35a73926b9"
  },
  {
    "url": "assets/js/21.60632db6.js",
    "revision": "75e91d76d841e3c1e172331a1af31d58"
  },
  {
    "url": "assets/js/22.0e00bd6e.js",
    "revision": "c037425fe7d5c2134824b1781f976b46"
  },
  {
    "url": "assets/js/23.70cec400.js",
    "revision": "c41f32f07cab1d6910d4125b6fb348b8"
  },
  {
    "url": "assets/js/24.fcc4edca.js",
    "revision": "464f225328e0753a0b31ecbd910c590d"
  },
  {
    "url": "assets/js/25.be1ac014.js",
    "revision": "c08c680d0540af6b2bd0c3511dcc7bfc"
  },
  {
    "url": "assets/js/26.ff5e8c1c.js",
    "revision": "46cb85e4aba0b6953c740df0f03473a1"
  },
  {
    "url": "assets/js/27.3064a73b.js",
    "revision": "daff8532c03e4a4158c0bb135192fa90"
  },
  {
    "url": "assets/js/28.04eb96a2.js",
    "revision": "9fcfb9e81700e6492f15c8fda47bbca8"
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
    "url": "assets/js/app.bf45ed42.js",
    "revision": "efb9bdb1b45df30ab4fb492ff14adab5"
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
    "revision": "4c20518068143aa050f0cbd871a3e596"
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
    "revision": "d981ba53794dccbaa3c686294fa04d1d"
  },
  {
    "url": "guide/comment.html",
    "revision": "bcbb0d0c43117cebdfa357a0154acbcc"
  },
  {
    "url": "guide/environments.html",
    "revision": "245d0a074ce3f21c8ded6b8cb1eb0946"
  },
  {
    "url": "guide/examples.html",
    "revision": "fc3ac4f7b58fa5777125c3b6c2b2c3dc"
  },
  {
    "url": "guide/hooks.html",
    "revision": "6a57a3df4417166d59bece909c038034"
  },
  {
    "url": "guide/index.html",
    "revision": "c1d81621441bf648514b9f65fd9b50b2"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "cea88d75ee694d1d311245c6bef03b14"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "1ae864853513f83325ebc44d506dc6a3"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "1bc93f147bd45fe3ef94a4d0ad20560f"
  },
  {
    "url": "guide/installation.html",
    "revision": "1a906f9cff05d9bb287c2299d6a14fc8"
  },
  {
    "url": "guide/metaData.html",
    "revision": "5ec66d8a1af9614618967f0288fd7623"
  },
  {
    "url": "guide/request.html",
    "revision": "80ef31532787088dc02d1849978df79d"
  },
  {
    "url": "guide/response.html",
    "revision": "bb13e042ca00b5a736e86c14bee5ab78"
  },
  {
    "url": "guide/scripting.html",
    "revision": "a9de156b75052999004448f7a796cff4"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "ccf594f59085ebcb5fe9767bb6743517"
  },
  {
    "url": "guide/variables.html",
    "revision": "e12f91c82c1b3cb999f32adaadb39a32"
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
    "revision": "eae752fbaabe7dbf8c835fe107d199dd"
  },
  {
    "url": "plugins/index.html",
    "revision": "d4c0d75a3bb32584e08a382be695c4ff"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "cc889c64614b5026b775c1425d6cf363"
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
