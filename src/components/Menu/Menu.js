import React from 'react'
import Header from '../Header/Header'
import TopHeader from '../Header/TopHeader'
import FoodItem from './FoodItem/FoodItem'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu__body'>
                <FoodItem />
            </div>
        </div>
    )
}

export default Menu