import React from "react";
import BurgerLogo from "../assets/burgerlogo.JPG";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={BurgerLogo} alt="Burger Logo" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
