/* eslint-disable @typescript-eslint/no-explicit-any */
export const firstName = (form: any) => {
  const common = {
    input: "first_name",
    label: "First Name",
    placeholder: "Min. 3 Max. 40",
    defaultValue: "",
  };

  return { common, form };
};

export const lastName = (form: any) => {
  const common = {
    input: "last_name",
    label: "Last Name",
    placeholder: "Min. 3 Max. 40",
    defaultValue: "",
  };

  return { common, form };
};

export const age = (form: any) => {
  const common = {
    input: "age",
    label: "Age",
    placeholder: "Min. 0 Max. 130",
    defaultValue: "",
  };

  return { common, form };
};

export const dob = (form: any) => {
  const common = {
    input: "dob",
    label: "Date of Birth",
    // placeholder: "",
    defaultValue: "",
  };

  return { common, form };
};

export const phone = (form: any) => {
  const common = {
    input: "phone",
    label: "Phone number",
    placeholder: "Min. 10 Max. 15",
    defaultValue: "",
  };

  return { common, form };
};

export const gender = (form: any) => {
  const common = {
    input: "gender",
    label: "Gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Others", value: "others" },
    ],
    defaultValue: "",
  };

  return { common, form };
};
