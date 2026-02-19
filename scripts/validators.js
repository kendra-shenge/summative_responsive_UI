export function validate(record) {
  const titleRegex = /^\S(?:.*\S)?$/;
  const durationRegex = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
  const dateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
  const tagRegex = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
  const duplicateWord = /\b(\w+)\s+\1\b/;

  if (!titleRegex.test(record.title)) return "Title cannot have leading/trailing spaces.";
  if (duplicateWord.test(record.title)) return "Title cannot contain duplicate words.";
  if (!durationRegex.test(record.duration)) return "Duration must be a number (up to 2 decimals).";
  if (!dateRegex.test(record.dueDate)) return "Date must be in YYYY-MM-DD format.";
  if (!tagRegex.test(record.tag)) return "Tag must be letters/spaces/hyphens only.";

  return null;
}
