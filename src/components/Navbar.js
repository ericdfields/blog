import React from "react";
import { Link } from "gatsby";

export const Navbar = () => (
  <nav
    className="navbar is-transparent"
    role="navigation"
    aria-label="main-navigation"
  >
    <div className="container">
      <div className="navbar-brand flex justify-between items-center">
        <h1 className="text-4xl font-medium">
          <Link to="/">Eric Brookfield</Link>
        </h1>
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
    </div>
  </nav>
);
