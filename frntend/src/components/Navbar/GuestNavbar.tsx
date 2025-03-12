import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./GuestNavbar.css";
import logo from "../../assets/react.svg";

const GuestNavbar: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div className="navbar">
      <div className="nav-inner">
        <div className="left-nav">
          <div className="logo-bar">
            <img src={logo} alt="Logo" />
            <p>GeMorph</p>
          </div>
        </div>

        <div className="right-nav">
          <div className="nav-links">
            <Link to="/case-submission">About</Link>
            <Link to="#">Services</Link>
            <Link to="#">Contact</Link>
          </div>

          {isAuthenticated ? (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          ) : (
            <button className="login-btn" onClick={login}>
              Login
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestNavbar;
