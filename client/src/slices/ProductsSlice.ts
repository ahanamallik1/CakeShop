/**
 * Products Slice for managing product data in Redux.
 *
 * This slice handles:
 * - Storing product items (`items`).
 * - Handling the search term for filtering products (`setSearchTerm`).
 * - Managing loading and error states during product fetching (`loading`, `error`).
 *
 * Key Considerations:
 * - **Search Term Management:** Updates the search term in the state to filter products.
 * - **Async Data Fetching:** Uses `createAsyncThunk` to handle async fetching of products.
 * - **Loading and Error Handling:** Tracks the loading state during product fetch and sets an error message if the fetch fails.
 * - **State Reset on Error:** Resets product data and sets an error message if the fetch request is rejected.
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "../types/types";
import { fetchProducts } from "../api/ProductApi";

// Create the slice for managing products
const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    searchTerm: "",
    loading: false,
    error: null,
  } as ProductsState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload; // Update search term in the Redux state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true; // Handle the state when the fetch request is in progress
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.items = action.payload; // Handle the state when the fetch request is successful
        }
      )
      .addCase(
        fetchProducts.rejected, // Handle the state when the fetch request fails
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to fetch products";
        }
      );
  },
});
export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;
