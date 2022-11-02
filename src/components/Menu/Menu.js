import React from 'react'
import Header from '../Header/Header'
import FoodItem from './FoodItem/FoodItem'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='home__header'>
                <Header />
            </div>
            <div className='menu__body'>
                <FoodItem />
            </div>
        </div>
    )
}

export default Menu