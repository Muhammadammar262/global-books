import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteOrder() {
  const [tableData, setTableData] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/viewOrder.php");
    setTableData(result.data.phpresult);
  };

  const deleteHandle = (id) => {
    let fData = new FormData();
    fData.append("dId", id);

    axios({
      method: "post",
      url: "http://localhost/project/deleteOrders.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    window.location.reload();
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = tableData.filter(
    (item) =>
      item.id.includes(searchTerm) || item.product_id.includes(searchTerm)
  );

  return (
    <div className="container">
      <div className="h2 text-center mt-2">Delete Orders</div>
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
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                Order ID
              </th>
              <th scope="col" className="text-center">
                Product ID
              </th>
              <th scope="col" className="text-center">
                User ID
              </th>
              <th scope="col" className="text-center">
                Quantity
              </th>
              <th scope="col" className="text-center">
                Price
              </th>
              <th scope="col" className="text-center">
                Status
              </th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                Address
              </th>
              <th scope="col" className="text-center">
                Phone
              </th>
              <th scope="col" className="text-center">
                First
              </th>
              <th scope="col" className="text-center">
                Last
              </th>
              <th scope="col" className="text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.id}</td>
                <td className="text-center">{item.product_id}</td>
                <td className="text-center">{item.user_id}</td>
                <td className="text-center">{item.quantity}</td>
                <td className="text-center">{item.price}</td>
                <td className="text-center">{item.status}</td>
                <td className="text-center">{item.email}</td>
                <td className="text-center">{item.address}</td>
                <td className="text-center">{item.phone}</td>
                <td className="text-center">{item.first}</td>
                <td className="text-center">{item.last}</td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteHandle(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteOrder;
