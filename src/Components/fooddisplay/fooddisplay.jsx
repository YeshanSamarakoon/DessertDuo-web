import React from 'react'
import './fooddisplay.css'
import { useContext } from 'react'
import { storecontext } from '../../context/storecontext'
import Fooditem from '../fooditem/fooditem'

const Fooddisplay = ({category}) => {

    const {food_list} = useContext(storecontext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Best Dessert & Sweets for you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
           return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />     

            })}
        </div>
    </div>
  )
}

export default Fooddisplay
