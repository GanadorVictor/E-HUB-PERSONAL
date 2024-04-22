import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ProductList from './Admin';
import AdminNavbar from './NavBar'; 
import './index.css';
import Admin from "./Admin"
import Footer from './Footer';
import SearchBar from './SearchBar';
import EditModal from './EditModal';


function App() {
  return (
    
    <Router>
      
      <AdminNavbar /> 
      
      <Routes> 
        <Route path="/" element={<Admin />} /><Route path="/EditModal" element={<EditModal />} />
      </Routes>
     
      
      <Footer/>
      
    </Router>
    
  );
}

export default App;
