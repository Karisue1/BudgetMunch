import React, {useState}  from 'react';
import { Link,useNavigate, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import { Route } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { IoLogInSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import { FaSignOutAlt } from 'react-icons/fa'; 
import { IoBookOutline } from "react-icons/io5";
import './Navbar.css';

export const Sidebar = () => {
    const navigate = useNavigate();

    // Logout handler
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data
        navigate('/login'); // Redirect to login
    };

    // Menu items for the sidebar
    const menuItems = [
        { title: 'Home', path: '/', icon: <IoHomeSharp size={30} /> },
        { title: 'Profile', path: '/profile', icon: <FaRegUserCircle size={30} /> },
        { title: 'Favorites', path: '/favorites', icon: <FaHeart size={30} /> },
        { title: 'About Us', path: '/about-us', icon: <IoBookOutline size={30} /> },
        { title: 'Log Out', action: handleLogout, icon: <FaSignOutAlt size={30} /> },
    ];

    return (
        <div className="sidebar">
            <ul className="nav-menu-items">
                {menuItems.map((item, index) => (
                    <li key={index} className="nav-text">
                        {item.action ? (
                            // For items with an action (e.g., Log Out)
                            <button className="sidebar-button" onClick={item.action}>
                                {item.icon}
                                <span>{item.title}</span>
                            </button>
                        ) : (
                            // For items with a path
                            <Link to={item.path} className="sidebar-link">
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};