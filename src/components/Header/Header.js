import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <h4>SPEEDY SPICE</h4>
            </div>
            <div className='header__right'>
                <div className='navLink__container'>
                    <p className='navLink'>HOME</p>
                </div>
                <div className='navLink__container'>
                    <p className='navLink'>MENU</p>
                </div>
                <div className='navLink__container'>
                    <p className='navLink'>ABOUT</p>
                </div>
                <div className='navLink__container'>
                    <p className='navLink'>CONTACT</p>
                </div>
                <div className='navLink__container button-cotainer'>
                  <button className='navLink__button'>Order Now</button>
                </div>
            </div>

        </div>
    )
}

export default Header