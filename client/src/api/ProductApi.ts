import { createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../types/types";

/**
 * Async thunk to fetch product data from the API.
 */
export const fetchProducts = createAsyncThunk<
  Product[],
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("api/storage");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.storage;
  } catch (error) {
    return rejectWithValue(
      error instanceof Error ? error.message : "Unknown error"
    );
  }
});
