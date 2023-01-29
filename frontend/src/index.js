import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";
import AlertTemplate from "react-alert-template-basic";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import App from "./App";
import './index.css'

const options = {
  timeout: 2500,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
  contentStyle: {
    className: "my-alert-content",
  },
  closeButton: true,
  // onClose: () => console.log("Alert closed"),
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <>
        <App />
      </>
    </AlertProvider>
  </Provider>
);
