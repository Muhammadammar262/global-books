import React, { useState } from "react";
import "../homePage/home.css";
import Slider1 from "../../assests/homeslider/slider1.png";
import Slider2 from "../../assests/homeslider/slider2.png";
import Slider3 from "../../assests/homeslider/slider3.png";
import Slider4 from "../../assests/homeslider/slider4.png";
import { TbFileCertificate, TbTruckDelivery } from "react-icons/tb";
import { GiWorld } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiRightArrowAlt } from "react-icons/bi";
import bestSeller1 from "../../assests/homepage/bestSeller1.png";
import bestSeller2 from "../../assests/homepage/bestSeller2.png";
import bestSeller3 from "../../assests/homepage/bestSeller3.png";
import bestSeller4 from "../../assests/homepage/bestSeller4.png";
import bestSeller5 from "../../assests/homepage/bestSeller5.png";
import bestSeller6 from "../../assests/homepage/bestSeller6.png";
import newArival1 from "../../assests/homepage/newArrival1.png";
import newArival2 from "../../assests/homepage/newArrival2.png";
import newArival3 from "../../assests/homepage/newArrival3.png";
import newArival4 from "../../assests/homepage/newArrival4.png";
import newArival5 from "../../assests/homepage/newArrival5.png";
import newArival6 from "../../assests/homepage/newArrival6.png";
import afterNewArrival from "../../assests/homepage/afterNewArrival.png";
import afterNewArrival1 from "../../assests/homepage/afterNewArrival1.png";
import afterNewArrival2 from "../../assests/homepage/afterNewArrival2.png";
import afterNewArrival21 from "../../assests/homepage/afterNewArrival21.jpg";
import afterNewArrival22 from "../../assests/homepage/afterNewArrival22.png";
import iBSellerPic1 from "../../assests/homepage/iBSeller1.png";
import iBSellerPic2 from "../../assests/homepage/iBSeller2.png";
import iBSellerPic3 from "../../assests/homepage/iBSeller3.png";
import iBSellerPic4 from "../../assests/homepage/iBSeller4.png";
import iBSellerPic5 from "../../assests/homepage/iBSeller5.png";
import iBSellerPic6 from "../../assests/homepage/iBSeller6.png";
import aboutUsPic from "../../assests/homepage/aboutUsPic.png";
import { Link } from "react-router-dom";

