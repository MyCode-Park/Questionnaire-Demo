import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";
import "../css/nav.css";

export default function Navbar() {
  return (
    <div className="navbar-box">
      <h2>Employee Details</h2>
      <div className="route">
        <div className="create">
          <NavLink className="nav-link" to="/create">
            Create Record
          </NavLink>
        </div>
      </div>
    </div>
  );
}
