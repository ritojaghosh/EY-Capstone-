import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Cart.css";
import CartItem from './CartItem';
import CartTotal from './CartTotal';

function Cart({info}) {

    const [cartTotal, setCartTotal] = useState(0);

    const [userInfoFromCart, setUserInfoFromCart] = useState({});
    console.log(userInfoFromCart);

    

    

    

    useEffect(() => {
        async function fetchData(){
            let userInfo = await fetch(`http://localhost:3003/loggedInUser/${info.id}`);
            userInfo = await userInfo.json();
            console.log(userInfo);
            await setUserInfoFromCart({...userInfo});
            console.log(userInfoFromCart);
        }
         fetchData();

        

    }, [])

    useEffect(() => {
        if(Object.keys(userInfoFromCart).length > 0) {
            const cartSum = userInfoFromCart && userInfoFromCart.cartItems.length > 0 ?(userInfoFromCart.cartItems.reduce((acc, ele) => 
            acc += (Number(ele.price) * Number(ele.quantity)), 0)).toFixed(2) : 0;
            setCartTotal(cartSum)
        } else (setCartTotal(0))
    }, [userInfoFromCart])

    

        const cartQuantUpdated = (userInfo) => {
            const updatedUserTotal = (userInfo.cartItems.reduce((acc, ele) => 
            acc += (Number(ele.price) * Number(ele.quantity)), 0)).toFixed(2);
            setCartTotal(updatedUserTotal)
        }
    
    
  return (
    <div>
        <Link to="/dashboard">Dashboard</Link>
        <div class="cart-container">
            <div class="left-side">
                <div class="my-bag">
                    <div class="title">
                        <h1 class="title-h1">MY BAG</h1>
                    </div>
                    <CartItem userInfo={userInfoFromCart} update={cartQuantUpdated}/>
                </div>
            </div>

            <div class="delivery">

            </div>
            <div class="returns">
            
            </div>

            <CartTotal total={cartTotal} />

            
        </div>

    </div>
  )
}

export default Cart;