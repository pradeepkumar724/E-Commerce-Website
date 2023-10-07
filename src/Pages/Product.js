import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../Components/BreadCrums/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId));
  console.log(product);

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
