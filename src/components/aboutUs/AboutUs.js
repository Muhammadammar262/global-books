import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImTruck } from "react-icons/im";
import { MdPayment } from "react-icons/md";
import "./aboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="bg-secondary text-white text-center d-flex justify-content-center align-items-center py-5">
        <div>
          <div className="h5">About us</div>
          <div>Follow your passion, and success will follow you</div>
        </div>
      </div>
      <div className="container my-5">
        <div className="h3">Welcome to the Wonderful World of Global books</div>
        <div className="h5">Who we are…</div>
        <div className="fw-semibold">
          Established by a group of dedicated book lovers.
        </div>
        <div className="text-secondary mt-2">
          The global book's mission is to create highly knowledgeable,
          intellectual, and well-read Pakistani communities throughout the
          nation by developing a clearer understanding of customer needs and by
          providing customers with a combination of knowledge-propagating media.
          Our aims are Creating the biggest online store, providing a
          professional service that allows readers, writers, and sellers to go
          through the books and to buy or sell easily from our online store.
        </div>
        <div className="h5 mt-2">Our Values</div>
        <div className="mt-2 text-secondary">
          Global books provide a variety of book categories and unique packages
          that appeal to different customers’ preferences, we manage to serve
          different tastes of readers and to give them personalized service. One
          of our main targets is encouraging more and more people to read.
          Global books aim at encouraging people to build an eternal friendship
          with books. Our team has categorized a number of books for beginners
          who are not quite familiar with certain topics. The process of
          categorization is based on addressing our clients’ various tastes and
          needs in different fields. In addition, the recommended books are
          engaging and easy to read. We also keep up with the latest
          technological devices. our exclusive Knowledge Tracking software makes
          the process of searching for books more of a unique experience than
          just a mere search. Even if you do not know which book or subject you
          should search for, our system is designed to help you choose what
          would be personally interesting to read. This is accomplished through
          some given questions that will enable you to know your reading
          preferences and will leave you with book suggestions to consider. We
          also keep up with the quick development of the info circulation and
          the easy accessibility of the product. Global books aim to create a
          huge online store and provide to the customers wherever they are the
          opportunity to shop from our online store and get their products, we
          are committed to delivering the product from Global books to your
          doorstep.
        </div>
        <div className="h5 mt-2">Our Aim</div>
        <div className="mt-2 text-secondary">
          Global books provide a variety of book categories and unique packages
          that appeal to different customers’ preferences, we manage to serve
          different tastes of readers and to give them personalized service. One
          of our main targets is encouraging more and more people to read.
          Global books aim at encouraging people to build an eternal friendship
          with books. Our team has categorized a number of books for beginners
          who are not quite familiar with certain topics. The process of
          categorization is based on addressing our clients’ various tastes and
          needs in different fields. In addition, the recommended books are
          engaging and easy to read. We also keep up with the latest
          technological devices. our exclusive Knowledge Tracking software makes
          the process of searching for books more of a unique experience than
          just a mere search. Even if you do not know which book or subject you
          should search for, our system is designed to help you choose what
          would be personally interesting to read. This is accomplished through
          some given questions that will enable you to know your reading
          preferences and will leave you with book suggestions to consider. We
          also keep up with the quick development of the info circulation and
          the easy accessibility of the product. Global books aim to create a
          huge online store and provide to the customers wherever they are the
          opportunity to shop from our online store and get their products, we
          are committed to delivering the product from Global books to your
          doorstep.
        </div>
        <div className="h5 mt-2">World of Rare</div>
        <div className="mt-2 text-secondary">
          Global books provide a variety of book categories and unique packages
          that appeal to different customers’ preferences, we manage to serve
          different tastes of readers and to give them personalized service. One
          of our main targets is encouraging more and more people to read.
          Global books aim at encouraging people to build an eternal friendship
          with books. Our team has categorized a number of books for beginners
          who are not quite familiar with certain topics. The process of
          categorization is based on addressing our clients’ various tastes and
          needs in different fields. In addition, the recommended books are
          engaging and easy to read. We also keep up with the latest
          technological devices. our exclusive Knowledge Tracking software makes
          the process of searching for books more of a unique experience than
          just a mere search. Even if you do not know which book or subject you
          should search for, our system is designed to help you choose what
          would be personally interesting to read. This is accomplished through
          some given questions that will enable you to know your reading
          preferences and will leave you with book suggestions to consider. We
          also keep up with the quick development of the info circulation and
          the easy accessibility of the product. Global books aim to create a
          huge online store and provide to the customers wherever they are the
          opportunity to shop from our online store and get their products, we
          are committed to delivering the product from Global books to your
          doorstep.
        </div>
        <div className="mt-3">
          <ImTruck size={"40px"} />
        </div>
        <div className="mt-2 h5">Shipping and Returns</div>
        <div className="text-secondary">
          The shipping fee varies according to where you want to ship your
          order. When you proceed with your online order and before you confirm,
          you will be given an invoice with shipment fees and totals Deliveries
          can take up to 3 working days customers are informed prior to their
          deliveries commence.
        </div>
        <div className="mt-3">
          <BsFillTelephoneFill size={"40px"} />
        </div>
        <div className="mt-2 h5">Customer service</div>
        <div className="text-secondary">
          Global books Team is here to help you! For any inquiries or
          complaints, you can reach us at Contact
        </div>
        <div className="mt-3">
          <MdPayment size={"40px"} />
        </div>
        <div className="mt-2 h5">Payment methods</div>
        <div className="text-secondary">
          We have a number of payment methods<br></br> 1. Cash on Delivery
          <br></br> 2. Online payment, a throwback to our official Bank Account
          Mentioned at Check Outs with Reference your Invoice Number
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
