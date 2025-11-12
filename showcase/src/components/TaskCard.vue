<script setup>
import { computed, ref, watch } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

const moduleLoaders = import.meta.glob("../../../assignments/**/task*.js");
const sourceLoaders = import.meta.glob("../../../assignments/**/task*.js", {
  import: "default",
  query: "?raw",
});

let highlightRegistered = false;
if (!highlightRegistered) {
  hljs.registerLanguage("javascript", javascript);
  highlightRegistered = true;
}

const props = defineProps({
  task: {
    type: Object,
    required: true,
  },
  directory: {
    type: String,
    required: true,
  },
  exportName: {
    type: String,
    default: "runTask",
  },
});

const sanitizeId = (value) => value.replace(/[^a-zA-Z0-9_-]/g, "-");

const importPath = computed(() =>
  props.directory ? `${props.directory}/${props.task.file}` : "",
);

const outputId = computed(() =>
  sanitizeId(`task-output-${props.directory}-${props.task.id}`),
);

const isRunning = ref(false);
const isCodeLoading = ref(true);
const runAvailable = ref(false);
const highlightedCode = ref("");
const output = ref("Нажмите «Запустить»");

const stripComments = (code) => {
  const lines = code.split(/\r?\n/);
  if (lines.length === 0) return code;

  const [firstLine, ...rest] = lines;
  if (/^\s*\/\/\s*INFO:/i.test(firstLine.trim())) {
    return rest.join("\n");
  }

  return code;
};

const renderResult = (result) => {
  if (Array.isArray(result)) {
    output.value = result.join("\n");
    return;
  }

  if (result !== undefined && result !== null) {
    output.value = String(result);
    return;
  }

  output.value = "Функция не вернула результат. См. консоль.";
};

const resetState = () => {
  isRunning.value = false;
  runAvailable.value = false;
  highlightedCode.value = "";
  output.value = "Нажмите «Запустить»";
};

const loadCode = async (path) => {
  if (!path) {
    highlightedCode.value = "Исходный код не найден.";
    return;
  }

  isCodeLoading.value = true;
  const loader = sourceLoaders[path];

  if (!loader) {
    highlightedCode.value = "Исходный код не найден.";
    return;
  }

  try {
    const raw = await loader();
    const stripped = stripComments(raw);
    highlightedCode.value = hljs.highlight(stripped, {
      language: "javascript",
    }).value;
    runAvailable.value = true;
  } catch (error) {
    highlightedCode.value = `Не удалось загрузить файл: ${error.message}`;
  } finally {
    isCodeLoading.value = false;
  }
};

const executeTask = async () => {
  if (isRunning.value) return;

  const path = importPath.value;
  const loader = path ? moduleLoaders[path] : null;
  if (!loader) {
    output.value = "Модуль не найден.";
    runAvailable.value = false;
    return;
  }

  try {
    isRunning.value = true;
    output.value = "Выполняем задачу…";

    const module = await loader();
    const runner = module?.[props.exportName];

    if (typeof runner !== "function") {
      output.value = "Экспорт runTask не найден в модуле.";
      runAvailable.value = false;
      return;
    }

    const result = runner();
    if (result instanceof Promise) {
      output.value = "Ждём результат…";
      renderResult(await result);
    } else {
      renderResult(result);
    }
  } catch (error) {
    output.value = `Ошибка при выполнении: ${error.message}`;
    console.error(error);
  } finally {
    isRunning.value = false;
  }
};

watch(
  importPath,
  async (path) => {
    resetState();
    await loadCode(path);
  },
  { immediate: true },
);

const buttonLabel = computed(() =>
  isRunning.value ? "Выполняем…" : "Запустить",
);
const buttonDisabled = computed(() => !runAvailable.value || isRunning.value);
</script>

<template>
  <section class="task">
    <div class="task-header">
      <h2>{{ task.title }}</h2>
      <button
        type="button"
        class="run-button"
        :disabled="buttonDisabled"
        :aria-busy="isRunning"
        :aria-controls="outputId"
        @click="executeTask"
      >
        {{ buttonLabel }}
      </button>
    </div>

    <details>
      <summary>Показать код</summary>
      <div class="code-wrapper">
        <div class="code-header">
          <span class="code-title">{{ task.file }}</span>
        </div>
        <pre>
<code class="code-block language-javascript" v-if="!isCodeLoading" v-html="highlightedCode"></code>
<code class="code-block" v-else>Загрузка кода…</code>
</pre>
      </div>
    </details>

    <div class="result">
      <h3>Результат</h3>
      <pre class="output" :id="outputId" role="status" aria-live="polite">{{
        output
      }}</pre>
    </div>
  </section>
</template>
