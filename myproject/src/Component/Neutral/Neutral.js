import React from 'react'
import { Link } from 'react-router-dom'
import './Neutral.css'

export default function Neutral() {
  return (
    <div>
      <div class="bg-image">
        <div class="neutral-icon">
            <h1><span class="paw"><i class="fa-solid paw fa-paw"></i></span>mazon</h1>
            <div class="neutral-header-ring"></div> 
        </div>
            <h1 id="heading">Welcome to Pawmazon</h1>
            <div class="neutral-btn-container">
            <Link to="/signup"><button class="neutral-btn">New to site, Sign up</button></Link>
            <Link to="/user/login"><button class="neutral-btn">Sign-in as User</button></Link>
            {/* <Link to="/admin/login"><button class="neutral-btn">Sign-in as an Admin</button></Link> */}
            </div>
      </div>
    </div>
  )
}
