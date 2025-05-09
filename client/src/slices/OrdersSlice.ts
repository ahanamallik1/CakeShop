/**
 * Orders Slice for managing cart functionality in Redux.
 *
 * This slice handles:
 * - Adding products to the cart (`addToOrders`).
 * - Modifying item quantities (`increaseQuantity`, `decreaseQuantity`).
 * - Calculating total items and price dynamically.
 *
 * Key considerations:
 * - **Stock check:** Ensures product quantity doesn't exceed available stock.
 * - **Data integrity:** Automatically updates total items and price when cart changes.
 * - **Error handling:** Sets error message when stock is insufficient.
 * - **Async handling:** Manages loading, success, and error states during order processing.
 * - **Post-order reset:** Clears cart after successful order processing.
 */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderState, Product } from "../types/types";
import { processOrders } from "../api/ProcessOrders";

// Create the slice for managing orders
const OrdersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    totalItems: 0,
    totalPrice: 0,
    isLoading: false,
    error: null,
    successMessage: null,
  } as OrderState,
  reducers: {
    /**
     * Adds a product to the orders list.
     * Ensures stock availability before adding or updating quantity.
     */
    addToOrders: (
      state,
      action: PayloadAction<{ index: number; product: Product }>
    ) => {
      const { index, product } = action.payload;
      const existingItem = state.orders[index];

      if (existingItem) {
        // Ensure the new quantity does not exceed stock availability
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
        } else {
          state.error = `Not enough stock for ${product.name}`;
        }
      } else {
        // Add a new product only if stock is available
        if (product.stock > 0) {
          state.orders[index] = {
            product,
            quantity: 1,
          };
        } else {
          state.error = `Not enough stock for ${product.name}`;
        }
      }

      // Update total item count and total price dynamically
      state.totalItems = state.orders.reduce(
        (total, order) => total + (order ? order.quantity : 0),
        0
      );
      state.totalPrice = state.orders.reduce(
        (total, order) =>
          total + (order ? order.quantity * order.product.price : 0),
        0
      );
    },
    /**
     * Increases the quantity of a specific product in the cart.
     * Prevents increasing beyond available stock.
     */
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.orders[action.payload];
      if (existingItem) {
        // Check if stock allows increasing quantity
        if (existingItem.quantity < existingItem.product.stock) {
          existingItem.quantity += 1;
        }
      }

      // Recalculate total items and price
      state.totalItems = state.orders.reduce(
        (total, order) => total + (order ? order.quantity : 0),
        0
      );

      state.totalPrice = state.orders.reduce(
        (total, order) =>
          total + (order ? order.quantity * order.product.price : 0),
        0
      );
    },
    /**
     * Decreases the quantity of a product in the cart.
     * Ensures quantity never drops below 1 to maintain valid orders.
     */
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.orders[action.payload];
      if (existingItem) {
        existingItem.quantity -= 1;
        // Ensure the minimum quantity remains at 1
        if (existingItem.quantity < 1) {
          existingItem.quantity = 1;
        }
      }
      // Update total item count and total price
      state.totalItems = state.orders.reduce(
        (total, order) => total + (order ? order.quantity : 0),
        0
      );
      state.totalPrice = state.orders.reduce(
        (total, order) =>
          total + (order ? order.quantity * order.product.price : 0),
        0
      );
    },
  },
  /**
   * Extra reducers handle async API calls for processing orders.
   * Uses Redux Toolkit’s createAsyncThunk to handle API states.
   */
  extraReducers: (builder) => {
    builder
      .addCase(processOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(processOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successMessage = action.payload;
        state.orders = []; // Clear orders after successful order processing
        state.totalItems = 0;
        state.totalPrice = 0;
      })
      .addCase(processOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Failed to process order";
      });
  },
});

export const { addToOrders, increaseQuantity, decreaseQuantity } =
  OrdersSlice.actions;
export default OrdersSlice.reducer;
