import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProducts() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/view.php");
    setTableData(result.data.phpresult);
    console.log(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const updateHandle = (id) => {
    navigate("/producteditform", { state: id });
  };

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
      <div className="h2 text-center mt-2">Edit Book Details</div>
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
                Edit Book Details
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
                  <button
                    onClick={() => updateHandle(res.id)}
                    className="btn btn-primary"
                  >
                    Update
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

export default EditProducts;
