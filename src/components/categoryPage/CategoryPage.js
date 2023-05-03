import React, { useState, useEffect } from "react";
import axios from "axios";
import "../categoryPage/categoryPage.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [tableData, setTableData] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/project/viewCategory.php?id=${data}`
    );
    setTableData(result.data.phpresult);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers1 = async (id) => {
    const result = await axios.get(
      `http://localhost/project/updateData.php?id=${id}`
    );
    const userData = result.data.phpresult[0];
    console.log(sessionStorage.getItem("username"));

    let fData = new FormData();
    fData.append("bName", userData.name);
    fData.append("aName", userData.author);
    fData.append("npb", userData.pages);
    fData.append("pName", userData.publisher);
    fData.append("py", userData.year);
    fData.append("bp", userData.price);
    fData.append("bd", userData.description);
    fData.append("bc", userData.category);
    fData.append("bq", 1);
    fData.append("bsku", userData.sku);
    fData.append("bbarc", userData.barcode);
    fData.append("image", userData.image);
    fData.append("id", userData.id);
    fData.append("user_id", sessionStorage.getItem("id"));

    await axios({
      method: "post",
      url: "http://localhost/project/addCart.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  };
  const carthandle = (id) => {
    if (sessionStorage.getItem("username") !== null) {
      loadUsers1(id);
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };
  const updateHandle = (id) => {
    navigate("/productDetail", { state: id });
  };

  return (
    <div>
      <div className="h1 text-center text-white categoryPage">{data}</div>
      <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
        {tableData &&
          tableData.map((res) => (
            <div class="col">
              <div class="card card-height border-0">
                <div className="card-img-css">
                  <img className="card-img" src={`/pic/${res.image}`} alt="" />
                </div>
                <div className="button">
                  <button
                    onClick={() => carthandle(res.id)}
                    className="btn btn-dark d-flex align-items-center"
                  >
                    <AiOutlineShoppingCart size={"18px"} className="me-2" /> Add
                    to Cart
                  </button>
                </div>
                <div class="card-body">
                  <div
                    onClick={() => updateHandle(res.id)}
                    class="nav-link card-detail-mouse"
                  >
                    <div class="h5 text-center card-link">{res.name}</div>
                    <p class="card-text text-center card-link">
                      RS {res.price}.00 PKR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
