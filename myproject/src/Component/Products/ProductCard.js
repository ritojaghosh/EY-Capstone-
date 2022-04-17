import React from 'react'


const ProductCard = (props) => {

  async function addToCart (item) {
    console.log(item);
    let userInfo = await fetch(`http://localhost:3002/users/${props.currentUser.id}`);
    userInfo = await userInfo.json();
    console.log(userInfo)
    
    let updatedUserInfo = {...userInfo, cartItems: [...userInfo.cartItems, item]};
    console.log(updatedUserInfo, userInfo)

    fetch(`http://localhost:3003/loggedInUser/${props.currentUser.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedUserInfo),
            headers:{
              "content-type":"application/json; charset=UTF-8"
            }
          })
          .then(response=>response.json())
          .then(data=>{
            // setCurrUser({...data});
            console.log(data);
          })

          fetch(`http://localhost:3002/users/${props.currentUser.id}`,{
            method:"PUT",
            body:JSON.stringify(updatedUserInfo),
            headers:{
              "content-type":"application/json; charset=UTF-8"
            }
          })
          .then(response=>response.json())
          .then(data=>{
            // setCurrUser({...data});
            console.log(data);
          })
}

  return (
    <div>
       <div class="product-item1">
                        <div class="product-item-content p-4">
                            <img src={props.info.image} alt="pedigree" class="h-40 m-auto"/>
                            <p class="text-left title text-gray-600 mt-8">{props.info.breedOrProductName}</p>
                            <p class="text-left desc text-gray-600 mt-3">{props.info.aboutMe}</p>
                            <p class="text-left price mt-4 font-bold" style={{color: "#FE8B0C"}}>${props.info.price}</p>
                            <div class="product-bottom flex mt-8">
                                
                                <button class="btn btn-add-cart ml-24" style={{backgroundColor: "#FE8B0C"}}
                                 onClick={() => addToCart(props.info)}><i
                            class="fas fa-cart-arrow-down text-white"></i>
                                </button>
                            </div>
                        </div>
                        </div>
    </div>
  )
}

export default ProductCard