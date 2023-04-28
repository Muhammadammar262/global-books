import React from "react";
import Footer from "../Footer/Footer";
import NavbarWebsite from "../WebsiteNavbar/NavbarWebsite";
import Home from "./Home";

function HomePage() {
  return (
    <>
      <NavbarWebsite />
      <Home />
      <Footer />
    </>
  );
}

export default HomePage;
