import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from 'react-icons/fa'; 
import { IoHomeSharp } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import './Navbar.css';

export const Sidebar = ({ isLoggedIn }) => {
    const navigate = useNavigate();
  
    // Logout handler
    const handleLogout = () => {
      localStorage.removeItem('user'); // Clear user data
      navigate('/about-us'); // Redirect to "About Us" page
    };
  
    // Menu items for the sidebar
    const menuItems = [
      { title: 'Home', path: '/home', icon: <IoHomeSharp size={30} />, show: isLoggedIn },  // Only show if logged in
      { title: 'Profile', path: '/profile', icon: <FaRegUserCircle size={30} />, show: isLoggedIn },
      { title: 'About Us', path: '/about-us', icon: <IoBookOutline size={30} />, show: true },
      { title: 'Log Out', action: handleLogout, icon: <FaSignOutAlt size={30} />, show: isLoggedIn },
    ];
  
    return (
      <div className="sidebar">
        <ul className="nav-menu-items">
          {menuItems.map((item, index) => (
            item.show && (
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
            )
          ))}
        </ul>
      </div>
    );
  };