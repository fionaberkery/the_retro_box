import React from "react"

const Wishlist = ({theWishList}) => {


    return (

        <>
        <div id="wishlist">
        <br></br><br></br>
            <h2 id="wishlist-header"> Your Retro Box Wishlist </h2>
            

                <p id="the-wishlist-list"> {theWishList} </p>
        </div>
        </>
    )
}

export default Wishlist