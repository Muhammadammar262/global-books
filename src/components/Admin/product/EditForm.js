import React from "react";

function EditForm() {
  return (
    <div className="container">
      <div className="h2 mt-3 pb-2 border-bottom">Update Product</div>
      <form>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Name"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Product Price
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Price"
          />
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Product Description
          </label>
          <div>
            <textarea
              class="form-control w-50"
              placeholder="Product Description"
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>
        <div class="my-3">
          <label for="exampleInputEmail1" class="form-label">
            Product Category
          </label>
          <input
            type="text"
            class="form-control w-50"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Product Category"
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">
            Product Image
          </label>
          <input class="form-control w-50" type="file" id="formFile" />
        </div>
        <button className="btn btn-outline-dark w-25 mb-4">Update</button>
      </form>
    </div>
  );
}

export default EditForm;
