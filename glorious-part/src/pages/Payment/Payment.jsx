import React, { useState } from "react";
import styles from "./Payment.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Payment = ({ open, singleData, closeModal }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    card: "",
    expiry: "",
    cvv: "",
    otp: "",
  });
  if (!open) return null;

  const HandlePayment = () => {
    if (
      credentials.card ||
      credentials.expiry ||
      credentials.cvv ||
      credentials.otp == ""
    ) {
      alert("Please fill all mandatory details");
    } else {
      alert("You have successfully completed payment process");
      closeModal();
      navigate("/");
    }
  };

  return (
    <div onClick={closeModal} className={styles.overlay}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.modalContainer}
      >
        <AiOutlineClose onClick={closeModal} className={styles.closebtn} />
        <div className={styles.modalRight}>
          <div className={styles.Content}>
            <h2>Enter Card Details</h2>
            <input
              onChange={(e) =>
                setCredentials({
                  card: e.target.value,
                })
              }
              value={credentials.card}
              type="text"
              placeholder="Card Number"
            />
            <input
              onChange={(e) =>
                setCredentials({
                  expiry: e.target.value,
                })
              }
              value={credentials.expiry}
              type="text"
              placeholder="Expiry Date"
            />
            <input
              onChange={(e) =>
                setCredentials({
                  cvv: e.target.value,
                })
              }
              value={credentials.cvv}
              type="text"
              placeholder="CVV"
            />
            <h2>
              Please enter the code we just sent to {singleData} to proceed
            </h2>
            <input
              onChange={(e) =>
                setCredentials({
                  otp: e.target.value,
                })
              }
              value={credentials.otp}
              type="text"
              placeholder="Enter OTP"
            />
          </div>
          <div className={styles.btnContainer}>
            <button onClick={HandlePayment} className={styles.btnBuy}>
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
