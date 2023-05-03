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
  const carthandle = () => {
    navigate("/cart");
  };
  const updateHandle = (id) => {
    navigate("/productDetail", { state: id });
  };

  return (
    <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
      {tableData &&
        tableData.map((res) => (
          <div class="col">
            <div class="card border-0">
              <div className="card-img-css">
                <img
                  className="card-img"
                  src={require(`../../assests/pic/${res.image}`)}
                  alt=""
                />
              </div>
              <div className="button">
                <button
                  onClick={carthandle}
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
  );
}

export default CategoryPage;
