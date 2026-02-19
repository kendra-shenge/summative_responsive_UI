import { state, setRecords } from "./state.js";
import { saveData } from "./storage.js";
import { validate } from "./validators.js";
import { compileRegex } from "./search.js";
import { renderTable, updateStats } from "./ui.js";

const form = document.querySelector("#planner-form");
const tableBody = document.querySelector("#records");
const searchInput = document.querySelector("#search");
const totalEl = document.querySelector("#total");
const sumEl = document.querySelector("#sum");

function render() {
  const regex = compileRegex(searchInput.value);
  const filtered = state.records.filter(r =>
    !regex || regex.test(r.title) || regex.test(r.tag)
  );
  renderTable(filtered, regex, tableBody);
  updateStats(filtered, totalEl, sumEl);
}

form?.addEventListener("submit", e => {
  e.preventDefault();

  const record = {
    id: "rec_" + Date.now(),
    title: form.title.value.trim(),
    dueDate: form.dueDate.value,
    duration: form.duration.value,
    tag: form.tag.value.trim(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const error = validate(record);
  if (error) return alert(error);

  state.records.push(record);
  saveData(state.records);
  form.reset();
  render();
});

tableBody?.addEventListener("click", e => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.dataset.id;
    const updated = state.records.filter(r => r.id !== id);
    setRecords(updated);
    saveData(updated);
    render();
  }
});

searchInput?.addEventListener("input", render);

// Initial render
render();
