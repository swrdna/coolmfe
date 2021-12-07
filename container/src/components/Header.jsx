import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">MFE Container</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/signin" className="btn btn-outline-primary">Sign In</Link>
            </li>
            <li className="nav-item ms-2">
              <Link to="/signup" className="btn btn-primary">Become a Member</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
