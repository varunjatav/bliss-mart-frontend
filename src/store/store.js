import authSlice from "./authSlice.js";
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";

import { configureStore } from "@reduxjs/toolkit";

const blissMartStore = configureStore({
    name:"blissMart",
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        auth: authSlice.reducer
    }
});



export default blissMartStore;