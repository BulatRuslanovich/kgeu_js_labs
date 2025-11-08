export const dom = {
  select: document.getElementById("practice-select"),
  content: document.getElementById("content"),
  template: document.getElementById("task-template"),
};

export const showMessage = (text) => {
  dom.content.innerHTML = `<p class="empty-state">${text}</p>`;
};

export const clearContent = () => {
  dom.content.innerHTML = "";
};

export const appendToContent = (node) => {
  dom.content.appendChild(node);
};

export const cloneTaskSection = (title) => {
  const section = dom.template.content.firstElementChild.cloneNode(true);
  section.querySelector("h2").textContent = title;
  return section;
};

