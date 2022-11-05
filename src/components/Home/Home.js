import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import TopHeader from '../Header/TopHeader'

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
      </div>
    </div>
  )
}

export default Home