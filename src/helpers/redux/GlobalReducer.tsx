/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

type InitialStateSchema = {
  formList: { [key: string]: string }[];
  sortOption: "asc" | "desc";
  searchOption: string;
  filterOption: string;
};

const initialState: InitialStateSchema = {
  formList: [],
  sortOption: "asc",
  searchOption: "",
  filterOption: "",
};

export const GlobalReducer = createSlice({
  name: "GlobalReducer",
  initialState,
  reducers: {
    // Set the value of demo form list to access globally
    setFormList: (state, action) => {
      state.formList = action.payload;
    },

    // Sort
    sortFormList: (state, action) => {
      const sortOption = action.payload;

      if (sortOption === "asc") {
        state.formList = state.formList.filter(
          (a: any, b: any) => a.name < b.name
        );
      }

      if (sortOption === "desc") {
        state.formList = state.formList.filter(
          (a: any, b: any) => a.name > b.name
        );
      }

      // state.
    },

    // Search
    searchFormList: (state, action) => {
      const searchOption = action.payload;
      state.formList = state.formList.filter(
        (item: any) => item.name === searchOption
      );
    },

    // Filter
    filterFormList: (state, action) => {
      const filterOption = action.payload;
      state.formList = state.formList.filter(
        (item: any) => item.name === filterOption
      );
      // state.
    },
  },
});
