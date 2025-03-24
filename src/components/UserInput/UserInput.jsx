import React, { useContext, useState } from "react";
import styles2 from "./UserInput.module.css";
import { governorates } from "../../assets/assets";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { AppContext } from '../Context/AppContext';
import CameraModal from "../CameraModal/CameraModal";

function UserInput() {
  const { setCameraClicked, cameraClicked } = useContext(AppContext);
  const [budget, setBudget] = useState(0);
  const [interests, setInterests] = useState("");
  const [city, setCity] = useState("");
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  const handleTripSelection = () => {
    if (!days || !city || !budget || !interests) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill all the fields.",
        confirmButtonText: "OK",
      });
      return;
    }
    if (days <= 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a positive number for days.",
        confirmButtonText: "OK",
      });
      return;
    }
    const budgetNumber = Number(budget);
    if (isNaN(budgetNumber)) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a valid number for budget.",
        confirmButtonText: "OK",
      });
      return;
    }
    if (budgetNumber <= 0) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please enter a positive number for budget.",
        confirmButtonText: "OK",
      });
      return;
    }
    navigate("/Trip-plan", {
      state: {
        city: city,
        days: days,
        budget: budgetNumber,
        interests: interests,
      },
    });
  };

  return (
    <>
      {cameraClicked && <CameraModal />}

      <Navbar />
      <div className={styles2.main_container}>
        <div className={styles2.user_input_container}>
          <p className={styles2.user_input_text}>Enter Your Trip Details</p>
          <div className={`${styles2.user_inputs} d-flex justify-content-around`}>
            <div className={`form-group ${styles2.form_group}`}>
              <label htmlFor="days" className={styles2.input_labels}>Number Of Days:</label>
              <br />
              <input
                type="number"
                id="days"
                className={` ${styles2.inputs}`}
                onChange={(e) => setDays(Number(e.target.value))}
              />
            </div>
            <div className={`form-group ${styles2.form_group}`}>
              <label htmlFor="destination" className={styles2.input_labels}>Destination:</label>
              <br />
              <select
                id="destination"
                className={`${styles2.inputs}`}
                onChange={(e) => setCity(e.target.value)}
              >
                <option disabled selected >Choose...</option>
                {governorates.map((gov) => (
                  <option key={gov} value={gov} className={styles2.options}>
                    {gov}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={`${styles2.user_inputs} d-flex justify-content-around`}>
            <div className={`form-group ${styles2.form_group}`}>
              <label htmlFor="budget" className={styles2.input_labels}>Budget in EGP:</label>
              <br />
              <input
                type="text"
                id="budget"
                className={` ${styles2.inputs}`}
                onChange={(e) => setBudget(e.target.value)}
              />
            </div>
            <div className={`form-group ${styles2.form_group}`}>
              <label htmlFor="interests" className={styles2.input_labels}>Interests:</label>
              <br />
              <select
                id="interests"
                className={` ${styles2.inputs}`}
                onChange={(e) => setInterests(e.target.value)}
              >
                <option disabled selected>Choose...</option>
                {governorates.map((gov) => (
                  <option key={gov} value={gov} className={styles2.options}>
                    {gov}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className={styles2.input_btn} onClick={handleTripSelection}>
            Next
          </button>
        </div>
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
      </div>
      <Footer />

    </>
  );
}

export default UserInput;