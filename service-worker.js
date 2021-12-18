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
    "revision": "6aa0c157207b78aa44cb87d2d042e741"
  },
  {
    "url": "assets/css/0.styles.5eec76fd.css",
    "revision": "0e83983e179341a416500bbbfb33b1f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cc30caa4.js",
    "revision": "3250df9bc7b417cdefa505d75d3799bd"
  },
  {
    "url": "assets/js/11.6f391782.js",
    "revision": "eea60124da30101f59e759c340dd3e21"
  },
  {
    "url": "assets/js/12.0eb6a94e.js",
    "revision": "a531cf4d9148e0cd7ed63b9007304ef3"
  },
  {
    "url": "assets/js/13.b1d3826b.js",
    "revision": "38486cb20f659823c1156b6eac20a53e"
  },
  {
    "url": "assets/js/14.9a3eec56.js",
    "revision": "f4800b7a62073336fb2dfa43958d80aa"
  },
  {
    "url": "assets/js/15.b57633cf.js",
    "revision": "31c6b2373afa41da9130397e7b42634e"
  },
  {
    "url": "assets/js/16.6cb71b48.js",
    "revision": "6dbb3254ad9d8a94854ee868501578f2"
  },
  {
    "url": "assets/js/17.79f30098.js",
    "revision": "d923295c71fdd96d8148f43e3038a4b5"
  },
  {
    "url": "assets/js/18.694d41c4.js",
    "revision": "a1a75084811a3a415c4717f1a6f9bfed"
  },
  {
    "url": "assets/js/19.428ebc71.js",
    "revision": "fa283d671fd9d6006f8be3e30bc686a0"
  },
  {
    "url": "assets/js/2.6ee5a547.js",
    "revision": "4a410bbc2a854a3116b891531b8ed2c3"
  },
  {
    "url": "assets/js/20.cd13427e.js",
    "revision": "1710b3ca0f83684c760457bfd7005760"
  },
  {
    "url": "assets/js/21.cc8e65f5.js",
    "revision": "6213da8d6c60d89f30f84370ac0f2a01"
  },
  {
    "url": "assets/js/22.1a93565d.js",
    "revision": "6a92ffe59c54eb549edf4816bad3ac92"
  },
  {
    "url": "assets/js/23.96813ea8.js",
    "revision": "3266fc6d50bda7239f4f1cf47c05dbaf"
  },
  {
    "url": "assets/js/24.c0202713.js",
    "revision": "b9605a67d1501e7189d05e3676345d8c"
  },
  {
    "url": "assets/js/25.7b2208c2.js",
    "revision": "a362f2a937f8e902bdd48b3f44477c44"
  },
  {
    "url": "assets/js/26.4c68819c.js",
    "revision": "06911e5e466b6d8dc139ab3aa9164973"
  },
  {
    "url": "assets/js/27.ccfa2094.js",
    "revision": "135494cb158689fba28e2791c2897778"
  },
  {
    "url": "assets/js/28.ff5c136d.js",
    "revision": "eab37442dff62461500490f1e185ba49"
  },
  {
    "url": "assets/js/3.ab2c1d5c.js",
    "revision": "08be5f676b1e9209f6fae8ee03e7c0b6"
  },
  {
    "url": "assets/js/4.7b2d8883.js",
    "revision": "1e11dccb0e5dd7f4d6300e6755bdb1e3"
  },
  {
    "url": "assets/js/5.84998983.js",
    "revision": "4ad4e38078a3df905e0d59b096f687e7"
  },
  {
    "url": "assets/js/6.8b4477ed.js",
    "revision": "3b0ef4ac3b9241833eb78a80d1366f35"
  },
  {
    "url": "assets/js/7.6aaf0032.js",
    "revision": "7c6fab976fed2643878e0ed21df43499"
  },
  {
    "url": "assets/js/8.dd8b18b8.js",
    "revision": "d5c1f2845f44be086e705019e07b8921"
  },
  {
    "url": "assets/js/9.e86b946c.js",
    "revision": "67628f7ad3b88e60bc0c64f0e4b1d8c1"
  },
  {
    "url": "assets/js/app.70578eea.js",
    "revision": "640d5a98038bb175b15a6469f0dc726b"
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
    "revision": "2e4678ae0d7c0da2a66246af90b7d841"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "flows/execute_flow.svg",
    "revision": "c3c7235386837d700c6884752590a8f5"
  },
  {
    "url": "flows/parse_flow.svg",
    "revision": "7b4c36aafd19f3079cd1f35a3a2303f5"
  },
  {
    "url": "flows/send_flow.svg",
    "revision": "a0ce29966a47d5e87c7986db4320c728"
  },
  {
    "url": "github.svg",
    "revision": "5a14e36c8b0b5e4ba427f47fca304477"
  },
  {
    "url": "guide/badges.html",
    "revision": "a660c0bb06dc8ab62899cb40bed8ec32"
  },
  {
    "url": "guide/comment.html",
    "revision": "5bf93e7408a8e528d07d6598215c261f"
  },
  {
    "url": "guide/environments.html",
    "revision": "b2d220bc02b581418c049c290d10956c"
  },
  {
    "url": "guide/examples.html",
    "revision": "0e9bb5ebad3d225df0c0867a1c99304d"
  },
  {
    "url": "guide/hooks.html",
    "revision": "da9206f67a10ab9ca51589dc5497f360"
  },
  {
    "url": "guide/index.html",
    "revision": "4d4e4e909b89744f086caeab745e7b44"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "3a22d6bd65a9d533581ab02f9f879a0e"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "73be5d771737f4a163a76641086e244e"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "0eae088a5361589c7a46caa52afc48eb"
  },
  {
    "url": "guide/installation.html",
    "revision": "67badcc18fd527dc741dddb46bba63c5"
  },
  {
    "url": "guide/metaData.html",
    "revision": "3c2b3435966d183d34157b665e7ae608"
  },
  {
    "url": "guide/request.html",
    "revision": "5db1c04e20ca8168835033df4d1429c3"
  },
  {
    "url": "guide/response.html",
    "revision": "ab0f15cba5057056b4de033098d78d4c"
  },
  {
    "url": "guide/scripting.html",
    "revision": "5b4d9dd5be232ac1751323bfe6f9892c"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "e7dfba3b6ce5083cb24eb1cdb0840d29"
  },
  {
    "url": "guide/variables.html",
    "revision": "08fadfd5bedeec694ebad07b518ca9b4"
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
    "revision": "5ef5b116f0077bbd27093c3fb3dbc7c8"
  },
  {
    "url": "plugins/index.html",
    "revision": "a6e885249968a56ed1ff617284bca649"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "21552b8ee99202177181efbd7819fa80"
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
