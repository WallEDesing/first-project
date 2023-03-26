import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="Headercontainer">
      <div className="Headericon">
        <img
          src="https://greenhello.my.canva.site/images/2fafa164e3f920d81b89b52da410092b.svg"
          alt=""
          className="image"
        />
        <div className="Headercontent">
          <ul className="Headerlist">
            <li>Wall-E</li>
            <li>Desixn Team</li>
          </ul>
        </div>
      </div>
      <div className="Headermain-content">
        <div className="Headermonitor">
          <img
            src="	https://greenhello.my.canva.site/images/2a84a7bbc246045f465332a3d57ef7c5.svg"
            alt=""
          />
        </div>
        <div className="Headertext">
          <p>
            Get peace of mind knowing that your taxes are handled by experts.
          </p>
          <div className="Headerbutton-sec">
            <button className="Headerbtn">Start Now</button>
          </div>
        </div>
      </div>
      <div className="Headericon-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-arrow-down-circle"
          viewBox="0 0 16 16"
          id="IconChangeColor"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
            id="mainIconPathAttribute"
            fill="green"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
