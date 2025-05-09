// OrderActions.tsx
import React from "react";
import OrderButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { handleOrders } from "../../services/orderService";
import { AppDispatch } from "../../store/store";

interface OrderActionsProps {
  orders: any[]; // Replace with appropriate type for orders
  dispatch: AppDispatch;
}

const OrderActions: React.FC<OrderActionsProps> = ({ orders, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Order button that triggers order processing when clicked */}
      <OrderButton
        label="Order"
        className="custom-order-button"
        onClick={() => handleOrders(orders, dispatch, navigate)}
      >
        Order
      </OrderButton>
    </div>
  );
};

export default OrderActions;
