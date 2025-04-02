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
  const [loading, setLoading] = useState(false);
  const { showPassword, handleCheckboxChange, setIsLoggedIn, setUserName, setUserID } = useContext(AppContext);
  const navigate = useNavigate();

  const ValidateSignIn = (field, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/

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
      } else if (!passwordRegex.test(value)) {
        setPasswordError(`Password must contain:
                         - 6+ characters
                         - 1 uppercase letter
                         - 1 lowercase letter
                         - 1 number
                         - 1 special character (!@#$%^&*)`);
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    ValidateSignIn("email", email);
    ValidateSignIn("password", password);

    if (emailError || passwordError) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fix the errors in the form before submitting.",
        confirmButtonText: "OK",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://travelguide.runasp.net/api/UsersIdentity/Login",
        { email, password },
      );

      console.log("Login response:", response.data);

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userName", response.data.dispalyName);
        localStorage.setItem("userID", response.data.userId);

        setUserName(response.data.dispalyName);
        setUserID(response.data.userId)
        setIsLoggedIn(true)
        await Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully signed in.",
          confirmButtonText: "OK",
        });

        navigate("/home");
      }
    } catch (error) {
      let errorMessage = "There was an error signing in. Please try again.";
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = "Invalid email or password";
        }

      }

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: errorMessage,
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
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

            <button
              className={styles.form_btn}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner}></span>
              ) : (
                <span>Sign In</span>
              )}
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
