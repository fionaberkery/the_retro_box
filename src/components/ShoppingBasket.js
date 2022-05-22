import React from "react"

const ShoppingBasket = ({theShoppingBasket}) => {

    return (

        <>
        <div id="shoppingbasket">
            <h1 id="shoppingbasket-header"> Your Shopping Basket </h1>

            <p id="the-shopping-list"> {theShoppingBasket} 

            <button id="checkout-button"> <a id="checkout-link" href="/checkout"> Go to checkout </a> </button>
            </p>
            </div>
        </>
    )
}

export default ShoppingBasket