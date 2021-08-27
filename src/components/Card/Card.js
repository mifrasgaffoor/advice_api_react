import React from 'react'
import './Card.css'

const Card = ({advice,handleClick}) => {
    return (
        <div  className="card">
           <h1>{advice}</h1>
           <button  className="button"  onClick={handleClick}  ><span>give me to advice</span></button>
        </div>
    )
}

export default Card
