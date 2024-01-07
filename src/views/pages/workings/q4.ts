/* eslint-disable @typescript-eslint/no-explicit-any */
export const firstName = (form: any) => {
  const common = {
    input: "first_name",
    label: "First Name",
    placeholder: "Udip...",
    defaultValue: "",
  };

  return { common, form };
};

export const lastName = (form: any) => {
  const common = {
    input: "last_name",
    label: "Last Name",
    placeholder: "Rai...",
    defaultValue: "",
  };

  return { common, form };
};

export const age = (form: any) => {
  const common = {
    input: "age",
    label: "Age",
    placeholder: "Udip...",
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
    placeholder: "980XXXXXXX",
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
