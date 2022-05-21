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
            <button onClick={handleGoBack}> Go back </button>

            <img src={selectedToy.image} width="600px" height="600px" />
            <h2> {selectedToy.name} </h2>
            <p> {selectedToy.price} </p>
            <p> {selectedToy.description} </p>

            <button onClick={handleAddToBasket} value={selectedToy.name}> Add to basket </button>

            {wishList.includes(selectedToy.name) ? <button> ❤️ </button> :
            <button onClick={handleAddToWishlist} value={selectedToy.name}> Add to wishlist ♡ </button>}


        </>
    )
}

export default ToyDetail