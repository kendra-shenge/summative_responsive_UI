import { highlight } from "./search.js";
// ui.js


export function renderTable(records, regex, container) {
  container.innerHTML = "";

  records.forEach(r => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${highlight(r.title, regex)}</td>
      <td>${r.dueDate}</td>
      <td>${r.duration}</td>
      <td>${highlight(r.tag, regex)}</td>
      <td><button data-id="${r.id}" class="delete">Delete</button></td>
    `;

    container.appendChild(row);
  });
}

/* =========================
   STATS
========================= */

export function updateStats(records, totalEl, sumEl) {
  totalEl.textContent = records.length;

  const total = records.reduce(
    (sum, r) => sum + parseFloat(r.duration),
    0
  );

  sumEl.textContent = total;
}

/* =========================
   THEME SYSTEM (GLOBAL)
========================= */

// Apply saved theme immediately
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.documentElement.classList.add("light-theme");
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) return;

  // Set correct button label on load
  toggleBtn.textContent =
    document.documentElement.classList.contains("light-theme")
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";

  toggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");

    const isLight =
      document.documentElement.classList.contains("light-theme");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    toggleBtn.textContent = isLight
      ? "Switch to Dark Mode"
      : "Switch to Light Mode";
  });
});