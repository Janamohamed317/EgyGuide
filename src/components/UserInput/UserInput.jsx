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
import { User_Category } from "../../assets/assets";

function UserInput() {
  const { setCameraClicked, cameraClicked, cities, isLoggedIn } = useContext(AppContext);
  const [budget, setBudget] = useState(0);
  const [interests, setInterests] = useState("");
  const [cityID, setCityID] = useState("");
  const [userType, setUserType] = useState("");
  const [days, setDays] = useState(0);
  const navigate = useNavigate();

  const handleTripSelection = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "You have to Login First",
        text: 'Please Login or Create an Account to Continue',
        confirmButtonText: 'Ok'
      })
      return
    }
    if (!days || !budget || !interests || !userType) {
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
        cityID: cityID,
        days: days,
      },
    });
  };

  return (
    <>
      {cameraClicked && <CameraModal />}

      <Navbar />
      <div className={styles2.main_container}>
        <p className="fs-1 mt-5">Enter Your Trip Details</p>
        <div className={`form-group`}>
          <label htmlFor="days" className={styles2.input_labels}>Number Of Days:</label>
          <br />
          <input
            type="number"
            className={styles2.inputs}
            id="days"
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="budget" className={styles2.input_labels}>Budget in EGP:</label>
          <br />
          <input
            type="text"
            id="budget"
            className={` ${styles2.inputs}`}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor="destination" className={styles2.input_labels}>Destination:</label>
          <br />
          <select
            id="destination"
            className={styles2.inputs}
            onChange={(e) => setCityID(e.target.value)}
          >
            <option disabled selected value >Choose...</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id} className={styles2.options}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="interests" className={styles2.input_labels}>Interests:</label>
          <br />
          <select
            id="intersets"
            className={`${styles2.inputs}`}
            onChange={(e) => setInterests(e.target.value)}
          >
            <option disabled selected value >Choose...</option>
            {User_Category.map((type) => (
              <option key={type.id} value={type.text} className={styles2.options}>
                {type.text}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor="interests" className={styles2.input_labels}>Visitor Category:</label>
          <br />
          <select
            id="intersets"
            className={`${styles2.inputs}`}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option disabled selected value >Choose...</option>
            {User_Category.map((type) => (
              <option key={type.id} value={type.text} className={styles2.options}>
                {type.text}
              </option>
            ))}
          </select>
        </div>

        <button className={styles2.input_btn} onClick={handleTripSelection}>
          Next
        </button>

      </div>
      <div className="d-flex align-items-end justify-content-end">
        <FontAwesomeIcon icon={faCamera} className='camera_icon' onClick={() => setCameraClicked(true)} />
      </div>
      <Footer />

    </>
  );
}

export default UserInput;