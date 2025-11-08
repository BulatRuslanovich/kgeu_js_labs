import {
  clearContent,
  appendToContent,
  showMessage,
} from "./dom.js";
import { resolveUrl } from "./utils.js";
import { renderTask } from "./tasks.js";

const createIntro = ({ title, directory, tasksPdf }) => {
  const intro = document.createElement("section");
  intro.className = "practice-intro";

  const heading = document.createElement("h2");
  heading.textContent = title;
  intro.appendChild(heading);

  if (tasksPdf) {
    const link = document.createElement("a");
    link.href = resolveUrl(directory, "tasks.pdf");
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.className = "tasks-link";
    link.textContent = "Открыть задания (PDF)";

    const wrapper = document.createElement("p");
    wrapper.appendChild(link);
    intro.appendChild(wrapper);
  }

  return intro;
};

export const renderWork = async (config) => {
  clearContent();
  appendToContent(createIntro(config));

  const tasks =
    config.tasks?.map((task) => ({
      title: task.title,
      url: resolveUrl(config.directory, task.file),
    })) ?? [];

  if (!tasks.length) {
    showMessage("Для этой работы пока нет конфигурации заданий.");
    return;
  }

  const sections = await Promise.all(tasks.map(renderTask));
  sections.forEach((section) => appendToContent(section));
};

