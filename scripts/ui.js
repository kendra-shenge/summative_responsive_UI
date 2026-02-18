import { highlight } from "./search.js";

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

export function updateStats(records, totalEl, sumEl) {
  totalEl.textContent = records.length;
  const total = records.reduce((sum, r) => sum + parseFloat(r.duration), 0);
  sumEl.textContent = total;
}
