import React from 'react'
import './TopHeader.css'
import { Link } from 'react-router-dom'
const TopHeader = () => {
    return (
        <div className='top__header'>
            <div className='container'>
                <div className='top__header__inner'>


                    <Link style={{ textDecoration: 'none' }} to='/menu'><button className='top__header__button'>Order Now</button></Link>

                </div>
            </div>

        </div>
    )
}

export default TopHeader