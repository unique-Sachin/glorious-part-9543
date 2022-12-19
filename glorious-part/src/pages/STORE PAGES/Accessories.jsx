import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../Axios";
import styles from "./tshirt.module.css";
import { BiRightArrow } from "react-icons/bi";
import Loader from "../../Components/LOADER/Loader";


const Accessories = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

  const getdata = () => {
    setLoading(true)
    axios.get("/accessories").then((res) => setdata(res.data));
  };
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  useEffect(() => {
    getdata();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <div className={styles.mainContainer}>
      <div className={styles.headings}>
        <NavLink to={"/store"}>
          <p>Store</p>
        </NavLink>
        <BiRightArrow />
        <p>assesories</p>
      </div>
      <h1>ASSESSORIES</h1>

      <div className={styles.container}>
        {data.map((el, id) => (
          <div key={id} className={styles.product_container}>
            <img src={el.image} alt={el.image} width={"300"} height={"400"} />
            <p>{el.category}</p>
            <h2>{el.title}</h2>
            <div className={styles.product_details}>
              <h2>{el.offer_price}</h2>
              <p>{el.original_price}</p>
              <span>{el.discount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
