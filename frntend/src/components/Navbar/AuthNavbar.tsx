import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./AuthNavbar.css";
import logo from "../../assets/react.svg";
import searchIcon from "../../assets/search.svg";
import bellIcon from "../../assets/bell.svg";

const AuthNavbar: React.FC = () => {
  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            <a href="/dashboard">Home</a>
            <a href="/cases">Cases</a>
            <a href="/reports">Reports</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Icons Section */}
          <div className="icons-container">
            <div className="icon-wrapper">
              <img src={searchIcon} alt="Search" className="nav-icon" />
            </div>
            <div className="icon-wrapper">
              <img src={bellIcon} alt="Notifications" className="nav-icon" />
            </div>
          </div>
          {/* Dropdown Button */}
          <div
            className="dropdown-menu"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="profile-circle"></div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthNavbar;
