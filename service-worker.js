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
    "revision": "9b77f0d002fe3615ab2a7361393de104"
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
    "url": "assets/js/29.e6468471.js",
    "revision": "46c0e215b14f1aa88b3f16fd1be2a33b"
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
    "url": "assets/js/31.5ece9271.js",
    "revision": "d1d0dea901c4f8c1f28f32e7ed702cdc"
  },
  {
    "url": "assets/js/32.abf1845a.js",
    "revision": "166b49565ef972abba3ae8aca7f53036"
  },
  {
    "url": "assets/js/33.aa95ea12.js",
    "revision": "544de98ec97da68257e11958be8b7cfd"
  },
  {
    "url": "assets/js/34.a017c70d.js",
    "revision": "b12970546c49d85a903a460f3b76f47f"
  },
  {
    "url": "assets/js/35.f4d586a7.js",
    "revision": "9aa1ff4cc1cc624474d7a53b3a823b73"
  },
  {
    "url": "assets/js/36.43067bcc.js",
    "revision": "93cd12e6418a81692215ac20871edd2a"
  },
  {
    "url": "assets/js/37.a25c363d.js",
    "revision": "1a4056496e6262ba83f52cd5c1c8cd0f"
  },
  {
    "url": "assets/js/4.d74ee857.js",
    "revision": "8894945e22ff88dda2da9c07e039d652"
  },
  {
    "url": "assets/js/5.c8da4cd7.js",
    "revision": "af9edcf0de79fc1a25d87fe007635558"
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
    "url": "assets/js/app.23b2728e.js",
    "revision": "6f78d9a5fce479de43b70dd7068c8222"
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
    "revision": "7e683bf3c2fc832b42e2d3c80f06a7c9"
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
    "revision": "ffc9d7aaad2344b7488cc485010365ff"
  },
  {
    "url": "guide/comment.html",
    "revision": "d69c27b2896b248d12db8cfb365d0bb5"
  },
  {
    "url": "guide/environments.html",
    "revision": "d7646ced822cecd60d3af46175521f6d"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "dbe9504d685f914d1023afdf047497b3"
  },
  {
    "url": "guide/examples_argocd.html",
    "revision": "71c283c86816661d4a0312887e7abd84"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "03640aa8b7c864d5a7f9df419d86edfe"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "56ba5a7f0dc89934ab4e2718d7caf4c8"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "b9d2003214eaa3a8d59cd885229f9373"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "8045d94eb275a9d95c9da689598efc1e"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "a7a36275123b79e38385b9ed0a98640d"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "405b455a2d945172ef6ddbaae3d413cc"
  },
  {
    "url": "guide/examples.html",
    "revision": "ac73cb00005eeaa7dc759b8aeb607137"
  },
  {
    "url": "guide/hooks.html",
    "revision": "c1b2308d528b312351bc47a8f5997ebb"
  },
  {
    "url": "guide/index.html",
    "revision": "a53394d1b15b0674c32591acc3af6cdd"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "3af45bdbc5d3b81371c7f7fff41ede4b"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "dbb93a33c7bb3213046bbf243bc78f35"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "ce858d2f85f2f41a761dc723c3080479"
  },
  {
    "url": "guide/installation.html",
    "revision": "46d89690b4ef879c0239ff9a06a3f090"
  },
  {
    "url": "guide/metaData.html",
    "revision": "a17804831568ad96f8ee165c184bc57b"
  },
  {
    "url": "guide/request.html",
    "revision": "139570becc13341b8234e6618479689c"
  },
  {
    "url": "guide/response.html",
    "revision": "d79b19c4888ffa4f012e11d2fcfe54e3"
  },
  {
    "url": "guide/scripting.html",
    "revision": "cdf8e4d2c58843d9a4af9f1926588fe3"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "61eb5197b7434bd5521f91e232545d81"
  },
  {
    "url": "guide/variables.html",
    "revision": "bc126db17ba8b2893f10086a31b32692"
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
    "revision": "1753675addb5147c705e63f3f1a08a5b"
  },
  {
    "url": "plugins/index.html",
    "revision": "67d0e8317750c7ee882e5337d7aa14cf"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "8525e42dc1a744939317fc0ceab9e791"
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
