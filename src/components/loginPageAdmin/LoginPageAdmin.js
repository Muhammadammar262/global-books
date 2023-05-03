import React, { useState } from "react";
import "../loginPage/loginPage.css";
import { MdEmail } from "react-icons/md";
import { RiGoogleFill, RiLockPasswordFill } from "react-icons/ri";
import backgroundImage from "../../assests/images/image1.jpg";
import { BsFillPersonFill, BsTwitter } from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPageAdmin() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const checkAdmin = () => {
    if (userName !== "" && password !== "") {
      let fData = new FormData();
      fData.append("username", userName);
      fData.append("password", password);

      axios({
        method: "post",
        url: "http://localhost/project/loginAdmin.php",
        data: fData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      }).then((result) => {
        if (result.data.result.name !== "") {
          sessionStorage.setItem("username", result.data.result.name);
          sessionStorage.setItem("id", result.data.result.id);
          navigate("/adminHome", { state: { user: result.data } });
          window.stop();
        } else {
          alert("Invalid User");
          navigate("/login");
          window.stop();
        }
      });
    }
  };

  const handleUserNameInputChange = (event) => {
    setuserName(event.target.value);
  };

  const handlepasswordInputChange = (event) => {
    setpassword(event.target.value);
  };
  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: "100%",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const fontSize = {
    fontSize: "20px",
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
          <Link
            to="/login"
            className="btn btn-primary d-flex justify-content-center"
          >
            Login As User
          </Link>

          <div className="col-lg-12 logo-kapsul">
            <BsFillPersonFill size={"90px"} className="logo" color="#fff" />
          </div>

          <div className="group">
            <input
              type="text"
              value={userName}
              onChange={handleUserNameInputChange}
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

          <div className="group">
            <input
              type="password"
              value={password}
              onChange={handlepasswordInputChange}
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
          <div className="d-flex justify-content-center align-items-center">
            <button
              onClick={checkAdmin}
              style={buttonSize}
              className="btn buttonColor d-flex justify-content-center align-items-center"
            >
              <BiLogInCircle className="me-1" /> Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPageAdmin;
