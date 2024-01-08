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
  searchInput: string;
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
  searchInput: "",
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
      localStorage.removeItem("formList"); // not used atm, dont need to as well I presume
    },

    // Sort
    sortFormList: (state, action) => {
      const { field, isFlag } = action.payload;

      state.searchInput = ""; // Clear search input
      state.sortOption = toggleSortOption({ ...state.sortOption }, field); // Toggle sort
      state.changedList = getSortMethod([...state.formList], field, isFlag); // Set changed list
    },

    // Search
    searchFormList: (state, action) => {
      const field = action.payload;
      const length = field.length;

      // Update search input
      state.searchInput = field;

      // Calculations
      const searchedItems = state.formList.filter(
        (item: FormDetailSchema) =>
          // Search by first name
          item.first_name.slice(0, length).toLowerCase() ===
            field.toLowerCase() ||
          // Search by last name
          item.last_name.slice(0, length).toLowerCase() === field.toLowerCase()
      );

      state.changedList = searchedItems; // Set changed list
    },

    // Filter
    filterFormList: (state, action) => {
      const category = action.payload.toLowerCase();

      // Calculations
      const filteredItems = state.formList.filter((item: FormDetailSchema) =>
        category === "all" ? item : item.gender === category
      );

      state.searchInput = ""; // Clear search input
      state.filterOption = category; // Set filter category
      state.changedList = filteredItems; // Set changed list
    },
  },
});
