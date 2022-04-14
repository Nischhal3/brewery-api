import React, { useState } from 'react';
import SearchButton from '../Button/SearchButton';
import './Search.css';

const SearchBar = ({ data, handleInputChange }) => {
  const [searchField, setSearchField] = useState('');

  const filteredData = data.filter((item) => {
    if (searchField === '') {
      return item;
    } else {
      return (
        item.name.toLowerCase().includes(searchField.toLowerCase()) ||
        item.city.toLowerCase().includes(searchField.toLowerCase()) ||
        item.state.toLowerCase().includes(searchField.toLowerCase())
      );
    }
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const pressButton = () => {
    if (filteredData.length === 0) {
      alert('Item not found');
    }
    handleInputChange(filteredData);
    setSearchField('');
  };

  return (
    <div className="search-bar">
      <input
        value={searchField}
        className="search-input"
        type="search"
        placeholder="search...."
        onChange={handleChange}
      />
      <SearchButton pressButton={pressButton} />
    </div>
  );
};

export default SearchBar;
