'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "841fb52d91a18525cee466c89f3415c6",
"/": "841fb52d91a18525cee466c89f3415c6",
"assets/assets/Captura%2520de%2520tela%25202021-05-05%2520-%252014.59.png": "c8c7a0ea1d1e4d1f5e506c2c00d44184",
"assets/assets/Screenshot_2021-03-17_LogoMaker_-_Caixa-removebg-preview.png": "d2d2217bd15786f2671d17c94140a7a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "a31b14cd3d5410b201edf5eb10ddf4e7",
"assets/AssetManifest.json": "5129a99f4bbea20071764b97634e6a05",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "73e377dce149526e88b92d952c1ebd6f",
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
".git/index": "afafd9ada58160aac700eb06d6b006be",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "3f634c3690f6ff9b084d5adda94c4f6e",
".git/logs/refs/remotes/origin/master": "aac41848a0df512372c520b387262519",
".git/logs/refs/heads/master": "3f634c3690f6ff9b084d5adda94c4f6e",
".git/config": "20f2c7cf340f59c448590dea185ee563",
".git/COMMIT_EDITMSG": "377c5382a43f9fc074ef6709665f1299",
".git/objects/21/059c120b618db051b67cb2bc4556c9106ef976": "a1c8235ad6364b52cedc17c1a23500b0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/e2/a1e8e75fe1faea1efe4c8afc3571d47f34efea": "8e76f859f75045601a429cad0c1e6ed1",
".git/objects/e2/3e8b5dc3d7779baa3a6172d3ef6f4d9bb86577": "e8157f7da833a70f50edc06483a93c15",
".git/objects/33/9f631d55196fc1796045e9543c302a45d57422": "ae87926405ffd6e3e51eae1693650aa4",
".git/objects/97/f6c8ebd11989274d878b9bdebf4d73218763d6": "d38ac69831700d623ed64317626fcaa2",
".git/objects/af/6627064857dcc0a79779c57475326f5db9c05b": "8778fd3e2568781c9074fbf6a5e2f552",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/41/f613ff5ac64b30e072ee9cc10fd7f0291eacb9": "0230b9c92f9d51b5f9e72c51a885d26c",
".git/objects/44/d369d8f4511e25c5f6d86b909eb053f2984e5c": "5c41c2f9e928e945129b24cdec06c345",
".git/objects/50/00ee9e8eae272a98396e0cd03c78c313c6e4b0": "6abe0d20e4ebf9d4a7a58da7ff852d80",
".git/objects/50/3c9548438d5dd0c6f48de77da7c0c55a37b052": "b862d99ca1dcaa523ca5c990767d3d10",
".git/objects/6d/fec949abb33017c037c0959bc2bfea164885c9": "7fe016cfdf4d4b3813245c6b03cc214a",
".git/objects/c7/8545cae984c0cfc9c8ab71a8dbb75ace6b7a99": "fd5f950c0693b1feaf854718c8d889e3",
".git/objects/89/4df15478e41bf42c7f3b37cb64a81ac46f2487": "93de189afc52801bd486cf460dae23ab",
".git/objects/68/92c1eb6a007d8f9ccb0c94dd12d84df0e8ac0e": "06148e78f9d324bf129b9b07d7db4498",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/cf/47680e30b3db49090c85fd0d9ef7c155b03d0c": "3e72ae6d13dbe86311acd6b2b2223412",
".git/objects/9b/e555c441f3f123321286c2d49efd8ef722316a": "70efa4d0432f34159c49bd5743bda38a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/c6/ce53558b5ef3e870811683e906e179b593d907": "da0995f5c314df92557004615644e701",
".git/objects/22/eb75914d531bedb3b382cfda0c12800fc14cb2": "fbe491adeaa3b3436669a6c00abd3e10",
".git/objects/e0/a5a943e0e9cc7ee08b5e882ea7d19aed4c4f3e": "69093c754a2407d04d654a5aa801237f",
".git/objects/03/d9a7bbe2ed5ef69e9bbbea7b83a2a40db4c30b": "cdc8c12a4cb0f162bdca4c8835ebc6f1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/f4/92f05d3e98ff16e5bff298666e2933b050b38d": "5ca4656120794979856c49cae8208669",
".git/objects/1f/ea54d6bb190d81f407b1e7e28ace947417f239": "9b4c963f7dac62e45d5767c722c9579d",
".git/objects/74/b68052d0f50f0386154036a332bf99ea1d73e0": "01bc1b113ebc5cd86d7040a2d86bcfc0",
".git/objects/f7/5bc482167b1c594af6adbe430d3fe5aae6c634": "b5dbfea5efe1d56f4b6e3ac473c19b46",
".git/objects/4c/bc786a9b71eedfc666d11b57d27af5008a3bb9": "09f6d355774d48b1973b14a2f0b210be",
".git/objects/a5/90c9428a422b7619c8df6136b25667cd233120": "c470a39138b47d7959c31a210e0bbe28",
".git/objects/00/d333decd69d552a1e9aed16aef768583b4552e": "6d1ea273516a6b35aedb19e2a708e267",
".git/objects/37/978b1aa4beebe1594d21d1e7d4b394fb388a7e": "f086c7d93ea6afd62b17cc765cb073e2",
".git/objects/b6/a28389fc3ee5bf98e75a52072d218cf1476063": "f302c75a454a8fd247fcc769eda8426a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/0f/2e627c40c703f783e1c7afe7a8010d0cd933dc": "097df8f98f04f181866b075a208e90e2",
".git/objects/cd/8deeaf359cd8507e5a5ee1db37376211671523": "7624a6e3bdaf57877db2298b9e788ab7",
".git/objects/ab/bed88f6f1e5aa1fab50a196162f662bfb06390": "6ecc56c50f54ccbd128d8121b5e559c3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/35/3db83002d8cdf67961a318e901d7e83ae3c513": "e1d4b1b7eb9d7da48ed7acb85dee4b59",
".git/objects/35/5c95ca25142d7ab917562a0e42b4af165ff1b8": "8c2360ac2b9ff7404446c11610336411",
".git/objects/25/60640cee243c78b3d33ce518bbf2c98685a2e1": "e5fe916a358fa7920824bc812870fb97",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/6f/ff6997b99897da152e8c80293e8db521a649d9": "8e5976e2557cc239826c5816c95342f5",
".git/objects/6f/332f1fb4cd1dc0771a3761801f4b36679ed67d": "20a9441474973fc972a2ce433289f013",
".git/objects/43/bbba9649034fe5244c3776c821781c84e2515d": "1fd2ad566e9fe54361d3f45beaeb92be",
".git/objects/30/57509e4049d75743d7db5cfe34423551749071": "232ffadaa9c6e0d49b6506f3871d573c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/master": "8258e943c23fc63d35eca03476c7e088",
".git/refs/heads/master": "8258e943c23fc63d35eca03476c7e088",
"manifest.json": "f52175bd543d91b3c8e76fa76481775f",
"favicon.png": "b90cd6f240b663f66b8fab5fb44e7f2d",
"version.json": "f99604e2b041502cfacff17b99d66fe5",
"firebase-messaging-sw.js": "872965f0f28de92af266f01f1b5cc795"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
