import React, {useState}  from 'react';
import { Link,useNavigate, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import { Route } from 'react-router-dom';
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoToggle } from "react-icons/io5";
import { Sidebar } from './Sidebar';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import login from './logo.png';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  
  return (
    <>
    <IconContext.Provider value={{color: 'black'}}>
      <div>
      <div className="navbar">
        <ul><Link to='#' className='menu-bars'>
          <IoToggle onClick={showSidebar} size={70}/>
        </Link>
       </ul>
      
      <ul>
        <li>
          <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
          BudgetMunch
          </Link>
        </li>
      </ul>
      <Link to="/">
      <img src={login} alt='logo'/>
      </Link>



      </div>

      {/*navbar sidebar*/}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className='menu-bars'>
                <IoMdClose size={50}/>
            </Link>
          </li>
          {Sidebar.map((item, index) =>{
            return(<li key={index} className={item.cName}>
              <Link to={item.path}>
              {item.icon}
              <span>{item.title} </span>
              </Link>
            </li>
            )
          })}
          </ul>
        </nav>  
    </div>
    </IconContext.Provider>
  </>
  )
}