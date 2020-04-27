import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./data/index";
import { Provider, useSelector } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
