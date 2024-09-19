import React from 'react';
import { Link,useNavigate, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import { Route } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ fontFamily: 'Leckerli One' }}>
  <div className="container-fluid">
  <Link className='navbar-logo' to='/'>  <img src="/logo small.png" alt="BudgetMunch Logo" width="100" height="100" className="d-inline-block align-text-top" /></Link>
     <Link className='navbar-budgetmunch' to='/'> <a className="navbar-brand" style={{ fontSize: '75px'}} href="#">BudgetMunch</a></Link>
        <Link className= "btn navbar-toggler" to="/favorites"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </Link>
        <Link className="btn btn-outline-light" to="/login">Login</Link>       
      </div>
    </nav>
  </div>
  )
}