import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "helpers/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);
