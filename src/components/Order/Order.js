import React from 'react'
import Modal from '../Modal/Modal'
import './Order.css'
import SuccessIcon from '../resources/check.png'

const Order = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div className='order__container'>
                <img style={{ height: '180px', width: '180px', paddingLeft: '45px', marginTop: '5px' }} src={SuccessIcon} alt='Order Successful' />
                <h1 style={{ fontSize: '35px' }}>Order Successful</h1>
            </div>

        </Modal>
    )
}

export default Order