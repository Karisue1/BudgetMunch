import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';  // Import Link from React Router if using React Router
import './Card.css';

export const Card = ({ title, description }) => {
  return (
    <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    {/* "Login" button */}
    <Link to="/login" className="card-button">
      Get Started
    </Link>
  </div>
);
};

export default Card;

// Hello
