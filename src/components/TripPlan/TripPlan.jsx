import React, { act, useContext, useEffect, useMemo, useState } from "react";
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
import { Plan } from "../../assets/assets";
import axios from "axios"


function TripPlan() {
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const Location = useLocation();
  const { days, cityID } = Location.state;
  const daysArray = Array.from({ length: days }, (_, index) => index + 1);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState([])
  const [prevId, setPrevId] = useState(null)

  useEffect(() => {
    if (cityID !== prevId) {
      fetchCity(cityID);
      setPrevId(cityID)
    }
  }, [cityID]);

  const fetchCity = async (cityID) => {
    setLoading(true)
    try {
      const res = await axios.get(`https://travelguide.runasp.net/api/Governorates/${cityID}`)
      setSelectedCity(res.data)

    }
    catch (err) {
      console.log('error fetching data');

    }
    finally {
      setLoading(false)
    }
  };

  const memoizedTopPlaces = useMemo(() => {
    return selectedCity.topPlaces?.['$values'] || [];
  }, [selectedCity]);

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
          <img src={selectedCity.imageUrl} className={styles3.city_image} alt={selectedCity.name} />
          <p className={styles3.trip_name}>Enjoy Your Trip to {selectedCity.name}</p>
        </motion.div>
        <hr className={styles3.line} />

        <motion.div className={styles3.about_container}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
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
          initial='initial'
          whileInView='whileInView'>
          <p className={styles3.plan_txt}>Here is Your Generated Plan</p>
          <div className={styles3.trip_details}>
            {Plan.filter(day => day.activities).map((day) => (
              <div key={day.id} className={styles3.day_container}>
                <details>
                  <summary>{day.day}</summary>
                  {day.activities.map((activity,index) => (
                    <div key={activity.id} >
                      <h1>Activity: {index + 1}</h1>
                      <p className="fs-2">- Activity: {activity.activity}</p>
                      <p className="fs-2">- Location: {activity.location}</p>
                      <p className="fs-2">- Price Range: {activity.price_range}</p>
                      <p className="fs-2">- Recommended Time to Visit: {activity.time}</p>
                    </div>
                  ))}
                  <p>Approximate Cost for the Day: {day.approximate_cost}</p>
                </details>
              </div>
            ))}
          </div>
        </motion.div>

        <hr className={styles3.line} />

        <motion.div className={styles3.top_picks}
          variants={FadeInVariant}
          initial='initial'
          whileInView='whileInView'>
          {memoizedTopPlaces.length > 0 && <Carousel topPlaces={memoizedTopPlaces} />}
        </motion.div>

        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
        <Footer />
      </div>
    </>
  );
}

export default TripPlan;
