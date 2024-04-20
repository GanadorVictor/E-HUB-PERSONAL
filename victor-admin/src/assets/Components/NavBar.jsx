import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

function AdminNavbar() {
    
    const handleLogout = () => {
        
    };

    return (
        <div className="admin-navbar">
            <div className="nav-text">
                <h1>E-Hub</h1>
            </div>

            <div className="nav-links-right">
                
                <NavLink className="nav-link" to='/home'>Home</NavLink>

                <NavLink className="nav-link orders" to="/orders">Orders</NavLink>

                <button className="nav-link btn"onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default AdminNavbar;
