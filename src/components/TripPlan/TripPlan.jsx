import React, { useContext } from "react";
import { useLocation } from "react-router";
import styles3 from "./TripPlan.module.css";
import { motion } from "motion/react";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";

function TripPlan() {
  const { setCameraClicked, cameraClicked, cities } = useContext(AppContext);
  const Location = useLocation();
  const { days, city } = Location.state;
  const selectedCity = cities.find((place) => place.name === city);
  const daysArray = Array.from({ length: days }, (_, index) => index + 1);


  const FadeInVariant = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 0, ease: "easeInOut" } }
  }

  return (
    <>
      {cameraClicked && <CameraModal />}
      <div className={styles3.main_container}>
        <Navbar />

        <motion.div className={styles3.city_image_container}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
          <img src={selectedCity.imageUrl} alt={city} className={styles3.city_image} />
          <p className={styles3.trip_name}>Enjoy Your Trip to {city}</p>
        </motion.div >
        <hr className={styles3.line} />


        <motion.div className={styles3.about_container}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
          <p className={styles3.about_txt}>
            About {selectedCity.name}
          </p>
          <p >
            {selectedCity.description}
          </p>
        </motion.div >

        <hr className={styles3.line} />

        <motion.div className={styles3.trip_details_container}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
          <p className={styles3.plan_txt}>Here is Your Generated Plan</p>
          <div className={styles3.trip_details}>
            {daysArray.map((day) => (
              <div key={day} className={styles3.day_container}>
                <details>
                  <summary> DAY {day} </summary>
                  <p>plan plan plan</p>
                </details>
              </div>
            ))}
          </div>
        </motion.div >

        <hr className={styles3.line} />
        <motion.div
          className={styles3.top_picks}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>

          <Carousel topPlaces={selectedCity.topPlaces}/>
        </motion.div>
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
        <Footer />
      </div>
    </>
  );
}

export default TripPlan;
