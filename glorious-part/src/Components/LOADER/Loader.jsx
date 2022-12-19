import React from "react";
import styles from "./Loader.module.css";
import LOGO1 from "../../assets/logo3.png";

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <img src={LOGO1} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
