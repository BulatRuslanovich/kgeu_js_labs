# kgeu_js_labs

> Надежда вернется позже, когда исчезнет js
>
> _— Эрих Мария Ремарк_

Учебные лабораторные и практические работы по JavaScript (КГЭУ). Репозиторий оформлен как монохранилище: шаблон витрины, автоматическая генерация конфигураций и сами задания.

## Архитектура репозитория

- `assignments/` — каталоги лабораторных (`lab_X`) и практик (`prac_Y`), внутри — задания `taskN.js` и опциональный `tasks.pdf`.
- `showcase/` — SPA на Vue 3 для просмотра кода и запуска решений.
- `showcase/scripts/generate-work-configs.mjs` — генератор конфигурации витрины, автоматически обходящий `assignments/`.
- `showcase/workConfigs.generated.js` — результирующий конфиг (машинная генерация, руками не править).
- `package.json` — точка входа npm-скриптов, ESLint/Prettier/Vite.
- `README.md` — рабочая инструкция и требования к задачам.

## Регламент разработки

```bash
npm install
npm run lint
npm run lint:fix
npm run format
npm run format:check
```

> Примечание: ESLint и Prettier игнорируют `showcase/workConfigs.generated.js`, `showcase/dist`, PDF и HTML внутри `assignments`.

## Showcase

Витрина построена на Vue 3 (Composition API) + Vite. Приложение запускается из каталога `showcase`, но все команды выполняем из корня репозитория.

### Быстрый старт

1. **Клонирование**
   ```bash
   git clone https://github.com/BulatRuslanovich/kgeu_js_labs.git
   cd kgeu_js_labs
   ```
2. **Node.js**
   - Windows (без Chocolatey):
     ```powershell
     Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
     choco install nodejs-lts -y
     ```
   - Linux/macOS:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```
3. **Генерация конфигурации**
   ```bash
   npm run generate:configs
   ```
   > Команда вызывается автоматически перед `npm run dev` и `npm run build`, но при необходимости конфиг можно собрать вручную.
4. **Dev-сервер**
   ```bash
   npm run dev
   # пример с кастомным портом/хостом:
   npm run dev -- --host --port 4000
   ```
5. **Доступ**
   Открыть `http://localhost:5173/` (порт зависит от параметров `vite dev`).
6. **Production-сборка**
   ```bash
   npm run build    # output -> showcase/dist
   npm run preview  # локальный просмотр production-сборки
   ```

## Требования к новым работам

- **Именование**: каталог `lab_X` или `prac_Y` (X/Y — номер, без ведущих нулей).
- **Задание**: файл `taskN.js`, где N — номер задания. В файле обязательно экспортируется `runTask` (синхронная или async-функция).
  ```js
  export function runTask() {
    // ...
  }
  ```
- **Описание**: первая строка может содержать `// INFO: ...`. Текст после маркера используется витриной как подпись задания.
  ```js
  // INFO: Сортирует массив пузырьком
  export function runTask() { ... }
  ```
- **Дополнительно**: файл `tasks.pdf` (опционально) — витрина отрисует ссылку «Открыть задания».
- **Обновление витрины**:
  1. Добавьте/измените файлы в `assignments/`.
  2. Выполните `npm run generate:configs` (или любую команду `npm run dev` / `npm run build`, которая сделает это автоматически).

Соблюдение этих правил обеспечивает корректное отображение работ и минимизирует ручные действия при обновлениях витрины.
