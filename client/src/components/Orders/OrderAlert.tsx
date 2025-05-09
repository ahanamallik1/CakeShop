import React from "react";
import { Alert, Container } from "react-bootstrap";
import "./OrderAlert.scss";
import { NavLink } from "react-router-dom";

const OrderAlert = () => {
  return (
    <Container className="orders-container">
      {/* Displaying an informational alert that the user has no orders */}
      <Alert variant="info" className="custom-alert">
        <span className="custom-alert-text">You currently have no orders.</span>
      </Alert>
      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive ? "view-all-recipes-link active" : "view-all-recipes-link"
        }
      >
        View All Recipes
      </NavLink>
    </Container>
  );
};

export default OrderAlert;
