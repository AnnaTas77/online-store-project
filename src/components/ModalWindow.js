import React from 'react';

const ModalWindow = () => {
    return (
        <aside className='modal-container'>
            <div className='modal-wrapper'>
                <div className='modal-question'>Remove all items from your shopping cart?</div>
                <div className='modal-buttons'>
                    <button type='button' className='modal-confirm button'>confirm</button>
                    <button type='button' className='modal-cancel button'>cancel</button>
                </div>
            </div>

        </aside>
    )
}

export default ModalWindow;