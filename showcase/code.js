const highlightPromise = new Promise((resolve) => {
  const wait = () => {
    if (window.hljs) {
      resolve(window.hljs);
      return;
    }
    requestAnimationFrame(wait);
  };
  wait();
});

export const highlightCode = async (element, language = "javascript") => {
  const hljs = await highlightPromise;
  if (!hljs) return;
  if (language) element.classList.add(`language-${language}`);
  element.classList.remove("hljs");
  hljs.highlightElement(element);
};

const stripComments = (code) =>
  code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/^\s*\/\/.*$/gm, "")
    .replace(/^(?:\s*\n)+|(?:\n\s*)+$/g, "")
    .replace(/\n{3,}/g, "\n\n");

export const fetchTaskSource = (url) =>
  fetch(url)
    .then((response) => response.text())
    .then(stripComments)
    .catch((error) => `Не удалось загрузить файл: ${error.message}`);

const moduleCache = new Map();

export const loadRunner = async (url, exportName = "runTask") => {
  if (!moduleCache.has(url)) {
    moduleCache.set(
      url,
      import(url).catch((error) => {
        moduleCache.delete(url);
        throw error;
      }),
    );
  }
  const module = await moduleCache.get(url);
  const runner = module?.[exportName];
  return typeof runner === "function" ? runner : null;
};

