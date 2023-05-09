import React, { useState, useContext } from "react";
import "./SearchBar.css";
import { Form, Button } from "react-bootstrap";
import { searchMovieIndividual } from '../../services/firestore'
import { cartContext } from '../../context/cartContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchError, setSearchError] = useState(false);
  const { setSearchResults } = useContext(cartContext)

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  }

  const handleSearchSubmit = async (evt) => {
    evt.preventDefault();
    const results = await searchMovieIndividual(searchValue);
    if (results.length > 0) {
      setSearchResults(results);
      setSearchError(false);
    } else {
      setSearchResults([]);
      setSearchError(true);
    }
    setSearchValue("");
  }

  return (
    <Form inline="true" className="search-form d-flex justify-content-center mb-3">
      <Form.Control
        type="text"
        placeholder="Search Movies"
        className="search-bar"
        onChange={handleSearchChange}
        value={searchValue}
      />
      <Button variant="outline-light" className="search-button" onClick={handleSearchSubmit}>
        <i className="fas fa-search"></i>
      </Button>
      {searchError && (
        <p className="search-error">No movies found</p>
      )}
    </Form>
  );
};

export default SearchBar;
