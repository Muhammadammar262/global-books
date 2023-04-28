import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import EditCustomerForm from "./EditCustomerForm";

function EditCustomerFormPage() {
  return (
    <>
      <AdminNavbar />
      <EditCustomerForm />
      <Footer />
    </>
  );
}

export default EditCustomerFormPage;
