const CACHE_NAME = 'bilingual-books-v3';

// 需要缓存的资源（图片和音频在首次访问时按需缓存）
const PRECACHE = [
  '/',
  '/bilingual-picturebooks/',
  '/bilingual-picturebooks/index.html',
  '/bilingual-picturebooks/styles/main.css',
  '/bilingual-picturebooks/data/stories.js',
  '/bilingual-picturebooks/data/app.js',
  '/bilingual-picturebooks/data/tts.js',
  '/bilingual-picturebooks/manifest.json',
  '/bilingual-picturebooks/icons/icon-192.png',
  '/bilingual-picturebooks/icons/icon-512.png'
];

// 安装：预缓存核心文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// 激活：清除旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 请求拦截：缓存优先，网络回退
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 只缓存同源请求
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // 只缓存成功的 GET 请求
        if (response.ok && event.request.method === 'GET') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // 离线时返回缓存的主页
        if (event.request.mode === 'navigate') {
          return caches.match('/bilingual-picturebooks/');
        }
      });
    })
  );
});
