import React from "react";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import EditOrders from "./EditOrders";
import Footer from "../../Footer/Footer";

function EditOrderPage() {
  return (
    <>
      <AdminNavbar />
      <EditOrders />
      <Footer />
    </>
  );
}

export default EditOrderPage;
