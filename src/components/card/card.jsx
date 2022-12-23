import React from 'react'
import '../card/card.css'



const card = ({emoji,heading,details,color}) => {
  return (
    <div className='card' style={{borderColor:{color}}}>

        <img className='emoji' src={emoji} alt=" " />
        <span>{heading}</span>
        <span>{details}</span>
        <button  className="c-button"  > <a href="https://www.ibm.com/topics/software-development" target="blank">Learn More</a> </button>
      
    </div>
    
    
  )
}

export default card
