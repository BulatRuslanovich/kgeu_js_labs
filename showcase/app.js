import works from "./works.js";
import workConfigs from "./workConfigs.generated.js";

const resolveUrl = (dir, file) =>
  new URL(`../${dir}/${file}`, import.meta.url).href;
const workSelect = document.getElementById("practice-select");
const content = document.getElementById("content");
const taskTemplate = document.getElementById("task-template");

const moduleCache = new Map();
const highlightPromise = new Promise((resolve) => {
  if (window.hljs) {
    resolve(window.hljs);
    return;
  }

  const wait = () => {
    if (window.hljs) {
      resolve(window.hljs);
    } else {
      requestAnimationFrame(wait);
    }
  };

  wait();
});

const setContent = (html) => {
  content.innerHTML = html;
};

const renderEmptyState = (message) => {
  setContent(`<p class="empty-state">${message}</p>`);
};

const createTaskSection = ({ title }) => {
  const fragment = taskTemplate.content.cloneNode(true);
  fragment.querySelector("h2").textContent = title;
  return fragment.querySelector(".task");
};

const ensureModule = async (url) => {
  if (!moduleCache.has(url)) {
    moduleCache.set(url, import(url));
  }
  return moduleCache.get(url);
};

const getRunTask = async (url, exportName = "runTask") => {
  const module = await ensureModule(url);
  const fn = module[exportName];
  if (typeof fn !== "function") {
    throw new Error(`Экспорт ${exportName} не является функцией`);
  }
  return fn;
};

const stripComments = (code) => {
  const withoutBlock = code.replace(/\/\*[\s\S]*?\*\//g, "");
  const withoutLine = withoutBlock.replace(/^\s*\/\/.*$/gm, "");
  return withoutLine
    .replace(/^(?:\s*\n)+|(?:\n\s*)+$/g, "")
    .replace(/\n{3,}/g, "\n\n");
};

const fetchCode = async (url) => {
  try {
    const response = await fetch(url);
    const text = await response.text();
    return stripComments(text);
  } catch (error) {
    return `Не удалось загрузить файл: ${error.message}`;
  }
};

const highlightCode = async (codeElement, language = "javascript") => {
  const hljs = await highlightPromise;
  if (!hljs) return;

  if (language) {
    codeElement.classList.add(`language-${language}`);
  }
  codeElement.classList.remove("hljs");
  hljs.highlightElement(codeElement);
};

const renderTask = async ({ title, url }) => {
  const section = createTaskSection({ title });
  const codeBlock = section.querySelector(".code-block");
  const outputBlock = section.querySelector(".output");
  const runButton = section.querySelector(".run-button");
  const codeTitle = section.querySelector(".code-title");

  const filename = (() => {
    try {
      const parsed = new URL(url);
      return parsed.pathname.split("/").pop() ?? "";
    } catch {
      return url.split("/").pop() ?? "";
    }
  })();
  if (codeTitle) {
    codeTitle.textContent = filename;
    codeTitle.title = filename;
  }

  const code = await fetchCode(url);

  codeBlock.textContent = code;
  await highlightCode(codeBlock);

  let runTask;
  try {
    runTask = await getRunTask(url);
  } catch (error) {
    outputBlock.textContent = error.message;
    runButton.disabled = true;
    return section;
  }

  runButton.addEventListener("click", () => {
    try {
      const result = runTask();
      if (Array.isArray(result)) {
        outputBlock.textContent = result.join("\n");
      } else if (result !== undefined && result !== null) {
        outputBlock.textContent = String(result);
      } else {
        outputBlock.textContent = "Функция не вернула результат. См. консоль.";
      }
    } catch (error) {
      outputBlock.textContent = `Ошибка при выполнении: ${error.message}`;
      console.error(error);
    }
  });

  return section;
};

const renderWorkIntro = (
  { title, description, tasksPdf },
  fallbackTitle,
  workDirectory,
) => {
  const hasDescription = description && description !== "-";
  const hasPdf = Boolean(tasksPdf);

  if (!hasDescription && !hasPdf) {
    return;
  }

  const intro = document.createElement("section");
  intro.className = "practice-intro";

  const heading = document.createElement("h2");
  heading.textContent = title ?? fallbackTitle;
  intro.appendChild(heading);

  if (hasDescription) {
    const paragraph = document.createElement("p");
    paragraph.textContent = description;
    intro.appendChild(paragraph);
  }

  if (hasPdf) {
    const linkWrapper = document.createElement("p");
    const link = document.createElement("a");
    link.href = resolveUrl(workDirectory, tasksPdf);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "tasks-link";
    link.textContent = "Открыть задания (PDF)";
    linkWrapper.appendChild(link);
    intro.appendChild(linkWrapper);
  }

  content.appendChild(intro);
};

const loadWork = async (workMeta) => {
  const config = workConfigs[workMeta.id];
  if (!config) {
    renderEmptyState("Конфигурация выбранной работы не найдена.");
    return;
  }

  setContent("");
  renderWorkIntro(config, workMeta.title, workMeta.directory);

  const tasks = (config.tasks ?? []).map((task) => ({
    title: task.title,
    url: resolveUrl(workMeta.directory, task.file),
  }));

  if (tasks.length === 0) {
    renderEmptyState("Для этой работы пока нет конфигурации заданий.");
    return;
  }

  for (const task of tasks) {
    content.appendChild(await renderTask(task));
  }
};

const populateWorkSelect = () => {
  const fragment = document.createDocumentFragment();
  works.forEach((work) => {
    const option = document.createElement("option");
    option.value = work.id;
    option.textContent = work.title;
    fragment.appendChild(option);
  });
  workSelect.appendChild(fragment);
};

const findWorkById = (id) => works.find((work) => work.id === id);

workSelect.addEventListener("change", async (event) => {
  const selectedId = event.target.value;
  if (!selectedId) {
    renderEmptyState("Выберите работу.");
    return;
  }

  const workMeta = findWorkById(selectedId);
  if (!workMeta) {
    renderEmptyState("Работа не найдена.");
    return;
  }

  renderEmptyState("Загружаем работу…");
  await loadWork(workMeta);
});

populateWorkSelect();
renderEmptyState("Выберите работу.");
