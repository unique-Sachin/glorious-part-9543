import React, { useState } from "react";
import styles from "./singleproduct.module.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Checkout from "../../pages/Checkout/Checkout";
import { useAuth0 } from "@auth0/auth0-react";

const SingleProduct = ({
  open,
  singleData,
  closeModal,
  setCartState,
  cartState,
}) => {
  const [closeCheckout, setOpenModal] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  if (!open) return null;
  const {
    image,
    title,
    category,
    validity,
    offer_price,
    original_price,
    discount,
    id,
  } = singleData;

  const HandleAddCart = () => {
    if (isAuthenticated) {
      alert("Item has been added to Cart");
      axios
        .post(`https://be-fit.onrender.com/cart`, {
          ...singleData,
        })
        .then((res) => setCartState(cartState + 1));
      closeModal();
    } else {
      alert("Login First to Continue Shopping");
      loginWithRedirect();
    }
  };

  const HandleBuyNow = () => {
    if (isAuthenticated) {
      setOpenModal(true);
    } else {
      alert("Login First to Continue Shopping");
      loginWithRedirect();
    }
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
        <img src={image} alt={image} width={"300"} height={"400"} />
        <div className={styles.modalRight}>
          <AiOutlineClose onClick={closeModal} className={styles.closebtn} />
          <div className={styles.content}>
            <p>{category}</p>
            <h2>{title}</h2>
            <div className={styles.product_details}>
              <h2>{offer_price}</h2>
              <p>{original_price}</p>
              <span>{discount}</span>
            </div>
            <p>
              Every time you workout, give it your all. The versatility of this
              performance tee will make it the perfect workout companion. The
              moisture-absorbing FlyDry fabric keeps your body dry at all times.
              With its sporty graphic design, the tee exudes authenticity.
            </p>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={HandleAddCart} className={styles.btnAdd}>
              ADD TO CART
            </button>
            <button onClick={HandleBuyNow} className={styles.btnBuy}>
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <Checkout
        open={closeCheckout}
        singleData={singleData}
        closeModal={closePayment}
      />
    </div>
  );
};

export default SingleProduct;
