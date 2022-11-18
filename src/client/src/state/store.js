import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userReducer";
import accountReducer from "./Reducers/accountReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    accounts: accountReducer,
  },
});
