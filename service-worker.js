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
    "revision": "b1d83deb83d1122a2a171505b8d5d4d9"
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
    "url": "assets/js/11.56004f9f.js",
    "revision": "6ca85be815dc825df22a0bf5929b5816"
  },
  {
    "url": "assets/js/12.f977a020.js",
    "revision": "92e2f73ac243c2526391edc3887ee79a"
  },
  {
    "url": "assets/js/13.13c0866b.js",
    "revision": "9501de043c1423c2996b146f04797fbb"
  },
  {
    "url": "assets/js/14.6293f5d3.js",
    "revision": "231f52a78c6c3e4ef7495b5615bea4f1"
  },
  {
    "url": "assets/js/15.b0e88037.js",
    "revision": "438666234303ea179a85b665d1f6d25a"
  },
  {
    "url": "assets/js/16.7fc535eb.js",
    "revision": "b37ae8b23ffc1c27f9475114d1bbbe9d"
  },
  {
    "url": "assets/js/17.a4bc86ef.js",
    "revision": "a0bddf63269f1be633e5e12671b2c5e1"
  },
  {
    "url": "assets/js/18.e41c3d55.js",
    "revision": "4e1d749018929f9ccf67c2c36bb56b47"
  },
  {
    "url": "assets/js/19.8e2252ce.js",
    "revision": "6f2f2c37d85266d989d001af96411a52"
  },
  {
    "url": "assets/js/20.7c9c46c9.js",
    "revision": "139b7081e3b61b1040d1bcb951f451b3"
  },
  {
    "url": "assets/js/21.7712f057.js",
    "revision": "f486f049f8d4b6f3339e7a8fad3a89a8"
  },
  {
    "url": "assets/js/22.56d53856.js",
    "revision": "7973ec77ac3940a6bacf747529897ab8"
  },
  {
    "url": "assets/js/23.8919d0ef.js",
    "revision": "7bc84f6e142cd40009fb555ee10a7bcc"
  },
  {
    "url": "assets/js/24.431bbcdb.js",
    "revision": "95414cd4435eeae39a76513b91503322"
  },
  {
    "url": "assets/js/25.6a524829.js",
    "revision": "ed0dd7d1b2ae3944a652c1d78ec64f2a"
  },
  {
    "url": "assets/js/26.270eebb0.js",
    "revision": "9e57933be1d68ee6597ed8fbced33480"
  },
  {
    "url": "assets/js/27.701f4be7.js",
    "revision": "dad209fe6ce7e8441a3534b8ad1c7148"
  },
  {
    "url": "assets/js/28.464a1158.js",
    "revision": "978bc07ed90f58e48562db6f0e01ebec"
  },
  {
    "url": "assets/js/29.664845ff.js",
    "revision": "f5700fcb71017d227687f095feecc039"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.eed182c2.js",
    "revision": "7ae329d68857683cf619eae4c6c37f39"
  },
  {
    "url": "assets/js/31.ab25375b.js",
    "revision": "7f08cdd7e9b4590a61b39551289e0058"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.736ae7bd.js",
    "revision": "173bdefb1285ff162c87bc42ba5a39f1"
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
    "url": "assets/js/app.f55ba8da.js",
    "revision": "d713ed2e6c52811a4641e2c017ec67ae"
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
    "revision": "d5f5c87b1705cfb0b4797e416c0112c3"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "8656d1a2d7574ef34e4e960ae1d803a7"
  },
  {
    "url": "guide/environments.html",
    "revision": "50307bb46b075f8454e49cf2efce905b"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "61ef9abda60cc11bb387fc5fc0ae9de8"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "05851eddd1600c9beeb78ac48b510b2c"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "31966721a5b089813666eb213472c2a4"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "db8d8a9f48fe8b1388f3bce3f3ba8de2"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "0c7739756337222c8887a4c7eb4bf59f"
  },
  {
    "url": "guide/hooks.html",
    "revision": "cf11058aa577f8edf49eb155dbbfc567"
  },
  {
    "url": "guide/index.html",
    "revision": "2c03da5407a68ad92cc7a300eb671834"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "81adbf3b695a8b6851b0cfaa00ae001f"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "931b5b2cdcd954ddf69a76400661a3e3"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "47306b2ffd55269534d9587ea222c6ba"
  },
  {
    "url": "guide/installation.html",
    "revision": "825e0e3458806a7d8c9d10d4c8bdd92a"
  },
  {
    "url": "guide/metaData.html",
    "revision": "1d913a821b932123c7f9fc5e1a211dc7"
  },
  {
    "url": "guide/request.html",
    "revision": "e67a15f0bc6d450007a5059caf760030"
  },
  {
    "url": "guide/scripting.html",
    "revision": "78707e311d7d7c45b008aef56792b20a"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "4a066af8e2d18d6e6a1d9facd3750ea9"
  },
  {
    "url": "guide/variables.html",
    "revision": "fdda5c928bcc486d7473eadcaa4e5d9a"
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
    "revision": "e553d513141d2988ae43405e9d06c048"
  },
  {
    "url": "plugins/index.html",
    "revision": "a811499b0b78e6b6116d60c4e19a9c96"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "064fca3a0328e3c5d8c83632d4cf4242"
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
