<script setup>
import { computed, onMounted, ref, watch } from "vue";
import TaskCard from "./components/TaskCard.vue";
import workConfigs from "../workConfigs.generated.js";

const LAST_WORK_KEY = "showcase:lastWorkId";
const THEME_KEY = "showcase:theme";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
};

function sortWorks(list) {
  const typeOrder = (id) =>
    id.startsWith("lab_") ? 0 : id.startsWith("prac_") ? 1 : 2;
  const getNumber = (id) => Number(id.match(/\d+/)?.[0] ?? 0);

  return [...list].sort((a, b) => {
    const typeDiff = typeOrder(a.id) - typeOrder(b.id);
    if (typeDiff !== 0) return typeDiff;

    const numDiff = getNumber(a.id) - getNumber(b.id);
    if (numDiff !== 0) return numDiff;

    return a.id.localeCompare(b.id);
  });
}

const works = computed(() => sortWorks(Object.values(workConfigs)));

const workMap = computed(() =>
  works.value.reduce((acc, work) => {
    acc[work.id] = work;
    return acc;
  }, {}),
);

const selectedWorkId = ref("");
const theme = ref(THEMES.DARK);

const selectedWork = computed(
  () => workMap.value[selectedWorkId.value] ?? null,
);
const tasks = computed(() => selectedWork.value?.tasks ?? []);
const hasTasks = computed(() => tasks.value.length > 0);

const isLightTheme = computed(() => theme.value === THEMES.LIGHT);
const themeButtonLabel = computed(() =>
  isLightTheme.value ? "Светлая тема" : "Тёмная тема",
);
const themeButtonDescription = computed(
  () =>
    `Переключить тему. Сейчас ${isLightTheme.value ? "светлая" : "тёмная"} тема`,
);

const normalizedDirectory = computed(
  () => selectedWork.value?.directory.replace(/^assignments\//, "") ?? "",
);

const tasksPdfLink = computed(() => {
  if (!selectedWork.value?.tasksPdf || !normalizedDirectory.value) return "";
  return new URL(
    `../../assignments/${normalizedDirectory.value}/tasks.pdf`,
    import.meta.url,
  ).href;
});

const taskDirectory = computed(() =>
  selectedWork.value?.directory
    ? `../../../${selectedWork.value.directory}`
    : "",
);

const applyTheme = (value) => {
  document.body.dataset.theme = value;
  document.body.classList.toggle("theme-light", value === THEMES.LIGHT);
};

const detectSystemTheme = () => {
  if (!window.matchMedia) return THEMES.DARK;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
};

const toggleTheme = () => {
  theme.value = isLightTheme.value ? THEMES.DARK : THEMES.LIGHT;
};

onMounted(() => {
  const storedTheme = localStorage.getItem(THEME_KEY);
  const initialTheme =
    storedTheme === THEMES.LIGHT || storedTheme === THEMES.DARK
      ? storedTheme
      : detectSystemTheme();

  theme.value = initialTheme;
  applyTheme(initialTheme);

  if (!storedTheme && window.matchMedia) {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", (event) => {
      theme.value = event.matches ? THEMES.DARK : THEMES.LIGHT;
    });
  }

  const storedWorkId = localStorage.getItem(LAST_WORK_KEY);
  const initialWorkId =
    storedWorkId && workMap.value[storedWorkId]
      ? storedWorkId
      : (works.value[0]?.id ?? "");

  if (initialWorkId) {
    selectedWorkId.value = initialWorkId;
  }
});

watch(theme, (value) => {
  applyTheme(value);
  localStorage.setItem(THEME_KEY, value);
});

watch(selectedWorkId, (value) => {
  if (value) {
    localStorage.setItem(LAST_WORK_KEY, value);
  } else {
    localStorage.removeItem(LAST_WORK_KEY);
  }
});
</script>

<template>
  <header>
    <div class="header-bar">
      <div class="header-intro">
        <h1>Практики и лабы</h1>
        <p>
          Выберите раздел, читайте код и запускайте решения прямо в браузере.
        </p>
      </div>
      <button
        type="button"
        id="theme-toggle"
        class="theme-toggle"
        :aria-pressed="isLightTheme"
        :aria-label="themeButtonDescription"
        @click="toggleTheme"
      >
        <span class="theme-toggle__icon" aria-hidden="true" />
        <span class="theme-toggle__label" data-theme-label>{{
          themeButtonLabel
        }}</span>
      </button>
    </div>

    <div class="practice-picker" role="group" aria-label="Выбор работы">
      <label for="practice-select">Работа:</label>
      <select id="practice-select" v-model="selectedWorkId">
        <option v-for="work in works" :key="work.id" :value="work.id">
          {{ work.title }}
        </option>
      </select>
    </div>

    <p class="hint">
      Подсказка: используйте поиск по странице, чтобы быстрее найти нужную
      задачу.
    </p>
  </header>

  <main id="content">
    <section v-if="selectedWork" class="practice-intro">
      <h2>{{ selectedWork.title }}</h2>
      <p v-if="selectedWork.tasksPdf">
        <a
          class="tasks-link"
          :href="tasksPdfLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Открыть задания (PDF)
        </a>
      </p>
    </section>

    <p v-if="selectedWork && !hasTasks" class="empty-state">
      Для этой работы пока нет конфигурации заданий.
    </p>
    <p v-else-if="!selectedWork" class="empty-state">Работы не найдены.</p>

    <TaskCard
      v-for="task in tasks"
      v-else
      :key="task.id"
      :task="task"
      :directory="taskDirectory"
    />
  </main>
</template>
