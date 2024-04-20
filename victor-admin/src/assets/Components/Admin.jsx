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

 const handleSaveEdit = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setEditingProduct(null);
 };

<<<<<<< HEAD
 const handleDelete = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
 };

 return (
    <div>
      <SearchBar products={products} searchTerm={searchTerm} handleSearch={handleSearch} />
      <ProductList products={products} searchTerm={searchTerm} handleEdit={handleEdit} handleDelete={handleDelete} />
      {editingProduct && <EditModal product={editingProduct} handleSaveEdit={handleSaveEdit} />}
=======
  return (
    <div className='product-box'>
      <div className='product-list'>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '20px' }}>
           
              <div className='product-container'>
                <h2>{product.name}</h2>
                <img src={product.imageUrl} alt={product.name} className='product-image' />
                <p>Price: ${product.price.toFixed(2)}</p>
                 {/* <button onClick={() => handleEdit(product.id)} className='btn'>Edit</button> */}
                 <EditModal product = {product} handleSaveEdit = {handleSaveEdit}/>
                <button onClick={() => handleDelete(product.id)} className='btn'>Delete</button>
              </div>
            
          </div>
        ))}
      </div>
>>>>>>> origin/main
    </div>
 );
};

export default Admin;
