'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "14364eddc0aa2c9aed0fbf5fc2271c98",
"/": "14364eddc0aa2c9aed0fbf5fc2271c98",
"assets/assets/Screenshot_2021-03-17_LogoMaker_-_Caixa-removebg-preview.png": "d2d2217bd15786f2671d17c94140a7a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "38b70c5c93168a82a51e540c6438dbd0",
"assets/AssetManifest.json": "efd8ec0998e8d2e5a3fac351658b70cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "92639ee1d902fc4cb06c862275d055a9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/index": "788227d63bba642ec6af9b451ec625cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "16804e46b06d062e02686c357b54a8a9",
".git/logs/refs/remotes/web/web": "ccde4eee368fc967643c48d3c39b203a",
".git/logs/refs/remotes/origin/web": "ccdebf794e40555e9373492da2440d9d",
".git/logs/refs/heads/web": "8338ba52da889eb725e2f2b1e8607448",
".git/logs/refs/heads/master": "ab4a26435884426cb36fbec0e15b5104",
".git/config": "0a43bfd9402b3b63e5d361a7a6e11043",
".git/COMMIT_EDITMSG": "74b9e11279f696aeddc998f694a3ab9c",
".git/objects/56/5c7a1af3cbbdb3a150e80fb465a358533da8c1": "18776ec99855c84ce9d4fca4c5066c50",
".git/objects/3e/5d820d5611cdfb56af608df3caf6680061287c": "b7fb7fd7888b4ec046e95c9faab0ab5a",
".git/objects/0a/7af8ea731655e8373e50ba12ada5a6ebda9636": "babc0e69bf593f85316ae10bf255413e",
".git/objects/21/dd44eb5124616a6c58365253629a58b1998839": "5f477f909dee105e0ccebf1ef43ceb73",
".git/objects/10/1b97bacad45e2f600b13fc03a57a9f7b16bf6e": "c783b8397ff0800f24ffc4b8e917421b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e2/a1e8e75fe1faea1efe4c8afc3571d47f34efea": "8e76f859f75045601a429cad0c1e6ed1",
".git/objects/33/9f631d55196fc1796045e9543c302a45d57422": "ae87926405ffd6e3e51eae1693650aa4",
".git/objects/04/1d44d70ced93d72d6a700034901ca9452e7df6": "6e8fff467afa1c2f1b4f7272555f9777",
".git/objects/ed/2fe8ce8f3f48bcde62f2587f4b3168bbeadd5c": "237c3c9289ab310dc0fe7dcb0bff2ebe",
".git/objects/92/71a738aa41c4a623301855cb9a86bee8627ccd": "9ce8bb17ec9062497ad31592bf04fa01",
".git/objects/97/f6c8ebd11989274d878b9bdebf4d73218763d6": "d38ac69831700d623ed64317626fcaa2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/63/c0b5e15d5887938f82d9c13a668875f6e890fe": "e8f4b79961beab264a193cd5fe34d04a",
".git/objects/3a/5668b09cf88963eee1cd811e0378350b229ea5": "e0282b0065f9b09a1310923d3a0c2d6f",
".git/objects/6d/8bf9b1103431ed183af83ce8a32a7ff5fee17a": "4a2860782638ec792b57afc3250635f3",
".git/objects/fa/094c987260d1627ee0b8fa8440811fd27ea17f": "abf9bb214c24d961787736207a5ed9df",
".git/objects/b8/ba524502d9c9136efb2befd0d4baa72bdaf8b2": "2bb7d8582e19747bf1cc594f3cd0baaa",
".git/objects/b8/3916df130c584bbeda987986e1fd1b4afa7deb": "2132de9add4ed601b8e7a8ca5e1bcaa3",
".git/objects/68/92c1eb6a007d8f9ccb0c94dd12d84df0e8ac0e": "06148e78f9d324bf129b9b07d7db4498",
".git/objects/15/97e700497b77ae86e6165bfcd4146d25935676": "e49e673ade00ff7c46877fbf582eb140",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/3ee51487fd5a4231efbcce381d0cd3098f72aa": "58b067f983d939ea91c3dd6cb4af9ab1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/fc/aa118a77ba7be97c38e8820ad62a037e649b26": "fdd4b18f1afd8511053ae8355c0e1e3a",
".git/objects/bc/b9a86286ae982a0c0441feadb9ac680b457f0c": "e185956ea662c8849941c3f6a1fdbc84",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/4b/cdbc1ad98cfb0b4cd57f56ab63a8f48846901d": "55d77350cf8f4f3b1bb4e39d89fc5ac2",
".git/objects/3d/8f7134b64235ed3e5567f05914c5294a5839d4": "95fa001c7c84ca74c805396ec4b0dd07",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/f4/7347b221e720a0c7a4501d4c31a228792fce48": "2d63d3be96121315dc4c67e89fa3a92c",
".git/objects/a2/49a30c3c86423fedef01182ba94d551a5d677e": "a12a9b3272be92dd654ed020b2bef0f6",
".git/objects/a5/4f57092369cc1eb987b055d6a79a7c4933fb3e": "f570c450e162b8c145c3738539a72ba9",
".git/objects/80/9abe022571b80751e6e6ad6c1c70f6b2d33751": "ecd700aa339976f823c43687d5028da2",
".git/objects/d8/ab1d47cca4d3a3e0839ab10a5004191c267092": "a705edfde6afbe5c094dcd8359ada503",
".git/objects/4f/105509d06392e4b08be1afe0e55ba116ecc2cd": "cb4e523c8d90ba7f602d684d667de8b7",
".git/objects/f3/401917f06339a57bbfb75b39c593f9a22a8f03": "50b1d9e04a1fc76bf331ff85b4e9aa45",
".git/objects/e5/925add6814bf52ed18d795d2384edbc22b6cad": "80c0d92949d918c21acc8ac898eddddf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/7b/1ff0d64468ed2c7824338ecb65bf94960afb7f": "ab1bacaad82a1f2ed1d88448c894c685",
".git/objects/3b/9851ff1cb9d5e932d69cd909d0c30061239e6b": "a7663a73cf6a485920f578da39a1049b",
".git/objects/3b/4d56f8431ce6ae93ee69e2227e6bfe456743de": "29db067f27ae377d5fb4e69212dba269",
".git/objects/bf/1a369efa01c923841b61c519f99b544cf8fbf0": "698e77669d08697546a0d4dcb1cbf753",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/35/3db83002d8cdf67961a318e901d7e83ae3c513": "e1d4b1b7eb9d7da48ed7acb85dee4b59",
".git/objects/b1/7682e866880ec0e19b48294c8929cb9470cd0f": "23ff67d1abb8487ca2880edd5ffbc8b1",
".git/objects/f6/5e4d6c4534831d9c7782b8244d683bdbe90ecf": "117b95fa09a48822aaf62ae1045ee359",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/43/1aa92712b8ed32d959fbcb49860b7ec0f7a282": "b5e1d1d2aff43fe82b2115279cbcb8f9",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/web/web": "badb1c908b90f99c85514ab3642b43f6",
".git/refs/remotes/origin/web": "7f52c13d7284b12431f349ab467a8563",
".git/refs/heads/web": "badb1c908b90f99c85514ab3642b43f6",
".git/refs/heads/master": "7f52c13d7284b12431f349ab467a8563",
"manifest.json": "f52175bd543d91b3c8e76fa76481775f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "f99604e2b041502cfacff17b99d66fe5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
