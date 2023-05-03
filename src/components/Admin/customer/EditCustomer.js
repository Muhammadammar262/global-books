import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditCustomer() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const loadUsers = async () => {
    const result = await axios.get("http://localhost/project/viewCustomer.php");
    setTableData(result.data.phpresult);
    console.log(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const updateHandle = (id) => {
    navigate("/customereditform", { state: id });
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const filteredData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <div className="h2 text-center mt-2">Edit Customers Details</div>
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
              <th scope="col" className="text-center">
                Update
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
  //   const [tableData, setTableData] = useState([
  //     {
  //       Customerid: 1,
  //       FirstName: "Muhammad",
  //       LastName: "Ammar",
  //       Email: "ammarpervaiz262@gmail.com",
  //       address: "Faisalabad",
  //       city: "Faisalabad",
  //       phone: "03007200000",
  //     },
  //     {
  //       Customerid: 2,
  //       FirstName: "Muhammad",
  //       LastName: "Ammar",
  //       Email: "ammarpervaiz262@gmail.com",
  //       address: "Faisalabad",
  //       city: "Faisalabad",
  //       phone: "03007200000",
  //     },
  //   ]);

  //   const [searchTerm, setSearchTerm] = useState("");
  //   const handleSearch = (e) => {
  //     setSearchTerm(e.target.value);
  //   };
  //   const filteredData = tableData.filter(
  //     (item) =>
  //       item.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       item.LastName.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   return (
  //     <div className="container">
  //       <div className="h2 text-center mt-2">Edit Customers</div>
  //       <div class="row g-3 align-items-center">
  //         <div class="col-auto">
  //           <label for="inputPassword6" class="col-form-label">
  //             Search
  //           </label>
  //         </div>
  //         <div class="col-auto">
  //           <input
  //             type="text"
  //             value={searchTerm}
  //             onChange={handleSearch}
  //             class="form-control"
  //             aria-describedby="passwordHelpInline"
  //             placeholder="Search"
  //           />
  //         </div>
  //       </div>
  //       <div className="table-responsive">
  //         <table class="table">
  //           <thead>
  //             <tr>
  //               <th scope="col">Customer ID</th>
  //               <th scope="col">First Name</th>
  //               <th scope="col">Last Name</th>
  //               <th scope="col">Email</th>
  //               <th scope="col">Address</th>
  //               <th scope="col">City</th>
  //               <th scope="col">Phone</th>
  //               <th scope="col">Update</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {filteredData.map((item) => (
  //               <tr key={item.Customerid}>
  //                 <td>{item.Customerid}</td>
  //                 <td>{item.FirstName}</td>
  //                 <td>{item.LastName}</td>
  //                 <td>{item.Email}</td>
  //                 <td>{item.address}</td>
  //                 <td>{item.city}</td>
  //                 <td>{item.phone}</td>

  //                 <td>
  //                   <Link to="/customereditform" className="btn btn-primary">
  //                     Update
  //                   </Link>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );
}

export default EditCustomer;
