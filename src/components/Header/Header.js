import React, { useState, useContext, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CartContext from '../../store/cartContext';

const Header = ({ setIsPane }) => {
    const { items, addItem, numberOfItem, setNumberOfItem } = useContext(CartContext)
    let cartVal;
    const quantity = items.reduce((currNum, item) => {
        return currNum + item.quantity

    }, 0)
    useEffect(() => {

        setNumberOfItem(quantity)
    }, [items, addItem])
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
                    {/* {items.length} */}
                    {numberOfItem}
                </div>
                <div className='navLink__container button-cotainer'>
                    <SearchOutlinedIcon style={{ fontSize: '23px' }} />

                    {/* <Link to='/menu' style={{ textDecoration: 'none' }}><button className='navLink__button'>Order Now</button></Link> */}
                </div>
            </div>


        </div>
    )
}

export default Header