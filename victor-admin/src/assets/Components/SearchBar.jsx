import React from 'react';
import './SearchBar.css';

const SearchBar = ({ products, searchTerm, handleSearch }) => {
 return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
 );
};

export default SearchBar;
