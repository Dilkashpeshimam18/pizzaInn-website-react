import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../components/Home/Home'
import Menu from '../components/Menu/Menu'
import Contact from '../components/Contact/Contact'
import { AnimatePresence } from 'framer-motion'


const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                {/* <Route path='/contact' element={<Contact />} /> */}
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes