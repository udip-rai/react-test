export const matchHouses = (step: number) => {
  // For non-negative integer
  if (step < 0) {
    return "Step should be a non-negative integer.";
  }

  // Calculation
  const matchsticks = 5 * step + (step > 0 ? 1 : 0);

  return matchsticks;
};

console.log("matchHouses(0)", matchHouses(0));
console.log("matchHouses(1)", matchHouses(1));
console.log("matchHouses(4)", matchHouses(4));
console.log("matchHouses(87)", matchHouses(87));
