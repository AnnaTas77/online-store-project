import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems"

const initialState = {
    cartItems: cartItems,
    amount: 4,
    totalPrice: 0,
    isLoading: true,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            // console.log('action Remove: ', action)
            state.cartItems = state.cartItems.filter(item => item.id !== itemId);
        },

        increase: (state, action) => {
            console.log('action Increase: ', action);
            const productToIncrease = state.cartItems.find(item => item.id === action.payload);
            productToIncrease.amount += 1;
            state.amount += 1;
        },

        decrease: (state, action) => {
            const productToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (productToDecrease.amount > 1) {
                productToDecrease.amount -= 1;
                state.amount -= 1;
            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== productToDecrease.id);
                state.amount -= 1;
                alert(`${productToDecrease.title} has been removed from the cart.`)
            }
        }
    }
});

console.log('cartSlice: ', cartSlice)

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;