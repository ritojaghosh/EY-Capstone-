import React from 'react';
import { Link } from 'react-router-dom';

import "./Header.css";

function Header() {
  return (
    <div className='header'>
            <div className="header-logo">
            <h1 className="text-3xl font-bold ">
               Pawmazon
             </h1>
                <div className="header-ring"></div>
            </div>
            <div className="nav">
                <ul className="nav-ul">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li>
                        <div className="dropdown">
                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown">
                                Category
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Dogs</a></li>
                                <li><a className="dropdown-item" href="#">Cats</a></li>
                                <li><a className="dropdown-item" href="#">Other small animals</a></li>
                                <li><a className="dropdown-item" href="#">Products</a></li>
                            </ul>
                        </div>

                    </li>
                    <li><a href="login.html">Shop</a></li>
                </ul>
            </div>
            <div className="cart-login">
                <div className="cart">
                    <Link to='/cart'><i className="fas fa-cart-arrow-down fa-2x"></i></Link>
                </div>
                
                {/* <a href="#"><i className="fa-solid fa-xmark cross fa-xl"></i></a> */}
            </div>

  </div>      
  )
}

export default Header;