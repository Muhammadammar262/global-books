import React, { useState, useEffect } from "react";
import axios from "axios";
import "../productDetail/productDetail.css";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookMessenger, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [tableData, setTableData] = useState([]);

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
  const [bcond, setbcond] = useState("");
  const [bbind, setbbind] = useState("");
  const [blang, setblang] = useState("");
  const [bbarc, setbarc] = useState("");
  const [file, setfile] = useState("");
  const [id, setid] = useState(0);

  const loadUsers = async () => {
    const result = await axios.get(
      `http://localhost/project/updateData.php?id=${data}`
    );
    const userData = result.data.phpresult[0];
    setbName(userData?.name);
    setaName(userData?.author);
    setbc(userData?.category);
    setnpb(userData?.pages);
    setpName(userData?.publisher);
    setpy(userData?.year);
    setbp(userData?.price);
    setbd(userData?.description);
    setbq(userData?.quantity);
    setbsku(userData?.sku);
    setbarc(userData?.barcode);
    setid(data);
    setbbind(userData?.binding);
    setbcond(userData?.bcondition);
    setblang(userData?.language);
    setfile(userData?.image);
  };

  const loadUsers1 = async () => {
    const result = await axios.get(
      "http://localhost/project/view5BestSeller.php"
    );
    setTableData(result.data.phpresult);
  };

  useEffect(() => {
    loadUsers();
    loadUsers1();
    window.scrollTo(0, 0);
  }, []);

  const updateHandle = (id) => {
    window.location.reload();
    navigate("/productDetail", { state: id });
  };

  const loadUsers2 = async () => {
    let fData = new FormData();
    fData.append("bName", bName);
    fData.append("aName", aName);
    fData.append("npb", npb);
    fData.append("pName", pName);
    fData.append("py", py);
    fData.append("bp", bp);
    fData.append("bd", bd);
    fData.append("bc", bc);
    fData.append("bq", count);
    fData.append("bsku", bsku);
    fData.append("bbarc", bbarc);
    fData.append("image", file);
    fData.append("id", id);
    fData.append("user_id", sessionStorage.getItem("id"));

    await axios({
      method: "post",
      url: "http://localhost/project/addCart.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  };

  const carthandle = () => {
    if (sessionStorage.getItem("username") !== null) {
      loadUsers2();
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

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
    <div>
      <div className="container d-flex justify-content-between my-5 row row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-1 g-4">
        <div className="productDetail px-4">
          <img className="" src={`/pic/${file}`} alt="" width={"100%"} />
        </div>
        <div className="productDetail">
          <div className="h3">{bName}</div>
          <div className="text-secondary fs-4">Rs.{bp}.00 PKR</div>
          <div className="fw-bold">Author :{aName}</div>
          <div>
            <span className="fw-bold">Condition:</span>
            <span className="text-secondary"> {bcond}</span>
          </div>
          <div>
            <span className="fw-bold">Binding:</span>
            <span className="text-secondary"> {bbind}</span>
          </div>
          <div>
            <span className="fw-bold">Pages:</span>
            <span className="fw-bold"> {bp}</span>
          </div>
          <div>
            <span className="fw-bold">Publisher:</span>
            <span className="text-secondary"> {pName}</span>
          </div>
          <div>
            <span className="fw-bold">Language:</span>
            <span className="text-secondary"> {blang}</span>
          </div>
          <div>
            <span className="fw-bold">Publication Year:</span>
            <span className="text-secondary"> {py}</span>
          </div>
          <div className="text-secondary my-3">{bd}</div>

          <div className="d-flex">
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
            <button
              onClick={carthandle}
              className="btn rounded-pill addToCartBtn"
            >
              Add to cart
            </button>
          </div>
          <div className="mt-4">
            <span className="text-secondary">SKU:</span>
            <span> {bsku}</span>
          </div>
          <div>
            <span className="text-secondary">Barcode:</span>
            <span> {bbarc}</span>
          </div>
          <div>
            <span className="text-secondary">Availability:</span>
            <span> {bq > 0 ? "In Stock" : "Out of Stock"}</span>
          </div>
          <div>
            <span className="text-secondary">Categories:</span>
            <span> {bc}</span>
          </div>

          <div className="my-4">
            <div className="mt-4 d-flex align-items-center">
              <div>
                <a href="/" className="productIcon">
                  <ImFacebook className="productIconInner" />
                </a>
              </div>
              <div>
                <a href="/" className="productIcon">
                  <AiOutlineTwitter className="productIconInner" />
                </a>
              </div>
              <div>
                <a href="/" className="productIcon">
                  <MdEmail className="productIconInner" />
                </a>
              </div>
              <div>
                <a href="/" className="productIcon">
                  <FaPinterestP className="productIconInner" />
                </a>
              </div>
              <div>
                <a href="/" className="productIcon">
                  <FaFacebookMessenger className="productIconInner" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-success">ASK ON WHATSAPP</button>
          </div>
        </div>
      </div>

      <div className="container py-4 DescriptionBg">
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-dark rounded-pill" disabled>
            Description
          </button>
        </div>
        <div className="fw-bold">Author :{aName}</div>
        <div>
          <span className="fw-bold">Condition:</span>
          <span className="text-secondary"> {bcond}</span>
        </div>
        <div>
          <span className="fw-bold">Binding:</span>
          <span className="text-secondary"> {bbind}</span>
        </div>
        <div>
          <span className="fw-bold">Pages:</span>
          <span className="fw-bold"> {bp}</span>
        </div>
        <div>
          <span className="fw-bold">Publisher:</span>
          <span className="text-secondary"> {pName}</span>
        </div>
        <div>
          <span className="fw-bold">Language:</span>
          <span className="text-secondary"> {blang}</span>
        </div>
        <div>
          <span className="fw-bold">Publication Year:</span>
          <span className="text-secondary"> {py}</span>
        </div>
        <div className="text-secondary my-3">{bd}</div>
      </div>
      <div>
        <div className="d-flex justify-content-center mt-5 h3">
          You may also like
        </div>
        <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
          {tableData.map((res) => (
            <div class="col">
              <div class="card border-0">
                <div className="card-img-css">
                  <img className="card-img" src={`/pic/${res?.image}`} alt="" />
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
                    onClick={() => updateHandle(res?.id)}
                    class="nav-link card-detail-mouse"
                  >
                    <div class="h5 text-center card-link">{res?.name}</div>
                    <p class="card-text text-center card-link">
                      RS {res?.price}.00 PKR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
