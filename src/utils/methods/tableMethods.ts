import { FormDetailSchema } from "utils/schemas/GlobalSchema";

export const getSortMethod = (
  arr: FormDetailSchema[],
  by: string,
  isFlag: boolean
) => {
  const compare = (a: string, b: string) =>
    isFlag ? b.localeCompare(a) : a.localeCompare(b);

  const propertyMapper: Record<string, keyof FormDetailSchema> = {
    first_name: "first_name",
    last_name: "last_name",
    age: "age",
    dob: "dob",
    phone: "phone",
    gender: "gender",
  };

  const property = propertyMapper[by.toLowerCase()];

  return property
    ? arr.sort((a, b) =>
        compare(a[property].toLowerCase(), b[property].toLowerCase())
      )
    : arr;
};

// Function to toggle the boolean value for a specific property
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toggleSortOption = (sortOption: any, attr: string) => {
  if (sortOption[attr] !== undefined) {
    sortOption[attr] = !sortOption[attr];
  }

  return sortOption;
};
