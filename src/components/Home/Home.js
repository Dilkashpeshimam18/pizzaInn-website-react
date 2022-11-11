import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div className='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 3 }}
      transition={{ duration: 1.5, ease: 'easeIn' }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <div className='home__main'>
        <Hero />
      </div>
    </motion.div>
  )
}

export default Home