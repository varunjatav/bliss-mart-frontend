import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postToCart = createAsyncThunk(
  "cart/post",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/api/cart", body);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCartData = createAsyncThunk(
  "cart/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8080/api/cart");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartLength: 0,
    cart: [],
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postToCart.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      console.log(action.payload);
    }),
      builder.addCase(postToCart.pending, (state, action) => {
        state.error = null;
        state.isLoading = true;
      }),
      builder.addCase(postToCart.rejected, (state, action) => {
        state.error = state.error;
        state.isLoading = false;
      });
    builder.addCase(fetchCartData.fulfilled, (state, action) => {
      state.cartLength = action.payload.cart.length;
      state.cart = action.payload;
      state.error = null;
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addCase(fetchCartData.pending, (state, action) => {
      state.cartLength = 0;
      state.cart = [];
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(fetchCartData.rejected, (state, action) => {
        state.cartLength = 0;
        state.cart = [];
        state.error = state.error;
        state.isLoading = false;
      });
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
