import React, { useState, useEffect } from "react";
import "../style/navbar.scss";
import hamburger from "../asset/icons/icon-hamburger.svg";
import closeIcon from "../asset/icons/icon-close.svg";
import Logo from "./tools/logo";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navItemsClass, setNavItemsClass] = useState(false);
  const [navBarClass, setNavBarClass] = useState(false);
  const [navIcon, setNavIcon] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const handleMobileNav = () => {
    setNavItemsClass(!navItemsClass);
    setNavIcon(!navIcon);
    setOverlay(!overlay);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setNavBarClass(true);
      } else {
        setNavBarClass(false);
      }
    });
  }, []);

  return (
    <React.Fragment>
      <div className={navBarClass ? "navbar fixed shadow" : "navbar"}>
        <Link to="/">
          <Logo fill={"black"} />
        </Link>
        <div className={navItemsClass ? "nav-items show" : "nav-items"}>
          <NavLink
            className="nav-item"
            activeClassName="active-link"
            to="portfolio"
          >
            <p>Portfolio</p>
          </NavLink>

          <NavLink
            className="nav-item"
            activeClassName="active-link"
            to="about"
          >
            <p>About Us</p>
          </NavLink>

          <NavLink
            className="nav-item"
            activeClassName="active-link"
            to="contact"
          >
            <p>Contact</p>
          </NavLink>
        </div>
        <button onClick={handleMobileNav} className="burger-icon">
          <img src={navIcon ? closeIcon : hamburger} alt="burger-icon" />
        </button>
      </div>
      {overlay && <div className="overlay"></div>}
    </React.Fragment>
  );
};

export default Navbar;
