import React, { createContext } from "react";


const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: (items) => { },
    removeItem: (items) => { },
    removeAll: () => { }
})

export default CartContext