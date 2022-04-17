import React, {useEffect, useState,} from 'react'
import ProductCard from './ProductCard';
import './Product.css'
import DryDogFood from "../../Images/Dry-Dog-Food-PNG.png";

const Product = ({info, currentUser}) => {

    const [arr,setArr]= React.useState([]); 

    useEffect(()=>{console.log("hello");
     fetch("http://localhost:3005/products")
     .then(response=>response.json())
     .then(data=>{console.log(data)
       setArr(data)})
     },[])  

     const [itemsAddedToCart, setItemsAddedToCart] = useState([]);
    console.log(currentUser)

    // console.log("Rendering", itemsAddedToCart.length)
    // console.log("Info", info)
    // console.log("Items in Cart", itemsAddedToCart);

    useEffect(() => {
      setItemsAddedToCart(info);
    },[info]);

     const arr1=itemsAddedToCart.slice().splice(0,2);
     const arr2=itemsAddedToCart.slice().splice(2);
     console.log(arr1)
     console.log(arr2)

  return (
    <div>
     <h1 class="category-text">Best Seller Products</h1>
        <div class="products">
            <div class="product-banner">
                <div class="product-banner-image">
                    <img src={DryDogFood} alt=""/>
                </div>
                <div class="product-banner-text">
                    {/* <h1>We have the best quality pet food available! Show all </h1> */}
                </div>
            </div>
            <div class="product-items">
                <div class="product-item-slot-one">
                   {arr1.map((ele) => <ProductCard info={ele} currentUser={currentUser} />)}
                </div>
                <div class="product-item-slot-two">
                   {arr2.map((ele) => <ProductCard info={ele} currentUser={currentUser} />)}
                </div>
        </div>    
  </div>
  </div>
    
  )
}

export default Product;