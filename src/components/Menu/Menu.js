import React from 'react'
import FoodItem from './FoodItem/FoodItem'
import { motion } from 'framer-motion'

const Menu = () => {
    return (
        <motion.div className='menu'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0, transition: { duration: 0.1 } }}
            transition={{ duration: 0.8 }}>
            <div className='menu__body'>
                <FoodItem />
            </div>
        </motion.div>
    )
}

export default Menu