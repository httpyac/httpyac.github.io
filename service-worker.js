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
    "revision": "c8eee512683426a486c81965f50f7640"
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
    "url": "assets/js/14.53a9ef47.js",
    "revision": "a679bbc69de0e6a10ecc256877e26f93"
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
    "url": "assets/js/17.a7536dd2.js",
    "revision": "65687403d3adca6e3a5bb7ef15b2f8e5"
  },
  {
    "url": "assets/js/18.24d2f03f.js",
    "revision": "d206bb8804e0cb25838741b443b15b16"
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
    "url": "assets/js/28.b03a97f1.js",
    "revision": "6fddf7c1a66aed8be66fa3d1fc52d621"
  },
  {
    "url": "assets/js/29.f22a80e3.js",
    "revision": "c2f6e5b1af00eb3ae81b4d000b15aef3"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.123ee477.js",
    "revision": "b0ab9c2fa194aa7db03a31245788b8ab"
  },
  {
    "url": "assets/js/31.03d42f65.js",
    "revision": "b34efc10474b27f7cece0f2d1e7a061f"
  },
  {
    "url": "assets/js/32.cbfcc94c.js",
    "revision": "90e6ae4c7a3f4324383472f61ba9dca6"
  },
  {
    "url": "assets/js/33.f1a4bc90.js",
    "revision": "f83f5dcec1eb83e43459ceaa7b090b75"
  },
  {
    "url": "assets/js/34.9ad17340.js",
    "revision": "6c0468bac83270d2a5afae5f46f8022f"
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
    "url": "assets/js/app.65821822.js",
    "revision": "3be3bfec43a328c1ffb8d6c3c3e3e39f"
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
    "revision": "8d3618b8966c4a1b112c0a6caac5f262"
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
    "revision": "29552d20f6267ec924ceb74c0de3ffc7"
  },
  {
    "url": "guide/comment.html",
    "revision": "17586bc94f844d7dd45ecb4258c583b0"
  },
  {
    "url": "guide/environments.html",
    "revision": "7294b36f614687b09524af4dbbacc11b"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "5a85a9e5555c4b5ff2ae1065ccd431c3"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "f9a62e9154477b855a0154bb0bfd6178"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "335a0f60d348e465fc116cdb55b838a6"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "256e6b6e55b4327b15ed1dd7efb2efe6"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "a24c6225c202c21c9085df199b175d0f"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "d2794561ca00096dcc5f33f73a6f77fd"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "c7f560603cd4147cc456c0cb63e05a58"
  },
  {
    "url": "guide/examples.html",
    "revision": "60dda29e619859d01637a19dc5f8b154"
  },
  {
    "url": "guide/hooks.html",
    "revision": "dd23e5039cf999add4bc56ecde2be006"
  },
  {
    "url": "guide/index.html",
    "revision": "df079dc822000c2f17d4b05b4e4487e4"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "ca0dbbb0b0dbb68cdd881c82b3069af1"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "8d45e1dde9252adfee589c5b3405704f"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "05819d40cd73c8caa4acbe7bb84135bb"
  },
  {
    "url": "guide/installation.html",
    "revision": "f00fac53ecca0613045165f05c8f1275"
  },
  {
    "url": "guide/metaData.html",
    "revision": "0acbd918ddb0b8271b58719ac6284614"
  },
  {
    "url": "guide/request.html",
    "revision": "6dd680f262d645c6ceda4d83baf79bc9"
  },
  {
    "url": "guide/scripting.html",
    "revision": "22c48c47d487d3e5535ff27bb5f98297"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "7cd0ff638be5da6625805b19b6dca44b"
  },
  {
    "url": "guide/variables.html",
    "revision": "906a3777986d2d149d41b684b80a550c"
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
    "revision": "1a9c5c4da63543e858169f72e4957857"
  },
  {
    "url": "plugins/index.html",
    "revision": "4da7c8c0ad27fa31bf5a088932925409"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "348a872658c9c91a5f23aa2c3f835d03"
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
