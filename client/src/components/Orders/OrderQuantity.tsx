import React from "react";
import { Button, Col } from "react-bootstrap";

interface OrderQuantityProps {
  quantity: number;
  isOutOfStock: boolean;
  onDecrease: () => void;
  onIncrease: () => void;
}

const OrderQuantity: React.FC<OrderQuantityProps> = ({
  quantity,
  isOutOfStock,
  onDecrease,
  onIncrease,
}) => {
  return (
    <Col md={6} className="d-flex align-items-center justify-content-end">
      {/* Display current quantity */}
      <span className="mx-2 order-quantity">{quantity}</span>
      {/* Button to decrease the quantity */}
      <Button variant="outline-secondary" onClick={onDecrease}>
        -
      </Button>
      {/* Button to increase the quantity, disabled if out of stock */}
      <Button
        variant="outline-secondary"
        disabled={isOutOfStock}
        onClick={onIncrease}
        className={isOutOfStock ? "disabled-button" : ""}
      >
        +
      </Button>
    </Col>
  );
};

export default OrderQuantity;
