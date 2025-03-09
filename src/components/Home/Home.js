import React, { useContext } from "react";
import home from "./Home.module.css";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";

const Home = () => {
  const navigate = useNavigate();
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const handleClick = () => {
    navigate("/trip-input");
  };

  const FadeInVariant = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 3, ease: "easeInOut" } },
  }


  const textAnimation = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeInOut" } },
  }

  return (
    <div className={home.homePage}>
      {cameraClicked && <CameraModal />}
      <Navbar />
      <motion.div className={home.jumbotron}
        variants={FadeInVariant}
        initial='initial'
        whileInView='whileInView'>
        <div className={home.blurBackground}></div>
        <div
          className={`${home.textContainer} d-flex flex-column justify-content-center h-100`}
        >
          <motion.h1 className={home.display4}
            variants={textAnimation}
            initial='initial'
            whileInView='whileInView'>Welcome to EgyGuide
          </motion.h1>
          <motion.p className={home.lead}
            variants={textAnimation}
            initial='initial'
            whileInView='whileInView'>
            Your ultimate guide to exploring Egypt's wonders!
          </motion.p>
          <motion.button className={home.homeButton} onClick={handleClick}
            variants={FadeInVariant}
            initial='initial'
            whileInView='whileInView'>
            Begin Your Journey
          </motion.button>
        </div>
      </motion.div>

      {/* <hr className={home.line} /> */}
      <motion.div className={home.landmarksSection}
        variants={FadeInVariant}
        initial='initial'
        whileInView='whileInView'
      >
        <h2>Explore Egypt's Famous Landmarks</h2>
        <div className={home.landmarksGrid}>
          <div className={home.landmarkItem}>
            <img
              src="https://s.yimg.com/uu/api/res/1.2/NwPIuxTjIU1utQZLqlTqZQ--~B/aD0xMDAwO3c9MTYwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/travel.travelleisure.com/d27c5b1770825da5229c837721714386"
              alt="Pyramids of Giza"
            />
            <p>
              The Pyramids of Giza are one of the Seven Wonders of the Ancient
              World.
            </p>
          </div>
          <div className={home.landmarkItem}>
            <img
              src="https://www.billingschamber.com/media/Entrance-of-Luxor-Temple-Egypt-iStock-175526084.jpg"
              alt="Luxor Temple"
            />
            <p>
              Luxor Temple is a large Ancient Egyptian temple complex located on
              the east bank of the Nile River.
            </p>
          </div>
          <div className={home.landmarkItem}>
            <img
              src="https://mediaim.expedia.com/destination/9/3662e3b8678c812554332c0484944ebe.jpg"
              alt="The Sphinx"
            />
            <p>
              The Great Sphinx is a massive statue with the body of a lion and
              the head of a human.
            </p>
          </div>
          <div className={home.landmarkItem}>
            <img
              src="https://magarticles.magzter.com/articles/12911/508301/5f4ca535d3322/THE-TEMPLES-AT-ABU-SIMBEL.jpg"
              alt="Abu Simbel"
            />
            <p>
              Abu Simbel is a historic site comprising two massive rock-cut
              temples in southern Egypt.
            </p>
          </div>
        </div>
      </motion.div>
      <hr className={home.line} />
      {/* About Us Section */}
      <motion.div className={home.aboutUsSection}
        variants={FadeInVariant}
        initial='initial'
        whileInView='whileInView'>
        <h2>About Us</h2>
        <p>
          We are a team of passionate travelers dedicated to providing you with
          the best travel experiences in Egypt. Our mission is to help you
          explore the rich history, culture, and beauty of this amazing country.
        </p>
      </motion.div>
      <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
      <Footer />
    </div>
  );
};

export default Home;
