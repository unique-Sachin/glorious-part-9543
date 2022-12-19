import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import styles from "./cart.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Checkout from "../Checkout/Checkout";

const Cart = ({ open, cartData, closeModal, setDeleteCount }) => {
  const [closeCheckout, setOpenModal] = useState(false);
  const HandleBuyNow = () => {
    setOpenModal(true);
  };
  if (!open) return null;
  const HandleRemoveFromCart = (id) => {
    axios
      .delete(`https://be-fit.onrender.com/cart/${id}`)
      .then((res) => setDeleteCount(res.data));
  };

  const closePayment = () => {
    setOpenModal(false);
  };

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <div className={styles.cartHeading}>
          <MdArrowBackIosNew
            className={styles.cartHeadingIcon}
            onClick={closeModal}
          />
          <h2>Your Cart</h2>
        </div>
        <div className={styles.contentContainer}>
          {cartData.map((el) => (
            <div className={styles.content} key={el.id}>
              <AiOutlineClose
                className={styles.closeBtn}
                onClick={() => HandleRemoveFromCart(el.id)}
              />
              <img
                src={el.image}
                alt={el.image}
                width={"110"}
                height={"140"}
                style={{ borderRadius: "1.5rem" }}
              />
              <div>
                <p>{el.category}</p>
                <h2>{el.title}</h2>
                <h2 className={styles.price}>{el.offer_price}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buyBtn}>
          <button onClick={HandleBuyNow}>BUY NOW</button>
        </div>
      </div>
      <Checkout
        open={closeCheckout}
        singleData={cartData}
        closeModal={closePayment}
      />
    </div>
  );
};

export default Cart;
