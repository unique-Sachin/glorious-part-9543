import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import LOGO1 from "../../assets/logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import Cart from "../../pages/Cart/Cart";
import axios from "../../Axios";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../LOADER/Loader";
import User from "../User/User";

const Navbar = ({ cartState }) => {
  const navigate = useNavigate();
  const [cartData, setcartData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openUser, setOpenUser] = useState(false);
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
    if (isAuthenticated) {
      setOpenModal(true);
    } else {
      alert("Login First to Open Cart");
      loginWithRedirect();
    }
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const closeUser = () => {
    setOpenUser(false);
  };

  return isLoading ? (
    <Loader />
  ) : (
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
        {isAuthenticated ? (
          <img
            src={user.picture}
            alt={user.name}
            onClick={() => setOpenUser(true)}
            className={styles.navbar_userimage}
          />
        ) : (
          <AiOutlineUser
            onClick={() => loginWithRedirect()}
            className={styles.navbar_icons}
          />
        )}

        <FaOpencart onClick={HandleGoCart} className={styles.navbar_icons} />
      </div>
      <Cart
        open={openModal}
        cartData={cartData}
        closeModal={closeModal}
        setDeleteCount={setDeleteCount}
      />
      <User
        open={openUser}
        closeModal={closeUser}
      />
    </div>
  );
};

export default Navbar;
