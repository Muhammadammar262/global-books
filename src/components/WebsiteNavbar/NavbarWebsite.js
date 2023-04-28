import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assests/navbar/logo.png";
import "./navbarwebsite.css";

import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function NavbarWebsite() {
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

        <Link to="/category" className="sideNavLink">
          Non-Fiction
        </Link>
        <Link to="/category" className="sideNavLink">
          Fiction
        </Link>
        <Link to="/category" className="sideNavLink">
          Local Books
        </Link>
        <Link to="/category" className="sideNavLink">
          Children Books
        </Link>
        <Link to="/category" className="sideNavLink">
          Free Book
        </Link>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen2 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav2()}>
          <BiArrowBack />
        </button>

        <Link to="/category" className="sideNavLink">
          Afsanay
        </Link>
        <Link to="/category" className="sideNavLink">
          Poetry
        </Link>
        <Link to="/category" className="sideNavLink">
          Safarnamal
        </Link>
        <Link to="/category" className="sideNavLink">
          Urdu Biography
        </Link>
        <Link to="/category" className="sideNavLink">
          Urdu Adab
        </Link>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen3 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav3()}>
          <BiArrowBack />
        </button>

        <Link to="/category" className="sideNavLink">
          Urdu PDF
        </Link>
        <Link to="/category" className="sideNavLink">
          English PDF
        </Link>
        <Link to="/category" className="sideNavLink">
          Children PDF
        </Link>
        <Link to="/category" className="sideNavLink">
          Medical PDF
        </Link>
        <Link to="/category" className="sideNavLink">
          School PDF
        </Link>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen4 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav4()}>
          <BiArrowBack />
        </button>

        <Link to="/category" className="sideNavLink">
          Address Books
        </Link>
        <Link to="/category" className="sideNavLink">
          Spiral Notebook
        </Link>
      </div>

      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: navOpen5 ? 250 : 0 }}
      >
        <button className="closebtn sideNavLink" onClick={() => closeNav5()}>
          <BiArrowBack />
        </button>

        <Link to="/category" className="sideNavLink">
          Stationary
        </Link>
        <Link to="/category" className="sideNavLink">
          Office Supplies
        </Link>
        <Link to="/category" className="sideNavLink">
          Book Marks
        </Link>
        <Link to="/category" className="sideNavLink">
          Decorative
        </Link>
        <Link to="/category" className="sideNavLink">
          Mugs
        </Link>
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
              <Link to="/cart" className="text-decoration-none text-dark me-3">
                <AiOutlineShoppingCart size={"30px"} className="me-2" />
                Cart
              </Link>
              <Link className="text-decoration-none text-dark" to="/login">
                <BsFillPersonFill size={"30px"} className="me-2" />

                {username}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarWebsite;
