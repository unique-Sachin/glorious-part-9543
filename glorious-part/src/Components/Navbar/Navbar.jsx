import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import LOGO1 from "../../assets/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Cart from "../../pages/Cart/Cart";
import axios from "../../Axios";

export const State = () => {};

const Navbar = ({ cartState }) => {
  const navigate = useNavigate();
  const [cartData, setcartData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [deleteCount, setDeleteCount] = useState("");
  const handle_gotoHome = () => {
    navigate("/");
  };
  const getCartData = () => {
    axios.get(`/cart`).then((res) => setcartData(res.data));
  };

  useEffect(() => {
    getCartData();
  }, [cartState, deleteCount]);

  const HandleGoCart = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img
          onClick={handle_gotoHome}
          src={LOGO1}
          alt="logo1"
          draggable="false"
        />
      </div>
      <div className={styles.menubar_container}>
        <NavLink to="/fitness">
          <h2>FITNESS</h2>
        </NavLink>

        <NavLink to="/care">
          <h2>CARE</h2>
        </NavLink>
        <NavLink to="/mind">
          <h2>MIND</h2>
        </NavLink>
        <NavLink to="/store">
          <h2>STORE</h2>
        </NavLink>
      </div>
      <div className={styles.account_container}>
        <button>GET APP</button>
        <AiOutlineUser className={styles.navbar_icons} />
        <FaOpencart onClick={HandleGoCart} className={styles.navbar_icons} />
      </div>
      <Cart
        open={openModal}
        cartData={cartData}
        closeModal={closeModal}
        setDeleteCount={setDeleteCount}
        // deleteCount={deleteCount}
      />
    </div>
  );
};

export default Navbar;
