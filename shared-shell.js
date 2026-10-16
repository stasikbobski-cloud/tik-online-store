/* Общая шапка, каталог и подвал ТИК для всех страниц. */
(() => {
  const logo = 'https://i.ibb.co/fd99r06X/TIK-logo-transparent.png';
  const isHome = /(?:^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/');
  const header = document.querySelector('header.header');
  const topLineMarkup = '<div class="topline"><div class="wrap"><a class="vk-topline-link" href="https://vk.ru/tikmarket" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.8 17.4h1.4s.4-.1.6-.3c.2-.2.2-.6.2-.6s0-1.8.8-2.1c.8-.2 1.9 1.7 3 2.5.8.6 1.4.5 1.4.5l2.8-.1s1.5-.1.8-1.3c-.1-.1-.5-.9-2.5-2.7-2.1-1.9-1.8-1.6.7-4.9 1.5-2 2.1-3.2 1.9-3.7-.2-.4-1.1-.3-1.1-.3l-3.1.1s-.2 0-.4.1c-.2.1-.3.3-.3.3s-.5 1.4-1.2 2.6c-1.5 2.5-2.1 2.6-2.4 2.5-.6-.4-.4-1.5-.4-2.3 0-2.5.4-3.5-.7-3.8-.4-.1-.7-.2-1.8-.2-1.4 0-2.6 0-3.3.3-.5.2-.8.6-.6.6.3 0 1 .2 1.3.6.5.7.5 2.2.5 2.2s.3 3-.6 3.4c-.6.3-1.4-.3-2.5-2.5-.6-1.2-1.1-2.5-1.1-2.5s-.1-.2-.3-.4c-.2-.2-.5-.3-.5-.3l-3 .1s-.5 0-.7.2c-.2.2 0 .5 0 .5s2.4 5.8 5.1 8.7c2.5 2.7 5.4 2.5 5.4 2.5Z"/></svg><span>Подписывайся на нашу группу ВКонтакте</span></a></div></div>';
  const existingTopLine = document.querySelector('.topline');
  if (existingTopLine) existingTopLine.outerHTML = topLineMarkup;
  else if (header) header.insertAdjacentHTML('beforebegin', topLineMarkup);
  const catalogGroups = [["🛍️","Все товары",[]],["✨","Новинки",[]],["🏷️","Шок цена и распродажа",[]],["🌼","Декоративные искусственные цветы и зелень",[]],["🎆","Фейерверки и пиротехника",["Батареи салютов калибр 1.2","Батареи салютов калибр 1","Батареи салютов калибр 0.8","Петарды, хлопушки, бенгальские огни","Цветной дым, тортовые свечи"]],["🌸","Парфюм и лосьоны",[]],["🧴","Корейская и азиатская косметика",["Уход за руками и ногами","Макияж","Уход за лицом","Уход за волосами","Уход за телом","Уход за полостью рта","Уход за губами","Аксессуары для ухода"]],["🧼","Бытовая химия, уход и гигиена",["Уход за волосами","Чистящие средства","Средства для стирки и ухода за бельём","Уход и гигиена","Средства для ванн и душа"]],["🧸","Игрушки",["Конструкторы и роботы","Мягкие игрушки","Развивающие игры","Интерактивные игрушки","Творчество и развитие","Антистресс-игрушки и слаймы","Прочие игрушки"]],["🌿","Аюрведа и товары для здоровья",["Мази из Китая","Иммунитет","Для мужчин и женщин","Лечебные пластыри"]],["📦","Товары из Китая",["Красота и здоровье","Товары для дома","Одежда и аксессуары","1000 мелочей"]],["🏃","Спорт и отдых",["Отдых и путешествия","Всё для плавания","Бутылки и шейкеры","Массажёры и тренажёры"]],["🧹","Хозтовары",["Уход за одеждой и обувью","Товары для уборки","Товары для кухни","Товары для дома","Товары для ванной","Бытовые товары, весы и сумки"]],["🎁","Подарки и товары для праздника",["Украшения для праздника, шарики и свечи","Шкатулки, копилки и подарки","Часы и будильники","Приколы и розыгрыши","Зажигалки и пепельницы"]],["🌱","Дача и сад",["Инвентарь","Полив и шланги","Защита от насекомых и вредителей","Удобрения и препараты для растений","Инструменты для ремонта"]],["⚡","Бытовая техника",["Техника для здоровья и красоты","Техника для уборки","Климатическая техника, вентиляторы и увлажнители"]],["🍽️","Посуда",["Кухонные ножи и аксессуары","Столовая посуда и сервировка","Хранение продуктов и консервирование","Термосы и чайники","Посуда и формы для приготовления","Аксессуары для кухни и кухонные весы"]],["✏️","Канцтовары",["Товары для творчества","Товары для школы и офиса"]],["🔌","Электротехника и мобильные аксессуары",["Освещение, светильники и ночники","Аксессуары для телефона и компьютера","Электронные устройства","Портативная акустика, колонки и микрофоны","Флеш-накопители","Зарядные устройства, переходники и батарейки"]],["🐾","Товары для животных",["Одежда для животных","Амуниция и уход"]],["🚗","Авто",["Автоэлектроника и видеорегистраторы","Аксессуары для салона и кузова","Уход за автомобилем"]],["🚿","Сантехника и смесители",[]],["🛏️","Домашний текстиль",["Текстиль для сна, одеяла и подушки","Постельное бельё"]],["👜","Галантерея",["Зеркала и зонты","Визаж, маникюр и педикюр","Сумки, косметички и органайзеры","Товары для обуви"]],["🎄","Новый год",["Электрогирлянды","Ёлочные украшения и панно","Мишура, венки и маски","Искусственные ёлки","Календари, магниты и упаковка"]],["👕","Одежда и обувь",["Обувь","Одежда"]],["🔋","Электронные устройства и жидкости",[]],["🧩","3D-стикеры из эпоксидной смолы",[]],["💍","Популярная бижутерия",["Браслеты","Колье","Цепочки и чокеры","Серьги и кольца"]],["🧢","Шапки, бейсболки, кепки и панамы",["Бейсболки","Панамы","Шапки и снуды","Женские шапки","Детские шапки","Универсальные шапки"]],["🕶️","Солнцезащитные очки",["Детские очки","Очки для взрослых"]],["🌿","Оригинальная продукция Greenway",[]]];
  const iconSvg = (label) => {
    const t = String(label).toLowerCase();
    let paths = '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5"/>';
    if (/все товары|товары/.test(t)) paths = '<path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/>';
    if (/новинк|новый год|праздник|подар|салют|петард|дым|свеч|ёлоч|гирлянд|фейерверк/.test(t)) paths = '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8"/><circle cx="12" cy="12" r="4"/>';
    if (/распрод|цена|скид|стоим/.test(t)) paths = '<path d="M20 13 11 22 2 13V4h9l9 9Z"/><circle cx="7" cy="8" r="1"/>';
    if (/космет|парфюм|лосьон|макияж|уход|гигиен|красот|волос|лиц|губ|ванн|душ|мази|здоров|иммунитет|пластыр/.test(t)) paths = '<path d="M9 3h6M10 3v5l-4 3v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8l-4-3V3"/><path d="M7 14h10"/>';
    if (/игруш|конструктор|робот|развива|слайм|творчеств|стикер/.test(t)) paths = '<path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><rect x="3" y="8" width="18" height="13" rx="3"/><path d="M8 13h.01M16 13h.01M9 17h6"/>';
    if (/китай|галантер|мелоч|хозтовар|уборк|хранен|сумк|органайзер|зеркал|зонт/.test(t)) paths = '<path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>';
    if (/спорт|отдых|путеше|плаван|бутыл|шейкер|массаж|тренаж|здоров/.test(t)) paths = '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16.5 9"/>';
    if (/сад|дач|полив|растен|удобрен|насеком|инвентар|ремонт|инструмент/.test(t)) paths = '<path d="M12 21V11"/><path d="M12 14C4 14 3 8 4 4c5 0 8 2 8 8"/><path d="M12 17c0-5 3-8 8-8 1 5-2 8-8 8Z"/>';
    if (/техник|электро|мобиль|телефон|компьютер|освещ|светиль|акустик|колонк|микрофон|флеш|заряд|батаре|устройств|жидкост/.test(t)) paths = '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M10 6h4M11 18h2"/>';
    if (/посуда|кухн|нож|столов|сервиров|термос|чайник|приготов|весы|консерв/.test(t)) paths = '<path d="M3 11h18M5 11v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/><path d="M8 11V5m8 6V5"/>';
    if (/канц|школ|офис|календар|книг/.test(t)) paths = '<path d="M5 3h14v18H5z"/><path d="M8 7h8M8 11h8M8 15h5"/>';
    if (/живот|питом|амуниц|собак/.test(t)) paths = '<path d="M5 10a2 2 0 1 1 4 0v2h6v-2a2 2 0 1 1 4 0v4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-4Z"/><path d="M10 15h.01M14 15h.01"/>';
    if (/авто|автомоб|салон|кузов|видеорег/.test(t)) paths = '<path d="m5 11 2-5h10l2 5"/><path d="M3 11h18v7H3z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>';
    if (/сантех|смесител|вода|полив|шланг/.test(t)) paths = '<path d="M7 4v5a5 5 0 0 0 10 0V7"/><path d="M4 4h6M14 4h6M12 14v7"/><path d="M10 19h4"/>';
    if (/текстил|сон|одеял|подуш|постель|одежд|обув|шапк|кепк|панам|бейсболк/.test(t)) paths = '<path d="M4 10 12 4l8 6v10H4V10Z"/><path d="M9 20v-6h6v6"/>';
    if (/бижут|браслет|колье|цепоч|серьг|кольц|очки|панам|шапк/.test(t)) paths = '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>';
    if (/greenway/.test(t)) paths = '<path d="M20 4C9 4 4 8 4 15a5 5 0 0 0 5 5c7 0 11-7 11-16Z"/><path d="M4 20 14 10"/>';
    if (/еда|корм/.test(t)) paths = '<path d="M4 12h16a8 8 0 0 1-16 0Z"/><path d="M12 4v4m-4-2 2 2m6-2-2 2"/>';
    const seed = Array.from(String(label)).reduce((n,ch)=>((n*31)+ch.charCodeAt(0))>>>0,7);
    const accents = ['<circle cx="18" cy="6" r="1.3"/>','<path d="M17 4v3m-1.5-1.5h3"/>','<path d="M17 17h3m-1.5-1.5v3"/>','<circle cx="6" cy="18" r="1.2"/>','<path d="m17 7 2 2-2 2"/>','<path d="M5 5h2M6 4v2"/>','<path d="m16 18 2 2 2-2"/>','<circle cx="18" cy="18" r="1.2"/>'];
    return '<svg class="catalog-line-icon" data-icon-key="'+seed+'" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">'+paths+accents[seed%accents.length]+'</svg>';
  };
  const catalogMenu = '<div class="catalog-menu" id="tikCatalogMenu" hidden><div class="catalog-menu-head"><strong>Каталог товаров</strong><span>Разделы поставщика</span></div><div class="catalog-menu-grid">' + catalogGroups.map(([oldIcon,name,subs],i) => '<section class="catalog-group" data-catalog-group="'+i+'">' + (subs.length ? '<button class="catalog-category catalog-category-toggle" type="button" aria-expanded="false" aria-controls="catalogSubs'+i+'"><span class="catalog-icon">'+iconSvg(name)+'</span><span class="catalog-category-name">'+name+'</span><svg class="catalog-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></button><div class="catalog-sub-list" id="catalogSubs'+i+'" hidden>'+subs.map(sub => '<a href="index.html#catalog" class="catalog-sub-link">'+iconSvg(sub)+'<span>'+sub+'</span></a>').join('')+'</div>' : '<a class="catalog-category" href="index.html#catalog"><span class="catalog-icon">'+iconSvg(name)+'</span><span>'+name+'</span></a>')+'</section>').join('')+'</div></div>'
  if (header) {
    if (isHome) {
      header.innerHTML = '<div class="wrap headmain">' +
        '<a class="brand" href="index.html" aria-label="ТИК — главная"><img class="brandmark" src="' + logo + '" alt="ТИК" width="42" height="42"></a>' +
        '<nav class="nav" aria-label="Основная навигация"><button class="catalog-trigger" type="button" aria-expanded="false" aria-controls="tikCatalogMenu" data-nav="catalog">Каталог</button><a href="#new">Новинки</a><a href="#special">Спецпредложения</a><a href="delivery.html">Доставка</a><a href="about.html" data-nav="about">О магазине</a></nav>' +
        '<label class="search"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 4 4"/></svg><input id="searchInput" placeholder="Поиск товаров" aria-label="Поиск товаров"></label>' +
        '<div class="actions"><button class="iconbtn" id="favOpen" aria-label="Избранное" title="Избранное"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.3 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/></svg><span class="count" id="favCount">0</span></button>' +
        '<button class="iconbtn" id="cartOpen" aria-label="Корзина" title="Корзина"><svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3h2l2.2 12.2a2 2 0 0 0 2 1.7h8.9a2 2 0 0 0 1.9-1.5L22 8H6"/><circle cx="10" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg><span class="count" id="cartCount">0</span></button><button class="iconbtn account" id="accountBtn">Войти</button></div></div>';
    } else {
      header.innerHTML = '<div class="wrap headmain"><a class="brand" href="index.html" aria-label="ТИК — главная"><img class="brandmark" src="' + logo + '" alt="ТИК" width="42" height="42"></a>' +
        '<nav class="nav" aria-label="Основная навигация"><a href="index.html">Главная</a><button class="catalog-trigger" type="button" aria-expanded="false" aria-controls="tikCatalogMenu" data-nav="catalog">Каталог</button><a href="index.html#new">Новинки</a><a href="delivery.html">Доставка</a><a href="about.html" data-nav="about">О магазине</a></nav></div>';
    }
    header.insertAdjacentHTML('beforeend', catalogMenu);
  }
  document.addEventListener('click', event => {
    const categoryToggle = event.target.closest('.catalog-category-toggle');
    if (categoryToggle) {
      const group = categoryToggle.closest('.catalog-group');
      const subList = group && group.querySelector('.catalog-sub-list');
      const willOpen = subList && subList.hidden;
      if (subList) subList.hidden = !willOpen;
      categoryToggle.setAttribute('aria-expanded', String(Boolean(willOpen)));
      group && group.classList.toggle('is-expanded', Boolean(willOpen));
      return;
    }
    const bottomCatalog = event.target.closest('.mobile-nav button');
    const isBottomCatalog = bottomCatalog && bottomCatalog.textContent.trim().includes('Каталог');
    const trigger = event.target.closest('.catalog-trigger') || (isBottomCatalog ? bottomCatalog : null);
    const menu = document.getElementById('tikCatalogMenu');
    if (trigger && menu) {
      if (isBottomCatalog) event.preventDefault();
      const opening = menu.hidden;
      menu.hidden = !opening;
      document.querySelectorAll('.catalog-trigger').forEach(button => button.setAttribute('aria-expanded', String(opening)));
      if (isBottomCatalog) bottomCatalog.classList.toggle('active', opening);
      return;
    }
    if (menu && !event.target.closest('#tikCatalogMenu')) {
      menu.hidden = true;
      document.querySelectorAll('.catalog-trigger').forEach(button => button.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.catalog-category-toggle').forEach(button => button.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.catalog-group').forEach(group => group.classList.remove('is-expanded'));
      document.querySelectorAll('.catalog-sub-list').forEach(list => list.hidden = true);
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.mobile-nav');
    if (!nav) return;
    const current = location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('button').forEach(button => {
      const label = button.textContent.trim();
      const href = label === 'Главная' ? 'index.html' : label === 'Каталог' ? '#catalog' : '';
      if ((href === 'index.html' && (current === 'index.html' || current === '')) || (label === 'Каталог' && location.hash === '#catalog')) button.classList.add('active');
      button.addEventListener('click', () => {
        if (label !== 'Каталог') {
          nav.querySelectorAll('button').forEach(item => item.classList.remove('active'));
          button.classList.add('active');
        } else {
          nav.querySelectorAll('button').forEach(item => item.classList.toggle('active', item === button));
        }
      });
    });
  });
  const renderFooter = () => {
    const footer = document.querySelector('footer.footer');
    if (!footer) return;
    footer.innerHTML = '<div class="wrap"><div class="footer-top">' +
      '<div><h4>ПОКУПАТЕЛЯМ</h4><div class="footer-links"><a href="delivery.html">Доставка</a><a href="payment.html">Оплата</a><a href="returns.html">Возврат и обмен</a><a href="faq.html">Частые вопросы</a></div></div>' +
      '<div><h4>ИНФОРМАЦИЯ</h4><div class="footer-links"><a href="about.html">О магазине</a><a href="contacts.html">Контакты</a><a href="cooperation.html">Сотрудничество</a><a href="privacy.html">Политика конфиденциальности</a></div></div>' +
      '<div><h4>ТИК</h4><div class="footer-links"><a href="index.html#catalog">Каталог</a><a href="index.html#new">Новинки</a><a href="index.html#special">Спецпредложения</a><a href="index.html">На главную</a></div></div>' +
      '</div><div class="footer-bottom"><span>ТИК ©2026 Все права защищены</span></div></div>';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderFooter);
  else renderFooter();
})();