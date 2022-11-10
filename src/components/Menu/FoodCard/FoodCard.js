import React, { useContext, useEffect, useState } from 'react'
import './FoodCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../../store/cartContext';


const FoodCard = ({ id, name, img, description, price, addFoodItems }) => {
    const [quantity, setQuantity] = useState(1)

    const { items, addItem } = useContext(CartContext)


    let cart;
    const handleAdd = (id) => {
        if (id == id && quantity <= 4) {
            setQuantity((prev) => prev + 1)



        }
        for (let val of items) {
            if (val.id == id) {
                val.quantity = quantity
            }
        }

    }





    const handleSubtract = () => {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
            for (let val of items) {
                if (val.id == id) {
                    val.quantity = quantity
                }
            }
        }
    }



    return (
        <div className='foodCard'>
            <div className='foodCard__img'>
                <img className='card__img' src={img} />
            </div>
            <div className='foodCard__body'>
                <div className='foodCard__title'>
                    {name}
                </div>
                <div className='foodCard__desc'>
                    {description}-     <div className='foodCard__price'>Rs:{price} </div>
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
                <div className='foorCart__button'>
                    <button onClick={() => {

                        addItem({
                            id: id,
                            name: name,
                            img: img,
                            description: description,
                            price: price,
                            quantity: quantity

                        })
                        setQuantity(1)
                    }} className='card__button'>Add to Cart </button>

                </div>
            </div>

        </div>
    )
}

export default FoodCard