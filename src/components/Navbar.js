import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/randomcharacters">
        <li>Random Character</li>
      </Link>
      <Link to="/breakingbadepisodes">
        <li>Breaking Bad Episodes</li>
      </Link>
    </div>
  )
}

export default Navbar
