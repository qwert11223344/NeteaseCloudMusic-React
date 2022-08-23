const localCache = {
  set(key, data, expire?) {
    let cache = { data };
    if (expire) {
      cache.expire = new Date().getTime() + expire * 1000;
    }
    localStorage.setItem(key, JSON.stringify(cache));
  },
  get(key) {
    const cacheData = localStorage.getItem(key);
    if (cacheData) {
      const cache = JSON.parse(cacheData);
      const expire = cache?.expire;
      if (expire && expire < new Date().getTime()) {
        localStorage.removeItem(key);
        return null;
      }
      return cache.data;
    }
    return null;
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
export default localCache;
