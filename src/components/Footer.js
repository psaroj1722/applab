import React from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import footerlogo from '../images/Footer-logo.png';

function Footer() {
  return (
    <>
        <footer className="fullwidth">
        <div className="wrapper">
            <div className="footer-logo">
                <a href="#">
                    <img src={footerlogo} alt="logo"/>
                </a>
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Key Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testiminial</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="social-icon">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-slack" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i> </a></li>
                </ul>
            </div>
            <div className="copyright">
                <div className="wrapper">
                    <p>Copyright© Arifur Rahman Tushar 2019. All rights reserved</p>
                </div>
            </div>
        </div>

    </footer>
    </>
  );
}

export default Footer;