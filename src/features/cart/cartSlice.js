import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";
import axios from 'axios';
import swal from 'sweetalert';



const urlItems = 'https://course-api.com/react-useReducer-cart-project';
// const urlFakeStoreApi = 'https://fakestoreapi.com/products';

const initialState = {
    cartItems: [],
    amount: 4,
    totalPrice: 0,
    isLoading: true,
}


export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (thunkAPI) => {
        try {
            const resp = await axios(urlItems);

            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Something went wrong.');
        }
    }
);

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
                const productName = productToDecrease.title.charAt(0).toUpperCase() + productToDecrease.title.slice(1)
                swal(`${productName} has been removed from the cart.`);
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
    },

    extraReducers: {
        [fetchCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchCartItems.fulfilled]: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [fetchCartItems.rejected]: (state, action) => {
            console.log(action);
            state.isLoading = false;
        },
    }
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;

export default cartSlice.reducer;