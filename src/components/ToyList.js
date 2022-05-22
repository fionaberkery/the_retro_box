import React from "react";
import ToyItem from './ToyItem'
import ToyDetail from "./ToyDetail"

const ToyList = ({toys, onImageClick, selectedToy, onWishListClick, wishList, onGoBackClick, onAddToBasketClick, shoppingBasket}) => {

    const retroToysList = toys.map((toy, index) => {
        return <ToyItem onImageClick={onImageClick} key={index} toy={toy}/>
    })

    let componentToShow

    if (selectedToy) {
        componentToShow = <ToyDetail selectedToy={selectedToy} onWishListClick={onWishListClick} wishList={wishList} onGoBackClick={onGoBackClick} onAddToBasketClick={onAddToBasketClick} shoppingBasket={shoppingBasket} />
    }
    else {
        return retroToysList
    }

    return (

        <>
        <div id="list-page">
            
            
                {componentToShow}
            

        </div>
        </>
    )
}

export default ToyList