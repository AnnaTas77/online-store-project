import React from 'react';
import { closeModal } from '../features/modal/modalSlice';
import { clearCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';



const ModalWindow = () => {

    const dispatch = useDispatch();

    return (
        <aside className='modal-container'>
            <div className='modal-wrapper'>
                <div className='modal-question'>Remove all items from your shopping cart?</div>
                <div className='modal-buttons'>
                    <button
                        type='button'
                        className='modal-confirm button'
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                        }}
                    >confirm</button>

                    <button
                        type='button'
                        className='modal-cancel button'
                        onClick={() => {
                            dispatch(closeModal());
                        }}
                    >cancel</button>
                </div>
            </div>

        </aside>
    )
}

export default ModalWindow;