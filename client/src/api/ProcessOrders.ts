import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Async thunk to handle order processing
 */
export const processOrders = createAsyncThunk(
  "orders/processOrders",
  async (items: { name: string; quantity: number }[], { rejectWithValue }) => {
    // API call to process orders
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }), // Send order data to the server
      });

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }
      return await response.json(); // Return the successful response payload
    } catch (error) {
      console.error("Failed to process orders:", error);
      return rejectWithValue("Network error or failed to process orders");
    }
  }
);
