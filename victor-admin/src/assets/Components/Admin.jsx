import React, { useState, useEffect } from 'react';
import './App.css';
import EditModal from './EditModal';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);

  useEffect(() => {
    // Fetch data from db.json
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  // Function to handle editing a product
  const handleEdit = (productId) => {
    setEditProductId(productId);
  };

  // Function to handle deleting a product
  const handleDelete = (productId) => {
    // Filter out the deleted product
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  // Function to save edited product
  const handleSaveEdit = (productId, updatedProduct) => {
    // Update the product in the state
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    setEditProductId(null); // Reset edit state
  };

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
    </div>
  );
};

export default ProductList;
