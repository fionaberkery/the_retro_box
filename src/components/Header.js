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
            
            
            <button class="button button1"><Link to="/" id="link-style">HOME</Link></button>
            <button class="button button1"><Link to="/toys" id="link-style"> TOYS </Link></button>
            <button class="button button1"><Link to="wishlist" id="link-style" > WISHLIST </Link></button>
            <button class="button button1"><Link to="/basket" id="link-style"> BASKET </Link></button>
            
            
            
            </div>
        </div>

        </>
    )
}

export default Header 