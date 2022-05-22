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
            
            
            <button id="nav-bar-button1"><Link to="/" id="link-style-home">HOME</Link></button>
            <button id="nav-bar-button2"><Link to="/toys" id="link-style-toys"> ALL TOYS </Link></button>
            <div id="mini-nav-bar">
            <button id="nav-bar-button3"><Link to="wishlist" id="link-style-wishlist" > ♡ </Link></button>
            <button id="nav-bar-button4"><Link to="/basket" id="link-style-basket"> 🛒 </Link></button>
            </div>
            
            
            </div>
        </div>

        </>
    )
}

export default Header 