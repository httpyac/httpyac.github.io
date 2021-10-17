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
    "revision": "1c045a74b0c24238ae915569c7169271"
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
    "url": "assets/js/app.76bfae1d.js",
    "revision": "446caf06adbcfaca216c20e329e7b2da"
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
    "revision": "73db6386a83fa261931303b972391e86"
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
    "revision": "fe28ce7fb49de27c4be5e931e0e6dcb0"
  },
  {
    "url": "guide/comment.html",
    "revision": "9d3533305adbdfcb3327b20a3545915e"
  },
  {
    "url": "guide/environments.html",
    "revision": "27910623bfddca87763f68904ccceb14"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "a96d33626c50aa5be180ac5a325ba33d"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "b2c4baf78aa43b18031346d6a28c9777"
  },
  {
    "url": "guide/examples_grpcbin.html",
    "revision": "24036697f6574334d3028a932a269919"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "15866a27d2b08a7847f5fc630b7d45c0"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "06a8365b11e5af0b7af29ded049a7d57"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "fa36394579844b8bbf2968bfe9913e14"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "fd7ec6316db5fcae5c18205c3e0e19e2"
  },
  {
    "url": "guide/examples.html",
    "revision": "5aed9b34ec9cb3bdaf36d63278e31721"
  },
  {
    "url": "guide/hooks.html",
    "revision": "d13a721c9e3d76f506e36d66cb083471"
  },
  {
    "url": "guide/index.html",
    "revision": "34d54d811f663f27eb5198135ece3cd4"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "b77c56d956676730ebd28ed1ee5d0ebd"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "ae5eba8caf3d5a944dcb217acd0b1848"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "11d23c4474c34fa8a57a08234b76fc0b"
  },
  {
    "url": "guide/installation.html",
    "revision": "c3b24819f1f55f1f5b36df1cd895ff05"
  },
  {
    "url": "guide/metaData.html",
    "revision": "50db42b7f1011ea8cb23cfd95a7cf4b5"
  },
  {
    "url": "guide/request.html",
    "revision": "c52763ad04459040d9983a3dcc7645cb"
  },
  {
    "url": "guide/scripting.html",
    "revision": "728792329180db71aed3ddbb5aa9ff9a"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "2e9c226576edf284cc72f0541154e135"
  },
  {
    "url": "guide/variables.html",
    "revision": "2d2eb6cad8ee36aaf722484984d844b1"
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
    "revision": "b49b3a448053c9e6a1f190a9653e1786"
  },
  {
    "url": "plugins/index.html",
    "revision": "03089c081f01110cf794d70dbf7f2a20"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "63e1f2ae623546963ffac48c4c2637c8"
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
