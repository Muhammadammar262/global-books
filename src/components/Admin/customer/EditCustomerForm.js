import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./editcustomerform.css";

function EditCustomerForm() {
  const location = useLocation();
  const data = location.state;
  const [id, setid] = useState(0);
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/project/updateCustomerData.php?id=${data}`
    );

    const userData = result.data.phpresult[0];
    setName(userData.name);
    setemail(userData.email);
    setpassword(userData.password);
    setphone(userData.phone);
    setid(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  function submithandler() {
    let fData = new FormData();
    fData.append("id", data);
    fData.append("Name", Name);
    fData.append("email", email);
    fData.append("password", password);
    fData.append("phone", phone);

    axios({
      method: "post",
      url: "http://localhost/project/updateCustomer.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  }

  return (
    <div className="container">
      <div className="h2 mt-3 pb-2 border-bottom text-center">
        Update Customer Details
      </div>
      <form>
        <div className="my-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Author Name"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Password</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Number of pages"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div className="my-3">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Publisher Name"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>

        <button
          className="btn btn-outline-dark w-75 mb-4"
          onClick={submithandler}
        >
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default EditCustomerForm;
