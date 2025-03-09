import React, { useContext } from "react";
import { useLocation } from "react-router";
import styles3 from "./TripPlan.module.css";
import { cities } from "../../assets/assets";
import { motion } from "motion/react";
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";

function TripPlan() {
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const Location = useLocation();
  const { days, city } = Location.state;
  const selectedCity = cities.find((gov) => gov.name === city);
  const cityImage = selectedCity ? selectedCity.image : null;
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
        {cityImage && (
          <>
            <motion.div className={styles3.city_image_container}
              variants={FadeInVariant}
              initial='initial'
              whileInView='whileInView'>
              <img src={cityImage} alt={city} className={styles3.city_image} />
              <p className={styles3.trip_name}>Enjoy Your Trip to {city}</p>
            </motion.div >
            <hr className={styles3.line} />
          </>
        )}

        <motion.div className={styles3.about_container}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
          <p className={styles3.about_txt}>
            About {city}
          </p>
          <p >
            Luxor is a city on the east bank of the Nile River in southern Egypt.
            It's on the site of ancient Thebes, the pharaohs’ capital at the
            height of their power, during the 16th–11th centuries B.C. Today's
            city surrounds 2 huge, surviving ancient monuments: graceful Luxor
            Temple and Karnak Temple, a mile north. The royal tombs of the Valley
            of the Kings and the Valley of the Queens are on the river’s west
            bank.
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

          <Carousel />
        </motion.div>
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
        <Footer />
      </div>
    </>
  );
}

export default TripPlan;
