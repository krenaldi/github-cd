import React from "react";
import { createRoot } from "react-dom/client";
import "./jass.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import store from "./utils/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
