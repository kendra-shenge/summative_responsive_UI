const KEY = "campus:data";

export function loadData() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function exportJSON(data) {
  return JSON.stringify(data, null, 2);
}

export function importJSON(json) {
  const parsed = JSON.parse(json);
  if (!Array.isArray(parsed)) throw new Error("Invalid JSON structure.");
  return parsed;
}
