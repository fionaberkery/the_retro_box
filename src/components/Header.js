import React from "react"
import { Link } from "react-router-dom"


const Header = () => {

    return (

        <>

        <div id="header">
            
            <h1 id="title">
            <span>R</span>
            <span>E</span>
            <span>T</span>
            <span>R</span>
            <span>O</span>
            <span>-</span>
            <span>B</span>
            <span>O</span>
            <span>X</span>

            </h1>

            <div id="nav-bar">
            
            <button><Link to="/" id="link-style">HOME</Link></button>
            <p><Link to="/toys" id="link-style"> TOYS </Link></p>
            <p><Link to="wishlist" id="link-style" > WISHLIST </Link></p>
            <p><Link to="/basket" id="link-style"> BASKET </Link></p>
            
            
            
            </div>
        </div>

        </>
    )
}

export default Header 