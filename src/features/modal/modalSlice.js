import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
}


const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        confirmModal: (state, action) => {
            state.isOpen = true;
        },

        closeModal: (state, action) => {
            state.isOpen = false;
        },

    }
})

console.log('modalSlice.js: ', modalSlice)

export default modalSlice.reducer;

export const { confirmModal, closeModal } = modalSlice.actions;

