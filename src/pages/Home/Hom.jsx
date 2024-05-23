import React, { useState } from 'react'
import './Hom.css'
import Header from '../../Components/Header/Header'
import Exploremenu from '../../Components/Exploremenu/Exploremenu'
import Fooddisplay from '../../Components/fooddisplay/fooddisplay'




const Hom = () => {
  
  const[category,setCategory] = useState("All");
  return (
    <div className='bg'>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory}/>
        <Fooddisplay category={category} />
   
    </div>
  )
}

export default Hom
