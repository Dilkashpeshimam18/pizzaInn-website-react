import React, { useContext, useState } from 'react'
import CartContext from './cartContext'


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    // const { items } = useContext(CartContext)

    const addItem = (item) => {
        setItems((prevItem) => {
            let updatedItems = [...prevItem]
            updatedItems.push(item)
            return updatedItems
        })


        console.log(items)
    }
    const removeAll = () => {
        setItems([])
    }
    const removeItem = (items) => { }

    const cartValue = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        removeAll: removeAll
    }
    return (
        <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider