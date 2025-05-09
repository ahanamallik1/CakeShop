import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../../types/types";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div>
      {items.length === 0 ? (
        <p className="text-center text-muted mt-5">
          No products found. Please try adjusting your search.
        </p>
      ) : (
        <Row className="product-list gx-0">
          {items.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3} className="px-2">
              {/* Rendering each product inside a ProductCard */}
              <ProductCard product={item} index={index} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductList;
