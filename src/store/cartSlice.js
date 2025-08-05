import { v4 as uuid } from 'uuid';
const { createSlice } = require('@reduxjs/toolkit');

// Load cart from localStorage on initial load
const loadCartFromLocalStorage = () => {
    try {
        const serializedCart = localStorage.getItem('cart');
        return serializedCart ? JSON.parse(serializedCart) : [];
    } catch (e) {
        console.error('Could not load cart from localStorage', e);
        return [];
    }
};

// Save cart to localStorage
const saveCartToLocalStorage = (cart) => {
    try {
        const serializedCart = JSON.stringify(cart);
        localStorage.setItem('cart', serializedCart);
    } catch (e) {
        console.error('Could not save cart to localStorage', e);
    }
};
 

const cartSlice = createSlice({
    name: 'cart',
    // initialState: [],
    
    initialState: loadCartFromLocalStorage,
    reducers: {
        add(state, action) {
            const newProduct = {
                id:uuid(),
                prod:action.payload
            }
            // state.push(newProduct);
            const updatedCart = [...state, newProduct];
            saveCartToLocalStorage(updatedCart);
            return updatedCart;
        },
        remove(state, action) {
            const updatedCart =  state.filter((item) => item.id !== action.payload);
                   saveCartToLocalStorage(updatedCart);
            return updatedCart;
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
