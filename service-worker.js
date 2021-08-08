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
    "revision": "5f4f6609921ce7a40703110c4c0e805a"
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
    "url": "assets/js/10.019db510.js",
    "revision": "179e08d62970acad09ea5c88ea880fd0"
  },
  {
    "url": "assets/js/11.7579747e.js",
    "revision": "4c92d6b49aebe68b8106b3ff4fea3cfe"
  },
  {
    "url": "assets/js/12.16c11250.js",
    "revision": "0ae8189411cbf065718db31eed57e6dc"
  },
  {
    "url": "assets/js/13.17643fbc.js",
    "revision": "7a2ee9565f588d8aeffbfa93f6e2b264"
  },
  {
    "url": "assets/js/14.369513e5.js",
    "revision": "6bdcda91c887b25928f0a7e47ec000de"
  },
  {
    "url": "assets/js/15.6c3628a7.js",
    "revision": "ef6161ffc4f8cb89fbe059d9ab3e5c17"
  },
  {
    "url": "assets/js/16.21d194f0.js",
    "revision": "35a6f8e4999a2781b5b2a9bc9dbf877c"
  },
  {
    "url": "assets/js/17.ed2118fb.js",
    "revision": "a4337675217fc7f7e6508cc48a89fdb1"
  },
  {
    "url": "assets/js/18.f189691d.js",
    "revision": "7cd3e2b274fd3114ad71970145636606"
  },
  {
    "url": "assets/js/19.fe07f6e1.js",
    "revision": "1487f320b749daf84324aa185600441e"
  },
  {
    "url": "assets/js/2.cd1555a4.js",
    "revision": "1d6e396fa6238b3c05f0f3bf32418a3d"
  },
  {
    "url": "assets/js/20.d3511c56.js",
    "revision": "84ab860c1447ce191198a790a7d78904"
  },
  {
    "url": "assets/js/21.692c7484.js",
    "revision": "c52ed43c596447da5a07357cd98dbac8"
  },
  {
    "url": "assets/js/22.82951b73.js",
    "revision": "12af4d53b15062f153164583b2465272"
  },
  {
    "url": "assets/js/23.a744af39.js",
    "revision": "e00fe53ecbefd4b890366006cf191163"
  },
  {
    "url": "assets/js/24.4720443c.js",
    "revision": "88f158bcf041ff36125f5d2d99dce553"
  },
  {
    "url": "assets/js/25.ce4866c2.js",
    "revision": "93c5a379b14e4bc4585ff553176d9c63"
  },
  {
    "url": "assets/js/3.25dc3aec.js",
    "revision": "b67540066d5fd2f9b3039eedf59c7a2a"
  },
  {
    "url": "assets/js/4.ad5a9a37.js",
    "revision": "3a8a87f6604345078aa763e9639dbef3"
  },
  {
    "url": "assets/js/5.c5ae813d.js",
    "revision": "6c2f888aeb854a3c9eb34fa731262947"
  },
  {
    "url": "assets/js/6.b8808da5.js",
    "revision": "74cc23e647fa46d453270a22819b397c"
  },
  {
    "url": "assets/js/7.7c1146b9.js",
    "revision": "495828c939ee14356c755be032fffb5c"
  },
  {
    "url": "assets/js/8.eac517b1.js",
    "revision": "cd9239e121afc627fe3c4bcbcbe4fe0a"
  },
  {
    "url": "assets/js/9.7ace1153.js",
    "revision": "c34651d86eab91752fb3295f5ffacc90"
  },
  {
    "url": "assets/js/app.1ec5cf48.js",
    "revision": "3fe1cecf695013954f29222a69881a07"
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
    "revision": "04abb9485b99e2d29a50ff7e40e923a4"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "503eb2d65163ebcf56c7fea452a3abe9"
  },
  {
    "url": "guide/environments.html",
    "revision": "8d9100b3d410a1d8a6cdda12e29ab24c"
  },
  {
    "url": "guide/hooks.html",
    "revision": "f5c14bcb6cf1e8141e0f86603cce011f"
  },
  {
    "url": "guide/index.html",
    "revision": "725674b84995b964081617e952fa7108"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "7bc1eb1f01bd2966db0b4a6a8060db32"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "f56cb7067f9fc5769ec396e5ddf7c8ab"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "fcc0b7de6789d69907fb3ca6612ebd1d"
  },
  {
    "url": "guide/installation.html",
    "revision": "22cea44583eb8c35fb5e7b8bb76bdcbc"
  },
  {
    "url": "guide/metaData.html",
    "revision": "65af49e0b84ace59e2c1aa95a776fed4"
  },
  {
    "url": "guide/request.html",
    "revision": "a2699c420be85dfa24b10358cc75d7c3"
  },
  {
    "url": "guide/scripting.html",
    "revision": "7133c0ba9aa054e5bcb06f562f135f7f"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "2cb52680eb1d71471a3bf1e898ca0821"
  },
  {
    "url": "guide/variables.html",
    "revision": "1131a3f734e9230fb895965e04481d4a"
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
    "revision": "21fa06db345deafff40e2304e20b7293"
  },
  {
    "url": "plugins/index.html",
    "revision": "65cdcb4aaa0dd8b1c7513c7e2be9278b"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "5c321e636715f7b692a42246dcae6bf0"
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
