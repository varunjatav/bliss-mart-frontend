import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/get",
  async (_, { rejectWithValue }) => {
    try {
      const products = await axios.get("http://localhost:8080/api/products");
      return products.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    rejected: false,
    isloading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.isloading = false;
        state.rejected = false;
        state.products = action.payload;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isloading = true;
      state.rejected = false;
      state.products = [];
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isloading = false;
      state.rejected = true;
      state.products = [];
    });
   
  },
});

export default productSlice;
export const productActions = productSlice.actions;
