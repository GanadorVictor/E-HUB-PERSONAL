import React, { useState } from 'react';

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
    <div className='edit-modal'>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={editedProduct.name} onChange={handleChange} />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={editedProduct.price} onChange={handleChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
 );
};

export default EditModal;
