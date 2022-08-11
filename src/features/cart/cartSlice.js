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

        },

        decrease: (state, action) => {
            const productToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (productToDecrease.amount > 1) {
                productToDecrease.amount -= 1;

            } else {
                state.cartItems = state.cartItems.filter(item => item.id !== productToDecrease.id);
                alert(`${productToDecrease.title} has been removed from the cart.`)
            }
        },

        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })

            state.amount = amount;
            state.totalPrice = total;
        }
    }
});

console.log('cartSlice.js: ', cartSlice)

export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;