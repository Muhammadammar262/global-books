import React, { useState, useEffect } from "react";
import axios from "axios";

function UserOrder() {
  const [tableData, setTableData] = useState([]);
  const [tableDataApprove, setTableDataApprove] = useState([]);
  const [tableDataReject, setTableDataReject] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/project/viewUserOrderNew.php?id=${sessionStorage.getItem(
        "id"
      )}`
    );
    setTableData(result.data.phpresult);
  };
  const loadUsers1 = async () => {
    const result = await axios.get(
      `http://localhost/project/viewUserOrderApprove.php?id=${sessionStorage.getItem(
        "id"
      )}`
    );
    setTableDataApprove(result.data.phpresult);
  };
  const loadUsers2 = async () => {
    const result = await axios.get(
      `http://localhost/project/viewUserOrderReject.php?id=${sessionStorage.getItem(
        "id"
      )}`
    );
    setTableDataReject(result.data.phpresult);
  };

  useEffect(() => {
    loadUsers();
    loadUsers1();
    loadUsers2();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = tableData.filter(
    (item) =>
      item.id.includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredData1 = tableDataApprove.filter(
    (item) =>
      item.id.includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredData2 = tableDataReject.filter(
    (item) =>
      item.id.includes(searchTerm) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="h2 text-center mt-2">VIEW ORDERS</div>
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label for="inputPassword6" class="col-form-label">
            Search
          </label>
        </div>
        <div class="col-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            class="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="h2 text-center mt-2">New Orders</div>
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={`/pic/${item.image}`} alt="" width={"100em"} />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h2 text-center mt-2">Approved Orders</div>
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData1.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={`/pic/${item.image}`} alt="" width={"100em"} />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="h2 text-center mt-2">Rejected Orders</div>
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData2.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={`/pic/${item.image}`} alt="" width={"100em"} />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserOrder;
