import React, { useState } from "react";
import { Link } from "react-router-dom";

function EditCustomer() {
  const [tableData, setTableData] = useState([
    {
      Customerid: 1,
      FirstName: "Muhammad",
      LastName: "Ammar",
      Email: "ammarpervaiz262@gmail.com",
      address: "Faisalabad",
      city: "Faisalabad",
      phone: "03007200000",
    },
    {
      Customerid: 2,
      FirstName: "Muhammad",
      LastName: "Ammar",
      Email: "ammarpervaiz262@gmail.com",
      address: "Faisalabad",
      city: "Faisalabad",
      phone: "03007200000",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = tableData.filter(
    (item) =>
      item.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.LastName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <div className="h2 text-center mt-2">Edit Customers</div>
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
              <th scope="col">Customer ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">Phone</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.Customerid}>
                <td>{item.Customerid}</td>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>{item.Email}</td>
                <td>{item.address}</td>
                <td>{item.city}</td>
                <td>{item.phone}</td>

                <td>
                  <Link to="/customereditform" className="btn btn-primary">
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditCustomer;
