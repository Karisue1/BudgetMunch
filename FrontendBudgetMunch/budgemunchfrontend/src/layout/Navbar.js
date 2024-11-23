import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import login from './logo.png'; // Your logo image

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
              <Link to="/"><img src={login} alt="logo" className="logo"/>
                
              </Link>
            </li>
          </ul>

          {/* Login Button */}
          <ul>
            <li>
              <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                <button className="btn btn-warning">Login</button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Sidebar Navigation Menu */}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <IoMdClose size={50} />
              </Link>
            </li>
            {Sidebar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </IconContext.Provider>
  );
}

