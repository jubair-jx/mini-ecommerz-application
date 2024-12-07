import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/api/productApi";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // RTK Query
    cart: cartReducer, // Cart state
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
