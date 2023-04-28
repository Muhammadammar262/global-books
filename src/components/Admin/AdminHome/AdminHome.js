import React from "react";
import "./adminhome.css";
import { RiArrowDropUpLine } from "react-icons/ri";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { AiOutlineDollarCircle, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function AdminHome() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <div className="adminBoxes rounded shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">User</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
              20%
            </div>
          </div>
          <div className="fs-4">100</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <Link to="/customerview" className="text-dark">
                see all users
              </Link>
            </div>
            <div className="rounded adminBoxesIcon  p-1">
              <MdOutlinePersonOutline className="text-danger" size={"30px"} />
            </div>
          </div>
        </div>
        <div className="adminBoxes rounded shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">Orders</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
              20%
            </div>
          </div>
          <div className="fs-4">100</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <Link to="/orderview" className="text-dark">
                see all orders
              </Link>
            </div>
            <div className="rounded adminBoxesIcon1 p-1">
              <AiOutlineShoppingCart className="text-warning" size={"30px"} />
            </div>
          </div>
        </div>
        <div className="adminBoxes rounded shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">EARNINGS</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
              20%
            </div>
          </div>
          <div className="fs-4">$100</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <Link to="/orderview" className="text-dark">
                view all net earning
              </Link>
            </div>
            <div className="rounded adminBoxesIcon2 p-1">
              <AiOutlineDollarCircle className="text-success" size={"30px"} />
            </div>
          </div>
        </div>
        <div className="adminBoxes rounded shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">Balance</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
              20%
            </div>
          </div>
          <div className="fs-4">$100</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <Link to="/orderview" className="text-dark">
                see details
              </Link>
            </div>
            <div className="rounded adminBoxesIcon3 p-1">
              <MdOutlineAccountBalanceWallet
                className="text-info"
                size={"30px"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
