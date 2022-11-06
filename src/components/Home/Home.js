import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import TopHeader from '../Header/TopHeader'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__top__header'>
        <TopHeader />
      </div>
      <div className='home__header'>
        <Header />
      </div>
      <div className='home__main'>
        <Hero />
      </div>
    </div>
  )
}

export default Home