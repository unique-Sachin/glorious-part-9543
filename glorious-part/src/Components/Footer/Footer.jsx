import React from "react";
import styles from "./footer.module.css";
import LOGO1 from "../../assets/logo2.png";

const Footer = () => {
  const footer_items = [
    [
      "Gym Near Me",
      "How to Lose Weight",
      "HIIT Workout",
      "Exercises for Toned Body",
      "Core Exercises",
      "Butt Exercises",
      "Arm Workout at Home",
      "Back Exercises at Home",
      "Abs Workout at Home",
    ],
    [
      "Face Yoga",
      "Six Pack Workout",
      "Yoga Asanas",
      "Meditation in Hindi",
      "Gyms in Delhi",
      "Gyms in Jaipur",
      "Gyms in Indore",
      "Weight Loss Exercise",
    ],
    [
      "Healthy Recipes",
      "Yoga Postures for Beginners",
      "Meditation Music",
      "Mindfulness Meditation",
      "Gyms in Pune",
      "Gyms in Kolkata",
      "Gyms in Coimbatore",
      "Strength Training",
    ],
    [
      "Chest Exercises",
      "Surya Namaskar for Beginners",
      "Pranayama",
      "Yoga Nidra",
      "Gyms in Hyderabad",
      "Gyms in Ahmedabad",
      "Gyms in Bangalore",
      "Mobility Exercises",
    ],
    [
      "Exercise To Reduce Belly Fat",
      "Yoga For Stress Relief",
      "Bedtime Stories for Kids",
      "Gyms in Mumbai",
      "Gyms in Chennai",
      "Gyms in Chandigarh",
      "Belly Fat Loss Exercise",
      "Kids Exercise",
    ],
  ];
  return (
    <div className={styles.container}>
      <div className={styles.upper_content}>
        <div>
          <img src={LOGO1} alt="logo" className={styles.logo_img} />
          <p>
            At be.fit, we make group workouts fun, daily food healthy & tasty,
            mental fitness easy with yoga & meditation, Medical & lifestyle care
            hassle-free.#BeBetterEveryDay
          </p>
        </div>
        <div>
          <p>be.fit for business</p>
          <p>be.fit franchise</p>
          <p>corporate partnerships</p>
          <p>be pass network</p>
          <p>t&c for business</p>
        </div>
        <div>
          <p>partner.fit</p>
          <p>blogs</p>
          <p>security</p>
          <p>careers</p>
        </div>
        <div>
          <p>contact us</p>
          <p>privacy policy</p>
          <p>cult bmi calculator</p>
          <p>terms & conditions</p>
        </div>
        <div>
          <img
            className={styles.download_img}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
            alt=""
          />
          <img
            className={styles.download_img}
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.lower_content}>
        {footer_items.map((el, id) => (
          <div key={id}>
            {el.map((item, id2) => (
              <p key={id2}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
