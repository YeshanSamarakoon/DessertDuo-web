import React, { useState } from 'react'
import './fooditem.css'
import { assets } from '../../assets/assets'

const Fooditem = ({id,name,description,price,image}) => {

    const {itemCount,setItemCount} = useState(0)

  return (
    <div className='food-item'>
        <div>
            <img className='food-item-image' src={image} alt=""/>
            {!itemCount
                ?<img className='add' onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=""/>
                :<div className="food-item-counter">

                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}  alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>

  )
}

export default Fooditem
