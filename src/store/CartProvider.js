import React, { useContext, useState, useReducer } from 'react'
import CartContext from './cartContext'


const CartProvider = (props) => {
    const [items, setItems] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [numberOfItem, setNumberOfItem] = useState(0)

    const addItem = (item) => {
        let existingItemIndex = items.findIndex(ele => ele.id === item.id)
        let existingItem = items[existingItemIndex]
        let updatedItem;
        let updatedItems
        if (existingItem) {

            updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + item.quantity
            }

            setItems((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })
            console.log('updated item')

        } else {
            setItems((prevItem) => {
                let updatedItems = [...prevItem]
                updatedItems.push(item)
                return updatedItems
            })
            console.log('added new item')
        }





        console.log(items)
    }
    const removeAll = () => {
        setItems([])
    }
    const removeItem = (id) => {
        let filterItem = items.filter((item) => {
            return item.id != id
        })
        setItems(filterItem)

    }


    const cartValue = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        removeAll: removeAll,
        numberOfItem: numberOfItem,
        setNumberOfItem: setNumberOfItem

    }
    return (
        <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider