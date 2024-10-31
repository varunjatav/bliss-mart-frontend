import productSlice from "./productSlice";

import { configureStore } from "@reduxjs/toolkit";

const blissMartStore = configureStore({
    name:"blissMart",
    reducer: {
        products: productSlice.reducer,
    }
});



export default blissMartStore;