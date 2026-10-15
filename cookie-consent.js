(() => {
  const key = 'tik_cookie_consent_v2';
  const read = () => { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; } };
  const save = (analytics) => {
    try { localStorage.setItem(key, JSON.stringify({necessary:true,analytics:!!analytics,savedAt:new Date().toISOString(),version:2})); } catch (_) {}
    document.querySelector('.tik-cookie-layer')?.remove();
  };
  const open = () => {
    if (document.querySelector('.tik-cookie-layer')) return;
    const layer = document.createElement('div');
    layer.className = 'tik-cookie-layer';
    layer.innerHTML = '<section class="tik-cookie-panel" role="dialog" aria-modal="true" aria-labelledby="tikCookieTitle"><div class="tik-cookie-copy"><h2 id="tikCookieTitle">Настройки cookies</h2><p>Мы используем необходимые файлы cookie для работы сайта. Аналитические cookie можно разрешить или отключить.</p><a href="privacy.html">Политика конфиденциальности</a></div><div class="tik-cookie-actions"><button type="button" data-necessary>Только необходимые</button><button type="button" data-accept>Разрешить аналитику</button></div></section>';
    document.body.appendChild(layer);
    layer.querySelector('[data-necessary]').onclick = () => save(false);
    layer.querySelector('[data-accept]').onclick = () => save(true);
  };
  document.addEventListener('click', event => { if (event.target.closest('[data-cookie-settings]')) open(); });
  if (!read()) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', open, {once:true});
    else open();
  }
  const addSettingsLink = () => {
    const links = document.querySelector('footer.footer .footer-links');
    if (links && !links.querySelector('[data-cookie-settings]')) {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'tik-cookie-settings-link';
      button.dataset.cookieSettings = ''; button.textContent = 'Настройки cookies';
      links.appendChild(button);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addSettingsLink, {once:true});
  else addSettingsLink();
  const style = document.createElement('style');
  style.textContent = '.tik-cookie-layer{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;padding:16px;background:#0008}.tik-cookie-panel{width:min(540px,100%);display:flex;align-items:center;gap:20px;padding:18px 20px;border:1px solid #ffffff20;border-radius:16px;background:#0b2118;box-shadow:0 16px 50px #0008;color:#fff;font-family:inherit}.tik-cookie-copy{flex:1;min-width:0}.tik-cookie-panel h2{font-size:17px;line-height:1.2;margin:0 0 7px}.tik-cookie-panel p{color:#b5c7bf;font-size:11px;line-height:1.5;margin:0 0 7px}.tik-cookie-panel>a,.tik-cookie-copy a{color:#d4b87a;font-size:10px}.tik-cookie-actions{display:grid;gap:7px;flex:0 0 155px}.tik-cookie-actions button{min-height:36px;padding:8px 10px;border:1px solid #ffffff2b;border-radius:9px;background:#ffffff08;color:#fff;font:600 10px inherit;cursor:pointer}.tik-cookie-actions button:last-child{background:#00ff8c;color:#03150c;border-color:#00ff8c}.tik-cookie-settings-link{border:0;padding:0;background:none;color:inherit;text-align:left;font:inherit;cursor:pointer}.tik-cookie-settings-link:hover{color:#00ff8c}@media(max-width:560px){.tik-cookie-layer{padding:10px}.tik-cookie-panel{display:block;padding:16px}.tik-cookie-panel h2{font-size:16px}.tik-cookie-actions{grid-template-columns:1fr 1fr;display:grid;gap:7px;margin-top:12px}.tik-cookie-actions button{font-size:10px;padding:8px 5px}}';
  document.head.appendChild(style);
})();