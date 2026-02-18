export const patterns = {
  title: /^\S(?:.*\S)?$/,
  duration: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
  date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  tag: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
  duplicateWord: /\b(\w+)\s+\1\b/i
};

export function validate(record) {
  if (!patterns.title.test(record.title)) return "Invalid title.";
  if (patterns.duplicateWord.test(record.title)) return "Duplicate word detected.";
  if (!patterns.duration.test(record.duration)) return "Invalid duration.";
  if (!patterns.date.test(record.dueDate)) return "Invalid date.";
  if (!patterns.tag.test(record.tag)) return "Invalid tag.";
  return null;
}
