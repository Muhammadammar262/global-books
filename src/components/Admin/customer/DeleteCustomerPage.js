import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import DeleteCustomer from "./DeleteCustomer";

function DeleteCustomerPage() {
  return (
    <>
      <AdminNavbar />
      <DeleteCustomer />
      <Footer />
    </>
  );
}

export default DeleteCustomerPage;
