import { createSlice } from "@reduxjs/toolkit"

const cart = createSlice ({
    name: "chart",
    initialState: {
        items: []
    },
    reducers: {
        addItem(state,action) {
            state.items.push(action.payload);
            console.log("In slice==", state.items)
        },
        removeItem(state,action) {
            state.items.pop();
        },
        clearCart(state,action) {
            console.log("Clear called in store slice")
            state.items = [];
        }
    }
});

export const { addItem, removeItem, clearCart } = cart.actions;

export default cart.reducer;