import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{ fontFamily: 'Playwrite AU NSW, sans-serif' }}>
  <div className="container-fluid">
      <a className="navbar-brand" href="#">BudgetHelloMunch</a>
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