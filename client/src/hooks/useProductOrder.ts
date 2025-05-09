import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/types";
import { AppDispatch, RootState } from "../store/store";
import { addToOrders } from "../slices/OrdersSlice";

export const useProductOrder = (product: Product, index: number) => {
  const dispatch = useDispatch<AppDispatch>();

  // Get the product stock from Redux state
  const productStock = useSelector((state: RootState) => {
    return state.orders.orders[index]?.product.stock ?? product.stock;
  });

  // Track out-of-stock status independently
  const outOfStock = productStock <= 0;

  // Function to add product to order
  const addToOrder = () => {
    if (!outOfStock) {
      dispatch(addToOrders({ product, index }));
    }
  };

  return { addToOrder, outOfStock, productStock };
};
