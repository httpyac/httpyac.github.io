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
    "revision": "6d0655a821ef8f815948cad39496015d"
  },
  {
    "url": "assets/css/0.styles.5eec76fd.css",
    "revision": "0e83983e179341a416500bbbfb33b1f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e6a2905.js",
    "revision": "8f5ccfe672829c70eaacea9ee726ae62"
  },
  {
    "url": "assets/js/11.68fb4022.js",
    "revision": "0904731fd582fcd161f8ce8940e7c57d"
  },
  {
    "url": "assets/js/12.94cf2ebc.js",
    "revision": "7c51d09510a9fceb324549d492db62c9"
  },
  {
    "url": "assets/js/13.b1d3826b.js",
    "revision": "38486cb20f659823c1156b6eac20a53e"
  },
  {
    "url": "assets/js/14.d1a80228.js",
    "revision": "91acebc51bd837c189252618d084f37f"
  },
  {
    "url": "assets/js/15.05e64bfe.js",
    "revision": "e16d061ebed88a3c0d566b4fe870850d"
  },
  {
    "url": "assets/js/16.4cca75a4.js",
    "revision": "951a04c1020e5914a43a099dd6a5aae3"
  },
  {
    "url": "assets/js/17.bfed2c9f.js",
    "revision": "03cca580c677b0ddd08c128f5a4a0c8a"
  },
  {
    "url": "assets/js/18.2126a93e.js",
    "revision": "928adc399f0de4b54834a1f1ceb65ea5"
  },
  {
    "url": "assets/js/19.3ece6735.js",
    "revision": "42f6fe121ccd9d9fdc09ab8f867b0952"
  },
  {
    "url": "assets/js/2.8110d193.js",
    "revision": "0f8f76da787fefba121abbd98f864df7"
  },
  {
    "url": "assets/js/20.cd9ce45f.js",
    "revision": "bcf1963ac64726051b93014346384118"
  },
  {
    "url": "assets/js/21.86e3c22b.js",
    "revision": "801b347eb0d7c392612b1172225258ce"
  },
  {
    "url": "assets/js/22.a883b25e.js",
    "revision": "860765443f2cb2fdc935dbde421dc5c5"
  },
  {
    "url": "assets/js/23.0176e91a.js",
    "revision": "6f74294829298c9b99bdac5de0ec4c01"
  },
  {
    "url": "assets/js/24.68950f75.js",
    "revision": "f1d1260649ba92462616ad675884d85b"
  },
  {
    "url": "assets/js/25.f6923165.js",
    "revision": "51e412c02cd5d2207e1e2e4c21a5c915"
  },
  {
    "url": "assets/js/26.2c97c58c.js",
    "revision": "030a5339dfc9205a543ddee91fd2f9ae"
  },
  {
    "url": "assets/js/27.481bc812.js",
    "revision": "94d32bdb54c23aea722a8c97a9956a4d"
  },
  {
    "url": "assets/js/28.1b789012.js",
    "revision": "4131fc0bbbdf774ab424c3416edfe180"
  },
  {
    "url": "assets/js/3.dbde006c.js",
    "revision": "dfe28c3a7fe2da6800b2075e3ad99a55"
  },
  {
    "url": "assets/js/4.c38a9b55.js",
    "revision": "d8212d70803527e1fb6692b7ccd706cf"
  },
  {
    "url": "assets/js/5.cb773858.js",
    "revision": "0539e5939acc84f5de0ebb2f8e1f59a1"
  },
  {
    "url": "assets/js/6.f483528c.js",
    "revision": "155de558a3839b1c1b63d8ec01938bae"
  },
  {
    "url": "assets/js/7.b886d630.js",
    "revision": "9a361568493bcbe69f77f0c51b9cff0e"
  },
  {
    "url": "assets/js/8.bfc71185.js",
    "revision": "a44f1497389e20c54874974ceb7fe58f"
  },
  {
    "url": "assets/js/9.128ae7e1.js",
    "revision": "ca44a97426a7e89a1abe9e6ad4eebf75"
  },
  {
    "url": "assets/js/app.80b6a3f5.js",
    "revision": "255fc8615427048ac4cfa79409457c23"
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
    "revision": "92c9dbf0cbbf10ecfb5d0d74d8661fcf"
  },
  {
    "url": "favicon.png",
    "revision": "10baeb8b09145b70a6ea944d431cd971"
  },
  {
    "url": "flows/execute_flow.svg",
    "revision": "c3c7235386837d700c6884752590a8f5"
  },
  {
    "url": "flows/parse_flow.svg",
    "revision": "7b4c36aafd19f3079cd1f35a3a2303f5"
  },
  {
    "url": "flows/send_flow.svg",
    "revision": "a0ce29966a47d5e87c7986db4320c728"
  },
  {
    "url": "github.svg",
    "revision": "5a14e36c8b0b5e4ba427f47fca304477"
  },
  {
    "url": "guide/badges.html",
    "revision": "6d8d8ac2b0ac07287ef6faf948f6737f"
  },
  {
    "url": "guide/comment.html",
    "revision": "274e00208fa0ba477b4113e6dc7006ea"
  },
  {
    "url": "guide/environments.html",
    "revision": "3ee22ee4dd0b0e15b26d8f16a44044c1"
  },
  {
    "url": "guide/examples.html",
    "revision": "1df7c0b6141590627ee78946a0252595"
  },
  {
    "url": "guide/hooks.html",
    "revision": "eb48ba404c5f95008668d1beb370017a"
  },
  {
    "url": "guide/index.html",
    "revision": "769cb9a44ff0498b6e1d836178e0ab01"
  },
  {
    "url": "guide/installation_cli.html",
    "revision": "dbffb155c835558753cdc44ba0354f1a"
  },
  {
    "url": "guide/installation_httpbook.html",
    "revision": "ceb470ba9b3c1675533dbc60d390ee63"
  },
  {
    "url": "guide/installation_vscode.html",
    "revision": "15ed69b374c3160193873dbf88fd7cab"
  },
  {
    "url": "guide/installation.html",
    "revision": "e5ae84342d80528b2cb21ae02952d406"
  },
  {
    "url": "guide/metaData.html",
    "revision": "247785751c0e1d0a8db900b1156be567"
  },
  {
    "url": "guide/request.html",
    "revision": "7951226e6b9bde30a7fd5f661828c329"
  },
  {
    "url": "guide/response.html",
    "revision": "3d7c0093f14007dc00e3e6e3e4096261"
  },
  {
    "url": "guide/scripting.html",
    "revision": "35d3acb6272ca79d20ee6b09d83a1b93"
  },
  {
    "url": "guide/troubleshooting.html",
    "revision": "22d27e8edb2978f1558c488b92d7971a"
  },
  {
    "url": "guide/variables.html",
    "revision": "215736f1e863e016de5c641dcad0553a"
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
    "revision": "9c333acc1001abced9f51070289dc7c0"
  },
  {
    "url": "plugins/index.html",
    "revision": "2bf8fc0db7cf23d0bc120b700660c3fb"
  },
  {
    "url": "plugins/plugin-api.html",
    "revision": "2edc3c438b5904941315c45b9695aff0"
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
