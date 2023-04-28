import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewProduct() {
  const [tableData, setTableData] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/view.php");
    setTableData(result.data.phpresult);
    console.log(result.data);
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
      <div className="h2 text-center mt-2">VIEW BOOKS</div>
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
              <th scope="col">ID</th>
              <th scope="col">Book Name</th>
              <th scope="col">Book Price</th>
              <th scope="col">Book Description</th>
              <th scope="col">Book Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((res) => (
              <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{res.price}</td>
                <td>{res.description}</td>
                <td>{res.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewProduct;
