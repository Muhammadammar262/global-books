import React from "react";
import "../Footer/footer.css";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone, BsYoutube } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="border-top border-dark">
      <div className="footer container my-4">
        <div className="globalBooks">
          <div className="h5">Global Books</div>
          <div className="mt-4 d-flex">
            <div className="mt-1 me-1">
              <CiLocationOn />
            </div>
            Street 11 Plot No. C1, Basement, Badar Commercial Area Defence Phase
            5, Karachi,75500
          </div>
          <div className="mt-3 d-flex">
            <div className="me-1">
              <TfiEmail />
            </div>
            info@globalbooks.com.pk
          </div>
          <div className="mt-3 d-flex">
            <div className="me-1">
              <BsTelephone />
            </div>
            +922138921597 +923431216775
          </div>
        </div>
        <div className="company">
          <div className="h5">Company</div>
          <div className="mt-4">
            <div>
              <Link
                to="/aboutUs"
                className="text-decoration-none text-dark companyLinks"
              >
                About Us
              </Link>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Career
              </a>
            </div>
            <div className="mt-2">
              <Link
                to="/contactUs"
                className="text-decoration-none text-dark companyLinks"
              >
                Contact
              </Link>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Terms & Conditions
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="information">
          <div className="h5">Information</div>
          <div className="mt-4">
            <div>
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Shipping & Delivery
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                We buy books guide
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Returns And Exchange Policy
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Book Condition and Size
              </a>
            </div>
            <div className="mt-2">
              <a
                className="text-decoration-none text-dark companyLinks"
                href="/"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
        <div className="newletter">
          <div className="h5">Subscribe Our Newletter</div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control border border-dark rounded-pill text-center"
              placeholder="Your email address"
            />
            <button class="btn rounded-pill newLetterInputButton" type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="my-4 border-top border-secondary container">
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <div>
            <a href="/" className="footerIcon">
              <ImFacebook className="footerIconInner" />
            </a>
          </div>
          <div>
            <a href="/" className="footerIcon">
              <AiOutlineTwitter className="footerIconInner" />
            </a>
          </div>
          <div>
            <a href="/" className="footerIcon">
              <AiOutlineInstagram className="footerIconInner" />
            </a>
          </div>
          <div>
            <a href="/" className="footerIcon">
              <FaLinkedinIn className="footerIconInner" />
            </a>
          </div>
          <div>
            <a href="/" className="footerIcon">
              <BsYoutube className="footerIconInner" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
