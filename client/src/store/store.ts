import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slices/ProductsSlice";
import OrderReducer from "../slices/OrdersSlice";

// Configure the Redux store with product and order reducers
const store = configureStore({
  reducer: {
    products: ProductReducer,
    orders: OrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
