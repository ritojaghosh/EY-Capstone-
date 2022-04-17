import React from 'react'
import './CatCard.css'

const CatCard = (props) => {
  // console.log(props)
  return (
    <div>
      <div class="col1">
          <div class="content">
            <div class="image">
              <img src={props.info.imgURL} alt="Dew" width="100px" height="100px"/>
            </div>
            <div class="info">
                <span class="name">{props.info.name}</span>
                <span class="breed">{props.info.breed}</span>
                <span class="age">Hi! I am {props.info.age} old.</span>
                <span class="description">{props.info.info}</span>
                <button id="add-to-cart" >Add to Cart</button>
                <a href='#'  class="cart-button">Show More</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CatCard;