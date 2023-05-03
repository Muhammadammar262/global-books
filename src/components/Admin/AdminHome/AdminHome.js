import React, { useState, useEffect } from "react";
import "./adminhome.css";
import { RiArrowDropUpLine } from "react-icons/ri";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminHome() {
  const [tableData, setTableData] = useState(0);
  const [tableDataOrders, setTableDataOrders] = useState(0);
  const [tableDataOrdersNew, setTableDataOrdersNew] = useState(0);
  const [tableDataOrdersApprove, setTableDataOrdersApprove] = useState(0);
  const [tableDataOrdersRejected, setTableDataOrdersRejected] = useState(0);
  const [tableDataProducts, setTableDataProducts] = useState(0);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/count.php");
    setTableData(result.data);
    const result1 = await axios.get("http://localhost/project/countOrders.php");
    setTableDataOrders(result1.data);
    const result2 = await axios.get(
      "http://localhost/project/countProducts.php"
    );
    setTableDataProducts(result2.data);
    const result3 = await axios.get(
      "http://localhost/project/countOrdersNew.php"
    );
    setTableDataOrdersNew(result3.data);
    const result4 = await axios.get(
      "http://localhost/project/countOrdersApprove.php"
    );
    setTableDataOrdersApprove(result4.data);
    const result5 = await axios.get(
      "http://localhost/project/countOrdersRejected.php"
    );
    setTableDataOrdersRejected(result5.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="container">
      <div className="d-flex justify-content-around mt-3 row row-cols-lg-4 row-cols-sm-2 row-cols-md-3 row-cols-1 g-4">
        <div className="rounded shadow p-3 mx-1 mb-5 bg-body rounded col">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">User</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableData}</div>
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
            <div className="fw-bold text-secondary">Total Orders</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableDataOrders}</div>
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
            <div className="fw-bold text-secondary">Products</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableDataProducts}</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <div>
              <Link to="/productview" className="text-dark">
                see all products
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

        <div className="adminBoxes rounded shadow p-3 mb-5 bg-body rounded">
          <div className="d-flex justify-content-between">
            <div className="fw-bold text-secondary">New Orders</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableDataOrdersNew}</div>
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
            <div className="fw-bold text-secondary">Approve Orders</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableDataOrdersApprove}</div>
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
            <div className="fw-bold text-secondary">Rejected Orders</div>
            <div className="d-flex justify-content-center align-items-center text-success">
              <RiArrowDropUpLine size={"30px"} />
            </div>
          </div>
          <div className="fs-4">{tableDataOrdersRejected}</div>
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
      </div>
    </div>
  );
}

export default AdminHome;
