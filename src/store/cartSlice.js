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
  async (userId, { rejectWithValue }) => {
    // console.log("userId", userId);

    try {
      const response = await axios.get(
        `http://localhost:8080/api/cart?userId=${userId}`
      );
      if (response.status !== 200) {
        console.error("Fetch failed with status:", response.status);
        return rejectWithValue("Failed to fetch cart data");
      }
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.message);
    }
  }
);

export const decrementCart = createAsyncThunk(
  "cart/decrement",
  async ({ userId, productId }, { rejectWithValue }) => {
    // console.log(userId, productId);

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cart/decrement?userId=${userId}&productId=${productId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "cart/delete",
  async ({ userId, productId }) => {
    console.log(userId, productId);

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cart/decrement?userId=${userId}&productId=${productId}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      rejectWithValue(error.message);
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
    totalAmount: 0,
    totalDiscount: 0,
    // quantity: 1,
  },
  reducers: {
    TotalPrice: (state) => {
      state.totalAmount = 0; // Reset total before calculating
      // Check if cart items are available
      state.totalDiscount = 0;
      console.log(state.cart, state.cart.items);

      if (state.cart && state.cart.items) {
        for (let i = 0; i < state.cartLength; i++) {
          const price =
            state.cart.items[i].product.product_price *
            state.cart.items[i].quantity;
          const discount =
            state.cart.items[i].product.product_price *
            state.cart.items[i].quantity *
            (+(state.cart.items[i].product.product_discount) / 100);
          console.log("price: " + price);
          console.log("discount: " + +(discount));

          state.totalAmount += price || 0;
          state.totalDiscount += discount;
        }
      }
      console.log("Total Amount:", state.totalAmount);
      console.log("Total Discount:", +(state.totalDiscount));
    },
  },
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
      state.cartLength = action.payload.items.length;
      state.cart = action.payload;
      state.error = null;
      state.isLoading = false;
      if (action.payload.items) {
        cartSlice.caseReducers.TotalPrice(state);
      }
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
    // builder.addCase(decrementCart.fulfilled, (state, action) => {
    //   state.quantity = action.payload.quantity;
    // });
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
