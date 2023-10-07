import React from "react";
import styles from "./Offers.module.css";
import exclucive_image from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className={styles.offers}>
      <div className={styles.offers_left}>
        <h1 className={styles.heading}>Exclusive</h1>
        <p className={styles.para}>Offers For You</p>
        <p className={styles.para}>ONLY ON THE BEST SELLER PRODUCTS</p>
        <button className={styles.button}>Check Now</button>
      </div>
      <div className={styles.offers_right}>
        <img src={exclucive_image} alt="exclusive ima" />
      </div>
    </div>
  );
};

export default Offers;
