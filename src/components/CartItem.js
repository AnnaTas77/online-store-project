import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux/es/exports'

const CartItem = ({ id, img, title, price, amount }) => { //destructuring props passed from CartContainer;

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItem(id))
    }

    const amountUp = () => {
        dispatch(increase(id))
    }

    const amountDown = () => {
        dispatch(decrease(id))
    }

    return (

        <article className='cart-item'>
            <img src={img} alt={title} />

            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>£{price}</h4>
                <button className='remove-button' onClick={handleRemove}>remove</button>
            </div>

            <div>
                <button className='amount-up' onClick={amountUp}>
                    <ChevronUp />
                </button>

                <p className='amount'>{amount}</p>

                <button className='amount-down' onClick={amountDown} >
                    <ChevronDown />
                </button>
            </div>

        </article>
    )
}

export default CartItem;