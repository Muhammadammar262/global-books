import React, { useState } from "react";
import "../cart/cart.css";
import cartImg from "../../assests/cart/cart.png";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Cart() {
  const [count, setCount] = useState(1);

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

  return (
    <div className="mb-5">
      <div className="h4 text-center text-white cartPage">SHOPPING CART</div>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">PRODUCT</th>
              <th scope="col">PRICE</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="columnWidthFix">
                <div className="d-flex">
                  <div>
                    <img src={cartImg} alt="" width={"100em"} />
                  </div>
                  <div className="d-flex align-items-center ps-3">
                    <div>
                      <span>
                        The Subtle Art Of Not Giving A F*Ck -
                        (Mass-Market)-(Budget-Print)
                      </span>
                      <br></br>
                      <button className="cartDeleteButton">
                        <RiDeleteBinLine size={"22px"} />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="mt-5 text-secondary">Rs.395.00</div>
              </td>
              <td>
                <div className="mt-5">
                  <button
                    className="numberInputButton rounded-pill"
                    onClick={increment}
                  >
                    +
                  </button>
                  <input
                    className="numberImput rounded-pill"
                    type={"number"}
                    value={count}
                  />
                  <button
                    className="numberInputButton rounded-pill"
                    onClick={decrement}
                  >
                    -
                  </button>
                </div>
              </td>
              <td>
                <div className="mt-5">Rs.395.00</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-5 d-flex justify-content-end container">
        <div>
          <div className="fw-bold d-flex justify-content-end">
            SUBTOTAL: RS.395.00
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
