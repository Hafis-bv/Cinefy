export default function getAge(dateString: string): number {
  // Parse the date string (YYYY-MM-DD format)
  const [year, month, day] = dateString.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if the birthday hasn’t occurred yet this year
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }

  return age;
}
