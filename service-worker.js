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
    "revision": "c92f05561d00e9a5b83bb6ec3fd3ba06"
  },
  {
    "url": "assets/css/0.styles.edeb4e53.css",
    "revision": "0bf2858b267e762c599127c1755f7cfe"
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
    "url": "assets/js/11.20df28f5.js",
    "revision": "6153ac690bcc04350afbf882e13d0bdc"
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
    "url": "assets/js/18.e5543c2e.js",
    "revision": "9970b0b152f2cb041b8fbe9a9205cd0f"
  },
  {
    "url": "assets/js/19.d5bcd059.js",
    "revision": "f4a3a18f9c09b11eaf2e50e86989ac86"
  },
  {
    "url": "assets/js/2.9b9227f0.js",
    "revision": "1d6e396fa6238b3c05f0f3bf32418a3d"
  },
  {
    "url": "assets/js/20.f5fb3ceb.js",
    "revision": "ea4f1bf618e4eb1e66887604921fe8d5"
  },
  {
    "url": "assets/js/21.1ac37242.js",
    "revision": "458717a6d155d131cc26629d6f9d3fa4"
  },
  {
    "url": "assets/js/22.c69f6eb7.js",
    "revision": "6090aedcf74f5bf076809096ce32fc93"
  },
  {
    "url": "assets/js/23.649e44b3.js",
    "revision": "53323e1ff6c1fe01e7f1f680e6dada5b"
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
    "url": "assets/js/5.56ed756b.js",
    "revision": "a7fe5900eb2e37fb43520476d1773a5b"
  },
  {
    "url": "assets/js/6.a38274fa.js",
    "revision": "d57296fdd33a671b8a87738a8c0f9d96"
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
    "url": "assets/js/app.2b115c34.js",
    "revision": "7ddcc2cf49d94aeaaf99669c42250837"
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
    "revision": "753be886a140073a76a095ef28a98737"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "5ff0ab172d908495484d526e623b67ff"
  },
  {
    "url": "guide/environments.html",
    "revision": "354ad92e0c88f120a57e183eebf3c5b6"
  },
  {
    "url": "guide/hooks.html",
    "revision": "5ffd8e8f06efd87e50272f988572e8f1"
  },
  {
    "url": "guide/index.html",
    "revision": "fe7e802c82381a691f4f52dece001a95"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "cc00dc2048ebf75b266cedf7f1f11b87"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "01c6339c90feb6b3aee357278a736535"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "bf71c3bc0d5ef66cce3bd35686cd6387"
  },
  {
    "url": "guide/installation.html",
    "revision": "a02eaad8d58d27c1089ab838667d616c"
  },
  {
    "url": "guide/metaData.html",
    "revision": "343c49c6a3437c62a8b9763a544aac59"
  },
  {
    "url": "guide/request.html",
    "revision": "5996a64302760f663a84e1cc2374dee8"
  },
  {
    "url": "guide/scripting.html",
    "revision": "499154ae50809e78d025b4ca698a5d5f"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "634584bf5d8885a8548bb556ac400f18"
  },
  {
    "url": "guide/variables.html",
    "revision": "ac8fc71f509590f58ce22a17a40f8676"
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
    "revision": "b13b4e1e219f17d9a544ccd72f35e4e5"
  },
  {
    "url": "plugins/index.html",
    "revision": "9cf5591d66fe8a8ec3fd7b5b57aedfd2"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "0da33728fddbdaab8371f86ea3450c5b"
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
