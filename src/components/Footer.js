import React from "react"
import facebook from "/Users/fionaberkery/CodeClan_work/week_8/weekend_homework/retro_box/the_retro_box_2/src/images/facebook.png"
import insta from "/Users/fionaberkery/CodeClan_work/week_8/weekend_homework/retro_box/the_retro_box_2/src/images/insta.png"
import twitter from "/Users/fionaberkery/CodeClan_work/week_8/weekend_homework/retro_box/the_retro_box_2/src/images/twitter.png"
import youtube from "/Users/fionaberkery/CodeClan_work/week_8/weekend_homework/retro_box/the_retro_box_2/src/images/youtube.png"

const Footer = () => {

    return (

        <>
        <div id="foot-page">
            <div id="footer">
                <button id="social-media-button"> <img src={insta} height="30px" width="30px"/> </button>
                <button id="social-media-button"> <img src={facebook} height="30px" width="30px"/> </button>
                <button id="social-media-button"> <img src={twitter} height="30px" width="30px"/> </button>
                <button id="social-media-button"> <img src={youtube} height="30px" width="30px"/> </button>
            </div>

            {/* <div id="footer-links-div">

             <a id="footer-links" href="" > Terms </a> 
             <a id="footer-links" href="" > Help </a> 
             <a id="footer-links" href="" > Blog </a> 
             <a id="footer-links" href="" > Contact </a> 
                </div> */}
        </div>
        </>
    )
}

export default Footer