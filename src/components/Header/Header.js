import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Cart from '../Cart/Cart';

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
                    <SearchOutlinedIcon style={{ fontSize: '23px' }} />

                    {/* <Link to='/menu' style={{ textDecoration: 'none' }}><button className='navLink__button'>Order Now</button></Link> */}
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
                <Cart setIsPane={setIsPane} />
            </SlidingPane>

        </div>
    )
}

export default Header