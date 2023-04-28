import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import DeleteOrder from "./DeleteOrder";

function DeleteOrderPage() {
  return (
    <>
      <AdminNavbar />
      <DeleteOrder />
      <Footer />
    </>
  );
}

export default DeleteOrderPage;
