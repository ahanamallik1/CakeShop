import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const CustomNavbar = () => {
  // Accessing the totalItems from the Redux store to display the number of items in the orders
  const totalItems = useSelector((state: RootState) => state.orders.totalItems);
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        {/* Navbar brand with logo and bakery name */}
        <Navbar.Brand className="d-flex align-items-center">
          <Nav.Link as={Link} to="/">
            <img
              src="/assets/images/cake.png"
              alt="Logo"
              className="navbar-logo"
            />
          </Nav.Link>
          {/* Bakery Shop title */}
          <span> The Bakery Shop </span>
        </Navbar.Brand>
        {/* Toggle for collapsing the navbar on small screens */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/orders">
              <div>Orders {totalItems > 0 ? `(${totalItems})` : null}</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
