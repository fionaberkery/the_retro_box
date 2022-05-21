import React from "react"

const ToyDetail = ({selectedToy, wishList, onWishListClick, onGoBackClick, onAddToBasketClick}) => {

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
                <button class="button button1" onClick={handleGoBack}> Go back </button>
            </p>

            <img id="image-detail" src={selectedToy.image} width="600px" height="600px" />
            <div id="item-description">
            <h2> {selectedToy.name} </h2>
            <b> <p> {selectedToy.price} </p> </b>
            <p> {selectedToy.description} </p>
            </div>
            <div id="add-button">
            <button class="button button4" onClick={handleAddToBasket} value={selectedToy.name}> Add to basket </button>
            </div>
            <br></br>
            {wishList.includes(selectedToy.name) ? <button class="button button3"> Wishlist ❤️ </button> :
            <button class="button button2" onClick={handleAddToWishlist} value={selectedToy.name}> Add to wishlist ♡ </button>}
            </div>

        </>
    )
}

export default ToyDetail