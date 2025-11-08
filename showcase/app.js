import workConfigs from "./workConfigs.generated.js";
import { dom, showMessage } from "./dom.js";
import { renderWork } from "./workRenderer.js";
import { populateWorkSelect } from "./workSelector.js";
import { loadLastWorkId, saveLastWorkId } from "./storage.js";

const handleWorkChange = async ({ target }) => {
  const selectedId = target.value;
  if (!selectedId) {
    saveLastWorkId("");
    showMessage("Выберите работу.");
    return;
  }

  const workMeta = workConfigs[selectedId];
  if (!workMeta) {
    saveLastWorkId("");
    showMessage("Работа не найдена.");
    return;
  }

  saveLastWorkId(selectedId);
  showMessage("Загружаем работу…");
  await renderWork(workMeta);
};

dom.select.addEventListener("change", handleWorkChange);

const init = async () => {
  const firstWorkId = populateWorkSelect(workConfigs);
  const savedId = loadLastWorkId();
  const initialId =
    savedId && workConfigs[savedId] ? savedId : firstWorkId ?? "";

  if (initialId && workConfigs[initialId]) {
    dom.select.value = initialId;
    saveLastWorkId(initialId);
    showMessage("Загружаем работу…");
    await renderWork(workConfigs[initialId]);
    return;
  }

  showMessage("Работы не найдены.");
};

init();
