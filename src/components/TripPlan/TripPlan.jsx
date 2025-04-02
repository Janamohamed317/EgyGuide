import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";

function TripPlan() {
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const location = useLocation();
  const { days, cityID, travelPlan } = location.state || {};
  const [selectedCity, setSelectedCity] = useState({});
  const [prevId, setPrevId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cityID && cityID !== prevId) {
      fetchCity(cityID);
      setPrevId(cityID);
    }
  }, [cityID]);

  const fetchCity = async (cityID) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://travelguide.runasp.net/api/Governorates/${cityID}`);
      setSelectedCity(response.data);
    } catch (err) {
      console.error('Error fetching city data:', err);
      setError('Failed to load city data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const memoizedTopPlaces = React.useMemo(() => {
    return selectedCity.topPlaces?.['$values'] || [];
  }, [selectedCity]);

  const renderTravelPlan = () => {
    if (!travelPlan) return <p>No travel plan available. Please try again.</p>;
    
    try {
      // Try to parse if it's a string
      const planData = typeof travelPlan === 'string' ? JSON.parse(travelPlan) : travelPlan;
      
      return (
        <div className={styles3.trip_details}>
          {planData.days?.map((day, dayIndex) => (
            <div key={`day-${dayIndex}`} className={styles3.day_container}>
              <details open={dayIndex === 0}>
                <summary>Day {dayIndex + 1}: {day.title || `Activities`}</summary>
                {day.activities?.map((activity, actIndex) => (
                  <div key={`act-${actIndex}`} className={styles3.activity}>
                    <h3>{activity.name}</h3>
                    <p><strong>Location:</strong> {activity.location}</p>
                    <p><strong>Description:</strong> {activity.description}</p>
                    {activity.time && <p><strong>Time:</strong> {activity.time}</p>}
                    {activity.cost && <p><strong>Cost:</strong> {activity.cost}</p>}
                  </div>
                ))}
                {day.total_cost && <p className={styles3.dayCost}><strong>Total Day Cost:</strong> {day.total_cost}</p>}
              </details>
            </div>
          ))}
        </div>
      );
    } catch (e) {
      return (
        <div className={styles3.planContent}>
          <pre>{typeof travelPlan === 'string' ? travelPlan : JSON.stringify(travelPlan, null, 2)}</pre>
        </div>
      );
    }
  };

  return (
    <>
      {cameraClicked && <CameraModal />}
      <div className={styles3.main_container}>
        <Navbar />
        
        {loading ? (
          <div className={styles3.loading}>Loading city data...</div>
        ) : error ? (
          <div className={styles3.error}>{error}</div>
        ) : (
          <>
            {/* City Header Section */}
            <motion.div className={styles3.city_image_container}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>
              <img 
                src={selectedCity.imageUrl} 
                alt={selectedCity.name}
                className={styles3.city_image}
                onError={(e) => e.target.src = '/default-city.jpg'}
              />
              <p className={styles3.trip_name}>Your {days}-Day Trip to {selectedCity.name}</p>
            </motion.div>

            {/* Travel Plan Section */}
            <div className={styles3.trip_details_container}>
              <h2 className={styles3.plan_txt}>Your Personalized Travel Plan</h2>
              {renderTravelPlan()}
            </div>

            {/* Top Places Carousel */}
            {memoizedTopPlaces.length > 0 && (
              <div className={styles3.top_picks}>
                <h3>Recommended Places in {selectedCity.name}</h3>
                <Carousel topPlaces={memoizedTopPlaces} />
              </div>
            )}
          </>
        )}

        <FontAwesomeIcon 
          icon={faCamera} 
          className={styles3.camera_icon} 
          onClick={() => setCameraClicked(true)} 
        />
        <Footer />
      </div>
    </>
  );
}

export default TripPlan;