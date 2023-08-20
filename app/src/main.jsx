import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { Provider } from "react-redux";
import { ContextProvider } from "./contexts/ContextProvider";

import App from "./App.jsx";
import "./index.css";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </Provider>
);
