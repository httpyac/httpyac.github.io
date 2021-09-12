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
    "revision": "ab201bd5644b520fffd7dc1007b9ae76"
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
    "url": "assets/js/app.1c8030f2.js",
    "revision": "766276ae9961f9ee41e7cf60d1644304"
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
    "revision": "47badbe71e71c37328d143b6992a95f5"
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
    "revision": "1da81df36d936163706fb8be110224d3"
  },
  {
    "url": "guide/comment.html",
    "revision": "16531e822579407c1c916629b8cfdca2"
  },
  {
    "url": "guide/environments.html",
    "revision": "bd18a243d253eb4f7620f85d9e564950"
  },
  {
    "url": "guide/examples_arbeitsagentur.html",
    "revision": "7b0e6aba83bf3d78472ad0dc548f3fa1"
  },
  {
    "url": "guide/examples_github.html",
    "revision": "0eccbf6fbce9fd85715fa505f22bf14e"
  },
  {
    "url": "guide/examples_httpbin.html",
    "revision": "a8e29f5975756c83a18032f3c94062a2"
  },
  {
    "url": "guide/examples_learnwebservices.html",
    "revision": "89fdf2e1dd8f1cb12e457aebd0cbf943"
  },
  {
    "url": "guide/examples_spacex.html",
    "revision": "30f35310a7cc026651ad7ace8be3f733"
  },
  {
    "url": "guide/examples_springboot.html",
    "revision": "1d29e5e95d03ee5ddb702323b24fd452"
  },
  {
    "url": "guide/examples.html",
    "revision": "04ab1ee1c048d3e31a4ccdc7b89b722e"
  },
  {
    "url": "guide/hooks.html",
    "revision": "a4f595aeea37edf98f4107039a39d613"
  },
  {
    "url": "guide/index.html",
    "revision": "c4444a5dd4a37b8af5d216f9b145891e"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "64946e7266be11df219aeb0eb640651a"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "a592f91f603a0e3a338f27a0840946f3"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "0536f813233c53ea9e5065c4ec66c173"
  },
  {
    "url": "guide/installation.html",
    "revision": "3bf7d5749e8c2ece08bb80e5414ff1a2"
  },
  {
    "url": "guide/metaData.html",
    "revision": "e2a8a0b26449b2000f278cb61b3141d6"
  },
  {
    "url": "guide/request.html",
    "revision": "6c96669093536276cd15c987852fd216"
  },
  {
    "url": "guide/scripting.html",
    "revision": "7d47d0568a9cdad5e8e0dd4d8831ee53"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "4e773a08070ee669d771b0eb461d78a6"
  },
  {
    "url": "guide/variables.html",
    "revision": "e6954b17c02d5aca15d7c8d3ee0bf94c"
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
    "revision": "1eaf3601db25507995e41514b6263226"
  },
  {
    "url": "plugins/index.html",
    "revision": "1e52fc59861452a6d79d6a3bd91988a0"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "9294d776e4de1a0a3758e3d595754b1b"
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
