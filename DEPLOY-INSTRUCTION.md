# Инструкция: как сделать, чтобы изменения сами попадали на сайт

## Что происходит, когда ты правишь код и что такое деплой

1. **Код проекта** лежит в репозитории GitHub: `stasikbobski-cloud/tik-online-store`
2. **Cloudflare Pages** следит за этим репозиторием. Как только в ветке `main` появляются новые файлы — он сам строит новый сайт и публикует его на `tik-online-store.pages.dev`.
3. Значит, всё, что нужно делать — **загружать (пушить) изменения в ветку `main` на GitHub**. Тогда сайт обновится автоматически, за 1–3 минуты.

---

## Шаг 1. Проверь, что проект в Cloudflare подключён к GitHub (делаю 1 раз)

1. Открой: https://dash.cloudflare.com/d0b43055921d35d25decd311f36338bf/workers-and-pages
2. Нажми на свой проект **tik-online-store**.
3. Вверху выбери вкладку **"Deployments"** (Развертывания).
4. Посмотри, что написано справа в блоке **"Source"** (Источник):
   - Если там указано **GitHub** и `stasikbobski-cloud/tik-online-store`, ветка `main` — всё настроено, переходи к Шагу 2 ✅
   - Если там "Direct Upload" — надо один раз подключить GitHub:
     1. В проекте нажми **"Settings"** → **"Build & deployment"** → **"Source"** → **"Connect"**.
     2. Выбери **GitHub**, разреши доступ Cloudflare (кнопка "Install" / "Authorize").
     3. Выбери репозиторий `stasikbobski-cloud/tik-online-store`.
     4. **Production branch: `main`**.
     5. Framework preset: none; Build command: пусто; Build output directory: пусто (это обычный сайт из html-файлов).
     6. Сохрани.

---

## Шаг 2. Загрузи мои последние изменения на GitHub

Самый простой способ без всяких программ — прямо через сайт GitHub:

### Вариант А — если GitHub показывает кнопку "Merge pull request" или "Compare & pull request"
Нажми её → "Create pull request" → "Merge pull request" → "Confirm merge". Готово.

### Вариант Б — вручную через кнопки GitHub
1. Открой: https://github.com/stasikbobski-cloud/tik-online-store
2. Убедись, что сверху выбрана ветка **main**.
3. Для каждого изменённого файла:
   - Нажми на файл (например `index.html`)
   - Нажми иконку 📄 **"Copy raw content"** (или открой файл и скопируй весь текст)
   - Вернись, нажми **"Add file" → "Upload files"** и перетащи готовый файл, либо нажми ✏️ карандаш, вставь новый текст целиком и нажми **"Commit changes"**.
4. После коммита в main — зайди во вкладку **Deployments** в Cloudflare, там через минуту появится новая сборка.

---

## Шаг 3. На будущее — поставь GitKraken Desktop (бесплатно, на русском, просто)

Это программа с большими кнопками: **"Commit"**, **"Push"** — больше ничего не нужно.

1. Скачай: https://gitkraken.com/gitkraken-desktop → установи.
2. При первом запуске нажми **"Sign in with GitHub"** и разреши доступ.
3. В программе нажми **"Open repository"** и выбери папку проекта на компьютере.
4. Каждый раз после изменений:
   - слева сверху нажми **"Commit"** (можно написать "обновление сайта"),
   - затем большую кнопку **"Push"**.
5. Сайт обновится сам.

Аналог, если GitKraken не понравится: **GitHub Desktop** — https://desktop.github.com (там кнопки "Commit to main" и "Push origin").

---

## Быстрая проверка, что всё работает

После пуша:
1. https://github.com/stasikbobski-cloud/tik-online-store — последние изменения видны в ветке main.
2. https://dash.cloudflare.com/d0b43055921d35d25decd311f36338bf/workers-and-pages → tik-online-store → Deployments — статус "Current" / галочка.
3. Открой https://tik-online-store.pages.dev (если не видно новых изменений — нажми Ctrl+F5, чтобы сбросить кэш браузера).

## Частые проблемы

| Проблема | Решение |
|---|---|
| Изменил файлы, а сайт не обновился | Проверь, что сделал **Push**, и что изменения в ветке **main** (не в другой) |
| Cloudflare не видит репозиторий | Заново подключи GitHub в Settings → Source (Шаг 1) |
| Сайт старый, хотя всё запушено | Сбрось кэш: Ctrl+F5, или подожди 2–3 минуты |
