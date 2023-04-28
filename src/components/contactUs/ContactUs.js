import React from "react";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { BsHouseDoor, BsTelephone } from "react-icons/bs";
import "./contactUs.css";

function ContactUs() {
  return (
    <div>
      <div
        id="map-container-google-1"
        class="z-depth-1-half map-container HeightMap"
      >
        <iframe
          src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div className="d-flex justify-content-between container mt-5">
        <div className="contactUsWidth">
          <div className="fs-4 fw-bold">Drop Us A Line</div>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Your Name (Required)
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Your Email (Required)
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Your Phone Number
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-2">Comments</div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
            <button className="btn btn-outline-primary rounded-pill w-100 my-4">
              Send
            </button>
          </form>
        </div>
        <div className="contactUsWidth">
          <div className="fs-4 fw-bold">CONTACT INFORMATION</div>
          <div className="text-secondary">
            We love to hear from you on our customer service, merchandise,
            website or any topics you want to share with us. Your comments and
            suggestions will be appreciated. Please complete the form below.
          </div>
          <div className="text-secondary my-3">
            <BsHouseDoor /> Street 11 Plot No. C1, Basement, Badar Commercial
            Area Defence Phase 5, Karachi,75500
          </div>
          <div className="text-secondary my-3">
            <BsTelephone /> +922138921597 / +923431216775
          </div>
          <div className="text-secondary my-3">
            <AiOutlineMail /> info@globalbooks.com.pk
          </div>
          <div className="text-secondary my-3">
            <AiOutlineClockCircle /> Mon-Sat 11:00-20:00
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
