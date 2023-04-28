import React from "react";
import Footer from "../../Footer/Footer";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import ViewCustomer from "./ViewCustomer";

function ViewCustomerPage() {
  return (
    <>
      <AdminNavbar />
      <ViewCustomer />
      <Footer />
    </>
  );
}

export default ViewCustomerPage;
