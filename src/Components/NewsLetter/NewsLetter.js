import React from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay update</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
