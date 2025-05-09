import React from "react";
import { Alert } from "react-bootstrap";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <Alert variant="danger" className="text-center mt-4">
      <h4>Oops! Something went wrong.</h4>
      <p>{message}</p>
      <p>Please try again later.</p>
    </Alert>
  );
};

export default ErrorMessage;
