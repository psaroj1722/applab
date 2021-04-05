import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

import Banner_img from '../images/Banner_img.png';
import logo1 from '../images/logo-1.png';
import logo2 from '../images/logo-2.png';
import logo3 from '../images/logo-3.png';
import logo4 from '../images/logo-4.png';
import logo5 from '../images/logo-5.png';
import mobilebg from '../images/mobile-bg.png';
import applestore from '../images/en_badge_web_generic.png';
import playstore from '../images/download-on-the-app-store-apple.png';





function Layout() {
    //Owl Carousel Settings
const options = {
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    loop: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        700: {
            items: 4,
        },
        1000: {
            items: 5,
        }
    },
  };

  return (
    <>
    <div className="main-content">
        <div className="banner fullwidth">
            <div className="wrapper">
                <div className="left-details">
                    <h5><i className="fa fa-certificate" aria-hidden="true"></i> <span> #1 Editiors Choice App of
                            2020</span></h5>
                    <h2>Best app for your <br/> modern lifestyle</h2>
                    <p>Increase productivity with a simple to-do app. app for <br/> managing your personal budgets.</p>
                    <div className="btn-group">
                        <a className="free-btn" href="#">Try for free</a>
                        <a className="plain-btn" href="#">Watch demo video</a>
                    </div>
                </div>

                <div className="right-image">
                    <img src={Banner_img}  alt="" />
                </div>
            </div>
        </div>

        <div className="companies fullwidth">
            <div className="wrapper">
                <p>Trusted by companies like</p>
                <OwlCarousel  className="logoSlider owl-theme" {...options}>
                    <div className="imgBox">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="imgBox">
                        <img src={logo2} alt="" />
                    </div>
                    <div className="imgBox">
                        <img src={logo3} alt="" />
                    </div>
                    <div className="imgBox">
                        <img src={logo4} alt="" />
                    </div>
                    <div className="imgBox">
                        <img src={logo5} alt="" />
                    </div>
                </OwlCarousel>
            </div>
        </div>

        <div className="service fullwidth">

            <div className="imagebox">
                <img src={ mobilebg } alt=""/>
            </div>
            <div className="service-details">
                <h2>Awesome apps <br/> features</h2>
                <p>Increase productivity with a simple to-do app. app for <br/>
                    managing your personal budgets.</p>
                <ul>

                    <li>
                        <h3>Fast Performance</h3>
                        <p>Get your blood tests delivered at <br/>
                            home collect a sample from the <br/>
                            news your blood tests.</p>
                    </li>
                    <li>
                        <h3>Prototyping</h3>
                        <p>Get your blood tests delivered at <br/>
                            home collect a sample from the <br/>
                            news your blood tests.</p>
                    </li>
                    <li>
                        <h3>Vector Editing</h3>
                        <p>Get your blood tests delivered at <br/>
                            home collect a sample from the <br/>
                            news your blood tests.</p>
                    </li>
                </ul>

            </div>

        </div>

        <div className="download fullwidth">
            <div className="wrapper">
                <div className="left-details">
                    <h2>Download our App now !</h2>
                    <p>The rise of mobile devices transforms the way we consume information entirely
                        and the world's most elevant channels such as Facebook.</p>
                    <ul>
                        <li><a href="#"><img src={ applestore } alt=""/></a></li>
                        <li><a href="#"><img src={ playstore } alt=""/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default Layout;