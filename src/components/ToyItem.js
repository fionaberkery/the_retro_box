import React from "react"

const ToyItem = ({toy, index, onImageClick}) => {

    const handleClick = () => {
        onImageClick(toy)
    }
    
    
    
        return (
    
            <>
            
                
                <div id="item">
                
                    <button id="image"> 
                        <img onClick={handleClick} src={toy.image} width="300px" height="300px" /> 
                    </button>
                    
                    <div id="selector">
                        <p onClick={handleClick}> {toy.name} </p>
                        <p> {toy.price} </p>
                    </div>
                
                </div>
            
            
            
            </>
        )
    }

export default ToyItem