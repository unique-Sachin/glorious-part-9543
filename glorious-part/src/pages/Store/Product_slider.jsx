import React, { useState } from "react";
import styles from "./Product_slider.module.css";

const Product_slider = ({
  image,
  newid,
  data,
  title,
  category,
  validity,
  offer_price,
  original_price,
  discount,
  setsingleData,
  setOpenModal,
}) => {
  const handleClick = () => {
    data.filter((el, id) => {
      if (id === newid) {
        setsingleData(el);
        setOpenModal(true);
      }
    });
  };
  return (
    <div onClick={handleClick} className={styles.container}>
      <img src={image} alt={image} width={"300"} height={"400"} />
      <p>{category}</p>
      <h2>{title}</h2>
      <div className={styles.product_details}>
        <h2>{offer_price}</h2>
        <p>{original_price}</p>
        <span>{discount}</span>
      </div>
    </div>
  );
};

export default Product_slider;
