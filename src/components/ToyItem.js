import React from "react"

const ToyItem = ({toy, index, onImageClick}) => {

    const handleClick = () => {
        onImageClick(toy)
    }
    
    
    
        return (
    
            <>
            <section id="container">
            <div id="item">
                
                <button> 
                    <img id="image" onClick={handleClick} src={toy.image} width="200px" height="200px" /> 
                </button>
                <div id="selector">
                <p onClick={handleClick}> {toy.name} </p>
                <p> {toy.price} </p>
                
                </div>
            </div>
            </section>
            
            </>
        )
    }

export default ToyItem