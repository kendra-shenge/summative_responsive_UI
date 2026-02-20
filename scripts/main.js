import { initializeState, state, setRecords } from "./state.js";
import { renderTable, updateStats } from "./ui.js";
import { saveData } from "./storage.js";

document.addEventListener("DOMContentLoaded", async () => {

  await initializeState();

  const tableBody = document.getElementById("records");
  const totalEl = document.getElementById("total");
  const sumEl = document.getElementById("sum");
  const form = document.getElementById("planner-form");

  // Initial render
  renderTable(state.records, null, tableBody);
  updateStats(state.records, totalEl, sumEl);

  // ✅ FORM SUBMIT HANDLER
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newRecord = {
      id: "rec_" + Date.now(),
      title: form.title.value.trim(),
      dueDate: form.dueDate.value,
      duration: form.duration.value,
      tag: form.tag.value.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const updatedRecords = [...state.records, newRecord];

    setRecords(updatedRecords);
    saveData(updatedRecords);

    renderTable(state.records, null, tableBody);
    updateStats(state.records, totalEl, sumEl);

    form.reset();
  });

  // ✅ DELETE HANDLER (MUST BE INSIDE)
  tableBody.addEventListener("click", (e) => {

    if (!e.target.classList.contains("delete")) return;

    const id = e.target.dataset.id;

    const updatedRecords = state.records.filter(r => r.id !== id);

    setRecords(updatedRecords);
    saveData(updatedRecords);

    renderTable(state.records, null, tableBody);
    updateStats(state.records, totalEl, sumEl);
  });

});