(() => {
  const key = 'tik_cookie_consent_v1';
  const get = () => { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; } };
  const save = (analytics, marketing) => {
    try { localStorage.setItem(key, JSON.stringify({necessary:true,analytics,marketing,savedAt:new Date().toISOString(),version:1})); } catch (_) {}
    document.querySelector('.tik-cookie-layer')?.remove();
  };
  const open = (settings = false) => {
    document.querySelector('.tik-cookie-layer')?.remove();
    const layer = document.createElement('div');
    layer.className = 'tik-cookie-layer';
    layer.innerHTML = '<section class="tik-cookie-panel" role="dialog" aria-modal="true" aria-labelledby="tikCookieTitle"><small>ВАШИ ДАННЫЕ — ВАШ ВЫБОР</small><h2 id="tikCookieTitle">Настройки cookies</h2><p>Необходимые cookies помогают сайту работать. С вашего разрешения могут использоваться аналитические и рекламные cookies. Вы можете изменить выбор в любое время.</p><a href="privacy.html">Политика конфиденциальности</a><div class="tik-cookie-options" '+(settings?'':'hidden')+'><label><input type="checkbox" checked disabled> <span><b>Необходимые</b><small>Нужны для основных функций сайта.</small></span></label><label><input id="tikCookieAnalytics" type="checkbox"> <span><b>Аналитические</b><small>Помогают понять, как используют сайт.</small></span></label><label><input id="tikCookieMarketing" type="checkbox"> <span><b>Рекламные</b><small>Для персонализации рекламы, если она будет подключена.</small></span></label></div><div class="tik-cookie-actions"><button data-accept>Принять все</button><button data-necessary>Только необходимые</button><button data-toggle>Настроить</button><button data-save '+(settings?'':'hidden')+'>Сохранить выбор</button></div></section>';
    document.body.appendChild(layer);
    const opts=layer.querySelector('.tik-cookie-options'), saveBtn=layer.querySelector('[data-save]'), toggle=layer.querySelector('[data-toggle]');
    const old=get(); if(old){layer.querySelector('#tikCookieAnalytics').checked=!!old.analytics;layer.querySelector('#tikCookieMarketing').checked=!!old.marketing;}
    toggle.textContent=settings?'Скрыть настройки':'Настроить';
    toggle.onclick=()=>{opts.hidden=!opts.hidden;saveBtn.hidden=opts.hidden;toggle.textContent=opts.hidden?'Настроить':'Скрыть настройки';};
    layer.querySelector('[data-accept]').onclick=()=>save(true,true);
    layer.querySelector('[data-necessary]').onclick=()=>save(false,false);
    saveBtn.onclick=()=>save(layer.querySelector('#tikCookieAnalytics').checked,layer.querySelector('#tikCookieMarketing').checked);
  };
  document.addEventListener('click',e=>{if(e.target.closest('[data-cookie-settings]'))open(true);});
  if(!get()){if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>{if(!get())open();},{once:true});else open();}
  const addSettingsLink = () => {
    const footer = document.querySelector('footer.footer');
    const links = footer && footer.querySelector('.footer-links');
    if (links && !links.querySelector('[data-cookie-settings]')) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'tik-cookie-settings-link';
      button.dataset.cookieSettings = '';
      button.textContent = 'Настройки cookies';
      links.appendChild(button);
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', addSettingsLink, {once:true});
  else addSettingsLink();
  const style=document.createElement('style');
  style.textContent='.tik-cookie-layer{position:fixed;inset:0;z-index:9999;display:flex;align-items:flex-end;justify-content:center;padding:20px;background:#0009;backdrop-filter:blur(5px)}.tik-cookie-panel{width:min(740px,100%);max-height:88vh;overflow:auto;padding:26px;border:1px solid #00ff8c55;border-radius:22px;background:linear-gradient(145deg,#10271e,#071710);box-shadow:0 24px 90px #0008;color:#fff;font-family:inherit}.tik-cookie-panel>small{color:#00ff8c;font-weight:700;letter-spacing:.14em}.tik-cookie-panel h2{font-size:clamp(22px,4vw,30px);margin:10px 0}.tik-cookie-panel p{color:#b5c7bf;font-size:13px;line-height:1.7}.tik-cookie-panel>a{color:#d4b87a;font-size:12px}.tik-cookie-options{display:grid;gap:9px;margin-top:18px}.tik-cookie-options[hidden],.tik-cookie-actions [hidden]{display:none}.tik-cookie-options label{display:flex;gap:10px;padding:12px;border:1px solid #ffffff22;border-radius:12px}.tik-cookie-options input{accent-color:#00ff8c;margin-top:3px}.tik-cookie-options span{display:grid;gap:4px}.tik-cookie-options b{font-size:12px}.tik-cookie-options small{font-size:11px;color:#a8bdb5}.tik-cookie-actions{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}.tik-cookie-actions button{min-height:42px;padding:10px 14px;border:1px solid #ffffff30;border-radius:11px;background:#ffffff0b;color:#fff;font:600 12px inherit;cursor:pointer}.tik-cookie-actions button:first-child{background:#00ff8c;color:#03150c;border-color:#00ff8c}.tik-cookie-actions button:hover{border-color:#00ff8c}.tik-cookie-settings-link{border:0;padding:0;background:none;color:inherit;text-align:left;font:inherit;cursor:pointer}.tik-cookie-settings-link:hover{color:#00ff8c}.tik-cookie-actions button:last-child{color:#d4b87a}@media(max-width:560px){.tik-cookie-layer{padding:10px}.tik-cookie-panel{padding:20px 16px}.tik-cookie-actions{display:grid;grid-template-columns:1fr 1fr}.tik-cookie-actions button:first-child,.tik-cookie-actions button:last-child{grid-column:1/-1}}';
  document.head.appendChild(style);
})();