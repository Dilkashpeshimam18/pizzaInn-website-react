import React, { useState, useContext } from 'react'
import './Cart.css'
import CartContent from './CartContent'
import { Link } from 'react-router-dom'
import Order from '../Order/Order'
import CartContext from '../../store/cartContext'
const dummyData = [
    {
        id: 1,
        name: 'Margherita',
        description: 'Cheese',
        price: 180,
        image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=251'
    },
    {
        id: 2,
        name: 'Tandoori Paneer',
        description: 'Spiced paneer, Onion, Green Capsicum & Red Paprika in Tandoori Sauce',
        price: 200,
        image: 'https://carameltintedlife.com/wp-content/uploads/2021/09/paneer-pizza-recipe-1-2.jpg'
    }, {
        id: 3,
        name: 'Veggie Supreme',
        description: 'Black Olives, Green Capsicum, Mushroom, Onion, Red Paprika, Sweet Corn',
        price: 210,
        image: 'https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-overhead-sliced.png?resize=768%2C960&ssl=1'
    }, {
        id: 4,
        name: 'Chicken Supreme',
        description: 'Herbed Chicken, Schezwan Chicken Meatball, Chicken Tikka',
        price: 230,
        image: 'https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/chicken-supreme.6d53f104f071d304a47440f2fffa7378.1.jpg'
    },

]

const Cart = (props) => {
    const [isOrder, setIsOrder] = useState(false)
    const { items, totalAmount, removeAll } = useContext(CartContext)
    const numberOfItem = items.reduce((currNum, item) => {
        return currNum + item.quantity
    }, 0)
    let total = items.reduce((currAmount, item) => {
        return currAmount + item.price
    }, 0)
    const showOrder = () => {
        setIsOrder(true)
    }
    const closeOrder = () => {
        setIsOrder(false)
    }
    const closeCart = () => {
        props.setIsPane(false)
    }
    return (
        <div className='cart__container'>
            <div className='cart__header'>
                <h3 className='cart__title'>Your Cart</h3>
                <p onClick={removeAll} className='cart__remove'>Remove all</p>
            </div>
            <div className='cart__main'>
                {items.map((data, index) => {
                    return (
                        <CartContent key={index} id={data.id} name={data.name} price={data.price} img={data.img} />

                    )
                })}
            </div>

            <div className='cart__total'>
                <h3 className='cart__total__title'>Total</h3>
                <h2>Rs {total}</h2>
            </div>
            <div className='cart__buttons'>
                <button onClick={closeCart} className='cart__button'>Cancel</button>
                <button onClick={showOrder} className='cart__button'>Order</button>
                {isOrder == true && <Order onClose={closeOrder} />}

            </div>
        </div>
    )
}

export default Cart