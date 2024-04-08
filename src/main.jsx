import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice.js";
import bonusReducer from "./slices/bonusSlice.js";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
