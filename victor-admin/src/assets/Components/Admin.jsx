import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import './App.css';

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // const handleSaveEdit = (updatedProduct) => {
  //   setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  //   setEditingProduct(null);
  // };

  const handleDelete = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
  };

  return (
    <div>
      <SearchBar products={products} searchTerm={searchTerm} handleSearch={handleSearch} />
      <ProductList products={products} searchTerm={searchTerm} handleEdit={handleEdit} handleDelete={handleDelete} />
      {editingProduct && <EditModal product={editingProduct} handleSaveEdit={handleSaveEdit} />}
    </div>
  );
};

export default Admin;
