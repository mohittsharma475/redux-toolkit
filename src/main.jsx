import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./slices/accountSlice";
import bonusReducer from "./slices/bonusSlice";
import { Provider } from "react-redux";
import rewardReducer from "./reducers/rewardReducer.jsx";

const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonusReducer,
    reward:rewardReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
