import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for persistence
import { productsApi } from "./features/api/productApi";
import cartReducer from "./slices/cartSlice"; // Path to your cart slice

// Persist configuration for the cart slice
const persistConfig = {
  key: "cart", // Key in localStorage
  storage, // Type of storage
};

// Wrap cartReducer with persistReducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // RTK Query
    cart: persistedCartReducer, // Replace the original reducer with the persisted version
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required to handle non-serializable values in Redux Persist
    }).concat(productsApi.middleware), // Add RTK Query middleware here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create a persistor to persist the store
export const persistor = persistStore(store);

export default store;
