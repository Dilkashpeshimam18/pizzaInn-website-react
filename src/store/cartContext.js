import React, { createContext } from "react";


const CartContext = createContext({
    items: [],
    foodData: [],
    totalAmount: 0,
    addItem: (items) => { },
    removeItem: (items) => { },
    removeAll: () => { },
    numberOfItem: 0,
    incrementQuantity: (id) => { },
    decrementQuantity: (id) => { },
    searchFood: '',
    searchFoodItem: (currLocation) => { },
    isFilter: false

})

export default CartContext