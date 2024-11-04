import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "get/allproducts",
  async ({ page, category, price }, { rejectWithValue }) => {
    let lowerRange = 0;
    let higherRange = 5000; // or any default maximum range
    const priceRange = price.split(" - ");
    console.log(priceRange);
    lowerRange = priceRange[0] || lowerRange;
    higherRange = priceRange[1] || higherRange;

    console.log(lowerRange, higherRange);

    
      var url = `http://localhost:8080/api/products?product_category=${category}&product_price[gte]=${lowerRange}&product_price[lte]=${higherRange}`;
   

    // const categoryFilter = category !== "all" ? category : "";
    // const rangeFilter = lowerRange === "all"?  "" : lowerRange;
    console.log(lowerRange, higherRange);

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


export const singleProduct = createAsyncThunk("get/singleProduct" , async(productId, {rejectWithValue}) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/singleproduct/${productId}`);
    return response.data.singleProduct;
  } catch (error) {
    console.log(error);
    return rejectWithValue(error);
  }
}); 

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    rejected: false,
    isloading: false,
    error: null,
    page: 1,
    limit: 8,
    category: "all",
    price: "0 - 5000",
    // productId: null,
    singleProduct: {},
  },

  reducers: {
    handlePage: (state, action) => {
      state.page = action.payload;
    },
    handlePageIncrement: (state) => {
      if (state.page < Math.round(state.products.length / state.limit)) {
        state.page += 1;
      }
    },
    handlePageDecrement: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    handleCategory: (state, action) => {
      state.category = action.payload;
    },
    handlePrice: (state, action) => {
      state.price = action.payload;
    },
    setProductId : (state, action) => {
      state.productId = action.payload;
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
    builder.addCase(singleProduct.fulfilled, (state, action) => {
      state.isloading = false;
      state.rejected = false;
      state.singleProduct = action.payload;
      state.error = null;
    });
    builder.addCase(singleProduct.pending, (state, action) => {
      state.isloading = true;
      state.rejected = false;
      state.singleProduct = {};
      state.error = null;
    });
    builder.addCase(singleProduct.rejected, (state, action) => {
      state.isloading = false;
      state.rejected = true;
      state.singleProduct = {};
      state.error = null;
    });
  },
});

export default productSlice;
export const productActions = productSlice.actions;
