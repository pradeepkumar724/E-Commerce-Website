import React from "react";
import styles from "./CSS/LoginSignup.module.css";

const LoginSignup = () => {
  return (
    <div className={styles.loginsignup}>
      <div className={styles.loginsignup_container}>
        <h1>Sign up</h1>
        <div className={styles.loginsignup_fields}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={styles.loginsignup_login}>
          Already have an acoount? <span>Log in</span>
        </p>
        <div className={styles.loginsignup_agree}>
          <input type="checkbox" name="" id="" />
          <p>By Continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
