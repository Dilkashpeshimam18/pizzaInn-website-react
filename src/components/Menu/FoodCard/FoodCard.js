import React from 'react'
import './FoodCard.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const FoodCard = ({ key, name, img, description, price }) => {
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
                    <button className='card__button'>Add to Cart </button>

                </div>
            </div>

        </div>
    )
}

export default FoodCard