import React, { useState } from "react";
import "../productDetail/productDetail.css";
import Product from "../../assests/productDetail/product.png";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookMessenger, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import bestSeller3 from "../../assests/homepage/bestSeller3.png";
import bestSeller4 from "../../assests/homepage/bestSeller4.png";
import bestSeller5 from "../../assests/homepage/bestSeller5.png";
import bestSeller6 from "../../assests/homepage/bestSeller6.png";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductDetail() {
  const [count, setCount] = useState(1);
  const [isHovered2, setHover2] = useState(false);
  const [isHovered3, setHover3] = useState(false);
  const [isHovered4, setHover4] = useState(false);
  const [isHovered5, setHover5] = useState(false);
  const [isButtonHovered2, setButtonHover2] = useState(false);
  const [isButtonHovered3, setButtonHover3] = useState(false);
  const [isButtonHovered4, setButtonHover4] = useState(false);
  const [isButtonHovered5, setButtonHover5] = useState(false);

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
      <div className="container d-flex justify-content-between my-5">
        <div className="productDetail px-4">
          <img src={Product} alt="" width={"100%"} />
        </div>
        <div className="productDetail">
          <div className="h3">
            The Subtle Art Of Not Giving A F*Ck - (Mass-Market)-(Budget-Print)
          </div>
          <div className="text-secondary fs-4">Rs.395.00 PKR</div>
          <div className="fw-bold">Author :Mark Manson</div>
          <div>
            <span className="fw-bold">Condition:</span>
            <span className="text-secondary"> New</span>
          </div>
          <div>
            <span className="fw-bold">Binding:</span>
            <span className="text-secondary"> Paper Back</span>
          </div>
          <div>
            <span className="fw-bold">Pages:</span>
            <span className="fw-bold"> 304</span>
          </div>
          <div>
            <span className="fw-bold">Publisher:</span>
            <span className="text-secondary"> Local Books</span>
          </div>
          <div>
            <span className="fw-bold">Language:</span>
            <span className="text-secondary"> English</span>
          </div>
          <div>
            <span className="fw-bold">Publication Year:</span>
            <span className="text-secondary"> 2021</span>
          </div>
          <div className="text-secondary my-3">
            #1 New York Times Bestseller
          </div>
          <div className="text-secondary mb-3">Over 10 million copies sold</div>
          <div className="text-secondary mb-3">
            In this generation-defining self-help guide, a superstar blogger
            cuts through the crap to show us how to stop trying to be "positive"
            all the time so that we can truly become better, happier people.
          </div>
          <div className="text-secondary mb-3">
            For decades, we’ve been told that positive thinking is the key to a
            happy, rich life. "F**k positivity," Mark Manson says. "Let’s be
            honest, shit is f**ked and we have to live with it." In his wildly
            popular Internet blog, Manson doesn’t sugarcoat or equivocate. He
            tells it like it is—a dose of raw, refreshing, honest truth that is
            sorely lacking today. The Subtle Art of Not Giving a F**k is his
            antidote to the coddling, let’s-all-feel-good mindset that has
            infected modern society and spoiled a generation, rewarding them
            with gold medals just for showing up.
          </div>
          <div className="text-secondary mb-3">
            Manson makes the argument, backed both by academic research and
            well-timed poop jokes, that improving our lives hinges not on our
            ability to turn lemons into lemonade, but on learning to stomach
            lemons better. Human beings are flawed and limited—"not everybody
            can be extraordinary, there are winners and losers in society, and
            some of it is not fair or your fault." Manson advises us to get to
            know our limitations and accept them. Once we embrace our fears,
            faults, and uncertainties, once we stop running and avoiding and
            start confronting painful truths, we can begin to find the courage,
            perseverance, honesty, responsibility, curiosity, and forgiveness we
            seek.
          </div>
          <div className="text-secondary mb-3">
            There are only so many things we can give a f**k about so we need to
            figure out which ones really matter, Manson makes clear. While money
            is nice, caring about what you do with your life is better, because
            true wealth is about experience. A much-needed
            grab-you-by-the-shoulders-and-look-you-in-the-eye moment of
            real-talk, filled with entertaining stories and profane, ruthless
            humor, The Subtle Art of Not Giving a F**k is a refreshing slap for
            a generation to help them lead contented, grounded lives.
          </div>
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
            <Link to="/cart" className="btn rounded-pill addToCartBtn">
              Add to cart
            </Link>
          </div>
          <div className="mt-4">
            <span className="text-secondary">SKU:</span>
            <span> GB7187</span>
          </div>
          <div>
            <span className="text-secondary">Barcode:</span>
            <span> 957109888403</span>
          </div>
          <div>
            <span className="text-secondary">Availability:</span>
            <span> In Stock</span>
          </div>
          <div>
            <span className="text-secondary">Categories:</span>
            <span> Budget Print Notifications, English Books, Local Books</span>
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
          <button className="btn btn-outline-dark rounded-pill">
            Description
          </button>
        </div>
        <div className="fw-bold">Author :Mark Manson</div>
        <div>
          <span className="fw-bold">Condition:</span>
          <span className="text-secondary"> New</span>
        </div>
        <div>
          <span className="fw-bold">Binding:</span>
          <span className="text-secondary"> Paper Back</span>
        </div>
        <div>
          <span className="fw-bold">Pages:</span>
          <span className="fw-bold"> 304</span>
        </div>
        <div>
          <span className="fw-bold">Publisher:</span>
          <span className="text-secondary"> Local Books</span>
        </div>
        <div>
          <span className="fw-bold">Language:</span>
          <span className="text-secondary"> English</span>
        </div>
        <div>
          <span className="fw-bold">Publication Year:</span>
          <span className="text-secondary"> 2021</span>
        </div>
        <div className="text-secondary my-3">#1 New York Times Bestseller</div>
        <div className="text-secondary mb-3">Over 10 million copies sold</div>
        <div className="text-secondary mb-3">
          In this generation-defining self-help guide, a superstar blogger cuts
          through the crap to show us how to stop trying to be "positive" all
          the time so that we can truly become better, happier people.
        </div>
        <div className="text-secondary mb-3">
          For decades, we’ve been told that positive thinking is the key to a
          happy, rich life. "F**k positivity," Mark Manson says. "Let’s be
          honest, shit is f**ked and we have to live with it." In his wildly
          popular Internet blog, Manson doesn’t sugarcoat or equivocate. He
          tells it like it is—a dose of raw, refreshing, honest truth that is
          sorely lacking today. The Subtle Art of Not Giving a F**k is his
          antidote to the coddling, let’s-all-feel-good mindset that has
          infected modern society and spoiled a generation, rewarding them with
          gold medals just for showing up.
        </div>
        <div className="text-secondary mb-3">
          Manson makes the argument, backed both by academic research and
          well-timed poop jokes, that improving our lives hinges not on our
          ability to turn lemons into lemonade, but on learning to stomach
          lemons better. Human beings are flawed and limited—"not everybody can
          be extraordinary, there are winners and losers in society, and some of
          it is not fair or your fault." Manson advises us to get to know our
          limitations and accept them. Once we embrace our fears, faults, and
          uncertainties, once we stop running and avoiding and start confronting
          painful truths, we can begin to find the courage, perseverance,
          honesty, responsibility, curiosity, and forgiveness we seek.
        </div>
        <div className="text-secondary mb-3">
          There are only so many things we can give a f**k about so we need to
          figure out which ones really matter, Manson makes clear. While money
          is nice, caring about what you do with your life is better, because
          true wealth is about experience. A much-needed
          grab-you-by-the-shoulders-and-look-you-in-the-eye moment of real-talk,
          filled with entertaining stories and profane, ruthless humor, The
          Subtle Art of Not Giving a F**k is a refreshing slap for a generation
          to help them lead contented, grounded lives.
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-center mt-5 h3">
          You may also like
        </div>
        <div className="container my-4">
          <div className="d-flex justify-content-between mt-4">
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
      </div>
    </div>
  );
}

export default ProductDetail;
