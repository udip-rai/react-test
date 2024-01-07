import * as yup from "yup";
import { nameValidation, numberValidation } from "./yupValidation";

export const demoFormValidation = yup
  .object()
  .shape({
    first_name: nameValidation,
    last_name: nameValidation,
    age: numberValidation,
    phone: numberValidation,
  })
  .required();
