import React, { useState, useEffect } from 'react';
import './SearchBar.css'

const SearchBar = () => {
 const [products, setProducts] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 const [filteredProducts, setFilteredProducts] = useState([]);

 console.log("filteredProducts",filteredProducts);

 useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setProducts(data.products);
        // setFilteredProducts(data.products);
      })
      .catch(error => console.error('Error fetching data: ', error));
 }, [searchTerm]);

 const handleSearch = (searchTerm) => {
    console.log('Search term:', searchTerm);
    setSearchTerm(searchTerm);
    const filtered = products.filter(product =>
        // if(product.name ===)
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log('Filtered products:', filtered); 
    setFilteredProducts(filtered);
 };

 return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
           
          </div>
        ))}
      </div>
    </div>
 );
};

export default SearchBar;
