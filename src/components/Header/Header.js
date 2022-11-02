import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <h4>SPEEDY SPICE</h4>
            </div>
            <div className='header__right'>
                <div className='navLink__container'>
                  <Link to='/'  style={{ textDecoration: 'none' }}> <p className='navLink'>HOME</p></Link> 
                </div>
                <div className='navLink__container'>
                    <Link to='/menu'  style={{ textDecoration: 'none' }}><p className='navLink'>MENU</p></Link>
                </div>
                <div className='navLink__container'>
                    <Link to='/about'  style={{ textDecoration: 'none' }}><p className='navLink'>ABOUT</p></Link>
                </div>
                <div className='navLink__container'>
                    <Link to='/contact'  style={{ textDecoration: 'none' }}><p className='navLink'>CONTACT</p></Link>
                </div>
                <div className='navLink__container button-cotainer'>
                  <Link to='/menu'  style={{ textDecoration: 'none' }}><button className='navLink__button'>Order Now</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Header