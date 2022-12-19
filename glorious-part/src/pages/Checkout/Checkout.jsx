import React, { useState } from "react";
import styles from "./Checkout.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Payment from "../Payment/Payment";

const Checkout = ({ open, singleData, closeModal }) => {
  const [openChackout, setOpenCheckout] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    mobile: "",
    name: "",
    pin: "",
    address: "",
  });

  if (!open) return null;

  const HandlePayment = () => {
    if (
      credentials.email ||
      credentials.mobile ||
      credentials.name ||
      credentials.pin ||
      credentials.address == ""
    ) {
      alert("Please fill all mandatory details");
    } else {
      setOpenCheckout(true);
    }
  };

  const closePayment = () => {
    setOpenCheckout(false);
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
            <h2>Enter Shipping Details</h2>
            <form action="submit">
              <input
                onChange={(e) =>
                  setCredentials({
                    name: e.target.value,
                  })
                }
                value={credentials.name}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={(e) =>
                  setCredentials({
                    mobile: e.target.value,
                  })
                }
                value={credentials.mobile}
                type="text"
                placeholder="Mobile Number"
              />
              <input
                onChange={(e) =>
                  setCredentials({
                    email: e.target.value,
                  })
                }
                value={credentials.email}
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) =>
                  setCredentials({
                    pin: e.target.value,
                  })
                }
                value={credentials.pin}
                type="text"
                placeholder="Pincode"
              />
              <input
                onChange={(e) =>
                  setCredentials({
                    address: e.target.value,
                  })
                }
                value={credentials.address}
                type="text"
                placeholder="Address"
              />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
            </form>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={HandlePayment} className={styles.btnBuy}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      <Payment
        open={openChackout}
        singleData={credentials.mobile}
        closeModal={closePayment}
      />
    </div>
  );
};

export default Checkout;
