import React from "react";
import {
  Button as SimpleButton,
  ButtonProps as SimpleButtonProps,
} from "react-bootstrap";

interface ButtonProps extends SimpleButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <SimpleButton {...props}>{label}</SimpleButton>;
};

export default Button;
