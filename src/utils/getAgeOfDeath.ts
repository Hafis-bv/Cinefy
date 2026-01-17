export default function getAgeOfDeath(
  birthDateStr: string,
  deathDateStr: string
): number {
  const [birthYear, birthDay, birthMonth] = birthDateStr.split("-").map(Number);
  const [deathYear, deathDay, deathMonth] = deathDateStr.split("-").map(Number);

  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  const deathDate = new Date(deathYear, deathMonth - 1, deathDay);

  let age = deathDate.getFullYear() - birthDate.getFullYear();

  const hasBirthdayPassed =
    deathDate.getMonth() > birthDate.getMonth() ||
    (deathDate.getMonth() === birthDate.getMonth() &&
      deathDate.getDate() >= birthDate.getDate());

  if (!hasBirthdayPassed) {
    age--;
  }
  return age;
}
