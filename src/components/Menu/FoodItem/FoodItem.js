import React, { useState, useEffect, useContext } from 'react'
import './FoodItem.css'
import FoodCard from '../FoodCard/FoodCard'
import { Data } from '../FoodData/FoodData'
import CartContext from '../../../store/cartContext'


const FoodItem = ({ itemQuantity, setItemQuantity, searchFood, setSearchFood }) => {
    const { foodData, setFoodData, isFilter } = useContext(CartContext)
    useEffect(() => {
        if (isFilter != true) {
            let data = Data
            setFoodData(data)
        }



    }, [Data, isFilter])


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