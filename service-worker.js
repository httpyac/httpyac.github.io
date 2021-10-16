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
    "revision": "8d78b996b07753552bf7bad58c7de081"
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
    "url": "assets/js/10.16d2bdcb.js",
    "revision": "46e7b81d3b9e2d3f72f6e9c013b5ff1c"
  },
  {
    "url": "assets/js/11.5a31176d.js",
    "revision": "45cda6596c4d9ccb7a5b00d1e210d471"
  },
  {
    "url": "assets/js/12.8d698258.js",
    "revision": "7026bb95ea5eac90a511d27de6971466"
  },
  {
    "url": "assets/js/13.296bade4.js",
    "revision": "3ab7fddf330863e19999f2f6c26ee5e6"
  },
  {
    "url": "assets/js/14.27a0d446.js",
    "revision": "ed41a87c81e283ca52341e1bfc71f7d4"
  },
  {
    "url": "assets/js/15.a5d82f2d.js",
    "revision": "e443bbd3e665f2dd45cd718a7c4c2b48"
  },
  {
    "url": "assets/js/16.20114bce.js",
    "revision": "ed8a6e4197a53a1af14ab7f4f0fd1dbd"
  },
  {
    "url": "assets/js/17.0f0ea59d.js",
    "revision": "8bbbbe0b54dabb0b659ee80a8a6c8bcc"
  },
  {
    "url": "assets/js/18.57280cdb.js",
    "revision": "b40b3243c8d14985f892a534358add18"
  },
  {
    "url": "assets/js/19.3d4ffa8d.js",
    "revision": "d955c6a1a9c2b1047175b7fa04962382"
  },
  {
    "url": "assets/js/20.6f73b385.js",
    "revision": "771e6119b483546116b17e7b2af6fac0"
  },
  {
    "url": "assets/js/21.232805aa.js",
    "revision": "df050d61f674196e788365713c548e34"
  },
  {
    "url": "assets/js/22.fee76c46.js",
    "revision": "03cb5f13b55f570269431a63c88d8e64"
  },
  {
    "url": "assets/js/23.9a7ca3a4.js",
    "revision": "228fa5b5bebe86283859d73a41f62d8a"
  },
  {
    "url": "assets/js/24.64442342.js",
    "revision": "038686ec38f754d7ae8e41bb3e899413"
  },
  {
    "url": "assets/js/25.9684cdac.js",
    "revision": "a10faba6fdc62c9b06b25867dd9f5cf7"
  },
  {
    "url": "assets/js/26.ea9ca782.js",
    "revision": "0ee970a4c14ebd17dac535824bd421cb"
  },
  {
    "url": "assets/js/27.0a7b9cfb.js",
    "revision": "77c2ae93a7d6b2e4f78576fdeb37a767"
  },
  {
    "url": "assets/js/28.3bc9828e.js",
    "revision": "a2bd636370e8c674abbd27b615684146"
  },
  {
    "url": "assets/js/29.69acaa3f.js",
    "revision": "7c53171dd4445c3f6448a3f87fa5eae9"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.5f7c5b64.js",
    "revision": "2de0cd33a2f858412a2a0bbd34673a0e"
  },
  {
    "url": "assets/js/31.03d42f65.js",
    "revision": "b34efc10474b27f7cece0f2d1e7a061f"
  },
  {
    "url": "assets/js/32.ddc07c64.js",
    "revision": "71043a459d07725ac03e9e3605230801"
  },
  {
    "url": "assets/js/33.f1a4bc90.js",
    "revision": "f83f5dcec1eb83e43459ceaa7b090b75"
  },
  {
    "url": "assets/js/34.970ac135.js",
    "revision": "ab47dab96ed2876e89103f377e4697b9"
  },
  {
    "url": "assets/js/35.a418ee7d.js",
    "revision": "58d0253a91c3c4f05f180cb6c8358f16"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.ddec95a5.js",
    "revision": "fa637cc28bf4b381b181a84ee8f66731"
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
    "url": "assets/js/9.e7e51d1e.js",
    "revision": "2085e6e3be9d97189bf1f229fb5e843b"
  },
  {
    "url": "assets/js/app.ee9fb6bf.js",
    "revision": "ae66d777e5e6c4a7030eacf14c249fa0"
  },
  {
    "url": "assets/js/vendors~flowchart.9a672344.js",
    "revision": "c4fc00e394f448fb76ad1a676dbe7dec"
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
    "revision": "507bc7f8f980ac226c716767991fbb0c"
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
    "revision": "6566a3988124d412b377008fa8846a43"
  },
  {
    "url": "guide/comment.html",
    "revision": "53973a59a94db9d9d0a07986b4a54469"
  },
  {
    "url": "guide/environments.html",
    "revision": "9322de8497647b8696da6c5a43bf1d6f"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "a8fd8e9c544584dfc85f9ae6d1f3a8f6"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "3245ba3956b8ebf15b8eb4523225c981"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "d1b045bf8a02fb00910eb1cd6fb5864e"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "088326d8d63ea2ff46de9abadda387c2"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "2b4daf83f104542b285b3086e78377d8"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "be9bd1eeceb6496f05a1a9fe65667e60"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "f27f08dcaf69e939fdcee78b08471ff7"
  },
  {
    "url": "guide/examples.html",
    "revision": "634cd89f459321969c1d060dfe6749f5"
  },
  {
    "url": "guide/hooks.html",
    "revision": "47a59af26c1cd3bf1e790a326aa1f2b3"
  },
  {
    "url": "guide/index.html",
    "revision": "dc9272b6973051f48ba64441189c76cd"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "ee2e7472a5b3177375c84d3ec4d281ca"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "7b3e44fa2fc16f7c514495c6986e7225"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "89e18aebec72f515cf57d0ab3112d426"
  },
  {
    "url": "guide/installation.html",
    "revision": "1d86f0de8707ce62b96a9b2adb795578"
  },
  {
    "url": "guide/metaData.html",
    "revision": "a0fdfecf9f545256f343712c87eaf1d2"
  },
  {
    "url": "guide/request.html",
    "revision": "a70e446fc3268ae52a66aa31f71a84ff"
  },
  {
    "url": "guide/scripting.html",
    "revision": "e85c401342acb5db1965a88bd14cb079"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "90355b597f1a55da16ac6e912d9a1fcd"
  },
  {
    "url": "guide/variables.html",
    "revision": "47943d76b11b720242f8aa204d0e7ca3"
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
    "revision": "ecff439019a1bff68481291c497becdf"
  },
  {
    "url": "plugins/index.html",
    "revision": "1a107cec6d2ea8ed10b2f7443441e3ea"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "ce5b41e9b8830bb27c865e133a583dfb"
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
