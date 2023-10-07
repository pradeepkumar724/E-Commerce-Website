import React from "react";
import styles from "./Footer.module.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_logo}>
        <img src={footer_logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={styles.footer_links}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.footer_social_icon}>
        <div className={styles.footer_icons_container}>
          <img src={instagram_icon} alt="instagram" />
        </div>
        <div className={styles.footer_icons_container}>
          <img src={pinterest_icon} alt="pinterest" />
        </div>
        <div className={styles.footer_icons_container}>
          <img src={whatsapp_icon} alt="whatsapp" />
        </div>
      </div>
      <div className={styles.footer_copyright}>
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
