import React from 'react';

import "./Hero.css";

import bannerImg from "../../Images/banner-dog.png";

export default function Hero() {
  return (
    <div className="hero-banner">
            <div className="hero-banner-text">
                <h1 className="">We Have Everything Your Pets Need</h1>
                <p>The care you give all the differnce for lifelong health and happiness</p>
                <div className="shopnow-container">
                    <button className="shopnow-btn">
                        <a href="login.html">Shop Now</a>
                        <i className="fa-solid fa-arrow-right-long arrow"></i>
                    </button>
                </div>
            </div>
            <div className="hero-banner-image-container">
                <img className="hero-banner-image" src={bannerImg} alt="dog" />
            </div>
        </div>
  )
}
