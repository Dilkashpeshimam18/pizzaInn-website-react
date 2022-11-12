import React, { useState, useEffect } from 'react'
import CartContext from './cartContext'


const CartProvider = (props) => {

    const [items, setItems] = useState(() => {
        return JSON.parse(localStorage.getItem('allItems')) || []
    })
    const [totalAmount, setTotalAmount] = useState(0)
    const [numberOfItem, setNumberOfItem] = useState(0)


    useEffect(() => {
        localStorage.setItem('allItems', JSON.stringify(items))

    }, [items])

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

    const incrementQuantity = (id) => {
        let existingItemIndex = items.findIndex(ele => ele.id === id)
        let existingItem = items[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity

        if (existingItem) {

            if (currQuantity <= 4) {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity + 1
                }
            } else {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity
                }
            }

            setItems((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })

        }

    }
    const decrementQuantity = (id) => {
        let existingItemIndex = items.findIndex(ele => ele.id === id)
        let existingItem = items[existingItemIndex]
        let updatedItem;
        let updatedItems
        let currQuantity = existingItem.quantity
        if (existingItem) {
            if (currQuantity <= 1) {
                updatedItem = {
                    ...existingItem,
                    quantity: 1
                }
            } else {
                updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity - 1
                }
            }

            setItems((prevItem) => {
                updatedItems = [...prevItem]
                updatedItems[existingItemIndex] = updatedItem
                return updatedItems
            })

        }


    }

    const cartValue = {
        items: items,
        totalAmount: totalAmount,
        addItem: addItem,
        removeItem: removeItem,
        removeAll: removeAll,
        numberOfItem: numberOfItem,
        setNumberOfItem: setNumberOfItem,
        incrementQuantity: incrementQuantity,
        decrementQuantity: decrementQuantity

    }
    return (
        <CartContext.Provider value={cartValue}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider