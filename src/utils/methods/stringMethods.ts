export const toSnakeCase = (str: string | null | undefined) => {
  if (str === null || str === undefined) {
    return ""; // or handle the case appropriately based on your use case
  }

  const matches = str.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
  );

  if (!matches) {
    return ""; // or handle the case when there are no matches found
  }

  return matches.map((x) => x.toLowerCase()).join("_");
};
