import React from 'react'
import CartContext from './cartContext'


const CartProvider = (props) => {
    const addItem = (items) => { }
    const removeItem = (items) => { }

    const cartValue = {
        items: [],
        totalAmount: 0,
        addItem: addItem,
        removeItem: removeItem
    }
    return (
        <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider