import React, { useContext, useState } from "react";
import styles2 from "./UserInput.module.css";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";
import { User_Category, Place_Category } from "../../assets/assets";

function UserInput() {
  const { setCameraClicked, cameraClicked, cities, isLoggedIn } = useContext(AppContext);
  const [planDetails, setPlanDetails] = useState({
    city: '',
    favorite_places: [],
    visitor_type: '',
    num_days: 0,
    budget: 0
  });

  const [cityID, setCityID] = useState("");
  const navigate = useNavigate();

  const handleTripSelection = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "You have to Login First",
        text: 'Please Login or Create an Account to Continue',
        confirmButtonText: 'Ok'
      });
      return;
    }
    if (!planDetails.num_days || !planDetails.budget || planDetails.favorite_places.length === 0 ||
      !planDetails.visitor_type || !planDetails.city) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill all the fields.",
        confirmButtonText: "OK",
      });
      return;
    }
    if (planDetails.num_days <= 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a positive number for days.",
        confirmButtonText: "OK",
      });
      return;
    }
    const budgetNumber = Number(planDetails.budget);
    if (isNaN(budgetNumber) || budgetNumber <= 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a valid and positive number for budget.",
        confirmButtonText: "OK",
      });
      return;
    }
    navigate("/Trip-plan", {
      state: {
        cityID: cityID,
        days: planDetails.num_days,
      },
    });
  };

  return (
    <>
      {cameraClicked && <CameraModal />}
      <Navbar />
      <div className={styles2.main_container}>
        <p className="fs-1 mt-5">Enter Your Trip Details</p>

        <div className="form-group">
          <label htmlFor="days" className={styles2.input_labels}>Number Of Days:</label>
          <br />
          <input
            type="number"
            className={styles2.inputs}
            id="days"
            onChange={(e) => setPlanDetails(prev => ({ ...prev, num_days: Number(e.target.value) }))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget" className={styles2.input_labels}>Budget in EGP:</label>
          <br />
          <input
            type="text"
            id="budget"
            className={` ${styles2.inputs}`}
            onChange={(e) => setPlanDetails(prev => ({ ...prev, budget: e.target.value }))}
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination" className={styles2.input_labels}>Destination:</label>
          <br />
          <select
            id="destination"
            className={styles2.inputs}
            onChange={(e) => {
              const selectedCity = cities.find(city => city.id === Number(e.target.value));
              if (selectedCity) {
                setCityID(selectedCity.id);
                setPlanDetails(prev => ({ ...prev, city: selectedCity.name }));
              }
            }}
          >
            <option disabled selected>Choose...</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id} className={styles2.options}>
                {city.name}
              </option>
            ))}
          </select>
        </div>


        <div className="form-group">
          <label htmlFor="visitor_type" className={styles2.input_labels}>Visitor Category:</label>
          <br />
          <select
            id="visitor_type"
            className={styles2.inputs}
            onChange={(e) => setPlanDetails(prev => ({ ...prev, visitor_type: e.target.value }))}
          >
            <option disabled selected>Choose...</option>
            {User_Category.map((type) => (
              <option key={type.id} value={type.text} className={styles2.options}>
                {type.text}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex flex-column  justify-content-center gap-2 mt-5 fs-3 ">
          <h2>Pick your favorite places:</h2>
          {Place_Category.map((type) => (
            <div className="form-check align-items-start" key={type.id}>
              <input
                className="form-check-input "
                type="checkbox"
                value={type.text}
                id={`place-${type.id}`}
                onChange={(e) => {
                  const { value, checked } = e.target;
                  setPlanDetails(prev => ({
                    ...prev,
                    favorite_places: checked
                      ? [...prev.favorite_places, value]
                      : prev.favorite_places.filter(place => place !== value)
                  }));
                }}
              />
              <label className="form-check-label" htmlFor={`place-${type.id}`}>
                {type.text}
              </label>
            </div>
          ))}
        </div>



        <button className={styles2.input_btn} onClick={handleTripSelection}>
          Next
        </button>
      </div>

      <div className="d-flex align-items-end justify-content-end">
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
      </div>
      {
        console.log(planDetails)
      }
      <Footer />
    </>
  );
}

export default UserInput;
