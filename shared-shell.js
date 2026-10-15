/* Общая шапка, каталог и подвал ТИК для всех страниц. */
(() => {
  const logo = 'https://i.ibb.co/fd99r06X/TIK-logo-transparent.png';
  const isHome = /(?:^|\/)index\.html$/.test(location.pathname) || location.pathname.endsWith('/');
  const header = document.querySelector('header.header');
  const catalogMenu = '<div class="catalog-menu" id="tikCatalogMenu" hidden>' +
    '<div class="catalog-menu-title">Категории товаров</div><div class="catalog-menu-grid">' +
    '<a href="index.html#catalog" data-category="Технологии"><b>Электроника</b><span>Телефоны и гаджеты</span></a>' +
    '<a href="index.html#catalog" data-category="Стиль"><b>Одежда и обувь</b><span>Одежда, обувь и сумки</span></a>' +
    '<a href="index.html#catalog" data-category="Дом"><b>Дом и уют</b><span>Посуда, хранение и декор</span></a>' +
    '<a href="index.html#catalog" data-category="Аксессуары"><b>Аксессуары</b><span>Часы и полезные мелочи</span></a>' +
    '<a href="index.html#catalog" data-category="Игрушки"><b>Игрушки</b><span>Игры и товары для детей</span></a>' +
    '<a href="index.html#catalog" data-category="Канцтовары"><b>Канцтовары</b><span>Для школы и офиса</span></a>' +
    '</div><div class="catalog-menu-subtitle">Подкатегории</div><div class="catalog-subcategories">' +
    '<a href="index.html#catalog" data-category="Технологии">Электроника</a><a href="index.html#catalog" data-category="Технологии">Гаджеты</a>' +
    '<a href="index.html#catalog" data-category="Стиль">Одежда</a><a href="index.html#catalog" data-category="Стиль">Обувь</a>' +
    '<a href="index.html#catalog" data-category="Дом">Посуда</a><a href="index.html#catalog" data-category="Дом">Декор</a>' +
    '<a href="index.html#catalog" data-category="Аксессуары">Аксессуары</a><a href="index.html#catalog" data-category="Игрушки">Игрушки</a>' +
    '<a href="index.html#catalog" data-category="Канцтовары">Канцтовары</a></div></div>';
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
    const trigger = event.target.closest('.catalog-trigger');
    const menu = document.getElementById('tikCatalogMenu');
    if (trigger && menu) {
      const opening = menu.hidden;
      menu.hidden = !opening;
      document.querySelectorAll('.catalog-trigger').forEach(button => button.setAttribute('aria-expanded', String(opening)));
      return;
    }
    if (menu && !event.target.closest('#tikCatalogMenu')) {
      menu.hidden = true;
      document.querySelectorAll('.catalog-trigger').forEach(button => button.setAttribute('aria-expanded', 'false'));
    }
  });
  const renderFooter = () => {
    const footer = document.querySelector('footer.footer');
    if (!footer) return;
    footer.innerHTML = '<div class="wrap"><div class="footer-top">' +
      '<div><h4>ПОКУПАТЕЛЯМ</h4><div class="footer-links"><a href="index.html#catalog">Каталог</a><a href="delivery.html">Доставка</a><a href="payment.html">Оплата</a><a href="returns.html">Возврат и обмен</a><a href="faq.html">Частые вопросы</a></div></div>' +
      '<div><h4>ИНФОРМАЦИЯ</h4><div class="footer-links"><a href="about.html">О магазине</a><a href="contacts.html">Контакты</a><a href="cooperation.html">Сотрудничество</a><a href="privacy.html">Политика конфиденциальности</a></div></div>' +
      '<div><h4>ТИК</h4><div class="footer-links"><a href="index.html#new">Новинки</a><a href="index.html#special">Спецпредложения</a><a href="index.html">На главную</a></div></div>' +
      '</div><div class="footer-bottom"><span>ТИК ©2026 Все права защищены</span></div></div>';
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderFooter);
  else renderFooter();
})();