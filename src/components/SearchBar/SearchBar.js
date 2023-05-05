import React, { useState, useContext } from "react";
import "./SearchBar.css";
import { Form, Button } from "react-bootstrap";
import { searchMovieIndividual } from '../../services/firestore'
import { cartContext } from '../../context/cartContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { searchResults, setSearchResults } = useContext(cartContext)

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
  }

  const handleSearchSubmit = async (evt) => {
    evt.preventDefault();
    const results = await searchMovieIndividual(searchValue);
    setSearchResults(results);
    console.log(results);
  }

  return (
    <Form inline className="search-form d-flex justify-content-center mb-3">
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
    </Form>
  );
};

export default SearchBar;
