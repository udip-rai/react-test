import { ReactNode } from "react";

export type ObjectSchema = { [key: string]: string };

export type ChildrenSchema = { children?: ReactNode };

export type OptionSchema = { label: string; value: string };

export type NavItemsSchema = {
  label: string;
  href: string;
};

export type FormInputSchema = {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  form: {
    register: any;
    errors: any;
  };
  common: {
    label: string;
    input: string;
    defaultValue?: string;
    placeholder?: string;
    options?: OptionSchema[];
  };
};

export type FormDetailSchema = {
  first_name: string;
  last_name: string;
  age: string;
  dob: string;
  phone: string;
  gender: string;
};
