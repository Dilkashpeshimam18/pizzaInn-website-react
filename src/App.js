import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';
import TopHeader from './components/Header/TopHeader';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import CartProvider from './store/CartProvider';
import AnimatedRoutes from './routes/AnimatedRoutes';


function App() {
  const [isPane, setIsPane] = useState(false)


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
            setIsPane(false)
          }}
        >
          <Cart setIsPane={setIsPane} />
        </SlidingPane>
        <TopHeader />
        <Header setIsPane={setIsPane} />
        <AnimatedRoutes />

      </div>
    </CartProvider>

  );
}

export default App;
