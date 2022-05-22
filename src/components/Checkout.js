import React from "react"

const Checkout = () => {

    return (

        <>
        <div id="check-out-page">
            
            <h1> SECURE CHECKOUT </h1><br></br><br></br>
            
            
            

            <div id="sign-in-form">
                <h2> I have a Retro-box account </h2>
                <p> Welcome back, login below </p>
                <form>
                    <b><label> Username </label></b><br></br>
                    <input type="text"/><br></br><br></br>
                    <b><label> Password </label></b><br></br>            
                    <input type="text"/><br></br><br></br>                    
                </form>
                <a href="" id="forgot-password"> Forgot password </a><br></br><br></br>
                <button id="checkout-button2"> LOG IN AND CHECKOUT </button>
            </div>

            <div id="new-user-form">
                <h2> Guest Checkout </h2>
                <p> Quickly checkout as a guest </p>
                <form>
                    <b><label> Email </label></b><br></br>
                    <input type="text"/><br></br><br></br>
                    <button id="checkout-button2"> CHECKOUT </button>
                </form>


            </div>
            </div>
        </>
    )
}

export default Checkout