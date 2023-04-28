import React, { useState } from "react";

function DeleteProduct() {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      ProductName:
        "The Subtle Art Of Not Giving A F*Ck - (Mass-Market) - (Budget-Print)",
      ProductPrice: "Rs.395.00",
      ProductDescription:
        "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better,happier people.",
      ProductCategory: "English Books",
    },
    {
      id: 1,
      ProductName:
        "The Subtle Art Of Not Giving A F*Ck - (Mass-Market) - (Budget-Print)",
      ProductPrice: "Rs.395.00",
      ProductDescription:
        "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be positive all the time so that we can truly become better,happier people.",
      ProductCategory: "English Books",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = tableData.filter(
    (item) =>
      item.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ProductCategory.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const newData = tableData.filter((item) => item.id !== id);
    setTableData(newData);
  };
  return (
    <div className="container">
      <div className="h2 text-center mt-2">Delete PRODUCTS</div>
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
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product Category</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.ProductName}</td>
                <td>{item.ProductPrice}</td>
                <td>{item.ProductDescription}</td>
                <td>{item.ProductCategory}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
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

export default DeleteProduct;
