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
    "revision": "c9d0982f5cc76c63efcfaa3759eceeb6"
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
    "url": "assets/js/15.e9b00db1.js",
    "revision": "c4e8e514c28c228d88715e71d98b05e5"
  },
  {
    "url": "assets/js/16.992e1446.js",
    "revision": "b25f6c224f05ec38d83b7eedc8354eec"
  },
  {
    "url": "assets/js/17.a7d68ff9.js",
    "revision": "bd27be1afb9cadfc43f665ee765bd1e0"
  },
  {
    "url": "assets/js/18.435a1511.js",
    "revision": "037680aaa63d7bd1f9609db13ad887bf"
  },
  {
    "url": "assets/js/19.6cb2456b.js",
    "revision": "6489aabc3434e888436cf4fbb17bb580"
  },
  {
    "url": "assets/js/20.daf8bf96.js",
    "revision": "3b3add2eb319f17a74e8693b08dcd2a0"
  },
  {
    "url": "assets/js/21.dbe29a24.js",
    "revision": "a36ab01d492aecf7ebe8c0c143db8df2"
  },
  {
    "url": "assets/js/22.7e593e6e.js",
    "revision": "9d19b0b8b1396b1085801adc91f9a3c3"
  },
  {
    "url": "assets/js/23.738a00aa.js",
    "revision": "955a0ddee8e8b75c1f25b979d8259bb2"
  },
  {
    "url": "assets/js/24.822d8402.js",
    "revision": "07d9c62fc905ad4f3412831827cf3339"
  },
  {
    "url": "assets/js/25.e84ec00e.js",
    "revision": "73052721bb72a08162c04d95edcf3e1e"
  },
  {
    "url": "assets/js/26.91267040.js",
    "revision": "06fc26172991e0256eee27dac073710e"
  },
  {
    "url": "assets/js/27.17aafe6e.js",
    "revision": "336e7048a9d3dd39f6cb03187a258583"
  },
  {
    "url": "assets/js/28.60f73a41.js",
    "revision": "59b3b6b8bac1b4ed7870cb8db3840964"
  },
  {
    "url": "assets/js/29.938c26f3.js",
    "revision": "356346dec51cb013603286e4e26c9733"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.73d0e4e5.js",
    "revision": "59f0403ae36823fd17f4694cebf199a5"
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
    "url": "assets/js/app.ab112cc0.js",
    "revision": "963df36f110eb558a1751fa89b1fa20f"
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
    "revision": "877fe235b52c114893139d5b5feaf219"
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
    "revision": "7eca10c335c0938b4e4b3dd1af7926fb"
  },
  {
    "url": "guide/comment.html",
    "revision": "c26bb7c91c0f2b0c5d892abdb247b12e"
  },
  {
    "url": "guide/environments.html",
    "revision": "24246fe65d79b9e17ab438311210c1dd"
  },
  {
    "url": "guide/examples.html",
    "revision": "9509ec08af618b95ae344b2500391b9d"
  },
  {
    "url": "guide/hooks.html",
    "revision": "395da79eac3b2efda9868f94f5586f00"
  },
  {
    "url": "guide/index.html",
    "revision": "582307aab187e5a79dece67420482745"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "a37f29133c457fe1fe6aea36184334e3"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "2e102933760c9b85fbc44a5a9c8033d0"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "d181890240f426e49f3f9b41e51343dd"
  },
  {
    "url": "guide/installation.html",
    "revision": "05092c12a91d07e04970ae8f2fefd775"
  },
  {
    "url": "guide/metaData.html",
    "revision": "dafb2bae5c347c393c1169cd2f1546c3"
  },
  {
    "url": "guide/request.html",
    "revision": "9dc9f147a0e6819198c913ce6e795b82"
  },
  {
    "url": "guide/response.html",
    "revision": "02576aa37afa30c50cfe90903ff8b6f5"
  },
  {
    "url": "guide/scripting.html",
    "revision": "d621ee18685d392b30ece7e7245a7cd8"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "0db8637edfe8ed15474e51a4d27ff190"
  },
  {
    "url": "guide/variables.html",
    "revision": "261a51a5600abf98e0796b8d77c2e32f"
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
    "revision": "989d2238a8b48e9fe5265a282f546103"
  },
  {
    "url": "plugins/index.html",
    "revision": "4c5f26269547d8ff952f8e0d0986b884"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "d3b8abbc6e07a4f74e8412a8f2a1b7b0"
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
