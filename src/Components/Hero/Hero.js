import React from "react";
import Handicon from "../Assets/hand_icon.png";
import Arrow from "../Assets/arrow.png";
import HeroImage from "../Assets/hero_image.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h2>NEW ARRIVELS ONLY</h2>
        <div>
          <div className={styles.hero_hand_icon}>
            <p>New</p>
            <img src={Handicon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className={styles.hero_latest_btn}>
          <div>Latest collection</div>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className={styles.hero_rigth}>
        <img src={HeroImage} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
