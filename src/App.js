import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import ModalWindow from './components/ModalWindow';

import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../src/features/cart/cartSlice';
import { useEffect } from 'react';

function App() {

  const { cartItems } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems])

  return (
    <main className="app-container">
      {isOpen && <ModalWindow />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
