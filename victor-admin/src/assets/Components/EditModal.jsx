import React, { useState } from 'react';
import './EditModal.css'
const EditModal = ({ product, handleSaveEdit }) => {
 const [editedProduct, setEditedProduct] = useState(product);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveEdit(editedProduct);
 };

 return (
    <div className='edit-modal-overlay'>
      <div className='edit-modal'>
        <form onSubmit={handleSubmit} className="edit-product-form">
          <label>
            Name:
            <input type="text" name="name" value={editedProduct.name} onChange={handleChange} className="input-field" />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={editedProduct.price} onChange={handleChange} className="input-field" />
          </label>
          <label>
            Image URL:
            <input type="text" name="imageUrl" value={editedProduct.imageUrl} onChange={handleChange} className="input-field" />
          </label>
          <button type="submit" className="btn">Save</button>
        </form>
      </div>
    </div>
 );
};

export default EditModal;
