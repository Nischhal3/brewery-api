import React from 'react';
import './Button.css';

const SearchButton = ({ pressButton }) => {
  return (
    <button className="btn" onClick={pressButton}>
      Search
    </button>
  );
};

export default SearchButton;
