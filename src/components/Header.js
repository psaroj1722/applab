import React, { useState } from 'react';
import headerlogo from '../images/headerlogo.png';
import mobile_menu from '../images/mobile_menu.png';
import { Link } from "react-router-dom";
import xcross from '../images/x.png';

function Header() {

    const [show, setShow] = useState(false);


  return (

     <header className="header" id="header">
        <div className="wrapper">
            <div className="logo"><Link to="/"><img src={ headerlogo } alt="logo" /></Link></div>
            

                <div  className="menu">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/feature">Key Features</Link></li>
                    <li> <Link to="/pricing">Pricing</Link></li>
                    <li> <Link to="/testimonial">Testiminial</Link></li>
                    <li> <Link to="/faq">FAQ</Link></li>
                    <li className="free-btn"><a href="#">Try for free</a></li>
                </ul>
                
            </div> 
            
            <div className="mobile_menu_icons">
                
                <button onClick={()=> setShow(true)} className="menu-bar" ><img src={mobile_menu} alt="" /></button>
            </div>
            {
                show? 
            <div className="mm_menu">
            <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/feature">Key Features</Link></li>
                    <li> <Link to="/pricing">Pricing</Link></li>
                    <li> <Link to="/testimonial">Testiminial</Link></li>
                    <li> <Link to="/faq">FAQ</Link></li>
                    <li className="free-btn"><a href="#">Try for free</a></li>
                </ul>
                <button onClick={()=> setShow(false)} className="cross"><img src={ xcross } alt="logo" /></button>
            </div>
            :null
        }
        </div>
    </header>
   
  );
}

export default Header;