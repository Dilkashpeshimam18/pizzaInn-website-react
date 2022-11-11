import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../components/Home/Home'
import Menu from '../components/Menu/Menu'
import Contact from '../components/Contact/Contact'



const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default AnimatedRoutes