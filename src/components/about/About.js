import React from "react"
import './style.css'

const About = () => {
    return (
        <div className="about">
      <div>
        <img
          className="about-pic"
          src="	https://greenhello.my.canva.site/images/79a0517db983947c0243978dbf3886c5.svg"
          alt=""
        />
      </div>
      <div className="about-info">
        <p className="title">Company Profile</p>
        <div>
          <p className="info">
            Established in 1992,Stratford Accounting is a full-service firm
            offering affordable accounting solutions to individuals and local
            and international businesses.
          </p>
        </div>
      </div>
    </div>
    )
}


export default About;