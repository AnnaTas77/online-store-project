import React from 'react';
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux';

const Navbar = () => {
    // const {amount} = useSelector((state) => state.cart)
    const amount = useSelector((state) => state.cart.amount)



    return (
        <nav>
            <div className='navbar-main'>
                <h3>Navbar</h3>
                <div className='nav-container'>
                    <CartIcon />
                    <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default Navbar;