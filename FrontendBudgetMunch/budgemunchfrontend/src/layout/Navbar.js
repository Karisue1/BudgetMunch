import React from 'react';
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ fontFamily: 'Playwrite AU NSW, sans-serif' }}>
  <div className="container-fluid">
    <img src="/Logo.jpg" alt="BudgetMunch Logo" width="100" height="100" className="d-inline-block align-text-top" />
      <a className="navbar-brand" href="#">BudgetMunch</a>
        <button className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <button className="btn btn-outline-light">Add Student</button>
  </div>
</nav>
    </div>
  )
}