import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { axiosInstance } from "./axiosInstance";

const api = import.meta.env.VITE_API_KEY;
export const signupUser = createAsyncThunk(
  "singupUser/post",
  async (body, { rejectWithValue }) => {
    console.log("sign up body", body);

    try {
      const response = await axios.post(
        `${api}/signup`,
        body
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "login/user",
  async (body, { rejectWithValue }) => {
    try {
      console.log("log in body", body);
      const response = await axiosInstance.post("/login", body);
      return response.data;
    } catch (error) {
    //   console.log(error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signup: {
      mobileNumber: null,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      role: "",
    },
    login: {
      email: "",
      password: "",
    },
    isLoggedIn: false,
    token: null,
    refreshToken: null,
    userId: null,
    userRole: "",
    isloading: false,
    isError: null,
  },
  reducers: {
    setSignUpFrom: (state, action) => {
      const { name, value } = action.payload;
      state.signup[name] = value;
    },
    resetSignUpForm: (state) => {
      state.signup = {
        mobileNumber: null,
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        role: "",
      };
    },
    setLoginForm: (state, action) => {
      const { name, value } = action.payload;
      state.login[name] = value;
      // console.log(state)
    },
    resetLoginForm: (state) => {
      state.login = {
        email: "",
        password: "",
      };
    },
    logout:(state)=>{
        state.token = null;
        state.refreshToken = null;
        state.userId = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.isError = null;
      state.isloading = false;
      // state.userId = action.payload.userId;
    });
    builder.addCase(signupUser.pending, (state, action) => {
      state.isLoggedIn = false;
      state.isError = null;
      state.isloading = true;
      // state.userId = action.payload.userId;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.isError = action.payload;
      state.isloading = false;
      // state.userId = action.payload.userId;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isError = null;
      state.isloading = false;
      state.userId = action.payload.message.userId;
      state.token = action.payload.message.token,
      state.refreshToken=  action.payload.message.refreshToken,
      state.userRole = action.payload.message.userRole
      console.log(action.payload.message);
      // state.userId = action.payload.userId;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoggedIn = true;
      state.isError = null;
      state.isloading = true;
      // state.userId = action.payload.userId;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoggedIn = true;
      state.isError = action.payload;
      state.isloading = false;
    });
  },
});

export default authSlice;
export const authActions = authSlice.actions;
