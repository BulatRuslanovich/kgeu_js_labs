import { dom } from "./dom.js";
import { sortWorks } from "./utils.js";

export const populateWorkSelect = (workConfigs) => {
  const workList = sortWorks(workConfigs);
  const fragment = document.createDocumentFragment();

  workList.forEach((work, index) => {
    const option = document.createElement("option");
    option.value = work.id;
    option.textContent = work.title;
    if (index === 0) option.selected = true;
    fragment.appendChild(option);
  });

  dom.select.appendChild(fragment);

  return workList[0]?.id ?? null;
};

