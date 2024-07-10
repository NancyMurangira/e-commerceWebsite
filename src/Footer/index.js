import React from 'react';
import './index.css';



function Footer() {
    return (
        <footer>

            <div className="footer-container">
                <div class="footer-logo">
                    <div className="textlogo">
                    <p class="text">3ILOGICS</p>
                    <p>Call us: + (111) 555 444 222 </p>
                    </div> 
                    </div>

                <div className="footer-links">
                    <h4> Services Menu </h4>
                    <ul>
                        <li><a href="#"> Terms and Conditions </a></li>
                        <li><a href="#"> Order and returns </a></li>
                        <li><a href="#"> Shopping </a></li>
                        <li><a href="#"> FAQs</a></li>
                    </ul>
                </div>


                <div className="our-partners">
                    <h4> Your Account </h4>
                    <ul>
                    <li><a href="#"> Your Order </a></li>
                        <li><a href="#"> Payment Method </a></li>
                        <li><a href="#"> About Us </a></li>
                        <li><a href="#"> Privacy Policy </a></li>
                    </ul>
                </div>


                <div className="privacy">
                    <h4>Privacy</h4>
                    <ul>
                        <li>Data Privacy</li>
                        <li>General Terms</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
export default Footer;










