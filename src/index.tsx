import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "./Store";

import App from "./App";
import "./css/style.css";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
