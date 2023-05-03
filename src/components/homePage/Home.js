import React, { useState, useEffect } from "react";
import axios from "axios";
import "../homePage/home.css";
import Slider1 from "../../assests/homeslider/slider1.png";
import Slider2 from "../../assests/homeslider/slider2.png";
import Slider3 from "../../assests/homeslider/slider3.png";
import Slider4 from "../../assests/homeslider/slider4.png";
import { TbFileCertificate, TbTruckDelivery } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import afterNewArrival from "../../assests/homepage/afterNewArrival.png";
import afterNewArrival1 from "../../assests/homepage/afterNewArrival1.png";
import afterNewArrival2 from "../../assests/homepage/afterNewArrival2.png";
import afterNewArrival21 from "../../assests/homepage/afterNewArrival21.jpg";
import afterNewArrival22 from "../../assests/homepage/afterNewArrival22.png";
import aboutUsPic from "../../assests/homepage/aboutUsPic.png";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();
  // const [id1, setid1] = useState(0);

  const loadUsers = async () => {
    const result = await axios.get(
      "http://localhost/project/view5BestSeller.php"
    );
    setTableData(result.data.phpresult);
  };

  const updateHandle = (id) => {
    navigate("/productDetail", { state: id });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadUsers();
  }, []);

  const loadUsers1 = async (id) => {
    const result = await axios.get(
      `http://localhost/project/updateData.php?id=${id}`
    );
    const userData = result.data.phpresult[0];

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
    await axios({
      method: "post",
      url: "http://localhost/project/addCart.php",
      data: fData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
  };

  const carthandle = (id) => {
    loadUsers1(id);
    navigate("/cart");
  };
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slider1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={Slider4} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="d-flex container-fluid p-2 row row-col-lg-4 row-col-md-2">
        <div className="text-uppercase fw-bold col d-flex align-items-center">
          <TbTruckDelivery size={"38px"} className="me-3" />
          Cash On Delivery
        </div>
        <div className="text-uppercase fw-bold col d-flex align-items-center">
          <GiWorld size={"34px"} className="me-3" />
          WORLD WIDE SHIPPING*
        </div>
        <div className="text-uppercase fw-bold col d-flex align-items-center">
          <TbFileCertificate size={"38px"} className="me-3" />
          IMPORTED & LOCAL BOOKS
        </div>
        <div className="text-uppercase fw-bold col d-flex align-items-center">
          <BsFillStarFill size={"32px"} className="me-3" />
          50+ GENRES & 100K+ Titles
        </div>
      </div>

      <div className="container pt-3">
        <div className="text-uppercase h2">BESTSELLER</div>
        <div className="text-secondary fs-5">Top seller in the week</div>
      </div>

      <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
        {tableData.map((res) => (
          <div class="col">
            <div class="card border-0">
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

      <div className="container pt-3">
        <div className="text-uppercase h2">New Arrivals</div>
      </div>
      <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
        {tableData.map((res) => (
          <div class="col">
            <div class="card border-0">
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

      <div className="d-flex justify-content-between container my-4">
        <div className="afterNewArrival">
          <Link to="/productDetail">
            <img src={afterNewArrival} alt="" width={"100%"} />
          </Link>
        </div>
        <div className="afterNewArrival">
          <Link to="/productDetail">
            <img src={afterNewArrival1} alt="" width={"100%"} />
          </Link>
        </div>
      </div>

      <div className="container my-4 d-flex justify-content-between">
        <div className="afterNewArrival2">
          <Link to="/productDetail">
            <img src={afterNewArrival2} alt="" width={"100%"} />
          </Link>
          <div className="text-center my-3">
            <Link
              to="/productDetail"
              className="text-decoration-none h4 text-dark"
            >
              The Raw Shark Texts
            </Link>
          </div>
          <div className="text-center text-secondary">
            Welcome to UnspaceEric Sanderson wakes up in a place he doesn't
            recognise, unable to remember who he is. All he has left are journal
            entries recalling Clio, a perfect love now gone.So begins a
            thrilling adventure that will send Eric and his cynical cat Ian on a
            search for the Ludovician, the force that is threatening his life,
            and Dr Trey Fidorus, the only man who knows its secrets.
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <Link
              to="/cart"
              className="d-flex align-items-center justify-content-center btn rounded-pill afterNewArrival2Button"
            >
              Order Now <BiRightArrowAlt size={"20px"} />
            </Link>
          </div>
        </div>
        <div className="afterNewArrival2">
          <Link to="/productDetail">
            <img src={afterNewArrival21} alt="" width={"100%"} />
          </Link>
          <div className="text-center my-3">
            <Link
              to="/productDetail"
              className="text-decoration-none h4 text-dark"
            >
              A Court of Mist and Fury (Hardback)
            </Link>
          </div>
          <div className="text-center text-secondary">
            The stunning sequel to Sarah J. Maas' New York Times bestselling.
            <br></br> As Feyre navigates its dark web of politics, passion, and
            dazzling power, a greater evil looms - and she might be key to
            stopping it. But only if she can harness her harrowing gifts, heal
            her fractured soul, and decide how she wishes to shape her future -
            and the future of a world cleaved in two.
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <Link
              to="/cart"
              className="d-flex align-items-center justify-content-center btn rounded-pill afterNewArrival2Button2"
            >
              Order Now <BiRightArrowAlt size={"20px"} />
            </Link>
          </div>
        </div>

        <div className="afterNewArrival2">
          <Link to="/productDetail">
            <img src={afterNewArrival22} alt="" width={"100%"} />
          </Link>
          <div className="text-center my-3">
            <Link
              to="/productDetail"
              className="text-decoration-none h4 text-dark"
            >
              The Pocket Encyclopedia of Aggravation: The Counterintuitive
              Approach to De-stressing
            </Link>
          </div>
          <div className="text-center text-secondary">
            Every time your mobile phone rings, it's an automated PPI call...
            <br></br>
            You've forgotten one of your million different internet passwords...
            <br></br>
            Once again, you're stuck in the slowest lane at the supermarket...
            <br></br>
            This book investigates 97 day-ruining events, slap-in-the-face
            moments and everyday aggravations, and explains why these things
            irritate us quite so much.
          </div>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <Link
              to="/cart"
              className="d-flex align-items-center justify-content-center btn rounded-pill afterNewArrival2Button"
            >
              Order Now <BiRightArrowAlt size={"20px"} />
            </Link>
          </div>
        </div>
      </div>

      <div className="container pt-3">
        <div className="text-uppercase h2">International Bestseller</div>
        <div className="text-secondary fs-5">International Bestseller</div>
      </div>

      <div class="d-flex row row-cols-lg-5 row-cols-sm-1 row-cols-md-3 row-cols-1 g-4 m-4">
        {tableData.map((res) => (
          <div class="col">
            <div class="card border-0">
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

      <div className="my-5 container d-flex justify-content-between">
        <div className="aboutUsPic">
          <img src={aboutUsPic} alt="" width={"100%"} />
        </div>
        <div className="aboutUs d-flex align-items-center">
          <div>
            <div className="h1">About Us</div>
            <div className="text-secondary">
              Established by a group of dedicated book lovers. Global book's
              mission is to create highly knowledgeable, intellectual, and
              well-read Pakistani communities throughout the nation by
              developing a clearer understanding of customer needs and by
              providing customers with a combination of knowledge-propagating
              media. Our aims are to create the biggest online store, providing
              a professional service that allows readers, writers, and sellers
              to go through the books and buy or sell easily from our online
              store.
            </div>
            <div className="text-secondary mt-5">
              We offer a huge collection of books in the diverse category of
              Fiction, Non-fiction, Biographies, History, Religions, Self -Help,
              and Children. We also sell vast collections of Investments and
              Management, Computers, Engineering, Medical, College, and School
              text reference books proposed by different institutes as syllabus
              across the country. Besides this, we also offer a large collection
              of E-Books at very fair pricing.
            </div>
            <div className="text-secondary mt-5">
              we are disposed to provide exciting offers and pleasant discounts
              on our books.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
