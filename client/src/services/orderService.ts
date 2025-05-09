import { NavigateFunction } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { processOrders } from "../api/ProcessOrders";
import { Order } from "../types/types";

// handleOrders - This function processes orders, dispatches them to the API, and navigates based on the response.
export const handleOrders = async (
  orders: Order[],
  dispatch: AppDispatch,
  navigate: NavigateFunction
) => {
  const items = orders
    .filter((order) => order !== null) // Remove null values if any
    .map((order) => ({
      name: order.product.name,
      quantity: order.quantity,
    }));

  // Log an error if no valid orders exist
  if (items.length === 0) {
    console.error("No valid items to send.");
    return;
  }

  try {
    const response = await dispatch(processOrders(items));
    if (response.payload && response.payload.message === "success") {
      // Navigate to success page on successful response
      navigate("/success");
    } else {
      // Throw an error if processing fails
      throw new Error("Order processing failed.");
    }
  } catch (error) {
    throw new Error("Error processing orders");
  }
};
