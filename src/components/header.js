import React from 'react';
import { FaCog, FaUserCircle } from 'react-icons/fa';
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <div className="header">
      <button className="header-btn"><FaCog /> Settings</button>
      <button className="header-btn"><FaUserCircle /> Sign in</button>
    </div>
  );
};

export default Header;