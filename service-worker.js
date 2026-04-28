// 🌟 基本的 Service Worker 範例
// 此 Service Worker 只做基本的註冊和啟用，
// 以滿足 Chrome/Edge 彈出主動安裝提示的條件，
// 並不進行離線快取 (Offline Caching)。

const CACHE_NAME = 'shim-stack-tool-cache-v1';

// 安裝事件
self.addEventListener('install', event => {
  // console.log('Service Worker: Installing...');
  // 為了滿足安裝提示條件，我們可以使用 waitUntil 跳過等待狀態
  event.waitUntil(self.skipWaiting());
});

// 啟用事件
self.addEventListener('activate', event => {
  // console.log('Service Worker: Activated.');
  // 啟用後立即接管所有客戶端
  event.waitUntil(self.clients.claim());
});

// 抓取事件 (此工具高度依賴聯網 API，不進行快取)
self.addEventListener('fetch', event => {
  // console.log('Service Worker: Fetching...', event.request.url);
  // 直接執行 Fetch 請求，不使用快取
  event.respondWith(fetch(event.request));
});