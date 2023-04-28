import React from "react";
import Footer from "../Footer/Footer";
import NavbarWebsite from "../WebsiteNavbar/NavbarWebsite";
import ProductDetail from "./ProductDetail";

function ProductDetailPage() {
  return (
    <>
      <NavbarWebsite />
      <ProductDetail />
      <Footer />
    </>
  );
}

export default ProductDetailPage;
