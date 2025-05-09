import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.scss";

// we see the success page component once the order is successfully placed.
const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="success-page">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
          <div className="success-content text-center">
            <h1 className="success-title">Order Received</h1>
            <p>
              <img
                src="/assets/images/fireworks.png"
                alt=""
                className="fireworks-image"
              />
            </p>
            <p className="success-description">
              We have successfully received your order.
            </p>
            {/* Reused Button Component to navigate to products */}
            <Button
              label="Submit Another Order"
              className="submit-another-order-button"
              onClick={() => navigate("/products")}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
