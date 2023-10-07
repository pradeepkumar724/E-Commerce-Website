import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className={styles.navbar}>
      <div className={styles.navaLogo}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.navMenu}>
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Shop{menu === "shop" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
            Men{menu === "mens" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/womens"
          >
            Women{menu === "womens" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="./kids"
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className={styles.nav_Login_Cart}>
        <Link to="./login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="cart_icon" />
        </Link>

        <div className={styles.nav_cart_count}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
