import React, { useState, useEffect } from "react";
import "../shipping/shipping.css";
import { IoIosArrowBack } from "react-icons/io";
import axios from "axios";

function Shipping() {
  const [tableData, setTableData] = useState([]);
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");
  const [email, setemail] = useState("");
  const [country, setcountry] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [postal, setpostal] = useState("");
  const [phone, setphone] = useState("");

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/project/viewCart.php?id=${sessionStorage.getItem("id")}`
    );
    setTableData(result.data.phpresult);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  function submithandler() {
    let fData = new FormData();
    fData.append("first", first);
    fData.append("last", last);
    fData.append("email", email);
    fData.append("country", country);
    fData.append("address", address);
    fData.append("city", city);
    fData.append("postal", postal);
    fData.append("phone", phone);
    fData.append("user_id", sessionStorage.getItem("id"));

    axios({
      method: "post",
      url: "http://localhost/project/shipping.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  }

  const initialValue = 0;
  const sumWithInitial = tableData.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue?.price * currentValue?.quantity,
    initialValue
  );
  return (
    <div className=" container-fluid row row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
      <div className="col">
        <div className="container shippingLeftMargin">
          <div className="fs-4">Global Books</div>
          <div className="mt-4">
            <form>
              <div class="form-group">
                <label for="contactInformation" className="fs-5">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email or mobile phone number"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
              </div>

              <div className="fs-5 my-2">Shipping address</div>

              <div class="row mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                    value={first}
                    onChange={(e) => setfirst(e.target.value)}
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                    value={last}
                    onChange={(e) => setlast(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setaddress(e.target.value)}
                  required
                />
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  required
                />
              </div>

              <div class="row mt-2">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Postal Code"
                    value={postal}
                    onChange={(e) => setpostal(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-2">
                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setphone(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  <button className="btn text-primary d-flex align-items-center textadjust">
                    <IoIosArrowBack className="me-3" />
                    Return to cart
                  </button>
                </div>
                <div className="textadjust">
                  <button
                    className="btn btn-primary"
                    onClick={() => submithandler()}
                  >
                    Continue to shipping
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="container shippingLeftMargin ">
          <div className="d-flex border-bottom pb-3">
            <div className="">
              {tableData.map((res, i) => (
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div>
                    <img src={`/pic/${res.image}`} width={"100em"} alt="" />
                  </div>
                  <div className="px-3">{res.name}</div>
                  <div className="px-3">{res.quantity}</div>

                  <div className="px-3">Rs.{res.price * res.quantity}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3 ">
            <div>Total</div>
            <div>
              <span className="text-secondary">PKR</span>
              <span className="fs-5"> Rs.{sumWithInitial}.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
