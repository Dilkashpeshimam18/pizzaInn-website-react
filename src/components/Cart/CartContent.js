import React, { useState, useEffect, useContext } from 'react'
import './CartContent.css'
import Divider from '@mui/material/Divider';
import CartContext from '../../store/cartContext';


const CartContent = ({ id, name, price, img, quantity }) => {
    const { removeItem } = useContext(CartContext)

    return (
        <div className='cart'>
            <div className='cart__body'>
                <div className='cart__body__sub'>
                    <img className='cart__body__img' src={img} />
                    <div className='cart__body__content'>
                        <span className='card__body__name'>{name}</span>
                        <span>Rs:{price}</span>

                    </div>

                    <div className='cart__quantityContainer'>
                        <span className='cart__body__quantityTitle' >Quantity</span>
                        <span className='cart__body__quantityTotal'>{quantity}</span>
                    </div>

                    <div className='cart__body__total'>
                        <span className='cart__body__totalPrice'>Rs:{price}</span>
                        <span onClick={() => {
                            removeItem(id)
                        }} className='cart__body__totalRemove'>Remove</span>
                    </div>

                </div>

                <Divider />
            </div>

        </div>
    )
}
export default CartContent