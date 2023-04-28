import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import EditCustomer from "./EditCustomer";

function EditCustomerPage() {
  return (
    <>
      <AdminNavbar />
      <EditCustomer />
      <Footer />
    </>
  );
}

export default EditCustomerPage;
