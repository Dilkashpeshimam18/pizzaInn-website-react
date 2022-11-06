import React from 'react'
import './Hero.css'
import Calories from '../resources/calories.png'
import Cheese from '../resources/cheese.png'
const Hero = () => {
    return (
        <div className='hero'>

            <div className='hero__Container'>
                <div className='hero__subContainer1'>
                    <h1 className='hero__Title'>Today's <span style={{ color: '#ffca40' }}>Special</span> </h1>
                    <h2 className='hero__Title2'> Pepperoni Pizza with Thin Crust</h2>
                    <p className='hero__subTitle'>
                        Get ready for a crispy crust and a delightful aroma that can only come from our Original Thin Crust pizza!
                        Crafted with our signature sauce and loaded with real mozzarella cheese and delicious pepperoni.

                    </p>
                    <div className='hero__iconWrapper'>
                        <div className='hero__icon'>
                            <img className='icon' src={Calories} />
                            <div className='hero__iconBody'>
                                <h5 className='icon__quantity'>450</h5>
                                <span className='icon__name'>Calories</span>

                            </div>
                        </div>
                        <div className='hero__icon'>
                            <img className='icon' src={Cheese} />
                            <div className='hero__iconBody'>
                                <h5 className='icon__quantity'>120g</h5>
                                <span className='icon__name'>Mozrella</span>

                            </div>
                        </div>
                    </div>
                    <div className='hero__buttonContainer'>
                        <button className='hero__button'>ORDER NOW</button>

                    </div>
                </div>
                <div className='hero__subContainer2'>
                    <img src='https://androthemes.com/themes/html/slices/assets/img/prods/3.png' alt='pizza' />

                </div>

            </div>

        </div>
    )
}

export default Hero