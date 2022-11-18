import { createSlice } from "@reduxjs/toolkit";

const initialState = { userAccounts: [] };

export const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setUserAccounts: (state, action) => {
      state.userAccounts = action.payload.userAccounts;
    },
  },
});

export const { setUserAccounts } = accountsSlice.actions;

export default accountsSlice.reducer;
