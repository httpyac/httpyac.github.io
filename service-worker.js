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
    "revision": "319c7735b6bad13dd5961faed1328466"
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
    "url": "assets/js/12.edd410e7.js",
    "revision": "4ba941ab43614335370eb671786d6974"
  },
  {
    "url": "assets/js/13.17957074.js",
    "revision": "8b26aab13172b38c47b8431fc28c310c"
  },
  {
    "url": "assets/js/14.53a9ef47.js",
    "revision": "a679bbc69de0e6a10ecc256877e26f93"
  },
  {
    "url": "assets/js/15.b5c20c09.js",
    "revision": "8c2e3cb836c42075c69011fe76d79fee"
  },
  {
    "url": "assets/js/16.47da1ab9.js",
    "revision": "f2d5c6eca978835ce4de4d5756892229"
  },
  {
    "url": "assets/js/17.a7536dd2.js",
    "revision": "65687403d3adca6e3a5bb7ef15b2f8e5"
  },
  {
    "url": "assets/js/18.33efb3d6.js",
    "revision": "74443cc2f81db4bf65028c1c6743d469"
  },
  {
    "url": "assets/js/19.810218de.js",
    "revision": "bc12e7baa32d2e661a1200067113ed39"
  },
  {
    "url": "assets/js/20.72e4e87f.js",
    "revision": "efb2bd6e32b56a0576f2b1cd5510a1b3"
  },
  {
    "url": "assets/js/21.a1080fb0.js",
    "revision": "917043d9c7cf8b54d27c42d8fc100647"
  },
  {
    "url": "assets/js/22.3a0ddafa.js",
    "revision": "b725bcb47cf4fdcd93332e2836f13512"
  },
  {
    "url": "assets/js/23.7c02d9b8.js",
    "revision": "b10a8ca82611516a45052a0fc88c5793"
  },
  {
    "url": "assets/js/24.58d12bf2.js",
    "revision": "1694ee1f901cfdebad42f2cb85d3142b"
  },
  {
    "url": "assets/js/25.5a538740.js",
    "revision": "885acd25d97298c81d57de6b3c89efe0"
  },
  {
    "url": "assets/js/26.350ca7fe.js",
    "revision": "afecf5bf55cf64d015aea2e9190a11e8"
  },
  {
    "url": "assets/js/27.aa4cdbfe.js",
    "revision": "f15761d699b46a6bf9797406169f9ee6"
  },
  {
    "url": "assets/js/28.92b37f8c.js",
    "revision": "79566678f4650450cf93d6361d083a00"
  },
  {
    "url": "assets/js/29.5b588e1e.js",
    "revision": "85fd5cb902ea1ac778d98d635a5b8a99"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.ab8b201d.js",
    "revision": "91affe61f5c98e42f47151e9acc7bed2"
  },
  {
    "url": "assets/js/31.61f49ba3.js",
    "revision": "5d4dae541f9b383be98f35b33549109c"
  },
  {
    "url": "assets/js/32.efd6ff7b.js",
    "revision": "cc0910737e039aec52e5618ff86f1290"
  },
  {
    "url": "assets/js/33.d24f2863.js",
    "revision": "a7cf1784a1d3302364ab0f6a9e481aed"
  },
  {
    "url": "assets/js/34.cb4bac40.js",
    "revision": "2b35b8581a8a71217e55fba9d3de95cf"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.307bf396.js",
    "revision": "94ad4b0c64ff30ea0a40c03e8ae0b89d"
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
    "url": "assets/js/app.008b8023.js",
    "revision": "f4bcbbace9c7272cca95fd1e35e9abb8"
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
    "revision": "805512027c966844c94ebe6306b3cf16"
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
    "revision": "7a403dd888264a266abc8f93a76935e3"
  },
  {
    "url": "guide/comment.html",
    "revision": "6f7864b47bd92b34297fef4a6ff44766"
  },
  {
    "url": "guide/environments.html",
    "revision": "2b4dfd3e37445e2398d28daba9856de4"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "d47b9f098aabd9c13ebd044442445274"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "9f44fe66838d09742ff80c1364a4bd76"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "20bd1f8f74652ace9fb8298ef5f008a4"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "0384e38be0800f511de353ada2de5d85"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "5d0edb051443ff495eea8dbed92795f2"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "2be7a20d1ffb1bb09d3084a207300081"
  },
  {
    "url": "guide/examples.html",
    "revision": "efd97c2d592ea3fdb11a572209381487"
  },
  {
    "url": "guide/hooks.html",
    "revision": "eecf2c7ec52d91a2d50cd480caaa9145"
  },
  {
    "url": "guide/index.html",
    "revision": "883c5f86721a48c7e833e32b5d3320a5"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "ee23aff361c71d58ff32cd979f4d8113"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "b486b87ad8327c25871afffdc09e3d65"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "7612a7b64f5265cef7a25f9de3be26cb"
  },
  {
    "url": "guide/installation.html",
    "revision": "0eee64c8337e2217ae24210dbd4e466c"
  },
  {
    "url": "guide/metaData.html",
    "revision": "88bedafe5fd3c3221dfc08083cdada13"
  },
  {
    "url": "guide/request.html",
    "revision": "3699451f521e0c04437907f2b8c86ad4"
  },
  {
    "url": "guide/scripting.html",
    "revision": "dfcd8a44fcd4b44326cfb9b8939f1b92"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "dada75cd5ceb86c627713c8c8a64dbf2"
  },
  {
    "url": "guide/variables.html",
    "revision": "a9045143c8b4288cf23c49e904922aa5"
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
    "revision": "3fe5ea1c628add0d31afa62d2f0376d8"
  },
  {
    "url": "plugins/index.html",
    "revision": "f7d3318b4f67a4a8ff22fa4629eb06ac"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "d540690b5e3a1216cf73a03ef182adbd"
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
