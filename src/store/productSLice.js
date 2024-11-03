import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "products/get",
  async ({page, category , price}, { rejectWithValue }) => {
    
    const [lowerRange, higherRange] = price.split(" , ");
    console.log(lowerRange, higherRange);
    
    const categoryFilter = category !== "all" ? category : "";
    const rangeFilter = lowerRange === "all"?  "" : lowerRange;
    console.log(lowerRange, higherRange);
    const url = `http://localhost:8080/api/products?page=${page}&limit=8&product_category=${categoryFilter}&product_price=${rangeFilter}`;
    // console.log(lowerRange, higherRange);
    try {
      const products = await axios.get(url);
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
    price: "all",
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
