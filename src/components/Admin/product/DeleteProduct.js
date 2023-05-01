import React, { useState, useEffect } from "react";
import axios from "axios";

function DeleteProduct() {
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
      <div className="h2 text-center mt-2">DELETE BOOKS</div>
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
                Book Name
              </th>
              <th scope="col" className="text-center">
                Book Category
              </th>
              <th scope="col" className="text-center">
                Book Author Name
              </th>
              <th scope="col" className="text-center">
                Book Price
              </th>
              <th scope="col" className="text-center">
                Book Year
              </th>
              <th scope="col" className="text-center">
                Delete Book
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((res) => (
              <tr key={res.id}>
                <td className="text-center">{res.id}</td>
                <td className="text-center">{res.name}</td>
                <td className="text-center">{res.category}</td>
                <td className="text-center">{res.author}</td>
                <td className="text-center">{res.price} PKR</td>
                <td className="text-center">{res.year}</td>
                <td className="text-center">
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeleteProduct;
