# kgeu_js_labs

> Надежда вернется позже, когда исчезнет js
>
> _— Эрих Мария Ремарк_

Лабы по JavaScript в КГЭУ.

### Зависимости

Понадобится Node.js и утилита `serve`.

- **Arch / Manjaro**
  ```bash
  sudo pacman -S nodejs npm
  npm install --global serve
  ```
- **Ubuntu / Debian**
  ```bash
  sudo apt update
  sudo apt install nodejs npm
  sudo npm install --global serve
  ```
- **Fedora**
  ```bash
  sudo dnf install nodejs npm
  sudo npm install --global serve
  ```
- **Windows (Chocolatey)**
  ```powershell
  choco install nodejs-lts -y
  npm install --global serve
  ```

## Запуск

1. Собери конфиг работ:

   ```bash
   node scripts/generate-work-configs.mjs
   ```

   для Windows
   
    ```powershell
    node.exe .\scripts\generate-work-configs.mjs
    ```

2. Запусти статический сервер из корня проекта:

   ```bash
   npx serve .
   ```

    для Windows
   
    ```powershell
    npx.cmd serve .
    ```

3. Открой `http://localhost:3000/showcase/index.html` и выбери нужную работу.
