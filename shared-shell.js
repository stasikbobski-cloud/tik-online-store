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
    // Specific pictograms for common subcategories, chosen by meaning rather than decorative variations.
    if (/батареи салютов/.test(t)) paths = '<path d="M6 4h12v16H6z"/><path d="M9 8h6M9 12h6M9 16h3"/>';
    if (/петард|хлопуш|бенгальск/.test(t)) paths = '<path d="M7 20 17 4"/><path d="m14 4 4 2M5 17l4 2"/><path d="M17 3v-2m3 6 2-1"/>';
    if (/цветной дым|тортовые свеч/.test(t)) paths = '<path d="M12 21V9"/><path d="M8 9c-3-2 0-4 1-5m5 5c3-2 0-4-1-5m-5 1c-2-2 0-3 1-4"/>';
    if (/рук|ног/.test(t)) paths = '<path d="M8 12V5a1.5 1.5 0 0 1 3 0v5-6a1.5 1.5 0 0 1 3 0v6-4a1.5 1.5 0 0 1 3 0v7l-2 6H9l-4-5a1.8 1.8 0 0 1 3-2Z"/>';
    if (/макияж|визаж/.test(t)) paths = '<path d="m4 20 9-9 3 3-9 9H4z"/><path d="m12 12 3-3 3 3-3 3M16 4l4 4"/>';
    if (/лиц/.test(t)) paths = '<path d="M12 3a7 7 0 0 0-7 7v3a7 7 0 0 0 14 0v-3a7 7 0 0 0-7-7Z"/><path d="M9 11h.01M15 11h.01M9 15q3 3 6 0"/>';
    if (/волос/.test(t)) paths = '<path d="M6 21c-2-4-2-9 0-13a6 6 0 0 1 12 0c2 4 2 9 0 13"/><path d="M9 8c1 2 1 5 0 7m6-7c-1 2-1 5 0 7"/>';
    if (/тел[а-я]* и ног|тела/.test(t)) paths = '<path d="M8 4a4 4 0 0 0 8 0"/><path d="M8 4 5 8l3 4-2 8h12l-2-8 3-4-3-4"/>';
    if (/полост|зуб|стомат/.test(t)) paths = '<path d="M7 4C3 4 4 10 6 15c1 4 3 5 4 2l2-5 2 5c1 3 3 2 4-2 2-5 3-11-1-11-2 0-3 2-5 2S9 4 7 4Z"/>';
    if (/губ/.test(t)) paths = '<path d="M3 12s4-5 9-5 9 5 9 5-4 5-9 5-9-5-9-5Z"/><path d="M3 12q9 3 18 0"/>';
    if (/аксессуары для ухода/.test(t)) paths = '<rect x="4" y="4" width="6" height="16" rx="2"/><rect x="14" y="7" width="6" height="13" rx="2"/><path d="M6 2h2m8 3h2"/>';
    if (/чистящ/.test(t)) paths = '<path d="M8 4h8l1 5H7l1-5Z"/><path d="M9 9v11h6V9M11 13h2"/>';
    if (/стирк|бель[яе]/.test(t)) paths = '<rect x="4" y="3" width="16" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><circle cx="8" cy="7" r=".7"/><circle cx="11" cy="7" r=".7"/>';
    if (/ванн|душ/.test(t)) paths = '<path d="M4 11h16v2a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7v-2Z"/><path d="M7 11V6a3 3 0 0 1 6 0"/><path d="M8 15v1m4-1v1m4-1v1"/>';
    if (/конструктор/.test(t)) paths = '<path d="M3 7h7v6H3zM14 3h7v7h-7zM12 15h9v6h-9z"/><path d="M6 7V4h3m8 6v3m-8-3h3v5"/>';
    if (/мягк.*игруш/.test(t)) paths = '<circle cx="12" cy="12" r="6"/><circle cx="5" cy="6" r="2.5"/><circle cx="19" cy="6" r="2.5"/><path d="M9 13h.01M15 13h.01M10 16q2 2 4 0"/>';
    if (/развивающ/.test(t)) paths = '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h3v3H7zM14 8h3v3h-3zM7 14h10"/>';
    if (/интерактив/.test(t)) paths = '<rect x="4" y="3" width="16" height="18" rx="3"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M8 15h8"/>';
    if (/слайм|антистресс/.test(t)) paths = '<path d="M12 3c-3 5-7 8-7 12a7 7 0 0 0 14 0c0-4-4-7-7-12Z"/><path d="M9 15q2 3 5 0"/>';
    if (/творчеств/.test(t)) paths = '<path d="m4 17 9-9 4 4-9 9H4v-4Z"/><path d="m11 10 4 4M16 4l4 4"/>';
    if (/путеше|отдых/.test(t)) paths = '<path d="M3 12 21 4l-7 17-3-7-8-2Z"/><path d="m11 14 5-5"/>';
    if (/плаван/.test(t)) paths = '<path d="M3 16q3-3 6 0t6 0 6 0"/><path d="M3 20q3-3 6 0t6 0 6 0"/><circle cx="12" cy="6" r="3"/>';
    if (/бутыл|шейкер/.test(t)) paths = '<path d="M9 3h6v4l2 2v11H7V9l2-2V3Z"/><path d="M7 12h10"/>';
    if (/массаж/.test(t)) paths = '<path d="M4 8q4-6 8 0t8 0M4 13q4-6 8 0t8 0M4 18q4-6 8 0t8 0"/>';
    if (/уборк|чистящ/.test(t)) paths = '<path d="m5 20 5-12 5 2-5 12H5Z"/><path d="m10 8 2-5 5 2-2 5M16 3l3-1"/>';
    if (/кухн/.test(t)) paths = '<path d="M4 11h16l-2 9H6l-2-9Z"/><path d="M8 11V5m4 6V3m4 8V5"/>';
    if (/ванной/.test(t)) paths = '<path d="M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Z"/><path d="M7 12V6a3 3 0 0 1 6 0"/>';
    if (/весы/.test(t)) paths = '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9a4 4 0 0 1 8 0Z"/>';
    if (/шарик|украшения для праздника/.test(t)) paths = '<circle cx="12" cy="10" r="7"/><path d="m10 17 2 4 2-4"/>';
    if (/шкатул|копилк/.test(t)) paths = '<path d="M4 8h16v12H4z"/><path d="M8 8V5h8v3M10 12h4"/>';
    if (/часы|будильник|календар/.test(t)) paths = '<circle cx="12" cy="13" r="8"/><path d="M12 8v5l3 2M7 3 4 6m13-3 3 3"/>';
    if (/инвентар/.test(t)) paths = '<path d="M6 21V7m0 0 4-4m-4 4L2 3M15 21V5m0 0 4-2m-4 2-3-2"/>';
    if (/полив|шланг/.test(t)) paths = '<path d="M4 5h6v6H4zM10 8h4a4 4 0 0 1 4 4v2"/><path d="M18 14v5m-3-3 3 3 3-3"/>';
    if (/насеком|вредител/.test(t)) paths = '<ellipse cx="12" cy="13" rx="4" ry="6"/><path d="M8 10 4 7m12 3 4-3M8 15l-4 2m12-2 4 2M12 7V4"/>';
    if (/удобрен|растен/.test(t)) paths = '<path d="M12 21v-9"/><path d="M12 14C4 14 4 7 4 4c6 0 8 3 8 8M12 17c0-5 4-8 8-8 0 5-3 8-8 8Z"/>';
    if (/ремонт|инструмент/.test(t)) paths = '<path d="m14 7 3-3a5 5 0 0 1-6 6L5 16a2 2 0 0 0 3 3l6-6a5 5 0 0 0 6-6l-3 3-3-3Z"/>';
    if (/вентилятор|климат/.test(t)) paths = '<circle cx="12" cy="12" r="2"/><path d="M12 10c-5-9-9 1-2 2m4 0c9-5-1-9-2-2m0 4c5 9 9-1 2-2m-4 0c-9 5 1 9 2 2"/>';
    if (/ножи/.test(t)) paths = '<path d="M5 3c5 3 7 7 7 11l-3 3C5 12 4 7 5 3Z"/><path d="m9 17 8 4 2-2-7-7"/>';
    if (/сервиров|столовая посуда/.test(t)) paths = '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="4"/><path d="M3 4v8m-2-4h4m16-4v16"/>';
    if (/консерв|хранение продуктов/.test(t)) paths = '<path d="M5 6h14v14H5z"/><path d="M5 9h14M9 3h6v3"/>';
    if (/термос|чайник/.test(t)) paths = '<path d="M7 7h10v13H7zM9 3h6v4M17 10h3v5h-3"/>';
    if (/формы для приготовления/.test(t)) paths = '<rect x="3" y="5" width="18" height="15" rx="3"/><circle cx="8" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>';
    if (/творчеств/.test(t)) paths = '<path d="m4 17 9-9 4 4-9 9H4v-4Z"/><path d="m11 10 4 4M16 4l4 4"/>';
    if (/школ|офис/.test(t)) paths = '<path d="M4 8 12 4l8 4-8 4-8-4Z"/><path d="M7 11v5q5 4 10 0v-5M20 8v7"/>';
    if (/освещ|светиль|ночник/.test(t)) paths = '<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 4h-6c0-2 0-3-1-4Z"/>';
    if (/телефон|компьютер/.test(t)) paths = '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 5h4M11 19h2"/>';
    if (/акустик|колонк|микрофон/.test(t)) paths = '<rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3m-4 0h8"/>';
    if (/флеш/.test(t)) paths = '<path d="M7 3h8l4 4v14H5V5l2-2Z"/><path d="M9 3v5h6V3M9 13h6M9 17h6"/>';
    if (/заряд|переходник|батарейк/.test(t)) paths = '<rect x="4" y="7" width="16" height="13" rx="2"/><path d="M9 7V4m6 3V4m-3 6-2 4h3l-2 3"/>';
    if (/одежда для животных/.test(t)) paths = '<path d="m7 5 5-2 5 2 4 5-4 3v8H7v-8l-4-3 4-5Z"/>';
    if (/амуниц|уход/.test(t)) paths = '<circle cx="12" cy="12" r="8"/><path d="M8 12h8m-4-4v8"/>';
    if (/видеорег|автоэлектрон/.test(t)) paths = '<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M7 6V4h10v2"/>';
    if (/салона|кузова/.test(t)) paths = '<path d="m5 11 2-5h10l2 5"/><path d="M3 11h18v7H3z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>';
    if (/автомобил/.test(t)) paths = '<path d="M4 10h16l-2-5H6l-2 5Z"/><path d="M3 10h18v8H3z"/><circle cx="7" cy="18" r="1.5"/><circle cx="17" cy="18" r="1.5"/>';
    if (/зеркал/.test(t)) paths = '<rect x="6" y="2" width="12" height="16" rx="6"/><path d="M12 18v4m-4 0h8"/>';
    if (/сумк|косметич|органайзер/.test(t)) paths = '<path d="M4 8h16l-1 13H5L4 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>';
    if (/обув/.test(t)) paths = '<path d="M3 15c4 0 6-3 7-7l3 5 7 2a2 2 0 0 1 1 4H4a2 2 0 0 1-1-4Z"/>';
    if (/гирлянд/.test(t)) paths = '<path d="M3 6q9 8 18 0"/><path d="M6 8v4m6-1v4m6-5v4"/><circle cx="6" cy="14" r="1.5"/><circle cx="12" cy="16" r="1.5"/><circle cx="18" cy="14" r="1.5"/>';
    if (/ёлоч|искусственные ёлки/.test(t)) paths = '<path d="m12 2 4 6h-3l5 6h-4l5 6H5l5-6H6l5-6H8l4-6Z"/><path d="M12 20v2"/>';
    if (/бижут|браслет|колье|цепоч|серьг|кольц/.test(t)) paths = '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/>';
    if (/очки/.test(t)) paths = '<path d="M2 9h4l2 7h3l2-7h5l2 7h2"/><path d="M8 13h6"/>';
    if (/бейсболк|кепк/.test(t)) paths = '<path d="M4 14a8 8 0 0 1 16 0v2H4v-2Z"/><path d="M4 16h16l2 3H9"/>';
    if (/панам|шапк|снуд/.test(t)) paths = '<path d="M4 13a8 8 0 0 1 16 0v3H4v-3Z"/><path d="M2 16h20l-2 4H4l-2-4Z"/>';
    if (/детские очки|для взрослых/.test(t)) paths = '<circle cx="7" cy="12" r="4"/><circle cx="17" cy="12" r="4"/><path d="M11 12h2M3 11l-1-2m19 2 1-2"/>';
    if (/greenway/.test(t)) paths = '<path d="M20 4C9 4 4 8 4 15a5 5 0 0 0 5 5c7 0 11-7 11-16Z"/><path d="M4 20 14 10"/>';
    return '<svg class="catalog-line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">'+paths+'</svg>';
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
    document.body.insertAdjacentHTML('beforeend', catalogMenu);
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
      if (opening) {
        const header = document.querySelector('header.header');
        // Use the header's real on-screen bottom; the topline scrolls away and must not add a blank gap.
        const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : 0;
        menu.style.setProperty('--catalog-top', Math.max(0, headerBottom) + 'px');
        // Match the menu bottom to the actual top edge of the fixed mobile navigation.
        const mobileNav = document.querySelector('.mobile-nav');
        const navBottomGap = mobileNav ? Math.max(0, Math.round(window.innerHeight - mobileNav.getBoundingClientRect().top)) : 76;
        menu.style.setProperty('--mobile-nav-bottom-gap', navBottomGap + 'px');
      }
      document.body.classList.toggle('tik-catalog-open', opening);
      document.querySelectorAll('.catalog-trigger').forEach(button => button.setAttribute('aria-expanded', String(opening)));
      if (isBottomCatalog) bottomCatalog.classList.toggle('active', opening);
      return;
    }
    if (menu && !event.target.closest('#tikCatalogMenu')) {
      menu.hidden = true;
      menu.style.removeProperty('--catalog-top');
      document.body.classList.remove('tik-catalog-open');
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