const STORAGE_KEY = "showcase:lastWorkId";

export const loadLastWorkId = () => localStorage.getItem(STORAGE_KEY);

export const saveLastWorkId = (id) => {
  if (!id) {
    localStorage.removeItem(STORAGE_KEY);
    return;
  }
  localStorage.setItem(STORAGE_KEY, id);
};

