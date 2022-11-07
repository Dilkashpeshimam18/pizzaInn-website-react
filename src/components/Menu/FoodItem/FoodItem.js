import React, { useState, useEffect } from 'react'
import './FoodItem.css'
import FoodCard from '../FoodCard/FoodCard'

import { Data } from '../FoodData/FoodData'


const FoodItem = ({ addFoodItems }) => {
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        let data = Data
        setFoodData(data)

    }, [Data])


    return (
        <div className='foodItem'>
            {foodData.map((data, index) => {
                return (
                    <FoodCard key={index} id={data.id} name={data.name} price={data.price} description={data.description} img={data.image} addFoodItems={addFoodItems} />
                )
            })}

        </div>
    )
}

export default FoodItem