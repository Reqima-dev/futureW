import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./header.css";
import iconMenu from "../../images/icon-menu.svg";
import iconCloseMenu from "../../images/icon-menu-close.svg";

const Header = ( {onToggle} ) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onToggle(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className={isMenuOpen ? "nav show" : "nav"}>
        <div className="menu">
          <a href="#" rel="noopener noreferrer">
            Home
          </a>
          <a href="#" rel="noopener noreferrer">
            New
          </a>
          <a href="#" rel="noopener noreferrer">
            Popular
          </a>
          <a href="#" rel="noopener noreferrer">
            Trending
          </a>
          <a href="#" rel="noopener noreferrer">
            Categories
          </a>
        </div>
      </nav>

      <span className="openMenu" onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <img src={iconCloseMenu} alt="" />
        ) : (
          <img src={iconMenu} alt="" />
        )}
      </span>
    </header>
  );
};

export default Header;
