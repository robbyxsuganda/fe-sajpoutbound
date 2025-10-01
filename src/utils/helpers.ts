export function formatDate(date: string | Date): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
