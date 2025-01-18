import { createSlice } from "@reduxjs/toolkit";
import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { data } from "react-router-dom";

const initialState = {
  data: {},
  login: false,
  loading: false,
  error: false,
  errorData: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest(state) {
      return { ...state, loading: true };
    },
    loginSuccess(state, { payload }) {
      return { ...state, loading: false, data: { payload } };
    },
    loginFailure(state, { payload }) {
      return { ...state, loading: false, error: true, errorData: { payload } };
    },
    loginWithOTP(state) {
      return { ...state, loading: false, login: false };
    },
    logout() {
      return initialState;
    }
  }
});

export const getUser = (state) => state.user.data?.user;
export const isUserLoggedIn = (state) => state.user?.login;

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  loginWithOTP,
  logout
} = userSlice.actions;

export default userSlice.reducer;
