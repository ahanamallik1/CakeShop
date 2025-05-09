import React from "react";
import { Order } from "../../types/types";
import OrderItem from "./OrderItem";

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  return (
    <>
      {/* Loop through each order and render an OrderItem for each one */}
      {orders.map((item, index) => (
        <OrderItem key={index} item={item} index={index} />
      ))}
    </>
  );
};

export default OrderList;
