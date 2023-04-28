import React, { useState } from "react";

function ViewOrders() {
  const [tableData, setTableData] = useState([
    {
      Orderid: 1,
      ProductName:
        "The Subtle Art Of Not Giving A F*Ck - (Mass-Market) - (Budget-Print)",
      ProductPrice: "Rs.395.00",
      Quantity: "2",
      ProductCategory: "English Books",
      CustomerID: "25",
    },
    {
      Orderid: 1,
      ProductName:
        "The Subtle Art Of Not Giving A F*Ck - (Mass-Market) - (Budget-Print)",
      ProductPrice: "Rs.395.00",
      Quantity: "2",
      ProductCategory: "English Books",
      CustomerID: "25",
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
      <div className="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Product Category</th>
              <th scope="col">Customer ID</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.Orderid}>
                <td>{item.Orderid}</td>
                <td>{item.ProductName}</td>
                <td>{item.ProductPrice}</td>
                <td>{item.Quantity}</td>
                <td>{item.ProductCategory}</td>
                <td>{item.CustomerID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewOrders;
