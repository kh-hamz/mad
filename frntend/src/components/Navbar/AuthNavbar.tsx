import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./AuthNavbar.css";
import logo from "../../assets/react.svg";

const AuthNavbar: React.FC = () => {
  const { logout } = useAuth();

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
            <a href="/dashboard">Dashboard</a>
            <a href="/profile">Profile</a>
            <a href="/settings">Settings</a>
          </div>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
