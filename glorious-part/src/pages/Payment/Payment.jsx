import React, { useState } from "react";
import styles from "./Payment.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { border } from "@chakra-ui/react";

const Payment = ({
  open,
  singleData,
  closeModal,
  closePrevModal,
  closePrevPrevModal,
}) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    card: "",
    expiry: "",
    cvv: "",
    otp: "",
  });
  if (!open) return null;

  const HandlePayment = () => {
    if (
      credentials.name ||
      credentials.card ||
      credentials.expiry ||
      credentials.cvv ||
      credentials.otp == ""
    ) {
      alert("Please fill all mandatory details");
    } else {
      alert("You have successfully completed payment process");
      closeModal();
      closePrevModal();
      closePrevPrevModal();
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <img src="https://img.icons8.com/color/48/null/visa.png" />
              <img src="https://img.icons8.com/color/48/null/mastercard-logo.png" />
              <img src="https://img.icons8.com/color/48/null/rupay.png" />
              <img src="https://img.icons8.com/fluency/48/null/amex.png" />
            </div>
            <input
              onChange={(e) =>
                setCredentials({
                  name: e.target.value,
                })
              }
              value={credentials.name}
              type="text"
              placeholder="Cardholder Name"
            />
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            </div>
            <h2>
              Please enter the code we just sent to{" "}
              <span
                style={{
                  color: "var(--color-logo)",
                  textDecoration: "underline",
                }}
              >
                {singleData}
              </span>{" "}
              to proceed
            </h2>
            <input
              onChange={(e) =>
                setCredentials({
                  otp: e.target.value,
                })
              }
              value={credentials.otp}
              type="password"
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
