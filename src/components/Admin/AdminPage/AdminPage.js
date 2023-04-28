import React from "react";
import AdminHome from "../AdminHome/AdminHome";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./AdminPage.css";
import Footer from "../../Footer/Footer";

function AdminPage() {
  return (
    <>
      <AdminNavbar />
      <AdminHome />
      <div className="my-5 py-5"></div>
      <Footer />
    </>
  );
}

export default AdminPage;
