import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Cart from '../Cart/Cart';
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

const Header = () => {
    const [isPane, setIsPane] = useState(false)
    return (
        <div className='header'>
            <div className='header__left'>
                <h4>PIZZA INN</h4>
            </div>
            <div className='header__right'>
                <div className='navLink__container'>
                    <Link to='/' style={{ textDecoration: 'none' }}> <p className='navLink'>HOME</p></Link>
                </div>
                <div className='navLink__container'>
                    <Link to='/menu' style={{ textDecoration: 'none' }}><p className='navLink'>MENU</p></Link>
                </div>

                <div className='navLink__container'>
                    <Link to='/contact' style={{ textDecoration: 'none' }}><p className='navLink'>CONTACT</p></Link>
                </div>
                <div onClick={() => setIsPane(true)} style={{ marginTop: '15px', cursor: 'pointer' }} className='navLink__container'>
                    <ShoppingCartIcon />
                </div>

                <div style={{ marginTop: '15px', cursor: 'pointer' }} className='navLink__container'>
                    0
                </div>
                <div className='navLink__container button-cotainer'>
                    <Link to='/menu' style={{ textDecoration: 'none' }}><button className='navLink__button'>Order Now</button></Link>
                </div>
            </div>
            <SlidingPane
                className="some-custom-class"
                overlayClassName="some-custom-overlay-class overlay"
                isOpen={isPane}
                title="PIZZA INN."
                hideHeader={true}
                width="600px"

                onRequestClose={() => {
                    // triggered on "<" on left top click or on outside click
                    setIsPane(false)
                }}
            >
                <div className='cart__container'>
                    <div className='cart__header'>
                        <h3 className='cart__title'>Your Cart</h3>
                        <p className='cart__remove'>Remove all</p>
                    </div>
                    <div className='cart__main'>
                        {dummyData.map((data) => {
                            return (
                                <Cart key={data.id} name={data.name} price={data.price} img={data.image} />

                            )
                        })}
                    </div>

                    <div className='cart__total'>
                        <h3 className='cart__total__title'>Total</h3>
                        <h2>Rs 720.00</h2>
                    </div>
                    <div className='cart__buttons'>
                        <button className='cart__button'>Cancel</button>
                        <button className='cart__button'>Order</button>

                    </div>
                </div>
            </SlidingPane>

        </div>
    )
}

export default Header