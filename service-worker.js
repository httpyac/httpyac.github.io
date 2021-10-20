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
    "revision": "710c9327a8265933219dfb963853cfd3"
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
    "url": "assets/js/14.6ec09d2d.js",
    "revision": "e3d7d9ad49673fb8f095db68e42cfeb5"
  },
  {
    "url": "assets/js/15.b5c20c09.js",
    "revision": "8c2e3cb836c42075c69011fe76d79fee"
  },
  {
    "url": "assets/js/16.d4ce210e.js",
    "revision": "853a8c117f9109c46ecc88cf330d4e0b"
  },
  {
    "url": "assets/js/17.7139f74f.js",
    "revision": "dd2088c7866d53592fb0322d3a8868c3"
  },
  {
    "url": "assets/js/18.ae588d58.js",
    "revision": "76069dd631c9783adf0dd25df3538400"
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
    "url": "assets/js/29.c988c3b1.js",
    "revision": "c2b1262a5885a4974e14726299ccc65e"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.ec40a6fa.js",
    "revision": "acd315f0098976e2d7cd62f7f31468d7"
  },
  {
    "url": "assets/js/31.611c4783.js",
    "revision": "c305f9e2abbbe62f3679d4c0e7a9363b"
  },
  {
    "url": "assets/js/32.c8cf9a5a.js",
    "revision": "ffe9de6bd7fd2f38af816dc490bc9d00"
  },
  {
    "url": "assets/js/33.86e44ebe.js",
    "revision": "945b6ad44b19bb3b2c5273a5d445c0b9"
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
    "url": "assets/js/app.91a2a61d.js",
    "revision": "731e29663e6637fc4bf47d42517d804b"
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
    "revision": "df2d5a41b51a956032dab35822550fb4"
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
    "revision": "1eeca27cbdc10f2f4ad3568ec748521e"
  },
  {
    "url": "guide/comment.html",
    "revision": "7c257d918330ccd408810ac2de13d89c"
  },
  {
    "url": "guide/environments.html",
    "revision": "9435ee302809139f52e6d83513921060"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "a062399c062cd97228caa90b5e9e6093"
  },
  {
    "url": "guide/examples_argocd.html",
    "revision": "68852cf892e560063f6dfbc0189c5b20"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "a9b60c280753e435da2d4097473f9e97"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "95fa939957eaeaba6b456ba407a6c5b5"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "89ce5e606a4fba97b5373bb9812a1609"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "792e0c8c7821ea9de653b587be9a76fc"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "608181966fc604798fd02d80d8977c2d"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "551e84b5868f773d180f966817edf428"
  },
  {
    "url": "guide/examples.html",
    "revision": "97d7b70e7f95e53a85c6556d02d2ae3c"
  },
  {
    "url": "guide/hooks.html",
    "revision": "7a8c8914da0e84371b41ed06bdced5a0"
  },
  {
    "url": "guide/index.html",
    "revision": "ddf7479fa762bbfc7abfcb0e498afcc6"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "7a71b5b71ad87bc4449f3c27973f2786"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "5b95fe2ba55c24b2dd5e6d4a18f1729e"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "d2721b80273c0e98ddc46f165e7a58e5"
  },
  {
    "url": "guide/installation.html",
    "revision": "80b8f2d3af216cd4bd6cc2a688a8bb77"
  },
  {
    "url": "guide/metaData.html",
    "revision": "6afc28a25387086df03acdf0ec6862d9"
  },
  {
    "url": "guide/request.html",
    "revision": "59bccd8c535b63d28025fec9e1439802"
  },
  {
    "url": "guide/scripting.html",
    "revision": "7d56121361ced767ace030f00e84a6fd"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "2745d33214f56a4214aadaa2bb028b0f"
  },
  {
    "url": "guide/variables.html",
    "revision": "1ffd148d4968b8e8f21364d8083b3946"
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
    "revision": "8e4d18a14190cf680c35d6d610c4d970"
  },
  {
    "url": "plugins/index.html",
    "revision": "ce8fdde3f54ad7f51cf2ddb79c4fb3d8"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "20e7a3f18eae52769205fc6ef9fb19bd"
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
