export const resolveUrl = (dir, file) =>
  new URL(`../${dir}/${file}`, import.meta.url).href;

export const getFilename = (url) => {
  try {
    return new URL(url).pathname.split("/").pop() ?? "";
  } catch {
    return url.split("/").pop() ?? "";
  }
};

const typeOrder = (id) =>
  id.startsWith("lab_") ? 0 : id.startsWith("prac_") ? 1 : 2;

const parseNumber = (id) => Number(id.match(/\d+/)?.[0] ?? 0);

export const sortWorks = (workConfigs) =>
  Object.values(workConfigs).sort((a, b) => {
    const typeDiff = typeOrder(a.id) - typeOrder(b.id);
    if (typeDiff !== 0) return typeDiff;

    const numberDiff = parseNumber(a.id) - parseNumber(b.id);
    if (numberDiff !== 0) return numberDiff;

    return a.id.localeCompare(b.id);
  });

