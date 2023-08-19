export function getRandomNumberInRange(min: number, max: number) {
  const genNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return genNumber;
}
