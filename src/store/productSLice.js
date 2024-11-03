import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/get",
  async ({page, category}, { rejectWithValue }) => {
    // console.log("product slice",page, category)
    try {
      const products = await axios.get(
       `http://localhost:8080/api/products?page=${page}&limit=8&product_category=${category}&product_price[gte]=1000&product_price[lte]=2000`
      );
      return products.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    rejected: false,
    isloading: false,
    error: null,
    page:1,
    limit:8,
    category:"all",
    price: null,
  },

  reducers: {
    handlePage: (state,action) => {
      state.page = action.payload;
    },
    handlePageIncrement: (state) => {
      if(state.page < Math.round(state.products.length / state.limit)){
        state.page += 1;
      }
      
    },
    handlePageDecrement: (state) => {
      if(state.page > 1){
        state.page -= 1;
      }
      
    },
    handleCategory: (state,action) => {
      state.category = action.payload;
    },
    handlePrice: (state,action) => {
      state.price = action.payload;
      console.log(state.price);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isloading = false;
      state.rejected = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(getAllProducts.pending, (state, action) => {
      state.isloading = true;
      state.rejected = false;
      state.products = [];
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isloading = false;
      state.rejected = true;
      state.products = [];
      state.error = action.payload;
    });
  },
});

export default productSlice;
export const productActions = productSlice.actions;
