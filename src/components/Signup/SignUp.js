import React, { useState, useEffect } from "react";
import "../Signup/SignUp.css";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import backgroundImage from "../../assests/images/image1.jpg";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [conPasswordValid, setconPasswordValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [formValid, setFormValid] = useState(true);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("null");
  const [nameError, setNameError] = useState("null");
  const [phoneError, setPhoneError] = useState("null");
  const [passwordError, setPasswordError] = useState("null");
  const [conPasswordError, setConPasswordError] = useState("null");

  const validateName = () => {
    if (name === "") {
      setNameError("Please Enter Name");
    } else if (name.length <= 2) {
      setNameError("Please enter a name with at least 2 characters.");
      setNameValid(name.length >= 2);
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
      setNameValid(false);
      setNameError("Name should only contain letters and spaces");
    } else {
      setNameError("");
    }
  };

  const validatePhone = () => {
    if (phone === "") {
      setPhoneError("Please Enter Phone Number");
    } else if (!/^(?:\+92|0)\d{10}$/.test(phone)) {
      const phoneRegex = /^(?:\+92|0)\d{10}$/;
      setPhoneValid(phoneRegex.test(phone));
      setPhoneError("Enter Valid Pakistani Phone Number");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = () => {
    if (email === "") {
      setEmailError("Please Enter Email Address");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValid(emailRegex.test(email));
      setEmailError("Please Enter a Valid Email Address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    console.log(password);
    if (password === "") {
      setPasswordError("Please Enter Password");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setPasswordValid(passwordRegex.test(password));
      setPasswordError(
        "Your password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    } else {
      setPasswordError("done");
    }
  };

  const validateConPassword = () => {
    console.log(conpassword);
    if (conpassword === "") {
      setConPasswordError("Please Enter Confirm Password");
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        conpassword
      )
    ) {
      const conPasswordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setconPasswordValid(conPasswordRegex.test(conpassword));
      setConPasswordError(
        "Your Confirm password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
    } else {
      setConPasswordError("done");
    }
  };

  useEffect(() => {
    setFormValid(
      email !== "" &&
        password !== "" &&
        phone !== "" &&
        name !== "" &&
        conpassword !== ""
    );
  }, [email, password, phone, name, conpassword]);

  const handleSubmit = () => {
    if (password !== conpassword) {
      alert("Password and Conform Passwords are not Same.");
    } else {
      let fData = new FormData();
      fData.append("name", name);
      fData.append("email", email);
      fData.append("phone", phone);
      fData.append("password", password);

      axios({
        method: "post",
        url: "http://localhost/project/signUp.php",
        data: fData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      });
      navigate("/login", { replace: true });
    }
  };

  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100%",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const buttonSize = {
    padding: "0 80px",
    fontSize: "23px",
    borderRadius: "30px",
  };

  return (
    <div className="main-class" style={myStyle}>
      <div className="col-lg-4 col-md-7 col-sm-6 col-xs-12 login-card">
        <form id="kayit-form" className="col-lg-12">
          <div className="col-lg-12 logo-kapsul">
            <BsFillPersonFill size={"90px"} className="logo" color="#fff" />
          </div>
          <div className="group">
            <input
              type="text"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onBlur={validateEmail}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>
              <i className="material-icons input-ikon d-flex justify-content-center align-items-center">
                <MdEmail className="me-2" />
                Email Address
              </i>
            </label>
          </div>
          {!emailValid && <span className="error">{emailError}</span>}

          <div className="group">
            <input
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              onBlur={validateName}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>
              <i className="material-icons input-ikon d-flex justify-content-center align-items-center">
                <BsFillPersonFill className="me-2" />
                Name
              </i>
            </label>
          </div>
          {!nameValid && <span className="error">{nameError}</span>}

          <div className="group">
            <input
              type="number"
              value={phone}
              onChange={(e) => setphone(e.target.value)}
              onBlur={validatePhone}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>
              <i className="material-icons input-ikon d-flex justify-content-center align-items-center">
                <BsFillTelephoneFill className="me-2" />
                Phone Number
              </i>
            </label>
          </div>
          {!phoneValid && <span className="error">{phoneError}</span>}

          <div
            className={`group ${
              passwordError === "Please Enter Password"
                ? ""
                : passwordError === "null"
                ? ""
                : passwordError === "done"
                ? ""
                : "mb-5 pb-5"
            }`}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              onBlur={validatePassword}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>
              <i className="material-icons input-ikon d-flex justify-content-center align-items-center">
                <RiLockPasswordFill className="me-2" />
                Password
              </i>
            </label>
          </div>
          {!passwordValid && (
            <span
              className={`${
                passwordError === "Please Enter Password"
                  ? "error"
                  : "passwordError"
              }`}
            >
              {passwordError === "done" ? "" : passwordError}
            </span>
          )}

          <div
            className={`group ${
              conPasswordError === "Please Enter Confirm Password"
                ? ""
                : conPasswordError === "null"
                ? ""
                : conPasswordError === "done"
                ? ""
                : "mb-5 pb-5"
            }`}
          >
            <input
              type="password"
              value={conpassword}
              onChange={(e) => setconpassword(e.target.value)}
              onBlur={validateConPassword}
              required
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>
              <i className="material-icons input-ikon d-flex justify-content-center align-items-center">
                <RiLockPasswordFill className="me-2" />
                Confirm Password
              </i>
            </label>
          </div>
          {!conPasswordValid && (
            <span
              className={`${
                conPasswordError === "Please Enter Confirm Password"
                  ? "error"
                  : "passwordError"
              }`}
            >
              {conPasswordError === "done" ? "" : conPasswordError}
            </span>
          )}

          <div className="d-flex justify-content-center align-items-center">
            <button
              style={buttonSize}
              onClick={handleSubmit}
              className="btn buttonColor d-flex justify-content-center align-items-center"
              disabled={!formValid}
            >
              <BiLogInCircle className="me-1" /> Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
