// Answer workings for Q1
export const lessThan100 = (a: number, b: number) => a + b > 100;

// Verification
console.log("lessThan100(50, 50)", lessThan100(51, 50));
console.log("lessThan100(50, 50)", lessThan100(50, 50));
console.log("lessThan100(5, 50)", lessThan100(5, 50));
