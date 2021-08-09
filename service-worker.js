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
    "revision": "8d4834d89ba6cd0424d01f80c5720f02"
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
    "url": "assets/js/14.5075b911.js",
    "revision": "97c4f3697158f2f66a8111c49e47fe92"
  },
  {
    "url": "assets/js/15.e5c8054c.js",
    "revision": "4a99574ac2354f059a05fdfbb202ed69"
  },
  {
    "url": "assets/js/16.2609f142.js",
    "revision": "cc483a8267f14d1093c184829a320e71"
  },
  {
    "url": "assets/js/17.7ba4e112.js",
    "revision": "ba48e33496181fc1ae57aa655f1de9bd"
  },
  {
    "url": "assets/js/18.c56f6e05.js",
    "revision": "323068033bc2f5a2851f887a582b4ba8"
  },
  {
    "url": "assets/js/19.898c7ab7.js",
    "revision": "dadaf5ab6d10000461c674eb4a9d738d"
  },
  {
    "url": "assets/js/20.85f7631b.js",
    "revision": "d625de0e787929ac77c1dab4c026c0e1"
  },
  {
    "url": "assets/js/21.2d936f27.js",
    "revision": "dc9a1911bc14bab27952dffe6a84465b"
  },
  {
    "url": "assets/js/22.e4cf1aa3.js",
    "revision": "53e806c5a0a735b3b1725dc6924d7c72"
  },
  {
    "url": "assets/js/23.ef172b4d.js",
    "revision": "a84d392de5488a517155f6c10440c916"
  },
  {
    "url": "assets/js/24.161d177e.js",
    "revision": "4761266736649fba518d6ae90fd9a86e"
  },
  {
    "url": "assets/js/25.189d32a8.js",
    "revision": "ed077e708a1f3e7faec956c2173e6d50"
  },
  {
    "url": "assets/js/26.b4415251.js",
    "revision": "6f9d53c20fae4cbd4b36446c6abb6241"
  },
  {
    "url": "assets/js/27.5fbdc010.js",
    "revision": "c9b07601bc27c95f23bdd2d0e252fb8b"
  },
  {
    "url": "assets/js/28.b9c5b9d6.js",
    "revision": "1650b9457e9f1834c8a9359dcd02f440"
  },
  {
    "url": "assets/js/29.c31dcd6f.js",
    "revision": "b91f51e8e9549a4dd3d911a7c7c43837"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.52e3bb07.js",
    "revision": "3ba806d86aa463f6b3577a44b023829f"
  },
  {
    "url": "assets/js/31.25ff3125.js",
    "revision": "ff15707a0a4ca9b28d616aa6d85dd121"
  },
  {
    "url": "assets/js/32.69159707.js",
    "revision": "df54cc38cb74260231a5a47ed946f47f"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.e66417ae.js",
    "revision": "64b16126e33252047adb2f8f183b6d9a"
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
    "url": "assets/js/app.3d232a57.js",
    "revision": "0f243d118dff2b9dd1513765873e2172"
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
    "revision": "7eb2f846cc0f826d4f87112a1b9a66e4"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "07e118cfa89fb8f4d3f6999e415ce2c2"
  },
  {
    "url": "guide/environments.html",
    "revision": "8c2b5e3385abaced64c669e46df83844"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "dbe930e530bade6409601208b9093b7d"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "62053b3e13f1ba00c126e38a4973294a"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "eb25b327cfed85e41b9e87ba523d2000"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "0bba704e631ba473458ce7c528c8f64e"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "136641b4e11301992b0976a323bbbeb0"
  },
  {
    "url": "guide/examples.html",
    "revision": "e0c1a6d7a28e4d71b438eb23806e12a6"
  },
  {
    "url": "guide/hooks.html",
    "revision": "a39e42fed0cb4826926a9e485272e5d8"
  },
  {
    "url": "guide/index.html",
    "revision": "698ed7ffd25e125a410d82675c217295"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "53b71a735d7df7bb32cdceadba73b0e3"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "f86ceb85963169f28f9e24b4828a8f32"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "6b9f3e664bc9a8602821aae86b5e47fe"
  },
  {
    "url": "guide/installation.html",
    "revision": "ec88205c03dbb33b4f98b36df3320872"
  },
  {
    "url": "guide/metaData.html",
    "revision": "df97b02198b808c629ca6fe50310c003"
  },
  {
    "url": "guide/request.html",
    "revision": "e00dd64e420cba0fa0bc61dfc42f01b7"
  },
  {
    "url": "guide/scripting.html",
    "revision": "12f02659b307464e417c5a4b603211e7"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "7b2f02d1f3cd395316a37c80fa077e0f"
  },
  {
    "url": "guide/variables.html",
    "revision": "2106ddf6e39b184eeddb5125b01f6466"
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
    "revision": "d2d4718ac71006d1d9abb6205825ca94"
  },
  {
    "url": "plugins/index.html",
    "revision": "5367596ca2677e62e0a28fa64125131a"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "f0f4e41266ff3ad5c0ae640b6f37f273"
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
