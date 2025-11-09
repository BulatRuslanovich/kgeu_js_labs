# kgeu_js_labs

> Надежда вернется позже, когда исчезнет js
>
> _— Эрих Мария Ремарк_

Учебные лабораторные и практические работы по JavaScript в КГЭУ.

## Структура

- `assignments/` — все лабораторные и практические работы, сгруппированные по папкам `lab_*` и `prac_*`.
- `showcase/` — витрина для просмотра и запуска решений (HTML/CSS/JS + служебные скрипты).
- `README.md` — общий обзор репозитория и инструкции.

## Showcase

### 1. Клонируй репозиторий

```bash
git clone https://github.com/BulatRuslanovich/kgeu_js_labs.git
cd kgeu_js_labs
```

Для Windows с PowerShell:

```powershell
git clone https://github.com/BulatRuslanovich/kgeu_js_labs.git
cd kgeu_js_labs
```

### 2. Установи Node.js и утилиту `serve`

- **Windows (если нет Chocolatey):** открой PowerShell **от имени администратора** и выполни

  ```powershell
  Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
  ```

  Затем поставь Node.js LTS и `serve`:

  ```powershell
  choco install nodejs-lts -y
  npm.cmd install --global serve
  ```

- **Linux / macOS:** поставь Node.js и `serve` любым удобным способом (пример для Debian/Ubuntu):

  ```bash
  sudo apt update
  sudo apt install nodejs npm
  sudo npm install --global serve
  ```

### 3. Сгенерируй конфиги работ

```bash
node showcase/scripts/generate-work-configs.mjs
```

PowerShell:

```powershell
node.exe .\showcase\scripts\generate-work-configs.mjs
```

После добавления новых заданий в `assignments` повторяй генерацию.

### 4. Запусти статический сервер

```bash
npx serve .
```

PowerShell:

```powershell
npx.cmd serve .
```

Если порт занят, добавь `-l 4000` (или любой другой свободный).

### 5. Открой витрину

Перейди в браузере по адресу `http://localhost:3000/showcase/index.html` (порт может отличаться, если указал другой на предыдущем шаге) и выбери нужную работу.
