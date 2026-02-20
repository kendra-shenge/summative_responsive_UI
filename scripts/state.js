// import { loadData } from "./storage.js";

// export let state = {
//   records: [],
//   sortField: "dueDate",
//   sortAsc: true
// };

// export async function initializeState() {
//   state.records = await loadData();
// }

// export function setRecords(newRecords) {
//   state.records = newRecords;
// }
// state.js
import { loadData } from "./storage.js";

export let state = {
  records: [],
  sortField: "dueDate",
  sortAsc: true
};

/**
 * Load data into state
 */
export async function initializeState() {
  state.records = await loadData();
}

/**
 * Update state.records
 */
export function setRecords(newRecords) {
  state.records = newRecords;
}