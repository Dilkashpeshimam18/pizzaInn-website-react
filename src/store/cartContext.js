import React, { createContext } from "react";


const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (items) => { },
    removeItem: (items) => { },
    removeAll: () => { },
    numberOfItem: 0,

})

export default CartContext