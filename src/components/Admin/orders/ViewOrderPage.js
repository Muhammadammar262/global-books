import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import ViewOrders from "./ViewOrders";

function ViewProductPage() {
  return (
    <>
      <AdminNavbar />
      <ViewOrders />
      <Footer />
    </>
  );
}

export default ViewProductPage;
