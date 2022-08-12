import React from 'react';
import CartItem from './CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { confirmModal } from '../features/modal/modalSlice';


const CartContainer = () => {

    const { cartItems, totalPrice, amount } = useSelector(
        (state) => state.cart
        //implicit return
    )
    const dispatch = useDispatch();


    if (amount < 1) {
        return (
            <section>
                <header className='empty-cart'>
                    <h2> Your cart </h2>
                    <h4 >is currently empty</h4>
                </header>
            </section>
        )
    }

    return (
        <section className='cart'>
            <header className='cart-header'>
                <h2>Your cart</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    // console.log('Item object:', item)
                    return <CartItem key={item.id} {...item} />
                    //{...item} - passing the rest of the properties
                })}
            </div>
            <footer className='cart-footer'>
                <div className="cart-total">
                    <h4>
                        Total: <span>£{totalPrice.toFixed(2)}</span>
                    </h4>
                </div>
                <button className='clear-button' onClick={() => dispatch(confirmModal())}>Clear Cart</button>
            </footer>
        </section>
    );

}

export default CartContainer