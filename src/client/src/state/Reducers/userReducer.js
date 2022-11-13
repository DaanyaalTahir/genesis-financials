import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AddressID: null,
  BirthDate: null,
  CreationDate: null,
  Email: null,
  FName: null,
  LName: null,
  HomeBranch: null,
  SIN: null,
  Username: null,
  isLoggedIn: false,
};

const resetState = (state) => {
  for (const property in state) {
    state[property] = initialState[property];
  }
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.AddressID = action.payload.AddressID;
      state.BirthDate = action.payload.BirthDate;
      state.CreationDate = action.payload.CreationDate;
      state.Email = action.payload.Email;
      state.FName = action.payload.FName;
      state.LName = action.payload.LName;
      state.HomeBranch = action.payload.HomeBranch;
      state.HomeBranch = action.payload.HomeBranch;
      state.SIN = action.payload.SIN;
      state.Username = action.payload.Username;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      resetState(state);
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
