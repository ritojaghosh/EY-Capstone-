import React, { useEffect, useState } from 'react'

function CartTotal({total}) {

    const [deliveryCharge, setDeliveryCharge] = useState(0);

    useEffect(() => {
        if(total <= 50){
            setDeliveryCharge(25.00);
        } else if(total > 50 && total <= 100){
            setDeliveryCharge(15.00);
        }else{
            setDeliveryCharge(12.00);
        }
    }, [total])

  return (
    <div class="cart-right-side">
            <div class="total">
                <h1 class="title">TOTAL</h1>
                <div class="info">
                    <span class="title">Sub-total</span>
                    <span class="total-price">${total}</span>
                </div>
                <div class="info">
                    <span class="title">Delivery</span>
                    <span class="delivery-price">${deliveryCharge}</span>
                </div>

                <div class="size-quantity-item">
                    <select>
                        <option defaultValue={true}>Standard Delivery (Free)</option>
                        <option>$ 10.00</option>
                        <option>$ 15.00</option>
                        <option>$ 20.00</option>
                        <option>$ 25.00</option>
                    </select>
                </div>
            </div>
            <div class="button">
                <button type="button">Checkout</button>
            </div>
        </div>
  )
}

export default CartTotal