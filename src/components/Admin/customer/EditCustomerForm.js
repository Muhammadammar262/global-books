import React from "react";
import "./editcustomerform.css";

function EditCustomerForm() {
  return (
    <div className="container">
      <div className="h2 mt-3 pb-2 border-bottom">Update Customer</div>
      <form>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            First Name
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter First Name"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Last Price"
          />
        </div>

        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Email Address"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Address"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter City Name"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Phone
          </label>
          <input
            type="number"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Phone Number"
          />
        </div>

        <button className="btn btn-outline-dark w-25 mb-4">Update</button>
      </form>
    </div>
  );
}

export default EditCustomerForm;
