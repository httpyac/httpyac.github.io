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
    "revision": "c5fe916e2e0d26d0accde9194ce78f15"
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
    "url": "assets/js/10.0739931b.js",
    "revision": "33fe98303fb53a3cee50116a3fc2fd87"
  },
  {
    "url": "assets/js/11.990ba055.js",
    "revision": "832169e1370c02beaa769cfabd8c103f"
  },
  {
    "url": "assets/js/12.307bd80d.js",
    "revision": "9bade2d6f6f1ee61aa676d70d91fbf0c"
  },
  {
    "url": "assets/js/13.a39c6ee9.js",
    "revision": "2f6f58ad77b7a964f85117a7c4446cd1"
  },
  {
    "url": "assets/js/14.3a94c5d1.js",
    "revision": "2e0b03e56c5b227b7c4b9b0afc055a0e"
  },
  {
    "url": "assets/js/15.3a5879d5.js",
    "revision": "66661a3ff33ea83b95da04669a907e40"
  },
  {
    "url": "assets/js/16.5c327351.js",
    "revision": "31b7b0ac50c1535da24c5694a8555418"
  },
  {
    "url": "assets/js/17.857864ef.js",
    "revision": "be4f9b352cce36471d819ab3c934eca9"
  },
  {
    "url": "assets/js/18.5a1163cc.js",
    "revision": "d361c4576d8f699981dddc73487aa90e"
  },
  {
    "url": "assets/js/19.cc31684d.js",
    "revision": "35ab3e0761de9d4919d0482d4ca6e18e"
  },
  {
    "url": "assets/js/20.ceea0236.js",
    "revision": "d83d5d7977e0b3a2cf58370102bb2894"
  },
  {
    "url": "assets/js/21.2a2c10a4.js",
    "revision": "72df11c786dcbae5ef4fa388873cb088"
  },
  {
    "url": "assets/js/22.f23e6268.js",
    "revision": "f9307951ada9c3242fac420c128a2cfc"
  },
  {
    "url": "assets/js/23.d8574a1d.js",
    "revision": "ee89bf7e3b172ffdeceb5aed9202ddc3"
  },
  {
    "url": "assets/js/24.f89df527.js",
    "revision": "b5c4d82f14d5221fa4196065fb1e2b92"
  },
  {
    "url": "assets/js/25.1221f147.js",
    "revision": "99d297a9df1030120b79d789ff5c4006"
  },
  {
    "url": "assets/js/26.463d542c.js",
    "revision": "e7ae44e2500ac16a99bf3536bd93de49"
  },
  {
    "url": "assets/js/3.a75887d1.js",
    "revision": "642e60d9405f1673c0c0402e6259ace2"
  },
  {
    "url": "assets/js/4.1373d080.js",
    "revision": "63fe1d43929348293da7e4b20bec7841"
  },
  {
    "url": "assets/js/5.3c84874c.js",
    "revision": "ff9f6baaf7b05bc7d02df12387b7c148"
  },
  {
    "url": "assets/js/6.2162f214.js",
    "revision": "5f47fd9a9b682bc936853cb3b852ff4a"
  },
  {
    "url": "assets/js/7.e1bc519e.js",
    "revision": "dcfd0e1d6f32b82dbdae0408357d7f6a"
  },
  {
    "url": "assets/js/8.583c1358.js",
    "revision": "220c7c71bbf415b1c5147c59344c2870"
  },
  {
    "url": "assets/js/9.7267d99f.js",
    "revision": "33779fdf2c594f3c74bb49255d9103f5"
  },
  {
    "url": "assets/js/app.38f32d1f.js",
    "revision": "a64da5965137dffb2d0cf2ac02b3a9a1"
  },
  {
    "url": "assets/js/vendors~flowchart.9a672344.js",
    "revision": "c4fc00e394f448fb76ad1a676dbe7dec"
  },
  {
    "url": "cli_json.gif",
    "revision": "5a63023fcc59434c3b445c6cd57586f4"
  },
  {
    "url": "cli_tests.gif",
    "revision": "6d55893041f7818cee6dc3f02da4c7b5"
  },
  {
    "url": "cli.gif",
    "revision": "fce4829121dd8a54b2fdfedec76d7b6b"
  },
  {
    "url": "config/index.html",
    "revision": "214e5c5a7689aba08f10b220ee7245d4"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "22f4a4b6d66942fd0805c20ed6e3c021"
  },
  {
    "url": "guide/environments.html",
    "revision": "7755be4dc430191d0636551dfb124531"
  },
  {
    "url": "guide/hooks.html",
    "revision": "05dbc2e7920397ed1f2fceb56f01d012"
  },
  {
    "url": "guide/index.html",
    "revision": "db0f59d015f875c26044a58b6f757ec6"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "d5239b7040bde86e3cf822570546b27d"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "b18c0cd145b678adbc3791c83c4c340a"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "35fa48efc3a63fc3385fed52e6595b04"
  },
  {
    "url": "guide/installation.html",
    "revision": "1b74a6501e8f64fec12832c8d7302960"
  },
  {
    "url": "guide/metaData.html",
    "revision": "b561a88a789edc6fd210665bbe6a6d97"
  },
  {
    "url": "guide/request.html",
    "revision": "21b73a7df009e776a10ebfde86e4fb7c"
  },
  {
    "url": "guide/scripting.html",
    "revision": "aa4dbb9da68acc59870d906d0c20ffe8"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "b16fa4400a05a694021c188d9d9ab72f"
  },
  {
    "url": "guide/variables.html",
    "revision": "1ea67a30639f1ba5168030b0715d3724"
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
    "revision": "6b64559827e0341884042d8dad7e0e02"
  },
  {
    "url": "plugins/index.html",
    "revision": "8cab2f98fa54bee5d188d3656abc7e19"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "c9a120c5e7caf2191e53c62a0655a76e"
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
