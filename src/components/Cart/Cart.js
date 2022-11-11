import React, { useState, useContext } from 'react'
import './Cart.css'
import CartContent from './CartContent'
import { Link } from 'react-router-dom'
import Order from '../Order/Order'
import CartContext from '../../store/cartContext'


const Cart = (props) => {
    const [isOrder, setIsOrder] = useState(false)
    const { items, removeAll } = useContext(CartContext)

    let total = items.reduce((currAmount, item) => {
        return currAmount + item.price * item.quantity
    }, 0)
    const showOrder = () => {
        setIsOrder(true)
    }
    const closeOrder = () => {
        setIsOrder(false)
        removeAll()

    }
    const closeCart = () => {
        props.setIsPane(false)

    }


    return (
        <div className='cart__container'>
            <div className='cart__header'>
                {items.length == 0 ?
                    <h3 className='cart__title'>Your Cart Is Empty</h3> :
                    <><h3 className='cart__title'>Your Cart</h3>
                        <p onClick={removeAll} className='cart__remove'>Remove all</p></>
                }

            </div>
            <div className='cart__main'>
                {items.map((data, index) => {
                    return (
                        <CartContent key={index} id={data.id} name={data.name} price={data.price} img={data.img} quantity={data.quantity} />

                    )
                })}
            </div>

            <div className='cart__total'>
                <h3 className='cart__total__title'>Total</h3>
                <h2>Rs {total}</h2>
            </div>
            <div className='cart__buttons'>
                {items.length != 0 && <>
                    <button onClick={closeCart} className='cart__button'>Cancel</button>
                    <button onClick={showOrder} className='cart__button'>Order</button>
                    {isOrder == true && <Order onClose={closeOrder} />}
                </>}


            </div>
        </div>
    )
}

export default Cart