import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  return (
    <header>
      <div className="header-wrap">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Animal">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/Birds">Birds</NavLink>
            </li>

            <li>
              <NavLink to="/About">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
