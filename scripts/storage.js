const KEY = "campus:data";

export async function loadData() {
  try {
    let data = JSON.parse(localStorage.getItem(KEY));

    // Seed if null, not array, OR empty
    if (!Array.isArray(data) || data.length === 0) {

      console.log("Loading seed.json...");

      const response = await fetch("./seed.json");
      if (!response.ok) throw new Error("seed.json not found");

      const seedData = await response.json();

      localStorage.setItem(KEY, JSON.stringify(seedData));
      return seedData;
    }

    return data;

  } catch (err) {
    console.error("Error loading data:", err);
    return [];
  }
}

export function saveData(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}