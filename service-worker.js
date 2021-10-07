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
    "revision": "7c8ee1ca8c3324a036c4d7b172f529f8"
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
    "url": "assets/js/17.a7536dd2.js",
    "revision": "65687403d3adca6e3a5bb7ef15b2f8e5"
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
    "url": "assets/js/27.fd90b6b6.js",
    "revision": "5e2640624eaae8e12a272b0992a66f99"
  },
  {
    "url": "assets/js/28.584450bf.js",
    "revision": "580766b7d1c379343fad8b0ac912fe07"
  },
  {
    "url": "assets/js/29.a0af3918.js",
    "revision": "3426a179d788157f4a6fda2fe47951f6"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.04395c99.js",
    "revision": "b546bdff853cb0253abe5081672697ce"
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
    "url": "assets/js/app.891a6862.js",
    "revision": "9220b97a3b3784254e54637d8b1acfb7"
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
    "revision": "03d1c2d91b603d6901e9ac8c40a3da95"
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
    "revision": "6cadf1cd3490d4175ba008c1ab9889a5"
  },
  {
    "url": "guide/comment.html",
    "revision": "d8fcf14e78e04342ae21eba7a613e7ca"
  },
  {
    "url": "guide/environments.html",
    "revision": "d0527b8a560b9b450222dee5c44e5006"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "21a32437068563bb9c3c6857d5ee1ae2"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "6f2cf995b093a0d26a2503e38a41c45f"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "eb868d8d8776300cf1a3cb69ba27fe67"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "dacc226f11cd6d11515070385ba0f4b7"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "5a2af8021f0b16a294a07e7d05ffc000"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "5a98066eaf62b9fca214b4802cc93882"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "9bcfe7f289234013fa5945c3c44722f6"
  },
  {
    "url": "guide/examples.html",
    "revision": "374ef233a7aa002e3b1211b9dcc2eb89"
  },
  {
    "url": "guide/hooks.html",
    "revision": "9fd739abbd908e53bf13baf872afb2f6"
  },
  {
    "url": "guide/index.html",
    "revision": "aa9cbe671f694014f7116e65d5d5d559"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "e2bdfb46886ac95156ddba44bfb0c08b"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "14c3ffbeaf1943a3bcee0bece59ca9c6"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "89a8b61df6defa7b38ac5c480fa5489d"
  },
  {
    "url": "guide/installation.html",
    "revision": "2b73da00cc92f662c93fe0c25b03e515"
  },
  {
    "url": "guide/metaData.html",
    "revision": "1b9dd05495c33bd36621bac77f17ac33"
  },
  {
    "url": "guide/request.html",
    "revision": "266386c266397747e1cc586930b10889"
  },
  {
    "url": "guide/scripting.html",
    "revision": "f1b8f82a8089c4c122024a7320b94bfe"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "fcc76b0708fb18c6d18099ec5d0ca437"
  },
  {
    "url": "guide/variables.html",
    "revision": "cee4ae7720e9d9060facae7f384ef3f5"
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
    "revision": "884bd1dc471bf80dba9186ed8ca43037"
  },
  {
    "url": "plugins/index.html",
    "revision": "82ad90189831f0b24031794cdba48aae"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "368515988c0c2ebf6a247567fa1ced84"
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
