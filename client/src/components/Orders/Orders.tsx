import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import "./Orders.scss";

import OrderAlert from "./OrderAlert";
import OrderList from "./OrderList";

import OrderHeader from "./OrderHeader";
import OrderSummary from "./OrderSummary";
import OrderActions from "./OrderActions";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Orders = () => {
  // Destructuring the state from the Redux store using `useSelector` hook
  const { orders, totalPrice, isLoading } = useSelector(
    (state: RootState) => state.orders
  );

  const dispatch = useDispatch<AppDispatch>();
  // If data is still loading, show the loading spinner
  if (isLoading) {
    return (
      <section className="orders-container">
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <main>
      {/* If no orders show alert */}
      {orders.length === 0 ? (
        <section>
          <OrderAlert />
        </section>
      ) : (
        <section className="orders-container">
          {/* 
            Using smaller, reusable components to keep the codebase modular and maintainable. 
            This allows each component to handle specific responsibilities, such as displaying 
            the order header, list, summary, and actions, while ensuring flexibility for future use cases. 
          */}
          <OrderHeader />

          <OrderList orders={orders} />

          <OrderSummary totalPrice={totalPrice} />

          <OrderActions orders={orders} dispatch={dispatch} />
        </section>
      )}
    </main>
  );
};

export default Orders;
