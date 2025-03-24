import React, { useContext, useState } from "react";
import styles from "./Signin.module.css";
import login_img from "../../assets/i1.jpg";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { showPassword, handleCheckboxChange, setLoggedOut,setUserName } = useContext(AppContext);
  const navigate = useNavigate();

  const ValidateSignIn = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (field === "email") {
      if (!value) {
        setEmailError("Email is required");
      } else if (!emailRegex.test(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    } else if (field === "password") {
      if (!value) {
        setPasswordError("Password is required");
      } else if (value.length < 6) {
        setPasswordError("Password must be at least 6 characters");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ValidateSignIn("email", email);
    ValidateSignIn("password", password);
    setLoggedOut(false)
    navigate('/home')
    if (!emailError && !passwordError) {
      try {
        const response = await axios.post("http://localhost:3004/users", {
          email,
          password,
        });

        if (response.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "You have successfully signed in.",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/home");
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: response.data.message || "Invalid email or password.",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            error.response?.data?.message ||
            "There was an error signing in. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form before submitting.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.form_container}>
        <img src={login_img} alt="Description" className={styles.form_img} />
        <div className={styles.form}>
          <form className={styles.form_inputs} onSubmit={handleSubmit}>
            <p className={styles.Login_text}>Sign in</p>
            <label className={`${styles.Input_label}`}>Email</label>
            <br />
            <input
              className={styles.inputs}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                ValidateSignIn("email", e.target.value);
              }}
            />
            {emailError && <p className={styles.error_text}>{emailError}</p>}
            <br />
            <label className={`${styles.Input_label}`}>Password</label>
            <br />
            <input
              className={styles.inputs}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                ValidateSignIn("password", e.target.value);
              }}
            />
            {passwordError && (
              <p className={styles.error_text}>{passwordError}</p>
            )}

            <div className={styles.form_checkbox_container}>
              <label className={styles.checkbox_label}>Show Password</label>
              <input
                type="checkbox"
                className={styles.form_checkbox}
                onChange={(e) => handleCheckboxChange(e)}
              ></input>
            </div>

            <button className={styles.form_btn} type="submit">
              <span>Sign in</span>
            </button>
          </form>
          <p className={styles.Login_text2}>
            Doesn't have an account?
            <span
              className={styles.Signup_text}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;
