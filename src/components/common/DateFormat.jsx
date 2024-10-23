export default function DateFormat({ date }) {
  const dateFormat = { month: "short", day: "2-digit", year: "numeric" };
  return new Date(date).toLocaleDateString("en-US", dateFormat);
}
