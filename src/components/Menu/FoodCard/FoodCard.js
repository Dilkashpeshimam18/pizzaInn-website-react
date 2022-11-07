import React, { useContext, useEffect } from 'react'
import './FoodCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../../../store/cartContext';


const FoodCard = ({ id, name, img, description, price, addFoodItems }) => {
    const { items, addItem } = useContext(CartContext)
    useEffect(() => {
        // console.log(items)

    }, [])
    let item = {

        name: name,
        img: img,
        description: description,
        price: price
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
                <div className='foorCart__button'>
                    <button onClick={() => {
                        addItem({
                            id: id,
                            name: name,
                            img: img,
                            description: description,
                            price: price
                        })
                    }} className='card__button'>Add to Cart </button>

                </div>
            </div>

        </div>
    )
}

export default FoodCard