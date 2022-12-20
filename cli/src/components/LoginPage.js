import React from "react";
import { NavLink } from "react-router-dom";
import "../css/loginpage.css";

function LoginPage() {
  return (
    <div>
      <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form">
          <p>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <i className="validation"></i>
          </p>
          <p>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required
            />
            <i className="validation"></i>
          </p>
          <p>
            <input type="submit" id="login" value="Login" />
          </p>
        </form>

        <div id="create-account-wrap">
          <p>
            <NavLink to="/createAccount">Not a member? Create Account </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
