import React from 'react';
import EditModal from './EditModal';

const ProductList = ({ products, searchTerm, handleEdit, handleDelete }) => {
 return (
    <div className='product-box'>
      <div className='product-list'>
        {products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
          <div key={product.id} style={{ marginBottom: '20px' }}>
            <div className='product-container'>
              <h2>{product.name}</h2>
              <img src={product.imageUrl} alt={product.name} className='product-image' />
              <p>Price: ${product.price.toFixed(2)}</p>
              <button onClick={() => handleEdit(product)} className='btn'>Edit</button>
              <button onClick={() => handleDelete(product.id)} className='btn'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
};

export default ProductList;
