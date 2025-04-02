import React, { useContext, useEffect, useMemo, useState, Suspense, lazy } from "react";
import { useLocation } from "react-router";
import styles3 from "./TripPlan.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";
import axios from "axios";

const Carousel = lazy(() => import("../Carousel/Carousel"));

function TripPlan() {
  useEffect(() => {
    window.scrollTo(0, 0);

  }, []);
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const location = useLocation();
  const { plan, cityID } = location.state;
  // const {  cityID } = location.state;

  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState([]);
  const [prevId, setPrevId] = useState(null);

  useEffect(() => {
    if (cityID !== prevId) {
      fetchCity(cityID);
      setPrevId(cityID);
    }
  }, [cityID]);

  const fetchCity = async (cityID) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://travelguide.runasp.net/api/Governorates/${cityID}`);
      setSelectedCity(res.data);
    } catch (err) {
      console.log('Error fetching city data');
    } finally {
      setLoading(false);
    }
  };

  const memoizedTopPlaces = useMemo(() => {
    return selectedCity.topPlaces?.['$values'] || [];
  }, [selectedCity]);

  const FadeInVariant = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  const DayAnimationVariant = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };

  return (
    <>
      {cameraClicked && <CameraModal />}
      <div className={styles3.main_container}>
        <Navbar />

        <motion.div className={styles3.city_image_container}
          variants={FadeInVariant}
          initial="initial"
          whileInView="whileInView">
          <img src={selectedCity.imageUrl} className={styles3.city_image} alt={selectedCity.name} />
          <p className={styles3.trip_name}>Enjoy Your Trip to {selectedCity.name}</p>
        </motion.div>
        <hr className={styles3.line} />

        <motion.div className={styles3.about_container}
          variants={FadeInVariant}
          initial="initial"
          whileInView="whileInView">
          <p className={styles3.about_txt}>
            About {selectedCity.name}
          </p>
          <p>
            {selectedCity.description}
          </p>
        </motion.div>

        <hr className={styles3.line} />

        <motion.div className={styles3.trip_details_container}
          variants={FadeInVariant}
          initial="initial"
          whileInView="whileInView">
          <p className={styles3.plan_txt}>Here is Your Generated Plan</p>

          {/* <h2>Notes:</h2>
          <p className="fs-4">{plan.notes}</p>
          <h2>Total Approximate Cost: {plan.total_approximate_cost}</h2>
          <p className={styles3.plan_txt}>Here is Your Generated Plan</p>
          <div className={styles3.trip_details}>
            {plan.days.map((day, index) => (
              <motion.div key={index} className={styles3.day_container} variants={DayAnimationVariant}>
                <details>
                  <summary>{day.day}</summary>
                  {day.activities.map((activity, index) => (
                    <div key={index}>
                      <h1>Activity: {index + 1}</h1>
                      <p className="fs-2">- Activity: {activity.activity}</p>
                      <p className="fs-2">- Location: {activity.location}</p>
                      <p className="fs-2">- Price Range: {activity.price_range}</p>
                      <p className="fs-2">- Recommended Time to Visit: {activity.time}</p>
                    </div>
                  ))}
                  <p>Approximate Cost for the Day: {day.approximate_cost}</p>
                </details>
              </motion.div>
            ))}
          </div> */}
        </motion.div>

        <hr className={styles3.line} />

        {/* Lazy Loaded Carousel */}
        <Suspense fallback={<div className={styles3.loading}>Loading carousel...</div>}>
          <motion.div className={styles3.top_picks}
            variants={FadeInVariant}
            initial="initial"
            whileInView="whileInView">
            {memoizedTopPlaces.length > 0 && <Carousel topPlaces={memoizedTopPlaces} />}
          </motion.div>
        </Suspense>

        {/* Camera Icon */}
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />

        <Footer />
      </div>
    </>
  );
}

export default TripPlan;
