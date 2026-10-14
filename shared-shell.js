/* Единая шапка и подвал информационных страниц ТИК.
   Чтобы изменить навигацию или подвал, редактируйте этот файл один раз. */
(() => {
  const logo = 'https://i.ibb.co/fd99r06X/TIK-logo-transparent.png';
  const header = document.querySelector('header.header');
  if (header) {
    header.innerHTML = '<div class="wrap head">' +
      '<a class="brand" href="index.html" aria-label="ТИК — главная"><img src="' + logo + '" alt="ТИК"></a>' +
      '<nav class="nav" aria-label="Основная навигация">' +
      '<a href="index.html">Главная</a><a href="about.html">О магазине</a><a href="delivery.html">Доставка</a><a href="payment.html">Оплата</a><a href="contacts.html">Контакты</a>' +
      '</nav></div>';
  }
  const footer = document.querySelector('footer.footer');
  if (footer) {
    footer.innerHTML = '<div class="wrap">' +
      '<nav class="links" aria-label="Информация">' +
      '<a href="about.html">О магазине</a><a href="delivery.html">Доставка</a><a href="payment.html">Оплата</a><a href="returns.html">Возврат и обмен</a><a href="faq.html">Частые вопросы</a><a href="contacts.html">Контакты</a><a href="cooperation.html">Сотрудничество</a><a href="privacy.html">Политика конфиденциальности</a>' +
      '</nav><div>ТИК ©2026 Все права защищены</div></div>';
  }
})();