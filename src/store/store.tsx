import { configureStore } from "@reduxjs/toolkit";
import { getProducts } from "../api/getProducts";
import cartSlice from "../reducer/cartSlice";

export const store = configureStore({
    reducer:{
        addcart:cartSlice,
        [getProducts.reducerPath]:getProducts.reducer
        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(getProducts.middleware),
})