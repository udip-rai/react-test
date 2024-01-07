// Answer workings for Q2
export const detectWordsForQuestionTwo = (str: string) => {
  // Varable to store the result
  let result = "";

  // Split the str into an array
  const newStr = str.split("");

  // Map over all the characters in newStr to find lowercase
  result = newStr
    .map((item: string) => (item.toLowerCase() === item ? item : ""))
    .join("");

  return result;
};
