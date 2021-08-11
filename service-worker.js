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
    "revision": "b7466ed5c18070a16202eab3c48c3a43"
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
    "url": "assets/js/15.bd5259d6.js",
    "revision": "02edf9bb1c5dee189a7f378e14da7423"
  },
  {
    "url": "assets/js/16.a15f358c.js",
    "revision": "4b62b8c6b8302a20ebba930848403bad"
  },
  {
    "url": "assets/js/17.ebeb2586.js",
    "revision": "08f78e81a2539bfa1b26696e72d70f7f"
  },
  {
    "url": "assets/js/18.0d5615a2.js",
    "revision": "c7601ca315145a6da98a53a296840b80"
  },
  {
    "url": "assets/js/19.e2bd9d3e.js",
    "revision": "aa2927e2ba110a85487df795b6ab56e5"
  },
  {
    "url": "assets/js/20.9a0a59e3.js",
    "revision": "7a8cad737c3072b889330029a5837ac8"
  },
  {
    "url": "assets/js/21.522b49c8.js",
    "revision": "9e0c008ae601d21fef3695fc89e2de94"
  },
  {
    "url": "assets/js/22.e5ded7cc.js",
    "revision": "467332644bd906dcd1cb4b1145f7baa1"
  },
  {
    "url": "assets/js/23.a944b2f7.js",
    "revision": "f960ce6a5b9fd74132e6a4e11d3ca2a2"
  },
  {
    "url": "assets/js/24.150eefd9.js",
    "revision": "53692243eb14e570591297fb1a83c262"
  },
  {
    "url": "assets/js/25.5f502524.js",
    "revision": "9eaa4ab169cab2b7457f3254da1c3bdb"
  },
  {
    "url": "assets/js/26.4018dbe2.js",
    "revision": "b35e5518d887c4fbd0650c4defe79fbb"
  },
  {
    "url": "assets/js/27.7e9f3106.js",
    "revision": "5181112d1c478ee40971a47683448364"
  },
  {
    "url": "assets/js/28.488904b6.js",
    "revision": "2bc01273c9a54d15eecf34548f30495b"
  },
  {
    "url": "assets/js/29.a1a5c652.js",
    "revision": "95ba1973c2082e4e93b1b9e56da4b306"
  },
  {
    "url": "assets/js/3.59f169ac.js",
    "revision": "05f627975ab2af5ee791cc2c2c038220"
  },
  {
    "url": "assets/js/30.3de20be7.js",
    "revision": "2212d7b084012b03baade11ddfb8d122"
  },
  {
    "url": "assets/js/31.579f8fe9.js",
    "revision": "0812f3ba60597eeff995e6ba1f3314fb"
  },
  {
    "url": "assets/js/32.5f3974b5.js",
    "revision": "7d7dbcbc2ccd383ea1118186aadab0c2"
  },
  {
    "url": "assets/js/33.b7abc958.js",
    "revision": "63350f31ab68f083c8cc50e6ae95fded"
  },
  {
    "url": "assets/js/4.213970f6.js",
    "revision": "e8a6fb0e0b5429a464eb8703cb5dbeab"
  },
  {
    "url": "assets/js/5.3020b568.js",
    "revision": "9d0d9fbccfd254788fbfc97ca768232c"
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
    "url": "assets/js/app.672e0918.js",
    "revision": "7e02efdea57fd282af3977d21bbc98d3"
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
    "revision": "0221a871db71b06a43015784f2a6609b"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "guide/comment.html",
    "revision": "c6ddbe69e6be74c2d24d985c5103d2a5"
  },
  {
    "url": "guide/environments.html",
    "revision": "69d4f98ee6cfccb258d7f61ad2becb35"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "2128cbab7f94d219278d9385dc1ef532"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "e2f891e417467806ab3d2d9b0feaa022"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "7e94e790a7e55d451cfdffb498d2ac76"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "a9a060ef2e62bd1d7bcbabd29a05840d"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "75548c10d8c9673ffbbf2c49be5cdd8a"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "773e56d952bf474c73e601f864463157"
  },
  {
    "url": "guide/examples.html",
    "revision": "96f2e9518eca7645059352f73dac6307"
  },
  {
    "url": "guide/hooks.html",
    "revision": "3ace0d758a7ddcdd36de9f807193e4b8"
  },
  {
    "url": "guide/index.html",
    "revision": "515147d7024203c0526ad27393b6fa2e"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "6670534336c95cc83e1687778905dabd"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "75fb48cc3d7f6ad23d8a5d09b0e26fec"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "a6cf40bf097be885d46ef86639622fb2"
  },
  {
    "url": "guide/installation.html",
    "revision": "7e95298f62f08ff374bb9a762625618b"
  },
  {
    "url": "guide/metaData.html",
    "revision": "87c5bc447de0b5cb047c58dc98ddfae1"
  },
  {
    "url": "guide/request.html",
    "revision": "ef96ecbdd4710419be04561d2886ca1d"
  },
  {
    "url": "guide/scripting.html",
    "revision": "8dfa469654cdfa90f26ef7903bfef965"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "85924f13ed49f9c3670c2e3e405d40dd"
  },
  {
    "url": "guide/variables.html",
    "revision": "124b6a27e9fbbd2c84538665eed73310"
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
    "revision": "109cf4fc11a907ecab3e85ad1387d1a2"
  },
  {
    "url": "plugins/index.html",
    "revision": "86861febe75e53d8f5cf8479bdb81702"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "aedaff1f4cf0a40f17d659b043bc76a5"
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
