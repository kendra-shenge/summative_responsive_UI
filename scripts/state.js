import { loadData } from "./storage.js";

export let state = {
  records: loadData(),
  sortField: "dueDate",
  sortAsc: true
};

export function setRecords(newRecords) {
  state.records = newRecords;
}
