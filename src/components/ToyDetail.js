import React from "react"
import ShoppingBasket from "./ShoppingBasket"

const ToyDetail = ({selectedToy, wishList, onWishListClick, onGoBackClick, onAddToBasketClick, shoppingBasket}) => {

const handleAddToWishlist = (event) => {
    onWishListClick(event.target.value)
}

const handleAddToBasket = (event) => {
    onAddToBasketClick(event.target.value)
}

const handleGoBack = () => {
    onGoBackClick()
}



    return (

        <>
            <div id="toy-detail-page">

                <p>
                    <button className="button button1" onClick={handleGoBack}> Go back </button>
                </p>

                <section id="section">
                <img id="image-detail" src={selectedToy.image} width="600px" height="600px" />
                </section>
                <div id="item-description">
                    <h2 > {selectedToy.name} </h2>
                    <b> <p> {selectedToy.price} </p> </b>
                    <p id="description-of-toy"> {selectedToy.description} </p>
                </div>
                
                <div id="add-button">
                    {shoppingBasket.includes(selectedToy.name) ? <b><p> Added to basket! </p></b> :
                    <button className="button button4" onClick={handleAddToBasket} value={selectedToy.name}> Add to basket </button>}
                </div>
                
                <br></br>
                
                {wishList.includes(selectedToy.name) ? <button className="button button3"> Wishlist ❤️ </button> :
                <button className="button button2" onClick={handleAddToWishlist} value={selectedToy.name}> Add to wishlist ♡ </button>}
                
            </div>

        </>
    )
}

export default ToyDetail