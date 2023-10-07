import React from "react";
import styles from "./BreadCrum.module.css";
import Arrow from "../Assets/breadcrum_arrow.png";

const BreadCrum = (props) => {
  const { product } = props;
  //   console.log(product);
  return (
    <div className={styles.breadCrum}>
      HOME <img src={Arrow} alt="arrow" /> SHOP <img src={Arrow} alt="arrow" />
      {product.category}
      <img src={Arrow} alt="arrow" /> {product.name}
    </div>
  );
};

export default BreadCrum;
