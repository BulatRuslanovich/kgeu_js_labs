import { cloneTaskSection } from "./dom.js";
import { fetchTaskSource, highlightCode, loadRunner } from "./code.js";
import { getFilename } from "./utils.js";

export const renderTask = async ({ title, url }) => {
  const section = cloneTaskSection(title);
  const codeBlock = section.querySelector(".code-block");
  const output = section.querySelector(".output");
  const runButton = section.querySelector(".run-button");
  const codeTitle = section.querySelector(".code-title");

  const filename = getFilename(url);
  if (codeTitle) {
    codeTitle.textContent = filename;
    codeTitle.title = filename;
  }

  codeBlock.textContent = await fetchTaskSource(url);
  await highlightCode(codeBlock);

  const runTask = await loadRunner(url);
  if (!runTask) {
    runButton.disabled = true;
    output.textContent = "Экспорт runTask не найден в модуле.";
    return section;
  }

  const renderResult = (result) => {
    if (Array.isArray(result)) {
      output.textContent = result.join("\n");
    } else if (result !== undefined && result !== null) {
      output.textContent = String(result);
    } else {
      output.textContent = "Функция не вернула результат. См. консоль.";
    }
  };

  const setPendingState = (pending) => {
    runButton.disabled = pending;
    runButton.setAttribute("aria-busy", pending ? "true" : "false");
    if (pending) {
      output.textContent = "Выполняем задачу…";
    }
  };

  runButton.addEventListener("click", async () => {
    try {
      const result = runTask();
      if (result instanceof Promise) {
        setPendingState(true);
        const resolved = await result;
        renderResult(resolved);
      } else {
        renderResult(result);
      }
    } catch (error) {
      output.textContent = `Ошибка при выполнении: ${error.message}`;
      console.error(error);
    } finally {
      setPendingState(false);
    }
  });

  return section;
};

