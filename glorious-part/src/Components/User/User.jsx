import React, { useEffect, useState } from "react";
import styles from "./user.module.css";
import { MdArrowBackIosNew } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";

const User = ({ open, closeModal }) => {
  const { logout, user } = useAuth0();
  if (!open) return null;

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
        </div>
        <div className={styles.content}>
          <h2>WELCOME USER</h2>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
        <div className={styles.buyBtn}>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
