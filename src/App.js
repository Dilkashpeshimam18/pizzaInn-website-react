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

function App() {
  const [isPane, setIsPane] = useState(false)

  return (
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
      <Header setIsPane={setIsPane} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
