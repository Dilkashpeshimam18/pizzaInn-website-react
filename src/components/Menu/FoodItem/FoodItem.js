import React, { useState, useEffect } from 'react'
import './FoodItem.css'
import FoodCard from '../FoodCard/FoodCard'

import { Data } from '../FoodData/FoodData'


const FoodItem = () => {
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        let data = Data
        setFoodData(data)
        console.log(foodData)

    }, [Data])


    return (
        <div className='foodItem'>
            {foodData.map((data) => {
                return (
                    <FoodCard key={data.id} name={data.name} price={data.price} description={data.description} img={data.image} />
                )
            })}

        </div>
    )
}

export default FoodItem