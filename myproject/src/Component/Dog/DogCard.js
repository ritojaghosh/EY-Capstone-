import React from 'react'
import './DogCard.css'
import {Link} from 'react-router-dom'

const DogCard = (props) => {
  // console.log(props)
  const addToCart= (x)=> {
     console.log(x)
  }
  return (
    <div>
      <div class="col1">
          <div class="content">
            <div class="image">
              <img src={props.info.image} alt="Dew" width="100px" height="100px"/>
            </div>
            <div class="info">
                <span class="name">{props.nameOfAnimal}</span>
                <span class="breed">{props.info.breedOrProductName}</span>
                <span class="age">Hi! I am {props.info.aboutMe} old.</span>
                <span class="description">{props.info.desc}</span>
                <Link to={'showcart/'+props.info.id}> <button id="add-to-cart" >Add to Cart</button></Link>
                <a href='#'  class="cart-button">Show More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DogCard;