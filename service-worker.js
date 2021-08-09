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
    "revision": "027d05b17462182cd2d7040d3a03f98f"
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
    "url": "assets/js/14.8641faa5.js",
    "revision": "d7317f0f63c598911e154f9ed81041bf"
  },
  {
    "url": "assets/js/15.9ff773cc.js",
    "revision": "6c3d92493b6542affd8b89bfe3ba0c4c"
  },
  {
    "url": "assets/js/16.0a3460ad.js",
    "revision": "e863b78f181616efa3e6ca9988f0f727"
  },
  {
    "url": "assets/js/17.d5497130.js",
    "revision": "e318fdca4f57c6a9e7c76bbb06b4002b"
  },
  {
    "url": "assets/js/18.f8fbc71c.js",
    "revision": "149e5bb6fbaa7a591c9020a609cf842e"
  },
  {
    "url": "assets/js/19.3bff2d1f.js",
    "revision": "82a28cfd7d602101f29e58c586cc1bab"
  },
  {
    "url": "assets/js/20.768bad2a.js",
    "revision": "04657353b680d8ad044ae0da91184012"
  },
  {
    "url": "assets/js/21.92419382.js",
    "revision": "a5ee9357484e5cdaa0730142bfa10f69"
  },
  {
    "url": "assets/js/22.5861f0ae.js",
    "revision": "074a290032cffe7c913aa7e4fd4e1ea1"
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
    "url": "assets/js/app.040f5fc1.js",
    "revision": "0c5d810df28dd4f289c75c0c5d8dce87"
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
    "revision": "49f62bb7f70ac464fc1c4187e0889ecd"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "c13810ed01e99ee6cf293e7d2392c99f"
  },
  {
    "url": "guide/environments.html",
    "revision": "39b63c481bf3c7351ee8e6b25f7e3bcd"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "b33447e795b9b897d64546b144e87abd"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "66c56b31063fcc91720bb7bc874fb48b"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "3af7462055cee5450584fd384658b6b5"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "a07c0ef5e664d9de19c977f009946f80"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "007bb731185456f8e97bc40f14af7956"
  },
  {
    "url": "guide/hooks.html",
    "revision": "1130f637b444a20ec1dcd11c89d71370"
  },
  {
    "url": "guide/index.html",
    "revision": "56b0a0c62accaf5100ba2d6f8d45c542"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "b3edb1a77b399e19a0242d871d0188a6"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "d4139566152351dd8e22d956c96e3701"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "3658e97df7a2a3c4dca219fe2fd28a1d"
  },
  {
    "url": "guide/installation.html",
    "revision": "db784c707177bcbd979b64b1decc1e52"
  },
  {
    "url": "guide/metaData.html",
    "revision": "ab61985e4065798521b25d71d96f1f52"
  },
  {
    "url": "guide/request.html",
    "revision": "4f99e25ce4ae1b03e6cf0093b5434755"
  },
  {
    "url": "guide/scripting.html",
    "revision": "781b627cac891fba5e9208b15c4cd920"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "313e5b6170a428d32f5f4adf30c21c31"
  },
  {
    "url": "guide/variables.html",
    "revision": "0648c505a26fabcf5f951634fd129d30"
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
    "revision": "f8fca70c04db2b95720e2144cc8a227f"
  },
  {
    "url": "plugins/index.html",
    "revision": "1dc558129f110dfa70085a557751e050"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "77509800eca1f5717911e9ac74f29f1c"
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
