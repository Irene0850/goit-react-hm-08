import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const token = {
  setAuth(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  clearAuth() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", {
        name,
        email,
        password,
      });
      token.setAuth(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (userInfo, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", userInfo);
      token.setAuth(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.clearAuth();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      if (!auth.token) {
        return rejectWithValue("no token");
      }
      token.setAuth(auth.token);
      const { data } = await axios.get("users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
