import React, { useState } from "react";
import styles from "./Home.module.css";
import hero_video from "../../assets/hero_video.webm";
import { RxDoubleArrowDown } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../../Components/LOADER/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  AOS.init();
  const card_type2_images1 = [
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1550259979-ed79b48d2a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=468&q=80",
    "https://images.unsplash.com/photo-1526888935184-a82d2a4b7e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];
  const card_type2_images2 = [
    "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
  return loading ? (
    <Loader />
  ) : (
    <div className={styles.container}>
      <div className={styles.hero_container}>
        <video src={hero_video} autoPlay muted loop>
          your browser
        </video>
        <div className={styles.hero_content}>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_500,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/we-are-cult-logo/text-only-v2.png"
            alt="cult"
          />
          <h1>Raise your fitness routine to the professional standards</h1>
          <button>EXPLORE BEPASS</button>
          <RxDoubleArrowDown className={styles.hero_icons} />
        </div>
      </div>
      <div className={styles.plans_container}>
        <div>
          <h2>bepass</h2>
          <span style={{ color: "#ffd583" }}>ELITE</span>
          <p>
            Unlimited access to group classes, all gyms and at-home workouts
          </p>
        </div>
        <div>
          <h2>bepass</h2>
          <span style={{ color: "#d6d6d9" }}>PRO</span>
          <p>Unlimited access to all PRO gyms and at-home workouts</p>
        </div>
        <div>
          <h2>bepass</h2>
          <span style={{ color: "#a162c7" }}>HOME</span>
          <p>Unlimited access to at- home workouts with calorie tracking</p>
        </div>
      </div>
      <div className={styles.card_type1_container}>
        <img
          data-aos="fade-down-right"
          data-aos-duration="800"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png"
          alt=""
        />
        <img
          data-aos="fade-down-left"
          data-aos-duration="800"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_2.png"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          data-aos-duration="800"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png"
          alt=""
        />
        <img
          data-aos="fade-up-left"
          data-aos-duration="800"
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_1,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_4.png"
          alt=""
        />

        <h1
          className={styles.card_type1_heading}
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="250"
        >
          One membership for all your fitness needs
        </h1>
      </div>
      <div className={styles.card_type2_container}>
        <div data-aos="fade-up">
          {card_type2_images1.map((el, id) => (
            <img key={id} src={el} alt={id} />
          ))}
        </div>
        <div data-aos="fade-up">
          {card_type2_images2.map((el, id) => (
            <img key={id} src={el} alt={id} />
          ))}
        </div>
        <h1
          className={styles.card_type1_heading}
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="250"
        >
          Fun, trainer led group classes
        </h1>
      </div>
      <div className={styles.bepass_container}>
        <h1 className={styles.bepass_heading}>bepass</h1>
        <button>LEARN MORE</button>
        <div className={styles.bepass_cards}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.bepass_plans}>
              <h2>bepass</h2>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_107,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cult-pass-elite-partial.png"
                alt=""
              />
            </div>
            <h2>Unlimited access to</h2>
            <ul>
              <li>At-center group classes</li>
              <li>All ELITE & PRO gyms</li>
              <li>At-home live workouts</li>
            </ul>
            <div className={styles.bepass_plans_btn}>
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.bepass_plans}>
              <h2>bepass</h2>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_78,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-pro-partial.png"
                alt=""
              />
            </div>
            <h2>Unlimited access to</h2>
            <ul>
              <li>All PRO gyms</li>
              <li>2 Sessions/m at ELITE gyms</li>
              <li>At-home live workouts</li>
            </ul>
            <div className={styles.bepass_plans_btn}>
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552848031-326ec03fe2ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className={styles.bepass_plans}>
              <h2>bepass</h2>
              <img
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_112,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cult-pass-home-partial-1.svg"
                alt=""
              />
            </div>
            <h2>Unlimited access to</h2>
            <ul>
              <li>At home workouts</li>
              <li>Celebrity Workouts</li>
              <li>Goal-based Workouts </li>
            </ul>
            <div className={styles.bepass_plans_btn}>
              <button>TRY FOR FREE</button>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
