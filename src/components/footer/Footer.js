import React from "react";
import './style.css';

const Footer = () => {
    return (
        <div className="end-sec">
            <footer>
                <ul>
                    <li><p className="praone">Let's work together.</p></li>
                    <li>
                        <p className="pratwo">Mailing Address</p>
                        <div className="para2">
                            <p>123 Anywhere St., Any City State, Country 12345</p>
                        </div>
                    </li>
                    <li>
                        <p className="pratree">Email Address</p>
                        <div className="para2">
                            <p>hello@reallygreatsite.com</p>
                        </div>
                    </li>
                    <li>
                        <p className="prafore">Phone Number</p>
                        <div className="para2">
                            <p>(123) 456 7890</p>
                        </div>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;