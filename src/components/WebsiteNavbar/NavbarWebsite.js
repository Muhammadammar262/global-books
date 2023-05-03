import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assests/navbar/logo.png";
import "./navbarwebsite.css";

import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

function NavbarWebsite() {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [navOpen1, setNavOpen1] = useState(false);
  const [navOpen2, setNavOpen2] = useState(false);
  const [navOpen3, setNavOpen3] = useState(false);
  const [navOpen4, setNavOpen4] = useState(false);
  const [navOpen5, setNavOpen5] = useState(false);
  const [username, setUsername] = useState("Register or Login");

  useEffect(() => {
    const user = sessionStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  const cartCheck = () => {
    if (username === "Register or Login") {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  const logout = () => {
    navigate("/login");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
  };

  const categorySubmit = (name) => {
    navigate("/category", { state: name });
  };

  function openNav() {
    setNavOpen(true);
  }

  function closeNav() {
    setNavOpen(false);
  }

  function openNav1() {
    setNavOpen1(true);
  }

  function closeNav1() {
    setNavOpen1(false);
  }

  function openNav2() {
    setNavOpen2(true);
  }

  function closeNav2() {
    setNavOpen2(false);
  }
  function openNav3() {
    setNavOpen3(true);
  }

  function closeNav3() {
    setNavOpen3(false);
  }
  function openNav4() {
    setNavOpen4(true);
  }

  function closeNav4() {
    setNavOpen4(false);
  }
  function openNav5() {
    setNavOpen5(true);
  }

  function closeNav5() {
    setNavOpen5(false);
  }

  return (
    <>
      <div>
        <div
          id="mySidenav"
          className="sidenav"
          style={{ width: navOpen ? 250 : 0 }}
        >
          <button className="closebtn1 sideNavLink" onClick={() => closeNav()}>
            &times;
          </button>

          <button className="sideNavLink" onClick={() => openNav1()}>
            English Books
          </button>
          <button className="sideNavLink" onClick={() => openNav2()}>
            Urdu Books
          </button>
          <button className="sideNavLink" onClick={() => openNav3()}>
            PDF Books
          </button>
          <button className="sideNavLink" onClick={() => openNav4()}>
            Note Books
          </button>
          <button className="sideNavLink" onClick={() => openNav5()}>
            Accessories
          </button>
        </div>
      </div>
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen1 ? 250 : 0 }}
      >
        <button className=" closebtn sideNavLink" onClick={() => closeNav1()}>
          <BiArrowBack />
        </button>

        <div
          onClick={() => categorySubmit("Non-Fiction")}
          className="sideNavLink"
        >
          Non-Fiction
        </div>
        <div onClick={() => categorySubmit("Fiction")} className="sideNavLink">
          Fiction
        </div>
        <div
          onClick={() => categorySubmit("Local Books")}
          className="sideNavLink"
        >
          Local Books
        </div>
        <div
          onClick={() => categorySubmit("Children Books")}
          className="sideNavLink"
        >
          Children Books
        </div>
        <div
          onClick={() => categorySubmit("Free Book")}
          className="sideNavLink"
        >
          Free Book
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen2 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav2()}>
          <BiArrowBack />
        </button>
        <div onClick={() => categorySubmit("Afsanay")} className="sideNavLink">
          Afsanay
        </div>
        <div onClick={() => categorySubmit("Poetry")} className="sideNavLink">
          Poetry
        </div>
        <div
          onClick={() => categorySubmit("Safarnamal")}
          className="sideNavLink"
        >
          Safarnamal
        </div>
        <div
          onClick={() => categorySubmit("Urdu Biography")}
          className="sideNavLink"
        >
          Urdu Biography
        </div>
        <div
          onClick={() => categorySubmit("Urdu Adab")}
          className="sideNavLink"
        >
          Urdu Adab
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen3 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav3()}>
          <BiArrowBack />
        </button>
        <div onClick={() => categorySubmit("Urdu PDF")} className="sideNavLink">
          Urdu PDF
        </div>
        <div
          onClick={() => categorySubmit("English PDF")}
          className="sideNavLink"
        >
          English PDF
        </div>
        <div
          onClick={() => categorySubmit("Children PDF")}
          className="sideNavLink"
        >
          Children PDF
        </div>
        <div
          onClick={() => categorySubmit("Medical PDF")}
          className="sideNavLink"
        >
          Medical PDF
        </div>
        <div
          onClick={() => categorySubmit("School PDF")}
          className="sideNavLink"
        >
          School PDF
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen4 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav4()}>
          <BiArrowBack />
        </button>
        <div
          onClick={() => categorySubmit("Address Books")}
          className="sideNavLink"
        >
          Address Books
        </div>
        <div
          onClick={() => categorySubmit("Spiral Notebook")}
          className="sideNavLink"
        >
          Spiral Notebook
        </div>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen5 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav5()}>
          <BiArrowBack />
        </button>
        <div
          onClick={() => categorySubmit("Stationary")}
          className="sideNavLink"
        >
          Stationary
        </div>
        <div
          onClick={() => categorySubmit("Office Supplies")}
          className="sideNavLink"
        >
          Office Supplies
        </div>
        <div
          onClick={() => categorySubmit("Book Marks")}
          className="sideNavLink"
        >
          Book Marks
        </div>
        <div
          onClick={() => categorySubmit("Decorative")}
          className="sideNavLink"
        >
          Decorative
        </div>
        <div onClick={() => categorySubmit("Mugs")} className="sideNavLink">
          Mugs
        </div>
      </div>

      <Navbar bg="light" expand="lg">
        <Container>
          <div>
            <button
              className="btn d-flex-justify-content-center align-items-center"
              onClick={() => openNav()}
            >
              <AiOutlineMenu size={"30px"} />
            </button>
          </div>

          <div className="px-5">
            <Link to="/">
              <img src={logo} alt="" height={"35px"} />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <div
                onClick={cartCheck}
                className="text-decoration-none text-dark me-3 cursor"
              >
                <AiOutlineShoppingCart size={"30px"} className="me-2" />
                Cart
              </div>
              <Link
                to="/userOrders"
                className="text-decoration-none text-dark me-3 cursor"
              >
                <MdProductionQuantityLimits size={"30px"} className="me-2" />
                Orders
              </Link>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsFillPersonFill size={"30px"} className="me-2" />
                  {username}
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <div onClick={logout} class="dropdown-item cursor">
                      {username === "Register or Login" ? "Login" : "Logout"}
                    </div>
                  </li>
                </ul>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarWebsite;
