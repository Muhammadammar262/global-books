import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewCustomer() {
  const [tableData, setTableData] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/viewCustomer.php");
    setTableData(result.data.phpresult);
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
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <div className="h2 text-center mt-2">View Customers</div>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            Search
          </label>
        </div>
        <div className="col-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                ID
              </th>
              <th scope="col" className="text-center">
                Name
              </th>
              <th scope="col" className="text-center">
                Email
              </th>
              <th scope="col" className="text-center">
                Password
              </th>
              <th scope="col" className="text-center">
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((res) => (
              <tr key={res.id}>
                <td className="text-center">{res.id}</td>
                <td className="text-center">{res.name}</td>
                <td className="text-center">{res.email}</td>
                <td className="text-center">{res.password}</td>
                <td className="text-center">{res.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCustomer;
