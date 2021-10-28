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
    "revision": "bc5bd53c2159f6344fdcd0c615d5a98c"
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
    "url": "assets/js/11.72e310c4.js",
    "revision": "f95b9af670b33453a7c422b4dbd0ba48"
  },
  {
    "url": "assets/js/12.edd410e7.js",
    "revision": "4ba941ab43614335370eb671786d6974"
  },
  {
    "url": "assets/js/13.17957074.js",
    "revision": "8b26aab13172b38c47b8431fc28c310c"
  },
  {
    "url": "assets/js/14.b9d2b016.js",
    "revision": "826ec40247bf988f9061acf63eacc020"
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
    "url": "assets/js/17.bf467de0.js",
    "revision": "90c7c85e29a8ad99de4e86bb111ef531"
  },
  {
    "url": "assets/js/18.fc8dacd2.js",
    "revision": "71cdcd4bcdc73b6fa1d3be535b3a9638"
  },
  {
    "url": "assets/js/19.f635678f.js",
    "revision": "2359dd493f8002c0ab4edbfe4c647af1"
  },
  {
    "url": "assets/js/20.b5e6d8e2.js",
    "revision": "6ad36ba3bed6ad24b618555dc73875d4"
  },
  {
    "url": "assets/js/21.4a9ce83a.js",
    "revision": "5a3c35b4b3e43bf6d334d79c1447ccc4"
  },
  {
    "url": "assets/js/22.9b5eb16b.js",
    "revision": "4e6427d308ef8819a271a49f640946e8"
  },
  {
    "url": "assets/js/23.76581f7d.js",
    "revision": "7024c7109e590eda6ffed84e94cb4a35"
  },
  {
    "url": "assets/js/24.b3dcdf0c.js",
    "revision": "8d35b971783ca2bc9198e4785e8c976d"
  },
  {
    "url": "assets/js/25.bfd6d7af.js",
    "revision": "172a5a1d2e8b85cbdae63361c822b51a"
  },
  {
    "url": "assets/js/26.49c2adce.js",
    "revision": "bccef52caf9d7fb639339485c92b7be0"
  },
  {
    "url": "assets/js/27.d1305b7d.js",
    "revision": "5c7b70bd3bda8663dc9b808bfc06485d"
  },
  {
    "url": "assets/js/28.e844a4a7.js",
    "revision": "07c7149b0b31cb214a7482b1f9300d3d"
  },
  {
    "url": "assets/js/29.8d27f9d7.js",
    "revision": "20dfc551a535cac032064d3120c321ac"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.a198b7c6.js",
    "revision": "86bb3ac88411ca824953d50f646c140b"
  },
  {
    "url": "assets/js/31.e6797ed8.js",
    "revision": "1891bff1286406e65b4f0127102d66c8"
  },
  {
    "url": "assets/js/32.c8cf9a5a.js",
    "revision": "ffe9de6bd7fd2f38af816dc490bc9d00"
  },
  {
    "url": "assets/js/33.a78dd684.js",
    "revision": "78e995af2d1914fe0a09ac0995a15803"
  },
  {
    "url": "assets/js/34.b25c561e.js",
    "revision": "d8b0e6473086ccbc6a9f4bc7f4a872cb"
  },
  {
    "url": "assets/js/35.bbbaa25b.js",
    "revision": "321422f576f7a2e33e2d123cb065608e"
  },
  {
    "url": "assets/js/36.1f9d86aa.js",
    "revision": "9f1703a2d12bb0ca4d2c9ebbc482225c"
  },
  {
    "url": "assets/js/4.d74ee857.js",
    "revision": "8894945e22ff88dda2da9c07e039d652"
  },
  {
    "url": "assets/js/5.ec0031b7.js",
    "revision": "c51e5f41404fae711800222b912c9b01"
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
    "url": "assets/js/app.31c1762c.js",
    "revision": "724241ff54689d2dbbca585af76b4eec"
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
    "revision": "aa50506a5f8fc5e5a29ccf8dcbdd40fe"
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
    "revision": "8dbe82b87066e2a129f3de5476cc81fc"
  },
  {
    "url": "guide/comment.html",
    "revision": "23391558c1c5010e73b1df8c5b48bad3"
  },
  {
    "url": "guide/environments.html",
    "revision": "00a8a201d787e663e20b8c2a70bdcf0f"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "70194a86bae3b6a707b2d1eee6e83f68"
  },
  {
    "url": "guide/examples_argocd.html",
    "revision": "2766dd87dcd8234c48117bb07c221000"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "ee872388cf6fd61445dd96d308f2b764"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "3a0eeef869cb8c0cdda8ab8776d48035"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "c4368a493049c1b9b512b4b490b3a85d"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "7e8a6cccb1bedc7c7f94dce12f1d2c92"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "1ec5859392b0cbcc6468f6de5ce827ba"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "f491ef4d8d8a44a3246a0d96cba263a5"
  },
  {
    "url": "guide/examples.html",
    "revision": "efac3acfd399de24a9e329d9c1266b5d"
  },
  {
    "url": "guide/hooks.html",
    "revision": "5fba078f4f5f31857625934b0a40b38d"
  },
  {
    "url": "guide/index.html",
    "revision": "ebfa5a8fd43114bf5f609c288818827e"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "ff3f4b5cf547ee496ddc6e4b6308d0a6"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "f81b04e3b99f23816984e395a1d422e6"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "6204bdbbbae19bfa199f7c0ed15cfc44"
  },
  {
    "url": "guide/installation.html",
    "revision": "50fa1dfd697410c1ede69d6e0316526f"
  },
  {
    "url": "guide/metaData.html",
    "revision": "0fcb136301be80de7cba5ef184436a3c"
  },
  {
    "url": "guide/request.html",
    "revision": "e95ff43ac1f29cf330ff891a4cac4b44"
  },
  {
    "url": "guide/scripting.html",
    "revision": "d4acacf20e9148e9fdd88ef74d2a2d33"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "d2331a63b7831b4e656d3263dffcd6b7"
  },
  {
    "url": "guide/variables.html",
    "revision": "da50c31ca992350229e82a275bd40e91"
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
    "revision": "84047ec168b737e8d0e4597ac44ccfec"
  },
  {
    "url": "plugins/index.html",
    "revision": "6542a046d556f0f888770702bbb68f74"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "85e7a523ee0be0740eb172a8205db780"
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
