import React from "react";
import { Product } from "../../types/types";
import Card from "react-bootstrap/Card";
import Button from "../Button/Button";
import { useProductOrder } from "../../hooks/useProductOrder";
import "./ProductCard.scss";

interface ProductCardProps {
  product: Product;
  index: number;
}

// Memoize the ProductCard component to prevent unnecessary re-renders
const ProductCard: React.FC<ProductCardProps> = React.memo(
  ({ product, index }) => {
    // Use the custom hook to manage order actions and stock availability
    const { addToOrder, outOfStock } = useProductOrder(product, index);

    return (
      <Card className="product-card">
        <Card.Body>
          <Card.Img src={product.image} alt={product.name} />
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="product-price">{product.price} €</Card.Text>
          {/* Button to add the product to the order.  */}
          <Button
            label="Add To Order"
            className="order-button"
            onClick={addToOrder}
            disabled={outOfStock} // Disable button if product is out of stock
          />
          {/* Show a message if the product is out of stock */}
          {outOfStock && (
            <span className="stock-availibility">Out of Stock</span>
          )}
        </Card.Body>
      </Card>
    );
  }
);

export default ProductCard;