function Home() {
  const [isHovered, setHover] = useState(false);
  const [isHovered1, setHover1] = useState(false);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);
  const [isHovered4, setHover4] = useState(false);
  const [isHovered5, setHover5] = useState(false);
  const [isButtonHovered, setButtonHover] = useState(false);
  const [isButtonHovered1, setButtonHover1] = useState(false);
  const [isButtonHovered2, setButtonHover2] = useState(false);
  const [isButtonHovered3, setButtonHover3] = useState(false);
  const [isButtonHovered4, setButtonHover4] = useState(false);
  const [isButtonHovered5, setButtonHover5] = useState(false);

  const [newArrival, setNewArrival] = useState(false);
  const [newArrival1, setNewArrival1] = useState(false);
  const [newArrival2, setNewArrival2] = useState(false);
  const [newArrival3, setNewArrival3] = useState(false);
  const [newArrival4, setNewArrival4] = useState(false);
  const [newArrival5, setNewArrival5] = useState(false);
  const [ButtonNewArrival, setButtonNewArrival] = useState(false);
  const [ButtonNewArrival1, setButtonNewArrival1] = useState(false);
  const [ButtonNewArrival2, setButtonNewArrival2] = useState(false);
  const [ButtonNewArrival3, setButtonNewArrival3] = useState(false);
  const [ButtonNewArrival4, setButtonNewArrival4] = useState(false);
  const [ButtonNewArrival5, setButtonNewArrival5] = useState(false);

  const [iBSeller, setiBSeller] = useState(false);
  const [iBSeller1, setiBSeller1] = useState(false);
  const [iBSeller2, setiBSeller2] = useState(false);
  const [iBSeller3, setiBSeller3] = useState(false);
  const [iBSeller4, setiBSeller4] = useState(false);
  const [iBSeller5, setiBSeller5] = useState(false);
  const [ButtoniBSeller, setButtoniBSeller] = useState(false);
  const [ButtoniBSeller1, setButtoniBSeller1] = useState(false);
  const [ButtoniBSeller2, setButtoniBSeller2] = useState(false);
  const [ButtoniBSeller3, setButtoniBSeller3] = useState(false);
  const [ButtoniBSeller4, setButtoniBSeller4] = useState(false);
  const [ButtoniBSeller5, setButtoniBSeller5] = useState(false);
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
      <div className="d-flex container py-2">
        <div className="text-uppercase fw-bold afterSlider d-flex align-items-center">
          <TbTruckDelivery size={"38px"} className="me-3" />
          Cash On Delivery
        </div>
        <div className="text-uppercase fw-bold afterSlider d-flex align-items-center">
          <GiWorld size={"34px"} className="me-3" />
          WORLD WIDE SHIPPING*
        </div>
        <div className="text-uppercase fw-bold afterSlider d-flex align-items-center">
          <TbFileCertificate size={"38px"} className="me-3" />
          IMPORTED & LOCAL BOOKS
        </div>
        <div className="text-uppercase fw-bold afterSlider d-flex align-items-center">
          <BsFillStarFill size={"32px"} className="me-3" />
          50+ GENRES & 100K+ Titles
        </div>
      </div>
      <div className="container my-4">
        <div className="text-uppercase h2">BESTSELLER</div>
        <div className="text-secondary fs-5">Top seller in the week</div>
        <div className="d-flex justify-content-between mt-4">
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller1}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover(true)}
                          onMouseLeave={() => setButtonHover(false)}
                          className="fs-6"
                        >
                          {isButtonHovered ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                The Subtle Art Of Not Giving A F*Ck -<br></br>
                (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.395.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setHover1(true)}
                onMouseLeave={() => setHover1(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller2}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered1 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover1(true)}
                          onMouseLeave={() => setButtonHover1(false)}
                          className="fs-6"
                        >
                          {isButtonHovered1 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Zero To One Notes On Start-Ups -<br></br>
                (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.345.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller3}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered2 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover2(true)}
                          onMouseLeave={() => setButtonHover2(false)}
                          className="fs-6"
                        >
                          {isButtonHovered2 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                No Longer Human -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.295.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller4}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered3 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover3(true)}
                          onMouseLeave={() => setButtonHover3(false)}
                          className="fs-6"
                        >
                          {isButtonHovered3 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                The Midnight Library -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.345.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setHover4(true)}
                onMouseLeave={() => setHover4(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller5}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered4 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover4(true)}
                          onMouseLeave={() => setButtonHover4(false)}
                          className="fs-6"
                        >
                          {isButtonHovered4 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Twisted Love -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.375.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded betterSellerContainer">
              <div
                className="imageContainer"
                onMouseOver={() => setHover5(true)}
                onMouseLeave={() => setHover5(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={bestSeller6}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {isHovered5 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonHover5(true)}
                          onMouseLeave={() => setButtonHover5(false)}
                          className="fs-6"
                        >
                          {isButtonHovered5 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                The Mountain Is You -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.375.00 PKR</div>
          </div>
        </div>
      </div>
      <div className="my-5 container">
        <div className="text-uppercase h2">New Arrivals</div>
        <div className="d-flex justify-content-between mt-4">
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival(true)}
                onMouseLeave={() => setNewArrival(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival1}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival(true)}
                          onMouseLeave={() => setButtonNewArrival(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                How The World Really Works -<br></br>
                (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.395.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival1(true)}
                onMouseLeave={() => setNewArrival1(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival2}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival1 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival1(true)}
                          onMouseLeave={() => setButtonNewArrival1(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival1 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Don'T Believe Everything You Think -<br></br>{" "}
                (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.395.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival2(true)}
                onMouseLeave={() => setNewArrival2(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival3}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival2 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival2(true)}
                          onMouseLeave={() => setButtonNewArrival2(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival2 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Icebreaker -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.475.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival3(true)}
                onMouseLeave={() => setNewArrival3(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival4}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival3 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival3(true)}
                          onMouseLeave={() => setButtonNewArrival3(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival3 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Think And Grow Rich -<br></br> (The Original 1937 Edition)
                (Readings Classics)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.495.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival4(true)}
                onMouseLeave={() => setNewArrival4(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival5}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival4 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival4(true)}
                          onMouseLeave={() => setButtonNewArrival4(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival4 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                The Stolen Heir -<br></br> (Mass-Market)-(Budget-Print)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.345.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded betterSellerContainer">
              <div
                className="imageContainer"
                onMouseOver={() => setNewArrival5(true)}
                onMouseLeave={() => setNewArrival5(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={newArival6}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {newArrival5 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtonNewArrival5(true)}
                          onMouseLeave={() => setButtonNewArrival5(false)}
                          className="fs-6"
                        >
                          {ButtonNewArrival5 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Secrets Of Divine Love:<br></br> A Spiritual Journey Into The
                Heart Of Islam
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.1,099.00 PKR</div>
          </div>
        </div>
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
      <div className="my-5 container">
        <div className="text-uppercase h2">International Bestseller</div>
        <div className="text-secondary fs-5">International Bestseller</div>

        <div className="d-flex justify-content-between mt-4">
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller(true)}
                onMouseLeave={() => setiBSeller(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic1}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller(true)}
                          onMouseLeave={() => setButtoniBSeller(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Harry Potter Box Set Special Edition Paperback THE COMPLETE
                COLLECTION (7 BOOKS BOX SET)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.8.999.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller1(true)}
                onMouseLeave={() => setiBSeller1(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic2}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller1 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller1(true)}
                          onMouseLeave={() => setButtoniBSeller1(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller1 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                3d Animals In Actions: Creepy & Crawly (incredible
                Invertebrates)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.195.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller2(true)}
                onMouseLeave={() => setiBSeller2(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic3}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller2 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller2(true)}
                          onMouseLeave={() => setButtoniBSeller2(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller2 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                An Apple A Day: Old-Fashioned Proverbs and Why They Still Work
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.475.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller3(true)}
                onMouseLeave={() => setiBSeller3(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic4}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller3 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller3(true)}
                          onMouseLeave={() => setButtoniBSeller3(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller3 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                Aliens: Star Wars: Tales from a Galaxy Far, Far Away
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.795.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller4(true)}
                onMouseLeave={() => setiBSeller4(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic5}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller4 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller4(true)}
                          onMouseLeave={() => setButtoniBSeller4(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller4 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                10 Minutes 38 Seconds in this Strange World by Elif Shafak
                (Hardback)
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.1395.00 PKR</div>
          </div>
          <div className="bestSeller">
            <div className="shadow px-3 mb-5 bg-body-tertiary rounded betterSellerContainer">
              <div
                className="imageContainer"
                onMouseOver={() => setiBSeller5(true)}
                onMouseLeave={() => setiBSeller5(false)}
              >
                <Link to="/productDetail">
                  <img
                    src={iBSellerPic6}
                    width="100%"
                    alt=""
                    className="bestSellerImage"
                  />
                  {iBSeller5 && (
                    <div>
                      <Link to="/cart" className="btn bestSellerWishButton">
                        <AiOutlineHeart size={"25px"} />
                      </Link>
                      <Link
                        to="/cart"
                        className="btn btn-sm btn-dark rounded-pill bestSellerButton"
                        variant="primary"
                      >
                        <div
                          onMouseOver={() => setButtoniBSeller5(true)}
                          onMouseLeave={() => setButtoniBSeller5(false)}
                          className="fs-6"
                        >
                          {ButtoniBSeller5 ? (
                            <AiOutlineShoppingCart size={"18px"} />
                          ) : (
                            "Add to Cart"
                          )}
                        </div>
                      </Link>
                    </div>
                  )}
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/productDetail"
                className="text-decoration-none text-dark fw-semibold bestSellerText"
              >
                100 Things To Do When Youre Dead
              </Link>
            </div>
            <div className="text-center text-secondary">Rs.295.00 PKR</div>
          </div>
        </div>
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
