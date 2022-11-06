import React, { useState } from 'react'
import './CartContent.css'
import Divider from '@mui/material/Divider';


const CartContent = ({ name, price, img }) => {
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        if (quantity <= 4) {
            setQuantity(quantity + 1)
        }
    }

    const handleSubtract = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className='cart'>


            <div className='cart__body'>
                <div className='cart__body__sub'>
                    <img className='cart__body__img' src={img} />
                    <div className='cart__body__content'>
                        <span className='card__body__name'>{name}</span>
                        <span>Rs:{price}</span>

                    </div>
                    <div className='cart__body__quantity'>
                        <div onClick={handleSubtract} className='quantity__subtract'>
                            <span style={{ marginLeft: '12px' }}>-</span>
                        </div>
                        <div className='quantity'>
                            {quantity}
                        </div>

                        <div onClick={handleAdd} className='quantity__add'>
                            <span style={{ marginLeft: '9px' }}> +</span>
                        </div>
                    </div>
                    <div className='cart__body__total'>
                        <span className='cart__body__totalPrice'>Rs:{price}</span>
                        <span className='cart__body__totalRemove'>Remove</span>
                    </div>

                </div>

                <Divider />
            </div>

        </div>
    )
}

export default CartContent