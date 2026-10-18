/* TIK shared store — единое безопасное хранилище корзины и избранного.
   Визуальное оформление страниц не затрагивается. */
(function () {
  'use strict';
  const CART_KEY = 'tik_cart_v1';
  const FAV_KEY = 'tik_favs_v1';

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return fallback;
      const value = JSON.parse(raw);
      return value == null ? fallback : value;
    } catch (_) {
      return fallback;
    }
  }

  function readCart() {
    const raw = readJson(CART_KEY, []);
    const entries = Array.isArray(raw) ? raw : Object.entries(raw && typeof raw === 'object' ? raw : {});
    const normalized = new Map();
    entries.forEach((entry) => {
      if (!Array.isArray(entry) || entry.length < 2) return;
      const id = Number(entry[0]);
      const qty = Number(entry[1]);
      if (Number.isFinite(id) && Number.isInteger(qty) && qty > 0) {
        normalized.set(id, (normalized.get(id) || 0) + qty);
      }
    });
    return [...normalized.entries()];
  }

  function readFavorites() {
    const raw = readJson(FAV_KEY, []);
    if (!Array.isArray(raw)) return [];
    return [...new Set(raw.map(Number).filter(Number.isFinite))];
  }

  function write(cart, favorites) {
    try {
      const normalizedCart = [...cart.entries()]
        .map(([id, qty]) => [Number(id), Number(qty)])
        .filter(([id, qty]) => Number.isFinite(id) && Number.isInteger(qty) && qty > 0);
      const normalizedFavorites = [...favorites].map(Number).filter(Number.isFinite);
      localStorage.setItem(CART_KEY, JSON.stringify(normalizedCart));
      localStorage.setItem(FAV_KEY, JSON.stringify([...new Set(normalizedFavorites)]));
      window.dispatchEvent(new CustomEvent('tik-store-updated'));
      return true;
    } catch (_) {
      return false;
    }
  }

  window.TIKStore = Object.freeze({
    readCart,
    readFavorites,
    write,
    cartCount() { return readCart().reduce((sum, item) => sum + item[1], 0); },
    favoritesCount() { return readFavorites().length; }
  });

  // Другие открытые вкладки обновляются из единого хранилища.
  window.addEventListener('storage', (event) => {
    if (event.key === CART_KEY || event.key === FAV_KEY || event.key === null) {
      window.location.reload();
    }
  });
})();