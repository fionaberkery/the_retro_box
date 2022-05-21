import React from "react";
import ToyItem from './ToyItem'
import ToyDetail from "./ToyDetail"

const ToyList = ({toys, onImageClick, selectedToy, onWishListClick, wishList, onGoBackClick, onAddToBasketClick}) => {

    const retroToysList = toys.map((toy, index) => {
        return <ToyItem onImageClick={onImageClick} key={index} toy={toy}/>
    })

    let componentToShow

    if (selectedToy) {
        componentToShow = <ToyDetail selectedToy={selectedToy} onWishListClick={onWishListClick} wishList={wishList} onGoBackClick={onGoBackClick} onAddToBasketClick={onAddToBasketClick} />
    }
    else {
        return retroToysList
    }

    return (

        <>

            

            <ul id="container">
                {componentToShow}
            </ul>


        </>
    )
}

export default ToyList