import React from "react";
import styles from "./DescriptionBox.module.css";

const DescriptionBox = () => {
  return (
    <div className={styles.descriptionbox}>
      <div className={styles.descriptionbox_navigatior}>
        <div className={styles.descriptionbox_nav_box}>Description</div>
        <div className={styles.descriptionbox_nav_bbox_fade}>Reviews (122)</div>
      </div>
      <div className={styles.descriptionbox_description}>
        <p>
          Lightweight fabric is considered to be chiffon, organza, linen, mesh,
          lace, silk, cotton, felt, and neoprene. While medium-weight fabrics
          are velvet, nylon, taffeta, oxford, and sateen. Other fabrics like
          denim, canvas, suede, wool, flannel, and tweed fall under the category
          of heavyweight fabrics.
        </p>
        <p>
          A website that allows people to buy and sell physical goods, services,
          and digital products over the internet rather than at a
          brick-and-mortar location. Through an e-commerce website, a business
          can process orders, accept payments, manage shipping and logistics,
          and provide customer service.13
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
