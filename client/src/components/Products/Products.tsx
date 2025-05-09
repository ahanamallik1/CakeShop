// The `Products` component is responsible for fetching the list of products,
// handling loading and error states, and rendering a searchable list of products.
// It uses a debounced search input to filter products efficiently without excessive re-renders.
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../api/ProductApi";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Container } from "react-bootstrap";
import "../ProductCard/ProductCard.scss";
import "./Products.scss";
import ProductList from "../ProductList/ProductList";
import Search from "../SearchInput/Search";
import useDebouncedSearch from "../../hooks/useDebouncedSearch";

const Products: React.FC = () => {
  const { items, loading, error, searchTerm } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Use the custom hook to handle debounced filtering
  const filteredItems = useDebouncedSearch(items, searchTerm, 200);

  // If the loading state is true, show a loading spinner
  if (loading) {
    return (
      <div className="loading-container">
        <LoadingSpinner />
      </div>
    );
  }

  // If there is an error while fetching, display the error message
  if (error) {
    return <ErrorMessage message={error} />;
  }

  // When products are loaded successfully, render the list of products
  return (
    <Container fluid className="px-0">
      <Search />
      <ProductList items={filteredItems} />
    </Container>
  );
};

export default Products;
