import * as yup from "yup";
import {
  ageValidation,
  nameValidation,
  phoneNumberValidation,
} from "./yupValidation";

export const demoFormValidation = yup
  .object()
  .shape({
    first_name: nameValidation,
    last_name: nameValidation,
    age: ageValidation,
    phone: phoneNumberValidation,
  })
  .required();
