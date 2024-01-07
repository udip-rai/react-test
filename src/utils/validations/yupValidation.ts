import * as yup from "yup";

export const numberValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .required("Required field");

export const nameValidation = yup
  .string()
  .required("Required field")
  .min(3, "Must be at least 3 letters")
  .max(40, "Must be at most 40 letters");
