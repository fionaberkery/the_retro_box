import React from "react"
import { Link } from "react-router-dom"
import basket from "/Users/fionaberkery/CodeClan_work/week_8/weekend_homework/retro_box/the_retro_box_2/src/images/basket.png"

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
            <p><Link to="/">HOME</Link></p>
            <p><Link to="/toys"> TOYS </Link></p>
            <p><Link to="/basket"> BASKET </Link></p>
            <p><Link to="wishlist"> WISHLIST </Link></p>
            </div>
        </div>

        </>
    )
}

export default Header 