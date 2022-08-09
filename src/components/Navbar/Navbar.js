import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../logo.svg";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" />
      <div className={styles.links}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
