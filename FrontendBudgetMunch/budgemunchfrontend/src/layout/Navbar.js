import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import login from './logo.png'; // Your logo image

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  // On mount, check if the user is logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);
//Log out function
  const handleLoginLogout = () => {
    if (isLoggedIn) {
      // Logout logic
      localStorage.removeItem('user');
      setIsLoggedIn(false);  // Update state
      navigate('/about-us');  // Redirect to About Us page after logout
    } else {
      // Login logic (toggle state)
      setIsLoggedIn(true);
      localStorage.setItem('user', 'loggedIn');
    }
  };
//display 
  return (
    <IconContext.Provider value={{ color: 'black' }}>
      <div>
        <div className="navbar">
          {/* Toggle Sidebar Icon */}
          <ul>
            <Link to="#" className="menu-bars">
              <IoMenu onClick={showSidebar} size={70} />
            </Link>
          </ul>

          {/* Logo and Website Name */}
          <ul className="navbar-center">
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                BudgetMunch
              </Link>
              <Link to="/"><img src={login} alt="logo" className="logo" /></Link>
            </li>
          </ul>

          {/* Conditional Rendering for Login/Logout Button */}
          <ul>
            <li>
              {isLoggedIn ? (
                // If logged in, show Logout button
                <button className="btn btn-warning" onClick={handleLoginLogout}>
                  Logout
                </button>
              ) : (
                // If not logged in, show Login button
                <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                  <button className="btn btn-warning">
                    Login
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>

        {/* Sidebar Menu */}
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        
          <ul className="nav-menu-items" onClick={showSidebar}> 
            
            <li className="navbar-toggle">
              
              <Link to="#" style={{ textDecoration: 'none', color: 'black' }} className="menu-bars">
                <IoMdClose size={50} />
              </Link>
            
            </li>
            <Sidebar isLoggedIn={isLoggedIn} />
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}