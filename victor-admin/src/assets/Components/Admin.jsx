import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import EditModal from './EditModal';
import './App.css';

const Admin = () => {
 const [products, setProducts] = useState([]);
 const [searchTerm, setSearchTerm] = useState('');
 const [editingProduct, setEditingProduct] = useState(null);
 const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '' });

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

 const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
 };

 const handleNewProductSubmit = (e) => {
    e.preventDefault();
    const newProductWithId = { ...newProduct, id: products.length + 1 }; // Assuming new products get the next available ID
    setProducts([...products, newProductWithId]);
    setNewProduct({ name: '', price: '', imageUrl: '' }); // Reset the form
 };

 const handleDelete = (productId) => {
    setProducts(products.filter(p => p.id !== productId));
 };

 return (
    <div>
      <SearchBar products={products} searchTerm={searchTerm} handleSearch={handleSearch} />
      <ProductList products={products} searchTerm={searchTerm} handleEdit={handleEdit} handleDelete={handleDelete} />
      {editingProduct && <EditModal product={editingProduct} handleSaveEdit={handleSaveEdit} />}
      <form onSubmit={handleNewProductSubmit} className="add-product-form">
        <label>
          Name:
          <input type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} className="input-field" />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newProduct.price} onChange={handleNewProductChange} className="input-field" />
        </label>
        <label>
          Image URL:
          <input type="text" name="imageUrl" value={newProduct.imageUrl} onChange={handleNewProductChange} className="input-field" />
        </label>
        <button type="submit" className="btn">Add Product</button>
      </form>
    </div>
 );
};

export default Admin;
