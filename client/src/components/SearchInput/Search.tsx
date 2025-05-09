import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../slices/ProductsSlice";
import { RootState } from "../../store/store";
import "./Search.scss";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(
    (state: RootState) => state.products.searchTerm
  );

  // Handle search input change
  // Dispatches `setSearchTerm` to update the Redux state with the new search term
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.currentTarget.value));
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search Products..."
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Search;
