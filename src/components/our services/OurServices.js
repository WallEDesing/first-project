import React from "react";
import flower from "../../pictures/flower.svg";
import money from "../../pictures/money.svg";
import book from "../../pictures/book.svg";
import "./style.css";
import { BsArrowDownCircle } from "react-icons/bs";

const OurServices = () => {
  return (
    <div className="container">
      <h1 className="header-container">Our Services</h1>
      <div className="box-container">
        <div className="box" style={{ backgroundColor: "#F7FDF3" }}>
          <img src={flower} className="img-container" />
          <h3>Start-up Package</h3>
          <p>we build financial models you can pitch to investors</p>
          <BsArrowDownCircle size={30} color="#71B687" />
        </div>
        <div className="box" style={{ backgroundColor: "#ECF8E5" }}>
          <img src={money} className="img-container" />
          <h3>Wealth Management</h3>
          <p>we build financial models you can pitch to investors</p>
          <BsArrowDownCircle size={30} color="#71B687" />
        </div>
        <div className="box" style={{ backgroundColor: "#DCF4CE" }}>
          <img src={book} className="img-container" />
          <h3>Tax Preparation</h3>
          <p>we build financial models you can pitch to investors</p>
          <BsArrowDownCircle size={30} color="#71B687" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
