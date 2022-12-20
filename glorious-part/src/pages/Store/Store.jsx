import React, { useEffect, useState } from "react";
import styles from "./store.module.css";
import axios from "../../Axios";
import Slider from "react-slick";
import ProductSlider from "./ProductSlider";
import { NavLink } from "react-router-dom";
import SingleProduct from "../../Components/SingleProduct/SingleProduct";
import Loader from "../../Components/LOADER/Loader";

const Store = ({ setCartState, cartState }) => {
  const [tshirt, settshirt] = useState([]);
  const [cycle, setcycle] = useState([]);
  const [spinbikes, setspinbikes] = useState([]);
  const [treadmills, settreadmills] = useState([]);
  const [accessories, setaccessories] = useState([]);
  const [singleData, setsingleData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getdata = () => {
    setLoading(true);
    axios.get(`/t_shirt?_limit=20`).then((res) => settshirt(res.data));
    axios.get(`/cycles?_limit=20`).then((res) => setcycle(res.data));
    axios.get(`/spin_bikes?_limit=20`).then((res) => setspinbikes(res.data));
    axios.get(`/treadmills?_limit=20`).then((res) => settreadmills(res.data));
    axios.get(`/accessories?_limit=20`).then((res) => setaccessories(res.data));
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);
  useEffect(() => {
    getdata();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 3,
  };
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  return loading ? (
    <Loader />
  ) : (
    <div>
      <div className={styles.container}>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>T-SHIRTS</h2>
            <NavLink to={"/tshirt"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings}>
            {tshirt.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={tshirt}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>CYCLES</h2>
            <NavLink to={"/cycles"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings}>
            {cycle.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={cycle}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>SPINBIKES</h2>
            <NavLink to={"/spinbikes"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings}>
            {spinbikes.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={spinbikes}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>TREADMILLS</h2>
            <NavLink to={"/treadmills"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings}>
            {treadmills.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={treadmills}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>ACCESSORIES</h2>
            <NavLink to={"/accessories"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings}>
            {accessories.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={accessories}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <SingleProduct
          open={openModal}
          singleData={singleData}
          closeModal={closeModal}
          setCartState={setCartState}
          cartState={cartState}
        />
      </div>
      <div className={styles.container_mobile}>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>T-SHIRTS</h2>
            <NavLink to={"/tshirt"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings2}>
            {tshirt.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={tshirt}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>CYCLES</h2>
            <NavLink to={"/cycles"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings2}>
            {cycle.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={cycle}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>SPINBIKES</h2>
            <NavLink to={"/spinbikes"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings2}>
            {spinbikes.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={spinbikes}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>TREADMILLS</h2>
            <NavLink to={"/treadmills"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings2}>
            {treadmills.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={treadmills}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.products_container}>
          <div className={styles.category_heading}>
            <h2>ACCESSORIES</h2>
            <NavLink to={"/accessories"}>
              <p>VIEW MORE</p>
            </NavLink>
          </div>
          <Slider {...settings2}>
            {accessories.map((el, id) => (
              <ProductSlider
                key={id}
                image={el.image}
                title={el.title}
                category={el.category}
                validity={el.validity}
                offer_price={el.offer_price}
                original_price={el.original_price}
                discount={el.discount}
                newid={id}
                data={accessories}
                setsingleData={setsingleData}
                setOpenModal={setOpenModal}
              />
            ))}
          </Slider>
        </div>
        <SingleProduct
          open={openModal}
          singleData={singleData}
          closeModal={closeModal}
          setCartState={setCartState}
          cartState={cartState}
        />
      </div>
    </div>

    // for mobile view
  );
};

export default Store;
