import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../../slices/OrdersSlice";
import { Order } from "../../types/types";
import OrderQuantity from "./OrderQuantity";

interface OrderItemProps {
  item: Order;
  index: number;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  // Check if the item is out of stock based on quantity and stock level
  const isOutOfStock = item.quantity >= item.product.stock;
  // Error message if quantity exceeds stock level
  const errorMessage =
    isOutOfStock && `There are not enough ${item.product.name} in stock`;

  return (
    <Row className="order-item mb-3">
      <Col md={6} className="d-flex align-items-center">
        {/* Display product image and details */}
        <img
          src={item.product.image}
          alt={item.product.name}
          className="order-image"
        />
        <div className="order-details">
          <h5 className="order-name">{item.product.name}</h5>
          <p className="order-price">{item.product.price.toFixed(2)} €</p>
        </div>
      </Col>
      {/* Display quantity control buttons and handle changes */}
      <OrderQuantity
        quantity={item.quantity}
        isOutOfStock={isOutOfStock}
        onDecrease={() => dispatch(decreaseQuantity(index))}
        onIncrease={() => dispatch(increaseQuantity(index))}
      />
      {/* Display error message if the item is out of stock */}
      <Col>
        {errorMessage && (
          <Col md={12}>
            <p className="text-danger mt-2">{errorMessage}</p>
          </Col>
        )}
      </Col>
    </Row>
  );
};

export default OrderItem;
