# Showcase

Витрина для просмотра и запуска решений по лабораторным и практическим работам.

## Быстрый старт

1. Сгенерируй список заданий (из корня репозитория или находясь в `showcase`):
   - `node showcase/scripts/generate-work-configs.mjs`
   - либо `cd showcase && node scripts/generate-work-configs.mjs`
2. Статически обслужи проект из корня репозитория: `npx serve .`
3. Открой `http://localhost:3000/showcase/index.html` и выбери нужную работу.

## Структура директории

- `index.html` — точка входа витрины.
- `styles.css` — оформление.
- `app.js` и `workRenderer.js` — основной код работы витрины.
- `workConfigs.generated.js` — сгенерированный список работ (не редактируй вручную).
- `scripts/generate-work-configs.mjs` — генерация `workConfigs.generated.js` на основе содержимого `assignments`.

## Добавление новых заданий

1. Создай папку внутри `assignments` по шаблону `lab_X` или `prac_Y`.
2. Добавь в неё `taskN.js` и, по желанию, `tasks.pdf`.
3. Запусти генератор (`node showcase/scripts/generate-work-configs.mjs`), чтобы обновить витрину.

