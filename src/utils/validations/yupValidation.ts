import * as yup from "yup";

export const numberValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .required("Required field");

export const ageValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .test("", "Invalid age (at most 130)", (val) => Number(val) < 130);

export const dobValidation = yup.string().required("Required field");

export const phoneNumberValidation = yup
  .string()
  .matches(/^[0-9]+$/, "Must be only digits")
  .min(10, "Must be at least 10 characters")
  .test("", "Invalid number (at most 15 numbers)", (val) => {
    const temp = Number(val).toString();
    return temp.length > 0 ? true : false;
  });

export const nameValidation = yup
  .string()
  .required("Required field")
  .test("", "Name cant be in numbers", (val) => {
    const regex = /[a-zA-Z]+[ a-zA-Z]*/;
    return regex.test(val);
  })
  .min(3, "Must be at least 3 letters")
  .max(40, "Must be at most 40 letters");
