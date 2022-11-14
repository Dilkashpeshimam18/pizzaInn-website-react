import React, { useState, useContext, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CartContext from '../../store/cartContext';
import SearchBox from '../SearchBox/SearchBox';


const Header = ({ setIsPane }) => {
    const { items, addItem, numberOfItem, setNumberOfItem } = useContext(CartContext)
    const [totalCart, setTotalCart] = useState(0);
    const [showSearch, setShowSearch] = useState(false)


    const handleClickOpen = () => {
        setShowSearch(true);
    };

    const handleClose = () => {
        setShowSearch(false);
    };


    const quantity = items.reduce((currNum, item) => {
        return currNum + item.quantity

    }, 0)
    localStorage.setItem('quantity', quantity)
    useEffect(() => {

        setNumberOfItem(quantity)
        localStorage.setItem('totalCart', numberOfItem)
        let value = localStorage.getItem('totalCart')
        setTotalCart(value)


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

                {/* <div className='navLink__container'>
                    <Link to='/contact' style={{ textDecoration: 'none' }}><p className='navLink'>CONTACT</p></Link>
                </div> */}
                <div onClick={() => setIsPane(true)} style={{ marginTop: '15px', cursor: 'pointer' }} className='navLink__container'>
                    <ShoppingCartIcon />
                </div>

                <div style={{ marginTop: '15px', cursor: 'pointer' }} className='navLink__container'>
                    {totalCart}
                </div>
                <div onClick={handleClickOpen} style={{ cursor: 'pointer' }} className='navLink__container button-cotainer'>
                    <SearchOutlinedIcon style={{ fontSize: '23px' }} />

                </div>
                {showSearch && <SearchBox showSearch={showSearch} handleClose={handleClose} />}
            </div>


        </div>
    )
}

export default Header