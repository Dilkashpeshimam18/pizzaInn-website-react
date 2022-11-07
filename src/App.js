import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import TopHeader from './components/Header/TopHeader';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CartProvider from './store/CartProvider';

function App() {
  const [isPane, setIsPane] = useState(false)
  const [foodItems, setFoodItems] = useState([])
  const addFoodItems = (item) => {
    setFoodItems([...foodItems, item])
    console.log(foodItems)
  }

  return (
    <CartProvider>
      <div className="app">
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
        <TopHeader />
        <Header foodItems={foodItems} setIsPane={setIsPane} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu addFoodItems={addFoodItems} />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </div>
    </CartProvider>

  );
}

export default App;
