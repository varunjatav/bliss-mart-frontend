import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

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