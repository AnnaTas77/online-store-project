import React from 'react';
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux';
import Logo from '../assets/logo_icon.svg'

const Navbar = () => {
    // const {amount} = useSelector((state) => state.cart)
    const amount = useSelector((state) => state.cart.amount)

    return (
        <nav>
            <div className='navbar-main'>
                <div className='navbar-info'>
                    <img src={Logo} alt="Logo icon" />
                    <h3>Anna's Online Store</h3>
                </div>

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