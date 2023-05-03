import React, { useState, useEffect } from "react";
import "../cart/cart.css";
import cartImg from "../../assests/cart/cart.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLayoutEffect } from "react";

function Cart() {
  const [count, setCount] = useState(1);

  const [tableData, setTableData] = useState([]);

  const loadUsers1 = async () => {
    const result = await axios.get(
      `http://localhost/project/viewCart.php?id=${sessionStorage.getItem("id")}`
    );
    setTableData(result.data.phpresult);
  };

  const deleteHandle = async (id) => {
    let fData = new FormData();
    fData.append("dId", id);
    console.log(fData);

    await axios({
      method: "post",
      url: "http://localhost/project/deleteCart.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    loadUsers1();
  };
  useLayoutEffect(() => {
    setTimeout(function () {
      loadUsers1();
    }, 1000);
  }, []);

  const increment = () => {
    if (count === 10 || count > 10) {
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count === 1 || count < 0) {
    } else {
      setCount(count - 1);
    }
  };

  const initialValue = 0;
  const sumWithInitial = tableData.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue?.price * currentValue?.quantity,
    initialValue
  );
  return (
    <div className="mb-5">
      <div className="h4 text-center text-white cartPage">SHOPPING CART</div>
      <div className="container table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                PRODUCT
              </th>
              <th scope="col" className="text-center">
                PRICE
              </th>
              <th scope="col" className="text-center">
                QUANTITY
              </th>
              <th scope="col" className="text-center">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((res, i) => (
              <tr key={i}>
                <td className="columnWidthFix">
                  <div className="d-flex">
                    <div>
                      <img src={`/pic/${res.image}`} alt="" width={"100em"} />
                    </div>
                    <div className="d-flex align-items-center ps-3">
                      <div>
                        <span>{res.name}</span>
                        <br></br>
                        <button
                          onClick={() => deleteHandle(res.id)}
                          className="cartDeleteButton"
                        >
                          <RiDeleteBinLine size={"22px"} />
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="mt-5 text-secondary text-center">
                    Rs.{res.price}.00
                  </div>
                </td>
                <td>
                  <div className="mt-5 text-secondary text-center">
                    {res.quantity}
                  </div>
                </td>
                <td>
                  <div className="mt-5 text-center">
                    Rs.{count * res.price}.00
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5 d-flex justify-content-end container">
        <div>
          <div className="fw-bold d-flex justify-content-end">
            SUBTOTAL: RS.{sumWithInitial}.00
          </div>
          <div className="text-secondary my-2">
            Taxes and shipping calculated at checkout
          </div>
          <div className="d-flex justify-content-end">
            <Link to="/shipping" className="btn rounded-pill addToCartBtn">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
