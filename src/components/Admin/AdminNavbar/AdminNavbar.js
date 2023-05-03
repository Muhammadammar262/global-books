import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assests/navbar/logo.png";
import "./adminnavbar.css";

import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function AdminNavbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navigate = useNavigate();
  const [navOpen1, setNavOpen1] = useState(false);
  const [navOpen2, setNavOpen2] = useState(false);
  const [navOpen3, setNavOpen3] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = sessionStorage.getItem("username");
    if (user) {
      setUsername(user);
    }
  }, []);

  const logout = () => {
    navigate("/login");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("id");
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

  return (
    <>
      <div>
        <div
          id="mySidenav"
          class="sidenav"
          style={{ width: navOpen ? 250 : 0 }}
        >
          <button className="closebtn1 sideNavLink" onClick={() => closeNav()}>
            &times;
          </button>

          <button class="sideNavLink" onClick={() => openNav1()}>
            Products
          </button>
          <button class="sideNavLink" onClick={() => openNav2()}>
            Orders
          </button>
          <button class="sideNavLink" onClick={() => openNav3()}>
            Customers
          </button>
        </div>
      </div>
      <div id="mySidenav" class="sidenav" style={{ width: navOpen1 ? 250 : 0 }}>
        <button className="closebtn sideNavLink" onClick={() => closeNav1()}>
          <BiArrowBack />
        </button>

        <Link to="/productview" class="sideNavLink">
          View Products
        </Link>
        <Link to="/productedit" class="sideNavLink">
          Edit Products
        </Link>
        <Link to="/productdelete" class="sideNavLink">
          Delete Products
        </Link>
        <Link to="/productadd" class="sideNavLink">
          Add Products
        </Link>
      </div>

      <div id="mySidenav" class="sidenav" style={{ width: navOpen2 ? 250 : 0 }}>
        <button className="closebtn sideNavLink" onClick={() => closeNav2()}>
          <BiArrowBack />
        </button>

        <Link to="/orderview" class="sideNavLink">
          View All Orders
        </Link>
        <Link to="/orderdelete" class="sideNavLink">
          Delete Orders
        </Link>
        <Link to="/orderedit" class="sideNavLink">
          Edit Orders
        </Link>
      </div>

      <div id="mySidenav" class="sidenav" style={{ width: navOpen3 ? 250 : 0 }}>
        <button className="closebtn sideNavLink" onClick={() => closeNav3()}>
          <BiArrowBack />
        </button>

        <Link to="/customerview" class="sideNavLink">
          View Customers Details
        </Link>
        <Link to="/customeredit" class="sideNavLink">
          Edit Customers Details
        </Link>
        <Link to="/customerdelete" class="sideNavLink">
          Delete Customer Details
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

          <Link to="/adminHome" className="px-5">
            <img src={logo} alt="" height={"35px"} />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
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
                      Logout
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

export default AdminNavbar;
