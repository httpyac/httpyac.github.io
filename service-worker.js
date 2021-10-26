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
    "revision": "74ce4f7a3a0f4f343d6c90b1dbe68961"
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
    "url": "assets/js/11.f868baf1.js",
    "revision": "95b4c4610cc4df7fda4c229769cb3263"
  },
  {
    "url": "assets/js/12.4c247bc0.js",
    "revision": "b9f3e33061e787cea43c2cff488bac3d"
  },
  {
    "url": "assets/js/13.ebb649d6.js",
    "revision": "64cc5ac8d610684019b5150f54906d89"
  },
  {
    "url": "assets/js/14.33fd9c09.js",
    "revision": "7dfda2525fa864057f43acf3cc8dd855"
  },
  {
    "url": "assets/js/15.46e2f687.js",
    "revision": "ccd449d78426a52d72a572af1a371636"
  },
  {
    "url": "assets/js/16.cd414c12.js",
    "revision": "5d980da2ff0c1832ad1ae1ee2b64c672"
  },
  {
    "url": "assets/js/17.1c574cc3.js",
    "revision": "cfbbf197a64a3c05df621aacd4252c6b"
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
    "url": "assets/js/31.4d104273.js",
    "revision": "bb480b053bb8357f3613c67f51a6515c"
  },
  {
    "url": "assets/js/32.8cb8d086.js",
    "revision": "6e30c6ec98f9fb34e72d1a688085c78e"
  },
  {
    "url": "assets/js/33.998c37f5.js",
    "revision": "fa769da8162b9f6f09fbb87c5ab95755"
  },
  {
    "url": "assets/js/34.b25c561e.js",
    "revision": "d8b0e6473086ccbc6a9f4bc7f4a872cb"
  },
  {
    "url": "assets/js/35.57e4f91d.js",
    "revision": "3e0b4d93858d187cbdd158628f573914"
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
    "url": "assets/js/app.314202b6.js",
    "revision": "8fba83d40f72cb817596c8bfb5bae3c8"
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
    "revision": "e8ab53af057a6d004d29d5ee5224134b"
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
    "revision": "8ef76897b6a91cb97dae48218d555515"
  },
  {
    "url": "guide/comment.html",
    "revision": "a724c7dff79da7740e92e5317b7abe0c"
  },
  {
    "url": "guide/environments.html",
    "revision": "449b54de633f8533d42ce12fcb753e83"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "eecdc8247d4f54c24740a1eaceb26473"
  },
  {
    "url": "guide/examples_argocd.html",
    "revision": "6b0094834035979fe9d9b55520ebd4bd"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "f47407a94cbd15a12ccb6632fdc780c6"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "8f7701c69b4cfd532abb10867c55c5ad"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "f7a01a003bac7f369b459dfd412841ca"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "67c852c12e460ffad1b64a53809df628"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "a22ffff3596ae7f77a3b477e83bc7154"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "a4bbd79f33cf0599bed5f34fd124a1f1"
  },
  {
    "url": "guide/examples.html",
    "revision": "bec3cbbc41e87e727354d97f999dc15f"
  },
  {
    "url": "guide/hooks.html",
    "revision": "9f9684f423a6cc7fd2d39ae9f31d50cb"
  },
  {
    "url": "guide/index.html",
    "revision": "367fa36161df8cdfdc3d8f12dc57ccc4"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "a941db107b89f10943f70a5ece97beb8"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "24fd9a3ac309bc586819c551df585d06"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "9889756f1d4dd077a3803e0776d15000"
  },
  {
    "url": "guide/installation.html",
    "revision": "4eb131a410599a1332733e8a1bca81ce"
  },
  {
    "url": "guide/metaData.html",
    "revision": "e82e0e2f3e1b3e5b5748fd971bb9b96b"
  },
  {
    "url": "guide/request.html",
    "revision": "d64303062e2a552b05ba08e3a08ffa3a"
  },
  {
    "url": "guide/scripting.html",
    "revision": "156c03e67c4e3c6a9e6614b8b8470f32"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "7a8ce2d5d99696e0755c9dfceb460796"
  },
  {
    "url": "guide/variables.html",
    "revision": "b487e8339649b449001484abdd648aee"
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
    "revision": "59fdc68a2e3b71a006ec48eda2ce8324"
  },
  {
    "url": "plugins/index.html",
    "revision": "c2b8ec4e4421ada5cf9431f04b994b33"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "f52646276fd3189883b40be97f88baf6"
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
