import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// Корневая директория проекта.
const projectRoot = __dirname;
// Точка входа витрины. Vite будет стартовать из каталога showcase.
const showcaseRoot = path.resolve(projectRoot, "showcase");
// Папка с заданиями; добавляем в fs.allow, чтобы Vite отдавал файлы.
const assignmentsDir = path.resolve(projectRoot, "assignments");

export default defineConfig({
  plugins: [vue()],
  root: showcaseRoot,
  base: "./",
  resolve: {
    alias: {
      // Укороченный импорт для исходников витрины: "@/components/TaskCard.vue"
      "@": path.resolve(showcaseRoot, "src"),
      // Псевдоним на assignments. Используется для чтения исходных задач.
      assignments: assignmentsDir,
    },
  },
  server: {
    open: "/index.html",
    fs: {
      // В dev-режиме Vite разрешено читать showcase и assignments.
      allow: [projectRoot, assignmentsDir],
    },
  },
  preview: {
    open: "/index.html",
  },
  build: {
    // Папка назначения production-сборки.
    outDir: path.resolve(showcaseRoot, "dist"),
    emptyOutDir: true,
  },
});
