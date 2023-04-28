import React from "react";
import "../shipping/shipping.css";
import { IoIosArrowBack } from "react-icons/io";
import shipping from "../../assests/shipping/shipping.png";
import { Link } from "react-router-dom";

function Shipping() {
  return (
    <div className="d-flex justify-content-between">
      <div className="shippingLeft">
        <div className="container shippingLeftMargin">
          <div className="fs-4">Global Books</div>
          <div className="mt-4">
            <form>
              <div class="form-group">
                <label for="contactInformation" className="fs-5">
                  Contact Information
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="contactInformation"
                  placeholder="Email or mobile phone number"
                />
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkBox"
                />
                <label class="form-check-label text-dark" for="checkBox">
                  Email me with news and offers
                </label>
              </div>
              <div className="fs-5 my-2">Shipping address</div>
              <div class="form-group">
                <label for="dropDown">Country/Region</label>
                <select class="form-control mt-2" id="dropDown">
                  <option>Pakistain</option>
                  <option>India</option>
                  <option>Afghanistan</option>
                  <option>America</option>
                  <option>Indonashia</option>
                </select>
              </div>
              <div class="row mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="company"
                  placeholder="Company (Optional)"
                />
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Address"
                />
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="apartment"
                  placeholder="Apartment, suite etc. (optional)"
                />
              </div>
              <div class="row mt-2">
                <div class="col">
                  <input type="text" class="form-control" placeholder="City" />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkBox1"
                />
                <label class="form-check-label text-dark" for="checkBox1">
                  Text me with news and offers
                </label>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <Link
                    to="/cart"
                    className="btn text-primary d-flex align-items-center"
                  >
                    <IoIosArrowBack className="me-3" />
                    Return to cart
                  </Link>
                </div>
                <div>
                  <button className="btn btn-primary">
                    Continue to shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="shippingRight">
        <div className="container shippingLeftMargin ">
          <div className="d-flex border-bottom pb-3">
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <img src={shipping} alt="" />
              </div>
              <div className="px-3">
                The Subtle Art Of Not Giving A F*Ck -
                (Mass-Market)-(Budget-Print)
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              Rs395.00
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 pb-3 border-bottom">
            <div className="text-secondary">Subtotal</div>
            <div className="text-secondary">Rs395.00</div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 ">
            <div>Total</div>
            <div>
              <span className="text-secondary">PKR</span>
              <span className="fs-5"> Rs395.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
