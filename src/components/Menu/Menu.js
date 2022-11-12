import React from 'react'
import FoodItem from './FoodItem/FoodItem'
import { motion } from 'framer-motion'

const Menu = ({ searchFood, setSearchFood }) => {
    return (
        <motion.div className='menu'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.5 }}>
            <div className='menu__body'>
                <FoodItem searchFood={searchFood} setSearchFood={setSearchFood} />
            </div>
        </motion.div>
    )
}

export default Menu