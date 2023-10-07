import React from "react";
import styles from "./ProductDisplay.module.css";
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className={styles.productDisplay}>
      <div className={styles.productDisplay_left}>
        <div className={styles.productDisplay_img_list}>
          <img src={product.image} alt="side images" />
          <img src={product.image} alt="side images" />
          <img src={product.image} alt="side images" />
          <img src={product.image} alt="side images" />
        </div>
        <div className={styles.productDisplay_img}>
          <img
            src={product.image}
            alt="main-img"
            className={styles.productDisplay_mainImg}
          />
        </div>
      </div>
      <div className={styles.productDisplay_right}>
        <h1>{product.name}</h1>
        <div className={styles.productDisplay_right_stars}>
          <img src={star_icon} alt="star images" />
          <img src={star_icon} alt="star images" />
          <img src={star_icon} alt="star images" />
          <img src={star_icon} alt="star images" />
          <img src={start_dull_icon} alt="stardull images" />
          <p>(122)</p>
        </div>
        <div className={styles.productDisplay_right_prices}>
          <div className={styles.productDisplay_right_price_old}>
            ${product.old_price}
          </div>
          <div className={styles.productDisplay_right_price_new}>
            ${product.new_price}
          </div>
        </div>
        <div className={styles.productDisplay_right_description}>
          ightweight fabric is considered to be chiffon, organza, linen, mesh,
          lace, silk, cotton, felt, and neoprene. While medium-weight fabrics
          are velvet, nylon, taffeta, oxford, and sateen. Other fabrics like
          denim
        </div>
        <div className={styles.productDisplay_right_size}>
          <h1>Select Size</h1>
          <div className={styles.productDisplay_right_sizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button>ADD TO CART</button>
        <p className={styles.productDisplay_right_category}>
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className={styles.productDisplay_right_category}>
          <span>Tags : </span>Model, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
