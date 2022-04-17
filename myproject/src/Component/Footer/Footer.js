import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
       <footer id="contact">
        <ul id="footer-ul">
            <div id="icon-container">
                <a href="#">
                    <div className="footer-icon">
                        <li><i className="fab fa-twitter"></i></li>
                    </div>
                </a>
                <a href="#">
                    <div className="footer-icon">
                        <li><i className="fab fa-instagram"></i></li>
                    </div>
                </a>
                <a href="#">
                    <div className="footer-icon">
                        <li><i className="fab fa-facebook-f"></i></li>
                    </div>
                </a>
                <a href="#">
                    <div className="footer-icon">
                        <li><i className="far fa-envelope"></i></li>
                    </div>
                </a>
                <a href="#">
                    <div className="footer-icon">
                        <li><i className="fab fa-free-code-camp"></i></li>
                    </div>
                </a>
            </div>
        </ul>
        <p>&copy; 2022, Pawmazon</p>
    </footer>
    </div>
  )
}

export default Footer;