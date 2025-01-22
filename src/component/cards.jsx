import React from 'react'
import './cards.css'
const cards = (props) => {
    return (
        <div className='outer'>
            
            <div className='image-div'>
               
                <img src={props.image} alt="pokemon img" />
            </div>
            
            <div className='name'>
                <h6>{props.name}</h6>
            </div>
            
            <div className='height-weight-speed'>
               
               <div className='height'>
                <p>{props.height}</p>
                <h5>Height</h5>
               </div>
               
               <div className='height'>
               <p>{props.weight}</p>
               <h5>Weight</h5>
               </div>
               
               <div className='height'>
               <p>{props.speed}</p>
               <h5>Speed</h5>
               </div>

            </div>
           
            <div className ='expeirence-attack-abilities'>
               
               <div className='height'>
                <p>{props.base_experience}</p>
                <h5>Expeirence</h5>
               </div>
               
               <div className='height'>
               <p>{props.attack}</p>
               <h5>Attack</h5>
               </div>
               
               <div className='height'>
               <p>{props.ability}</p>
               <h5>Abilities</h5>
               </div>

            </div>

        </div>
    )
}

export default cards
