export function getRandomValue(max = 10, min = 5) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}
