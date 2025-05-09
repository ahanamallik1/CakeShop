import React from "react";
import { Spinner } from "react-bootstrap";
import "./LoadingSpinner.scss";

// LoadingSpinner component to display a spinner while content is loading.
const LoadingSpinner: React.FC = () => (
  <div className="loadingSpinner">
    <Spinner animation="border" role="status"></Spinner>
  </div>
);

export default LoadingSpinner;
