// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "./reducer/user_reducer";

const store = configureStore({
  reducer: {
    user: user_reducer
  }
});

export default store;
