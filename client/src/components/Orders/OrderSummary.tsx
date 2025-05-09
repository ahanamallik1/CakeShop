// OrderSummary.tsx
import React from "react";
import { Row, Col } from "react-bootstrap";

interface OrderSummaryProps {
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ totalPrice }) => {
  return (
    <section className="mt-4">
      <Row>
        <Col>
          {/* Displays the total price  */}
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Total Price:</h4>
            <span className="text-right">{totalPrice.toFixed(2)} €</span>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default OrderSummary;
