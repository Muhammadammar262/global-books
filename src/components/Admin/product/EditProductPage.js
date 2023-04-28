import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import EditProducts from "./EditProducts";

function EditProductPage() {
  return (
    <>
      <AdminNavbar />
      <EditProducts />
      <Footer />
    </>
  );
}

export default EditProductPage;
