import { loadData } from "./storage.js";

const records = loadData();
const last7El = document.querySelector("#last7");

if (last7El) {
  const last7 = records.filter(r => {
    const diff = (new Date() - new Date(r.dueDate)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  });
  last7El.textContent = last7.length;
}
