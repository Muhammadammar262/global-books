import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [bName, setbName] = useState("");
  const [aName, setaName] = useState("");
  const [npb, setnpb] = useState();
  const [pName, setpName] = useState("");
  const [py, setpy] = useState();
  const [bp, setbp] = useState();
  const [bd, setbd] = useState("");
  const [bc, setbc] = useState("");
  const [bq, setbq] = useState();
  const [bsku, setbsku] = useState("");
  const [bbarc, setbarc] = useState("");
  const [file, setFile] = useState(null);

  function submithandler() {
    let fData = new FormData();
    fData.append("bName", bName);
    fData.append("aName", aName);
    fData.append("npb", npb);
    fData.append("pName", pName);
    fData.append("py", py);
    fData.append("bp", bp);
    fData.append("bd", bd);
    fData.append("bc", bc);
    fData.append("bq", bq);
    fData.append("bsku", bsku);
    fData.append("bbarc", bbarc);
    fData.append("image", file);

    axios({
      method: "post",
      url: "http://localhost/project/addProduct.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });

    navigate("/productview");
  }

  return (
    <div className="container">
      <div className="h2 mt-3 pb-2 border-bottom text-center">Add Book</div>
      <form>
        <div className="my-3">
          <label className="form-label">Book Name</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Name"
            value={bName}
            onChange={(e) => setbName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Author Name</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Author Name"
            value={aName}
            onChange={(e) => setaName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Number of pages in book</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Number of pages"
            value={npb}
            onChange={(e) => setnpb(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Publisher Name</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Publisher Name"
            value={pName}
            onChange={(e) => setpName(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Publication Year</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Publication Year"
            value={py}
            onChange={(e) => setpy(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Book Price</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Price"
            value={bp}
            onChange={(e) => setbp(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Book Description</label>
          <div>
            <textarea
              className="form-control w-75"
              placeholder="Enter Book Description"
              value={bd}
              onChange={(e) => setbd(e.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <div className="my-3">
          <label className="form-label">Book Category</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Category"
            value={bc}
            onChange={(e) => setbc(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Book Quantity</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Quantity"
            value={bq}
            onChange={(e) => setbq(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Book SKU Number</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book SKU Number"
            value={bsku}
            onChange={(e) => setbsku(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label className="form-label">Book Barcode</label>
          <input
            type="text"
            className="form-control w-75"
            placeholder="Enter Book Barcode"
            value={bbarc}
            onChange={(e) => setbarc(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Book Image</label>
          <input
            className="form-control w-75"
            type="file"
            id="formFile"
            onChange={(event) => setFile(event.target.files[0])}
          />
        </div>
        <button
          className="btn btn-outline-dark w-75 mb-4"
          onClick={submithandler}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
