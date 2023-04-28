import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import DeleteProduct from "./DeleteProduct";

function DeleteProductPage() {
  return (
    <>
      <AdminNavbar />
      <DeleteProduct />
      <Footer />
    </>
  );
}

export default DeleteProductPage;
