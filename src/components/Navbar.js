import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <h1>The Lab</h1>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/randomcharacters">
          <li>Random Character</li>
        </Link>
        <Link to="/breakingbadepisodes">
          <li>Breaking Bad Episodes</li>
          </Link>
        </header>
    </div>
  )
}

export default Navbar
