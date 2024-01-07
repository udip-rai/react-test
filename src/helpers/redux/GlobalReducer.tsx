/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormDetailSchema } from "utils/schemas/GlobalSchema";
import { createSlice } from "@reduxjs/toolkit";
import { formList } from "utils/constants";
import { getSortMethod, toggleSortOption } from "utils/methods/tableMethods";

// local storage functions
const getLs = localStorage.getItem("formList");
const setLs = (str: string) => localStorage.setItem("formList", str);

// Set initial value for formList
let initialList: string;
if (getLs) {
  initialList = getLs;
} else {
  initialList = JSON.stringify(formList);
  setLs(initialList);
}

// Modify the arr in localstorage
const modifyLocalStorage = (obj: FormDetailSchema) => {
  const temp = [];
  temp.push(...JSON.parse(initialList));
  temp.push(obj);
  setLs(JSON.stringify(temp));
};

// Initial state of redux/slice
type InitialStateSchema = {
  formList: FormDetailSchema[];
  changedList: FormDetailSchema[];
  sortOption: any;
  // sortOption: "asc" | "desc";
  searchOption: string;
  filterOption: "male" | "female" | "all";
};

const initialState: InitialStateSchema = {
  formList: JSON.parse(initialList),
  changedList: JSON.parse(initialList),
  sortOption: {
    first_name: false,
    last_name: false,
    age: false,
    dob: false,
    phone: false,
    gender: false,
  },
  searchOption: "",
  filterOption: "all",
};

export const GlobalReducer = createSlice({
  name: "GlobalReducer",
  initialState,
  reducers: {
    // Set the value of demo form list to access globally
    setFormList: (state, action) => {
      const obj = action.payload;
      state.formList.push(obj);
      modifyLocalStorage(obj);
    },

    // Clear local storage database
    clearLsCache: () => {
      localStorage.removeItem("formList");
    },

    // Sort
    sortFormList: (state, action) => {
      const { field, isFlag } = action.payload;

      state.sortOption = toggleSortOption({ ...state.sortOption }, field);
      state.changedList = getSortMethod([...state.formList], field, isFlag);

      // if (sortOption === "asc") {
      //   state.formList = state.formList.filter(
      //     (a: FormDetailSchema, b: FormDetailSchema) => a.name < b.name
      //   );
      // }

      // if (sortOption === "desc") {
      //   state.formList = state.formList.filter(
      //     (a: FormDetailSchema, b: FormDetailSchema) => a.name > b.name
      //   );
      // }
    },

    // Search
    searchFormList: (state, action) => {
      const field = action.payload;
      const length = field.length;

      // Calculations
      const searchedItems = state.formList.filter(
        (item: FormDetailSchema) =>
          // Search by first name
          item.first_name.slice(0, length).toLowerCase() ===
            field.toLowerCase() ||
          // Search by last name
          item.last_name.slice(0, length).toLowerCase() === field.toLowerCase()
      );

      state.changedList = searchedItems;
    },

    // Filter
    filterFormList: (state, action) => {
      const category = action.payload.toLowerCase();

      // Calculations
      const filteredItems = state.formList.filter((item: FormDetailSchema) =>
        category === "all" ? item : item.gender === category
      );

      state.filterOption = category;
      state.changedList = filteredItems;
    },
  },
});
