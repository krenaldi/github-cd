import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./utils/store";
import "./jass.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

