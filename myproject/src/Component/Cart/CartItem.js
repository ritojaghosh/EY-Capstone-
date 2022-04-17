import React, { useEffect, useState } from 'react'

function CartItem({userInfo, update}) {

    const [currUserCart, setCurrUserCart] = useState([]);
    console.log(userInfo)

    useEffect(() => {
        setCurrUserCart(userInfo.cartItems);
        
    }, [userInfo])

    const updateUserJson = (data) => {
        async function putData(){
            let dataPut = await fetch(`http://localhost:3002/users/${userInfo.id}`,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
            "content-type":"application/json; charset=UTF-8"
            }})
            dataPut = await dataPut.json();
        
            console.log(dataPut)
        }

        putData();

        async function putData2(){
            let dataPut = await fetch(`http://localhost:3003/loggedInUser/${userInfo.id}`,{
            method:"PUT",
            body:JSON.stringify(data),
            headers:{
            "content-type":"application/json; charset=UTF-8"
            }})
            dataPut = await dataPut.json();
        
            console.log(dataPut)
        }

        putData2();

    
    }
    

    const updateQuantity = (item, operation) => {

        let itemsAddedToCartUpdated = [...userInfo.cartItems];
    
        const indexForUpdation = itemsAddedToCartUpdated.findIndex(ele => 
            ele.breedOrProductName === item.breedOrProductName);

        operation === "add" ? itemsAddedToCartUpdated[indexForUpdation].quantity += 1 :
        itemsAddedToCartUpdated[indexForUpdation].quantity -= 1;

        console.log(userInfo);

        setCurrUserCart([...userInfo.cartItems]);
        
            update(userInfo);
            updateUserJson(userInfo)
        }
        
    
        // operation === "add" ? itemsAddedToCartUpdated[indexForUpdation] = {...itemsAddedToCartUpdated[indexForUpdation], quantity : itemsAddedToCartUpdated[indexForUpdation].quantity + 1} : itemsAddedToCartUpdated[indexForUpdation] = {...itemsAddedToCartUpdated[indexForUpdation], quantity : itemsAddedToCartUpdated[indexForUpdation].quantity - 1}
    
        // setItemsAddedToCart(itemsAddedToCartUpdated)
    
        // let updatedCurrentUser = {...userInfo, cartItems: [...userInfo.cartItems, itemsAddedToCartUpdated[indexForUpdation]]};
    
        
    
    const increaseQuant = (item) => {
        console.log(item);
        
        updateQuantity(item, "add");
        
        // console.log( itemsAddedToCart, itemsAddedToCartUpdated)
        
    }
    
    const decreaseQuant = (item) => {
        console.log(item);
    
        updateQuantity(item, "substract");
    }

    const removeItem = (item) => {
        console.log(item);
        const updatedCartItems = userInfo.cartItems.filter(cartItem => {
            return cartItem.breedOrProductName !== item.breedOrProductName;
        })
        console.log(updatedCartItems);
        
        setCurrUserCart(updatedCartItems);

        const newUserInfo = {...userInfo, cartItems: updatedCartItems};

        console.log(newUserInfo, userInfo);
        update(newUserInfo);
        updateUserJson(newUserInfo);
    }



  return  (
      <>
        {
            currUserCart && currUserCart.length > 0 ? (
                <div class="items">

    {
        currUserCart.map(cartInfo => {
            return(
                <div class="item">
                        <div class="info-item">
                            <div class="image">
                                <img src={cartInfo.image} />
                            </div>
                            <div class="item-text">
                                <div class="heading">
                                    <span>$<span class="price">{cartInfo.price}</span></span>
                                    <i class="fa-solid fa-xmark cross" 
                                    onClick={() => removeItem(cartInfo)}></i>
                                </div>
                                <div class="info">
                                    <span>{cartInfo.breedOrProductName}</span>
                                </div>
                                <div class="size-quantity">
                                    <div class="size-quantity-item">{cartInfo.aboutMe}</div>
                                    <div class="quantity-alter">
                                        <button class="quantity-minus" 
                                        onClick={() => decreaseQuant(cartInfo)}>
                                            -
                                        </button>
                                        <input name="quantity" type="text" class="quantity__input" value={cartInfo.quantity} />
                                        <button class="quantity-add" 
                                        onClick={() => increaseQuant(cartInfo)}>
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div class="sfl">
                                    <i class="fa-solid fa-heart fa-xl"></i>
                                    Save for later
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
    }

</div>
    
            ) : (
                <h4>No Items in Cart</h4>
            )
        }
      </>
    
  ) 
}

export default CartItem