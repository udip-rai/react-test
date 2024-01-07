import { configureStore } from "@reduxjs/toolkit";
import { GlobalReducer } from "./GlobalReducer";

export const store = configureStore({
  reducer: {
    Global: GlobalReducer.reducer,
  },
});
