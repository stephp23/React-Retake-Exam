import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <header>
        <h1>The Mobile Lab</h1>
        <ul>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/randomcharacters">
          <li>Random Character</li>
        </Link>
        <Link style={navStyle} to="/deathcount">
          <li>Character Death Count</li>
          </Link>
        </ul>
        </header>
    </nav>
  )
}

export default Navbar
