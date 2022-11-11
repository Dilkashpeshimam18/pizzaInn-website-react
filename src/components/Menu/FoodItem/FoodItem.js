import React, { useState, useEffect } from 'react'
import './FoodItem.css'
import FoodCard from '../FoodCard/FoodCard'
import { Data } from '../FoodData/FoodData'


const FoodItem = ({ itemQuantity, setItemQuantity }) => {
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        let data = Data
        setFoodData(data)

    }, [Data])


    return (
        <div className='foodItem'>
            {foodData.map((data, index) => {
                return (
                    <FoodCard itemQuantity={itemQuantity} setItemQuantity={setItemQuantity} key={index} id={data.id} name={data.name} price={data.price} description={data.description} img={data.image} quantity={data.quantity} />
                )
            })}

        </div>

    )
}

export default FoodItem