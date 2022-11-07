import React from 'react'
import Header from '../Header/Header'
import TopHeader from '../Header/TopHeader'
import FoodItem from './FoodItem/FoodItem'

const Menu = ({ addFoodItems }) => {
    return (
        <div className='menu'>
            <div className='menu__body'>
                <FoodItem addFoodItems={addFoodItems} />
            </div>
        </div>
    )
}

export default Menu